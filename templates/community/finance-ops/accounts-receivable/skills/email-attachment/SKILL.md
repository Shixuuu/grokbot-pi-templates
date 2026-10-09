---
name: email-attachment
description: "use before attaching any PDF or binary to an email draft or send; cheap attach-from-disk recipe; no freestyle base64 in chat"
---

Before any PDF or binary attachment, read this skill first.

## Hard rule
No freestyle attach. Do not paste file base64 into chat. Do not run chunk or retry loops that burn spend. If attach spend crosses a small hard cap, stop and ask the owner.

## Cheap recipe (prefer small files)
1. Create the HTML draft on the correct mailbox account (greeting, closer, signature, BCC rules still apply).
2. Attach from disk via the mail attachment tool as a file attachment. Load bytes outside model context; never paste megabytes into chat.
3. Prove hasAttachments plus name and size; then send the draft; prove Sent Items.

## Large files
Use the provider upload-session tools. No chat paste loops. If unclear or spend risk: stop and ask the owner.

## Forbidden
Huge base64 in multi-execute; attach thrash; re-send after Sent Items success; skipping this skill.
