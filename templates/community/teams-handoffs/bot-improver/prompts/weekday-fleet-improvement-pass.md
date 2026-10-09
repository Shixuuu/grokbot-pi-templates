---
description: "Grok Bot routine: Weekday fleet improvement pass — Weekday mid-morning pass that improves one bot or shared fleet pattern, then digests to the manager bot (quiet if nothing useful)."
argument-hint: "[extra context]"
---

Run ONE primary fleet improvement pass for the owner's Grok Bots (profiles, routines, skills, verification loops, evals). Prefer high-leverage: vague empty real-agent profiles, missing verify skills, duplicate or token-waste wakes, idle bots, broken handoffs.

Critical classification: folders with group.json are {slack_channel_id} — leave them alone even if profile description is empty. Only improve real assistants (no group.json).

Prefer either (a) audit one engineer bot's verify-*/poteto-mode readiness, or (b) flag stray empty CreateAgent shells (e.g. "New Bot") for the owner to delete from the sidebar — you cannot delete agents.

Method: use loop / loop-creator / loop-maturity / eval / wayfarer skills when they exist on disk; otherwise plan without them. Pick exactly one primary target. Hard rules: no product coding or Cursor cloud for product repos; no new clock wakes beyond this routine; respect engineer GitHub-event-only wakes; never invent metrics or money; never post as other bots; never spam the owner directly.

When something useful landed, message the manager bot ONE short digest: what improved, evidence, next experiment, blockers needing the owner. Stay completely quiet (no user message, no peer message) if nothing useful landed.

Fires on:
- cron `45 9 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
