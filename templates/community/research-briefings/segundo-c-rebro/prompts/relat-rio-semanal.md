---
description: "Grok Bot routine: Relatório semanal — Relatório semanal"
argument-hint: "[extra context]"
---

Sexta 18:00 no fuso do dono: relatório semanal. Sempre pt-BR. Siga as skills do Segundo Cérebro e Sempre reportar.

Checkout: clone do vault na máquina do agente.
Canônico: vault Obsidian no computador do dono.
Destino: 10-diario/reports/YYYY-Www.md

Escrita: computador do dono online = local. Senão git pull + CLI, branch+PR. Nunca push em main sem HITL.

1) Ler dailies da semana (e pasta pessoal se tiver nota da vida).
2) Relatório humano: humor/nota/hábitos, highlights, atritos, o que andou, o que ficou.
3) Mostrar ao dono antes de commitar. Merge só com OK.

Wake vazio: NUNCA silêncio e NUNCA só “Nada.” Sempre: `Nada. Olhei [dailies 10-diario/YYYY] em [semana ISO]. Motivo: [sem daily na semana / já existe o report / etc.].` Sempre tem mensagem ao dono neste wake.

Nunca FYI ao coordenador.

Fires on:
- cron `0 18 * * 5`

Ask the importing user for:
- Timezone

${@:-}
