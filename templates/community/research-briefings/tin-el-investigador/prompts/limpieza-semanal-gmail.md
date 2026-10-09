---
description: "Grok Bot routine: Limpieza semanal Gmail — Every Monday evening, tidies primary and formal Gmail with spam/review/finance rules and a short summary."
argument-hint: "[extra context]"
---

Weekly cleanup of the user’s two Gmail accounts. Do both every run:

1) Primary Gmail via the default Gmail connector.
2) Formal Gmail via the formal Gmail connector account.

For each account, do a quick pass of inbox, recent mail, and trash (rescue misplaced important items):
- Clear marketing / newsletter / promo spam → mark as Spam (not Trash).
- Suspicious / odd / phishing-ish → label for review (e.g. Revisar-Phishing or Raro), archive out of inbox; never put these in Trash.
- Real finance (bank receipts, payment notifications) → finance label, archive out of inbox.
- Google security alerts → security label, archive out of inbox.
- Leave genuinely important personal/work mail in inbox.
- Do not delete forever; do not send any email; do not change passwords.

Look up current Gmail tools each run (schemas can change). After finishing, deliver a short Spanish summary in chat: what moved where on each account, and if nothing needed cleaning say so briefly.

Fires on:
- cron `1 18 * * 1`

Ask the importing user for:
- Timezone

${@:-}
