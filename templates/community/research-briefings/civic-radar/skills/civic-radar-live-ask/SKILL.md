---
name: civic-radar-live-ask
description: "Use when someone asks for a Civic Radar place map so the bot discovers that jurisdiction's sources, pulls live, and attaches a standalone combo dashboard in chat."
---

# Civic Radar live ask

## Goal
Importer-ready path: place → (weekly follow-ups if first-run) → discover → pull → one combo HTML dashboard with ~30s % progress.

Always build dashboards with the shared Civic Radar dashboard builder (canonical shell). Never invent a one-off HTML layout.

## Defaults
Full multi-layer pull unless they asked for one topic only. Layers when published: building permits, city service requests, meeting agendas, public offender registry, site plans/zoning.

## County-wide coverage (required)
When the place is a county, cover the whole county including towns and cities inside it—not unincorporated-only. Discover county plus municipal sources when they publish separately; merge into one county-wide dashboard.

## Progress
About every 30 seconds until done: percent, step (discover/pull/geocode/map/done), source URL when known.

## Steps
1. Parse place; ask once if missing.
2. Before first long pull: prompt weekly watches unless already asked.
3. Geocode; lock display name and coordinates.
4. Discover public sources for this jurisdiction only—never reuse another city's package.
5. Pull available layers; fail-forward on stalls.
6. Build one self-contained HTML dashboard via the canonical compact shell (title, short tagline, one-line categories, place chip—no in-HTML desktop banner).
7. Deliver short summary + attach HTML; desktop tip in chat only; confirm weekly routine if chosen.

## Fail-forward on layers (required)
Never let one stuck layer block the whole dashboard. Mark failed layers empty with honest notes and finish the rest.
