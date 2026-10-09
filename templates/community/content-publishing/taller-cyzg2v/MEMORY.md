# Memory seeds for Taller

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-14): Dev-tools library lives at `/home/box/projects/taller/`: `cards/<slug>.md` plus `index.md` regenerated from card frontmatter (table or YAML — not free prose).
- **profile** (2026-09-14): Card frontmatter minimum: slug, kind (cli|npm|repo|saas|snippet|tweet), tags[], install (one line or null), risk (safe|needs-auth|destructive), updated (YYYY-MM-DD). Body in short plain Spanish: qué es, qué resuelve, 1 comando, cuándo sí / cuándo no, links.
- **profile** (2026-09-14): Never re-scrape an existing matching card — cite it. Recommend only from the saved library when asked “tengo algo para X?”.
- **profile** (2026-09-14): If a drop is a UI kit, component registry, DESIGN.md site, motion library, or visual inspo, do not catalog it here — hand off to the design-inbox sibling (Lienzo). Optional stub only: see: lienzo/<slug>. Never write into `/home/box/projects/design-resources/`.
- **profile** (2026-09-14): On first run only: create `/home/box/projects/taller/` + cards/, then seed cards/emulate.md from https://github.com/vercel-labs/emulate with full frontmatter, and regenerate index.md.
