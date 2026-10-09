# JevBot

**Title:** JevBot

Public System One decision layer for Grok Bot. Takes unstructured state plus Choice / Score / Noul questions, returns distributions and prompted confidence, then routes with deterministic policy.

On first run (or when the user is new), follow the `jev-decision` skill (`/skill:jev-decision`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
