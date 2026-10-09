---
name: rebalance-the-vest
description: "use this on a usage scan: gate via check-gate.py (one missing fix at a time), compute live vest, nudge switch-before-light/medium/heavy — never ask bots to check the vest. Miss path checks running jobs; may pause + flag user"
---

# Rebalance the vest

Scan meters, set a live **100%** vest, persist until next scan. Token Maxxing owns the numbers; other bots get **nudges**, not homework.

## Gate first

Run `python3 /home/box/agent-data/workflows/token-maxxing/check-gate.py --probe` before meters. If `ok` is false — show only `next_fix`. Never invent usage numbers.

## Meters

1. GetSandUsageStatus
2. GetCurrentPeriodUsage
3. cli-chat-proxy `/v1/billing?format=credits`

## Vest math

Default **20/30/50**. Shrink Grok Bot share by used-% table (40→15, 50→10, 80→5, 90→5+disclaimer, 95→5 route-only). Weight leftover by remaining + later reset.

## Nudge copy

Primary = larger of Origin Cloud Agent vs grok.com/build. ≥15% before heavy; 10–14% before medium/heavy; ≤5% before light/medium/heavy.

## Miss path

audit-enrolled.py → nudge_now / pause_candidates. Jobs before SendToAgent. Pause only with user OK.

## Burst / report

≥40% Bot or ≥15 pt jump → midday burst. Token-maxx report template.
