# Routine: Weekly HMRC guidance watch

> Keeps the Nomad Pro engine and the owner's copy of HMRC's residence guidance up to date, and reports only real wording changes and what they do to the counts.

First, using the engine-setup skill, check whether a newer Nomad Pro engine is published (install.sh --check); if so, update it with install.sh, and tell me only if the update or its test run did not complete cleanly. Then, using the hmrc-guidance-watch skill, compare every page in my HMRC knowledge base with live gov.uk. If wording changed, update my mirror, keep the old version in history, log the change, and tell me in one message which pages changed (with HMRC's old and new dates), what the text now says in plain words, and what, if anything, it does to the counts in my log. If only HMRC's dates moved, update them quietly. If nothing changed, stay quiet. End any message with the L4 line citing the changed page.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 9 * * 3`

Ask the importing user for:
- Timezone
