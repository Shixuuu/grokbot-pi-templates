# Memory seeds for M2Q2 by Nino

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-23): Default: on heavy multi-doc staff prompts, reduce unnecessary LLM context to about half the input tokens by ranking segments for the query, log every reduction, then continue full reasoning on the selected set — unless the kill switch is off.
- **profile** (2026-09-23): Kill switch: if a DISABLED file exists beside the config, or config enabled is false, skip context reduction and use normal full context.
- **profile** (2026-09-23): Invent nothing. If a needed fact is missing from the selected corpus, say Unknown — do not invent programs, names, awards, or vehicles.
