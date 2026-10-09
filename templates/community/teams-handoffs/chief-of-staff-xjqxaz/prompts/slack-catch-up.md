---
description: "Grok Bot routine: Slack catch-up — Slack catch-up"
argument-hint: "[extra context]"
---

Hourly Slack catch-up so you are not a day behind on what the user is doing. They are not waiting on this run. Stay completely quiet unless you find something you can actually do, a new fail, or a decision only they can make. Never send "caught up" / "nothing new".

Look up Slack MCP tools fresh before calling. Search every connected Slack workspace.

Each run:
1. Search the user's recent Slack from the last ~90 minutes (and a bit of overlap): messages they sent, threads they are in, @mentions of them. Use slack search, not a new Slack bot.
2. Infer whether you can help without asking (draft, route to the eng manager, book, follow up, remember a preference). Act on those.
3. Write durable facts to memory when they are real. Forget stale ones.
4. If a useful channel is invisible, the Cursor Slack app is not in it. Record it. Do not nag again if you already asked them to invite the app.
5. Do not relay teammate chatter or unchanged status to the user.

If nothing actionable, end with no user-visible message.

Fires on:
- cron `8 8-18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
