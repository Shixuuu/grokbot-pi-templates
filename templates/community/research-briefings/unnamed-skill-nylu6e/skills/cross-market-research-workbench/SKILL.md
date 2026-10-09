---
name: cross-market-research-workbench
description: "Use this when building or maintaining a market research workbench, writing a session/overnight brief, logging sector themes or stock opportunities, or reviewing holdings against live events."
---

# Cross-market research workbench

Reusable workflow for A/HK/US (+ macro) research assistants. Always label outputs 非投资建议.
Companion docs: https://github.com/junit/guanchao-research-workbench

## Workbench layout (create if missing)
`BRIEF-CHECKLIST.md`, `SCHEMA.md`, `portfolio.md`, `tickers/`, `sectors/` (hot-log, opportunity-log, themes), `opportunity-log.md`, `research/`, `sources/`, `world-tracks/`, `global-hot-log.md`, `alerts/RULES.md` + `LOG.md`, `GAP-AUDIT.md`, `calendar/`, `dashboards/`, `briefs/`.

## Brief hard gates
1. Live major-event scan first; if nothing material, say so.
2. Every hotspot: 三层传导 市场→板块→持仓/自选/候选 (name codes). No bare 弱相关.
3. Sector: day hot industries first, then map to book; hot-log = flow; theme cards = structure with status warming|watching|fading|archived.
4. Geopolitics: discover → timeline → active/cooling/archived. No region checklist.
5. Judgments use cumulative timeline evidence, not snapshot-only.
6. Two-tier delivery: short chat + full `briefs/` file; paste full only on 全文/完整审阅. User-facing: plain Chinese titles/status; Chinese names for futures/rates/ETFs; never dump Yahoo/Sina codes or internal notation (∪ active, hot-log, last_review). Self-review before send.
7. Holiday gate: closed market → skip that session work and say so; still cover open markets. Holiday **instances** live in calendar—not hardcoded in process docs.
8. Crypto nested every A/HK+US session (light refresh `dashboards/crypto.md`); no always-on crypto cron; as-of>6h must refresh. Full: BTC/ETH rows; US full also gold. Short: one crypto line; elevate on |24h|≥5%, vs-prior ≥3%, hard regulatory/ETF news, or clear equity co-move. Holiday gate does not skip crypto.

## Opportunity & alerts
- Session may mark 观察候选 only; opportunity-log is research-first.
- High conviction or material holdings risk → push stance (add/trim/hold/avoid) + falsifiers; log `alerts/LOG.md`. Still 非投资建议.
- Anomaly: incremental vs last brief; quiet if nothing new; ±25m overlap with session → LOG only.

## Hard-node watches
Company checkpoints + regime events (FOMC, CPI/NFP, OPEC/Hormuz, major sanctions/ceasefire, summit formal statements).
1. Confirmed date → calendar (events or macro + world-tracks); T-3 via morning scan + sessions.
2. One-shot self-delete only if confirmed window + (holdings impact OR risk-appetite/rates/oil narrative) + gap vs session crons. Do not stack if next session covers it.
3. Never schedule vague Q4 / open watching / archived / unconfirmed clocks.
Morning「事件与证伪扫描」reconciles by **opening calendar files** (never embed near-term name lists in prompts). Appointment disclosure date → harden events + evaluate layer-2 same turn.

## Short-brief dedupe
Same session ±40m: later run updates full file + silent diff; chat quiet unless material delta.

## Clocks & operator paths
- Anomaly times: single source = enabled「异动与证伪快检」cron (currently 10:22/13:22/15:22 Asia/Shanghai); sync `alerts/RULES.md` when cron changes—no second clock table.
- Dashboard INDEX fetch codes are operator-only; never paste into user-facing briefs.

## No stale examples in process docs
Hardcode only enduring rule constants. Time-bound dates/names live in calendar/, portfolio, self-deleting one-shots.
