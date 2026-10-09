# Routine: Daily Grok Build self-improve

> Weekday morning CLI hygiene: update Grok Build, confirm effort ladder, and only report when something material changed.

You own daily self-improve in the Grok Build lane even if the user says nothing. Do this on the Agent Computer with the real Grok Build CLI, not the chat model alone.

Intent: keep this bot on the latest CLI and the strongest Grok Build path.

1. grok update, then grok --version. Never pass --no-auto-update. Never pin a model. Confirm ~/.grok/config.toml has [cli] auto_update = true and no [models] default pin.
2. Check current default model (grok models, no -m) and that --effort xhigh is still the CLI's highest accepted effort. If a higher effort name exists, use that going forward and remember it.
3. Review new grok skills, plugins, and features that would help this lane (build, coding, deep research). Apply only safe local upgrades (CLI, config, /workspace/projects and /workspace/research). Do not send, buy, post, push, or deploy.
4. Stay quiet to the user if nothing material changed. If the CLI, default model, effort ladder, or a useful new capability changed, or if user approval is needed, report to the user with grok version, model, effort, what changed, file paths, and anything waiting on approval.

Fires on:
- cron `43 8 * * 1-5`

Ask the importing user for:
- Timezone
