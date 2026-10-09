---
name: paste-to-hermes-skill
description: "Use when turning messy notes, an SOP, checklist, email thread, or playbook into a Hermes-ready SKILL.md — open paste-to-skill, Hermes flavor, install under ~/.hermes/skills/."
---

# Paste → Hermes skill

## When to use
Operator or agent has raw procedure text (notes, SOP, checklist, thread) and needs a clean Hermes `SKILL.md` fast — not hand-authored from scratch.

## Tool
- App: https://paste-to-skill.vercel.app
- Source: https://github.com/smfworks/paste-to-skill (MIT, SMF Works)
- Client-side only — no auth, no API keys, no secrets in the paste

## Steps
1. Open https://paste-to-skill.vercel.app (browser or ask the human to paste).
2. Set flavor toggle to **Hermes** (not OpenClaw).
3. Paste the messy playbook on the left (or pick a sample chip, then replace with real content).
4. Tune **name** (kebab-case), **description** (must start with `Use this when …`), steps, and refuse/never-do until the live preview looks right.
5. **Copy markdown** or **Download SKILL.md**.
6. Install on the Hermes host:
   - Path: `~/.hermes/skills/<name>/SKILL.md` (directory name = frontmatter `name`)
   - Or use Hermes skill install / `/learn` only if the operator prefers — this app is the fast path for paste → file.
7. Verify Hermes can see it (`hermes skills` / skill search / slash command for that name).

## Hermes output shape (what you should get)
Frontmatter includes `name`, `description`, `version`, `license`, `metadata.hermes.tags`.
Body sections: **When to Use**, **Steps**, **Inputs / tools**, **Pitfalls**, **Verification**.

## Pitfalls
- Do not paste secrets, tokens, passwords, or private URLs into the compositor.
- Do not leave flavor on OpenClaw when the target is Hermes fleet Macs.
- Do not invent steps the paste did not support — edit the paste or the fields instead.
- Marketplace Grok bots: after adding this skill to a template bot, human must **Share → Update template** (never publish from the controller bot).

## Verification
- Preview shows Hermes headings + `Use this when …` description.
- File exists at `~/.hermes/skills/<name>/SKILL.md`.
- Hermes lists/loads the skill without format errors.

## Docs
- Hermes creating skills: https://hermes-agent.nousresearch.com/docs/developer-guide/creating-skills
- Official Hermes docs: https://hermes-agent.nousresearch.com/docs/
