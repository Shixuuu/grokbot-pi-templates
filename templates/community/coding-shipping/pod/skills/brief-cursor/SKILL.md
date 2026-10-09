---
name: brief-cursor
description: "Use when briefing or operating Cursor for coding work — Projects handoffs, modes/slash/@ context, Cloud Agents vs local, and hard handoff rules for the watched product."
---

# Brief Cursor

Use for coding work that goes through **Cursor**, not Grok Build. Prefer official docs at `https://cursor.com/docs`.

**Surfaces:** IDE Agent · Agents Window · **Projects** (coordinator) · Cloud Agents · `agent` CLI · Bugbot.

## Hard handoff rules for the watched product

These override convenience shortcuts:

1. Hand off via **Cursor desktop → Projects → the product's main/coordinator chat** only.
2. Close any nested agent thread / agent detail panel first — paste only into the parent project feed.
3. **Never** cursor.com freestanding agents / Agents chat / CloudAgent launch unless the owner explicitly asks.
4. One clean clipboard paste of the prompt + **mouse Send**. Never re-send if status is unclear — peek instead.
5. After Send: watch until tip lands or clear stall; peek ~every 5 minutes; ping the owner only on tip / hang / off-rails.
6. Prefer a strong Cursor Grok model with high effort when the owner has set that preference; avoid burning unrelated Auto-routed models.
7. Prefer **Grok Build on this computer** for local implement/review; **Cursor Projects** for Origin cloud coding and asset-pack drops into the repo.

Mechanical steps: follow the Send coding brief via Cursor Projects skill.

## Product map (grounded)

| Surface | Role |
| --- | --- |
| Projects | Coordinator plans/delegates; shared long context; does **not** write code itself |
| Cloud Agents | Isolated VMs; branch + draft PR; auto-run tools; ignore local Run Modes |
| Agents Window | Multi-workspace, parallel agents, diffs/PRs, local↔cloud |
| Local Agent | Machine-local; Run Modes / Auto-review / sandbox apply |
| CLI `agent` | Interactive + headless; `/plan` `/ask` `/debug`; `--yolo` is dangerous |
| Bugbot | PR review; Autofix may spawn Cloud Agents |

## Modes & context

- Modes: **Agent / Ask / Plan / Debug**. Use **Plan** before big ambiguous work.
- `@` attaches context (`@file`, `@folder`, `@Terminals`, `@Chats`, `@Commit`, `@Branch`, `@Browser`).
- `/` runs skills/modes — only documented skills + project Customize skills. **Do not invent slash commands.**

## Rules / skills / MCP

- Rules: `.cursor/rules/*.mdc` or `AGENTS.md`.
- Skills: `SKILL.md` folders; project + user + built-in.
- MCP: Cloud Agents do **not** inherit the owner's Linear MCP from desktop — paste needed Linear context into the brief.

## Brief recipe (Projects paste)

1. Goal + success criteria + off-main / no-merge unless asked.
2. Explicit mode/choreography when useful (Plan first; then implement).
3. Paths, tip/branch, pack attachments, prior notes.
4. In/out of scope.
5. Deliverables: tip SHA / PR, tests green, notes.
6. No credentials in the brief.

## Safety

- Local: Auto-review + sandbox. CLI `--yolo` / `--force` bypasses approvals — avoid unless the owner asks.
- Cloud Agents auto-run tools; local Run Modes do not apply.
- Do not clone repos just to look — use remote SCM tools.
- Never put secrets in prompts.

## After finish

Review tip/PR; sync to a local play tree only when the owner asks; do not mark Linear Done on local-only fixes.
