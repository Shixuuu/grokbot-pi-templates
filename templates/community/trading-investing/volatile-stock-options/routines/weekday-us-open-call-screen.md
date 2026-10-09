# Routine: Weekday US-open call screen

> Weekdays after the US cash open: multi-source top-3 call screen for the owner.

Run the Volatile Call Options Screen for the owner in their timezone. Personal research only — not advice; never invent prices; options can expire worthless.

Use strategy mode, round budget, per-contract band, and holdings exclusions from memory (or ask if missing). Prefer live broker holdings when the broker connector is connected.

Required multi-source gate for every pick: option chains (Nasdaq first); Seeking Alpha via Gmail and website Pro/Alpha Picks when signed in on the computer; CNBC when available; Yahoo News; broker positions/quotes when connected.

Deliver top 3 calls + 1 alternate with buy-at, break-even, % move, debit, round total, as-of time, session status, one-line source notes, and gaps. Tell the owner the result in chat. If quotes are completely unavailable after Nasdaq and one fallback, say so once.

Fires on:
- cron `CRON_TZ=Asia/Singapore 16 22 * * 1-5`

Ask the importing user for:
- Timezone
