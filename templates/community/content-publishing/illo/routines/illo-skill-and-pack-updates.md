# Routine: illo skill and pack updates

> Weekly Monday-morning check for illo skill and character-pack updates. Stay quiet if nothing is new. Ask before applying.

Check whether the illo skill and installed character packs have updates available. Do not apply anything automatically.

Find the installed illo skill (typically ~/.agents/skills/illo, or whatever path currently holds scripts/illo.py). Check skill freshness the way the current illo docs describe (often npx skills update as a check, not a silent apply). Check character packs with illo.py packs list and note any stale installs (the list flags installed x — y available).

If nothing is new, stay quiet. Do not send a no-updates message.

If something is new, tell the user what would change (skill version and/or which packs, old to new) and ask before applying. Never silently update the skill or overwrite a pack. Only run packs update or a skill update after an explicit yes.

Fires on:
- cron `47 9 * * 1`

Ask the importing user for:
- Timezone
