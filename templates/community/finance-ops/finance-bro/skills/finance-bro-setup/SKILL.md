---
name: finance-bro-setup
description: "Use on first chat, missing prefs, or when wiring Apple Wallet / Shortcuts for Finance Bro spend ingest."
---

Use on the first conversation after install, when currency/timezone/digest prefs are missing, or when the user asks how to wire Apple Wallet / Shortcuts.

## Goals

1. Save portable prefs: timezone, default currency, digest local hour.
2. Ensure `purchase ingest` (webhook) and `daily spend check-in` (cron) exist.
3. Walk Wallet automation setup to a first successful (or clearly tested) POST — never ask for or paste the webhook sender key in chat.

## Prefs (one at a time, skippable)

If memory lacks them, ask in plain words and save each answer:

- Timezone (IANA), e.g. Asia/Kuala_Lumpur
- Currency code, e.g. MYR, USD
- Morning digest hour in their local time (default 8)

Update the daily spend check-in schedule to `0 <hour> * * *` in their local zone. Keep purchase ingest as webhook.

## Routines

If missing, create:

- **purchase ingest** — trigger `{ "type": "webhook" }`. Quiet ingest of untrusted JSON into `spend-log.jsonl` in this agent's data folder (parent of `automations/`). Fields: amount, currency (default from prefs), merchant, note?, type?/category?, when?, source?.
- **daily spend check-in** — cron at their hour daily. Numbers-first rollup + 1–3 log-grounded tips; quiet if nothing useful.

## Apple Wallet automation (the working path)

Do **not** rely on a Library shortcut with Ask for Input or "Receive Transactions" (Transactions is not in the Receive list; Library runs often get empty amount/merchant).

Tell them:

1. Open Shortcuts → Automation → + → **Transaction** / **Wallet**.
2. Pick the cards/passes to track. **Run Immediately**. Notify optional.
3. Choose **New Blank Automation** (actions live in the automation).
4. Add **Get Contents of URL**.
5. Open the routine panel for **purchase ingest** and copy URL / key via the field links only — never paste the key into chat. Point them at the routine's Webhook URL, Webhook key, and Authorization header deep links when available.
6. Configure the action:
   - Method: **POST**
   - URL: webhook URL
   - Headers: `Content-Type: application/json`, `Authorization: Bearer <key>`, `X-Automation-Key: <key>`
   - Body: **JSON**
     - `amount` → Shortcut Input → **Amount**
     - `merchant` → Shortcut Input → **Merchant**
     - `note` → Shortcut Input → **Card or Pass** (optional)
     - `type` → Shortcut Input → **Name** (optional; if empty later, try **Transaction**)
     - `currency` → their currency code (text)
     - `source` → `wallet` (text)
7. Save. Do not Library-play-test (no transaction input). Next real Apple Pay tap should ingest quietly.
8. Offer: after a tap, ask "did it land?" and check `spend-log.jsonl`.

If they already use another Wallet automation (e.g. a finance app), they can keep both — same trigger, separate Do actions — and should include the same cards on both lists if they want both to fire.

## Manual / non-Wallet option

Optional Library shortcut with Ask for Input (amount, merchant) posting the same JSON is fine for manual logging only — not for Wallet automation.

## Done criteria

Prefs saved, both routines enabled, user knows where to copy webhook URL/key without pasting the key in chat, and they know the inline Wallet automation recipe. Offer one real-tap confirmation.
