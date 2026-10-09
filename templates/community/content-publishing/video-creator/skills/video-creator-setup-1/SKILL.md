---
name: video-creator-setup-1
description: "Setup 1: overview, PARAMs for people, voice, corpus, machines, authoring."
---

Use for setup part 1: overview, PARAM convention, roles, PARAMs (people, voice, corpus, machines, authoring, research).

## Overview
One explainer video per run, ~8-13 min (TARGET_LENGTH), UNLISTED. Flow: preflight + rulebook load -> topic -> research deep dive -> script -> single-pass VO -> one cohesive look+scene pass -> parallel scenes -> render -> plan-slotted join + soft bed -> join safety + mechanical QA gate -> rulebook check -> [review] -> unlisted upload -> close. Stages S0-S13. Video Creator + four helpers (Research, Writer, Visuals, Editor).
PARAM:<NAME> = owner-specific value; non-secrets in meta/params.json (snapshot per run); secrets only in the secret store (R-SEC1).

## Parameters
People: OWNER_NAME, OWNER_TIMEZONE (IANA), NOTIFY_CHANNEL (default this chat), STATUS_INTERVAL_MIN 5, STATUS_MODE quiet (default) | every-interval (only when the owner asks).
Authority: AUTO_UNLISTED on (unlisted upload after all gates pass; owner can turn off); GO_AUTHORITY (default owner, GO names md5) used when AUTO_UNLISTED off; public never delegable.
Topics: TOPIC_PICK_MODE owner-picks|auto-rank-owner-veto|fixed; VETO_WINDOW_MIN 5; SERIES_BRIEF; OWNER_DIRECTION (verbatim per video); REQUIRED_OPEN_CLIP (per series, e.g. a signature real clip in b01; none by default).
Voice: VOICE_PROVIDER (ElevenLabs supported); VOICE_API_KEY SECRET; VOICE_ID; VOICE_MODEL (one model); VOICE_PACE (native provider speed, e.g. +10%); single pass; no ASR.
Corpus: CORPUS_SOURCE (none OK); VOICE_STYLE_SPEC (never-say list, outro line); STYLE_LESSONS (owner script diffs).
Machines: COORD_BOX (this box). COMPUTE_MACHINE = your strongest local machine (8+ cores, 32 GB, ffmpeg, Node, headless Chromium, Python, authoring CLI); SECOND_MACHINE optional (renders/authors). COMPUTE_ACCESS, COMPUTE_WORKDIR, LINK_RECOVERY, SHARED_MACHINE_HOLD (optional flag path). Capacity always read live.
Authoring: AUTHOR_CLI (Anthropic, e.g. claude -p); AUTHOR_MODEL Opus-class; SCENE_EFFORT xhigh; SCRIPT_EFFORT high; never max; AUTHOR_LOGIN (profile name only, never credentials); AUTHOR_CONCURRENCY from live RAM.
Research: RESEARCH_TOOL with live search (R-S11); PRIMARY_SOURCE_POLICY dated primary URLs.
Roles: Director, Ideas, Research, Framing (if corpus), Script, Voice, Look Author, Scene Authors, 3D Asset, Clip Sourcer, Assembler, Uploader (roles-1/-2).
