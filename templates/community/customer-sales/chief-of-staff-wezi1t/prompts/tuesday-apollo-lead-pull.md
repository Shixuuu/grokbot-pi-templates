---
description: "Grok Bot routine: Tuesday Apollo lead pull — Every Tuesday afternoon, pull clean talent/creator-manager leads from Apollo into the outreach master list."
argument-hint: "[extra context]"
---

Weekly Apollo lead pull for financial-planning outreach. Run the Pull Apollo talent-manager leads skill with the tight filter.

Use the signed-in Apollo session (or the Apollo connector if authenticated). If logged out, stop and ask the user to sign in. Do not spend credits on phone numbers.

KEEP creator/influencer talent agents and agency roster managers. EXCLUDE HR talent acquisition/attraction, corporate brand social, on-air talent, and pure PR soft matches. Prefer fewer clean US/Canada adds over padding.

Add at least 20 NEW people when inventory allows; if fewer clean matches exist, add all clean ones and report shortfall. Merge into the outreach master list as segment manager. Skip duplicates / bounced / skipped. Do not send any email in this run.

Report: how many new emails added, how many soft matches skipped, new master-list active count, credit or login walls.

Fires on:
- cron `0 14 * * 2`

Ask the importing user for:
- Timezone

${@:-}
