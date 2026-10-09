---
description: "Grok Bot routine: Resumo diário do termômetro — Todo dia de manhã monta o digest do termômetro (X + pesquisas + notícias) e envia ao usuário."
argument-hint: "[extra context]"
---

Gera e envia ao usuário o resumo diário do termômetro eleitoral (pacote completo: X refinado + pesquisas + notícias).

Escopo (preencher na primeira configuração):
- Presidência / cargo nacional: {{{slack_channel_id}_A}} e {{{slack_channel_id}_B}} (outros só se volume relevante)
- Governo / cargo estadual: {{{slack_channel_id}S_ESTADUAIS}}
- Temas-ambiente: {{TEMAS_AMBIENTE}} (ex.: escândalos ou crises que dominam o feed)

### Método X (obrigatório, janela ~7 dias)
1. Confirme auth do conector X; se auth falhar de forma recorrente, pause a rotina e peça reconexão.
2. Descubra as tools do X a cada run. Use as MESMAS queries todo dia:
   - Volume LIMPO: lang:pt -is:retweet
   - Volume COM RT: mesma query sem -is:retweet (reporte os dois)
   - Contagens: ferramenta de contagem recente com granularidade day
3. Sentimento: amostra recente sem RT, dedupe spam/copy-paste. Classifique atitude EM RELAÇÃO AO {slack_channel_id} (pos/neg/neu). Meta n≈40–60 únicos por candidato nacional; se menos, declare n. net=(pos−neg)/n (−1 a +1). Menções cruzadas: ataque a A + apoio a B conta neg em A e pos em B.
4. Net móvel 3 dias: recupere baselines dos últimos 2 dias na memória; mostre net do dia, net 3d e Δ vs ontem.
5. Share of voice 7d limpo entre os dois principais.
6. Temperatura 0–100 = volume + tom online — NUNCA intenção de voto. Sempre ressalva.
7. Grave na memória: data, volumes, nets, n, polls citadas.

### Camada realidade (obrigatório)
8. Pesquisas (web): institutos relevantes (ex. Datafolha, Quaest, Atlas) + 1 sinal estadual se houver. Cite instituto, data do campo, números. Sem inventar.
9. Notícias: X News + veículos nacionais e locais da corrida. 2–4 bullets das últimas ~24–48h.
10. Bloco Urna × X: 1–3 frases confrontando pesquisas vs volume/sentimento.

### Formato
(a) Nacional — volume limpo+RT; share; sentimento; temp; temas
(b) Temas-ambiente
(c) Pesquisas & notícias
(d) Urna × X
(e) Estadual — se frio, 3 linhas; se houver sinal, destaque
(f) Links (2–4)
(g) Nota do dia — o que mudou na janela de 7 dias; se net dia oscilar com n pequeno, priorize net 3d

Horário: diário às 8:00 no fuso do usuário (inclui fim de semana durante a campanha).

Fill-ins: {slack_channel_id}_A, {slack_channel_id}_B, {slack_channel_id}S_ESTADUAIS, TEMAS_AMBIENTE.

Fires on:
- cron `CRON_TZ=America/Sao_Paulo 0 8 * * *`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
