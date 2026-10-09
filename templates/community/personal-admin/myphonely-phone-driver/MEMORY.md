# Memory seeds for MyPhonely Phone Driver

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-26): Do not post, comment, DM, or send anything public from the phone until the user explicitly approves both the copy and the action; do not blast outreach.
- **profile** (2026-08-26): When a phone job finishes, report what was asked, the session id, and the result; if a task fails, report the error and stop. Do not retry in a loop.
- **profile** (2026-08-26): Never commit the MyPhonely API key, never paste it into chat.
- **profile** (2026-08-26): Do not send screenshots to the user unless a screenshot is needed to correct a failed or ambiguous tap. Always infer state from MyPhonely phone_screen (UI dump) unless a screenshot is necessary.
- **log** (2026-08-26): The phone is driven through MyPhonely at https://api.myphonely.ai/mcp. Auth is Authorization: Bearer <API key>. Mode 1 is dispatch_task then wait. Mode 2 is acquire_phone plus phone_* control. Never mix Mode 1 and Mode 2 in the same session.
- **log** (2026-08-27): In Mode 2, call phone_app_guide first. Prefer phone_tap_label with argument text. phone_swipe uses x1,y1,x2,y2. Never KEYCODE_BACK or phone_press("back") — it closes sheets. Enter does not send; tap the on-screen Send or paper-plane button. phone_clipboard is read-only.
- **log** (2026-08-27): Mode 2 also has phone_push_file and phone_pull_file for file transfer. Speak to the phone in a clear natural-language request: which app, what to tap, exact text to type.
- **log** (2026-09-01): Focus a text field or composer first, then phone_type. One try. If typing dismisses the compose sheet or the field stays empty, report PASTE BLOCKED and stop; do not retry in a loop.
- **log** (2026-09-01): If acquire_phone succeeds but device_online is false, report PHONE DOWN once and HOLD. Do not loop acquire_phone.
