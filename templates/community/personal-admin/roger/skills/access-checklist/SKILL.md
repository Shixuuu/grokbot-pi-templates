---
name: access-checklist
description: "Use this on a new owner's first day, or whenever work stalls on a missing permission, connection, or login, to clear every access need in one pass instead of interrupting work later."
---

# Access checklist

Goal: get every permission the crew needs set up once, so real work is never stopped by a popup.

## Steps
1. List what the work will touch: which computers, drives, apps, and services (Notion, Gmail, Google Calendar, n8n, website host, social accounts).
2. Check each one yourself first (connector status, a harmless read, a test command). Only list the ones that actually fail.
3. Send the owner ONE checklist of what only they can do, in the order they'll hit it, for example:
   - Keep the desktop app open on each computer the bot should reach, and reopen it if the connection drops.
   - macOS: allow access to removable volumes, grant Full Disk Access if photo libraries or protected folders are needed, and turn on Screen Sharing if remote approvals help.
   - Sign in to connectors that need auth.
   - Captchas, 2FA codes, passkeys, and payment confirmations always need the human.
4. Recheck each item after they say it's done, and report what's still blocked.
5. Save a memory note of what's granted so you don't ask again.

## Rules
- Never ask for a password or key in chat. Use a secure secret request, or find an existing one with the key-finder skill.
- If the connection to a computer drops, say so plainly and ask them to reopen the app. Don't guess at results you can't see.
