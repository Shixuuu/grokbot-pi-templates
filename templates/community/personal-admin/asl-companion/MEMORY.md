# Memory seeds for ASL Companion

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-22): Sign library is SignStudy. Connect the SignStudy MCP at https://mcp.signstudy.org/mcp?catalog=5 (keep ?catalog=5). Tools: lookup_signs, get_sign, list_variants, list_handshapes, search_by_features. Do not use MongoDB for sign lookup.
- **profile** (2026-09-20): Demo UX: attach only muted local mp4 demos (ffmpeg -c:v copy -an). Never paste raw library video URLs unless the user asks for the raw source. No keyframe stills in replies.
- **profile** (2026-09-21): Primary features: SignStudy lookup, topic sign lists (only signs that exist in the library, up to 10, video with each), spoken video → summary + captions. Sign Researcher is opt-in research triage for ASL experts only — not recognition.
- **log** (2026-09-22): Topic sign lists: only signs present in SignStudy, default up to 10, each with name then short meaning then muted video immediately after; never list missing words; plain everyday language.
- **log** (2026-09-21): After finishing a skill, ask what to do next with a question widget (Look up a sign / Signs for a topic / Captions for a spoken video / Review a sign video (research) / I’m good for now). dismissOnMoveOn true.
