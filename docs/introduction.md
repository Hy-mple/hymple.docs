---
title: Introduction
description: What Hymple is — a hybrid, non-custodial exchange combining off-chain order matching with on-chain settlement.
---

# Introduction

> *The Next-Gen Hybrid Exchange — user-controlled keys, on-chain settlement vault, built for scale.*

Hymple is a cryptocurrency exchange designed to unify the benefits of centralized (CEX) and decentralized (DEX) models into a single hybrid solution. Its core operates with off-chain order books, allowing low latency, high liquidity and superior order execution performance.

The platform adopts a **non-custodial** architecture: funds are held in a **user-gated vault** — a smart contract that only the user can withdraw from — and Hymple has no withdrawal power, being able only to settle trades signed by the user's wallet (see [Glossary](glossary.md)). This eliminates risks associated with intermediary custody and significantly reduces common attack vectors present in traditional exchanges.

Hymple also stands out for not requiring KYC, preserving user privacy without compromising operational integrity. The approach combines security, transparency and a streamlined experience, removing barriers to entry and making the environment ideal for both beginners and advanced traders.

The goal is to establish a bridge between accessibility, financial sovereignty and global scalability, combining the execution efficiency of centralized venues with the self-custody guarantees of on-chain settlement.



### Level of Decentralization

Hymple was designed to unite freedom, security and auditability, balancing decentralization and operational efficiency.

- Only the depositing wallet can withdraw from the settlement vault. Interface withdrawals are designed to be immediate; direct on-chain withdrawals may be delayed when open orders exist (see Settlement & Withdrawals).
- No private key is stored by the platform.
- Interactions with smart contracts — swaps, staking and liquidity — occur directly on the blockchain.

As a result, Hymple does not act as a traditional broker nor as a custodial institution.

### Hybrid Architecture

The Hymple ecosystem combines two complementary layers:

#### **On-Chain Layer (Decentralized)**

- Responsible for swaps, staking, liquidity and governance of the HYM token.
- All code is open-source, auditable and verifiable.

#### **Off-Chain Layer (Operational)**

- Encompasses the matching engine, APIs, order management and monitoring services.
- For security and intellectual property reasons, its code is not open, but:
  - execution records,
  - fees,
  - operational metrics

will be made available in public and auditable logs (planned — links will be published here).

### Transparency and Audit

Hymple adopts a model of verifiable transparency, with:

- Public execution logs and operational metrics (planned)
- Immutable and traceable on-chain transactions
- Periodic independent audits (planned — reports will be linked here)
- Public dashboards with liquidity, volume and fee indicators (planned)

This framework allows the community to monitor the integrity of the system without compromising security or performance.

### Governance and Ownership

Hymple is not a DAO.

It has **centralized and transparent governance**, led by the founding team, responsible for strategic and operational decisions.

However, it incorporates elements of participatory governance via smart contracts, allowing the community to vote on topics such as:

- Improvement proposals
- Fee or reward adjustments
- Use of funds for development or marketing

These mechanisms complement — but do not replace — central governance.

### Strategic Positioning

Hymple positions itself as a hybrid, auditable and transparent ecosystem that balances decentralization and efficiency:

- 🔒 **Non-custodial**
- 🧩 **On-chain contracts** that are open-source and auditable
- ⚙ **High-performance proprietary** off-chain infrastructure
- 🌐 **Verifiable transparency**
- 🗳 **On-chain participatory governance**

The result is a hybrid exchange that combines the sovereignty of DEXs with the operational efficiency of CEXs.

---

<div class="nav-buttons">
  <a href="../" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Home</span>
  </a>
  <a href="../from-traditional-to-hybrid/" class="nav-button nav-button-next">
    <span class="nav-label">NEXT</span>
    <span class="nav-title">From Traditional to Hybrid</span>
  </a>
</div>