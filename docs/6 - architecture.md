# Architecture

> *The technical framework that combines centralized performance and decentralized settlement.*

Hymple's architecture delivers low latency, auditability and user sovereignty by combining off-chain execution with on-chain settlement.

### 💻 Interface Layer

Responsible for the user experience, it was designed with a focus on simplicity, performance and interoperability with the Web3 ecosystem.

**Technologies**

- React (Next.js) + TypeScript
- Bootstrap CSS + dark mode
- WebSockets for instant updates
- SSR and pre-rendering for maximum performance
- Initial integration via WalletConnect v2

**Mobile Roadmap**
Development of a native app for iOS and Android, offering full access to the Hymple ecosystem and optimized connectivity with mobile wallets.
Wallet Support Strategy
Hymple adopts WalletConnect v2 as the main integration layer, ensuring immediate compatibility with hundreds of non-custodial wallets. This allows users to connect their wallets securely, quickly and in a standardized way.
Wallets supported via WC2 (among others):
MetaMask (mobile via WalletConnect)
Trust Wallet
Coinbase Wallet
OKX Wallet
Rabby
Rainbow
Ledger Live (via WalletConnect)
SafePal
1inch Wallet
**Beginner Mode**

- Simplified layout
- Quick orders (limit and market)
- Visual portfolio
- Integrated educational guides
- Security confirmations

**Advanced Mode**

- Real-time order book
- Market depth
- Charting tools
- Orders: limit and market
- (Support for stop and OCO will be implemented in upcoming releases as part of the advanced orders module.)
- Low-latency execution

The interface connects to the Execution Layer via WebSocket and REST, ensuring fast, stable and optimized communication for high demand.

### Execution Layer

Operational core responsible for order processing.

**Technologies**

- Rust
- Redis (in-memory)
- Kafka
- Proprietary optimized engine
- Support for complex orders
- WebSockets for real-time

### Settlement Layer

Ensures secure and transparent on-chain settlement.

**Technologies**

- Contracts in Solidity
- Multi-chain (EVM)
- Hardhat / Foundry
- Recurring audits
- Anti front-running mechanisms
- Support for ERC-20 / ERC-721

**Optimization**

Batch settlement → reduces gas, avoids partial liquidations and increases efficiency.

### Core Protocol and Infrastructure Layer
Supports the interoperability and resilience of the ecosystem.
Technologies
Kubernetes + Docker
Georedundant load balancing
gRPC, REST and GraphQL APIs
On-chain indexers
### Security and Privacy

- Non-custodial
- No KYC
- Constant audits
- Anti-fraud and anti front-running mechanisms
- Rate limiting + firewalls

### Scalability and Resilience
Distributed microservices
Horizontal scalability
Dedicated channels for HFT and institutional volumes
7. 🔄 Interoperability
Multi-chain EVM
Expansion to non-EVM ecosystems planned in later phases, according to ecosystem maturity and market demand.
API and SDK for partners
Modular architecture for continuous updates
### Hymple's Multichain Deploy Strategy

*(BSC as a starting point, L2 as strategic expansion)*

Hymple adopts a pragmatic, growth-oriented multichain deployment strategy, balancing user adoption, operational efficiency and technological evolution. This approach was designed to minimize friction in the initial launch while positioning the ecosystem for sustainable expansion within the Ethereum universe.

**Initial Phase — Deploy on BNB Smart Chain (BSC)**
The first phase of the Hymple ecosystem will be launched on the BNB Smart Chain, chosen for strategic factors:
Motivations
Extremely simple onboarding: a large portion of global market users already use BSC natively.
Low operational cost: significantly cheaper gas and deployment fees, ideal for validation, iteration and growth phases.
Access to a large retail market: BSC has one of the largest active communities of users and developers.
Accelerated launch: allows releasing the token, staking and initial liquidity quickly, without unnecessary technical complexity.
Easy integration with popular wallets: Trust Wallet and MetaMask already work natively.
**Objectives of the Initial Phase**

- Establish a solid user base.
- Validate tokenomics, the DEX/Hybrid Engine flow and the settlement engine's performance.
- Reduce experimentation and adjustment costs.

BSC serves as an runway ideal to get the project off the ground quickly, reducing technical and financial risks.

**Phase 2 — Expansion to Ethereum Network L2s**

After validating the model and consolidating initial adoption, the ecosystem will evolve to a multichain architecture, incorporating native support for the main Layer 2 (L2) solutions in the market, including:

- Base
- Arbitrum
- Optimism

**Benefits of Expanding to L2**
Stronger institutional reputation, attracting advanced traders, market makers and strategic partners.
Safer and standardized settlement, leveraging the Ethereum-rollups ecosystem.
Much lower costs and better performance than traditional L1s (Ethereum), ideal for on-chain settlement of a hybrid exchange.
Greater global reach, connecting the token and users to the entire modern EVM ecosystem.
Objectives of Phase 2
Introduce an institutional version of Hymple.
Implement optimized settlement routes on L2.
Expand wallet compatibility via WalletConnect natively.
**Long-Term Multichain Strategy**

Hymple will be natively multichain, but with unified governance.

This allows:

- Attract users from distinct communities.
- Diversify operational risk.
- Create arbitrage and efficiency routes via cross-chain routers.

Expansion to new networks will happen gradually, following technical criteria:

- network maturity
- infrastructure security
- potential user volume
- operational costs
- wallet support

**Strategic Summary**
Stage
Network
Main Objective
Phase 1
BSC
Fast adoption, low cost, initial user base building
Phase 2
L2s
Scale, institutional reputation, security and efficiency
Phase 3
Multichain
Distributed liquidity, advanced integration, global expansion
Conclusion
Hymple is born on BSC to grow quickly and then expands to L2s to scale with safety, reputation and efficiency. This strategy — combined with Hymple's hybrid architecture, which blends the performance of a CEX with the sovereignty and transparency of a DEX — establishes a new technical standard for global hybrid exchanges, uniting accessible entry for users and a robust infrastructure geared toward the platform's institutional future.