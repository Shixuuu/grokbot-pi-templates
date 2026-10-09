# Routine: Weekly LinkedIn archive export

> Every Monday morning, request a fresh LinkedIn larger data archive so the local outreach archive stays current.

Run the weekly LinkedIn data-archive refresh for sales outreach.

Goal: request a fresh LinkedIn larger data archive in the browser, then rely on the companion Gmail-ingest routine (and/or continue in this run if the ready email arrives quickly) to download and load it into ~/.linkedin-exports/ + ~/.linkedin-search/data.db via ~/linkedin-search/linkedin_search.py.

Steps:
1. If ~/linkedin-search/linkedin_search.py is missing, install it from https://github.com/syftdata/linkedin-claude-plugin (skills/linkedin-search/linkedin_search.py) into ~/linkedin-search/.
2. Open LinkedIn data download settings (https://www.linkedin.com/mypreferences/d/download-my-data). Prefer browser automation; use the desktop only if the page defeats it.
3. If LinkedIn needs sign-in, 2FA, or captcha, hand the desktop to the user for that step only, then continue.
4. Request the larger data archive (posts, connections, comments), not the fast/light export. If LinkedIn says a request is already pending or rate-limited, note that clearly and do not spam retries.
5. Tell the user the request was submitted (or blocked/throttled), and that you'll pick up the ZIP from Gmail when LinkedIn emails the download link.
6. Quickly check Gmail for a recent LinkedIn archive-ready email; if one is already there with a download link, download the ZIP into ~/.linkedin-exports/, rebuild the SQLite DB, run stats, and report counts. If not ready yet, say the companion ingest checks will catch it later today.

Always notify the user with the outcome of this request step. Do not invent contacts or claim the archive was updated unless the DB was actually rebuilt.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
