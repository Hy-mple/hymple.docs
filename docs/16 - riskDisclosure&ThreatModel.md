# Risk Disclosure & Threat Model

> *Transparency about risks and operational assumptions of the Hymple ecosystem*

The operation of a non-custodial hybrid exchange involves technological, economic, and regulatory factors that can impact performance, user experience, and security.

This section presents the main identified risks and the threat model considered in the development of Hymple, reinforcing the project's commitment to transparency and responsibility.

### 1. Market Risks

Although the protocol offers fast execution, there is no guarantee of financial results or price stability.

- Extreme volatility can cause slippage.
- Insufficient liquidity in external markets can affect prices and execution.
- Macroeconomic events can reduce demand or operational capacity.

Hymple does not intervene in prices, markets, or investment decisions.

### 2. Blockchain & On-chain Layer Risks

Hymple depends on public blockchain networks to record transactions and verify signatures.

Possible risks include:

- Network congestion, increasing fees and confirmation time.
- Failures or instability of the chain used.
- Network attacks (51%, reorganizations, outages).
- Errors in smart contracts or external integrations.

Although contracts are audited, no on-chain system is risk-free.

### 3. Technological & Operational Risks

The operation of Hymple's core depends on off-chain infrastructure — including APIs, matching engine, and validation services.

Potential risks:

- temporary unavailability of infrastructure,
- DDoS attacks,
- global connectivity issues,
- internal software failures,
- disruptions caused by external providers.

The architecture includes redundancy and mitigation, but downtime cannot be completely eliminated.

### 4. User Security Risks

Being non-custodial, the user retains full control over their assets — which brings benefits and responsibilities.

Main risks:

- loss of private key or seed phrase,
- use of infected devices,
- phishing, malicious links and fake websites,
- excessive permissions granted to third-party smart contracts,
- scams and unsafe interactions in the Web3 ecosystem.

Hymple cannot recover keys, funds, or incorrectly granted authorizations.

### 5. External Integration Risks

Hymple may connect to:

- price providers,
- blockchain networks,
- external wallets,
- analytics tools,
- aggregators or oracles.

Each integration adds dependencies and possible points of failure.

The system performs validations and monitoring, but does not control third-party operations.

### 6. Regulatory Risks

The global regulatory environment for digital assets is dynamic and varies between jurisdictions.

Possible risks include:

- sudden changes in legislation,
- rules for hybrid and non-custodial exchanges,
- compliance requirements in specific markets,
- restrictions imposed on certain regions.

Hymple will adjust its legal framework as necessary, but external changes can impact the service.

### 7. Threat Model

Hymple considers and mitigates the following vectors:

#### Active threats

- DDoS attacks on public endpoints.
- Attempts at manipulation via high-frequency bots.
- Replay attacks on signatures and messages.
- Exploitation of smart contracts.
- Malicious injections in APIs or payloads.

#### Passive threats

- Collection of external traffic metadata.
- Monitoring of usage patterns.
- Risks arising from public indexers.

#### Internal threats

- Operational errors, update or deployment failures.
- Unauthorized administrative access (mitigated by segregation and logs).
- Incorrect infrastructure configurations.

### 8. Statement of Limitations

Even with best practices, audits and controls:

- there is no guarantee of absolute security,
- no system is 100% free of flaws,
- residual risks exist in any Web3 environment.

Hymple adopts robust prevention measures, but users must understand and accept the risks inherent in using decentralized technologies.

---

<div class="nav-buttons">
  <a href="../15 - audit&TransparencyModel/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Audit & Transparency Model</span>
  </a>
  <div class="nav-button-placeholder"></div>
</div>