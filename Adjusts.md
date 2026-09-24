# Avaliação de conteúdo — docs.hymple.com

**Data:** 24 de setembro de 2026  
**Escopo:** apenas conteúdo das páginas (não layout, tema ou UX do MkDocs).  
**Páginas lidas:** Home da docs, Introduction, From Traditional to Hybrid, Global Exchange Landscape, Benefits, Architecture, Settlement & Withdrawals, Observability & Monitoring, User Experience & Onboarding, Advanced Security Architecture, Operational Resilience & Incident Response, Anti-Manipulation and Anti-Abuse Protocols, Conflict and Dispute Resolution Mechanism, System Limitations & Assumptions, Technical Governance Framework, Audit & Transparency Model, Risk Disclosure & Threat Model, Tokenomics, Token Utility, Rewards, Staking, Fees, Burn Policy.

---

## Veredito geral

A documentação está **acima da média para um projeto pré-launch**.

O bloco forte é o modelo de vault + settlement + saques + anti-abuso: específico, repetido com consistência e com limites admitidos. O bloco fraco ainda soa whitepaper de captação: landscape com números sem fonte, stack contraditório, tokenomics com fórmulas que não fecham e páginas de segurança/observability que descrevem um SOC institucional como se já existisse.

Há dois documentos misturados:

1. **Protocol spec** — vault, fees, rewards, saques.
2. **Pitch deck** — market share, “redefines the standard”.

O spec constrói confiança. O pitch dilui.

---

## O que está bem

- **Settlement & Withdrawals** é a melhor página. Princípio único, regras on-chain, dois caminhos de saque, delay de 30 min com ordens abertas, fee comportamental, “sanctions never seize funds”. Deveria ser o norte de vocabulário de todo o site.
- **Introduction** acerta o que muita gente esconde: não é DAO, governança centralizada com sinalização on-chain, matching off-chain proprietário, logs/auditorias *planned*.
- **System Limitations** e **Risk Disclosure** evitam expectativa irreal. Dependência do book centralizado, “não é 100% trustless”, risco de contrato, regras de saque.
- **Anti-Manipulation** e **Dispute Resolution** conversam com o vault. A nota de que medidas afetam *timing e custo, nunca ownership* é o ponto certo.
- **Architecture (fluxo)** está claro: wallet → interface → matching → settlement vault. A estratégia BSC → L2s está explícita e alinhada com a home.

---

## Contradições transversais (resolver primeiro)

### 1. Nome do modo de UI

| Onde | Termo usado |
| --- | --- |
| Home (hymple.com) | Simple / Advanced |
| Benefits | Beginner Mode / Trader Mode |
| Architecture | Beginner Mode / Advanced Mode |
| UX & Onboarding | Simplified mode / Advanced mode |

**Ação:** escolher um par e usar em todo lugar. Recomendação: **Simple / Advanced** (já está na home).

### 2. “Non-custodial” vs vault

Introduction, Benefits, Security e Landscape ainda vendem *non-custodial* no sentido CEX vs DEX. Settlement descreve um **vault de settlement** em que o saldo de trading *não* está na wallet até o saque.

Os dois podem coexistir se um glossário definir:

- **Chaves:** sempre do usuário.
- **Saldo de trading:** no vault; saque só pelo depositante.
- **Hymple:** coordena settlement assinado; não saca.

Hoje o leitor atento vê “full user custody” e “deposit into the settlement vault” na mesma docs e trava.

**Ação:** criar uma página-glossário curta e substituir “full user custody” / “non-custodial” soltos por **user-gated vault** + a definição acima.

### 3. Stack técnico

| Página | Stack citado |
| --- | --- |
| Benefits | Rust, Redis, Golang, Kubernetes, Docker, Kong, Solidity |
| Architecture | React/Next, C#, cache, NATS, Solidity |
| Observability | Redis, NATS, Prometheus, Loki, Tempo, Wazuh |

C# + Rust + Go no mesmo core, sem dizer *o que roda onde*, parece lista de CV.

**Ação:** documentar o stack real por camada **ou** tirar nomes de linguagem das páginas de produto. Marcar launched / target / planned.

### 4. Governança do token vs governança técnica

- Introduction / Governance: votos **não vinculantes**; o time decide.
- Tokenomics: parâmetros econômicos “can be revised through on-chain governance”; voto em fees, listings, treasury, evolução técnica.
- Staking: mudanças de APR e limite “submitted to on-chain voting”.

**Ação:** ou o voto é binding num conjunto fechado de parâmetros, ou é sinalização. Os dois textos não podem ficar assim. Listar explicitamente o que é binding e o que não é.

### 5. Take-rate no Landscape vs Fees

- Landscape estima receita com **0,05%**.
- Fees: major pairs **0,10%** base; 0,05% só com staking + maker.

**Ação:** recalcular os cenários de receita com a tabela real de fees (ou um blended rate declarado).

### 6. ERC-721 na Settlement Layer

Exchange de spot não precisa de NFT no core.

**Ação:** remover ERC-721 ou explicar o módulo. Se não há produto NFT no launch, sair.

---

## Avaliação por página

### Introduction

**Status:** boa base.

Ajustes:

- Definir o vault no primeiro parágrafo (já usam essa linguagem na home).
- “Interactions with smart contracts — swaps, staking and liquidity” mistura AMM/DEX com hybrid CLOB. O leitor não sabe se existe AMM nativo.
- Separar o que é **live no launch** do que é **roadmap on-chain**.

### From Traditional to Hybrid

A tabela é útil e perigosa. Linhas como DEX “Low liquidity”, CEX “Risk of hacks”, Hymple “High” em tudo são marketing, não análise. DEX agregadores e perps não são “low liquidity”. CEX top-tier não é só “partial transparency”.

**Ação:** trocar adjetivos absolutos por trade-offs. Ex.: “Hymple: book off-chain + vault; liquidez no launch depende de market makers.”

### Global Exchange Landscape

**Status:** página mais frágil da docs.

Problemas:

- “US$ 100B daily”, “420M users”, “35% of DEX users want friendlier UX”, “70% of CEX traders consider migrating” — sem fonte, sem data, sem metodologia.
- Cenários 0,01% / 0,1% / 0,5% de share global para um produto que ainda não abriu testnet.
- “Conservative $500/day” assume fee de 0,05% e volume que um launch sem MM não tem.
- “Global access without severe regulatory barriers” + no-KYC é afirmação legal. Risk Disclosure admite o contrário.

**Ação:** cortar números de mercado **ou** citar fonte (relatório, data, metodologia). Sem fonte, esta página reduz a credibilidade das páginas técnicas.

### Benefits

- Tom de “new paradigm / redefines the standard” sobra.
- “Full User Custody” conflita com o vault.
- Lista de tech stack fora de lugar — mover para Architecture.

### Architecture

O diagrama de fluxo está bom. O resto infla.

Ajustes:

- WalletConnect “hundreds of wallets” + lista incompleta e “1inch Wallet” sem marcador.
- “Dedicated channels for HFT and institutional volumes” no mesmo doc que admite book centralizado e test version. Marcar como fase.
- “Anti front-running” no settlement sem explicar o mecanismo (commit-reveal, batch ordering, operator sequencing?). Sem mecanismo, é slogan.
- App mobile nativo no mesmo nível que o engine — é roadmap, não arquitetura atual.

Falta o que um auditor pergunta:

- Quem opera o matcher/sequencer?
- O que acontece se o operator some?
- Como o usuário prova saldo do book vs saldo do vault?
- Qual a finality do batch?

### Settlement & Withdrawals

**Status:** quase pronta. Completar **antes do TGE** (a própria página promete):

- [ ] Papéis admin (settle, pause, upgrade) + endereços + timelock
- [ ] Fórmula ou faixa da behavioral fee
- [ ] O que “instant” na interface significa se o batch on-chain ainda não confirmou
- [ ] Se ordens abertas são canceladas no saque via UI

Sem isso, a página descreve intenção, não contrato.

### Observability & Monitoring

Stack Prometheus / Loki / Tempo / Grafana / Wazuh é plausível, mas o texto trata como sistema já em produção institucional.

**Ação:**

- Separar **target stack** vs **deployed**.
- Não misturar observability interna com transparência pública. Logs no Loki não são “auditable by the community”.
- Evitar “100% modular, low-cost” e “institutional-grade” no mesmo parágrafo.

### User Experience & Onboarding

Fluxo connect → sign nonce → deposit vault está correto e alinhado.

Ajustes:

- “Support for multiple languages” e “risk limits” soam spec de produto futuro. Rotular.
- Há um `*` solto em Retention.
- Falta o passo que mais gera ticket: o usuário precisa entender que depositou num contrato e que saque direto com ordem aberta tem delay.

### Advanced Security Architecture / Operational Resilience

Leitura de empresa que já tem SIEM, NGFW, ML anti-spoofing, playbooks, geo-replication, testes anuais NIST.

**Ação:** se parte disso é alvo, rotular **target controls**. Se afirmam no presente, um leitor vai pedir evidência no launch.

Contrato: “emergency pauses” + “movement limits” precisa cruzar com “Hymple cannot withdraw”. Pause que trava saque *do usuário* muda o modelo. Deixar explícito o que o pause faz e o que não faz.

### Anti-Manipulation and Anti-Abuse Protocols

Boa cobertura de wash / spoof / farming. ML como “future version” está honesto.

Ajustes:

- “Hashed and exportable logs” sem formato, retenção ou o que é hasheado.
- Cap 5% do pool e sqrt no volume — ok na intenção; a página de Rewards quebra a conta do cap (ver abaixo).

### Conflict and Dispute Resolution Mechanism

“Maintain legal certainty” + no-KYC + time como árbitro é tenso.

**Ação:**

- Deixar claro: é processo **operacional interno**, não tribunal.
- “Technical reversal” de trade em vault assinado precisa de hipótese concreta (somente se o settlement ainda não foi mined? never after finality?). Senão parece que o operator pode desfazer o livro.

### System Limitations & Assumptions

Boa. Incluir uma linha explícita: o matching engine é um ponto de confiança para **preço e fill**, mesmo com vault honesto.

### Technical Governance Framework

Clara ao rejeitar DAO. O processo de HIP é credível **se existir um lugar para HIPs**. Hoje é só o texto.

**Ação:** alinhar binding vs signaling com Tokenomics e Staking.

### Audit & Transparency Model

Quase tudo no futuro (“will be”). Aceitável como compromisso, não como status.

**Ação:** abrir com status factual. Ex.: “As of September 2026: no audit published, no dashboard live”, depois a lista do que vem. Sem um link, “policy of transparency” é vazio.

### Risk Disclosure & Threat Model

Sólida. Já inclui vault risk e regras de saque.

Falta:

- Risco de **operator liveness** (book para; fundos no vault, trading morto).
- Risco de **upgradeability** do contrato.

### Tokenomics

Alocação soma 70M / ~100% — ok. Vesting de team/partners razoável. Disclaimer final (“not a price forecast”) necessário.

Buracos:

- Sem curva anual do cap de rewards/staking (só “fixed annual cap”).
- Private/Public sale: “gradual unlocking after TGE, following a published schedule” — o schedule não está publicado.
- 21,4% + 21,4% em rewards/staking é muita emissão para um livro sem volume. A página de Rewards tenta mitigar com volume gates; isso precisa aparecer **aqui**.
- “Deflationary tendency” com 30M (42,8%) reservados para incentivo. Deflação só existe se burn + retenção ganharem da emissão. Mostrar um cenário numérico simples.

### Token Utility

Repete Tokenomics com mais adjetivo (“economic backbone”, “living ecosystem”).

Utilidade real: desconto de fee, staking, burn, par interno, voto. Isso cabe em meia página. O resto é preenchimento.

**Ação:** enxugar. Uma lista + pointer para Fees / Staking / Governance.

### Rewards

Página mais longa e a que mais precisa de revisão de **matemática**, não de prosa.

Problemas:

1. Pesos somam **1,10**. O texto “max 1.10 = 1.0 base + 0.10 bonus” não bate com a tabela (loyalty já é um dos 7 critérios).
2. **Fórmula do cap está errada.**

   ```text
   user_rewards_capped = 0.05 × R × user_score
   ```

   Isso não é um teto de 5% do pool. Para score 0,7 vira 3,5% de R; para 1,10 vira 5,5% de R.

   Teto correto:

   ```text
   user_rewards = min(R × user_share, 0.05 × R)
   ```

   Depois redistribuir o excedente entre os demais. A “exceção 1.10” parece patch em cima do erro.

3. Referral por *contagem* de indicados, não por volume do indicado, incentiva wallets vazias. O anti-abuse fala em “qualified”; a fórmula não.
4. “Undistributed tokens will have part burned and the remainder reaccumulated” — sem percentual.
5. Mistura vírgula decimal PT (`0,45`) em documento EN.

### Staking

Contradição grave na tabela-resumo:

- Corpo do texto: pool mensal variável; total *lifetime* 15M.
- Tabela: “Total Monthly Pool = 15,000,000 HYM” e “max per user 150,000” (1% de 15M).

Isso implica que um mês poderia emitir o allocation inteiro. Se o mensal real for 100k, o cap de 1% é 1k, não 150k.

APR 8/6/4% vs pool fixo de tokens: se o APR é sobre o staked e o pool é cap em HYM, **os dois não podem ser verdade ao mesmo tempo** sem a regra:

```text
payout = min(staked × APR_mensal, remaining_pool, user_cap)
```

**Ação:** corrigir a tabela. “Total Monthly Pool = 15,000,000” está factualmente errado.

### Fees

Tabela clara.

Problemas:

- Numeração “7.1” parece capítulo de whitepaper colado. Renumerar 1, 2, 3…
- Não está dito *em que asset* a fee é cobrada (quote? HYM?).
- 0,10% em major é alto frente a CEX VIP (0,02–0,06%) e frente ao Landscape que modelou 0,05%. Não é erro interno da tabela, mas o leitor cruza os dois.
- Destinação das fees (50% manutenção, 20% team, 10% burn, 10% treasury, 10% insurance) soma 100% e é transparente.
- Insurance fund em exchange **sem custódia de saldo livre** precisa de uma frase: cobre o quê, se o vault não perde fundos do operator?

### Burn Policy

Simples e alinhada aos 10% das fees.

Ajustes:

- Typo: “legal responsables”.
- Frequência “monthly or biweekly, as defined at launch” — definir um default.
- “Align platform growth with token value increase” é claim de preço. Risk e Tokenomics já pedem para não fazer isso.

---

## Glossário proposto (usar em todas as páginas)

| Termo | Definição curta |
| --- | --- |
| User-gated vault | Smart contract que guarda o saldo de trading. Só o endereço depositante saca. Hymple não tem função admin de saque. |
| Signed settlement | Hymple só move saldo no vault para liquidar trades assinados pelo wallet do usuário. |
| Operator | Time/infra que roda matching engine, APIs e interface. Ponto de confiança para preço e fill, não para ownership dos fundos. |
| Simple Mode | Interface reduzida para iniciantes. |
| Advanced Mode | Book, profundidade, charts, indicadores. |
| Binding vote | Parâmetro on-chain que o contrato executa se a votação passar. |
| Signaling vote | Consulta publicada; o operator decide. |
| Planned | Compromisso ainda não entregue. |
| Target control | Controle de segurança/ops desejado, não necessariamente deployado. |

---

## Checklist de correção (prioridade)

### P0 — quebra confiança ou está factualmente errado

- [ ] Corrigir fórmula do cap em Rewards e o exemplo A/B/C/D.
- [ ] Corrigir tabela de Staking: pool mensal ≠ 15M lifetime; cap de 1% sobre o pool **do mês**.
- [ ] Escrever a regra `min(APR, remaining pool, user cap)` no Staking.
- [ ] Unificar Simple / Advanced em todas as páginas.
- [ ] Definir vault vs non-custodial no glossário e aplicar.
- [ ] Alinhar governança: binding vs signaling (Introduction, Governance, Tokenomics, Staking).
- [ ] Settlement: admin roles, timelock, fórmula/faixa da behavioral fee.

### P1 — consistência e honestidade

- [ ] Cortar ou sourcedar números do Landscape.
- [ ] Recalcular receita do Landscape com a tabela de Fees.
- [ ] Unificar stack por camada; marcar launched / target / planned.
- [ ] Remover ou explicar ERC-721.
- [ ] Security / Observability / Resilience: rotular target vs deployed.
- [ ] Pause do contrato: o que trava e o que não trava (saque do usuário).
- [ ] Audit page: status factual na primeira linha.
- [ ] Publicar (ou remover a promessa de) vesting schedule de sale.

### P2 — prosa e enxugamento

- [ ] Enxugar Token Utility, Benefits e conclusões “best of both worlds”.
- [ ] From Traditional to Hybrid: trocar superlativos por trade-offs.
- [ ] Fees: tirar numeração 7.x; dizer em qual asset a fee incide.
- [ ] Rewards: percentual do burn vs reaccumulate; referral “qualified”; decimal EN.
- [ ] Burn Policy: default de frequência; remover claim de preço; corrigir typo.
- [ ] UX: explicar delay de saque direto no onboarding; remover `*` solto.
- [ ] Risk: operator liveness + upgradeability.
- [ ] Limitations: matching engine como trust point de fill.

---

## O que não precisa mudar de tese

O núcleo está bom o suficiente para um leitor sério:

- vault user-gated
- matching off-chain
- no-KYC consciente
- “não somos DAO”
- limitações e riscos escritos
- anti-abuso sem confiscação

O que quebra confiança agora **não é a tese**. É número sem fonte, fórmula que não fecha e stack que não concorda consigo mesmo.
