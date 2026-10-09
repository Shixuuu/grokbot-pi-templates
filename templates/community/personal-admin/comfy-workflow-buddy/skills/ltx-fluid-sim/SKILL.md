---
name: ltx-fluid-sim
description: "Use this when the user runs /ltx-fluid-sim or asks to set up LTX water/fluid simulation via fal in ComfyUI, including fal signup, credits, and API key for first-timers, plus auto-trim by resolution and an on-canvas fal status readout."
---

# LTX Fluid / Water Simulation (fal)

Build a local ComfyUI workflow that uses fal's LTX 2.3 Water Simulation API (`fal-ai/ltx-2.3-quality/water-simulation`) to add water or fluid simulation to a clip: rain, wet surfaces, puddles, splashes, and so on. The workflow takes its frame count from the source video automatically. It also cuts clips down automatically so fal doesn't reject ones that are too long for the chosen resolution. A status readout shows fal's rejection reason or error on the canvas. Use fal only. Don't use Comfy Cloud, a local IC-LoRA, or a local LTX video model for this.

Never paste the full workflow JSON into chat. Save it in their ComfyUI `user/default/workflows/` folder (for example, `LTX Water Simulation fal.json`) and tell them to open it from the Workflows list.

## Phase 0: fal account (ask first)

Start by giving them one choice:

**A. "I already have a fal API key."** Skip signup and credits. Collect the key **only** through the **secure secret field**, never in normal chat, and store it as `FAL_KEY`. Then go to Phase 1.

**B. "I'm new to fal, walk me through it."** Go through these steps in order, and wait for them after each one:

1. **Sign up.** Send them to https://fal.ai/ and have them click Sign up or Log in. GitHub, Google, and email/SSO all work. They land in the fal dashboard when they're done.
2. **Add credits.** fal is prepaid, and every Water Simulation run costs money.
   - Pricing overview: https://fal.ai/pricing
   - Billing and buying credits: https://fal.ai/dashboard/billing
   Explain briefly that fal uses prepaid credits. They buy credits on the billing page and add a payment method if asked, and the balance goes down as they run models. Requests fail at a zero balance. A small top-up is enough to try short clips. Warn them before long or expensive runs. Wait until they confirm the credits are on the account.
3. **Create an API key.** Send them to https://fal.ai/dashboard/keys.
   - Click **Create Key** and give it a name, such as `comfy-water-sim`.
   - Choose scope **API**, which is enough for Model APIs.
   - Copy the key **right away**, because it's only shown once.
   Have them paste it into your **secure secret** prompt as `FAL_KEY`. Never ask them to paste the key into normal chat.
4. Confirm the key is saved, then move on to Phase 1.

If they pick B and then say they already finished signup somewhere else, skip to credits and the key.

## Phase 1: Dependencies

1. **ComfyUI-fal-API** (https://github.com/gokayfem/ComfyUI-fal-API). This pack provides the `Fal Any Endpoint (fal)` node (class `FalAnyEndpoint_fal`). It also provides the fal key handling, spend guard, and result cache that the status node reuses.
2. **An LTX fal helper node pack** (for example, `ComfyUI-ltx-fal-helpers`) with two nodes:
   - **`LTX Clean Plate fal args (from video)`** (class `LTXCleanPlateFalArgsFromVideo`, category `LTX/fal`). Despite the name, it builds arguments for any `ltx-2.3-quality` IC-LoRA effect endpoint, including clean-plate and water-simulation. It handles the auto frame count and the auto-trim.
   - **`Fal Endpoint (with status readout)`** (class `LTXFalEndpointWithStatus`, category `LTX/fal`). This is a fal call that explains every outcome instead of failing silently.
3. Restart ComfyUI after installing so the nodes show up.
4. Wire auth to `FAL_KEY`. The fal pack checks the `FAL_KEY` environment variable first, then `config.ini` `[API] FAL_KEY` in the fal pack's folder. Save that file as UTF-8 **without a BOM**. Never echo the key back.

If the helper pack isn't available, write the two nodes yourself as one small custom node pack. Set `WEB_DIRECTORY = "./web"` only if you add front-end JS. The nodes have to behave as described below.

### Node A: auto frames and auto-trim by resolution (`LTXCleanPlateFalArgsFromVideo`)

Inputs:
- Required:
  - `video` (VIDEO)
  - `prompt` and `negative_prompt` (multiline STRING)
  - `resolution` (`720p` or `480p`, default `720p`)
  - `extra_frames` (INT, default **11**, range 0 to 240)
  - `force_fps` (FLOAT, default **0**, which means use the source fps)
  - `snap_8n1` (BOOLEAN, default **true**)
  - `num_inference_steps` (INT, default **15**, range 8 to 30)
  - `generate_audio` (BOOLEAN, default **false**)
- Optional:
  - `auto_cap_by_resolution` (BOOLEAN, default **true**)
  - `start_seconds` (FLOAT, default **0**)
  - `max_frames_720p` (INT, default **137**)
  - `max_frames_480p` (INT, default **345**)

Outputs: `arguments_json` (STRING), `num_frames` (INT), `fps` (FLOAT), `duration_sec` (FLOAT), `source_frames` (INT), `video` (VIDEO, trimmed if needed), and `cap_info` (STRING).

Logic:
1. Resolve the VIDEO to a local file path, using `get_stream_source()` or its path attribute. A local file is required, so reject http(s) URLs.
2. Probe the file with PyAV to get `source_frames` and `source_fps`. For frames, use the stream's frame count, or count decoded frames if it's unknown. For fps, use `average_rate`.
3. Set `fps` to `force_fps` if it's above 0, otherwise to the source fps. Snap values within 0.05 of 30 to 30, and within 0.05 of 24 to 24.
4. Compute `start_frame = round(start_seconds × source_fps)`, clamped to the clip, and `avail = source_frames − start_frame`.
5. Compute `target = avail + extra_frames`. If `snap_8n1` is on, round **up** to the nearest **8n+1**. Clamp to the range **9 to 481**.
6. **Auto-cap**, when `auto_cap_by_resolution` is on:
   - Set `frames_cap` to `max_frames_720p` at 720p, otherwise to `max_frames_480p`.
   - Also cap by seconds: `frames_cap = min(frames_cap, floor(frames_cap / 24 × fps))`. This only matters below 24 fps.
   - Round the cap **down** to 8n+1 and clamp it to 9 to 481.
   - If `target` is greater than the cap, set `target` to the cap and mark the clip as capped. Then `send_frames = min(avail, target)`.
   - The reason for 137 and 345: fal's schema limits the resolution-times-frames volume to about **6 s at 720p** and **15 s at 480p**, assuming a default of 24 fps (roughly 144 and 360 frames). The defaults leave about a 5% margin and stay on the 8n+1 grid, so 137 frames is 5.7 s and 345 frames is 14.4 s at 24 fps. Because the limit counts frames, a 30 fps clip gets about 4.6 s at 720p.
7. **Trim** when `start_frame` is above 0 or `send_frames` is less than `avail`. The trim has to write a **real new file**, because fal's uploader sends the file behind the VIDEO object and a lazy trim would still upload the whole clip.
   - Use ffmpeg (for example, from `imageio_ffmpeg`): `-ss start -i src -map 0:v:0 -map 0:a:0? -frames:v send_frames -t (send_frames+0.5)/fps -c:v libx264 -preset veryfast -crf 12 -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart`.
   - Put the output in ComfyUI's temp folder, with a filename keyed on the source path, size, mtime, start, and frames, so repeat runs reuse it.
   - Fall back to a video-only PyAV re-encode if ffmpeg is missing.
   - Return the result as a VIDEO (`VideoFromFile`). Clips that already fit pass through untouched.
8. Build `arguments_json` as pretty-printed JSON with these fields: `prompt`, `negative_prompt`, `resolution`, `num_frames` (the target), `frames_per_second` (the fps), `num_inference_steps`, `guidance_scale: 1`, `generate_audio`, `enable_safety_checker: false`, `video_quality: "high"`, and `video_write_mode: "balanced"`.
9. Build `cap_info` as human-readable text for the canvas. Example lines:
   - `num_frames = 137  (5.48 s at 25 fps, 720p)`
   - `720p cap: 137 frames = 5.48 s at 25 fps`
   - `source: 338 frames = 13.52 s`
   - `TRIMMED (too long for 720p): sending 137 frames = 5.48 s`, or `sent to fal: full source clip (…)`, or `auto cap: OFF`

### Node B: fal endpoint with status readout (`LTXFalEndpointWithStatus`)

Inputs:
- Required:
  - `endpoint_id` (STRING, default `fal-ai/ltx-2.3-quality/water-simulation`)
  - `arguments_json` (multiline STRING, default `{}`)
- Optional:
  - `image` and `image_2` (IMAGE), `video` (VIDEO), `audio` (AUDIO)
  - `seed` (INT, default −1, which means omit the seed)
  - `force_rerun` (BOOLEAN, default false). This bypasses caches and is billed.
  - `error_popup` (BOOLEAN, default true)
  - `log_file` (STRING, default `ltx_water_sim/fal_status_log.txt`, relative to the ComfyUI output folder; empty means no log)

Outputs: `video` (VIDEO), `status` (STRING), `video_url` (STRING), `result_json` (STRING), `ok` (BOOLEAN), `images` (IMAGE), and `audio` (AUDIO).

Behavior:
1. **Reuse the ComfyUI-fal-API pack, and never modify it.**
   - Import its already-loaded modules (`nodes.utils`, `nodes.utils.api`, `nodes.dynamic.any_endpoint`, `nodes.dynamic.outputs`) so the same key resolution, spend guard, result cache, and upload and download code are used.
   - Build the arguments with the pack's `build_overlay_arguments(endpoint, arguments_json, image, image_2, video, audio, seed)`. It parses the JSON first, then uploads connected media as `video_url` and similar fields.
   - Call fal with `fal_client.AsyncClient.subscribe(..., on_enqueue=...)` so you capture the `request_id`, and handle results with `extract_flexible_outputs`.
   - Identical successful requests come from the result cache, with no new charge.
2. **Never raise on a fal failure.** Catch the exception, and re-raise only a user cancel or interrupt. Classify the failure, then return:
   - `status`: a plain-English, multi-line readout (format below), also sent as `ui.text` so the canvas shows it.
   - `video`: an `ExecutionBlocker` carrying a short message (`fal FAILED - <headline>. <explain> What to do: …`), so SaveVideo is skipped with a readable popup instead of a NoneType crash. If `error_popup` is off, use a blocker with no message.
   - `ok` set to false, and `result_json` as a small JSON summary (category, headline, http_status, error_type, detail, request_id, when).
3. **Don't cache failures.** Bump a counter on every failure and include it in `IS_CHANGED` so the next Queue retries. Return NaN from `IS_CHANGED` when `force_rerun` is set.
4. **Classify** failures, checking in this order. Pull the HTTP status, fal's `detail` list (`loc`/`msg`/`type`), and `x-fal-error-type` from the exception chain.
   - `content_policy_violation` in the detail types, or a 422 matching "content checker", "flagged by", or "nsfw": **CONTENT FILTER - fal's safety checker refused this request**. List which fields were flagged (prompt, input video, and so on). Tell them to reword the prompt or use another clip or section, because retrying the same input fails again.
   - The pack's spend guard: **BLOCKED LOCALLY** (nothing was sent to fal).
   - 402, or messages like "exhausted balance" or "insufficient funds": **NOT ENOUGH FAL BALANCE**, with a link to billing.
   - 401 or 403, or "FAL_KEY is not configured": **FAL KEY PROBLEM**, with a link to the keys page.
   - Length fields or messages (num_frames, duration, too long, `video_duration_too_long`): **TOO LONG**. Advise keeping auto-cap on, using 480p, or using a shorter section.
   - 408 or 504, or timeout types: **TIMED OUT**. Show the request_id so the result can be collected later.
   - Connection errors: **NETWORK PROBLEM**.
   - 429: **RATE LIMITED**.
   - 404 or 405: **ENDPOINT NOT FOUND**.
   - Invalid arguments_json: **BAD ARGUMENTS JSON** (nothing was sent).
   - 500 or above: **FAL SERVER ERROR**.
   - `no_media_generated`, `file_download_error`, and other 422s: specific "rejected arguments" messages.
   - Anything else: **UNEXPECTED ERROR (<class>)**.
5. **Failure readout format:**
   ```
   FAILED: <headline>
   <explain>
   What to do: <advice>
   No video was produced, so Save Video was skipped.

   endpoint:   <endpoint>
   request_id: <id or "(none - failed before fal queued it)">
   when:       <local time>  (took N s)
   details:    HTTP <code> | <error_type> | during <phase>
     <field>: <msg> [<type>]; ...
   ```
   **Success readout:** `OK - fal finished`, or `OK (cached - identical earlier request, no new fal charge)`, followed by the endpoint, request_id, time, fal and total duration, and video_url. If fal succeeded but returned no video, add a WARNING line and block SaveVideo.
6. Append one line per run to the log file: `when | endpoint | OK / FAILED <category> (HTTP n) | request_id=… | N s`. Only write inside the output folder.
7. Optionally, add front-end JS that mirrors the status on the node itself and tints the node green or red. Register an extension that adds a read-only, non-serialized multiline widget in `onNodeCreated` and fills it in `onExecuted(message.text)`. **Get the import path right.** A file in `web/js/` is served from `/extensions/<pack>/js/`, so import `../../../scripts/app.js`. The path `../../scripts/app.js` returns a 404 and silently drops the extension. Either way, the PreviewAny wired to `status` in Phase 2 is the dependable display.

## Phase 2: Graph

1. **LoadVideo**: the source clip. Give it a title such as "Dry source plate".
2. **LTX Clean Plate fal args (from video)**, with a title such as "Auto frames + auto-trim from clip (water args)".
   - Wire `video` from LoadVideo.
   - Defaults: `720p`, `extra_frames` 11, `force_fps` 0, `snap_8n1` true, 15 steps, `generate_audio` false, `auto_cap_by_resolution` true, `start_seconds` 0, `max_frames_720p` 137, `max_frames_480p` 345.
   - The default prompt describes the **water to add** and says everything else stays the same. For example: "ADD WATER. Heavy rain falling across the whole scene, wet reflective surfaces with glossy specular highlights, puddles forming on the ground with ripples and small splashes, droplets running off the subject and clothing. Subject identity, clothing, pose, framing, camera motion and background geometry stay identical to the source; only water-related elements are added."
   - Default negative prompt: "dry surfaces, no water, changed subject identity, changed clothing, changed pose, camera shift, warped background, blurry, soft, distorted, flicker, inconsistent motion, jitter, worst quality, low quality"
3. **Fal Endpoint (with status readout)**, with a title such as "LTX 2.3 Water Simulation (fal, with status)".
   - `endpoint_id`: `fal-ai/ltx-2.3-quality/water-simulation`
   - Wire `arguments_json` from node 2's `arguments_json`.
   - Wire `video` from node 2's **`video`** output (the trimmed clip), **not** from LoadVideo.
   - Settings: `seed` fixed at 42, `force_rerun` false, `error_popup` true, `log_file` `ltx_water_sim/fal_status_log.txt`.
4. **SaveVideo**: wired from the fal node's `video`, with a prefix such as `ltx_water_sim/auto` and format and codec set to auto.
5. **PreviewAny**: wired from node 2's `cap_info`, titled "Shows num_frames + auto-trim cap on canvas".
6. **PreviewAny**: wired from the fal node's `status`, titled "fal status".
7. **Note**: explains the auto-trim and the status categories. For the auto-trim, cover the limits, using 480p for more length, and using `start_seconds` for a later section. Also explain that turning auto-cap off brings back the old behavior, where long clips may get a 422 rejection.

If the helper pack can't be installed at all, use **Fal Any Endpoint (fal)** for step 3 instead, with the same endpoint and with `arguments_json` and the trimmed `video` wired the same way. Tell them they lose the status readout.

## Limits to tell them

- fal caps this effect at about **6 s at 720p** and about **15 s at 480p**, counted in frames at 24 fps (roughly 144 and 360 frames). The workflow auto-trims to 137 or 345 frames, which is about 4.6 s at 720p for 30 fps footage. Check the current fal model page in case the limits change.
- Longer clips only use the first part, starting from `start_seconds`. Switching to 480p allows more length.
- fal's content checker can still reject a clip or prompt (HTTP 422 `content_policy_violation`). The status box says which part was flagged, and retrying the same input fails again.
- **Every Queue spends fal credits.** Confirm with them before long or repeated runs. Identical successful requests come from the cache, but `force_rerun` always bills.

## Acceptance

1. They either skipped signup with an existing key, or finished signup, credits, and the key through the secure secret field.
2. Both helper nodes are present after a restart, along with `Fal Any Endpoint (fal)` from the fal pack.
3. Swapping the LoadVideo clip changes `num_frames` without editing any fal widget. A clip longer than the cap shows `TRIMMED (too long for 720p)` in the cap preview, and switching to 480p raises the cap.
4. After a run, the "fal status" box shows either `OK - fal finished …` or a `FAILED: …` readout with a "What to do" line. It is never blank and never an unexplained crash.
5. Hand off with:
   - the workflow name, and a reminder to open it from the Workflows list;
   - which widgets to tweak (prompt, resolution, start_seconds, extra_frames);
   - where the status log lives (`output/ltx_water_sim/fal_status_log.txt`);
   - the billing and keys links in case they need more credits later.

## Do not

- Paste the workflow JSON or any API key in chat.
- Hardcode `num_frames` (121, 137, 169, and so on) on the fal node or in a static arguments_json. Always build it from the clip.
- Wire the original LoadVideo into the fal node when auto-trim is on, because the full clip would be uploaded and rejected.
- Modify the ComfyUI-fal-API pack. Import it instead.
- Queue test runs without telling them each one costs fal credits.
- Rebuild this with a local IC-LoRA, a local LTX model, or Comfy Cloud.
