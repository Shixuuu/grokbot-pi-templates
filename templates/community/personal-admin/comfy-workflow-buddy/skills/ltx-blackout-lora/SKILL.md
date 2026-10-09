---
name: ltx-blackout-lora
description: "Use this when the user runs /ltx-blackout-lora or asks to set up the Blackout LoRA: an LTX 2.3 IC-LoRA (video-to-video) that switches every light off in a lit clip and leaves only a camera flashlight beam. Installs a ComfyUI workflow that runs it on fal, including fal signup, credits, and API key for first-timers, loading the LoRA from its Hugging Face URL, auto-trim, and an on-canvas fal status readout."
---

# LTX Blackout LoRA (fal)

Build a local ComfyUI workflow that runs the public **Blackout IC-LoRA for LTX 2.3** on fal's reference video-to-video LoRA endpoint (`fal-ai/ltx-2.3-quality/reference-video-to-video/lora`). Give it a normal, lit clip and it returns the same shot with every light switched off. The only light left is a flashlight beam from the camera's point of view, with deep black surroundings. Camera motion and action stay the same.

- LoRA page: https://huggingface.co/cfryant/blackout-ic-lora-ltx23
- LoRA file (v2, recommended): `blackout_ic_lora_ltx23_v2_r32_step3000.safetensors`
- Direct URL fal loads: `https://huggingface.co/cfryant/blackout-ic-lora-ltx23/resolve/main/blackout_ic_lora_ltx23_v2_r32_step3000.safetensors`
- Trigger word: `BL4CKOUT`
- License: LTX-2 Community License (the weights are an LTX-2.3 derivative).

Use fal only. The LoRA is loaded **by URL** on fal, so nothing is downloaded to their machine and no GPU is needed. Don't build this with Comfy Cloud or a local LTX model unless they explicitly ask for a local version.

Never paste the full workflow JSON into chat. Save it in their ComfyUI `user/default/workflows/` folder (for example, `Blackout LoRA fal.json`) and tell them to open it from the Workflows list.

## Phase 0: fal account (ask first)

Start by giving them one choice:

**A. "I already have a fal API key."** Skip signup and credits. Collect the key **only** through the **secure secret field**, never in normal chat, and store it as `FAL_KEY`. Then go to Phase 1.

**B. "I'm new to fal, walk me through it."** Go through these steps in order, and wait for them after each one:

1. **Sign up.** Send them to https://fal.ai/ and have them click Sign up or Log in. GitHub, Google, and email/SSO all work. They land in the fal dashboard when they're done.
2. **Add credits.** fal is prepaid, and every Blackout run costs money (about **$0.30 per 5-second 720p clip**, see Costs).
   - Pricing overview: https://fal.ai/pricing
   - Billing and buying credits: https://fal.ai/dashboard/billing
   Explain briefly that fal uses prepaid credits. They buy credits on the billing page and add a payment method if asked, and the balance goes down as they run models. Requests fail at a zero balance. A small top-up (a few dollars) covers several test clips. Wait until they confirm the credits are on the account.
3. **Create an API key.** Send them to https://fal.ai/dashboard/keys.
   - Click **Create Key** and give it a name, such as `comfy-blackout-lora`.
   - Choose scope **API**, which is enough for Model APIs.
   - Copy the key **right away**, because it's only shown once.
   Have them paste it into your **secure secret** prompt as `FAL_KEY`. Never ask them to paste the key into normal chat.
4. Confirm the key is saved, then move on to Phase 1.

If they pick B and then say they already finished signup somewhere else, skip to credits and the key. If they already set up `/ltx-clean-plate` or `/ltx-fluid-sim`, the same `FAL_KEY` works; don't ask again.

## Phase 1: Dependencies

1. **ComfyUI-fal-API** (https://github.com/gokayfem/ComfyUI-fal-API). Provides `Fal Any Endpoint (fal)` (class `FalAnyEndpoint_fal`) plus the fal key handling, spend guard, result cache, and media upload that the nodes below reuse.
2. **An LTX fal helper node pack** (for example, `ComfyUI-ltx-fal-helpers`) with:
   - **`Blackout LoRA fal args (auto-trim from video)`** (class `LTXBlackoutLoraFalArgs`, category `LTX/fal`).
   - **`Fal Endpoint (status + LoRA check)`** (class `LTXFalLoraEndpointWithStatus`, category `LTX/fal`). It extends **`Fal Endpoint (with status readout)`** (class `LTXFalEndpointWithStatus`) from the `/ltx-fluid-sim` setup, so that node has to exist too.
3. Restart ComfyUI after installing so the nodes show up.
4. Wire auth to `FAL_KEY`. The fal pack checks the `FAL_KEY` environment variable first, then `config.ini` `[API] FAL_KEY` in the fal pack's folder. Save that file as UTF-8 **without a BOM**. Never echo the key back.

If the helper pack isn't available, write the nodes yourself as one small custom node pack. Build `LTXFalEndpointWithStatus` exactly as described in the `ltx-fluid-sim` skill (Node B: never raises on a fal failure, classifies the error, shows a plain-English status on the canvas, doesn't cache failures, logs one line per run). Then add the two nodes below.

### Node A: conform, auto-trim, and build arguments (`LTXBlackoutLoraFalArgs`)

Inputs:
- Required:
  - `video` (VIDEO)
  - `lora_url` (STRING, default the Hugging Face direct URL above)
  - `lora_scale` (FLOAT, default **0.8**, range 0 to 2, step 0.05)
  - `prompt` and `negative_prompt` (multiline STRING, defaults in Phase 2)
  - `output_size` (`1280x720 (16:9 HD)`, `960x544 (16:9)`, or `auto (follow source clip)`; default **1280x720**)
  - `output_fps` (FLOAT, default **24**; 0 means keep the source fps)
  - `video_strength` (FLOAT, default **1.0**, range 0 to 1)
- Optional:
  - `start_seconds` (FLOAT, default **0**)
  - `max_frames` (INT, default **121**, range 0 to 481; 0 means the endpoint's own limit)
  - `num_inference_steps` (INT, default **0**, which means the endpoint default; otherwise clamp to 8 to 30)
  - `enable_prompt_expansion` (BOOLEAN, default **false**, so the trigger wording stays intact)

Outputs: `arguments_json` (STRING), `endpoint_id` (STRING), `video` (VIDEO, the conformed clip), `num_frames` (INT), `fps` (FLOAT), `cap_info` (STRING).

Logic:
1. Resolve the VIDEO to a local file and probe it with PyAV for `source_frames` and `source_fps`. Reject http(s) URLs.
2. `fps` = `output_fps` if above 0, else the source fps (snap values within 0.05 of 24, 25, 30, 50, 60).
3. `start_frame` from `start_seconds`; `avail` = frames available at the output fps after the start.
4. **Length cap.** The quality endpoint limits the resolution-times-frames volume (about 150 frames at 720p, more at smaller sizes). Use `cap = 137 × (1280×720) / (W×H)`, then apply `max_frames` if it's lower, round **down** to 8n+1, and clamp to 9 to 481. `target = min(avail, cap)` rounded down to 8n+1. Error out clearly if `target` is below 9.
5. **Conform** to exactly `target` frames at `fps` and `W×H` (scale to cover, then centre-crop, yuv420p, video only) with ffmpeg (for example from `imageio_ffmpeg`): `-ss start -i src -map 0:v:0 -an -vf fps=F,scale=W:H:force_original_aspect_ratio=increase:flags=lanczos,crop=W:H,setsar=1,format=yuv420p -frames:v target -c:v libx264 -preset veryfast -crf 12 -movflags +faststart`. Write a **real new file** in ComfyUI's temp folder, named from a hash of the source path, size, mtime, start, frames, fps, and size, so repeat runs reuse it. fal's uploader sends the file behind the VIDEO object, so a lazy trim would upload the whole clip.
6. Build `arguments_json` (pretty-printed) for the quality endpoint:
   ```
   prompt, negative_prompt,
   loras: [{ path: <lora_url>, scale: <lora_scale>, transformer: "both" }],
   control_video_url: "@video_url",        (sentinel, filled in by Node B)
   skip_control_preprocess: true,           (raw RGB clip as control = how the IC-LoRA was trained)
   resolution: { width: W, height: H },
   num_frames: target, frames_per_second: fps,
   video_strength, guidance_scale: 1,
   generate_audio: false, enable_prompt_expansion: false,
   enable_safety_checker: false,
   video_quality: "maximum", video_write_mode: "balanced"
   ```
   Add `num_inference_steps` only if it's above 0.
7. `endpoint_id` = `fal-ai/ltx-2.3-quality/reference-video-to-video/lora`.
8. `cap_info` lines for the canvas: LoRA URL OK or MISSING; `num_frames = 121 (5.04 s at 24 fps, 1280x720)`; the limit and why; the source length; `TRIMMED (too long): sending the first N s` or `sent to fal: whole clip`; `est. cost: ~$0.30 (112 MP x $0.0027075/MP)`; the endpoint.

### Node B: fal call with LoRA check (`LTXFalLoraEndpointWithStatus`)

Subclass `LTXFalEndpointWithStatus`. Same inputs and outputs, with `endpoint_id` defaulting to the quality LoRA endpoint and `log_file` defaulting to `blackout_lora/fal_status_log.txt`. Before calling fal:
1. Parse `arguments_json`. If any `loras[].path` is empty, still placeholder text, or not an https URL, **refuse locally** (nothing uploaded, nothing billed) with the status `FAILED: LORA URL NOT SET - nothing was sent to fal` and the advice to paste the URL into `lora_url` on the settings node.
2. If `control_video_url` is `@video_url`: refuse locally if no video is wired. Otherwise upload the connected (conformed) clip **once** with the fal pack's own upload helper, set both `video_url` and `control_video_url` to that URL, and drop the video input so it isn't uploaded twice.
3. Hand off to the base node, which does the fal call, the status readout, the result cache, and the log.

## Phase 2: Graph

1. **LoadVideo**: titled "1. Drop your clip here (normal, lights on)".
2. **Blackout LoRA fal args (auto-trim from video)**: titled "2. Blackout LoRA settings".
   - Wire `video` from LoadVideo.
   - `lora_url`: the Hugging Face direct URL above. `lora_scale` 0.8, `output_size` 1280x720, `output_fps` 24, `video_strength` 1.0, `start_seconds` 0, `max_frames` 121, prompt expansion off.
   - Default prompt (start with the trigger): `BL4CKOUT same scene, every light switched off, only a camera-mounted flashlight from the viewer's point of view, same camera motion and action.`
   - Default negative prompt: `lights on, bright lighting, lit lamps, glowing ceiling lights, lit screens, daylight, sunlight, flat even lighting, overexposed, visible flashlight, flicker, jitter, warped geometry, changed camera motion, blurry, low quality, watermark, text, subtitles`
3. **Fal Endpoint (status + LoRA check)**: titled "3. Blackout LoRA on fal (with status readout)".
   - Wire `endpoint_id` and `arguments_json` from node 2.
   - Wire `video` from node 2's **`video`** output (the conformed clip), **not** from LoadVideo.
   - `seed` fixed (for example 42), `force_rerun` false, `error_popup` true, `log_file` `blackout_lora/fal_status_log.txt`.
4. **SaveVideo**: from node 3's `video`, prefix `blackout_lora/blackout`, format and codec auto.
5. **PreviewAny** on node 2's `cap_info`: "Clip check: length, trim, LoRA URL, cost estimate".
6. **PreviewAny** on node 3's `status`: "fal status".
7. **Note "START HERE"**: drop a lit clip into box 1, optionally adjust strength in box 2, press Queue; every Queue costs fal credits.
8. **Note "Good to know"**: strength guidance, scene tips, length limits, costs, and the status categories (summarise the sections below).

If the helper nodes can't be installed at all, fall back to **Fal Any Endpoint (fal)** with the same endpoint and a static `arguments_json` that sets `video_url` and `control_video_url` from an uploaded clip. Tell them they lose the auto-trim, the LoRA check, and the status readout, and that they must keep clips at 5 s / 24 fps / 1280x720 themselves.

## Settings to explain

- **Trigger word `BL4CKOUT`** must stay at the start of the prompt. Keep the rest of the prompt describing the blackout, not the scene's lights.
- **Strength (`lora_scale`)**: **0.8** is the default. Drop to **0.5 to 0.6** to keep people, faces, and objects more faithful to the source (less aggressive darkening). Raise toward **1.0** if some lights stay on. 0.6 to 0.7 also helps if a result gets too dark.
- **video_strength 1.0** keeps the result locked to the source motion and layout.
- **24 fps at 1280x720** matches what the LoRA was trained on (1280x704, 24 fps). Other frame rates are converted automatically.
- Prompt expansion stays **off** so fal doesn't rewrite the trigger wording.

## Scene tips

- Works best on **contained, medium-scale lit scenes** with visible practical lights: interiors, hallways and corridors, garages, arcades, bars, shops, venues, lobbies.
- Not a good fit for **big landscapes, city skylines, or bright daylight exteriors**. Some light tends to stay on.
- Unusual light sources may survive the blackout. Try a higher strength or another clip.
- The flashlight beam always comes from the camera position, so shots with clear camera movement through a space read best.

## Costs

- The quality endpoint bills per megapixel of output, about **$0.0027 per MP** at the time of writing. A 5-second clip at 1280x720, 24 fps (121 frames, about 112 MP) is about **$0.30**. A ~5.7 s clip at the 720p cap is about $0.34. Check https://fal.ai/pricing for current prices.
- **Every Queue spends fal credits.** Identical successful requests come from the result cache at no new charge; `force_rerun` always bills. Confirm with them before long or repeated runs.

## Limits to tell them

- The quality endpoint caps length at about **5.7 s at 1280x720** (more at 960x544). The workflow sends the first 5 s by default (`max_frames` 121); set `start_seconds` for a later section, or `max_frames` 0 to use the full cap.
- fal's content checker can still reject a clip or prompt. The status box says why, and retrying the same input fails again.
- The LoRA is loaded from Hugging Face by URL on each run. If fal can't fetch it, the status box shows a download or rejected-arguments error; check the URL.

## Acceptance

1. They either skipped signup with an existing key, or finished signup, credits, and the key through the secure secret field.
2. The Blackout nodes and the fal pack are present after a restart.
3. The cap preview shows `LoRA URL: OK`, the frame count, and a cost estimate. A clip longer than 5 s shows `TRIMMED`.
4. After one confirmed test run, the "fal status" box shows `OK - fal finished …` or a `FAILED: …` readout with a "What to do" line. It is never blank and never an unexplained crash. The result is saved under `output/blackout_lora/`.
5. Hand off with:
   - the workflow name, and a reminder to open it from the Workflows list;
   - which widgets to tweak (strength, prompt after the trigger, start_seconds, max_frames);
   - the scene tips and the ~$0.30 per 5 s cost;
   - where the status log lives (`output/blackout_lora/fal_status_log.txt`);
   - the billing and keys links, and the Hugging Face page for the LoRA.

## Do not

- Paste the workflow JSON or any API key in chat.
- Drop the `BL4CKOUT` trigger from the prompt.
- Let fal preprocess the control video (keep `skip_control_preprocess: true` with the raw clip as `control_video_url`). Depth, edge, or pose control is not what the LoRA was trained on.
- Wire the original LoadVideo into the fal node; the conformed clip is what must be uploaded.
- Hardcode `num_frames` in a static arguments_json when the helper nodes are available.
- Modify the ComfyUI-fal-API pack. Import it instead.
- Queue test runs without telling them each one costs fal credits.
