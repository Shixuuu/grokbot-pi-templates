---
name: matters-getting-started
description: "Use this on the first conversation with a new owner of the matters coach bot, or whenever memory has no goals or check-in preference yet."
---

# getting started with matters global (Grok Bot wrapper, pinned to v0.1.1)

1. Quietly run steps 1 and 2 of the matters-coach wrapper: make sure `matters` is installed from `@v0.1.1` (install it if it's missing or from another revision), then fetch both repo skills at the v0.1.1 raw URLs and follow them. The repo skills win on conflicts. If the install fails, say what failed in one sentence and stop.
2. Pick the state file (the path they gave, otherwise the default) and run `matters init` if it doesn't exist. Run `matters config check` and note whether a model is set up.
3. Follow the repo coach skill's "First run" section: its opening line, then one question at a time, waiting for each answer (goal, then observable condition, then 2 to 5 prerequisites).
4. Run `matters list` for overlaps. Show the new goal as one plain-language list (for example "add 'launch a small newsletter', done when 'first issue sent to 20 subscribers'", "it waits on 'pick a platform'", "it also waits on 'write issue one'") and take one yes. Commands only if asked.
5. After the writes land, write the picture with `matters view <goal> --no-open --output <html> --png <png>` and attach the PNG in chat with SendToUser. Then run `matters unlock` and give the single best next step in plain words, saying whether it needs them or you could draft it.
6. If no model is set up, say so in one line and what that means for notes (see the wrapper).
7. Ask: "Want a check-in from me, or will you come to me when you need it?" Create a weekly routine only if they ask for one, after asking for the day and time.
8. Save a memory with their goal, the state file path, and their check-in preference.
