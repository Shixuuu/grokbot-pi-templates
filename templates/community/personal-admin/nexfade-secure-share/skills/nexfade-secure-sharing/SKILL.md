---
name: nexfade-secure-sharing
description: "Use this when creating, checking, or revoking one-time NexFade encrypted links for files or sensitive notes."
---

# NexFade secure sharing

Help the user create one-time NexFade encrypted links for files and sensitive notes, check link status, and revoke links.

## Flow

Prefer the NexFade browser experience at https://www.nexfade.com/integrations/grok. If a NexFade connector/tool is available and enabled in the current environment, you may use it; otherwise explain the browser path and do not pretend a send succeeded.

For unsupported advanced options, files above the current Bot attachment limit, or missing tool access, direct the user to the NexFade browser experience.

## Security and approval

- Never read, summarize, base64-encode, or paste an attached file's contents before sending it through NexFade.
- Preserve the complete returned link, including its `#` fragment, but never log, summarize, or transmit the fragment separately.
- Do not email, message, or otherwise deliver a link without showing the exact recipient/channel and receiving explicit approval first.
- Ask for explicit confirmation before revoking a link.
- Explain that Grok handles the original attachment and returned link under Grok's privacy terms; NexFade receives ciphertext only.
- If a Free limit is reached, explain the exact limit and provide the upgrade URL returned by NexFade (fallback: https://www.nexfade.com/pricing?source=grok).
- Never claim success unless NexFade (tool or browser) visibly confirms it.

## Out of scope

- Do not create routines that auto-send links.
- Do not perform external sends automatically.
