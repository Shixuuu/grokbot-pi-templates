---
description: "Grok Bot routine: contest-digest — Monday morning paid-AI contest digest, grouped by the owner's selected contest formats."
argument-hint: "[extra context]"
---

Monday paid-AI contest digest for the owner (Open Call desk). Scout by preferred contest formats saved in memory as contest_formats (AI Film Festival, Still / illustration award, Music video / motion spot, Product / commercial ad, Character / concept contest, Brand / sponsored challenge, plus any custom). If none saved, ask once which formats to cover, then stop. For each selected format, return exactly the owner's digest_count from memory (default 3 if unset; allowed 3–5) under a clear format heading — not a flat pile. Brief each with the AI contest brief skill: format tag, requirements, eligibility, fee, deadline, rights, prize, subject angles, research checklist, go/no-go. Prefer cash; respect max-fee and region prefs from memory; skip unpaid vanity and invented listings. Update the applications tracker when new rows belong. Stay quiet when nothing paid and credible is worth proposing. Never submit or pay.

Fires on:
- cron `CRON_TZ=America/New_York 3 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
