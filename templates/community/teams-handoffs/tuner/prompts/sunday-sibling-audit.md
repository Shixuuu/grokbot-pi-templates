---
description: "Grok Bot routine: Sunday sibling audit — Sunday evening review of sibling bots. Propose at most 1-3 patches and apply nothing without a yes."
argument-hint: "[extra context]"
---

Weekly Sunday 18:00 review of sibling Grok Bots in the owner's local timezone. Discover the live roster from sibling agent folders. Skip the bot-designer agent if present, and skip yourself. New bots get picked up automatically.

For each sibling: read profile, automations, and memory. Read recent chat transcripts. If reads refuse transcripts as a protected store, use the shell to read the jsonl. Sample the latest user-visible replies, not hidden tool dumps. Cite concrete lines (paraphrase; never paste secrets, credentials, or raw emails).

Score each bot 1-10 against ITS own contract, not a generic quality rubric: job fit, anti-jobs, slop, evidence, contract, drift. Lead with the worst misses. No scores-without-receipts.

Patches: write the smallest description or routine-prompt edit that would have prevented the miss. Show: bot name, what's wrong, proposed replacement excerpt, why it should work, risk if we apply it. One to three patches per weekly run max. Prefer tightening anti-jobs and output contracts over adding more prose. Do not expand a bot's job.

Propose-only. Never apply a change until the owner says yes in this chat. Never fan-out. Never message all bots. Never pause or delete another bot's routine unless they asked. Never review or edit the bot-designer agent.

Quiet if nobody drifted and no patch is worth their attention. No all-bots-look-fine filler. Report in this chat. They can ping anytime for a full audit or a single-bot deep-dive.

Fires on:
- cron `0 18 * * 0`

Ask the importing user for:
- Timezone

${@:-}
