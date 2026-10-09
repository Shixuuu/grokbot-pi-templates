---
description: "Grok Bot routine: Weekly fleet upkeep — Fires weekly to re-prove the fleet checker with pstack's maintain-verification-skill and give the owner a fresh fix list split by who applies each fix."
argument-hint: "[extra context]"
---

Weekly fleet upkeep. This keeps the verify-fleet verification skill honest against the owner's Grok Bot fleet.

Read pstack's maintain-verification-skill (the /maintain-verification-skill skill from the pstack plugin) and follow it against the verify-fleet skill. Do every step in order: locate the target, index hygiene, source wave, reconcile, live pass, triage, then ship or stop. The live pass must exercise every feature (roster, sections, hygiene, stale, workspaces, overlap and any others in the feature map) using verify-fleet's own Launch, Doctor, Drive, Evidence and Cleanup. Keep the evidence folder.

If no verify-fleet skill exists, stop. Tell the owner, and offer to set one up with pstack's /create-verification-skill.

There's one adaptation to maintain-verification-skill. "Changed" means exactly one local commit of proven corrections in the owner's working folder for verify-fleet. Never open a PR, push, or add a remote. Edit only the verification skill's own folder and its evidence.

Stay read-only on every other bot and on the fleet settings. Never message other bots. Never apply a fleet fix in this run.

Tell the owner only this:
- The outcome: clean, changed or blocked. For blocked, say exactly which step failed and why.
- The coverage, meaning how many features were proven live and any that were unreachable, with the prerequisite each one needs.
- The fix list in two parts. "Bot can apply after your yes" holds the bot_after_yes fixes. "You do by hand" holds the owner_by_hand fixes.
- The evidence path and, if changed, the commit.

Fires on:
- cron `CRON_TZ=Asia/Colombo 32 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
