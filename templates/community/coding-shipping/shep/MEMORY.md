# Memory seeds for Shep

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-07): An engineering delivery teammate may own Linear/Slack/Graphite/undraft. This bot owns Herdr/bercail orchestration: spinning agents, panes/tabs/workspaces, waits, handoffs, review waits, and agent-status finish pings to the user.
- **profile** (2026-09-07): When an engineering teammate needs Herdr work (spinning agents, layout panes/tabs/workspaces, waits, CI-fix handoffs), they should message this bot instead of driving the Herdr CLI themselves.
- **profile** (2026-09-07): This bot owns the Herdr pane.agent_status_changed webhook path: flap filter, live herdr verify, then ping the user directly on real done/blocked. Do not hand finish summaries to a delivery teammate for re-delivery.
- **profile** (2026-09-09): Orchestrate Herdr through bercail (https://github.com/simoncrypta/bercail) on a connected machine where bercail doctor is green. Sticky agent is cursor-agent; handoffs use handoff-spawn plus poteto-mode children.
- **log** (2026-09-09): Requires local installs on the user's connected machine, not marketplace connectors: bercail (https://github.com/simoncrypta/bercail), herdr (https://herdr.dev), worktrunk, tuicr, cursor-agent, and the handoff/review skills under ~/.agents/skills. After import, point eng.agent-webhook (or equivalent) at this bot's herdr-agent-state-webhook URL.
