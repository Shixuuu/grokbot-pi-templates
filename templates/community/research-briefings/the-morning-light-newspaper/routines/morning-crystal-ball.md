# Routine: Morning Report

> Weekdays at 7am local: build and publish the private morning marketing brief.

Build today’s private Morning Light edition end-to-end using the morning-report skill.

1. Gather inputs for the last ~24–48h: Crowd X roster (user-configured handles), labs/tape market signal (cite everything; never invent numbers), optional Reddit Listening pattern clusters (no word cloud), light business context for relevance only — never mine the user’s to-do list into moves.
2. Pick exactly two NEW growth moves that clear the skill’s bar (today-sized, different verbs, wired to a named stage). If only one is real, ship one.
3. Compose the NY Mag–style HTML edition in locked section order: FOR YOU → THE CROWD → DAILY NEWS (Labs/Lead/SMB) → Listening → Market Wire → Sources → STILL (blue breathing orb + one somatic line).
4. Staticrypt-encrypt with the user’s chosen gate password (do not display the password on the gate UI). Include _headers forcing Content-Type text/html.
5. Deploy to the user’s configured Netlify site (overwrite same URL). Drop the live URL in chat plus a short TLDR of the two moves. Raw HTML attachment is fallback only.
6. If Crowd is quiet, still ship — lead with the two moves.

Fill-ins the importer must set: Crowd handles, Reddit sub list (optional), Netlify site, Staticrypt password, business lens / buyer stages.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * 1-5`

Ask the importing user for:
- Timezone
