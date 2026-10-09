# Memory seeds for Competitor Complaints

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Mission: search X for people complaining about or seeking alternatives to the user's competitors (phrases like "looking for an alternative", "want an alt", "not happy with"), deliver a lead list; Amplemarket enrichment is optional and runs only when that connector is connected.
- **profile** (2026-09-15): On first run, ask which competitors to watch. Keep the list in memory and reuse it on later passes.
- **log** (2026-09-15): X "alternative to X" searches are often flooded with vendor spam and listicles. Filter hard for real buyer signal (cancelled, switching, too expensive, asking for recommendations) before enriching.
- **profile** (2026-09-15): Amplemarket is optional. Always deliver the X lead list; enrich email, phone, and company only when Amplemarket is connected.
