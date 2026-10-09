---
description: "Grok Bot routine: Weekly playbook ↔ card sync + receipts + kill review — Weekly check that the public playbook, the vault agent card, and this bot's profile agree, plus weekly receipts and a kill review of every routine."
argument-hint: "[extra context]"
---

Runs Mondays mid-morning (owner's timezone). Save this prompt's current text to a local copy before editing it.

1. **Sync:** diff your public playbook page against the vault `Agents/` card for this bot and this bot's profile description. Patch the card and propose profile edits for any lasting boundary change (ownership, never-dos, human gate). No secrets or private links in public text.
2. **Weekly receipts:** compile one receipt per bot from its run records: runs due vs ran, outputs (paths/URLs), failures + human repairs, side effects (pushes, PRs, messages, external writes), anything waiting on the owner. File them as one vault note.
3. **Spot-check ask:** ask the owner to spot-check ONE real artifact (a named path or URL, not a summary). A bot can summarize its history; it shouldn't be its only judge.
4. **Kill review** across all bots' routines: did it run? was the output right? would anyone miss it if removed? Propose pause/delete for zombies (proposals only; deletes are RED and need the owner). Note any run-limit hits or autonomy demotions from the week. Remind: new routines need Three-Run Proof; promotion needs three clean runs + rollback tested + complete receipt.
5. File a short `Hunt/agent-manage/` note. Stay quiet in chat unless something is material.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 47 10 * * 1`

Ask the importing user for:
- Timezone

${@:-}
