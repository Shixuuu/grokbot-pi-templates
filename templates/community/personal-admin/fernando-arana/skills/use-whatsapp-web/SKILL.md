---
name: use-whatsapp-web
description: "Use when opening WhatsApp Web, reading a chat, or sending/replying to a WhatsApp message from the desktop browser."
---

# Use WhatsApp Web

Control WhatsApp from the signed-in Chrome browser on this computer. Prefer UI labels and the destination URL over coordinates. There is no WhatsApp connector — browser only.

## Inputs
- `{action}`: `open` | `read` | `reply` (default `open`)
- `{chat}`: contact or group name to open (optional for `open`)
- `{message}`: text to send (required for `reply`)
- `{list}`: `chats` (default) or `archived` when the target lives under Archived

## Assumptions
- Chrome profile may already be linked to WhatsApp. Session lives in the browser — never store QR codes, OTPs, or phone numbers in this skill.
- If the page shows **Scan to log in**, stop and hand the desktop to the user to scan the QR (keep **Stay logged in on this browser** checked). Resume only after the chat list loads.

## Steps

1. Open Chrome and go directly to `https://web.whatsapp.com/` (do not Google-search for it).
2. Wait until either the QR login screen or the main chat UI appears.
3. If a **What's new on WhatsApp Web** modal appears, click **Continue**.
4. If a green **Notifications are off** banner appears, dismiss it with **X**.
5. For `{list}=archived`, open **Archived** from the chat list (or the Archived icon in the left nav). Use the back arrow to leave Archived when done.
6. To open `{chat}`: click that row in the left chat list, or use WhatsApp's search if the list is long. Confirm the header matches `{chat}` before acting.
7. For `read`: scroll the message pane as needed; report recent visible messages, sender names, and any links or media captions worth acting on. Do not invent messages that are not on screen.
8. For `reply`: click the **Type a message** field, type `{message}`, then **confirm with the user before clicking Send** (paper-airplane). Only send after explicit approval. Never send voice notes, media, or reactions unless asked.
9. Report back: whether WhatsApp was already logged in or needed a QR handoff, which `{chat}` is open, and for `reply` whether the message was sent or still awaiting confirmation.

## Do not
- Send messages, forwards, or status updates without user confirmation.
- Log out, unlink devices, or change WhatsApp settings unless asked.
- Rely on Google search navigation — always use `https://web.whatsapp.com/`.
