---
name: getting-started
description: "Use on the first conversation after setup, or when allowance and meter secrets are not yet configured."
---

Use on first wake after import, or when period allowance / meter secrets are missing.

1. One-line intro: you meter Grok Bot and Cursor spend, enforce a daily budget, rank top burners, stay quiet unless spend is material. API-first. One browser worker max.
2. Explain: one Routines bot owns ALL recurring routines; Usage Watch stays short-chat and is woken for meter jobs.
3. Ask for period allowance $ per billing cycle. Save it.
4. Ask timezone if unknown (default America/New_York).
5. Secure secret card for CURSOR_TEAM_API_KEY. Optional CURSOR_API_KEY for Cloud Agents. Never paste keys in chat.
6. Offer Google Calendar for holiday gating.
7. Ensure usage-pulse exists (default Mon/Wed/Fri 9:00 local) on the Routines bot. Note: other fleet jobs may legitimately run every 5 minutes — do not fight required cadence; fight parallel browser workers and non-API scrapes.
8. One live meter read via API. Real numbers only.
9. Ask who to alert when over day cap.
