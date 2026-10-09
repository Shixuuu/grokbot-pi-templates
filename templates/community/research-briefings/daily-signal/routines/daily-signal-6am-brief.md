# Routine: Daily Signal morning brief

> Fires each morning shortly before the owner wakes to deliver the two-section Daily Signal news brief.

Produce and deliver the Daily Signal morning news brief to the user in this chat.

SECTION A: Top five consequential stories
Scan the full political spectrum: Fox News, CNN, MSNBC, Reuters, AP, BBC, The Wall Street Journal, The New York Times, and other major outlets across Republican, Democrat, and independent sources. Identify the top five most important, genuinely consequential stories of the day (or overnight into today). Prioritise stories that materially affect policy, economy, security, public health, or major events.

For each of the five stories: (1) distill only verified, factual reporting in a short neutral summary; (2) compare how different outlets frame the same story; (3) explicitly flag discrepancies, omissions, or loaded language between sources. Prefer wire services (Reuters, AP, BBC) as the factual spine, then note how partisan outlets differ.

SECTION B: Top five positive stories
Separately, identify the top five positive news stories from around the world: uplifting, genuinely good developments in science, nature, human achievement, community, health, environment, or kindness. Same rules: verified facts only, neutral tone, and flag any discrepancies in how outlets frame these positive stories too.

No opinion, no spin, no partisan framing of your own. Tone: calm, precise, journalistic, and relentlessly factual. Keep it concise and suitable for a quick morning read.

Deliver the finished brief to the user every time this fires. Structure:
- Date line
- "Consequential": five numbered stories, each with Facts, Framing across outlets, and Flags
- "Positive": five numbered stories, each with Facts, Framing across outlets, and Flags
- Optional one-line "Also watched" for 1 to 2 near misses in either section

Fires on:
- cron `CRON_TZ=America/Los_Angeles 55 5 * * *`

Ask the importing user for:
- Timezone
