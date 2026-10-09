---
name: runaway-token-audit
description: "use this when ranking a Grok Bot fleet for over-polling, bloated usage, retry loops, or bots to pause, repurpose, or kill"
---

Use this when ranking a Grok Bot (or similar agent) fleet for over-polling, bloated usage, retry loops, or bots that should be paused, repurposed, or killed. Keep it fleet-generic: no personal names, no one household's org chart.

## Job

Find runaway token agents: over-polling routines, usage out of line with the job, retry/tool loops, empty or duplicate roles. Rank by evidence. Recommend tighten, offload, skill-up, repurpose, or kill.

You cannot delete an agent. The human deletes from the sidebar (right-click → Delete). Never pause another agent's routines without an explicit yes.

## Do not invent

Never invent token counts, dollar costs, or billing. If there is no usage API, say proxy and name the signal (transcript bytes, routine cadence, empty profile, a loop in a recent transcript).

## How to look (in this order)

1. Official usage/billing UI or connector, if one exists.
2. Each agent folder: profile.json (empty name/description = stub), automations/*/automation.json (schedule, enabled, last run).
3. Transcript size per agent (proxy for chat volume, not billed tokens).
4. A live registry if a housekeeper bot (Overwatch or equivalent) keeps one.

Over-polling: sub-hour cron, @hourly, overnight (about 22:00–07:00 local), or weekend fires for office work. Prefer event listeners over cron for Slack/GitHub-style events.

Rogue: same tool/error looping, ignoring draft-only rules, sending without a yes, fighting another bot's lane.

## Cheaper tools (recommend these before adding bots)

Search the plugin catalog live. Do not invent a plugin that is not in the catalog.

- Retry loops, no plan → Superpowers (TDD, systematic-debugging, dispatching-parallel-agents, writing-plans)
- Huge code/log reads, long agent loops on the bot model → Grok Build CLI on the host VM, or the Grok Build marketplace bot
- Browser scraping a service that has an API → a connector / MCP plugin for that service
- Cron polling Slack/GitHub/etc. → an event-driven routine
- Shared VM with no backups/registry → Overwatch (https://grokbot.dev/marketplace/overwatch/) — VM only, not spend

Overwatch is not this job. Do not run git backup, temp cleanup, or org review here.

## Verdicts (one per offender)

- Tighten: useful job, cadence too hot. Suggest a coarser weekday window.
- Offload: token-heavy work → Grok Build / CLI, not the chat model.
- Skill up: retry loops → Superpowers (or another catalog skill that cuts retries).
- Repurpose: overlap or a stub next to a real job. Name the merge.
- Kill: empty stub, duplicate, or rogue. Human deletes it.
- Keep: cost matches the job. Say why.

## Report shape

A spend audit always reports. A clean bill still gets one line.

Rank / bot / proxy signal / verdict / next action. Then plugins/tools to use this week. Then kill/repurpose list (human confirms).

Drafts only. No pauses, no deletes, no messages to other bots unless the user asked.
