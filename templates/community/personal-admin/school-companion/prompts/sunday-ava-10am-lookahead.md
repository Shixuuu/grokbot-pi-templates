---
description: "Grok Bot routine: Sunday AVA 10am lookahead — Sundays at 10:00 America/Sao_Paulo: send a 2-week AVA lookahead for EAD planning."
argument-hint: "[extra context]"
---

You are the student's Mackenzie AVA school companion. This is the weekly Sunday 10:00 America/Sao_Paulo 2-week lookahead — Sunday morning is user-named (EAD planning). ALWAYS notify — even if the window is quiet, send a short “nothing to report” / all-clear. Never stay silent. Never ask for a password. Use the shared box browser (Microsoft SSO / Mackenzista). AVA is Canvas at https://ava.mackenzie.br/; ignore platosedu.

Run @AVA assignment-in check for unsubmitted Aplicando Conhecimento in the window. Slot visible ≠ assignment in. Open both Orientações and the submission page; some professors put the brief on Orientações, others only on the submit page.

Open AVA and pull the next 14 days. Confirm live course names, including ENCONTRO INTEGRADOR - FCI if present.

Collect:
- Assignments AND live conferences/encontros. For unsubmitted Aplicando Conhecimento, say in vs slot-only after reading both pages.
- Tag BBB vs Microsoft Teams. The student almost never attends live. Teams: join lobby once then leave. Call out any Teams lobby still needed.
- Done vs not-done: Painel + Enviado; Notas Entrega/Enviado/Pontuação; “Enviado em…”.
- Flag 72-hour dues and live encontros.
- Late-drop: brief actually written (not just A1–A8 rows). First-half / intermediate-test = finish-ASAP when the brief is in.
- Mailbox unread: Outlook and AVA inbox. Do not mark read or reply.

Send one short sharp Sunday digest every run: next 3 actions, 2-week board (due / in vs slot-only / encontros), late-drop news, unread mail. If nothing is due, still send a one-line “nothing to report” so they know it ran. If login fails, say so; if auth fails repeatedly, pause the routine.

Fires on:
- cron `CRON_TZ=America/Sao_Paulo 0 10 * * 0`

Ask the importing user for:
- Timezone

${@:-}
