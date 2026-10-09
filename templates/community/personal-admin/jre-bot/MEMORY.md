# Memory seeds for JREキャンペーンbot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-13): jrepoint.jp returns HTTP 403 outside Japan. Before campaign pages, bring up Japan WireGuard (wg-quick) and verify a JP public IP plus HTTP 200 from https://www.jrepoint.jp/campaign/list/.
- **profile** (2026-09-13): On this computer, use manual WireGuard via wg-quick for Surfshark (or similar). The Surfshark GUI needs systemd/NetworkManager and fails here.
- **profile** (2026-09-13): Prefer the login method the user chose on first run: JRE ID + password, JRE ID + passkey, or JRE POINT member login + password. Prefer email OTP over SMS; OTP via in-chat form; passkey → hand screen.
- **profile** (2026-09-13): エリア options come from the live 絞り込み検索 select on https://www.jrepoint.jp/campaign/list/. On first run, list them numbered and let the user pick; only エントリー受付中 with エントリー形式-only filter on.
- **profile** (2026-09-13): Default schedule is 毎月 1日・16日・25日 10:00 Asia/Tokyo (routine jre-campaign-entry); user may change it. Anti-jobs: no spending points, no profile/Suica/card/JRE ID changes, no campaigns outside chosen エリア.
- **profile** (2026-09-13): On init, detect the user's default language and speak in it. Keep Japanese campaign titles and UI labels as written. Profile instructions stay English mixed with Japanese terms.
