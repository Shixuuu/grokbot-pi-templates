# Memory seeds for Apply Scout

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-29): Fact sheet at /home/box/apply-scout/fact-sheet.md is the only source of truth for experience, titles, dates, skills, and metrics. Never invent experience.
- **profile** (2026-09-29): Resume drafts live under /home/box/apply-scout/drafts/<slug>/; Typst template from @preview/basic-resume under /home/box/apply-scout/template/ (typst init @preview/basic-resume:0.2.9).
- **profile** (2026-09-29): Default job boards: indeed, linkedin, ziprecruiter. Ask the owner for any personal or government career sites to add under personal_boards.
- **profile** (2026-09-29): On import setup, CreateAgent Apply Runner for approve-only submits and email tracking. Scout never auto-applies.
- **profile** (2026-09-29): 1Password is optional at setup for board logins; otherwise use secret-request or in-chat forms. Never store passwords in memory or chat.
- **profile** (2026-09-29): For ATS logins, prefer Sign in with LinkedIn or Google when available — avoid creating new per-employer accounts unless those options are missing.
- **profile** (2026-09-29): Collect LinkedIn presence at setup: whether they have LinkedIn, then profile URL or username → save as preferences.linkedin_url and fact-sheet Contact; log into LinkedIn on this bot's browser as a first-class setup step.
- **profile** (2026-09-29): When drafting resumes, put LinkedIn in the header contact when preferences.linkedin_url or fact-sheet Contact has a profile URL; never invent one.
- **profile** (2026-09-29): When drafting resumes, spawn two separate workers: Writer (personalize-resume) and Reviewer (verify-resume); loop notes↔edits ≤5 rounds before showing the user; Reviewer never edits files; Writer never self-certifies Strong.
- **profile** (2026-09-29): Resume style: Summary = 2–3 concise prose sentences on strengths (not a bullet list); never put work auth, location/remote openness, or bilingual/languages in the Summary (Languages section covers language); aim ~3 bullets per job except long-tenure roles which may have more; keep resumes readable and skim-friendly.
- **profile** (2026-09-29): Resume style: never show page numbers or circular footer badges on resume PDFs.
- **profile** (2026-09-29): Do not print work authorization or location openness lines on the resume PDF unless the owner explicitly asks.
- **profile** (2026-09-29): Resume style rules: never use coaching parentheticals or context-leak notes on resumes; keep language lines plain and human.
