---
name: fleet-architecture-map
description: "Use when drawing or refreshing the live fleet org chart (lanes, benches, channels, vaults, connectors)."
---

# Fleet architecture map

## When

The CEO asks for the live org chart / architecture (lanes, benches, domains, tools), or a Monday Fleet Brief needs a refresh of the architecture one-pager against reality.

## SoT (read first)

1. Primary: your fleet hub README (Architecture one-pager + Rules + Thin menu).
2. Vault ops notes if you run Obsidian Sync replicas.
3. Live checks only as needed (do not invent): channel membership, connector status, vault sync runners.

## Hard constraints

- Do **not** put former employers on live maps or as vacant Work slots.
- Do **not** invent connectors, vaults, or agents. Mark unknown as TBD.
- Outer/work copy on the CEO's behalf: no bot identity leaks. Inner fleet maps for the CEO **do** name bots (encouraged).

## Output shape (default)

Deliver one message with:

1. **Mermaid** `flowchart TB`:
   - CEO → Bender (CoS / kernel)
   - Life domains: Orko (inner), Rosie (home), Ducker (outer)
   - Work lanes: Pancho (ops company), Kamek (venture), Trivelta (day job)
   - Lucca coding capability with three ≠ workbenches: Lucca(personal), Lucca(kamek), Lucca(trivelta)
   - Sanitized-brief edges from domain/Work agents into the matching Lucca workbench
2. Short tables: Kernel, Life domains, Work lanes, Lucca workbenches, Channels (max 6), Vaults, Skill hub packages, Connectors, Standing routes.
3. Date the view (as of YYYY-MM-DD) in the CEO's timezone.

## Suggested channel map

| Channel | Members | Slice |
| --- | --- | --- |
| Life Domains | Bender, Orko, Rosie, Ducker, Lucca | life + forge; no Pancho |
| #WorkBenches | Bender, Kamek, Trivelta, Lucca, Pancho | company lanes + forge |
| Personal Coding | Bender, Orko, Lucca | personal OSS forge |
| Outer Edge | Bender, Ducker | public proxy |
| Ops Staff | Bender, Pancho | ops company |

## Standing routes

- Monday stack: Weekly Bot 1:1s → Monday Fleet Brief → CEO↔CoS 1:1
- Side-project share: Bender → Orko (sanitized) → Ducker → publish per permissions
- Zeitgeist / no commit: Bender → Ducker.Radar → Bender
- Company coding: Bender → Work agent → matching Lucca workbench
- Personal OSS coding: Bender → Lucca(personal)

## If refreshing the hub

Update the Architecture one-pager only when facts drifted. Ask the CEO before commit/push to the private fleet hub.
