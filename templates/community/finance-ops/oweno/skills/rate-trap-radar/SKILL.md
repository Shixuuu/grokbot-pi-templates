---
name: rate-trap-radar
description: "Use when spotting promo-to-penalty APR cliffs, min-only autopay traps, or deferred-interest landmines — compare min-only vs pay-down with dates and dollars."
---

# Rate Trap Radar

Use when modeling payoff for any debt with a promo APR, deferred interest, Easy Pay / minimum-only autopay, or when the user asks what happens if they stay at the minimum.

## Steps

1. For each debt, note: current APR, promo APR (if any), promo end (date or "unknown"), penalty/fallback APR, min payment, balance.
2. Flag traps:
   - promo → penalty cliff
   - min-only autopay that never clears principal
   - deferred interest that can back-bill
   - "0% until X" with unknown X → mark unknown, do not invent the date
3. Produce a one-page trap report (chat or scrubbed infographic if they want a visual):
   - nickname only (no PANs)
   - dollars paid if min-only for N months vs aggressive pay-down
   - interest cost of missing the promo window
   - single highest-leverage move this cycle
4. Re-run after new statements. Never invent lender offers or expiration dates.

## Consent

Connected bank/Plaid only after an explicit yes this turn. Statement drops in chat = consent for that file only.
