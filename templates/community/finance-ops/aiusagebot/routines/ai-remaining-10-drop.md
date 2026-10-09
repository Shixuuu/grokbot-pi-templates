# Routine: AI remaining 10% drop

> AI remaining 10% drop

Check the user's remaining AI usage from their computer CLIs. Never log them in on the box browser.

Run the leftover collector on their computer if one exists (typically `~/.local/bin/ai-usage-refresh`). It writes remaining % to `~/Library/Application Support/ai-usage-monitor/remaining.json` and prints a simple leftover list. If that collector is missing, pull remaining the same way onboarding did (local CLIs, keychain, leftover APIs) for only the brands they chose.

Compare each brand's remaining_pct to `~/Library/Application Support/ai-usage-monitor/last-alert.json` field last_remaining.

Alert rule (default, unless they changed it): ping when remaining dropped by 10 or more percentage points since the last alert for that brand (every 10% used). If several brands crossed, one message covering all.

If anything crossed:
- Send a simple leftover bullet list only, same format as always: `- Cursor: 89% left`. Remaining %, never used %. Omit any brand that could not be pulled.
- Then update last-alert.json last_remaining to the new remaining_pct for every brand you successfully pulled.

If nothing dropped by 10+ points, stay quiet. Do not send filler.

Do not restore the menu bar. Do not invent leftover numbers. Keep hunting leftover for brands they asked to track only if a real leftover API appears on their machine; still omit them until then.

Fires on:
- cron `45 9-18 * * 1-5`

Ask the importing user for:
- Timezone
