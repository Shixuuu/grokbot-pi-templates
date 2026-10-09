---
name: getting-started
description: "use this when onboarding a fresh VoxBot install — Twilio then ElevenLabs then spoken name then voice/SFX then secrets then inbound OFF by default with disclosure; enable inbound only from authenticated security settings (no secrets in the skill text)"
---

# VoxBot getting-started

First conversation after import or clone. Behaviors only — never embed API keys, SIDs, codephrases, PINs, kill phrases, or phone auth secrets in this skill, chat, or Notion.

## Order (one step at a time)

1. **Twilio** — Confirm installer has a Twilio account and a number for inbound/outbound. Collect credentials into **installer secrets only** (never paste into skills, profile, Notion, or plain chat). Prefer a dedicated VoxBot number; do not reassign numbers already serving other products.
2. **ElevenLabs** — Connect the installer's **own** ElevenLabs account (new or existing paid/fresh Free). Do **not** reuse a burned free-quota workspace from another product. Store API key in installer secrets only; MCP must be the correct account before creating the VoxBot agent.
3. **Spoken name (callees)** — Separate from the Grok Bot brand. App/template name stays **VoxBot** (crystal + cyan marks). Ask the owner for a **spoken name**: what the agent says when introducing itself or if asked who is calling. Offer a short list of suggested names **or** let them type their own. Persist in installer config/secrets (e.g. `VOXBOT_SPOKEN_NAME`), not in this skill. Wire into the agent prompt: use spoken name with callees; never stiff “Hi, I’m VoxBot”; never utter TTS catalog voice names; never treat a voice name as a person.
4. **Voice picker** — Help the owner pick a voice that fits them (ElevenLabs). Prefer affordable voices matching their taste (accent, vibe). Persist voice id in secrets/config, not in this skill.
   - Always offer **Marshal** as a suggestion: library voice “Marshal - Deep and Confident” / Jersey Garden State, `voice_id` `hU9xpIwLBrQ7ueYNjP7b`. Free-tier friendly and phone-agent-safe (add from shared library before assigning if not already in the workspace). Pitch: chill-capable Jersey guy — interesting without corporate or husky-cool.
   - Also offer 2–4 taste-matched alternatives from search; let them type/custom pick.
   - Before assigning to the Conversational AI agent: add shared voices via `POST /v1/voices/add/{public_user_id}/{voice_id}` when needed; skip voices that fail with `paid_plan_required` or `voice_live_moderated_not_allowed` (those cannot be used on phone agents).
   - Never use the TTS catalog name as the spoken name or as the callee’s name.
5. **Unlock / kill SFX** — Owner chooses unlock SFX (pack default = spy-movie double-beep) and a **distinct** kill-confirm SFX. Never speak “access granted.”
6. **Secrets gate** — Set codephrase (STT-tolerant), PIN (digit-exact), and kill phrase into installer secrets only. Do not echo values back into durable text.
7. **Inbound default OFF** — After secrets, leave inbound **disabled** by default. Disclose cost/risk (minutes, spam, accidental privileged unlock). Enable inbound **only** from authenticated security settings when the owner opts in.
8. **Inbound smoke** (only after owner enables inbound) — Three cases on the owner line:
   - **Fail** (wrong phrase): calm take-a-message; stay public; never explain unlock.
   - **Decoy** (yes/no or similar ack): vague fake diagnostic with **zero** real life facts; stay public.
   - **Pass**: play unlock SFX; enter privileged for this session only.
   - **HARD**: never `end_call` / hang up on successful unlock or after unlock SFX — stay on the line privileged.
9. **Kill barge-in** — On first detect of kill: abort mid-tool, freeze privileged immediately, play kill SFX.
10. **Outbound smoke** — Mission-brief required; speak number back; require explicit yes; dial owner cell; confirm tools deny-by-default in public mode. Steady state: owner says “tell VoxBot to call X…”. Voice calls only — never SMS callees.

## Creator nod (public template)

Public template: **no Notion**. If asked about the creator / us, point to the andrewos.com feedback form (`https://andrewos.com/feedback` or `?source=voxbot` / `/?feedback=1&source=voxbot`). Do **not** implement, mention, or offer Fridge Protocol or Mission Impossible easter eggs.

## Live-prove before share

- Unlock does not hang up.
- Export clean (no secrets in template/skills/Notion).
- Deny-by-default tools by mode.

## Hard stops

- No secrets in template, skills, export, or Notion.
