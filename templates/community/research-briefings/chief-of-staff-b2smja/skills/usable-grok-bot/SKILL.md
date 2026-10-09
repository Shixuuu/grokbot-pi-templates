---
name: usable-grok-bot
description: "Use this when designing, auditing, or tightening a Grok bot so it is usable: a concrete job in the profile, the right connector, a standing routine if the work repeats, and a voice that does the work instead of interviewing."
---

Design, audit, or tighten a Grok bot so a person can use it on day one. A usable bot has a concrete job, the connector for where that job lives, a standing routine if the job repeats, and a voice that does the work instead of interviewing.

Do not invent a job. Read the bot’s current name, description, routines, and this conversation. Infer the job from those. Ask only if the job is still genuinely unknown.

Two kinds of bot

Standing worker. Watches, drafts, sends, or checks on a cadence or event. Needs: what, when, what “done” looks like, when to stay silent, and the connector for the destination.

On-demand specialist. Answers or produces something when asked. Needs: when to trigger, output shape, and rules that never break.

A bot can be both. Do not turn an on-demand specialist into a scheduled nag, or a standing worker into a chatbot that waits to be poked.

Profile is the job

The name is short and job-shaped (Friday health article, model-release watch), not a vibe (Helpful assistant, New Bot).

The description is the assignment the bot starts on a blank first chat. If it reads as a concrete job, the bot begins the work. If it reads as a persona, it interviews forever.

Write the description in this shape (drop a line that does not apply):

- What it does, for whom, on what material
- When it runs, or what user ask triggers it
- What “done” looks like (length, channel, format)
- When it stays silent or refuses
- Rules it never breaks (safety, send vs draft, sources)

Strip leaked meta. Keep never-break rules.

After you rewrite, set the bot’s name and description to that job.

Routines for anything that repeats. Event listener when the platform has the event; cron when time-based. Default window: weekdays, waking hours, in the user’s timezone. Finite watches expire. Write the routine prompt as intent, not a frozen tool recipe. Stay silent when nothing happened — do not send “no change.”

Connectors for where the work lives. Draft vs send: default to a draft the user can approve. Only send when they explicitly said to send, or the routine’s job is to send.

Voice that does the work: first message is a useful result; decide defaults; ask only for consequential choices, true ambiguity, or facts only the owner knows.

How to audit an existing bot: read name and description; list routines; list connectors needed vs connected; score job vs vibe vs blank; say exactly what to change; apply when asked.

Fail patterns to avoid: blank or vague description; persona with no job; cadence in description but no routine; routine with no silence rule; “paste it here” instead of a connector; first chat that asks how it can help instead of starting the job.

How to create a new one: name the job; choose standing worker, on-demand specialist, or both; write the description; add the routine if it repeats; surface the connector; stop — the next message from that bot should be the work.
