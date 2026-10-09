---
name: segundo-c-rebro
description: "Use this when operating an Obsidian second-brain vault: daily note, personal notes, morning briefing, capture, evening check-in, wiki wikilink, reminders-as-tasks, or committing the vault."
---

Wiki = mapa (wikilinks). O repositório do domínio = fonte operacional. Chat e memória de agente = rascunho até virar nota.

## Lei

1. Leia o CLAUDE.md do vault canônico antes de escrever.
2. Canônico no computador do dono (Obsidian). GitHub é o remoto do vault. Checkout na máquina do agente. Nunca o vault antigo.
3. A pasta pessoal do vault é família, casa, vida. O dono do vault e os agentes de vida (coordenador, e-mail, fitness, inbox pessoal) podem ler e escrever. Não vaze para time de produto, Slack de trabalho ou MCP externo. Zero senhas/tokens em qualquer nota.
4. Sempre pt-BR.
5. Checkbox-first (uso no carro). Humor, nota e hábitos são mapa de saúde mental, não só produtividade.
6. Sempre mostrar a daily (ou a nota) ao humano antes de commitar. Commit só com OK. Nunca push direto em main sem HITL.
7. Escrita, nesta ordem: computador do dono online = arquivo local (Obsidian vê na hora). Senão: git pull no checkout e editar com CLI. Branch + PR. Agente na nuvem só se o checkout falhar.
8. Cada dono de domínio entrega no 1:1 com o dono. Não FYI automático ao coordenador. O coordenador não escreve daily.
9. Rotina/wake nunca termina em silêncio nem com um “Nada.” solto. Siga Sempre reportar: `Nada. Olhei [fonte] em [janela/filtro]. Motivo: [por que não gerou item].`
10. Lembretes ficam no vault (daily / tarefas). Não usar o app Lembretes do telefone. Segundo Cérebro é o dono. O coordenador não tenta Reminders nativo.
11. Briefing da manhã = lista completa (hoje, acumuladas, delegadas, agenda), formatada pra leitura. Top 3 não substitui a lista.
12. Mensagem de grupo no Slack de trabalho: só no canal da equipe. Se o grupo precisa saber, manda no canal e marca a pessoa. Se for privada, DM. Nunca grupo DM.
13. Sono e exercício no check-in da noite: perguntar ao agente de fitness (wearable). Não pedir de novo pro dono.

## Arquivos

- Template: 60-referencias/templates/diario.md
- Daily: 10-diario/YYYY/YYYY-MM-DD.md
- Relatório semanal: 10-diario/reports/YYYY-Www.md
- Wiki: index.md, log.md, 20-empresas/, 30-projetos/, 40-ideias/, 50-pessoal/
- Toda página nova/alterada pelo agente ⇒ atualizar index.md e log.md

## Tags (plugin Tasks)

#priority · #cancelada · #delegada · #dispensada

- [x] = concluída (fez). Sem tag extra.
- #dispensada = não vai fazer. Não é conclusão.
- #cancelada = cancelou. #delegada = outro executa.

Ignore checkboxes de Hábitos, Humor, Energia, Avaliação, Saúde, Equilíbrio e Checklist persistente quando for listar tarefa.

## Blocos de tarefa (revisar toda noite)

- Hoje: só o que o dono executa neste dia.
- Acumuladas: trabalho dele que já passou do prazo. Nunca data futura. Nunca #delegada.
- Delegadas: só monitora. Trabalho de outras pessoas não entra em Hoje nem em Acumuladas.
- Agenda: reunião e tarefa datada no futuro (ex.: relatório da palestra de amanhã).
- Fechar o que já acabou com [x] (concluída). Não usar #dispensada nisso.

## Manhã — daily + briefing

1. Garantir a daily de hoje a partir do template. Se já existir, não sobrescrever.
2. Ler tarefas abertas nas dailies recentes + checklist persistente + blocos Tasks + pasta pessoal se a tarefa for da vida. Puxar agenda Google (contas conectadas).
3. Revisar os 4 blocos antes de mandar. Mandar no 1:1 a lista completa: Hoje · Acumuladas · Delegadas · Agenda.
4. Top 3 só depois da lista, se couber. Não marcar #priority até o OK.
5. Avisar com o caminho da nota.

## Durante o dia — captura

Texto ou áudio neste 1:1 entra na daily, no bloco certo, ou na pasta pessoal se for família/vida. Lembrete = checkbox na daily (ou nota da wiki), nunca Reminders da Apple.

## Noite — resumo e avaliação

Uma pergunta só. Pede o áudio do dia (listinha: humor, nota, highlight, atrito, sono/exercício/comida, vape/açúcar/álcool/lazer, o que rolou, lembrete). Sem widget em sequência.

Sono e exercício: agente de fitness (wearable), não o dono.

Depois do áudio, organizar no vault (wiki = mapa) e revisar os blocos de tarefa (hoje / acumuladas / delegadas / agenda) pra não misturar.

Mostra o recorte. Commit com o OK (branch + PR).

## Melhoria

Quando o dono corrigir um fluxo, grave a correção nesta skill. A skill é o playbook vivo.
