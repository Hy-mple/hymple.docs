# Staking

> *Rewards, Governance, and Ecosystem Sustainability*

The staking protocol of the Hymple token was designed to incentivize token retention, promote stability and reward active community participation. The mechanism is based on a variable distribution model, adjusted according to the platform's monthly trading volume.

The staking program is fully on-chain, transparent and auditable, ensuring fairness in distribution and preservation of the ecosystem's integrity.

💡 **Note:** The HYM token staking protocol has a maximum and immutable cap of **15,000,000 HYM**.
These tokens will not be minted, but rather pre-reserved during the token creation, ensuring full transparency, emission control and preservation of scarcity within the ecosystem.

---

### Distribution and reward rates

The annual return rate (APR) applied to staking is directly linked to the exchange's operational performance, according to the total volume traded in the evaluated period (previous month). This approach creates a sustainable incentive model in which ecosystem growth proportionally benefits its participants.

| **Trading Volume Range** | **APR** |
|---------------------------|---------|
| Up to $100M               | 8%      |
| $100M – $500M             | 6%      |
| Above $500M               | 4%      |

The progressive variation of the APR seeks to balance reward distribution with the platform's organic growth, avoiding excessive token release and preserving its market value.

---

### Total reward reserve

The total tokens allocated to staking rewards is **15,000,000 HYM**.

This amount is distributed monthly and proportionally, according to the exchange's performance and the pool allocation rules.

The total amount of tokens available for staking each month (monthly pool) cannot exceed the remaining balance of the total rewards.

When the monthly limit is reached, the pool is automatically closed to new allocations until the next cycle.

**Example:**

- Initial total = 15,000,000 tokens
- Month 1: 100,000 tokens distributed
- New reward balance = 15,000,000 − 100,000 = **14,900,000 tokens** available for the coming months.

Undistributed tokens remain accumulated in the pool and are re-evaluated in the next cycle.

---

### Participation limits and fair distribution

To ensure decentralization and prevent excessive concentration of economic power, each participant may allocate at most **1% of the total monthly pool**.

If the monthly pool is 15,000,000 tokens, the individual maximum limit will be **150,000 tokens**.

This limitation promotes a fairer and more accessible distribution, encouraging participation from multiple users and reducing excessive concentration by large holders.

---

### Minimum participation period

Tokens locked for less than **15 days** do not generate rewards.

From the 15th day, the user begins to accumulate yield proportional to the time kept in staking within the current cycle.

This rule was implemented to discourage short-term speculative movements, encouraging stable commitment aligned with the ecosystem's growth.

---

### Renewal and APY calculation

If the user keeps their tokens staked for the next cycle, the yield becomes compounded, and the effective annual return (APY) is calculated automatically.

$$
APY = \left(1 + \frac{APR}{12}\right)^{12} - 1
$$

The APY calculation reflects the actual accumulated gain over time, considering the monthly reinvestment of rewards.

Both the APR (nominal annual rate) and the estimated APY will be displayed in real time on the Hymple staking interface, ensuring full transparency and user control of yield.

---

### Governance and transparency

All staking protocol parameters — including base rate, volume and balance of available tokens — are on-chain auditable.

Structural changes, such as APR adjustments or changes in the maximum participation limit, will be submitted to Hymple's decentralized governance, ensuring active community participation in critical decisions.

---

### Summary of Parameters

| **Parameter**            | **Description**                                                                 | **Value/Condition**   |
|--------------------------|---------------------------------------------------------------------------------|-----------------------|
| Total Monthly Pool       | Maximum amount of tokens distributed in each staking cycle.                     | 15,000,000 HYM        |
| Maximum Per-User Limit   | Maximum individual amount eligible for rewards in each cycle.                   | 150,000 HYM           |
| Minimum Lock Period      | Minimum time the user must keep tokens staked to generate yield.                | 15 days               |
| Reward Cycle             | Duration of each distribution and yield calculation period.                     | Monthly               |
| APY Calculation          | Automatic reinvestment of rewards, generating compounded yield.                 | Automatic             |
| Base Rate (APR)          | Nominal variable rate according to trading volume and governance parameters.    | Adjustable            |
| Undistributed Tokens     | Accumulated in the pool for future cycles, maintaining sustainability.          | Yes                   |
| On-Chain Audit           | Data and reward transparency directly on the blockchain.                        | 100% auditable        |

---

### Conclusion

The staking protocol of the Hymple (HYM) token was developed to align incentives, sustainability and community engagement.

Through this mechanism:

- **Users are rewarded** proportionally to commitment and participation time, ensuring fair and balanced distribution;
- **Token release is dynamically controlled**, adjusting the APR according to the trading volume, preserving the economic health of the ecosystem;
- **The minimum period of 15 days** promotes long-term engagement, while the individual limit prevents excessive concentration of tokens;
- **Undistributed tokens are reaccumulated** in the pool, reinforcing intertemporal sustainability and encouraging participant loyalty;
- **The APY calculation**, visible in real time, ensures transparency, predictability and trust in users' financial decisions.

Thus, the protocol creates a robust, fair and sustainable economic cycle, strengthening the liquidity, the stability and the organic growth of the entire Hymple ecosystem.

---

<div class="nav-buttons">
  <a href="../19 - rewards/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Rewards</span>
  </a>
  <a href="../21 - fees/" class="nav-button nav-button-next">
    <span class="nav-label">NEXT</span>
    <span class="nav-title">Fees</span>
  </a>
</div>
