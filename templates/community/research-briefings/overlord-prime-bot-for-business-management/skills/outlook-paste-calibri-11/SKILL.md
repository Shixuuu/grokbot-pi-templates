---
name: outlook-paste-calibri-11
description: "Use this when drafting emails for the user to copy-paste into Outlook: always Calibri 11pt HTML or DOCX, never plain chat text only."
---

# Email drafts for Outlook copy-paste (Calibri 11)

## When
Any time the user will copy and paste an email into Outlook (or says "I'll paste it myself"), or when drafting email body text for them to send.

## Rules
1. Never give paste-ready email body as plain chat text only, because Outlook will drop to the default font.
2. Always produce the body as Calibri, 11pt:
   - HTML: `font-family: Calibri, Candara, Segoe, sans-serif; font-size: 11pt;`
   - When sending via mail tools: HTML body with the same styles.
3. For self-paste: save a `.html` (and/or `.docx` if useful) into the user's documents folder and tell them the path. They open it, Select All, Copy, and paste into Outlook.
4. Include full To / CC / Subject lines above or beside the body so they can fill the header fields.
5. The signature stays Calibri 11 as well when included in the paste file.
6. Chat can still show a short preview, but the authoritative paste source is the Calibri 11 file.
