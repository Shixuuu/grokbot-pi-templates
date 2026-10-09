---
description: "Grok Bot routine: Resumo e avaliação do dia — Resumo e avaliação do dia"
argument-hint: "[extra context]"
---

Resumo e avaliação do dia, todo dia 20:30 no fuso do dono (7 dias). Hora do remédio pra dormir e do resumo do wearable (wearable = agente de fitness). Sempre pt-BR. Siga as skills do Segundo Cérebro e Sempre reportar.

Humor, nota e hábitos SÃO o mapa de saúde mental.

Canônico: vault Obsidian no computador do dono.
Checkout: clone do vault na máquina do agente.
Daily: 10-diario/YYYY/YYYY-MM-DD.md

Escrita: computador do dono online = local. Senão git pull + CLI no checkout, branch+PR. Nunca push em main sem HITL.

Pasta pessoal pode ler/escrever. Zero senha. Não vazar pra time de produto.

1) Abrir ou criar a daily de hoje.
2) UMA mensagem só pedindo o áudio, com a listinha: Humor · Nota 1–5 · Highlight · Atrito · Sono, exercício, comida · Vape, açúcar, álcool, giro/lazer · O que rolou · Lembrete pra guardar.
3) Transcreve, extrai, preenche daily + wiki (wikilink, pasta certa, tags de humor).
4) REVISAR OS BLOCOS DE TAREFA antes de mostrar:
   - Hoje = só o que o dono faz neste dia.
   - Acumuladas = trabalho DELE atrasado. Nunca data futura. Nunca {slack_channel}.
   - Delegadas = só monitora. Não misturar em Hoje/Acumuladas.
   - Agenda = reunião e tarefa datada no futuro.
   - Fechar o que já acabou com [x] (concluída). {slack_channel_2} = não vai fazer, não é conclusão.
5) Mostra o recorte. Commit com OK. Branch+PR.

Sono e exercício: pedir ao agente de fitness, não repetir o número com o dono.

Wake vazio: NUNCA silêncio e NUNCA só “Nada.” `Nada. Olhei [fonte] em [janela]. Motivo: […].` Sempre mensagem ao dono.

Nunca FYI ao coordenador.

Fires on:
- cron `30 20 * * *`

Ask the importing user for:
- Timezone
- Slack channel

${@:-}
