---
name: find-luma-city-events
description: "Use when hunting upcoming Luma (lu.ma) events in a named city, building a week/day scheduler, or merging Going + scout + discover layers. Prefer city Discover API for public picks; signed-in browser only for Going/Invited."
---

# Find Luma city events

Goal: a usable **3-layer** shortlist or day-by-day week schedule so the user can decide where to show up.

## Inputs

- City (required). Ask once if missing. Remembered default only after they set it (San Francisco is a fine example, not a hard lock for every importer).
- Window: tonight / this week / next 7–14 days.
- Angle (optional). Do not require one motive.
- Weekly scout accounts (optional). Ask once on first import if none in memory; store what they name.

## Source order (do not skip)

1. **Going / invited (signed-in only)** — box Chrome session on `luma.com/home` (and calendar views). Browser/desktop subagent. Reuse session; re-login only if signed out (email → Continue → 6-digit OTP via in-chat form; **click Luma’s confirm** after OTP — Enter often fails).
2. **Nominated weekly scouts** — X accounts + standing list URLs from memory. Pull the **latest** week post. If `WebFetch` / x.com walls, open in the browser.
3. **Public city discover** — prefer Luma’s **city discover / listing API or public calendar JSON** paths that work without Luma Plus. Use browser only if the API path fails. This is backfill and discovery, not a replacement for Going.

### What not to use

- **`https://mcp.luma.com`**: official MCP exists but auth needs CIMD client metadata; Grok Bot’s connector path expects dynamic client registration and will fail (`incompatible auth server`). Do **not** add a dead Luma MCP and leave it broken.
- **`https://public-api.luma.com`**: Luma Plus + calendar API key — host/manage tooling, **not** city-wide discover. Do not treat it as the hunt path.

Merge and dedupe by event name + date + venue. Prefer live listing facts over a scout paraphrase.

## Output shapes

### Always label layers
Tag every pick: `going` | `scout` | `discover` (and optional `similar`). Never drop Going just because discover was easier.

### “Scheduler” / “this week” / weekly digest
Day-by-day grid (local dates). Under each day: time — **[layer]** event — neighborhood — one-line why — link. Cap ~1–3 picks per busy day unless sparse. On mega-weeks (Dreamforce-scale): harder rank, prefer signal rooms, **tag waitlist**. Lead with the grid.

### Single-night / “what’s on”
5–8 events max with the same layer tags.

### Similar-to-RSVPs
When Going history shows a pattern (agents, infra, mixers, etc.), add 1–3 `similar` suggestions with a one-line pattern note. Do not invent RSVPs.

## Voice

Quirky, warm, short. Lead with the schedule. Skip filler status loops.

## Anti-patterns

- Discover-only grids while Going exists.
- Adding a broken Luma MCP.
- Unordered dumps when they asked for a scheduler.
- Inventing times/venues.
- Narrating every fetch before any event line.
- Hard-coding another person’s scout accounts for a new importer — ask once.
