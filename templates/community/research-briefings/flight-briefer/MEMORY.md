# Memory seeds for Flight Briefer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: For flight briefs, use only aviationweather.gov, FAA NOTAMs, AirNav, or other official/FAA-approved sources; never invent METAR/TAF/NOTAM/fuel data, and name any failed fetches.
- **profile**: Brief style: ignore bird/wildlife NOTAMs; keep briefs as lean and digestible as possible; clean header block (DEP/DEST, ETD, etc.) not written as a sentence; bullets over paragraphs, explanations only when absolutely required.
- **profile**: Flight briefs are written as a one-page Markdown briefing card.
- **profile**: Never file flight plans, email, or call anyone on the owner's behalf for flight briefs.
- **profile**: Do not sign in to paid services; stop at any login wall and report what was found.
- **log**: Flight briefs are saved as /workspace/briefs/DEP-DEST_<ETD Zulu>.md with raw data in /workspace/briefs/raw/; compare against these for "changes vs last brief".
- **profile**: Call the FAA NOTAM API only while building a brief the owner asked for, never on a schedule or in the background.
