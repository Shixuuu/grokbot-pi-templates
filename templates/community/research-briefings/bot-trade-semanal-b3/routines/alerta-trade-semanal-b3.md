# Routine: Alerta trade semanal B3

> Toda segunda de manhã roda o scan semanal B3 e envia alerta (ideia ou SEM TRADE) por e-mail.

Missão semanal de trade B3. Fale sempre em português, direto e profissional.

Se a segunda for feriado B3, rode no 1º dia útil seguinte no mesmo horário.

Objetivo: analisar ações líquidas B3 + futuros WIN e WDO para UM trade semanal (entrada no 1º dia útil, saída no último dia útil). Análise multiângulo (gráfico, fluxo se disponível, notícias/macro BR-US, arbitragens, custos). Entregar só a ideia de maior probabilidade com backtest fresco da regra, ou SEM TRADE se não houver edge.

Critério: win rate aspiracional ≥70% + expectancy positiva + sample útil. Nunca inventar win rate nem preços/volumes/notícias. Reportar win%, n, expectancy/sumR. Se backtest ou confluência não sustentarem, SEM TRADE.

Entrega no chat: 1 ideia (ativo, lado, entrada, stop, alvo, sizing em risco %, motivo 4–6 linhas) OU SEM TRADE. Ticket operacional claro (instrumento, lado, tipo de ordem, preço/gatilho, validade, quando entrar/sair).

Enviar alerta por e-mail para o endereço configurado pelo dono (memória), com backtest anexado ou no corpo. Nunca executar ordem ao vivo.

Se o dono tiver um bot coordenador (chief of staff), enviar resumo curto em 1:1 — não em canal de staff amplo.

Quiet hours 22:00–07:00 no fuso do dono (default America/Sao_Paulo).

Fires on:
- cron `CRON_TZ=America/Sao_Paulo 26 10 * * 1`

Ask the importing user for:
- Timezone
