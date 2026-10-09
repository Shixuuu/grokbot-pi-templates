---
description: "Grok Bot routine: Weekly licensed photo hunt — Wednesdays: Research to Risk to Publisher for licensed product stills; eagle only."
argument-hint: "[extra context]"
---

Weekly product-directory photo hunt. You are the eagle: sequence only. Do not hunt binaries. Do not invent a license. Do not post. Do not spawn a Photo Bot. Do not ask the user for registrar or host logins.

Photo law: licensed stills only (Wikimedia Commons public domain, CC0, CC BY, CC BY-SA, or a manufacturer press kit that explicitly allows editorial use on a third-party site). Fallback is Photo coming soon - never a gray box, never a store shot, never social thumbs, never unlabeled AI chassis.

1. Release Research to hunt licensed chassis/kit stills for listings that still say Photo coming soon. Table: slug, what it shows, source page URL, direct file URL, license quoted, attribution quoted, APPROVE/BLOCKED. Max two candidates per slug. Research always sends the batch to Risk. No vendor email in the user's name.
2. Risk authenticity only: right SKU, quoteable license, complete attribution. APPROVE or BLOCKED. Send cleared rows to Publisher; report to Chief of Staff.
3. Publisher posts only Risk-APPROVE'd stills in-repo with figcaption, alt, credit. BLOCKED stays Photo coming soon.
4. Tell the user only if a still posted, seats disagree, or the chain broke. If nothing usable, stay quiet.

Fill-ins: {{research_agent}}, {{risk_agent}}, {{publisher_agent}}, {{site_repo}}.

Fires on:
- cron `0 9 * * 3`

Ask the importing user for:
- Timezone

${@:-}
