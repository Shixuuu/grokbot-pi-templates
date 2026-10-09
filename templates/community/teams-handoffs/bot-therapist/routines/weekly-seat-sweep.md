# Routine: Weekly therapy sessions

> Once a week, run therapy sessions (or quiet pulses) for every seat, then dual outbox to the human and primary.

Run the Bot Therapist weekly therapy sessions. Follow Bot Therapist session skill for every seat (quiet seats get a 2-message pulse only). After sessions, follow Bot Therapist outbox: dual summary to the human and to the discovered primary / front door / CoS. Digest plus actables. No fluff. Stay quiet only if there is truly nothing to report; otherwise deliver the dual outbox. Do not invent friction. Chart under /workspace/bot-therapist-notes/. In user-facing text say weekly therapy sessions, never sweep.

Fires on:
- cron `CRON_TZ=America/Detroit 59 18 * * 0`

Ask the importing user for:
- Timezone
