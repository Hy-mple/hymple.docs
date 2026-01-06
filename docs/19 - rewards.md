# Rewards

> *Incentive system and appreciation for Hymple users.*

### 1. Introduction

The Hymple ecosystem adopts an innovative rewards mechanism intended to incentivize active participation, liquidity and healthy user behavior on the platform. The distribution of native tokens is structured proportional to the individual user's impact on the exchange, considering trading volume, usage frequency, liquidity provided, staking, quality behavior, referrals and loyalty.

The main objective of the rewards mechanism is to foster sustainable use of the platform, rewarding users who contribute to the growth, stability and integrity of the ecosystem, while controlling token release to avoid excessive concentration.

💡 **Note:** Hymple's rewards program has a maximum and immutable limit of 15,000,000 HYM.
These tokens will not be minted, but rather pre-reserved during the token creation, ensuring full transparency, emission control and preservation of scarcity within the ecosystem.

### 2. Weight structure and criteria

During the launch phase (year 1 to year 3), rewards will be calculated based on the following criteria, with predefined weights:

| Criterion | Weight | Description |
|-----------|--------|-------------|
| Trading Volume | 0,45 | Reflects the total amount of transactions carried out by the user on the platform. It encourages liquidity and continuous use of the exchange. |
| User Activity | 0,15 | Measures the frequency of platform use. |
| Liquidity Provision | 0,25 | Rewards market makers and users who contribute to order book depth. |
| Token Staking | 0,05 | Users who hold Hymple tokens in staking actively participate in the platform's security and governance. |
| Quality Interactions | 0,05 | Assesses executed orders, average holding time and integrity of operations. |
| Proof of Referral (PoR) | 0,10 | Users who refer new participants receive recognition for the community's organic growth. |
| Loyalty and Retention (Bonus) | 0,05 | Additional bonus for users who maintain continuous and consistent activity over time. |

**Total Weights: 1,1**

The sum of the metrics generates an individual normalized score, which defines each user's share of the rewards pool.

💡 **Note:** A total weighted value greater than 1 reflects the possibility of amplifying rewards for users who stand out in multiple criteria, promoting a more robust and active ecosystem from the launch phase.

#### Weights review in future phases

To ensure alignment with the platform's growth and the user base profile, the weights will be reviewed in subsequent phases:

- **Growth phase (year 4 to year 6)** – Adjustments focused on liquidity provision, the referral program and whatever else is necessary to help the exchange in its growth.
- **Maturity phase (year 7 onward)** – Adjustments aimed at rewarding loyalty, governance and strategic engagement, maintaining the balance between volume, activity and user retention.

This dynamic approach allows the rewards system to evolve along with the platform, maintaining fairness and encouraging behaviors that add value to the Hymple ecosystem.

### 3. Volume-weighted rewards distribution

To align reward distribution with the platform's real economic activity, the scheduled distribution for each month will be adjusted according to the total trading volume on the platform in the month prior to the measurement (in USD). This mechanism:

- preserves the token's sustainability by reducing distribution in periods of lower activity; and
- increases distribution when platform usage intensifies.

In practical terms, the total tokens scheduled for the month are multiplied by a distribution percentage defined by the range of monthly volume measured.

For example, if the monthly rewards pool is 100,000 tokens and the previous month's trading volume was US$ 50 million or less, only 25% (25,000 tokens) will be distributed. If volume reaches higher ranges in subsequent months, the release percentage increases progressively.

#### Distribution rule by volume range

The effective distribution in the month will follow the table below:

**Volume-weighted distribution**

| Monthly Volume (USD) | Distribution % |
|---------------------|----------------|
| ≤ $50M | 25% |
| $50M – $200M | 50% |
| $200M – $500M | 60% |
| $500M – $1B | 80% |
| > $1B | 100% |

#### Formula

- v = monthly volume measured (USD)
- p = pool scheduled for the month
- f(v) = distribution percentage according to the table range

Effective distribution in the month:

**Distribution = p × f(v)**

#### Examples:

- If p = 100,000 and v ≤ $50M → f(v) = 25% → Distribution = 25,000 tokens.
- If p = 100,000 and $50M < v ≤ $200M → f(v) = 50% → Distribution = 50,000 tokens.
- If p = 100,000 and $200M < v ≤ $500M → f(v) = 60% → Distribution = 60,000 tokens.
- If p = 100,000 and $500M < v ≤ $1B → f(v) = 80% → Distribution = 80,000 tokens.
- If p = 100,000 and v > $1B → f(v) = 100% → Distribution = 100,000 tokens.

#### Operational considerations

- **Measurement Window:** calendar month in UTC.
- **Volume Calculation:** consolidated volume in USD of all pairs supported by the exchange.
- **Conversion to USD:** volume-weighted averages or reliable market sources.
- **Publication:** the applicable percentage (f(v)) is disclosed in the monthly metrics report.
- **Cumulativity:** undistributed tokens will have part burned and the remainder reaccumulated in the rewards pool.
- **Audit and Transparency:** methodology and aggregated data will be made available for community verification.

#### Design rationale

- **Sustainability:** controls release according to demand and the platform's real usage.
- **Incentive Alignment:** the higher the volume and community engagement, the higher the monthly distribution.
- **Predictability:** fixed ranges and percentages offer clarity and stability to participants.

### 4. Calculation of rewards

#### Individual Score

O Individual Score measures each user's contribution and engagement in the reference month for the ecosystem. It is composed of seven weighted and normalized components, using roots to reduce the effect of extreme values. The maximum possible score is 1.10 (1.0 from base components + 0.10 bonus). Each component is calculated and summed as below.

**1.1 Trading Volume (Weight 0.45)**

Description: encourages higher trading volume on the platform.

**Formula:**

$$
score\_trading = 0.45 \times \sqrt{\frac{user\_volume}{max\_user\_volume}}
$$

Where:

- score_trading: user's trading volume score.
- user_volume: user's trading volume during the month.
- max_user_volume: highest trading volume recorded for a user during the month.

✅ **Notes:**

- The square root reduces disparities between large and small traders.
- It promotes constant activity, not just volume spikes.

**1.2 Frequency (Weight 0.15)**

Description: measures activity regularity in the month.

**Formula:**

$$
score\_frequency = 0.15 \times \frac{active\_days}{possible\_active\_days}
$$

Where:

- score_frequency: user's frequency score.
- active_days: number of days in the month the user had activity.
- possible_active_days: total possible days in the month (30 or 31).

✅ **Notes:**

- Rewards consistency of engagement, not just volume.
- Values users with continuous presence.

**1.3 Liquidity (Weight 0.25)**

Description: evaluates the user's contribution as a liquidity provider.

**Formula:**

$$
score\_liquidity = 0.25 \times \sqrt{\frac{user\_liquidity\_total}{max\_user\_liquidity}}
$$

Where:

- score_liquidity: user's liquidity score.
- user_liquidity_total: total liquidity provided by the user during the month.
- max_user_liquidity: highest liquidity provided value recorded for a user during the month.

✅ **Notes:**

- Encourages stable liquidity provision.
- Reduces disparities between large and small providers.

**1.4 Staking (Weight 0.05)**

Description: rewards those who keep value staked throughout the month.

**Formula:**

$$
score\_staking = 0.05 \times \sqrt{\frac{user\_staking\_amount}{max\_staking\_amount}} \times \frac{staking\_days}{days\_in\_month}
$$

Where:

- score_staking: user's staking score.
- user_staking_amount: user's total tokens in staking.
- max_staking_amount: highest staking amount recorded for a user.
- staking_days: number of days with tokens staked.
- days_in_month: total days in the month (30 or 31).

✅ **Notes:**

- Values commitment and stability.
- Ensures that only eligible users participate.

**1.5 Quality Interactions (Weight 0.05)**

Description: values genuine and diversified interactions.

Steps:

1. Weighted orders:
    - Executed → weight 1.0
    - Canceled (>24h) → weight 0.5
    - Ex: 10 Executed orders + 5 orders canceled after 24 = 12,5

2. Application of the diversification factor: based on the number of pairs traded.

    | Pairs Traded | Factor |
    |--------------|--------|
    | 1 | 0,3 |
    | 2 | 0,5 |
    | 3 | 0,7 |
    | 4 or more | 1,0 |

3. Final normalization:

**Formula:**

$$
score\_interaction = 0.05 \times \sqrt{\frac{step2}{max\_step2}}
$$

Where:

- score_interaction: user's quality interactions score.
- step2: user's result after applying the diversification factor.
- max_step2: Highest Step 2 result among all users during the month.

✅ **Example**

Given the situation:

- 10 Executed orders
- 5 Orders canceled after 24H.
- Diversification factor of 0.7, i.e., traded 3 asset pairs in the month.
- The user with the best result in the month was 50.

We have:

- executed_orders_factor = 10 (10 * 1)
- canceled_orders_factor = 2,5 (5*0.5)
- step_1 = 12,5
- step_2 = 8,75 (12.5 * 0.7)
- score_interaction = 0.05 * sqrt(8.75 / 50) = 0.02092

✅ **Notes:**

- Penalizes spam and favors organic activity.
- Ensures balanced distribution among different profiles.

**1.6 Proof of Referral (Weight 0.10)**

Description: rewards those who refer qualified new users.

**Formula:**

$$
score\_referral = 0.10 \times \sqrt{\frac{referral\_count}{max\_referral\_count}}
$$

Where:

- score_referral: user's referral score.
- referral_count: number of referrals by the user during the month.
- max_referral_count: highest number of referrals recorded for a user during the month.

✅ **Notes:**

- Normalizes discrepancies and prevents abuse.
- Encourages organic growth of the user base.

**1.7 Loyalty (Weight 0.05)**

Description: measures the activity rate across the user's history.

**Formula:**

$$
raw\_loyalty\_score = active\_months
$$

Example:

If 10 months have passed since the first interaction and the user was active in 7 of them:

$$
raw\_loyalty\_score = 7
$$

The raw score is calculated as:

$$
score\_loyalty = 0.05 \times \sqrt{\frac{raw\_loyalty\_score}{max\_raw\_loyalty\_score}}
$$

**Normalization and weight**

- max_raw_loyalty_score: highest raw loyalty score among all users during the month.

**Note:** In the example, the raw loyalty score is 7. In the implementation, replace 7 with the actual calculated value of raw_loyalty_score.

✅ **Notes:**

- Reinforces retention and continuity.
- Values long-standing and consistent users.

#### 🧮 Aggregation of the total score

The user's individual score is the sum of all weighted components:

$$
Individual\ Score = T + F + L + S + I + R + Lo
$$

Where:

- T: Trading
- F: Frequency
- L: Liquidity
- S: Staking
- I: Interactions
- R: Referral
- Lo: Loyalty

The final score defines the participation weight of each user in the monthly rewards pool.

#### User's share in the pool

This section defines how each user's share in the month's rewards pool is calculated, based on the Individual Score.

**Definitions:**

- user_score: user's total Individual Score in the reference period (month), as defined in the "Individual Score" section.
- total_user_scores: sum of the Individual Scores of all eligible users in the month.

**Base formula for the user's share in the pool:**

$$
user\_share = \frac{user\_score}{total\_user\_scores}
$$

**Base reward allocation:**

$$
user\_rewards = R \times user\_share
$$

**Per-user cap rule (cap of 5% of the pool):**

No user can receive more than 5% of the total pool in the month.

If the user_rewards exceed 5% of R, the adjustment applies:

**General case:**

$$
user\_rewards\_capped = 0.05 \times R \times user\_score
$$

**Exception:** if user_score = 1.10, the user can exceed 5% using:

$$
user\_rewards\_capped = 0.05 \times R \times 1.10
$$

**Operational note:**

1. First, calculate the user_rewards.
2. Check the 5% cap of R.
3. If it exceeds, apply the rule above according to the user_score.

#### Example of capped distribution (users A, B, C, D)

Assume:

- Monthly rewards pool R = 25,000 units.
- Individual scores in the month:
  - User A: 1.10
  - User B: 0.70
  - User C: 0.30
  - User D: 0.20

**Sum of scores:**

$$
total\_user\_scores = 1.10 + 0.70 + 0.30 + 0.20 = 2.30
$$

**Calculation of the base reward:**

**Shares:**

- A: 1.10 / 2.30 ≈ 0.478261
- B: 0.70 / 2.30 ≈ 0.304348
- C: 0.30 / 2.30 ≈ 0.130435
- D: 0.20 / 2.30 ≈ 0.086957

**Base rewards (R = 25,000):**

- A: 25,000 × 0.478261 ≈ 11,956.52
- B: 25,000 × 0.304348 ≈ 7,608.70
- C: 25,000 × 0.130435 ≈ 3,260.87
- D: 25,000 × 0.086957 ≈ 2,173.91

**Application of the 5% cap:**

5% of R = 0.05 × 25,000 = 1,250

**Applying:**

**User A (score 1.10):**

Special cap:

$$
user\_rewards\_capped = 1,250 \times 1.10 = 1,375
$$

**User B (score 0.70):**

Weighted general cap:

$$
user\_rewards\_capped = 1,250 \times 0.70 = 875
$$

**User C (score 0.30):**

Weighted general cap:

$$
user\_rewards\_capped = 1,250 \times 0.30 = 375
$$

**User D (score 0.20):**

Weighted general cap:

$$
user\_rewards\_capped = 1,250 \times 0.20 = 250
$$

### 5. Simulated distribution example

Considering a fixed pool of 105,693.92 tokens and applying the volume factor at level 1 (25%), we have:

$$
effective\_pool = 105,693.92 \times 0.25 = 26,423.48
$$

| User | Individual Score |
|------|------------------|
| A | 0.3776 |
| B | 0.1717 |
| C | 0.5995 |

**Proportional share of the pool:**

$$
total\_score = 0.3776 + 0.1717 + 0.5995 = 1.1488
$$

| User | Proportional Reward |
|------|---------------------|
| A | 8,217.27 |
| B | 3,736.51 |
| C | 13,046.22 |

Considering that a single user cannot receive more than 5% of the pool (in this example 1,250.0), we have:

| User | Capped Reward |
|------|---------------|
| A | 1,250.0 × score = 472.00 |
| B | 1,250.0 × score = 214.62 |
| C | 1,250.0 × score = 749.37 |

**Tokens distributed: 1436**

#### Calculation of the monthly rewards amount

The amount of tokens allocated to the monthly rewards pool is defined based on pre-established annual percentages over the undistributed total of tokens. This rule ensures predictability, distribution control and long-term economic sustainability.

**Distribution rules by period**

| Period | Annual % | Objective |
|--------|----------|----------|
| Years 1 – 5 | 8% per year | Accelerated incentive for initial adoption |
| Years 6 – 10 | 4% per year | Gradual distribution adjustment |
| From Year 11 onward | 2% per year | Minimum distribution for stability |

The monthly pool value is calculated by dividing the corresponding annual percentage by 12 months, and applying it to the remaining balance of the total tokens available for rewards.

$$
monthly\_pool = \frac{annual\_percentage}{12} \times remaining\_reward\_token\_balance
$$

#### Accumulation and burn of undistributed tokens

To reinforce sustainability of the distribution and encourage platform activity, tokens not distributed in the month follow a combined logic of burn and accumulation.

The rule works as follows:

1. **Calculation of the distributed amount:**
   It is based on the Volume Factor.
   
   Example: if the pool is 100,000 tokens and the volume factor is 25%, the distributed amount will be:
   
   $$
   distributed = 100,000 \times 0.25 = 25,000
   $$

2. **Calculation of the remaining amount:**
   
   $$
   remaining = monthly\_pool - distributed
   $$

3. **Application of the burn:**
   The burn percentage will be equal to the Volume Factor applied to the remainder:
   
   $$
   burned = remaining \times volume\_factor
   $$

4. **Calculation of the amount accumulated for the next months:**
   
   $$
   accumulated = remaining - burned
   $$

**Summarizing the rule:**

$$
distributed = monthly\_pool \times volume\_factor
$$

$$
burned = (monthly\_pool - distributed) \times volume\_factor
$$

$$
accumulated = monthly\_pool - distributed - burned
$$

✅ **Applied patterns:**

- monthly_pool → Monthly token pool.
- distributed → Amount distributed.
- burn → Tokens burned.
- volume_factor → Volume factor.
- accumulated → Tokens accumulated for next periods.

This approach ensures:

- That there is always a burn proportion in periods of low activity, reducing token inflation;
- That part of the undistributed tokens is reused in the following months, maintaining the incentive for future engagement.

#### Practical example

- remaining_reward_token_balance (initial balance) = 15,000,000 tokens
- annual_percentagege (Years 1–5) = 8%

**monthly_pool:**

$$
monthly\_pool = \frac{0.08}{12} \times 15,000,000 = 100,000
$$

$$
monthly\_pool = 100,000
$$

$$
remaining\_reward\_token\_balance = 15,000,000 - 100,000 = 14,900,000
$$

**Volume Factor = 25%**

$$
distributed = 100,000 \times 0.25 = 25,000
$$

$$
burned = 75,000 \times 0.25 = 18,750
$$

$$
accumulated = 75,000 - 18,750 = 56,250
$$

In the second month, the pool calculation will be:

$$
monthly\_pool = \frac{0.08}{12} \times 14,900,000 + 56,250 = 155,916.67
$$

Remembering that the effective distribution in the second month will also depend on the volume factor in that period. Considering that in month 2 the volume factor was 50%, we have:

$$
distributed = 155,916.67 \times 0.50 = 77,958.335
$$

$$
burned = 77,958.335 \times 0.50 = 38,979.1675
$$

$$
remaining\_reward\_token\_balance = 14,956,250 - (distributed + burned) = 14,881,468.755
$$

✅ **Model advantages:**

- Distribution control and token appreciation via burn mechanism;
- Rewards proportional to the platform's real activity;
- Long-term sustainability with incentive for constant platform use;
- Dynamic and automatic adjustment, without need for external interventions.

Thus, undistributed tokens return to the remaining balance, directly impacting the calculation of subsequent months and preserving the ecosystem's economy.

#### Important Note on Rewards Distribution

Even after calculating the total rewards pool for the period, the amount actually distributed to users may be lower than the originally planned amount.

This happens because the protocol distributes rewards only among participants who meet the minimum eligibility criteria, such as:

- proven real activity
- engagement metrics foreseen in the system
- absence of abusive behavior or manipulation
- compliance with the operational rules defined for the cycle

If the number of eligible participants is low — whether due to lack of activity, low utilization or filtering for security/anti-abuse — the distribution is reduced proportionally.

This dynamic preserves:

- the system's economic sustainability,
- the integrity of incentives,
- protection against unjustified dilution,
- the alignment between rewards and real contribution.

In such situations, the entire undistributed balance is automatically returned to the protocol's total rewards pool, ensuring sustainability, predictability and continuity of the economic model over time.

### 6. Conclusion

The rewards mechanism of the Hymple was designed to create a self-regulated and meritocratic ecosystem, in which:

- Traders and market makers are rewarded for real activity;
- The system values quality, frequency and loyalty;
- Distribution adapts to the health and volume of the exchange;
- There is prevention of concentration and long-term sustainability;
- The community participates in a continuous cycle of mutual growth and appreciation.

Thus, the Rewards model of Hymple ensures balanced incentives, on-chain transparency and an efficient, fair and resilient.

---

<div class="nav-buttons">
  <a href="../18 - tokenUtility/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Token Utility</span>
  </a>
  <div class="nav-button-placeholder"></div>
</div>
