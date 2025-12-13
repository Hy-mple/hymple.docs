# Staking

O protocolo de **staking do token Hymple** foi projetado para incentivar a retenção de tokens, promover a estabilidade e recompensar a participação ativa da comunidade. O mecanismo baseia-se em um modelo de distribuição variável, ajustado de acordo com o **volume de negociação mensal da plataforma**.

O programa de staking é totalmente on-chain, transparente e auditável, garantindo justiça na distribuição e preservação da integridade do ecossistema.

💡 **Nota:** O protocolo de staking do token HYM possui um limite máximo e imutável de **15.000.000 HYM**.\
Esses tokens **não serão mintados**, mas sim **pré-reservados durante a criação do token**, garantindo total transparência, controle de emissão e preservação da escassez dentro do ecossistema.

#### **Distribuição e taxas de recompensa**

A taxa de retorno anual (**APR**) aplicada ao staking é diretamente vinculada ao desempenho operacional da exchange, conforme o volume total negociado no período avaliado (mês anterior). Essa abordagem cria um modelo de incentivo sustentável, em que o crescimento do ecossistema beneficia proporcionalmente seus participantes.

| Faixa de Volume Mensal (USD) | Taxa de APR |
| ---------------------------- | :---------: |
| Até $100M                    |    **8%**   |
| $100M – $500M                |    **6%**   |
| Acima de $500M               |    **4%**   |

A variação progressiva do APR busca equilibrar a distribuição de recompensas com o crescimento orgânico da plataforma, evitando liberação excessiva do token e preservando seu valor de mercado.

**Reserva total de recompensas**

O total de tokens destinados às recompensas de staking é de **15.000.000 HYM**.\
Esse montante é distribuído de forma mensal e proporcional, conforme o desempenho da exchange e as regras de alocação do pool.

A quantidade total de tokens disponíveis para staking em cada mês (**pool mensal**) **não pode ultrapassar o saldo remanescente do total de recompensas**.\
Quando o limite mensal é atingido, **o pool é automaticamente fechado** para novas alocações até o próximo ciclo.

Exemplo:

> Total inicial = 15.000.000 tokens
>
> Mês 1: Distribuídos 100.000 tokens
>
> Novo saldo de recompensas = 15.000.000 − 100.000 = 14.900.000 tokens disponíveis para os próximos meses.

Tokens não distribuídos permanecem acumulados no pool e são reavaliados no ciclo seguinte.

#### **Limites de participação e distribuição justa**

Para garantir descentralização e prevenir concentração excessiva de poder econômico, **cada participante** pode alocar no máximo **1% do total do pool mensal**.

Se o **pool mensal** for de **15.000.000 tokens**, o **limite máximo individual** será de **150.000 tokens**.\
Essa limitação promove uma **distribuição mais justa e acessível**, incentivando a **participação de múltiplos usuários** e reduzindo a **concentração excessiva** por grandes detentores.

#### **Período mínimo de participação**

Tokens bloqueados por **menos de 15 dias** **não geram recompensas**.\
A partir do **15º dia**, o usuário passa a acumular rendimento proporcional ao tempo mantido em staking dentro do ciclo vigente.

Essa regra foi implementada para **desestimular movimentações especulativas de curto prazo**, incentivando **comprometimento estável e alinhado ao crescimento do ecossistema**.

#### **Renovação e cálculo de APY**

Caso o usuário mantenha seus tokens em staking para o ciclo seguinte, o **rendimento passa a ser composto**, e o **retorno anual efetivo (APY)** é calculado automaticamente.

$$
APY = \left(1 + \frac{APR}{12}\right)^{12} - 1
$$

O cálculo do APY reflete o **ganho real acumulado ao longo do tempo**, considerando o **reinvestimento mensal das recompensas**.\
Tanto o **APR** (taxa anual nominal) quanto o **APY estimado** serão exibidos **em tempo real** na **interface de staking da Hymple**, garantindo **transparência total** e **controle do rendimento** pelo usuário.

#### **Governança e transparência**

Todos os **parâmetros do protocolo de staking** — incluindo **taxa base**, **volume** e **saldo de tokens disponíveis** — são **auditáveis on-chain**.\
Alterações estruturais, como **ajustes de APR** ou **mudanças no limite máximo de participação**, serão submetidas à **governança descentralizada da Hymple**, assegurando **participação ativa da comunidade** em decisões críticas.

#### **Resumo dos Parâmetros**

| Parâmetro                  | Descrição                                                                          | Valor/Condição |
| -------------------------- | ---------------------------------------------------------------------------------- | -------------- |
| Pool Mensal Total          | Quantidade máxima de tokens distribuídos em cada ciclo de staking.                 | 15.000.000 HYM |
| Limite Máximo por Usuário  | Valor máximo individual elegível para recompensas em cada ciclo.                   | 150.000 HYM    |
| Período Mínimo de Bloqueio | Tempo mínimo que o usuário deve manter os tokens em staking para gerar rendimento. | 15 dias        |
| Ciclo de Recompensas       | Duração de cada período de distribuição e cálculo de rendimento.                   | Mensal         |
| Cálculo de APY             | Reinvestimento automático das recompensas, gerando rendimento composto.            | Automático     |
| Taxa Base (APR)            | Taxa nominal variável conforme volume de negociação e parâmetros de governança.    | Ajustável      |
| Tokens Não Distribuídos    | Acumulados no pool para ciclos futuros, mantendo sustentabilidade.                 | Sim            |
| Auditoria On-Chain         | Transparência de dados e recompensas diretamente na blockchain.                    | 100% auditável |

#### **Conclusão**

O protocolo de staking do token **Hymple (HYM)** foi desenvolvido para **alinhar incentivos, sustentabilidade e engajamento da comunidade**.

Por meio desse mecanismo:

* Usuários são **recompensados proporcionalmente ao comprometimento e tempo de participação**, garantindo **distribuição justa e equilibrada**;
* A **liberação de tokens** é **controlada dinamicamente**, ajustando o **APR** conforme o **volume de negociação**, preservando a **saúde econômica do ecossistema**;
* O **período mínimo de 15 dias** promove **engajamento de longo prazo**, enquanto o **limite individual** evita **concentração excessiva** de tokens;
* **Tokens não distribuídos** são **reacumulados** no pool, reforçando a **sustentabilidade intertemporal** e incentivando a **fidelidade dos participantes**;
* O **cálculo do APY**, visível em tempo real, garante **transparência, previsibilidade e confiança** nas decisões financeiras dos usuários.

Assim, o protocolo cria um **ciclo econômico robusto, justo e sustentável**, fortalecendo a **liquidez**, a **estabilidade** e o **crescimento orgânico** de todo o ecossistema Hymple.
