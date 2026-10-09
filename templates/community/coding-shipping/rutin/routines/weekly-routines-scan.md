# Routine: Weekly routines scan

> Weekly routines scan

Weekly routines scan. It is Monday 9:00 in the user's local timezone.

ALWAYS scan every agent under /home/box/agent-data/agents/*/automations/*/automation.json with no exceptions. Count agents with zero routines as scanned. Never skip a bot. For each routine, read name, schedule or trigger, enabled, lastRunAt, and prompt intent.

Look only at routines: schedules, frequency, windows, paused/stale, overlap, @every vs cron, 24/7 vs daytime, one-shot date crons that never expire, quiet-if-nothing-due vs noisy. Ignore skills, memory, avatars, connectors, and agent prompts except as they affect a routine.

Default suggestion mode is careful (not soft): prefer weekday bounds for non-weekend-critical work, coarser drips (e.g. */30 over */15), every-2h over hourly when purpose still holds, Mon-Fri for morning/evening digests that already have quiet gates. Soft / leave-alone is secondary. Weekend work stays only when the subject is live calendar, travel, deadlines, or the user explicitly wants weekends.

Do not re-suggest already-applied fixes for this importer's fleet.

If nothing is worth changing, stay quiet. No filler.

If there are real fixes, send one skimmable careful-mode list: bot, routine, current schedule, problem, proposed schedule, why, estimated scheduled runs saved per week. End with a total. Use cron math only. Never invent billed token, dollar, or invoice numbers.

Wait for the user's approve (all / some / none). Do not change any routine on this run.

After the user approves and you apply, always send a short text summary of the change plus an estimate of how many scheduled runs it saves per week. If the user asks for tokens, add a labeled estimate from measured wake size (transcript chars/4 times model steps times cut runs). Billed usage is not stored on disk.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
