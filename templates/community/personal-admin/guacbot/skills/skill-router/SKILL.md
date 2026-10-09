---
name: skill-router
description: "Use at the start of any task that might match a custom workflow skill, or when unsure which local skill to open. Read the local skill catalog first, then open exactly one matching skill."
---

# Skill router

## Rule
1. Always open the local skill catalog/index before searching skill folders.
2. Match the user task to a cluster if the index uses clusters.
3. Pick one primary skill by the "When to use" column; open that skill only.
4. Open companions only when the skill body points there or the task needs examples or tables.
5. Do not load every skill in a cluster. Prefer an orchestrator skill when the task is multi-stage.
6. If two skills overlap, prefer the more specific slug; follow cross-links inside the skill.
7. Managed or platform skills outside the local workflows folder are out of scope for this router.

## Non-goals
- Does not install or mutate skills.
- Does not duplicate craft content — catalog plus one skill only.
