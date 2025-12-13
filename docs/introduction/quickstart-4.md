# Architecture

A arquitetura do Hymple entrega **baixa latência**, **auditabilidade** e **soberania do usuário** ao unir execução off-chain com liquidação on-chain.

### **1. 💻 Camada de Interface (Interface Layer)**

Responsável pela experiência do usuário, foi projetada com foco em simplicidade, desempenho e interoperabilidade com o ecossistema Web3.

**Tecnologias**

* React (Next.js) + TypeScript
* Bootstrap CSS + dark mode
* WebSockets para atualização instantânea
* SSR e pré-renderização para máxima performance
* Integração inicial via **WalletConnect v2**

**Roadmap Mobile**\
Desenvolvimento de um aplicativo nativo para **iOS e Android**, oferecendo acesso completo ao ecossistema Hymple e conectividade otimizada com carteiras mobile.

#### **Estratégia de Suporte a Carteiras**

A Hymple adota **WalletConnect v2** como camada principal de integração, garantindo compatibilidade imediata com centenas de carteiras non-custodial. Isso permite que os usuários conectem suas wallets de forma segura, rápida e padronizada.

Carteiras suportadas via WC2 (entre outras):

* MetaMask (mobile via WalletConnect)
* Trust Wallet
* Coinbase Wallet
* OKX Wallet
* Rabby
* Rainbow
* Ledger Live (via WalletConnect)
* SafePal
* 1inch Wallet

#### **Modo Iniciante**

* Layout simplificado
* Ordens rápidas (limit e market)
* Portfólio visual
* Guias educativos integrados
* Confirmações de segurança

#### **Modo Avançado**

* Order book em tempo real
* Profundidade de mercado
* Ferramentas gráficas
* **Ordens: limit e market**
* _(Suporte a stop e OCO será implementado nas próximas versões, como parte do módulo de ordens avançadas.)_
* Execução de baixa latência

A interface se conecta ao Execution Layer através de WebSocket e REST, garantindo comunicação rápida, estável e otimizada para alta demanda.

### **2. ⚙ Camada de Execução (Execution Layer)**

Núcleo operacional responsável pelo processamento de ordens.

**Tecnologias**

* Rust
* Redis (in-memory)
* Kafka
* Motor proprietário otimizado
* Suporte a ordens complexas
* WebSockets para tempo real

### **3. 🔗 Camada de Liquidação (Settlement Layer)**

Garante liquidação on-chain segura e transparente.

**Tecnologias**

* Contratos em Solidity
* Multi-chain (EVM)
* Hardhat / Foundry
* Auditorias recorrentes
* Mecanismos anti front-running
* Suporte a ERC-20 / ERC-721

#### **Otimização**

Batch settlement → reduz gas, evita liquidações parciais e aumenta eficiência.

### **4. 🧩 Camada de Protocolo e Infraestrutura (Core Protocol Layer)**

Sustenta a interoperabilidade e a resiliência do ecossistema.

**Tecnologias**

* Kubernetes + Docker
* Load balancing georredundante
* APIs gRPC, REST e GraphQL
* Indexadores on-chain

### **5. 🔐 Segurança e Privacidade**

* Non-custodial
* Sem KYC
* Auditorias constantes
* Mecanismos anti fraude e anti front-running
* Rate limiting + firewalls

### **6. ⚡ Escalabilidade e Resiliência**

* Microserviços distribuídos
* Escalabilidade horizontal
* Canais dedicados para HFT e volumes institucionais

### **7. 🔄 Interoperabilidade**

* Multi-chain EVM
* Expansão para **ecossistemas não-EVM** prevista em fases posteriores, conforme maturidade do ecossistema e demanda de mercado.
* API e SDK para parceiros
* Arquitetura modular para atualizações contínuas

## 📘 **Estratégia de Deploy Multichain da Hymple**

_(BSC como ponto de partida, L2 como expansão estratégica)_

A Hymple adota uma estratégia de implantação multichain pragmática e orientada ao crescimento, equilibrando **adoção do usuário**, **eficiência operacional** e **evolução tecnológica**. Essa abordagem foi desenhada para minimizar fricções no lançamento inicial e, ao mesmo tempo, posicionar o ecossistema para expansão sustentável dentro do universo Ethereum.

### **1. Fase Inicial — Deploy na BNB Smart Chain (BSC)**

A primeira fase do ecossistema Hymple será lançada na **BNB Smart Chain**, escolhida por fatores estratégicos:

#### **Motivações**

* **Onboarding extremamente simples**: grande parte dos usuários do mercado global já utiliza BSC de forma nativa.
* **Baixo custo operacional**: taxas de gas e deploy significativamente mais baratas, ideais para fases de validação, iteração e crescimento.
* **Acesso a um grande mercado retail**: a BSC conta com uma das maiores comunidades ativas de usuários e desenvolvedores.
* **Lançamento acelerado**: permite liberar o token, o staking e a liquidez inicial rapidamente, sem complexidade técnica desnecessária.
* **Fácil integração com carteiras populares**: Trust Wallet e MetaMask já funcionam nativamente.

#### **Objetivos da Fase Inicial**

* Estabelecer base sólida de usuários.
* Validar tokenomics, fluxo do DEX/Hybrid Engine e performance do motor de liquidação.
* Reduzir custos de experimentação e ajustes.

A BSC funciona como um **runway** ideal para tirar o projeto do papel com velocidade, reduzindo riscos técnicos e financeiros.

### **2. Fase 2 — Expansão para L2s da Rede Ethereum**

Após validação do modelo e a consolidação  da adoção inicial, o ecossistema evoluirá para uma arquitetura **multichain**, incorporando supote nativo às principais Layer 2 (L2) do mercado, incluindo:

* **Base**
* **Arbitrum**
* **Optimism**

#### **Benefícios da Expansão para L2**

* **Reputação institucional mais forte**, atraindo traders avançados, market makers e parceiros estratégicos.
* **Liquidação mais segura e padronizada**, aproveitando o ecossistema Ethereum-rollups.
* **Performance e custos muito menores** que L1s tradicionais (Ethereum), ideal para settlement on-chain de uma exchange híbrida.
* **Maior alcance global**, conectando o token e os usuários a todo o ecossistema EVM moderno.

#### **Objetivos da Fase 2**

* Introduzir versão institucional da Hymple.
* Implementar rotas de settlement otimizadas em L2.
* Expandir a compatibilidade com carteiras via WalletConnect de forma nativa.

### **3. Estratégia Multichain a Longo Prazo**

A Hymple será nativamente **multichain**, mas com governança unificada.\
Isso permite:

* Atrair usuários de comunidades distintas.
* Diversificar risco operacional.
* Criar rotas de arbitragem e eficiência via roteadores cross-chain.

A expansão para novas redes acontecerá gradualmente, seguindo critérios técnicos:

* maturidade da rede
* segurança da infraestrutura
* volume potencial de usuários
* custos operacionais
* suporte de carteiras

### **Resumo Estratégico**

| Etapa      | Rede           | Objetivo Principal                                                 |
| ---------- | -------------- | ------------------------------------------------------------------ |
| **Fase 1** | **BSC**        | Adoção rápida, baixo custo, construção inicial da base de usuários |
| **Fase 2** | **L2s**        | Escala, reputação institucional, segurança e eficiência            |
| **Fase 3** | **Multichain** | Liquidez distribuída, integração avançada, expansão global         |

### **Conclusão**

A Hymple nasce na BSC para crescer rápido e, em seguida, expande para L2s para escalar com segurança, reputação e eficiência. Essa estratégia — aliada à arquitetura híbrida da Hymple, que combina a performance de uma CEX com a soberania e transparência de uma DEX — estabelece um novo padrão técnico para exchanges híbridas globais, unindo entrada acessível para usuários e uma infraestrutura robusta voltada ao futuro institucional da plataforma.
