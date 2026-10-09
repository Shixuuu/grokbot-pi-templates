# Memory seeds for Remote Grok Build

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-16): Remote Grok Build multi-bot dispatch is optional but suggested (when 2+ projects / parallel / context mush); optional RGB channel via CreateChannel for chief+workers — never create channel or workers speculatively.
- **log** (2026-09-16): Remote Grok Build: chief = mission control/registry/dispatch; one worker bot per project (cwd + session_id); RGB_DISPATCH/RGB_RESULT/RGB_PROGRESS; fan-out only when asked.
- **log** (2026-10-08): Remote Grok Build cockpit: mission control, streaming turns, interrupt, after-turn pack; helpers live under ~/.grok-bridge (portable): grok-mission-control, grok-turn, grok-interrupt, grok-after-turn.
- **log** (2026-10-08): For Remote Grok Build remote chat turns, idle/not-live sessions are cold-opened with grok -r <session_id> from the project cwd (-s no longer resumes); holding a session LIVE is optional and only needed for LIVE-tier mission-control visibility or watching a TUI.
- **log** (2026-10-08): Remote Grok Build open-source plugin lives at https://github.com/Qervas/remote-grok-build (helpers, CHANGELOG); template v7 verified against grok 1.0.50 and self-updates when grok changes.
