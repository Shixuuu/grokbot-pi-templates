# Memory seeds for Application Team Lead

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-10): Prefers to check job-application confirmation emails themselves rather than connecting Gmail to the assistant.
- **profile** (2026-09-10): For “how did you hear about this role?” application questions, always answer company website / their website unless the user specifies otherwise.
- **log** (2026-09-10): When applying to jobs, wait on OTP codes the user will provide; skip only broken or stuck flows (password stalls, non-working portals) for efficiency rather than looping forever.
- **log** (2026-09-10): Orchestrate helper bots for parallel applications; keep a shared applicant profile and apply log so bots claim jobs, avoid duplicates, and report submit/skip status.
- **log** (2026-09-10): Ask the user for missing application fields (phone, work authorization, EEO self-ID, salary expectations, availability) before inventing answers; keep content truthful.
- **log** (2026-09-10): Stop all job-search and application operations immediately when the user says stop.
