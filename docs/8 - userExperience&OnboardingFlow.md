# User Experience & Onboarding Flow

> *User Experience and Streamlined Onboarding Flow*

Hymple was designed to offer a smooth, intuitive, and uncomplicated journey, removing common barriers found in traditional platforms. The goal is to allow any user — beginner or advanced — to operate with full autonomy and without friction, while maintaining a high standard of security and technical efficiency.

### User Experience Design Principles

Hymple's experience is guided by the following pillars:

- **Radical simplicity:** all processes — from wallet connection to order execution — have been reduced to the minimum necessary, avoiding redundant steps.
- **Operational transparency:** each relevant action is reflected clearly in the interface, without hiding critical details from the user.
- **Full user control:** the platform never takes custody of private keys or assets, and all decisions remain exclusively in the user's hands.
- **Speed and responsiveness:** minimal loading time, instant feedback, and an interface optimized for high-volatility environments.

### Onboarding Flow

Onboarding was structured to be straightforward, without complex steps or KYC requirements, remaining aligned with the non-custodial model.

**Wallet Connection**

- The user accesses the platform.
- Selects the option "Connect Wallet".
- The preferred wallet (for example, MetaMask or another EVM-compatible wallet) requests connection authorization.
- No sensitive or personal data is requested.

**Cryptographic Authentication**

- The backend sends a unique nonce for signing.
- The user signs the nonce in their own wallet.
- The backend validates the signature and generates a session token with limited scope, used only for order submission and off-chain interactions.

This process eliminates the need for registration, password, or email.

**Initial Setup (Optional)**

After authentication, the user can:

- Set interface preferences (theme, layout, favorite pairs).
- Adjust confirmation levels for sensitive orders.
- Configure alerts, notifications, and risk limits.

### Order Execution: Simplified Experience

The platform offers a unified dashboard with:

- Low-latency off-chain order book
- Real-time charts
- Simplified buy and sell form
- Order history and on-chain transactions

The entire order submission process is optimized for:

- a minimal number of clicks,
- clear confirmation before on-chain signing (when applicable),
- immediate feedback on order status.

### Reducing User Friction

To keep the experience light and efficient:

- There is no creation of traditional accounts.
- No documents, photos, or KYC are requested.
- The interface adapts its complexity:
  - Simplified mode: ideal for beginners.
  - Advanced mode: with indicators, market depth, APIs, and professional parameters.

### Retention and Engagement

Hymple uses elements that encourage continued use, without intrusive mechanisms:

- - Interface consistent with market standards.
- Usage-based rewards system (staking, reduced fees, incentives in HYM).
- Fast re-entry flow: wallet reconnection happens instantly.

### Accessibility and Availability

The frontend is built with a focus on:

- smooth behavior on slow connections,
- compatibility with mobile devices and small screens,
- support for multiple languages.

The entire interface follows UX best practices ensuring a consistent experience for all profiles.

---

<div class="nav-buttons">
  <a href="/7 - observability&MonitoringLayer/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Observability & Monitoring</span>
  </a>
  <a href="/9 - advancedSecurityArchitecture/" class="nav-button nav-button-next">
    <span class="nav-label">NEXT</span>
    <span class="nav-title">Advanced Security Architecture</span>
  </a>
</div>