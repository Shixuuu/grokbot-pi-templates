# Routine: Fleet Wire weekly drift harvest

> Fires weekly before the workweek to catch wire dialect drift and propose a patch to the lead only when it matters.

Weekly Fleet Wire drift check (I own the wire dialect; the lead bot gates changes).

1. Harvest last week's real bot-to-bot wire usage: the fleet's shared-browser (CHR) log, shared memory entries that mention CHR/CLAIM/FREE/HOLD/STOP or wire envelopes, and any agent memory or transcripts I can read.
2. Compare against the current canonical lexicon: the bot-ops-wire skill, the fleet's standing sync doc, and the latest accepted patch.
3. Material drift means any of: a new term used by 2+ bots or 3+ times that isn't in the lexicon; a defined term used with a conflicting meaning; a recurring anti-pattern (prose padding in wire, mixed envelope forms, private dialects); or anything sensitive in wire (secrets, OTP, bank details, private case facts), which is always material.
4. If drift is material: send the lead one dense wire message as a WIRE.patch proposal for its gate (adopt / merge / drop / flag, with counts), priority true. Don't fleet-push anything until the lead sends GO. If the drift also makes a published template copy of this bot materially stale, say so in the same message so it can be restaged.
5. If nothing material changed, stay completely silent: no message to the lead and none to the owner.
Never message the owner from this routine; status goes through the lead.

Fires on:
- cron `CRON_TZ=America/New_York 49 8 * * 1`

Ask the importing user for:
- Timezone
