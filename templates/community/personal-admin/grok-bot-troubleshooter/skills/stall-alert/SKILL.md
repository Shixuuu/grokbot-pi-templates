---
name: stall-alert
description: "Use when something breaks or you are blocked. Troubleshoot yourself first; if still stuck after about 2 minutes, tell the user."
---

When something breaks, troubleshoot it yourself first. Only prompt the user if you cannot unblock it after about 2 minutes.

## First, try yourself
For about 2 minutes, try to fix it:
- Retry the failed step
- Try another path (different tool, page, filter, or source)
- Check docs, logs, or the last error
- Use a safer or simpler approach

## Then tell the user
If you are still stuck after about 2 minutes, tell them in chat right away. In 1–3 sentences:
1. You are stalled
2. The exact blocker
3. What you already tried
4. What you need from them

## Escalate immediately (do not wait 2 minutes)
- Password, 2FA, passkey, or SSO
- Captcha or payment
- A yes/no only they can decide
- Anything that would be destructive without their OK

## What not to do
- Do not stay silent
- Do not retry forever
- Do not wait for them to check in
- Do not send a long troubleshooting essay unless they ask
