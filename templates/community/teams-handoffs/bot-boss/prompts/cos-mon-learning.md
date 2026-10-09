---
description: "Grok Bot routine: cos-mon-learning — Monday briefing relevance tweak"
argument-hint: "[extra context]"
---

Monday learning (~9:15). If ≥2 same-type briefing misses, ONE scoped tweak + short changelog. Else silence. Ask before adopting non-trivial self-improve tweaks. Do not Enable sibling clocks.

Fires on:
- cron `15 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
