---
description: "Grok Bot routine: Daily fan-out cleanup — Every morning, quietly clear temporary LLM capture files and one-off topic notes so each query stays fresh."
argument-hint: "[extra context]"
---

Daily housekeeping for this fan-out bot. The user wants each query treated as fresh/stateless.

Do this quietly:
1. Delete temporary fan-out capture files only (PDFs/txt from LLM replies) under /workspace and /home/box/Downloads — names like ChatGPT_*, Claude_*, Gemini_*, Grok_*, and similar query capture leftovers. Do not delete sign-in state, skills, memory files, or unrelated Downloads.
2. Review your own durable memory: keep setup facts (four signed-in LLM sites, how fan-out works, stay-fresh preference). Forget one-off subject/topic log notes from prior queries so they do not bleed into later runs.
3. Do not message the user unless something failed or you need a decision. If there was nothing to clean, stay silent — no “no change” filler.

Fires on:
- cron `46 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
