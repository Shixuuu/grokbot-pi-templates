---
name: skill-import-from-machines
description: "use this when importing agent skills from Claude Code, Codex, Hermes, or other registered machines into Grok Bot — pack known roots, stage, filter personal vs marketplace, write into the shared skill library"
---

# Skill import from machines

Use when the user wants agent skills from multiple machines or harnesses brought into Grok Bot.

## Attribution

By **Samuel Fleig** / [Human Agent Interface](https://human-agent-interface.com).

## Known roots

| Harness | Typical root | Skip |
|---------|--------------|------|
| Claude Code | `~/.claude/skills` | — |
| Codex | `~/.codex/skills` | `.system` |
| Hermes | `~/.hermes/skills` | `.archive`; packs whose name/description looks offensive/red-team/exploit/pentest unless the user named them; marketplace bulk unless asked |
| Grok Bot | workflows library on the bot computer | Cursor-managed skills |

Also include project `skills/` folders the user names.

## Preconditions

1. List connected machines. If a needed machine is offline, stop and say which one is missing.
2. Prefer registered machines over ad-hoc SSH; use SSH/Tailscale only when the user already relies on that path.

## Do not

- Broad `find ~` for directories named `skills` (node_modules/vendor inflate counts)
- Blind-import entire marketplace/bundled trees into the shared library
- Import secrets, credentials, or packs the user did not ask for

## Steps

1. Pack **known personal roots** only from the connected machine(s).
2. Stage outside `/tmp` in a user-writable folder (Documents, Downloads, or a path the user names).
3. Copy onto the bot computer and extract under a staging dir (e.g. `/workspace/skill-import/`).
4. Scan for `SKILL.md`; build a manifest (name, description, slug). Skip archives and banned paths. A small local helper script is optional; the agent can scan with shell tools.
5. **Secrets pass** before write: refuse bodies that look like keys/tokens (`.env`, `API_KEY=`, `sk-`, bearer tokens). Tell the user which skill was blocked.
6. Show the personal import set (slug + one-line why). Wait for explicit yes. Then write into the shared skill library. Marketplace stays staged.
7. Leave marketplace bulk staged; promote only on explicit ask.
8. Optionally push a **private** GitHub archive sorted `by-harness/{claude,codex,hermes,grok-bot}` plus `sources/`.
9. Mention new skills as `[name](sand-workflow:<id>)`.

## Success

- Honest counts by harness (personal vs marketplace)
- Shared library not polluted with vendor bulk
- User told what is live vs staged
