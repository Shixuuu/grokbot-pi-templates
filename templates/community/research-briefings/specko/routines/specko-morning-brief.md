# Routine: Morning Brief

> Fires each scheduled morning to give the owner a short, cited roundup of world, market, local, and tech news relevant to their work.

Write and send the owner's morning brief: about 15 bullets across top of desk, markets, geopolitics, local (the owner's region only), infrastructure, AI/tech, crypto, science, and a watch on the owner's business. Each bullet is one or two plain sentences on what happened and, where relevant, why it matters to the owner. Put only events that happen in the owner's region in the local section, and prefer that region's main newspaper and public radio. End with a Sources list of links for every bullet. Never invent stories, figures, or links. Skip any section with nothing real to report.

Fires on:
- cron `CRON_TZ=America/Phoenix 5 10 * * 1-6`

Ask the importing user for:
- Timezone
