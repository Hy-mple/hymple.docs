---
icon: resolving
---

# Conflict and Dispute Resolution Mechanism

A Hymple incorpora um mecanismo estruturado de resolução de conflitos projetado para lidar com disputas relacionadas a ordens, execução, uso indevido da plataforma e falhas operacionais. Embora a plataforma opere de forma não custodial e minimize pontos de atrito, situações excepcionais podem requerer validação, auditoria ou intervenção limitada para garantir a integridade do sistema.

### **Objetivos do Mecanismo**

* **Garantir imparcialidade** em disputas envolvendo execução de ordens ou comportamento considerado abusivo.
* **Proteger a integridade do mercado**, prevenindo manipulação, erros sistêmicos ou ações maliciosas.
* **Oferecer transparência**, documentando processos e evidências disponíveis para ambas as partes.
* **Manter a segurança jurídica**, alinhando-se às práticas globais de governança e compliance Web3.

### **Escopos de Disputa Elegíveis**

As disputas tratadas por este mecanismo podem incluir:

#### **1. Divergências de Execução de Ordens**

* Alegações de execução incorreta devido a latência anormal, falhas de rede ou comportamento inesperado.
* Reclamações relacionadas a slippage excessivo em cenários não compatíveis com a liquidez do par.

#### **2. Comportamento Considerado Abusivo**

* Uso de bots não autorizados que afetem negativamente o order book.
* Tentativas de manipulação de mercado, wash trading ou spoofing.
* Ações que violem limites operacionais definidos pela plataforma.

#### **3. Falhas de Interface, API ou Match Engine**

* Diferenças entre dados exibidos no frontend e registros do backend.
* Erros na API que resultem em ordens duplicadas ou não reconhecidas.

#### **4. Questões Relacionadas a Programas de Recompensa, Staking ou Liquidez**

* Divergências em cálculos de recompensas.
* Eventuais falhas nos contratos inteligentes que interfiram no recebimento correto dos benefícios.

### **Fluxo de Resolução**

O processo segue etapas claras e auditáveis:

#### **1. Submissão da Reclamação**

O usuário envia uma solicitação formal com:

* ID das transações afetadas
* Logs locais (quando possível)
* Prints, hashes, eventos on-chain ou dados de API

#### **2. Análise Técnica**

A equipe técnica realiza:

* Verificação de logs internos
* Reconstrução do cenário de execução
* Auditoria dos smart contracts associados
* Identificação de possíveis falhas externas (rede blockchain, provedores de infraestrutura)

#### **3. Emissão de Parecer**

Após análise imparcial:

* Um parecer técnico é emitido
* Detalhando causa provável, impactos e evidências
* Propondo solução ou declarando a disputa improcedente

#### **4. Solução Proposta**

A solução pode incluir:

* Reversão técnica (quando possível e justificada)
* Compensação limitada (de acordo com políticas internas)
* Aplicação de medidas contra comportamentos abusivos
* Atualização ou correção de módulos da plataforma

### **Critérios de Imparcialidade**

* A decisão é baseada exclusivamente em **dados técnicos**, não em interpretações subjetivas.
* Logs off-chain assinados criptograficamente garantem autenticidade.
* Eventos on-chain são tratados como fonte primária e imutável.
* Todas as decisões são auditáveis mediante solicitação.

### **Limitações e Considerações**

* A Hymple **não possui custódia de fundos**; portanto, decisões não podem interferir diretamente no saldo do usuário.
* Conflitos envolvendo carteiras externas ou falhas na blockchain não se enquadram no escopo.
* A plataforma não solicita KYC, o que limita ações legais diretas contra abusos, sendo substituído por **mecanismos técnicos de proteção**.
