---
name: ltx-clean-plate
description: "Use this when the user runs /ltx-clean-plate or asks to set up LTX Clean Plate via fal in ComfyUI, including fal signup, credits, and API key for first-timers."
---

# LTX Clean Plate (fal)

Create a local ComfyUI workflow that removes people/vehicles from a clip via fal’s LTX Clean Plate API, with **automatic frame count** from the source video. Fal-only — do not use Comfy Cloud, local IC-LoRA, or local LTX video models for this.

Never paste the full workflow JSON into chat. Save under their Comfy `user/default/workflows/` and tell them to open it from the Workflows list.

## Phase 0 — fal account (ask first)

Open with one choice:

**A. “I already have a fal API key”** → skip signup/credits. Collect the key with the **secure secret field** only (never paste in chat). Store as `FAL_KEY` (or whatever the fal Comfy pack expects). Then go to Phase 1.

**B. “I’m new to fal — walk me through it”** → do this in order, waiting for them between steps:

1. **Sign up**  
   Send them to: https://fal.ai/  
   Click Sign up / Log in. GitHub, Google, or email/SSO is fine. They land in the fal dashboard when done.

2. **Add credits** (prepaid — Clean Plate costs money per run)  
   - Pricing overview: https://fal.ai/pricing  
   - Billing / buy credits: https://fal.ai/dashboard/billing  
   Explain briefly: fal uses **prepaid credits**. Buy credits on the billing page (add a payment method if asked). Balance drops as they run models. Zero balance → requests fail. A small top-up is enough to try short clips; warn before long/expensive runs.  
   Wait until they confirm credits are on the account.

3. **Create an API key**  
   Send them to: https://fal.ai/dashboard/keys  
   Steps: **Create Key** → name it (e.g. `comfy-clean-plate`) → scope **API** (enough for Model APIs) → copy the key **immediately** (shown once).  
   Have them paste it into your **secure secret** prompt as `FAL_KEY`. Never ask them to paste the key into normal chat.

4. Confirm the key is saved, then continue to Phase 1.

If they pick B and later say they already finished signup elsewhere, jump to key + credits only.

## Phase 1 — Dependencies
1. **ComfyUI-fal-API** (needs `Fal Any Endpoint`)
2. **ComfyUI-ltx-fal-helpers** (or equivalent) with **`LTX Clean Plate fal args (from video)`**
3. Restart Comfy after installing the helper so the node appears
4. Wire auth to `FAL_KEY` (env / fal pack `config.ini`, UTF-8 **no BOM**)

If the helper pack is missing, create a node that probes the connected VIDEO (e.g. PyAV) and builds `arguments_json`:

- Read `source_frames` and `source_fps`
- `fps` = source fps (or `force_fps` if > 0); snap near-30 → 30, near-24 → 24
- `target = source_frames + extra_frames` (default **extra_frames = 11**)
- If `snap_8n1` (default on): round **up** to nearest **8n+1**
- Clamp to **9…481**
- JSON fields: `num_frames`, `frames_per_second`, prompt, negative_prompt, resolution, `num_inference_steps` (default 15), `guidance_scale: 1`, `generate_audio: false`, `enable_safety_checker: false`, `video_quality: high`, `video_write_mode: balanced`

**Do not** hardcode `num_frames` (121/169/etc.) on the fal node — that truncates longer clips.

## Phase 2 — Graph
1. **LoadVideo** — source clip  
2. **LTX Clean Plate fal args (from video)** — auto frames from clip  
   - Defaults: `720p`, `extra_frames` 11, `force_fps` 0, `snap_8n1` true, steps 15, audio off  
   - Default prompt: describe the **empty scene** (not “remove the people”)  
3. **Fal Any Endpoint** — endpoint `fal-ai/ltx-2.3-quality/clean-plate`  
   - `arguments_json` ← auto-frames node  
   - `video` ← LoadVideo  
4. **SaveVideo** — prefix like `ltx_clean_plate/auto`  
5. Optional: Preview on `num_frames` so the canvas shows the auto value  

## Limits to tell them
- Roughly ~720p short clips vs longer at ~480p (check current fal model page for limits)
- Each Queue spends fal credits — confirm before expensive runs
- Changing the LoadVideo clip should change `num_frames` without editing fal widgets

## Acceptance
1. They either skipped with an existing key, or finished signup → credits → key via secure secret  
2. Helper node present after restart  
3. Auto `num_frames` follows the clip (above old ~121 default when the clip is longer than ~4s)  
4. Hand off: workflow name, “open from Workflows list,” which widgets to tweak (prompt, resolution, extra_frames), and links to billing/keys if they need more credits later  

## Do not
- Rebuild a local IC-LoRA Clean Plate graph  
- Hardcode `num_frames` on the fal node  
- Dump graph JSON or API keys in chat
