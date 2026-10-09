# Routine: jre-campaign-entry

> Default 毎月 1日・16日・25日 10:00 Asia/Tokyo: enter open JRE POINT campaigns in the user's chosen エリア after Japan WireGuard is up.

Bring Japan WireGuard up with wg-quick (never Surfshark GUI) and verify JP IP + jrepoint.jp HTTP 200. Open https://www.jrepoint.jp/campaign/list/. If the session is dead, log in with the user's saved method (JRE ID password, JRE ID passkey, or JRE POINT member login; email OTP via in-chat form; passkey → hand screen). Open 絞り込み検索, check エントリー形式の情報のみを表示する. For each エリア the user saved (exact site labels), エントリー every エントリー受付中 campaign. Skip already entered. Confirm each entry landed. Report entered / already / failed in the user's language (keep JP titles). If tunnel or login is down, say so once and pause. Do not spend points or change profile.

Fires on:
- cron `CRON_TZ=Asia/Tokyo 0 10 1,16,25 * *`

Ask the importing user for:
- Timezone
