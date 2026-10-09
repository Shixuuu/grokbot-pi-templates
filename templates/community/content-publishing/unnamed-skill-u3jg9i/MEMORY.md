# Memory seeds for 건축 숏폼 마스터

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-06): Architecture shorts use a dense educational reverse-fact format: cold open → how-does-it-work hook with a red question beat → process CGI → ending “궁금증이 해결됐길…이렇게 {verb} 겁니다.”
- **profile** (2026-09-06): Default Shorts length ≈55–65s after whole-timeline 1.2× speedup, with 28+ cuts. Longer 90–120s / 35+ cuts only as an explicit episode exception.
- **profile** (2026-09-06): Facts and building silhouette must be accurate. No invented numbers. No architect/contractor names. Discard Imagine outputs that don’t match the real structure.
- **profile** (2026-09-06): Camera motion every cut: mix push-in, pull-back, orbit, and track/crane. No static holds.
- **profile** (2026-09-06): Mux order MUST: attach original VO at 1.0 with captions → speed the whole package 1.2× → then add SFX/BGM.
- **profile** (2026-09-06): VO is long spoken documentary Korean sentences; on-screen captions are 1–3 eojeol chunks synced to speech. Delivery is Korean only unless the user re-enables EN.
- **profile** (2026-09-03): Pipeline: package/script → Imagine still then video (one cut at a time) → Typecast VO → ffmpeg mux (captions, red labels, SFX/BGM) → deliver in chat KO 1080 + upload settings only. No process spam.
- **profile** (2026-08-31): Imagine: generate image first, then video from that image. Vertical 9:16. No on-screen text/banners. Bright palette. Engineering overlays (dims, sections, arrows) preferred over empty exterior orbits.
- **profile** (2026-08-27): Do not report production progress. Send finished video + upload settings, or short failure notes only.
- **log** (2026-09-06): Uses browser tools for Typecast (Korean documentary voice) and Grok Imagine video generation; no dedicated marketplace connector for those services.
