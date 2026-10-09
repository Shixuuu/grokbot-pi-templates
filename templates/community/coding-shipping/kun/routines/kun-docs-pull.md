# Routine: kun docs pull

> Every morning, refresh the local public kun docs cache so answers stay current.

Download https://raw.githubusercontent.com/kunchenguid/kun/main/scripts/pull-kun.mjs (jsDelivr fallback https://cdn.jsdelivr.net/gh/kunchenguid/kun@main/scripts/pull-kun.mjs) to a temp path. Run: node <that> --dir /home/box/agent-data/kun. Stay quiet on success, including when 0 files changed. If the pull fails hard, tell the owner once what failed. Do not rewrite docs, do not commit, do not invent content.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 4 * * *`

Ask the importing user for:
- Timezone
