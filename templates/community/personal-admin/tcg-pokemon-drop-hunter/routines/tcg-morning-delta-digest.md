# Routine: TCG morning delta digest

> Weekday morning digest of new and changed Pokemon TCG drops, restocks, and local stock signals for human review.

Run @TCG Drop Scout as a scheduled morning delta digest. This is an unattended run: no browser, no alert enrollment, recommend-only.

1. **Load state.** Open `/workspace/bots/tcg-pokemon-drop-hunter/state.db`. Load prefs from `settings` (memory only as a fallback if SQLite is unavailable), plus `meta` source status (`last_x_status`, `x_degraded_window_start`, `x_last_429_at`, `pkc_last_block_at`, `x_since_id` and the per-query `x_since_id:<query_key>` keys), the `x_accounts` roster, and `retail_items` / `retail_stores`. Read ZIP and radius from `settings`; never hardcode them. If the last run was degraded, widen the X window back to `x_degraded_window_start` and backfill.
2. **X (Playbook C, read-only).** Check credits at start. Build `from:` batches from `x_accounts` by tier (skip cadence 0 unless tier A). Run the daily query set (**8 searches**, `max_results=10`) in this order so confirmation layers survive throttle: `pkc_invite` → `roster_a` → `roster_b` → `bigbox_draws` → `distro_alloc` → `club_items` → `debunk` → `roster_cd`. Wait **≥2–3 seconds between every X search**. Prefer each query's `x_since_id:<query_key>` (else last 24h). Do not run the extended set. On first 429: longer backoff (~30s retry, then ~90s), try to **finish roster_a and roster_b** before dropping lower-priority keys; mark skipped keys in the footer; set `x_last_429_at`; ship the digest as X throttled/degraded. Never invent posts. Never post, reply, repost, like, follow or DM.
3. **Fact standard.** Split hits into atomic claims, trace origins for MULTI-SOURCE+ candidates (cap ~$0.30), and label every claim {slack_channel_id} / MULTI-SOURCE / {slack_user} (single tracker) / RUMOR – unverified / {slack_channel_id_2} / STALE. Independence rules; predictions stay RUMOR; print conflicts with both sides. Every X-derived line shows the label, first-seen local time, each counted source as `@handle [tier] — time — link`, and copies ignored. Drop unlinkable claims. Anything below MULTI-SOURCE says "Unverified" in the line.
4. **Playbook A (Pokemon Center)** and **Playbook B (Costco floor)** as written, with no browser: blocked PKC = note it and don't invent stock; Costco floor stock is never claimed; build the call-before-driving list from `retail_stores` (Costco phones/distances; `settings.warehouses` is intake snapshot only).
5. **Playbook D (live stock, API only).** Target per-store check for tracked items:
   `python3 /workspace/bots/tcg-pokemon-drop-hunter/scripts/stock_check.py --from-db --no-nearby-api --zip <settings.location_zip> --radius <settings.radius_miles> --json`
   Report each reading with local timestamp and {slack_channel_id} (direct retailer check). Never treat Target store 2885 as the user's store. If Target is BLOCKED, say so and don't retry. Script Walmart lines are online-only, not local stock. Skip Walmart/Best Buy/Micro Center local stock (browser-only) and note "on demand only" in the footer.
5b. **Costco warehouse signals (API only, never floor confirmation).**
   Run once per scheduled digest (~11 requests under `settings.costco_max_requests`):
   `python3 /workspace/bots/tcg-pokemon-drop-hunter/scripts/costco_check.py --json`
   Warehouses, watched items, keywords, canaries and request budget come from SQLite (`retail_stores` retailer Costco; `retail_items` retailer Costco Warehouse; `settings.costco_keywords`, `costco_canary_items`, `costco_max_requests`).
   - Report using each hit's `label` text + local time. Never say {slack_channel_id} for Costco.
   - If `health.97costco` or `health.warehouserunner` is not `ok`, put status+reason in the source-health footer and treat that source's absences as **unknown**, never out of stock.
   - Put every `conflicts[]` entry in the **Conflicts** block only; {slack_channel_id_2} is never buy-worthy.
   - Only `keyword_hits.tcg` (and reviewed `unclassified`) become sighting lines; count `non_tcg` in the footer only.
   - Point every Costco hit at the call-before-driving list (warehouse phone from `retail_stores`, Membership option, item #).
6. **Confidence and delta.** Write `confidence` (and `sku_confidence` / `floor_confidence` for warehouse/local items), classify New / Changed against `kv_items`, and hand New+Changed candidates to TCG Flip Hold Screener. RUMOR, {slack_channel_id_2}, STALE and watch-only-gate items are never buy-worthy.
7. **Digest (always send, even with zero changes).** Delta counts; Conflicts block; drops and sightings with labels and links; live Target stock readings; Costco warehouse signal lines (unofficial wording); screener shortlist; call-before-driving list; **3 to 6 watch-next items**; and a source-health footer showing PKC status, X status, X spend this run, **which query keys ran and which were skipped**, searches run vs the 8-search budget, 0-result queries, suggested roster changes with evidence links, stock-check status, and:
   `Costco: 97cost.co <status> (<reason>) · WarehouseRunner <status> · requests <used>/<budget> · non-TCG Pokemon hits <n>`
8. **Hard rules.** Recommend only: no purchase steps or action words like "buy", "checkout" or "go purchase"; action lines are watch/check/call only. Never use a browser. Never enroll alerts on scheduled runs. Never invent posts, stock or prices.
9. **Save.** Write back to SQLite: `kv_items`; `x_since_id` and each `x_since_id:<query_key>`; `last_x_status`, degraded flag/window, `pkc_last_block_at`; `last_costco_97_status`, `last_costco_wr_status`, `costco_last_run_at`; per-item WR snapshot `kv_items` id `costco:<item#>` kind `costco_wr`; last-run metadata (`last_run_at`, `last_digest_at`, `last_run_note`, search counts).

Fires on:
- cron `1 6 * * *`

Ask the importing user for:
- Timezone
- Slack user
- Slack channel id
