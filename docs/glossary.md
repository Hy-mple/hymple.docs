---
title: Glossary
description: Canonical definitions of the terms used across the Hymple documentation.
---

# Glossary

> *Canonical definitions of the terms used across the Hymple documentation. When in doubt about any term, this page is the reference.*

## Custody model

The most important definitions in this documentation. Hymple is **non-custodial** in a precise sense — read these three entries together:

| Term | Definition |
| --- | --- |
| **User-gated vault** | Smart contract that holds the trading balance. Only the depositing address can withdraw from it. Hymple has no admin function capable of withdrawing user funds. |
| **Signed settlement** | Hymple can only move balances inside the vault to settle trades that were signed by the user's wallet. It cannot initiate withdrawals or transfers on its own. |
| **Operator** | The team/infrastructure that runs the matching engine, APIs and interface. The operator is a trust point for **price and fill execution**, never for **ownership of funds**. |

Whenever this documentation says **non-custodial**, it means exactly the model above:

- **Keys:** always belong to the user.
- **Trading balance:** held in the vault; withdrawable only by the depositor.
- **Hymple:** coordinates signed settlement; cannot withdraw.

## Interface modes

| Term | Definition |
| --- | --- |
| **Simple Mode** | Reduced interface for beginners (`/trade/simple`). |
| **Advanced Mode** | Full interface with order book, market depth, charts and indicators (`/trade/advanced`). |

## Governance

| Term | Definition |
| --- | --- |
| **Binding vote** | On-chain vote over a parameter that the contract executes automatically if the vote passes. |
| **Signaling vote** | Published consultation; the operator decides whether and how to apply the result. |

## Delivery status

Labels used across the documentation to distinguish what exists from what is planned:

| Term | Definition |
| --- | --- |
| **Planned** | A commitment not yet delivered. |
| **Target control** | A security/operations control that is designed and intended, but not necessarily deployed yet. |
