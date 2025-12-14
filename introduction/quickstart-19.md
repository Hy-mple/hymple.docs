---
icon: hand-holding-circle-dollar
---

# Fees

A política de taxas da **Hymple** foi desenvolvida para equilibrar sustentabilidade operacional, incentivos à comunidade e competitividade frente ao mercado global de exchanges híbridas.\
O objetivo é manter uma estrutura transparente, justa e capaz de recompensar os usuários que participam ativamente do ecossistema por meio do **staking de HYM** e do fornecimento de liquidez (_maker orders_).

**7.1 Estrutura de Taxas**

As taxas variam de acordo com a categoria do par de ativos e com o nível de engajamento do usuário. Essa diferenciação busca refletir a liquidez e o risco de cada mercado, ao mesmo tempo em que recompensa a fidelidade e o envolvimento dentro do ecossistema.

|         **Categoria**         |    **Exemplo de Pares**   | <p><strong>Taxa</strong><br><strong>Base</strong></p> | <p><strong>Ordem</strong><br><strong>Maker</strong></p> | <p><strong>Com</strong><br><strong>Staking</strong></p> | <p><strong>Staking +</strong><br><strong>Ordem Maker</strong></p> |
| :---------------------------: | :-----------------------: | :---------------------------------------------------: | :-----------------------------------------------------: | :-----------------------------------------------------: | :---------------------------------------------------------------: |
|        Pares Principais       | BTC, BNB, ETH, USDT, USDC |                         0,10%                         |                          0,075%                         |                          0,075%                         |                               0,05%                               |
|        Altcoins Médias        | Ex: MATIC, AVAX, ARB, SOL |                         0,20%                         |                          0,15%                          |                          0,15%                          |                               0,10%                               |
| Microcaps / Tokens Emergentes |    Ex: PEPE, SHIB, DOGE   |                         0,25%                         |                          0,20%                          |                          0,20%                          |                               0,15%                               |

* **Ordem Maker:** adiciona liquidez ao livro de ordens (_limit order_).
* **Ordem Taker:** consome a liquidez existente (_market order_).

***

**7.2 Fórmula de Cálculo das Taxas**

A taxa aplicada a cada transação segue a fórmula:

$$
\text{Taxa Total} = V \times T_c
$$

Onde:

* **V** = Valor total da transação (em USDT equivalente);
* **Tₐ** = Taxa aplicável conforme categoria e condição do usuário (%).

**Exemplo 1:**\
Usuário sem staking realiza compra de **2 ETH** no par **ETH/USDT**, valor total de **US$ 7.000**.\
Taxa base = **0,10%**

$$
\text{Taxa Total} = 7.000 \times 0,001 = \text{US\$ }7,00
$$

**Exemplo 2:**\
Usuário com staking de HYM e ordem _maker_ em **MATIC/USDT**, valor total **US$ 3.000**.\
Taxa = **0,10%**

$$
\text{Taxa Total} = 3.000 \times 0,001 = \text{US\$ }3,00
$$

**Exemplo 3:**\
Usuário com staking de HYM faz compra _taker_ de token emergente **DOGE/USDT**, valor **US$ 1.000**.\
Taxa = **0,20%**

$$
\text{Taxa Total} = 1.000 \times 0,002 = \text{US\$ }2,00
$$

***

**7.3 Reduções Progressivas e Incentivos**

Descontos automáticos são aplicados conforme o nível de engajamento do usuário:

* **Staking de HYM:** reduz a taxa base proporcionalmente à categoria do par de negociação.
* **Ordem Maker:** concede descontos adicionais por adicionar liquidez ao mercado.

Esse sistema cria um ciclo de incentivo positivo, promovendo **liquidez**, **engajamento** e **valorização de longo prazo** do token **HYM**.

**7.4 Taxas de Rede (Blockchain Fees)**

Além das taxas internas de negociação, as operações estão sujeitas às **taxas de rede (gas fees)** das blockchains onde as ordens são executadas.\
Essas taxas **não são controladas pela Hymple**, pois dependem da infraestrutura de cada rede (ex.: Ethereum, BNB Smart Chain, entre outras).

Para **minimizar o impacto das taxas on-chain**, **Hymple** adota soluções de otimização:

* **Agregação Off-Chain:** múltiplas ordens são consolidadas antes da liquidação on-chain;
* **Batch Settlement:** liquidações agrupadas reduzem significativamente o consumo de gás.

Além disso, a **Hymple exchange** buscará compatibilidade com **blockchains de baixo custo**, priorizando redes que ofereçam:

* Eficiência energética,
* Segurança comprovada,
* Baixas taxas de transação,
* Compatibilidade com o ecossistema **EVM**.

Esse **modelo híbrido e interoperável** garante que os usuários possam operar de forma **descentralizada**, com **custos competitivos** e **performance otimizada**.

**7.5 Sustentabilidade e Transparência**

A distribuição das taxas coletadas pela Hymple segue um modelo de **sustentabilidade mista**, garantindo a manutenção contínua do protocolo, incentivos à comunidade e estabilidade do ecossistema.

| **Destino**                                 | **Percentual** | **Descrição**                                                                                    |
| ------------------------------------------- | :------------: | ------------------------------------------------------------------------------------------------ |
| **Equipe**                                  |     2**0%**    | Equipe fundadora e técnica.                                                                      |
| **Recompra e Queima (Buyback & Burn)**      |     **10%**    | Recompra periódica de tokens HYM e queima definitiva, reduzindo a oferta circulante.             |
| **Tesouraria**                              |     **10%**    | Reserva destinada à governança e parcerias estratégicas.                                         |
| **Fundo de Seguro**                         |     **10%**    | Cobertura parcial para incidentes técnicos ou prejuízos comprovados de usuários.                 |
| **Investimento e Manutenção da plataforma** |     5**0%**    | Reinvestimento em liquidez, infraestrutura, servidores e aprimoramentos contínuos da plataforma. |

Essa política reforça o **compromisso da Hymple com a transparência, segurança e sustentabilidade de longo prazo**, criando mecanismos de **valorização contínua do token HYM** e **proteção dos usuários**.

#### **Notas adicionais de transparência**

* O fundo destinado à **Equipe Fundadora** representa uma **remuneração proporcional ao trabalho ativo** dos desenvolvedores e colaboradores, **não sendo um benefício fixo** nem um lucro automático sobre as receitas do protocolo.
* Todos os fundos e movimentações são **auditáveis on-chain**, garantindo **transparência total**.
* **Percentuais e destinações** poderão ser **ajustados futuramente via governança**, assegurando alinhamento de longo prazo entre os **interesses da comunidade, da Hymple e de seus usuários**.
