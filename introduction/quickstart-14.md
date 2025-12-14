---
icon: message-exclamation
---

# Risk Disclosure & Threat Model

A operação de uma exchange híbrida non-custodial envolve fatores tecnológicos, econômicos e regulatórios que podem impactar o desempenho, a experiência e a segurança do usuário.\
Esta sessão apresenta os principais riscos identificados e o modelo de ameaças considerado no desenvolvimento da Hymple, reforçando o compromisso do projeto com transparência e responsabilidade.

### **1. Riscos de Mercado**

Embora o protocolo ofereça execução rápida, não há garantia de resultados financeiros ou estabilidade de preços.

* Volatilidade extrema pode causar derrapagem (slippage).
* Liquidez insuficiente no mercado externo pode afetar preços e execução.
* Eventos macroeconômicos podem reduzir a demanda ou capacidade operacional.

A Hymple não intervém em preços, mercados ou decisões de investimento.

### **2. Riscos de Blockchain & Camada On-chain**

A Hymple depende de redes blockchain públicas para registrar transações e verificar assinaturas.

Possíveis riscos incluem:

* Congestionamento da rede, aumentando taxas e tempo de confirmação.
* Falhas ou instabilidade da chain utilizada.
* Ataques à rede (51%, reorganizações, interrupções).
* Erros em contratos inteligentes ou integrações externas.

Embora os contratos sejam auditados, nenhum sistema on-chain é isento de risco.

### **3. Riscos Tecnológicos & Operacionais**

O funcionamento do core da Hymple depende de infraestrutura off-chain — incluindo APIs, matching engine e serviços de validação.

Riscos potenciais:

* indisponibilidade temporária da infraestrutura,
* ataques DDoS,
* problemas de conectividade global,
* falhas internas de software,
* interrupções causadas por provedores externos.

A arquitetura inclui redundância e mitigação, mas downtime não pode ser totalmente eliminado.

### **4. Riscos de Segurança do Usuário**

Por ser non-custodial, o usuário mantém controle total sobre seus ativos — o que traz benefícios e responsabilidades.

Principais riscos:

* perda de chave privada ou frase-semente,
* uso de dispositivos infectados,
* phishing, links maliciosos e sites falsos,
* permissões excessivas concedidas a smart contracts de terceiros,
* golpes e interações inseguras no ecossistema Web3.

A Hymple não consegue recuperar chaves, fundos ou autorizações concedidas incorretamente.

### **5. Riscos de Integrações Externas**

A Hymple pode se conectar a:

* provedores de preço,
* redes blockchain,
* carteiras externas,
* ferramentas de análise,
* agregadores ou oráculos.

Cada integração acrescenta dependências e possíveis pontos de falha.

O sistema realiza validações e monitoramento, mas não controla a operação de terceiros.

### **6. Riscos Regulatórios**

O ambiente regulatório global para ativos digitais é dinâmico e varia entre jurisdições.

Possíveis riscos incluem:

* mudanças súbitas de legislação,
* regras para exchanges híbridas e non-custodial,
* exigências de compliance em mercados específicos,
* restrições impostas a certas regiões.

A Hymple ajustará sua estrutura legal conforme necessário, mas mudanças externas podem impactar o serviço.

### **7. Modelo de Ameaças (Threat Model)**

A Hymple considera e mitiga os seguintes vetores:

#### **Ameaças ativas**

* Ataques DDoS em endpoints públicos.
* Tentativas de manipulação via bots de alta frequência.
* Replay attacks em assinaturas e mensagens.
* Exploração de contratos inteligentes.
* Injeções maliciosas em APIs ou payloads.

#### **Ameaças passivas**

* Coleta de metadados de tráfego externo.
* Monitoramento de padrões de uso.
* Riscos decorrentes de indexadores públicos.

#### **Ameaças internas**

* Erros operacionais, falhas de atualização ou implantação.
* Acesso administrativo indevido (mitigado por segregação e logs).
* Configurações incorretas de infraestrutura.

### **8. Declaração de Limitações**

Mesmo com boas práticas, auditorias e controles:

* não há garantia de segurança absoluta,
* nenhum sistema é 100% livre de falhas,
* riscos residuais existem em qualquer ambiente Web3.

A Hymple adota medidas robustas de prevenção, mas usuários devem compreender e aceitar os riscos inerentes ao uso de tecnologias descentralizadas.
