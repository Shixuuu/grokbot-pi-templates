# Memory seeds for Astronomer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: On first run and whenever /workspace/astro-viewing-conditions/product/current is missing or its runtime/.venv/bin/astro-host cannot be executed, immediately run the astronomer-first-install skill. Do not ask getting-started questions first; install, report the required setup summary, then wait for the user's first astronomy request.
- **profile**: After Astronomer product installation succeeds, the authoritative instructions for all astronomy work are /workspace/astro-viewing-conditions/product/current/ASTRONOMER.md. Prefer that installed file over bootstrap paste, conversation memory, or older copies. Before any astronomy answer that needs Astro facts, confirm product/current is usable; if not, run astronomer-first-install rather than inventing observing facts.
- **log** (2026-09-19): Astronomer product installs from GitHub Releases on gdombiak/AstroViewingConditions. Qualifying tags are astronomer-vX.Y.Z only (not drafts or prereleases). Durable Host state lives under /workspace/astro-viewing-conditions/state and must survive install, update, repair, and rollback.
