---
description: Sistema de incentivos e valorização dos usuários Hymple.
icon: gift
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Rewards

#### **1. Introdução**

O ecossistema Hymple adota um mecanismo de recompensas inovador, destinado a incentivar a participação ativa, a liquidez e o comportamento saudável dos usuários na plataforma. A distribuição de tokens nativos é estruturada de forma **proporcional ao impacto individual do usuário na exchange**, considerando volume de negociação, frequência de uso, liquidez fornecida, staking, comportamento de qualidade, indicações e fidelidade.

O objetivo principal do mecanismo de recompensas é **fomentar a utilização sustentável da plataforma**, premiando usuários que contribuem para o crescimento, estabilidade e integridade do ecossistema, enquanto controla a liberação de tokens para evitar concentração excessiva.

{% hint style="info" %}
💡 **Nota:** O programa de recompensas da Hymple possui um limite máximo e imutável de **15.000.000 HYM**.\
Esses tokens **não serão mintados**, mas sim **pré-reservados durante a criação do token**, garantindo total transparência, controle de emissão e preservação da escassez dentro do ecossistema.
{% endhint %}

#### **2. Estrutura de pesos e critérios**

Durante a fase de lançamento (ano 1 ao ano 3), as recompensas serão calculadas com base nos seguintes critérios, com pesos predefinidos:

| Critério                      | Descrição                                                                                                                          | Peso |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | :--: |
| Volume de Negociação          | Reflete a quantidade total de transações realizadas pelo usuário na plataforma. Incentiva a liquidez e o uso contínuo da exchange. | 0,45 |
| Atividade do Usuário          | Mede a frequência de uso da plataforma.                                                                                            | 0,15 |
| Provisão de Liquidez          | Recompensa market makers e usuários que contribuem para profundidade do livro.                                                     | 0,25 |
| Staking de Tokens             | Usuários que mantêm tokens Hymple em staking participam ativamente da segurança e da governança da plataforma.                     | 0,05 |
| Interações de Qualidade       | Avalia ordens executadas, tempo médio de permanência e integridade das operações.                                                  | 0,05 |
| Prova de Indicação (PoR)      | Usuários que indicam novos participantes recebem reconhecimento pelo crescimento orgânico da comunidade.                           | 0,10 |
| Fidelidade e Retenção (Bônus) | Bônus adicional para usuários que mantêm atividade contínua e consistente ao longo do tempo.                                       | 0,05 |

**Total de Pesos:** 1,1

A soma das métricas gera um **score individual normalizado**, que define a proporção de cada usuário sobre o pool de recompensas.

> **Nota:** O total ponderado superior a 1 reflete a possibilidade de amplificação de recompensas para usuários que se destacam em múltiplos critérios, promovendo um ecossistema mais robusto e ativo desde a fase de lançamento.

**Revisão de pesos nas próximas fases**

Para garantir alinhamento com o crescimento da plataforma e com o perfil da base de usuários, os pesos serão revisados nas fases subsequentes:

1. **Fase de crescimento (ano 4 ao ano 6)** – Ajustes focados em provisão de liquidez, programa de indicação e o que mais for necessário para ajudar a exchange no seu crescimento.
2. **Fase de maturidade (ano 7 em diante)** – Ajustes voltados para recompensar a fidelidade, governança e engajamento estratégico, mantendo o equilíbrio entre volume, atividade e retenção de usuários.

Essa abordagem dinâmica permite que o sistema de recompensas evolua junto com a plataforma, mantendo a equidade e estimulando comportamentos que agregam valor ao ecossistema Hymple.

#### **3.** Distribuição de recompensas ponderada por volume

Para alinhar a distribuição de recompensas com a atividade econômica real da plataforma, a distribuição programada para cada mês será ajustada conforme o volume total negociado na plataforma no mês anterior ao de apuração  (em USD). Esse mecanismo:

* preserva a sustentabilidade do token reduzindo a distribuição em períodos de menor atividade; e
* aumenta a distribuição quando o uso da plataforma se intensifica.

Em termos práticos, o total de tokens programados para o mês é multiplicado por um percentual de distribuição definido pela faixa de volume mensal apurada.

Por exemplo, se o pool mensal de recompensas for de 100.000 tokens e o volume de negociação do mês anterior foi de **US$ 50 milhões ou menos**, apenas **25%** (25.000 tokens) serão distribuidos. Caso o volume atinja faixas superiores nos meses seguintes, a porcentagem de liberação aumenta progressivamente.

**Regra de distribuição por faixa de volume**

A distribuição efetiva no mês seguirá a tabela abaixo:

**Volume-weighted distribution**

| Faixa de Volume Mensal (USD) | Percentual de distribuição |
| ---------------------------- | :------------------------: |
| ≤ $50M                       |             25%            |
| $50M – $200M                 |             50%            |
| $200M – $500M                |             60%            |
| $500M – $1B                  |             80%            |
| > $1B                        |            100%            |

**Fórmula**

* v = volume mensal apurado (USD)
* p = pool programado para o mês
* f(v) = percentual de distribuição conforme a faixa da tabela

Distribuição efetiva no mês:

* Distribuição = p × f(v)

Exemplos:

* Se p = 100.000 e v ≤ $50M → f(v) = 25% → Distribuição = 25.000 tokens.
* Se p = 100.000 e $50M < v ≤ $200M → f(v) = 50% → Distribuição = 50.000 tokens.
* Se p = 100.000 e $200M < v ≤ $500M → f(v) = 60% → Distribuição = 60.000 tokens.
* Se p = 100.000 e $500M < v ≤ $1B → f(v) = 80% → Distribuição = 80.000 tokens.
* Se p = 100.000 e v > $1B → f(v) = 100% → Distribuição = 100.000 tokens.

**Considerações operacionais**

* **Janela de Apuração:** mês civil em UTC.
* **Cálculo de Volume:** volume consolidado em USD de todos os pares suportados pela exchange.
* **Conversão para USD:** médias ponderadas por volume ou fontes de mercado confiáveis.
* **Publicação:** o percentual aplicável (f(v)) é divulgado no relatório mensal de métricas.
* **Cumulatividade:** tokens não distribuídos terão parte **queimada** e o restante **reacumulado no pool de recompensas**.
* **Auditoria e Transparência:** metodologia e dados agregados serão disponibilizados para **verificação comunitária**.

**Racional de desenho**

* **Sustentabilidade:** controla a liberação conforme a demanda e o uso real da plataforma.
* **Alinhamento de Incentivos:** quanto maior o volume e engajamento da comunidade, maior a distribuição mensal.
* **Previsibilidade:** faixas e percentuais fixos oferecem **clareza** e **estabilidade** aos participantes.

#### **4. Cálculo das recompensas**

**Score Individual**

O **Score Individual** mede a contribuição e o engajamento de cada usuário **no mês de referência** para o ecossistema. Ele é composto por sete componentes ponderados e normalizados, com uso de raiz para reduzir o efeito de valores extremos. O score máximo possível é 1,10 (1,0 pelos componentes base + 0,10 de bônus). Cada componente é calculado e somado conforme abaixo.

<mark style="color:$danger;">**1.1 Trading Volume (Peso 0,45)**</mark>

* **Descrição**: incentiva maior volume transacionado na plataforma.

$$
score_{trading} = 0.45 \times \sqrt{\frac{user\_volume}{max\_user\_volume}}
$$

Onde:

* `score_trading`: score de volume de trade do usuário.
* `user_volume`: volume de trading do usuário durante o mês.
* `max_user_volume`: maior volume de trading registrado para um usuário durante o mês.

✅ **Observações:**

* A raiz quadrada reduz disparidades entre grandes e pequenos traders.
* Promove **atividade constante**, não apenas picos de volume.

<mark style="color:$danger;">**1.2 Frequência (Peso 0,15)**</mark>

* **Descrição**: mede a regularidade de atividade no mês.

$$
score_{frequency} = 0.15 \times \sqrt{\frac{active\_days}{possible\_active\_days}}
$$

Onde:

* `score_frequency`: score de frequência do usuário.
* `active_days`: número de dias do mês que o usuário teve atividade.
* `possible_active_days`: total de dias possíves do mês (30 ou 31).

✅ **Observações**:

* Premia consistência de engajamento, não apenas volume.
* Valoriza usuários com presença contínua.

<mark style="color:$danger;">**1.3 Liquidez (Peso 0,25)**</mark>

* **Descrição**: avalia a contribuição do usuário como provedor de liquidez.

$$
score_{liquidity} = 0.25 \times \sqrt{\frac{user\_liquidity\_total}{max\_user\_liquidity}}
$$

Onde:

* `score_liquidity`: score de liquidez do usuário.
* `user_liquidity_total`: total de liquidez provida pelo usuário durante o mês.
* `max_user_liquidity`: maior valor de liquidez provida registrada para um usuário durante o mês.



✅ **Observações**:

* Incentiva **provisão estável de liquidez**.
* Reduz disparidades entre grandes e pequenos provedores.



<mark style="color:$danger;">**1.4 Staking (Peso 0,05)**</mark>

* **Descrição**: recompensa quem mantém valor em staking ao longo do mês.

$$
score_{staking} =
\begin{cases}
0.05 \times \sqrt{\frac{user\_staking\_amount}{max\_staking\_amount}} \times \frac{staking\_days}{days\_in\_month}
\end{cases}
$$

\
Onde:

* `score_staking`: score de staking do usuário.
* `user_staking_amount`: total de tokens em staking do usuário.
* `max_staking_amount`: maior valor em staking registrado para  um usuário.
* `staking_days`: número de dias com os tokens em staking.
* `days_in_month`: total de dias do mês (30 ou 31).

✅ **Observações**:

* Valoriza comprometimento e estabilidade.
* Garante que apenas usuários **elegíveis** participem.

<mark style="color:$danger;">**1.5 Interações de Qualidade (Peso 0,05)**</mark>

* **Descrição**: valoriza interações genuínas e diversificadas.
* **Etapas:**

1. **Ordens ponderadas:**

* Executada → peso 1.0
* Cancelada (>24h) → peso 0.5

Ex: 10 Ordens executadas + 5 ordens canceladas após 24 = **12,5**

$$
{executed\_order\_factor} = {sum\_qtd\_executed\_orders} \times {weight\_factor}
$$

$$
{canceled\_orders\_factor} = {sum\_orders\_canceled\_after\_24H} \times {weight\_factor}
$$

$$
{step\_1} = {executed\_order\_factor} + {canceled\_orders\_factor}
$$

2. **Aplicação do fator de diversificação:** baseado no número de pares operados.

| Número de pares | Fator de diversificação |
| --------------- | :---------------------: |
| 1               |           0,3           |
| 2               |           0,5           |
| 3               |           0,7           |
| 4 ou mais       |           1,0           |

$$
{step\_2} = {step\_1} \times {diversification\_factor}
$$

3. **Normalização final**:

$$
score_{interaction} = 0.05 \times \sqrt{\frac{step2}{max\_step2}}
$$

Onde:

* `score_interaction`: score de interações de qualidade do usuário.
* `step2`: resultado do usuário após aplicar o fator de diversificação.
* `max_step2`: Maior resultado do Passo 2 entre todos os usuários durante o mês.

✅ **Exemplo**

Dada a situação:

* 10 Ordens ordens executadas
* 5 Ordens canceladas após 24H.
* Fator diversificação de 0.7, ou seja operou 3 pares de ativos no mês.
* O usuário com melhor resultado no mês foi 50.

**Temos**:

<mark style="color:$danger;">executed\_orders\_factor</mark> = 10 (10 \* 1)

<mark style="color:$danger;">canceled\_orders\_factor</mark> = 2,5 (5\*0.5)

<mark style="color:$danger;">step\_1</mark> = 12,5

<mark style="color:$danger;">step\_2</mark> = 8,75 (12.5 \* 0.7)

<mark style="color:$danger;">score\_interaction</mark> = 0.05 \* sqrt(8.75 / 50) = 0.02092

✅ **Observações**:

* Penaliza spam e favorece **atividade orgânica**.
* Garante distribuição equilibrada entre perfis diferentes.

\
<mark style="color:$danger;">**1.6 Prova de Indicação (Peso 0,10)**</mark>

* **Descrição**: recompensa quem indica novos usuários qualificados.

$$
score_{referral} = 0.10 \times \sqrt{\frac{referral\_count}{max\_referral\_count}}
$$

Onde:

* `score_referral`: score de indicação do usuário.
* `referral_count`: número de indicações do usuário durante o mês.
* `max_referral_count`: maior número de indicações registradas para um usuário durante o mês.

✅ **Observações**:

* Normaliza discrepâncias e evita abusos.
* Estimula **crescimento orgânico da base de usuários**.

<mark style="color:$danger;">**1.7 Fidelidade (Peso 0,05)**</mark>

* **Descrição**: mede a taxa de atividade ao longo do histórico do usuário.

$$
activity\_rate = \frac{active\_months\_since\_then}{months\_since\_first\_interaction}
$$

**Exemplo:**\
Se se passaram 10 meses desde a primeira interação e o usuário esteve ativo em 7 deles:

$$
activity\_rate = \frac{7}{10} = 0.7
$$

A pontuação bruta é calculada como:

$$
raw\_loyalty\_score = 10 \times activity\_rate
$$

#### Normalização e peso

* `max_raw_loyalty_score`: maior pontuação bruta de fidelidade entre todos os usuários durante o mês.

$$
score_{loyalty} = 0.05 \times \sqrt{\frac{raw\_loyalty\_score}{max\_raw\_loyalty\_score}}
$$

**Nota:** No exemplo, a pontuação bruta de fidelidade é 7. Na implementação, substitua 7 pelo valor real calculado de `raw_loyalty_score`.

✅ **Observações:**

* Reforça **retenção e continuidade**.
* Valoriza usuários antigos e consistentes.

### 🧮 Agregação da pontuação total

A pontuação individual do usuário é a soma de todos os componentes ponderados:

**Score Individual** = T + F + L + S + I + R + Lo

Onde:

* **T:** Trading
* **F:** Frequency
* **L:** Liquidity
* **S:** Staking
* **I:** Interactions
* **R:** Referral
* **Lo:** Loyalty

O score final define o **peso de participação de cada usuário** no pool mensal de recompensas.

**Participação do usuário no pool**

Esta seção define como é calculada a participação de cada usuário no pool de recompensas do mês, a partir do score Individual.

* Definições:
  * **user\_score**: score Individual total do usuário no período de referência (mês), conforme definido na seção “Score Individual”.
  * **total\_user\_scores**: somatório dos scores Individuais de todos os usuários elegíveis no mês.
*   Fórmula base da participação do usuário no pool:

    $$
    \text{user\_participation} = \frac{\text{user\_score}}{\text{total\_user\_scores}}
    $$
*   Alocação base de recompensas:

    $$
    \text{user\_rewards} = R \times \text{user\_participation}
    $$
* Regra de teto por usuário (cap de 5% do pool):
  * Nenhum usuário pode receber mais do que 5% do total do pool no mês.
  * Se o **user\_rewards** exceder 5% de R, aplica-se o ajuste:
    *   Caso geral:&#x20;

        $$
        \text{adjusted\_reward} = 0.05 \times R \times \text{user\_score}
        $$
    *   Exceção: se **user\_score** = 1,10, o usuário pode ultrapassar 5% usando:

        $$
        \text{adjusted\_reward} = 0.05 \times R \times \text{1.10}
        $$
  * Observação operacional:
    * Em primeiro lugar calcula-se o **user\_rewards**.
    * Verifica-se o limite de 5% de R.
    * Se exceder, aplica-se a regra acima conforme o **user\_score**.

**Exemplo de distribuição com teto (usuários A, B, C, D)**

Suponha:

* Pool mensal de recompensas R = 25.000 unidades.
* Scores individuais no mês:
  * Usuário A: 1,10
  * Usuário B: 0,70
  * Usuário C: 0,30
  * Usuário D: 0,20

1.  Soma dos scores:

    $$
    \text{total\_user\_scores} = 1.10 + 0.70 + 0.30 + 0.20 = 2.30
    $$
2. Cálculo da recompensa base:

* Participações:
  * A: 1,10 / 2,30 ≈ 0,478261
  * B: 0,70 / 2,30 ≈ 0,304348
  * C: 0,30 / 2,30 ≈ 0,130435
  * D: 0,20 / 2,30 ≈ 0,086957
* Recompensas base (R = 25.000):
  * A: 25.000 × 0,478261 ≈ 11.956,52
  * B: 25.000 × 0,304348 ≈ 7.608,70
  * C: 25.000 × 0,130435 ≈ 3.260,87
  * D: 25.000 × 0,086957 ≈ 2.173,91

3.  Aplicação do teto de 5%:

    $$
    R = 0.05 \times 25{,}000 = 1{,}250
    $$

Aplicando:

* Usuário A (score 1,10):
  *   Teto especial:

      $$
      1{,}250 \times 1.10 = 1{,}375
      $$
* Usuário B (score 0,70):
  *   Teto geral ponderado:

      $$
      1{,}250 \times 0.70 = 875
      $$
* Usuário C (score 0,30):
  *   Teto geral ponderado:

      $$
      1{,}250 \times 0.30 = 375
      $$
* Usuário D (score 0,20):
  *   Teto geral ponderado:

      $$
      1{,}250 \times 0.20 = 250
      $$

#### **5. Exemplo de distribuição simulada**

Considerando um **pool fixo de 105.693,92 tokens e aplicando o fator volume com nível 1 (25%)**, temos:

| Usuário |  Score |
| ------- | :----: |
| A       | 0.3776 |
| B       | 0.1717 |
| C       | 0.5995 |

**Cota proporcional do pool:**

| Usuário | Cota bruta (tokens) |
| ------- | :-----------------: |
| A       |       8,217.27      |
| B       |       3,736.51      |
| C       |      13,046.22      |

**Considerando que um único usuário não pode receber mais do que 5% do pool (neste exemplo 1,250.0), temos:**

| Usuário | Recompensa Final (tokens) |
| ------- | :-----------------------: |
| A       |  1,250.0 × score = 472.00 |
| B       |  1,250.0 × score = 214.62 |
| C       |  1,250.0 × score = 749.37 |

**Tokens distribuídos:** 1436

### Cálculo do montante de recompensas mensais

O montante de tokens destinado ao **pool mensal de recompensas** é definido com base em **percentuais anuais pré-estabelecidos sobre o total não distribuído de tokens**. Essa regra garante previsibilidade, controle de distribuição e sustentabilidade econômica no longo prazo.

#### Regras de distribuição por período

| Período (Ano)      | Percentual anual sobre o total inicial | Observação                            |
| ------------------ | :------------------------------------: | ------------------------------------- |
| Anos 1 – 5         |                8% ao ano               | Incentivo acelerado à adoção inicial  |
| Anos 6 – 10        |                4% ao ano               | Ajuste gradual de distribuição        |
| A partir do Ano 11 |                2% ao ano               | Distribuição mínima para estabilidade |

O valor mensal do pool é calculado dividindo-se o percentual anual correspondente por 12 meses, e aplicando-o sobre o **saldo remanescente** do total de tokens disponíveis para recompensas.

$$
\text{monthly\_pool} = \frac{\text{annual\_percentage}}{12} \times \text{remaining\_reward\_token\_balance}
$$

#### Acumulação e queima (burn) de tokens não distribuídos

Para reforçar a sustentabilidade da distribuição e incentivar a atividade na plataforma, tokens **não distribuídos** no mês seguem uma lógica combinada de **burn** e **acumulação**.

A regra funciona assim:

1.  **Cálculo do valor distribuído**:\
    É baseado no Fator Volume.\
    Exemplo: se o pool é de 100.000 tokens e o fator volume é 25%, serão distribuídos:

    $$
    100{,}000 \times 0.25 = 25{,}000 \text{ tokens}
    $$
2.  **Cálculo do montante remanescente**:

    $$
    100{,}000 - 25{,}000 = 75{,}000 \text{ remaining tokens}
    $$
3.  **Aplicação do burn**:\
    O percentual de burn será igual ao Fator Volume aplicado sobre o restante:

    $$
    \text{burn} = 75{,}000 \times 0.25 = 18{,}750 \text{ tokens}
    $$
4.  **Cálculo do montante acumulado para os próximos meses**:

    $$
    \text{accumulated} = 75{,}000 - 18{,}750 = 56{,}250
    $$

Resumindo a regra:

$$
\text{accumulated} = (\text{monthly\_pool} - \text{distributed}) - \text{burn}
$$

$$
\text{burn} = (\text{monthly\_pool} - \text{distributed}) \times \text{volume\_factor}
$$

$$
\text{distributed} = \text{monthly\_pool} \times \text{volume\_factor}
$$

✅ **Padrões aplicados:**

* `monthly_pool` → Pool mensal de tokens.
* `distributed` → Quantidade distribuída.
* `burn` → Tokens queimados.
* `volume_factor` → Fator de volume.
* `accumulated` → Tokens acumulados para próximos períodos.<br>

**Essa abordagem garante:**

* Que sempre exista uma **proporção de queima** em períodos de baixa atividade, reduzindo a inflação do token;
* Que parte dos tokens não distribuídos seja **reaproveitada nos meses seguintes**, mantendo o incentivo para engajamento futuro.

#### Exemplo prático

* remaining\_reward\_token\_balance (saldo inicial) = 15.000.000 tokens
* annual\_percentagege (Anos 1–5) = 8%
*   monthly\_pool:

    $$
    \text{monthly\_pool} = \left( \frac{\text{annual\_rate}}{12} \right) \times \text{remaining\_reward\_token\_balance}
    $$

    $$
    \text{monthly\_pool} = \left( \frac{0.08}{12} \right) \times 15.000.000
    $$

    $$
    \text{monthly\_pool} = 0.006666\ldots \times 15.000.000
    $$

    $$
    \text{monthly\_pool} = 100.000 \ \text{tokens}
    $$
* Fator Volume = 25%

$$
\text{distributed} = 100{,}000 \times 0.25 = 25{,}000
$$

$$
\text{burn} = (100{,}000 - 25{,}000) \times 0.25 = 18{,}750
$$

$$
\text{remaining_reward_token_balance} = 15,000,000.00 - (25,000 + 18,750) = 14,956,250
$$

No **segundo mês**, o cálculo do pool será:

$$
\text{monthly\_pool} = \left( \frac{8\%}{12} \right) \times 14{,}956{,}250 = 99,708.33
$$

Lembrando que **a distribuição efetiva** no segundo mês também dependerá do **fator volume** naquele período. Considerando que no mes 2º o fator volume foi 50%, temos:

$$
\text{distributed} = 99,708.33 \times 0.50 = 49,854.165
$$

$$
\text{burn} = (99,708.33 - 49,854.165) \times 0.50 = 24,927.08
$$

$$
\text{remaining_reward_token_balance} = 14,956,250 - (distributed + burned) = 14,881,468.755
$$

✅ **Vantagens do modelo**:

* Controle da distribuição e valorização do token via mecanismo de burn;
* Recompensas proporcionais à atividade real da plataforma;
* Sustentabilidade de longo prazo com incentivo ao uso constante da plataforma;
* Ajuste dinâmico e automático, sem necessidade de intervenções externas.

Assim, tokens não distribuídos retornam ao **saldo remanescente**, impactando diretamente o cálculo dos meses subsequentes e preservando a economia do ecossistema.

### **Observação Importante sobre Distribuição de Recompensas**

Mesmo após o cálculo do pool total de recompensas destinado ao período, o valor efetivamente distribuído aos usuários pode ser inferior ao montante originalmente previsto.\
Isso ocorre porque o protocolo distribui recompensas **apenas entre participantes que atendem aos critérios mínimos de elegibilidade**, como:

* atividade real comprovada
* métricas de engajamento previstas no sistema
* ausência de comportamento abusivo ou manipulação
* cumprimento das regras operacionais definidas para o ciclo

Se o número de participantes elegíveis for baixo — seja por falta de atividade, baixa utilização ou filtragem por segurança/anti-abuso — a distribuição é reduzida de forma proporcional.\
Essa dinâmica preserva:

* **a sustentabilidade econômica do sistema**,
* **a integridade dos incentivos**,
* **a proteção contra diluição injustificada**,
* **o alinhamento entre recompensas e contribuição real**.

Nessas situações, **todo o saldo não distribuído é automaticamente retornado ao pool total do protocolo de recompensas**, garantindo sustentabilidade, previsibilidade e continuidade do modelo econômico ao longo do tempo.

#### **6. Conclusão**

O mecanismo de recompensas do **Hymple** foi projetado para criar um **ecossistema autorregulado e meritocrático**, em que:

* Traders e market makers são **recompensados por atividade real**;
* O sistema valoriza **qualidade, frequência e fidelidade**;
* A distribuição se adapta à **saúde e ao volume da exchange**;
* Há **prevenção de concentração** e **sustentabilidade de longo prazo**;
* A comunidade participa de um ciclo contínuo de **crescimento e valorização mútua**.

Assim, o modelo de _Rewards_ da Hymple garante **incentivos equilibrados, transparência on-chain** e uma economia **eficiente, justa e resiliente**.

Para visualizar uma simulação da liberação das recompensas ao longo do tempo, veja o arquivo "**hymple\_rewards\_simulation**" abaixo:

{% file src="../.gitbook/assets/hymple_rewards_simulation.xlsx" %}

