# Anti-Manipulation and Anti-Abuse Protocols

> *Ensuring a fair, transparent, and manipulation-resistant environment*

Hymple adopts a set of advanced mechanisms to preserve the integrity of the platform, prevent abusive behaviors, and ensure that the trading environment remains fair, secure, and sustainable — especially given its non-custodial, no KYC architecture with high-performance centralized engine.

These protocols balance user privacy, transparent governance, and active protection against practices that could distort volume, prices, or the distribution of rewards.

### 1. Objectives of the Prevention System

The Anti-Manipulation and Anti-Abuse Protocols (PAMA) were designed to:

- **Prevent artificial generation of volume and liquidity**
- **Block undue acquisition of rewards**
- **Protect the order book against distortions**
- **Ensure a competitive and fair environment**
- **Defend the platform against economic and behavioral attacks**

The system operates with continuous auditing, clear rules, and behavior-based detection algorithms.

### 2. Types of Abuses Monitored

Hymple monitors and prevents the main types of abuse known in the crypto market:

#### 2.1 Wash Trading

User or group executing trades among themselves to artificially inflate volume.

#### 2.2 Self-Trading

Orders from the same user that cross to generate "false volume".

#### 2.3 Spoofing & Layering

Placing large orders with the intention of cancellation to manipulate perceived liquidity.

#### 2.4 Coordinated Pump & Dump

Artificial and abrupt movements intended to manipulate price.

#### 2.5 Abuse in the Rewards Program

- Creation of multiple wallets for farming
- Execution of volume without real risk
- Temporarily inflated liquidity only to qualify

#### 2.6 Bridges and Looping Bots

Scripts that send and remove liquidity in rapid cycles to capture unrealistic scores.

#### 2.7 Improper Automated Interactions

Bots using non-organic repetitive behavior to inflate activity metrics.

### 3. Technical Detection Framework

Hymple combines heuristics, behavioral signatures, and statistical algorithms to identify anomalous patterns.

#### 3.1 Execution Pattern Analysis

- Rate of order crossing "self-match"
- Abnormality in the spread between orders from the same address
- Atypical frequency of execution and cancellation

#### 3.2 Statistical Models

- Analysis of standard deviation of relative prices
- Detection of clusters of simultaneous behavior
- Abnormal volume per time period

#### 3.3 Machine Learning (future version)

Supervised models to identify:

- Harmful bots
- Repeated manipulation patterns
- Correlation between multiple wallets

#### 3.4 Public Audit

Hashed and exportable logs ensure transparency and allow external audit without exposing sensitive data.

### 4. Reaction and Mitigation Protocol

When suspicious behavior is detected, Hymple applies progressive responses:

#### 4.1 Temporary Flag

The user's reward score is temporarily frozen until review.

#### 4.2 Score Reduction

Activity, volume, and liquidity metrics are recalculated with proportional penalization.

#### 4.3 Reward Exclusion

Period rewards are zeroed for proven cases of manipulation.

#### 4.4 Address Blocking

Recurrent wallets may be prevented from interacting with:

- Reward system
- Market maker program
- Premium features

**Note:** There is never a block on platform access or the user's funds, as the system is non-custodial.

#### 4.5 Dynamic Adjustment of Algorithms

Each incident generates automatic recalibration of detection thresholds.

### 5. Prevention Integrated into the Rewards Mechanism

Hymple's rewards system already incorporates safeguards to prevent exploitation:

- **Use of square root in the volume calculation**
- **Limited weights for staking and liquidity**
- **Maximum limit of 5% of the monthly pool per user**
- **Relative scoring based on normalized behavior**
- **Detection of liquidity inflated over short windows**
- **Penalization of interactions without pair diversity**

These measures drastically reduce:

- Volume farming
- Direct manipulation of scores
- Artificial explosions of weight in some criterion

### 6. Transparency and Governance of Penalties

To strengthen ecosystem trust:

- **Penalties are recorded in hashed public logs**
- **Punishment criteria are disclosed**
- **Decisions follow a clear, non-subjective policy**
- **Updates to the rules are always documented**

The objective is to maintain a fair environment without compromising privacy or freedom of use.

### 7. Market Protections in the Matching Engine

The off-chain execution engine applies:

- **Circuit breakers** for abrupt price movements
- **Price-band protections** against manipulative orders
- **Limits on the frequency** of new orders per wallet
- **Automatic cancellation** of detected spoofing
- **Latency filters** to prevent malicious advantage

### 8. Limitations and Assumptions

As the system is non-custodial and without KYC:

- Hymple does not identify users, only behaviors
- Multiple wallets are allowed, provided they are not abusive
- Rules are applied equally and automatically

**The focus is on behavior, not identity.**

### 9. Conclusion

Hymple's Anti-Manipulation and Anti-Abuse Protocols ensure:

- **Market integrity**
- **Reliability of volume and liquidity data**
- **Protection of rewards against fraud**
- **A fair competitive environment**
- **Continuous defense against malicious behaviors**

All this while preserving Hymple's core principles: **non-custodial nature, privacy, transparency, and high performance.**

<div class="nav-buttons">
  <a href="../10 - operationalResilience&IncidentResponse/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Operational Resilience & Incident Response</span>
  </a>
  <div class="nav-button-placeholder"></div>
</div>
