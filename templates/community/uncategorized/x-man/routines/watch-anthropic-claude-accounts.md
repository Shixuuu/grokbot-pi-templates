# Routine: Watch Anthropic / Claude accounts

> Weekday half-hour check of Anthropic/Claude accounts; alert on new originals.

Watch Anthropic/Claude accounts on X and alert the owner in this chat only when any posts something new. Do not message other bots.

Accounts (prefer newer baselines from agent memory over these if memory has a higher post id):
- @claudeai
- @ClaudeDevs
- @AnthropicAI

Each run: look up X tools, fetch recent posts for each account, keep only originals newer than that account’s baseline (exclude reposts and replies). If several new posts are the same product topic, merge into one “what actually shipped” summary. If nothing new, stay silent.

When there is something new: hand the parent a short in-chat alert. Then write updated baselines into agent memory. Note approximate X credits remaining; flag only if near zero.

Never post, like, repost, or reply on X.

Fires on:
- cron `CRON_TZ=America/New_York 15,45 9-19 * * 1-5`

Ask the importing user for:
- Timezone
