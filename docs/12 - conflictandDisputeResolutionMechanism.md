# Conflict and Dispute Resolution Mechanism

> *Structured processes to handle operational disagreements, execution failures, and abusive behaviors*

Hymple incorporates a structured dispute resolution mechanism designed to handle disputes related to orders, execution, platform misuse, and operational failures. While the platform operates non-custodially and minimizes points of friction, exceptional situations may require validation, auditing, or limited intervention to ensure system integrity.

### Mechanism Objectives

- Ensure impartiality in disputes involving order execution or behavior considered abusive.
- Protect market integrity, preventing manipulation, systemic errors, or malicious actions.
- Provide transparency, documenting processes and evidence available to both parties.
- Maintain legal certainty, aligning with global Web3 governance and compliance practices.

### Eligible Dispute Scopes

Disputes handled by this mechanism may include:

#### 1. Order Execution Discrepancies

- Allegations of incorrect execution due to abnormal latency, network failures, or unexpected behavior.
- Complaints related to excessive slippage in scenarios not compatible with the pair's liquidity.

#### 2. Behavior Considered Abusive

- Use of unauthorized bots that negatively affect the order book.
- Attempts at market manipulation, wash trading, or spoofing.
- Actions that violate operational limits defined by the platform.

#### 3. Interface, API or Match Engine Failures

- Differences between data displayed on the frontend and backend records.
- API errors that result in duplicate or unrecognized orders.

#### 4. Issues Related to Reward Programs, Staking or Liquidity

- Discrepancies in reward calculations.
- Possible smart contract failures that interfere with the correct receipt of benefits.

### Resolution Flow

The process follows clear and auditable steps:

#### 1. Submission of the Claim

The user submits a formal request with:

- IDs of the affected transactions
- Local logs (when possible)
- Screenshots, hashes, on-chain events or API data

#### 2. Technical Analysis

The technical team performs:

- Verification of internal logs
- Reconstruction of the execution scenario
- Audit of the associated smart contracts
- Identification of possible external failures (blockchain network, infrastructure providers)

#### 3. Issuance of Opinion

After impartial analysis:

- A technical opinion is issued
- Detailing probable cause, impacts and evidence
- Proposing a solution or declaring the dispute unfounded

#### 4. Proposed Solution

The solution may include:

- Technical reversal (when possible and justified)
- Limited compensation (in accordance with internal policies)
- Application of measures against abusive behaviors
- Update or correction of platform modules

### Impartiality Criteria

- The decision is based exclusively on technical data, not on subjective interpretations.
- Off-chain logs cryptographically signed ensure authenticity.
- On-chain events are treated as the primary and immutable source.
- All decisions are auditable upon request.

### Limitations and Considerations

- Hymple does not hold custody of funds; therefore, decisions cannot directly interfere with the user's balance.
- Conflicts involving external wallets or blockchain failures do not fall within the scope.
- The platform does not request KYC, which limits direct legal actions against abuses, being replaced by technical protection mechanisms.

---

<div class="nav-buttons">
  <a href="../11 - antiManipulationandAntiAbuseProtocols/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Anti-Manipulation and Anti-Abuse Protocols</span>
  </a>
  <div class="nav-button-placeholder"></div>
</div>