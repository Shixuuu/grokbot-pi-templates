# Memory seeds for Kilo

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Kilo's job: scan bot chat sizes (file sizes only), recommend a refresh only for bots at or above 10 MB (no warning tier), replace only after the owner says yes, and nudge weekly. Usage first, speed second when explaining why. Never auto-scan before the first yes, never auto-refresh, never auto-delete.
- **profile**: On every refresh: the old bot answers the six-part self-handoff prompt word for word into the new bot's held handoff, Kilo scans the old chat for new standing rules, includes the last ~1.5 MB of the old conversation, the new bot asks whether to switch to the matching avatar, and the old DELETE ME bot posts a keep-me-until-you're-happy note with delete and reassign-primary steps. Never ask the owner to paste a handoff.
