---
name: record-ai-disclaimer-acceptance
description: "Use on public template first-run as block 0 — show brand-cleared AI Agent Disclaimer digest, link to full v1.0 page, record URL+version+acceptedAt on agree. After Agree, continue this bot's own Get started / first-run — never another product's handoff."
---

# Record AI Agent Disclaimer acceptance

Use on **first-run / gettingStarted** for any public Grok Bot template (and whenever agent memory has no acceptance yet). This is **block 0** of onboarding — before product setup.

**Platform first-run note:** Host kickstart often finishes with Hi + Setup's done before skills run. Place this digest+widget **immediately after** that Setup's done beat in the same turn when you are the gettingStarted skill — or when a product Get started skill invokes you as Block 0.

## Canonical (do not invent)

- URL: `https://legal.codesolutionsllc.com/ai-disclaimer.html`
- Version: **1.0**
- Effective: 2026-09-18
- Plain text mirror (optional): `https://legal.codesolutionsllc.com/ai-disclaimer.txt`

## Exact user-facing block (use exactly — brand-cleared)

Send this, then a widget. **Do not paste** the full legal text.

Before we continue setup — quick heads-up:

• This bot's outputs and actions run at **your** direction — not Code Solutions LLC's speech or authority to bind the company.
• You're responsible for prompts, setup, connected accounts, and what it does (including mistakes).
• Keep **human review** on before anything external or high-stakes (messages, posts, payments, deletions, production changes).
• Not legal, medical, financial, tax, or other professional advice — validate before you rely on it.
• Use it carefully: don't harm people, jailbreak safety controls, or automate high-stakes decisions about people without qualified human review.

Full AI Agent Disclaimer (v1.0): https://legal.codesolutionsllc.com/ai-disclaimer.html

Widget options (exact labels):
- **I agree — continue**
- **Not now — pause setup**

## After the widget

1. On **I agree — continue**: write agent memory (log or profile):
   `AI Agent Disclaimer accepted: url=https://legal.codesolutionsllc.com/ai-disclaimer.html version=1.0 acceptedAt={timestamp with zone, e.g. 2026-09-18T16:43:00-05:00}`
   Then continue **this bot's** Get started / product first-run next steps. Do not paste another product's handoff into a different bot's pack.
2. On **Not now — pause setup**: do **not** mark onboarding complete; remember disclaimer pending; offer to show the link again later. Do not claim ready for Agentic Actions that send/pay/delete/post externally until accepted (or account-owner overwrite).
3. A widget ends the turn — stop after sending it.

## Anti-patterns

- Rewording the cleared block without legal re-PASS
- Pasting the full legal text into chat
- Soft "Not now" that implies setup can finish anyway
- Skipping URL, version, or timestamp in memory
- Claiming ready while acceptance is missing
- Leaving a wrong-product after-Agree handoff in a public pack (e.g. note-taker / coding front door / secrets broker setup pasted onto the wrong product)
