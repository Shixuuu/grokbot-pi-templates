---
name: email-attachment
description: "use before attaching any PDF or binary to an Outlook draft or send; cheap attach recipe; no freestyle base64 in chat"
---

Before any Outlook PDF or binary attachment, follow this recipe.

## Hard rule
No freestyle attach. Do not paste file base64 into chat. Do not run thrashy attach retry loops. If attach spend crosses a low usage cap, stop and ask the owner.

## Cheap recipe (small files)
1. Create the HTML draft on the correct mailbox account (greeting, BCC, signature rules still apply).
2. Attach from disk with the Outlook attach tool as a file attachment. Load bytes outside model context.
3. Prove attachments are present by name and size; then send the draft; prove Sent Items.

## Large files
Use Outlook attachment upload-session tools. No chat paste loops. If unclear or spend risk is high, stop and ask the owner.

## Forbidden
Huge base64 in chat; skipping this skill; re-send after Sent Items already succeeded.
