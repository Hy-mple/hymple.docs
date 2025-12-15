# API Documentation

Documentação técnica da API REST e WebSocket da Hymple Exchange.

---

## 🔌 Base URL

```
https://api.hymple.exchange/v1
```

---

## 🔑 Autenticação

A maioria dos endpoints públicos não requer autenticação. Para operações privadas:

```javascript
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
```

---

## 📊 Endpoints Principais

### GET /markets

Lista todos os mercados disponíveis.

```json
{
  "markets": [
    {
      "symbol": "BTC/USDT",
      "baseAsset": "BTC",
      "quoteAsset": "USDT",
      "price": "45000.00"
    }
  ]
}
```

### GET /orderbook/:symbol

Retorna o order book de um mercado específico.

```json
{
  "bids": [[45000, 1.5], [44999, 2.0]],
  "asks": [[45001, 1.2], [45002, 3.0]]
}
```

### POST /orders

Cria uma nova ordem.

```json
{
  "symbol": "BTC/USDT",
  "side": "buy",
  "type": "limit",
  "price": "45000",
  "quantity": "0.1"
}
```

---

## 🔄 WebSocket

Conecte-se ao WebSocket para dados em tempo real:

```javascript
const ws = new WebSocket('wss://ws.hymple.exchange');

ws.on('message', (data) => {
  console.log('Market update:', data);
});
```

### Canais Disponíveis

- `orderbook` - Order book em tempo real
- `trades` - Trades executados
- `ticker` - Preços e volume 24h

---

## 📚 SDK

Bibliotecas oficiais disponíveis:

- JavaScript/TypeScript
- Python
- Go

---

<div class="nav-cards">
  <a class="nav-card prev" href="../wallet/">
    <span class="nav-card-label">Previous</span>
    <span class="nav-card-title">Wallet</span>
  </a>
  <a class="nav-card next" href="../faq/">
    <span class="nav-card-label">Next</span>
    <span class="nav-card-title">FAQ</span>
  </a>
</div>
