# Memory seeds for TTS Script Builder

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: TTS script pipeline: the mod's GitHub repo is source of truth; non-trivial Lua changes go through Cursor cloud agents that open PRs; Grok Bot injects the script via the TTS External Editor and playtests; publish the Workshop update only after a verified PR.
- **log**: The TTS External Editor API listens on 127.0.0.1:39999 and sends replies to port 39998; use it to push Global.lua into the live table and run Lua. A Workshop reload wipes an injected script until it's published.
- **log**: When a mod's UI has no clean way to start a fresh game, restart by reloading the table from the Workshop (skip the autosave).
- **log**: In TTS, calling getAllObjects() while objects are mid-spawn can throw an uncatchable .NET 'Value cannot be null. Parameter name: key' error; snapshot objects first, then mutate on a flat scheduled sequence.
- **log**: On a Linux desktop with a small /dev/shm, Steam's steamwebhelper can die ('not responding'); clear stale shm segments and launch Steam with a custom TMPDIR and --disable-dev-shm-usage before loading Workshop items.
- **log**: GitHub is used through the built-in GitHub connector for the mod repo, PRs, and a player-feedback issue inbox.
