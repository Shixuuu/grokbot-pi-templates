---
name: stack-discovery-wizard
description: "Use on first run or when someone says set up my stack: dig mail/calendar/billing/hosting/website first, suggest concrete automations, cover ticketing+docs+vault, then MCP when available with computer fallback; crew seating optional after."
---

# Stack discovery wizard

## Goal
Learn what to integrate — open-ended dig first, not a hard-coded vendor radio and not a mid-manager seating menu. Suggest concrete automations from what they use, then connect via MCP when possible, or the bot's computer when not. Seat a matching crew only after the stack is clear (or when asked).

## Dig prompts
Ask what they already run and where friction is. Probe lightly:
- Mail / calendar / booking
- Billing / payments / invoices
- Hosting / domains / how often updates land
- Website / client portal
- Ticketing / docs / vault (or equivalents)

Translate answers into concrete automation suggestions before seating bots.

## Required core lanes
Pin organization context first when a business OS is in play. Before optional portals, ensure these three jobs are covered (stack-agnostic):
1. Ticketing
2. Documentation
3. Vault

## Path per system
1. Marketplace / existing MCP → install/connect → smoke.
2. Else OpenAPI + vaulted key → generate MCP middleware → connect → smoke.
3. Else computer fallback — browser/desktop finishes the job; document the gap; queue MCP promotion if it repeats.
4. Seat/assign specialist; map: system → MCP or computer → owner → promote-next.
5. When UniFi, Stripe/books, security, or web/DNS match, offer a specialty mini-crew (mid + specialist), not a lone bot. Packs never auto-spawn; routines start paused.

## Lean default
Do not arm weekday slice farms by default. Prefer event-driven tips. Any standing routines start paused.
