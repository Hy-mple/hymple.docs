# Arquitetura de Feed de Preços em Tempo Real

## Visão Geral

Este documento descreve a arquitetura para cálculo de preços de ativos em tempo real, agregação e distribuição para clientes frontend. O sistema fornece atualizações de preços em subsegundos, estatísticas de mercado (OHLCV) e informações de ticker para todos os pares de negociação.

## Diagrama Arquitetural do Feed de Preços

```mermaid
flowchart TD
    %% Fonte de Execução de Trades
    OrderBook[Order Book Engine<br/>C#] -->|Trade + Depth Events| UpdateTopic[(orders.update<br/>Kafka Topic)]
    
    %% Serviços de Agregação
    UpdateTopic -->|TRADE Events| PriceAgg[Market Aggregator<br/>Golang<br/>In-Memory]
    UpdateTopic -->|DEPTH Events| DepthAgg[Depth Aggregator<br/>Golang<br/>Order Book State]
    
    PriceAgg -->|Calculate| PriceCalc[Cálculos:<br/>Último Preço, OHLCV,<br/>Volume, Variação %,<br/>Book Ticker BBO]
    
    DepthAgg -->|Maintain| DepthState[Order Book State:<br/>Snapshot + Deltas,<br/>Best Bid/Ask,<br/>Depth Levels]
    
    PriceCalc -->|Publish| MarketTopic[(market.data<br/>Kafka Topic)]
    DepthState -->|Publish| DepthTopic[(market.depth<br/>Kafka Topic)]
    
    PriceCalc -->|Update| RedisCache[(Redis Cache<br/>L1: Hot Data<br/>Ticker, BBO, Trades<br/>TTL: 1s)]
    DepthAgg -->|Update| RedisCache
    
    %% Serviços de Streaming
    MarketTopic -->|Consume| StreamService[Market Stream<br/>Golang WebSocket<br/>Multi-Channel]
    DepthTopic -->|Consume| StreamService
    
    RedisCache -->|Read Hot Data| StreamService
    
    %% Conexões Frontend com Canais
    StreamService -->|ticker@symbol<br/>trades@symbol<br/>kline@symbol| Frontend1[🖥️ Frontend 1<br/>React/Vue/Angular]
    StreamService -->|depth@symbol<br/>bookTicker@symbol<br/>!ticker@all| Frontend2[🖥️ Frontend 2]
    StreamService -->|aggTrade@symbol<br/>miniTicker@symbol| FrontendN[🖥️ Frontend N]
    
    %% API REST para Dados Históricos
    RestAPI[Market Data API<br/>Golang gRPC<br/>HTTP Gateway] -->|Read Cache| RedisCache
    RestAPI -->|Query Historical| TimeSeriesDB[(TimescaleDB<br/>OHLCV, Trades,<br/>Order Book Snapshots)]
    
    Frontend1 -->|REST Queries| RestAPI
    Frontend2 -->|REST Queries| RestAPI
    
    %% Persistência
    PriceAgg -->|Store Aggregated| TimeSeriesDB
    DepthAgg -->|Store Snapshots| TimeSeriesDB
    
    %% Gerenciamento Avançado
    StreamService -->|Advanced Mgmt| ConnMgr[Connection Manager<br/>Channel Subscriptions<br/>Heartbeat + Reconnect<br/>Rate Limit + Throttle<br/>Compression]
    
    %% Styling
    classDef sourceStyle fill:#9B59B6,stroke:#6C3483,stroke-width:2px,color:#fff
    classDef processingStyle fill:#3498DB,stroke:#2471A3,stroke-width:2px,color:#fff
    classDef cacheStyle fill:#E67E22,stroke:#A84D09,stroke-width:2px,color:#fff
    classDef streamStyle fill:#1ABC9C,stroke:#117A65,stroke-width:2px,color:#fff
    classDef frontendStyle fill:#E74C3C,stroke:#A93226,stroke-width:2px,color:#fff
    classDef topicStyle fill:#F39C12,stroke:#B9770E,stroke-width:2px,color:#fff
    classDef dbStyle fill:#34495E,stroke:#1C2833,stroke-width:2px,color:#fff
    
    class OrderBook sourceStyle
    class PriceAgg,DepthAgg,PriceCalc,DepthState processingStyle
    class RedisCache cacheStyle
    class StreamService,ConnMgr streamStyle
    class Frontend1,Frontend2,FrontendN,RestAPI frontendStyle
    class UpdateTopic,MarketTopic,DepthTopic topicStyle
    class TimeSeriesDB dbStyle
```

## Componentes do Sistema de Feed de Preços

### 1. **Serviço de Agregação de Preços**
- **Serviço**: `hymple.exchange.market.aggregator`
- **Tecnologia**: Golang
- **Função**: Cálculo de preços em tempo real e agregação de estatísticas de mercado
- **Recursos Principais**:
  - Consome eventos TRADE do tópico `orders.update`
  - Calcula último preço, OHLCV (intervalos de 1m, 5m, 15m, 1h, 4h, 1d)
  - Computa estatísticas de 24 horas (máxima, mínima, volume, variação de preço %)
  - Mantém melhor bid/ask a partir de snapshots do order book
  - Publica dados agregados no tópico `market.data`
  - Armazena dados históricos no TimescaleDB

**Detalhes de Implementação**:
```go
type MarketTicker struct {
    Symbol            string    `json:"symbol"`
    LastPrice         float64   `json:"lastPrice"`
    PriceChange24h    float64   `json:"priceChange24h"`
    PriceChangePercent float64  `json:"priceChangePercent"`
    High24h           float64   `json:"high24h"`
    Low24h            float64   `json:"low24h"`
    Volume24h         float64   `json:"volume24h"`
    QuoteVolume24h    float64   `json:"quoteVolume24h"`
    BestBid           float64   `json:"bestBid"`
    BestAsk           float64   `json:"bestAsk"`
    BidQty            float64   `json:"bidQty"`
    AskQty            float64   `json:"askQty"`
    OpenPrice         float64   `json:"openPrice"`
    Timestamp         time.Time `json:"timestamp"`
}

type OHLCV struct {
    Symbol    string    `json:"symbol"`
    Interval  string    `json:"interval"` // 1m, 5m, 15m, 1h, 4h, 1d
    Open      float64   `json:"open"`
    High      float64   `json:"high"`
    Low       float64   `json:"low"`
    Close     float64   `json:"close"`
    Volume    float64   `json:"volume"`
    OpenTime  time.Time `json:"openTime"`
    CloseTime time.Time `json:"closeTime"`
}
```

### 2. **Serviço de Streaming de Dados de Mercado**
- **Serviço**: `hymple.exchange.market.stream`
- **Tecnologia**: Golang com Gorilla WebSocket / ws
- **Função**: Distribuição de dados de mercado em tempo real via WebSocket multi-canal
- **Recursos Principais**:
  - **Canais de streaming múltiplos** (padrão Binance/Coinbase):
    - `<symbol>@ticker` - Ticker completo 24h
    - `<symbol>@miniTicker` - Ticker otimizado
    - `<symbol>@bookTicker` - Best Bid/Offer (BBO) em tempo real
    - `<symbol>@trade` - Trades individuais
    - `<symbol>@aggTrade` - Trades agregados
    - `<symbol>@depth<levels>@<update_speed>` - Order book depth (5/10/20 níveis)
    - `<symbol>@depth` - Order book differential updates
    - `<symbol>@kline_<interval>` - Candlestick streams (1m, 5m, 15m, 1h, 4h, 1d)
    - `!ticker@arr` - Todos os tickers do mercado
    - `!miniTicker@arr` - Todos os mini tickers
  - Snapshot + Delta updates para order book (alta eficiência)
  - Pool e gerenciamento de conexões
  - Mecanismo de heartbeat (ping/pong) para saúde da conexão
  - Suporte para auto-reconexão com exponential backoff
  - Rate limiting por conexão (10 msgs/s por default, ajustável)
  - Compressão WebSocket (permessage-deflate)
  - Throttling inteligente de updates

**Protocolo de Mensagens WebSocket** (Padrão Exchange Profissional):

```json
// ========== SUBSCRIÇÃO ==========
// Requisição de Subscrição do Cliente
{
  "method": "SUBSCRIBE",
  "params": [
    "ethusdt@ticker",
    "ethusdt@depth20@100ms",
    "ethusdt@trade",
    "ethusdt@kline_1m",
    "ethusdt@bookTicker",
    "!ticker@arr"  // All market tickers
  ],
  "id": 1
}

// Confirmação de Subscrição
{
  "result": null,
  "id": 1
}

// ========== 24h TICKER ==========
// Atualização de Ticker 24h (Completo)
{
  "e": "24hrTicker",
  "E": 1738252496789,
  "s": "ETHUSDT",
  "p": "125.30",
  "P": "5.38",
  "w": "2410.50",
  "x": "2325.20",
  "c": "2450.50",
  "Q": "15.5",
  "b": "2450.40",
  "B": "100.25",
  "a": "2450.60",
  "A": "85.75",
  "o": "2325.20",
  "h": "2475.00",
  "l": "2310.00",
  "v": "145678.50",
  "q": "351234567.89",
  "O": 1738166096789,
  "C": 1738252496789,
  "F": 1234567,
  "L": 1298765,
  "n": 64198
}

// ========== MINI TICKER ==========
// Mini Ticker (Otimizado para Performance)
{
  "e": "24hrMiniTicker",
  "E": 1738252496789,
  "s": "ETHUSDT",
  "c": "2450.50",
  "o": "2325.20",
  "h": "2475.00",
  "l": "2310.00",
  "v": "145678.50",
  "q": "351234567.89"
}

// ========== BOOK TICKER (BBO) ==========
// Best Bid/Offer (Atualização mais rápida)
{
  "u": 400900217,
  "s": "ETHUSDT",
  "b": "2450.40",
  "B": "100.25",
  "a": "2450.60",
  "A": "85.75"
}

// ========== INDIVIDUAL TRADE ==========
// Trade Individual
{
  "e": "trade",
  "E": 1738252496789,
  "s": "ETHUSDT",
  "t": 12345,
  "p": "2450.50",
  "q": "10.5",
  "b": 88,
  "a": 50,
  "T": 1738252496785,
  "m": true,
  "M": true
}

// ========== AGGREGATE TRADE ==========
// Trade Agregado (Múltiplas execuções)
{
  "e": "aggTrade",
  "E": 1738252496789,
  "s": "ETHUSDT",
  "a": 26129,
  "p": "2450.50",
  "q": "105.25",
  "f": 100,
  "l": 105,
  "T": 1738252496785,
  "m": true,
  "M": true
}

// ========== PARTIAL DEPTH ==========
// Order Book Depth (Top 20 níveis)
{
  "lastUpdateId": 160,
  "bids": [
    ["2450.40", "100.25"],
    ["2450.30", "250.50"],
    ["2450.20", "150.75"]
  ],
  "asks": [
    ["2450.60", "85.75"],
    ["2450.70", "120.30"],
    ["2450.80", "95.40"]
  ]
}

// ========== DIFFERENTIAL DEPTH ==========
// Depth Update Incremental (Delta)
{
  "e": "depthUpdate",
  "E": 1738252496789,
  "s": "ETHUSDT",
  "U": 157,
  "u": 160,
  "b": [
    ["2450.40", "100.25"],
    ["2450.25", "0.00"]  // 0 = removed
  ],
  "a": [
    ["2450.60", "85.75"],
    ["2450.85", "0.00"]
  ]
}

// ========== KLINE/CANDLESTICK ==========
// Candlestick Stream
{
  "e": "kline",
  "E": 1738252496789,
  "s": "ETHUSDT",
  "k": {
    "t": 1738252440000,
    "T": 1738252499999,
    "s": "ETHUSDT",
    "i": "1m",
    "f": 100,
    "L": 200,
    "o": "2448.50",
    "c": "2450.50",
    "h": "2452.00",
    "l": "2448.00",
    "v": "1250.75",
    "n": 101,
    "x": false,
    "q": "3063567.89",
    "V": "625.50",
    "Q": "1531783.95",
    "B": "0"
  }
}
```

**Legenda dos Campos (Ticker 24h)**:
- `e`: Tipo do evento
- `E`: Event time (timestamp em ms)
- `s`: Symbol (par de negociação)
- `p`: Price change (variação absoluta)
- `P`: Price change percent (variação percentual)
- `w`: Weighted average price (preço médio ponderado)
- `x`: First trade price antes das 24h
- `c`: Last price (preço atual/close)
- `Q`: Last quantity (quantidade do último trade)
- `b`: Best bid price
- `B`: Best bid quantity
- `a`: Best ask price
- `A`: Best ask quantity
- `o`: Open price (24h atrás)
- `h`: High price (24h)
- `l`: Low price (24h)
- `v`: Total traded base asset volume (24h)
- `q`: Total traded quote asset volume (24h)
- `O`: Statistics open time
- `C`: Statistics close time
- `F`: First trade ID
- `L`: Last trade ID
- `n`: Total number of trades

### 3. **API REST de Dados de Mercado**
- **Serviço**: `hymple.exchange.market.api`
- **Tecnologia**: Golang com gRPC e gRPC-Gateway (HTTP/JSON)
- **Função**: API HTTP para dados de mercado históricos e snapshots atuais
- **Recursos Principais**:
  - Endpoints RESTful compatíveis com padrão de exchanges profissionais
  - Dados históricos de candlestick OHLCV (múltiplos intervalos)
  - Histórico de trades com paginação
  - Informações atuais de ticker com estatísticas 24h
  - Snapshots do order book com múltiplos níveis de profundidade
  - Book ticker (BBO) para execução rápida
  - Aggregate trades para análise de volume
  - Exchange info com limites e filtros
  - Cache de respostas multi-nível com Redis
  - Rate limiting por IP e por API key
  - Suporte a compressão (gzip)

**Endpoints da API** (Padrão Exchange Profissional):
```
# Market Data Endpoints
GET /api/v3/ping                       - Testar conectividade
GET /api/v3/time                       - Obter server time
GET /api/v3/exchangeInfo               - Informações de pares, limites, filtros

# Order Book
GET /api/v3/depth                      - Order book snapshot
    ?symbol=ETHUSDT&limit=20           (limit: 5, 10, 20, 50, 100, 500, 1000, 5000)

# Recent Trades
GET /api/v3/trades                     - Trades recentes
    ?symbol=ETHUSDT&limit=500          (max: 1000)

# Historical Trades
GET /api/v3/historicalTrades           - Trades históricos (requer API key)
    ?symbol=ETHUSDT&limit=500&fromId=12345

# Aggregate Trades
GET /api/v3/aggTrades                  - Trades agregados
    ?symbol=ETHUSDT&limit=500&startTime=...&endTime=...

# Candlestick/Kline Data
GET /api/v3/klines                     - Dados de candlestick
    ?symbol=ETHUSDT&interval=1m&limit=500
    intervals: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M

# Current Average Price
GET /api/v3/avgPrice                   - Preço médio atual
    ?symbol=ETHUSDT

# 24hr Ticker Price Change Statistics
GET /api/v3/ticker/24hr                - Estatísticas 24h
    ?symbol=ETHUSDT                    (omitir symbol para todos os pares)
    ?symbols=["ETHUSDT","BTCUSDT"]     (múltiplos símbolos)

# Price Ticker
GET /api/v3/ticker/price               - Último preço
    ?symbol=ETHUSDT                    (omitir para todos)

# Book Ticker (Best Bid/Ask)
GET /api/v3/ticker/bookTicker          - Melhor bid/ask
    ?symbol=ETHUSDT                    (omitir para todos)

# Trading Day Ticker
GET /api/v3/ticker/tradingDay          - Estatísticas do dia de negociação
    ?symbol=ETHUSDT&timeZone=0

# Rolling Window Statistics
GET /api/v3/ticker                     - Estatísticas com janela customizada
    ?symbol=ETHUSDT&windowSize=1h
```

**Exemplos de Response**:
```json
// GET /api/v3/ticker/24hr?symbol=ETHUSDT
{
  "symbol": "ETHUSDT",
  "priceChange": "125.30",
  "priceChangePercent": "5.38",
  "weightedAvgPrice": "2410.50",
  "prevClosePrice": "2325.20",
  "lastPrice": "2450.50",
  "lastQty": "15.5",
  "bidPrice": "2450.40",
  "bidQty": "100.25",
  "askPrice": "2450.60",
  "askQty": "85.75",
  "openPrice": "2325.20",
  "highPrice": "2475.00",
  "lowPrice": "2310.00",
  "volume": "145678.50",
  "quoteVolume": "351234567.89",
  "openTime": 1738166096789,
  "closeTime": 1738252496789,
  "firstId": 1234567,
  "lastId": 1298765,
  "count": 64198
}

// GET /api/v3/depth?symbol=ETHUSDT&limit=20
{
  "lastUpdateId": 1027024,
  "bids": [
    ["2450.40", "100.25"],
    ["2450.30", "250.50"]
  ],
  "asks": [
    ["2450.60", "85.75"],
    ["2450.70", "120.30"]
  ]
}

// GET /api/v3/aggTrades?symbol=ETHUSDT&limit=5
[
  {
    "a": 26129,
    "p": "2450.50",
    "q": "105.25",
    "f": 100,
    "l": 105,
    "T": 1738252496785,
    "m": true,
    "M": true
  }
]
```

### 4. **Camada de Cache Redis**
- **Tecnologia**: Redis 7.x com Redis Streams
- **Função**: Acesso a dados com latência ultra-baixa
- **Estruturas de Dados**:
  - **Hash**: Dados de ticker por símbolo (TTL: 1s)
  - **Sorted Set**: Snapshots do order book
  - **List**: Trades recentes por símbolo (limitado a 100)
  - **String**: Estatísticas agregadas de 24h

**Padrão de Chaves do Cache**:
```
ticker:{symbol}              # Hash com dados atuais do ticker
orderbook:{symbol}:bids      # Sorted Set (preço como score)
orderbook:{symbol}:asks      # Sorted Set (preço como score)
trades:{symbol}              # List (trades recentes, LPUSH + LTRIM)
stats:24h:{symbol}           # Hash com estatísticas de 24h
```

### 5. **TimescaleDB para Dados Históricos**
- **Tecnologia**: TimescaleDB (extensão PostgreSQL)
- **Função**: Armazenamento e análise de dados time-series
- **Tabelas**:
  - `trades`: Registros individuais de trades
  - `ohlcv_1m`, `ohlcv_5m`, `ohlcv_15m`, `ohlcv_1h`, `ohlcv_4h`, `ohlcv_1d`: Dados de candlestick
  - `ticker_snapshots`: Snapshots periódicos de ticker

**Exemplo de Schema**:
```sql
CREATE TABLE trades (
    time        TIMESTAMPTZ NOT NULL,
    symbol      VARCHAR(20) NOT NULL,
    trade_id    BIGINT NOT NULL,
    price       NUMERIC(20, 8) NOT NULL,
    quantity    NUMERIC(20, 8) NOT NULL,
    side        VARCHAR(4) NOT NULL,
    buyer_id    VARCHAR(100),
    seller_id   VARCHAR(100)
);

SELECT create_hypertable('trades', 'time');
CREATE INDEX idx_trades_symbol_time ON trades (symbol, time DESC);

CREATE TABLE ohlcv_1m (
    time        TIMESTAMPTZ NOT NULL,
    symbol      VARCHAR(20) NOT NULL,
    open        NUMERIC(20, 8) NOT NULL,
    high        NUMERIC(20, 8) NOT NULL,
    low         NUMERIC(20, 8) NOT NULL,
    close       NUMERIC(20, 8) NOT NULL,
    volume      NUMERIC(20, 8) NOT NULL,
    trades_count INTEGER,
    PRIMARY KEY (symbol, time)
);

SELECT create_hypertable('ohlcv_1m', 'time');
```

## Descrição do Fluxo de Dados

### Fluxo de Atualização de Preço em Tempo Real

1. **Execução de Trade**: O Motor do Order Book executa um trade e publica no tópico `orders.update`
2. **Filtragem de Eventos**: O Agregador de Preços consome apenas eventos TRADE
3. **Cálculo de Preço**: 
   - Atualiza último preço
   - Recalcula estatísticas de 24h
   - Atualiza candles OHLCV para todos os intervalos
   - Calcula porcentagem de variação de preço
4. **Atualização de Cache**: Escreve no Redis para acesso de leitura ultra-rápido
5. **Publicação de Evento**: Publica no tópico `market.data`
6. **Distribuição por Stream**: Serviço de Streaming de Dados de Mercado transmite para clientes WebSocket inscritos
7. **Persistência**: Escreve no TimescaleDB para análise histórica

### Fluxo de Conexão Frontend

1. **Conexão Inicial**: Cliente estabelece conexão WebSocket
2. **Autenticação**: Valida token JWT (opcional para dados públicos de mercado)
3. **Subscrição**: Cliente se inscreve em canais específicos (tickers, trades, depth)
4. **Streaming de Dados**: Servidor envia atualizações conforme ocorrem
5. **Heartbeat**: Ping/pong periódico para manter a conexão
6. **Reconexão**: Reconexão automática com backoff exponencial

## Stack Tecnológico para Feed de Preços

| Componente | Tecnologia | Justificativa |
|-----------|-----------|---------------|
| Agregador de Preços | Golang | Alta performance, processamento concorrente, gerenciamento eficiente de memória |
| Serviço de Streaming | Golang + Gorilla WebSocket | Excelente suporte a WebSocket, lida com milhares de conexões simultâneas |
| API REST | Golang + gRPC-Gateway | gRPC type-safe com compatibilidade HTTP/JSON |
| Camada de Cache | Redis 7.x | Latência sub-milissegundo, capacidades pub/sub, estruturas de dados |
| Banco Time-Series | TimescaleDB | Compatibilidade PostgreSQL, otimizado para consultas time-series |
| Message Broker | Apache Kafka | Já em uso, streaming de eventos confiável |
| Cliente Frontend | JavaScript/TypeScript | Suporte universal em navegadores |

## Integração Frontend

### Implementação do Cliente WebSocket (TypeScript/React)

```typescript
class MarketDataClient {
  private ws: WebSocket;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 10;
  private subscriptions: Set<string> = new Set();

  constructor(private url: string) {
    this.connect();
  }

  private connect() {
    this.ws = new WebSocket(this.url);
    
    this.ws.onopen = () => {
      console.log('WebSocket conectado');
      this.reconnectAttempts = 0;
      // Reinscrever nos canais
      this.resubscribe();
    };

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.handleMessage(message);
    };

    this.ws.onerror = (error) => {
      console.error('Erro no WebSocket:', error);
    };

    this.ws.onclose = () => {
      console.log('WebSocket fechado');
      this.reconnect();
    };
  }

  private reconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
      setTimeout(() => this.connect(), delay);
    }
  }

  subscribe(channels: string[]) {
    channels.forEach(ch => this.subscriptions.add(ch));
    this.send({
      type: 'subscribe',
      channels: channels
    });
  }

  unsubscribe(channels: string[]) {
    channels.forEach(ch => this.subscriptions.delete(ch));
    this.send({
      type: 'unsubscribe',
      channels: channels
    });
  }

  private resubscribe() {
    if (this.subscriptions.size > 0) {
      this.send({
        type: 'subscribe',
        channels: Array.from(this.subscriptions)
      });
    }
  }

  private send(data: any) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }

  private handleMessage(message: any) {
    switch (message.type) {
      case 'ticker':
        this.onTicker(message);
        break;
      case 'trade':
        this.onTrade(message);
        break;
      case 'depth':
        this.onDepth(message);
        break;
    }
  }

  onTicker(message: any) {
    // Sobrescrever na implementação
  }

  onTrade(message: any) {
    // Sobrescrever na implementação
  }

  onDepth(message: any) {
    // Sobrescrever na implementação
  }

  disconnect() {
    this.ws.close();
  }
}

// Uso em Componente React
function TradingView() {
  const [ticker, setTicker] = useState<MarketTicker | null>(null);
  const clientRef = useRef<MarketDataClient | null>(null);

  useEffect(() => {
    const client = new MarketDataClient('wss://api.hymple.exchange/ws');
    
    client.onTicker = (message) => {
      setTicker(message.data);
    };

    client.subscribe(['ticker@ETHUSDT', 'trades@ETHUSDT']);
    clientRef.current = client;

    return () => {
      client.disconnect();
    };
  }, []);

  return (
    <div>
      {ticker && (
        <>
          <div>Preço: ${ticker.lastPrice}</div>
          <div>Variação 24h: {ticker.priceChangePercent}%</div>
          <div>Máxima 24h: ${ticker.high24h}</div>
          <div>Mínima 24h: ${ticker.low24h}</div>
          <div>Volume 24h: {ticker.volume24h}</div>
        </>
      )}
    </div>
  );
}
```

## Estratégias de Otimização de Performance

### 1. **Estratégia de Cache**
- **Cache L1**: Cache em memória no Serviço de Streaming de Dados de Mercado (local para cada instância)
- **Cache L2**: Cluster Redis para estado compartilhado entre instâncias de serviço
- **TTL**: TTL de 1 segundo para dados de ticker garante atualização enquanto reduz carga no BD

### 2. **Gerenciamento de Conexões**
- **Pool de Conexões**: Reutilização de conexões para Redis e TimescaleDB
- **Limites de Conexão WebSocket**: Rate limiting por IP/usuário
- **Balanceamento de Carga**: Múltiplas instâncias do serviço de streaming atrás de load balancer

### 3. **Agregação de Dados**
- **Janelamento**: Janelas baseadas em tempo para cálculo de OHLCV
- **Batching**: Escritas em lote no TimescaleDB (a cada 100ms ou 100 eventos)
- **Processamento Paralelo**: Processamento concorrente para diferentes símbolos

### 4. **Otimização de Rede**
- **Compressão de Mensagens**: Compressão WebSocket (permessage-deflate)
- **Atualizações Delta**: Enviar apenas campos alterados para atualizações de ticker
- **Throttling**: Limitar frequência de atualização por canal (ex: máx. 10 atualizações/segundo para ticker)

## Considerações de Escalabilidade

### Escalabilidade Horizontal
- **Agregador de Mercado**: Escalar por particionamento de símbolo (cada instância lida com subconjunto de símbolos)
- **Serviço de Streaming**: Serviço stateless, pode escalar para milhares de instâncias
- **Redis**: Redis Cluster para escalabilidade horizontal
- **TimescaleDB**: Hypertables distribuídas para escalonamento de escrita

### Escalabilidade Vertical
- **CPU**: Otimizar para processamento multi-core com Goroutines
- **Memória**: Buffers de agregação em memória ajustados por instância
- **Rede**: Rede de alta largura de banda para conexões WebSocket

### Distribuição Geográfica
- **CDN**: Localizações edge para conexões WebSocket
- **Clusters Regionais**: Implantação em múltiplas regiões
- **Replicação de Dados**: Replicação Kafka e Redis entre regiões

## Monitoramento e Observabilidade

### Métricas Principais
- **Latência**: Tempo da execução do trade até atualização no frontend
- **Throughput**: Mensagens por segundo por símbolo
- **Contagem de Conexões**: Conexões WebSocket ativas
- **Taxa de Acerto de Cache**: Porcentagem de acerto no cache Redis
- **Taxa de Erro**: Cálculos de preço falhados ou conexões perdidas

### Regras de Alerta
- Alertar se latência > 100ms (p99)
- Alertar se taxa de acerto de cache < 95%
- Alertar se taxa de erro de conexão > 1%
- Alertar se backlog de mensagens > 1000 no Kafka

## Alta Disponibilidade

### Redundância
- Múltiplas instâncias de cada serviço
- Redis Sentinel para failover automático
- Replicação TimescaleDB (primário + standby)
- Fator de replicação 3 no Kafka

### Circuit Breaker
- Implementar padrão circuit breaker para dependências externas
- Degradação graciosa se cache estiver indisponível
- Fallback para consultas diretas ao BD se cache falhar

## Considerações de Segurança

### Segurança WebSocket
- **TLS/SSL**: Protocolo WSS (WebSocket Secure)
- **Autenticação**: Validação de token JWT para endpoints autenticados
- **Rate Limiting**: Limites de conexão por IP e por usuário
- **CORS**: Configuração adequada de CORS para clientes web

### Integridade de Dados
- **Validação**: Validar todos os dados de trade recebidos
- **Checksums**: Verificar integridade de dados na agregação
- **Auditoria**: Registrar todas as atualizações de preço para conformidade regulatória

## Exemplo de Arquitetura de Implantação

### Ambiente de Produção

```
┌─────────────────────────────────────────────────────────────┐
│                    Load Balancer (NGINX)                    │
│                         WSS / HTTPS                          │
└────────────────┬──────────────────────┬─────────────────────┘
                 │                      │
    ┌────────────▼──────────┐  ┌────────▼─────────────┐
    │  market.stream (3x)   │  │   market.api (3x)    │
    │  WebSocket Servers    │  │   REST API Servers   │
    └────────────┬──────────┘  └────────┬─────────────┘
                 │                      │
                 └──────────┬───────────┘
                            │
                 ┌──────────▼───────────┐
                 │   Redis Cluster      │
                 │   (Master + Slaves)  │
                 └──────────┬───────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
┌────────▼─────────┐ ┌─────▼──────┐ ┌─────────▼────────┐
│ market.aggregator│ │   Kafka    │ │   TimescaleDB    │
│      (3x)        │ │  Cluster   │ │  (Primary +      │
│                  │ │            │ │   Standby)       │
└──────────────────┘ └────────────┘ └──────────────────┘
```

### Fluxo de Dados Completo

1. **Trade** → Order Book publica em `orders.update`
2. **Agregação** → market.aggregator consome, calcula e publica em `market.data`
3. **Cache** → market.aggregator atualiza Redis
4. **Streaming** → market.stream lê Redis e transmite via WebSocket
5. **Persistência** → market.aggregator escreve em TimescaleDB
6. **API** → market.api lê de Redis/TimescaleDB via HTTP

---

**Versão do Documento**: 1.0  
**Última Atualização**: 30 de Janeiro de 2026  
**Arquitetura**: Sistema de Feed de Preços da Hymple Exchange
