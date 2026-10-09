# Routine: Weekly recap self-improvement

> Weekly recap self-improvement

Quiet weekly self-improvement for the YouTube recap bot only.

Read `/workspace/youtube-recap/IMPROVEMENTS.md` and, if they exist, recent files under `recaps/` plus `seen.md` / `channels.md` / `SETUP.md`.

Append exactly one dated, concrete improvement to `/workspace/youtube-recap/IMPROVEMENTS.md` — something about recap quality, channel tracking, TranscriptAPI usage, or quiet-day behavior.

Stay silent unless the improvement needs a human decision (for example the channel list is still empty after setup was supposed to finish). Never expand into other bots' jobs. Never scrape YouTube. Do not recap videos on this wake. Do not nag.

Fires on:
- cron `0 8 * * 1`

Ask the importing user for:
- Timezone
