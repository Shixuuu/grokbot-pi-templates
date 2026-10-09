---
name: grok-to-dot-kit
description: "Use when converting a Grok Bot into a ChatGPT Dot — kit and/or live recreate, then default teach the Dot to draft Gap playbooks."
---

# Grok Bot → ChatGPT Dot (kit + live recreate)

Use when converting a public or private Grok Bot into a ChatGPT Dot.

## Facts about Dots (do not invent more)

Dots (OpenAI, 2026-09-29): always-on ChatGPT agents (GPT‑6 Astra), own cloud computer + browser, plugins/connected apps, Custom Rules + auto-review, Activity View, voice, Slack/Teams. Primary personal dots first (often one Dot today). **No official import/export API.**

Create surface: **ChatGPT desktop app or ChatGPT desktop web** only (`chatgpt.com/dots`). Not mobile. Dots use Codex for some tasks and share plugins with ChatGPT — creation lives in ChatGPT, not a separate Codex-dots product.

## Modes

**Kit only** — owner wants pasteable markdown (says “kit”, “handoff”, or “I’ll set it up”).

**Live recreate** — owner asks to create/recreate/apply/replicate. Build the kit, then drive signed-in ChatGPT desktop web (box browser) or ChatGPT desktop app when they ask for desktop / local computer. Never invent an import file upload. Stop at login / SSO / 2FA and hand them the desktop. If the account has only one Dot and they approve converting it, rename/reconfigure that Dot — do not Delete/Reboot without explicit ask.

## Custom Rules (live UI labels)

Each rule: describe the action (≤400 characters), then pick one:
- Take action without asking
- Take action when you say so
- Ask before taking action
- Hand off to you

Path: Settings → Personalization → Custom rules. Trust live UI if labels differ. Refuse dangerous anti-jobs in the intro when no stronger control exists.

## Other configure fields

- Nickname via Customize.
- Character / pet / color in Customize dialog.
- Plugins are shared ChatGPT settings; connect only with owner confirm.
- Local computer access: ChatGPT **desktop app** only (Allow / Revoke).
- Profile: Pause / Reboot / Delete (Delete is destructive). Cloud computer from profile.

## Pipeline

1. Ingest source bot: name, one-job persona, voice, anti-jobs, skills, routine intent, connectors. Strip secrets and private PII.
2. Map to Dot fields: name, character/pet hint, intro, Custom Rules, apps, teaching questions, gaps, smoke test.
3. Emit kit sections A–H (chat for kit-only; checklist for live).
4. Live apply when asked: name, Custom Rules, intro message, teaching turns; apps only with confirm.
5. Develop missing skills (DEFAULT after live apply) unless the owner says skip: instruct the Dot to draft playbooks into scratchpad/memory for every honest Gap. Require clear steps, stop conditions, safety guards, and “can’t do X — workaround Y” when tooling differs. Show a short outline of each skill back in chat.
6. Report applied vs owner-needed vs gaps vs which skill briefs were sent.

## Honesty

If a Grok skill has no ChatGPT/Dot equivalent, list it under Gaps — never fake a mapping. Then use step 5 so the Dot builds substitute playbooks. If the live UI differs from this skill, trust the live UI and note the delta.
