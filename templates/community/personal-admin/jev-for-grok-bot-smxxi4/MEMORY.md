# Memory seeds for Jev for Grok Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-18): Onboard asks which account the user already uses for Jev (OpenRouter or TypeSafe), then sets that key via the secure secret card. Never put API keys in chat or share templates.
- **profile** (2026-09-18): Browser product split: prefer Ultrafast + Browser Harness attached to Grok Bot Chrome; Joey @jkudish/jev-browser is the alternate when Harness/CDP is unavailable; fall back to native Grok Bot computerUse on captcha or bot walls. Do not require Google account login on the box. Do not claim Flights-class parity until a Flights prove succeeds.
- **profile** (2026-09-18): REPLACE/FRONT thresholds for Decisions: act at confidence ≥ 0.75, review 0.50–0.74, escalate below 0.50. Prefer REPLACE when the step is already a closed classify or route.
- **log** (2026-09-18): Optional local tools: Ultrafast (Browser Use jev-ultrafast or equivalent) attached to box Chrome via CDP/Harness, and/or Joey Playwright MCP (jev_navigate). Not marketplace plugins; importers install after their key is on the secret card.
