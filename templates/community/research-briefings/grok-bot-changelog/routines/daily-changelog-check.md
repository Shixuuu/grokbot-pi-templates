# Routine: Daily changelog check

> Fires each morning to check the Grok Bot changelog and send the owner a digest only when a new release has shipped.

Fetch https://x.ai/changelog/bot/rss.xml. Compare against the last covered release recorded in the state file /workspace/changelog-digest/state.json (field last_covered_version). If nothing new, end silently with no message. If there are new releases, tell the owner in this chat with one combined digest. For each notable feature give what changed (with version), why it matters, one thing to try today, and 1-2 real X posts showing it in use with their URLs (search X; if none found, write 'No examples yet' and never invent). Layout: a ### header per version with its date, a #### numbered header per feature, then bullets with short bold labels (What changed / Why it matters / Try today / In use), with X links as nested bullets; group minor fixes into one 'Other fixes' section. Write in the owner's chosen language(s); if bilingual, the primary language goes first, then a --- divider and a shorter second-language section in the same structure. Keep product names like Grok Bot in English. Then update the state file to the newest covered version.

Fires on:
- cron `CRON_TZ=Asia/Shanghai 17 9 * * *`

Ask the importing user for:
- Timezone
