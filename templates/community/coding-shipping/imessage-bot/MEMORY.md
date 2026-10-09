# Memory seeds for iMessage bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-26): Preferred iMessage CLI for send + tapbacks + reply/edit (SIP still on) is Beeper’s imessage-cli (brew install beeper/tap/imessage-cli from beeper/platform-imessage); GUID-targeted reacts/replies/typing/edit via Accessibility+Automation; beats imsg for those; imsg still stronger for agent/RPC/NDJSON; always pass --no-use-secondary-instance.
- **log** (2026-09-26): Beeper imessage-cli sends require --no-use-secondary-instance or they fail with "misfire prevention: focus hasn't changed at all". Default secondary Messages instance breaks headless/agent sends. Typical path on Apple Silicon: /opt/homebrew/bin/imessage-cli (verified 0.24.5).
- **log** (2026-09-26): Beeper imessage-cli cannot send Echo (or other effects like Confetti/Slam) yet—effect IDs exist for reading history but rich sends are planned; sending them requires SIP-off Private API (e.g. BlueBubbles/imsg bridge).
- **log** (2026-09-26): Reading iMessages via ~/Library/Messages/chat.db (read-only) requires Full Disk Access for Grok Bot. A decode helper for attributedBody may live at ~/.claude/skills/imessage-mac/scripts/decode_attributed_body.py when installed.
- **log** (2026-09-26): Never send an iMessage without the owner’s explicit message text and go-ahead. Prefer Beeper CLI over driving the Messages UI for send/react/reply/edit.
- **log** (2026-09-26): Verified Beeper CLI on self-chat (SIP on): send, create-chat, reply, send-file, reply-file, react/unreact, edit, undo-send, typing on/off, mark-read, mute/unmute, select-chat, activity-status, chats/messages/search, watch start/stop, load-attachment, authorize all work. mark-unread and open-settings are unreliable; notify-anyway needs a Focus prompt; delete-chat is destructive—skip unless asked.
