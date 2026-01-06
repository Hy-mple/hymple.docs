# Fees

> *Fee Structure, Incentives, and Sustainability*

The fee policy of Hymple was developed to balance operational sustainability, community incentives and competitiveness in the global hybrid exchange market.

The goal is to maintain a transparent, fair structure capable of rewarding users who actively participate in the ecosystem through HYM staking and liquidity provision (maker orders).

---

### 7.1 Fee Structure

Fees vary according to the asset pair category and the user's level of engagement. This differentiation seeks to reflect the liquidity and risk of each market while rewarding loyalty and involvement within the ecosystem.

| **Category**                  | **Example Pairs**                    | **Base Fee** | **Maker Order** | **With Staking** | **Staking + Maker Order** |
|-------------------------------|--------------------------------------|--------------|-----------------|------------------|---------------------------|
| Major Pairs                   | BTC, BNB, ETH, USDT, USDC            | 0,10%        | 0,075%          | 0,075%           | 0,05%                     |
| Mid-cap Altcoins              | E.g.: MATIC, AVAX, ARB, SOL          | 0,20%        | 0,15%           | 0,15%            | 0,10%                     |
| Microcaps / Emerging Tokens   | E.g.: PEPE, SHIB, DOGE               | 0,25%        | 0,20%           | 0,20%            | 0,15%                     |

**Maker Order:** adds liquidity to the order book (limit order).  
**Taker Order:** consumes existing liquidity (market order).

---

### 7.2 Fee Calculation Formula

The fee applied to each transaction follows the formula:

$$
Fee = V \times T_a
$$

**Where:**

- $V$ = Total transaction value (in equivalent USDT);
- $T_a$ = Fee applicable according to the category and user condition (%).

**Example 1:**

User without staking makes a purchase of 2 ETH in the pair ETH/USDT, total amount of US$ 7,000.

Base fee = 0,10%

$$
Fee = 7000 \times 0.0010 = 7.00 \text{ USDT}
$$

**Example 2:**

User with HYM staking and a maker order in MATIC/USDT, total amount US$ 3,000.

Fee = 0,10%

$$
Fee = 3000 \times 0.0010 = 3.00 \text{ USDT}
$$

**Example 3:**

User with HYM staking makes a taker purchase of emerging token DOGE/USDT, amount US$ 1,000.

Fee = 0,20%

$$
Fee = 1000 \times 0.0020 = 2.00 \text{ USDT}
$$

---

### 7.3 Progressive Reductions and Incentives

Automatic discounts are applied according to the user's level of engagement:

- **HYM Staking:** reduces the base fee proportionally to the trading pair category.
- **Maker Order:** grants additional discounts for adding liquidity to the market.

This system creates a positive incentive cycle, promoting liquidity, engagement and long-term appreciation of the token HYM.

---

### 7.4 Network Fees (Blockchain Fees)

In addition to internal trading fees, operations are subject to the network fees (gas fees) of the blockchains where orders are executed.

These fees are not controlled by Hymple, as they depend on the infrastructure of each network (e.g.: Ethereum, BNB Smart Chain, among others).

To minimize the impact of on-chain fees, Hymple adopts optimization solutions:

- **Off-Chain Aggregation:** multiple orders are consolidated before on-chain settlement;
- **Batch Settlement:** grouped settlements significantly reduce gas consumption.

In addition, the Hymple exchange will seek compatibility with low-cost blockchains, prioritizing networks that offer:

- Energy efficiency,
- Proven security,
- Low transaction fees,
- Compatibility with the EVM ecosystem.

This hybrid and interoperable model ensures that users can operate in a decentralized, with competitive costs and optimized performance.

---

### 7.5 Sustainability and Transparency

The distribution of fees collected by Hymple follows a model of mixed sustainability, ensuring the continuous maintenance of the protocol, community incentives and ecosystem stability.

| **Destination**                           | **Percentage** | **Description**                                                                                          |
|-------------------------------------------|----------------|----------------------------------------------------------------------------------------------------------|
| Team                                      | 20%            | Founding and technical team.                                                                             |
| Buyback and Burn                          | 10%            | Periodic repurchase of HYM tokens and permanent burn, reducing the circulating supply.                   |
| Treasury                                  | 10%            | Reserve intended for governance and strategic partnerships.                                              |
| Insurance Fund                            | 10%            | Partial coverage for technical incidents or proven user losses.                                          |
| Platform Investment and Maintenance       | 50%            | Reinvestment in liquidity, infrastructure, servers and continuous platform improvements.                 |

This policy reinforces the commitment of Hymple to transparency, security and long-term sustainability, creating mechanisms for continuous appreciation of the HYM token and user protection.

---

### Additional transparency notes

- The fund allocated to the **Founding Team** represents a compensation proportional to the active work of developers and contributors, not being a fixed benefit nor an automatic profit on the protocol's revenues.
- All funds and movements are **on-chain auditable**, ensuring full transparency.
- Percentages and allocations may be adjusted in the future via governance, ensuring long-term alignment between the interests of the community, Hymple and its users.

---

<div class="nav-buttons">
  <a href="../20 - staking/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Staking</span>
  </a>
  <div class="nav-button-placeholder"></div>
</div>
