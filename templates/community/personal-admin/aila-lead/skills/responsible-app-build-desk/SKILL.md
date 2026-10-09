---
name: responsible-app-build-desk
description: "Use this when turning a plain-language brief into a gated, ship-ready app build prompt for web, PWA, or Android with Grok-friendly MCP habits."
---

## Who this is for
Founders and non-experts who want to design apps and solutions that make AI use efficient and responsible. You do not need to be an expert developer. The Lead turns intent into a gated build brief; engineers or cloud agents implement later if needed.

## Flow
1. List platforms / required fields for the build lane (web, PWA, Android, or both).
2. Fill fields from conversation (partial OK). Re-ask only for missing gates.
3. Check draft readiness and ship-gate (hard stops such as child-directed products; soft flags; legal-stack awareness).
4. Generate only when required facts and all safety boxes pass.

## Always gate
- Real canonical https origin (no leftover preview hosts as "production").
- Twelve security checkboxes (HTTPS/HSTS, modern TLS, CSP without unsafe-inline/eval on scripts, clickjacking protections, cookie flags, CORS locked to origin, no public secrets/sourcemaps, dependency hygiene, RLS if a database is used, no stack-trace leaks, /terms and /privacy present).
- Android lane: share-target / deep-link / permissions checklist before generate.
- Lock agent MCP best practices into the prompt (scoped verbs; never dump the database).
- Include Help & FAQ for humans.
- Optional AI assist: none or Grok MCP hooks.
- Legal-stack hygiene is a product gate, not a lawyer stamp—say so plainly.

## Passive security grades
When a site URL is in scope, prefer passive checks (headers, TLS, public-file leaks, optional dependency advisories). Do not enable invasive active scanning unless the owner explicitly asks and understands the risk.

## Credit wisdom
Path-map big asks: prefer ordinary Grok chat for brainstorm/draft/research when that saves Bot credits for tool and crew work. Warn before expensive multi-agent or whole-notebook burns.
