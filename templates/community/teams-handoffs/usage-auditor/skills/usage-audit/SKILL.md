---
name: usage-audit
description: "Use this when running a weekly Grok Bot usage audit: inventory routines, score relative usage, update the usage guide and routines table, and write a waste report."
---

Run a usage audit of Grok Bot routines and adhoc agent work. Goal: keep the usage guide honest, keep the routines table current, and surface accidental waste.

## Rules

- Never invent billed percentages, dollars, or dashboard numbers. Official meter is agent steps plus tokens, not message count. If Usage and Billing / the dashboard is unreachable or unsigned-in, use the relative model only and say so.
- 1 RU = one short text-only reply. Bands: Low 1–5, Medium 6–20, High 21–80, Very high 80+.
- Percent on the routines table is share of one named heavy packet (the team's costliest recurring job = 100), not share of the weekly included pool.
- Do not pause, delete, or rewrite another agent's routine unless the user explicitly said to. Recommend only.
- Do not message other agents to check in. Read their automation files. Stay out of their 1:1s.
- Fetch one connector tool schema at a time. Do not dump a full catalog.
- Do not open a browser for usage if a signed-in dashboard is not already available. Login walls are a skip, not a sign-in attempt.

## 1. Inventory routines

Read every agent folder under the shared automations path. For each routine record: owner agent, name, enabled, schedule or trigger, last run if present, and what the prompt actually does (connectors, browser, fan-out, silent-if-nothing).

## 2. Score each run

Score from the prompt shape, not vibes:

- Short docs or tracker read plus optional one-line ping: Low
- Ceremony write (tracker plus docs plus calendar): Medium
- Browser or computer use, video, or a large connector loop: High
- Parent job that also wakes other agents: Very high (count each wake)

Update RU and band when observed behavior changed (new browser step, fan-out removed, now silent, etc.).

## 3. Hunt waste

Flag each finding with owner, routine or chat, why it costs, and the cheapest fix. Categories:

- Duplicate routines: two enabled jobs covering the same data or cadence (example: a specialist self-wakes at the same time a coordinator already asks them).
- Needless frequency: polling every few minutes, hourly all day, overnight, or weekend when a daily/weekday job or an event trigger would do. @every 5m, @hourly, and star-every-minute crons are guilty until proven time-critical.
- Leftover twins: paused copies of a job another bot still owns. Note them; do not delete without a yes.
- Always-on adhoc: the same 1:1 ask repeating across recent days (same report, same pull, same ping) that should be one routine — or a routine that now runs for work the user already moved adhoc. Sample recent transcripts and memory logs for repeats; do not read other agents' private chats.
- Fat inputs: full connector catalog dumps, many-way loops, screenshot-heavy browser when a connector exists.

Skip paused routines in the current-draw total. Still list them so they do not get re-enabled by accident.

## 4. Write the artifacts

Always produce these three artifacts. Prefer the user's docs home if they have one (wiki, notes, files). If not, write them as files the user can open and point to those paths in chat.

1. Usage guide — keep the type table and scoring method current. Add newly observed types. Do not replace relative units with fake billed %.
2. Routines usage table — upsert one row per routine: Name, Agent, Schedule, Enabled, Band, RU per run, % of the heavy packet, Drivers, Notes. Add new routines; mark paused ones Enabled off.
3. Dated audit report — titled Usage audit YYYY-MM-DD. Sections: Observed (what changed vs last audit), Current draw (enabled routines, relative), Waste (duplicates / frequency / adhoc), Recommendations (one line each, no unsolicited numbered troubleshooting). If there is no waste, say so in one line.

## 5. Tell the user

- Always produce the three artifacts.
- In the user's 1:1: one short ping only if there is waste or a blocker. Point at the artifacts. If nothing is wasting, stay silent in chat.
- Never present relative RU as billed weekly %.
