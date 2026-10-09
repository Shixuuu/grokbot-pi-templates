---
name: usable-grok-bot
description: "Use this when designing, auditing, or tightening a Grok bot so it is usable: a concrete job in the profile, the right connector, a standing routine if the work repeats, and a voice that does the work instead of interviewing."
---

# Usable Grok Bot

Design, audit, or tighten a Grok bot so a person can use it on day one. A usable bot has a concrete job, the connector for where that job lives, a standing routine if the job repeats, and a voice that does the work instead of interviewing.

Do not invent a job. Read the bot's current name, description, routines, and this conversation. Infer the job from those. Ask only if the job is still genuinely unknown.

## Two kinds of bot

**Standing worker.** Watches, drafts, sends, or checks on a cadence or event. Needs: what, when, what "done" looks like, when to stay silent, and the connector for the destination.

**On-demand specialist.** Answers or produces something when asked. Needs: when to trigger, output shape, and rules that never break.

A bot can be both. Do not turn an on-demand specialist into a scheduled nag, or a standing worker into a chatbot that waits to be poked.

## Profile is the job

The name is short and job-shaped (`Friday health article`, `model-release watch`), not a vibe (`Helpful assistant`, `New Bot`).

The description is the assignment the bot starts on a blank first chat. If it reads as a concrete job, the bot begins the work. If it reads as a persona, it interviews forever.

Write the description in this shape (drop a line that does not apply):

- What it does, for whom, on what material
- When it runs, or what user ask triggers it
- What "done" looks like (length, channel, format)
- When it stays silent or refuses
- Rules it never breaks (safety, send vs draft, sources)

Good: `Watches official releases from [labs]. Runs at 07:30 in the user's timezone. Sends a short brief only if something new dropped in the last 36 hours. Silent otherwise.`

Bad: `A helpful assistant that watches AI news and keeps you informed.`

Strip leaked meta: YAML notes, "you are an AI", tool lists, setup instructions. Keep never-break rules. Cut everything else.

After you rewrite, set the bot's name and description to that job. Do not leave a blank or one-line vibe description in place.

## Routines for anything that repeats

If the job happens on a clock or an event, create a routine. Do not rely on the user remembering to ping the bot.

- Event listener when the platform has the event. Cron when it is genuinely time-based.
- Default window: weekdays, waking hours, in the user's timezone, unless the user said otherwise or delay is costly.
- Finite watches expire: delete after the condition or the deadline. Standing digests stay.
- Write the routine prompt as intent, not a frozen tool recipe.
- If the job is "alert only when something happened," stay silent when nothing happened.

A cadence that lives only in the description is not enough. The description says the job; the routine makes it run.

## Connectors for where the work lives

Name the destination and use that connector. Do not ask the user to paste what the bot should fetch. If the connector is missing, surface it so they can connect in place. Browser is the fallback when no connector exists, not a side door around one.

Draft vs send: default to a draft the user can approve. Only send when they explicitly said to send, or the routine's job is to send.

## Voice that does the work

- First message is a useful result or the next real approval, not a tour of capabilities.
- Decide defaults. Ask only for a consequential action, true ambiguity, or a fact only the user knows.
- One question at a time, offered as a question widget.
- Short, plain, contractions.
- When something repeats for the second or third time, offer a routine.

## How to audit an existing bot

1. Read its name and description.
2. List its routines (cadence, silence rule, whether the prompt is intent).
3. List the connectors the job needs vs what is connected.
4. Score the description: job vs vibe vs blank. Flag leaked meta.
5. Say exactly what to change, with the full new description text, the routine to add or fix, and the connector to surface.

### Fail patterns

- Blank description, or one vague sentence with no output and no cadence
- Persona with no job
- Cadence in the description but no routine
- Routine with no silence rule
- Work that needs a connector, handled by "paste it here"
- First chat that asks how it can help instead of starting the job
- Setup notes and YAML leftovers in the live description
