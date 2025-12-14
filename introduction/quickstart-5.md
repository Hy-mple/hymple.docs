---
icon: sitemap
---

# Observability & Monitoring Layer

A Observability Layer do Hymple foi projetada para garantir visibilidade completa sobre todos os componentes do ecossistema — interface, APIs, execução off-chain, liquidação on-chain e infraestrutura crítica.\
Sua função é detectar anomalias rapidamente, prevenir incidentes e garantir que o sistema mantenha níveis elevados de performance, segurança e disponibilidade.

A arquitetura de observabilidade é 100% modular, baseada em ferramentas open-source de baixo custo e alta eficiência, permitindo que o projeto escale de forma sustentável.

### **8.1 Métricas (Metrics Layer)**

O Hymple utiliza o _Prometheus_ como motor de métricas, coletando dados de performance e saúde operacional em tempo real.\
Entre as métricas monitoradas estão:

* Latência e throughput da API
* Performance do motor de execução (matching engine)
* Tempos de confirmação e liquidação on-chain
* Utilização de Redis, Kafka e bancos de dados
* Consumo de CPU, memória e rede de cada microserviço
* Métricas de segurança e disponibilidade da infraestrutura

As métricas alimentam dashboards em _Grafana_, permitindo visualização clara do estado da plataforma e acompanhamento de SLAs.

### **8.2 Logs (Logging Layer)**

Os logs da plataforma são centralizados através do _Loki_, garantindo armazenamento eficiente, baixo custo e busca rápida.\
Entre os principais fluxos de logs estão:

* Eventos de ordens (submit, fill, cancel, reject)
* Acesso à API e autenticação
* Execução de contratos inteligentes
* Erros de infraestrutura e falhas de comunicação
* Eventos de segurança e auditoria

O uso combinado de Loki + Grafana fornece correlação rápida entre métricas e logs, facilitando diagnósticos e investigações.

### **8.3 Distributed Tracing (Tracing Layer)**

Para rastrear fluxos complexos entre microserviços, o Hymple adota _OpenTelemetry_ integrado ao backend _Tempo_.

Isso permite:

* Visualizar o caminho completo de uma ordem (UI → API → Execution Layer → Settlement)
* Identificar pontos de latência ou gargalos
* Auditar fluxos críticos
* Garantir que serviços distribuídos operem de forma previsível

O tracing é essencial para a performance do motor de ordens e para a confiabilidade da arquitetura híbrida.

### **8.4 Alertas (Alerting Engine)**

O sistema de alertas combina _Alertmanager_ e Grafana Alerting para monitorar:

* Latência anormal do engine
* Falha em serviços essenciais (API, Kafka, Redis)
* Erros de liquidação ou transações pendentes
* Riscos de overutilization
* Eventos suspeitos de segurança

Alertas podem ser enviados para Slack, Telegram, e-mail ou integrações de plantão, garantindo resposta rápida a incidentes.

### **8.5 Segurança e Integridade (Security Monitoring)**

A camada de segurança é reforçada com o _Wazuh_, responsável por:

* Detecção de intrusão (IDS)
* Análise de logs e eventos críticos
* File Integrity Monitoring
* Regras para hardening e conformidade
* Análise de comportamento e ameaças

A combinação de Wazuh + logs + métricas cria uma visão unificada da postura de segurança do ecossistema.

### **8.6 On-Chain Monitoring**

O sistema acompanha, em tempo real, tudo que ocorre nos contratos e na blockchain:

* Status de transações e liquidações
* Gas price, mempool e congestionamento
* Eventos dos contratos (ERC-20, ERC-721, liquidações)
* Falhas, revert e execuções críticas

A observabilidade on-chain é integrada aos painéis principais, permitindo que a equipe técnica visualize a jornada completa de um trade, desde a ordem off-chain até a liquidação on-chain.

### **Conclusão**

A camada de observabilidade do Hymple não é apenas um conjunto de ferramentas — é um componente essencial da arquitetura híbrida, garantindo:

* Transparência operacional
* Diagnóstico rápido
* Auditoria completa
* Segurança reforçada
* Execução previsível
* Continuidade e resiliência

Com um stack leve, modular e econômico, o Hymple obtém visibilidade de nível institucional sem comprometer custos ou complexidade.

**Conforme a Hymple evoluir, escalar e conquistar novos mercados, todas as ferramentas, processos e soluções aqui descritas serão aprimoradas, substituídas ou expandidas.** A plataforma foi construída com modularidade exatamente para isso: crescer sem fricção, adotar tecnologias mais avançadas quando necessário e sustentar um ecossistema cada vez mais robusto, confiável e competitivo.

Assim, a Hymple mantém seu compromisso central: oferecer uma experiência segura, eficiente e transparente para usuários iniciantes e avançados, enquanto se adapta continuamente ao cenário tecnológico e regulatório global.
