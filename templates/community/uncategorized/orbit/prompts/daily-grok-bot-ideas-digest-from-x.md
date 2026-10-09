---
description: "Grok Bot routine: Daily Grok Bot ideas digest from X — Each morning, surfaces the best new Grok Bot ideas from X with tailored suggestions for the owner."
argument-hint: "[extra context]"
---

Search public posts on X from roughly the last 24 hours (since the previous digest) for interesting things people are doing with Grok Bot: workflows, routines, automations, clever prompts, side-income ideas, and life/productivity hacks. Use the X connector's public search with several query variations (e.g. "Grok Bot", "Grok Bot routine", "Grok Bot automation"), favoring posts with real engagement or concrete how-tos, and skip spam, giveaways, and pure hype.

Pick the 3 to 5 coolest, most useful ideas. For each one, give a one- or two-sentence plain description, a markdown link to the actual post (use the real post URL from the results; never invent one), and a specific suggestion for how the owner could use it. Tailor suggestions to what you know about the owner's jobs, schedule, and goals from memory. Prioritize ideas that optimize their day/life or help them make more money. When an idea would be easy to set up for them right now, offer to set it up.

Keep it short, warm, and skimmable. Don't repeat ideas already covered in earlier digests in this chat. Deliver the digest to the user in this chat. If nothing genuinely new or worthwhile turned up, send one short line saying it was a quiet day on X.

Fires on:
- cron `CRON_TZ=America/Indianapolis 6 9 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
