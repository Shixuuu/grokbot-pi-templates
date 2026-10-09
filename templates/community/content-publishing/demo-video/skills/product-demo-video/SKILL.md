---
name: product-demo-video
description: "Use this when the user wants a narrated product demo, walkthrough, or launch video of a web app."
---

The user names the screens. You run the product-demo plugin under the hood and hand back a narrated 1080p MP4. They should never have to click around or talk over a screen recording.

The pipeline is the product-demo agent plugin (public GitHub: kdjadeja21/product-demo-video-agent-plugin). Cursor agent plugin layout: plugin.json, mcp.json, skill, plus a Node CLI and MCP server.

Prefer MCP tools when they exist: doctor_product_demo, init_demo_config, ensure_demo_gitignore, validate_demo_config, save_browser_session_instructions, probe_demo, build_demo_video, inspect_demo_output, generate_player_snippet. CLI equivalent from the plugin directory: npx product-demo doctor|init|validate|probe|build|inspect|snippet --project <app-path>. Look those tools up each run. Do not assume they are already connected.

If the MCP tools are missing: put the plugin on this computer, outside the app being demoed. Clone or unpack kdjadeja21/product-demo-video-agent-plugin. Need Node 20+, then npm install and npm run build. npx playwright install chromium. ffmpeg and ffprobe on PATH. pip install edge-tts so edge-tts is on PATH. Run doctor. Fix anything it reports before capture. Never vendor the plugin into the consumer app.

Ask only what you cannot infer: which web app (a running URL, or how to start it; prefer http://localhost over 127.0.0.1); which screens or routes to cover, in order; whether any screens need login. If login is required, capture a Playwright storageState.json from a normal headed sign-in. Never add an auth bypass. Do not ask whether to attach the video. Default deliverable is the MP4. Do not add a Watch Demo button or player to the product landing page unless the user explicitly asks. Write narration copy yourself from the product UI unless they supplied lines.

Write demo.config.json at the app project root (init if missing). Each section needs an id, kind title or route, route for route sections, and spoken text. Optional waitForText, waitForSelector, failOnSelector, focus.selector (existing CSS only), interaction (click, type, or press), settleMs, and capture still or video. Defaults: tts provider edge-tts, voice en-US-AvaNeural. No API keys. Static beats are a PNG held for the TTS duration. Record short video only when there is an interaction. Focus is a rounded border plus dim — no zoom, no crop, no capture-only CSS. On init, ensure the managed gitignore block for draft dirs, plugin copies, and storageState.json.

Build loop: app reachable at baseUrl; validate; probe and review PNG frames (do not build until probes look right); build the MP4, WebVTT, and chapters JSON; inspect to confirm 1920x1080, audio and video present, captions duration close to the video. Encode uses scale plus pad, not crop. Captions are external WebVTT, not burned in. Chapters are a JSON sidecar for an optional player.

Deliver by attaching the final MP4 in chat. Mention the captions and chapters paths. If they have an open PR, add a clickable markdown link to the MP4 in the PR description (a repo file path does not autoplay). Commit only demo.config.json, the final MP4, WebVTT, and chapters JSON, plus Watch Demo landing-page files only if they asked for that CTA. Never commit drafts, TTS intermediates, storageState, or plugin copies.

Hard rules: do not change the product UI or CSS for capture; do not bypass auth; no secrets in config; spawn ffmpeg and edge-tts with argv arrays; prefer one focus target per busy narration beat.
