# Observability & Monitoring Layer

> *Unified Telemetry for Performance, Security, and On-Chain Integrity*

Hymple's Observability Layer was designed to ensure complete visibility across all components of the ecosystem — interface, APIs, off-chain execution, on-chain settlement, and critical infrastructure.

Its role is to detect anomalies quickly, prevent incidents, and ensure the system maintains high levels of performance, security, and availability.

The observability architecture is 100% modular, based on low-cost, high-efficiency open-source tools, allowing the project to scale sustainably.

### Metrics (Metrics Layer)

Hymple uses Prometheus as the metrics engine, collecting performance and operational health data in real time.

Among the monitored metrics are:

- API latency and throughput
- Execution engine (matching engine) performance
- On-chain confirmation and settlement times
- Utilization of Redis, Kafka, and databases
- CPU, memory, and network consumption of each microservice
- Infrastructure security and availability metrics

The metrics feed dashboards in Grafana, enabling clear visualization of the platform's state and SLA tracking.

### Logs (Logging Layer)

Platform logs are centralized through Loki, ensuring efficient storage, low cost, and fast search.

Among the main log streams are:

- Order events (submit, fill, cancel, reject)
- API access and authentication
- Smart contract execution
- Infrastructure errors and communication failures
- Security and audit events

The combined use of Loki + Grafana provides quick correlation between metrics and logs, facilitating diagnostics and investigations.

### Distributed Tracing (Tracing Layer)

To trace complex flows between microservices, Hymple adopts OpenTelemetry integrated into the backend Tempo.

This enables:

- Viewing the full path of an order (UI → API → Execution Layer → Settlement)
- Identifying latency points or bottlenecks
- Auditing critical flows
- Ensuring that distributed services operate predictably

Tracing is essential for the order engine's performance and the reliability of the hybrid architecture.

### Alerts (Alerting Engine)

The alerting system combines Alertmanager and Grafana Alerting to monitor:

- Abnormal engine latency
- Failure in essential services (API, Kafka, Redis)
- Settlement errors or pending transactions
- Risks of overutilization
- Suspicious security events

Alerts can be sent to Slack, Telegram, email, or on-call integrations, ensuring a rapid response to incidents.

### Security and Integrity (Security Monitoring)

The security layer is reinforced with Wazuh, responsible for:

- Intrusion detection (IDS)
- Analysis of logs and critical events
- File Integrity Monitoring
- Hardening and compliance rules
- Behavioral and threat analysis

The combination of Wazuh + logs + metrics creates a unified view of the ecosystem's security posture.

### On-Chain Monitoring

The system monitors, in real time, everything that happens in contracts and on the blockchain:

- Transaction and settlement status
- Gas price, mempool, and congestion
- Contract events (ERC-20, ERC-721, liquidations)
- Failures, reverts, and critical executions

On-chain observability is integrated into the main dashboards, allowing the technical team to visualize the complete journey of a trade, from the off-chain order to the on-chain settlement.

### Conclusion

Hymple's observability layer is not just a set of tools — it is an essential component of the hybrid architecture, ensuring:

- Operational transparency
- Rapid diagnosis
- Complete auditability
- Enhanced security
- Predictable execution
- Continuity and resilience
With a lightweight, modular, and economical stack, Hymple obtains institutional-grade visibility without compromising costs or complexity.
As Hymple evolves, scales, and enters new markets, all tools, processes, and solutions described here will be improved, replaced, or expanded. The platform was built with modularity exactly for this: to grow without friction, adopt more advanced technologies when necessary, and sustain an increasingly robust, reliable, and competitive ecosystem.
Thus, Hymple maintains its core commitment: to offer a secure, efficient, and transparent experience for novice and advanced users alike, while continuously adapting to the global technological and regulatory landscape.

---

<div class="nav-buttons">
  <a href="/6 - architecture/" class="nav-button nav-button-prev">
    <span class="nav-label">PREVIOUS</span>
    <span class="nav-title">Architecture</span>
  </a>
  <a href="/8 - userExperience&OnboardingFlow/" class="nav-button nav-button-next">
    <span class="nav-label">NEXT</span>
    <span class="nav-title">User Experience & Onboarding</span>
  </a>
</div>