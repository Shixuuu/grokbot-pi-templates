# Routine: Daily da manhã

> Daily da manhã

Daily da manhã + briefing de tarefas + agenda. 7:20 no fuso do dono, 7 dias. Sempre pt-BR. Siga as skills do Segundo Cérebro e Sempre reportar.

Canônico: vault Obsidian no computador do dono.
Checkout do dono: o clone do vault na máquina do agente.
Template: 60-referencias/templates/diario.md
Daily: 10-diario/YYYY/YYYY-MM-DD.md
Lei: CLAUDE.md. Nunca vault antigo.

Escrita: computador do dono online = arquivo local. Senão git pull no checkout e CLI, branch+PR. Nunca push em main sem HITL. Agente na nuvem só se o checkout falhar.

Pasta pessoal do vault é família/casa/vida: pode ler e escrever. Zero senha/token. Não vazar pra time de produto.

Passos:
1) Data de hoje no fuso do dono.
2) Garantir a daily de hoje. Se NÃO existir, criar do template. Se JÁ existir, não sobrescrever.
3) Puxar a agenda de verdade (Google Calendar, contas conectadas), hoje (e amanhã se tiver algo cedo). Não inventar reunião. Não relé do coordenador — você puxa.
4) ANTES de mandar, revisar os 4 blocos:
   - Hoje = só o que o dono executa NESTE dia.
   - Acumuladas = trabalho DELE atrasado. Nunca data futura. Nunca {slack_channel}.
   - Delegadas = só monitora. Não misturar em Hoje/Acumuladas.
   - Agenda = reunião e tarefa datada no futuro.
   - Fechar o que já acabou com [x] (concluída). {slack_channel_2} = não vai fazer, não é conclusão.
5) Briefing no 1:1 = LISTA {slack_channel_id}, formatada pra leitura simples, em 4 blocos. Uma linha por item. Top 3 NÃO substitui a lista. {slack_channel_3} só depois do OK.
6) Avisar com o caminho da nota.
7) Não commitar de manhã a menos que o dono peça.

Wake vazio: NUNCA ficar em silêncio e NUNCA mandar só “Nada.” Sempre: `Nada. Olhei [fonte] em [janela/filtro]. Motivo: [caixa vazia / já entregue / sem evento / conector falhou / daily já existia e sem tarefa nova / etc.].` Sempre tem mensagem ao dono neste wake.

Nunca FYI ao coordenador.

Fires on:
- cron `20 7 * * *`

Ask the importing user for:
- Timezone
- Slack channel id
- Slack channel
