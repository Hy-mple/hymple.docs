# User Experience & Onboarding Flow

A Hymple foi projetada para oferecer uma jornada fluida, intuitiva e descomplicada, eliminando barreiras comuns encontradas em plataformas tradicionais. O objetivo é permitir que qualquer usuário — iniciante ou avançado — consiga operar com autonomia total e sem fricção, mantendo ao mesmo tempo um padrão elevado de segurança e eficiência técnica.

### **1. Princípios de Design da Experiência do Usuário**

A experiência da Hymple é orientada pelos seguintes pilares:

* **Simplicidade radical:** todos os processos — desde a conexão da carteira até a execução de ordens — foram reduzidos ao mínimo necessário, evitando etapas redundantes.
* **Transparência operacional:** cada ação relevante é refletida de forma clara na interface, sem ocultar detalhes críticos do usuário.
* **Controle total do usuário:** a plataforma nunca assume custódia de chaves privadas ou ativos, e todas as decisões permanecem exclusivamente nas mãos do usuário.
* **Velocidade e responsividade:** tempo de carregamento mínimo, feedback instantâneo e interface otimizada para ambientes de alta volatilidade.

### **2. Fluxo de Onboarding**

O onboarding foi estruturado para ser direto, sem etapas complexas ou exigências de KYC, mantendo o alinhamento com o modelo não-custodial.

#### **2.1. Conexão da Carteira**

1. O usuário acessa a plataforma.
2. Seleciona a opção **“Connect Wallet”**.
3. A carteira preferida (por exemplo, MetaMask ou outra compatível com EVM) solicita autorização de conexão.
4. Nenhum dado sensível ou pessoal é solicitado.

#### **2.2. Autenticação Criptográfica**

1. O backend envia um **nonce único** para assinatura.
2. O usuário assina o nonce em sua própria carteira.
3. O backend valida a assinatura e gera um **token de sessão** limitado, utilizado apenas para envio de ordens e interações off-chain.

_Esse processo elimina a necessidade de cadastro, senha ou e-mail._

#### **2.3. Configuração Inicial (Opcional)**

Após autenticado, o usuário pode:

* Definir preferências de interface (tema, layout, pares favoritos).
* Ajustar níveis de confirmação para ordens sensíveis.
* Configurar alertas, notificações e limites de risco.

### **3. Execução de Ordens: Experiência Simplificada**

A plataforma oferece um painel unificado com:

* **Livro de ofertas off-chain de baixa latência**
* **Gráficos em tempo real**
* **Formulário simplificado de compra e venda**
* **Histórico de ordens e transações on-chain**

Todo processo de envio de ordens é otimizado para:

* mínima quantidade de cliques,
* confirmação clara antes da assinatura on-chain (quando aplicável),
* retorno imediato sobre status da ordem.

### **4. Redução de Fricção para o Usuário**

Para manter a experiência leve e eficiente:

* Não há criação de contas tradicionais.
* Nenhum documento, foto ou KYC é solicitado.
* A interface adapta sua complexidade:
  * **Modo simplificado:** ideal para iniciantes.
  * **Modo avançado:** com indicadores, profundidade de mercado, APIs e parâmetros profissionais.

### **5. Retenção e Engajamento**

A Hymple utiliza elementos que incentivam o uso contínuo, sem mecanismos intrusivos:

* Interface coerente com padrões de mercado.
* Sistema de recompensas baseado em uso (staking, taxas reduzidas, incentivos em HYM).
* Fluxo rápido de reentrada: reconexão de carteira acontece instantaneamente.

### **6. Acessibilidade e Disponibilidade**

O frontend é construído com foco em:

* comportamento fluido em conexões lentas,
* compatibilidade com dispositivos móveis e telas reduzidas,
* suporte a múltiplos idiomas.

Toda interface segue boas práticas de UX garantindo uma experiência consistente para todos os perfis.
