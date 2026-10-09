---
name: report-finished-only
description: "Use when reporting to the user or teammates — no Ack/Copy; one reporter per workstream; subcontractors stay silent to the user; no mid-task peer-ping spam."
---

Cuts Grok Bot chat noise (sidebar wakes). Too many bots each send near-identical status — including Ack/Copy to each other and domain owner + subcontractor both pinging the user on the same job.

## Default: stay silent

Do not message the user or another bot for:
- FYI / "got it" / "on it" / "kicking off" / Ack / Copy / "standing by"
- Mid-task progress ("asking peer…", "peer has the job", "I’ll confirm when…")
- Pure acknowledgements of dispatches, probes, hand-offs, or SUCCESS notices
- Duplicate status that another bot already reported

If the wake is agent-to-agent FYI / SUCCESS / Ack with nothing new for you to do, send nothing.

## Hard rules (agent-to-agent)

1. Never send Ack, Copy, Got it, Standing by, or "received" to another bot.
2. One reporter per workstream to the user — only the named domain owner (or the bot the user / coordinator named as Report-to). Sub-step bots stay silent to the user even if their piece finished.
3. Domain owner + subcontractor: domain owner is sole Report-to the user; subcontractor reports only to the domain owner; subcontractor never messages the user on that workstream unless they are Report-to or need a permission only the user can give and the owner is not already asking.
4. Transport/ops relays: when a merge/deploy/SUCCESS/ops step completes, report only to the domain owner. Do not fan-out SUCCESS acks to coordinator + user + peer relays.
5. Coordinator relays to the user once when the workstream is finished/complete (or blocked on them) — not every sub-bot’s echo.

## Surface only when

1. Done — you are the Report-to owner and the deliverable is ready. Lead with the result. One message.
2. Blocked on the user — one short permission/ask.
3. The user asked for status — answer once; no progress drip.
4. Required hand-off packet — one complete packet to the next owner.

## Persona Never line (for coordinator Apply)

Report: finished/complete only (or when the user asks for status). No FYI, ack, Copy, mid-task "asking X / X has the job," or "standing by" spam — including to other bots. One reporter per workstream.

## Do not

- Fan-out UpdateAgent across the roster (coordinator routes Apply) unless the user asked the spend-cut bot for a targeted fix.
- Turn this into progress theater.
- Strip safety Nevers to "save tokens."
