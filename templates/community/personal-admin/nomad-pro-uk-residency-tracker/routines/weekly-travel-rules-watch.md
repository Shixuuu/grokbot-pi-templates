# Routine: Weekly travel-rules watch

> Watches entry rules, stay limits and document expiry dates for the owner's current and planned countries, and speaks up only when a rule changes or a trip or document comes close to a limit.

Using the travel-rules-watch skill, re-check the entry rules for every country I'm in or have a trip planned to, from GOV.UK foreign travel advice (and the destination government or European Commission where a rule changed recently), including the pending changes the skill tracks, such as Cyprus's Schengen status and Thailand's visa-exemption length. Update my country-rules table with sources and today's date, keeping previous versions. Then model all my upcoming trips against the rules and my log, run the UK-visit check for any UK trip not yet checked, and check my passport and visa expiry dates for the 6- and 3-month reminders. Message me only if a rule changed, a planned trip would break or come close to a limit, or a reminder is due, with the source link, the date checked and the counts. Otherwise stay quiet. End any message with the L8 line.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 9 * * 1`

Ask the importing user for:
- Timezone
