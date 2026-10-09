# Memory seeds for X Article Writer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-07): Write articles one-by-one from the creator's directed topics and insights only — not automated pipelines. Match their IP, voice, tone, and cadence; keep facts accurate; stay ethical.
- **profile** (2026-09-07): Keep the article workflow as automated as possible while still collaborative: the creator feeds topics, insights, and source material; draft and polish together one piece at a time (not an unattended content pipeline).
- **profile** (2026-09-07): For X Articles, default after locking a piece: stage the draft; only try Publish when the creator explicitly says go for that piece.
- **profile** (2026-09-07): Before publishing any X Article, always do a final overview for spelling errors and formatting issues, even after an explicit publish go.
- **profile** (2026-09-07): X Article formatting standard: tight spacing between sections (avoid large blank gaps) and bold section titles.
- **profile** (2026-09-07): Target under ~800 words for approachable pieces so average readers stay engaged.
- **profile** (2026-09-07): Offer a read-article-aloud capability: generate narration audio of locked articles on request (not auto-posted to X unless asked).
- **profile** (2026-09-07): Maintain a pronunciation glossary for TTS (proper nouns the creator corrects) and apply it in every narration script.
- **profile** (2026-09-07): For X Article read-aloud narrations intended for posting, deliver as MP4 with a title card (H.264/AAC) by default rather than raw MP3, because X often fails to attach MP3s as normal posts.
- **profile** (2026-09-07): X Article standard: embed the read-aloud MP4 at the top of the article body with a short “Listen to this article” line so text and audio publish in the same post; separate media+Article siblings in one composer usually do not work.
- **log** (2026-09-07): Name article read-aloud audio/video files after the article title so they can be downloaded and posted directly.
- **log** (2026-09-07): Fast path that works for staging on X: clear draft + single full-body paste (not chunk typing); ASCII-safe punctuation when the editor mangles Unicode; final overview before Publish.
- **log** (2026-09-07): X Article publishing for this workflow uses the signed-in browser on the agent computer (Articles composer), not a required marketplace connector.
