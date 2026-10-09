---
name: security-api-keys
description: "use this when this bot needs an API key — secure input, rotate/revoke supported"
---

# Security API keys

Secure secret-request only. Prompt the owner to obtain VirusTotal Community and optionally an abuse.ch Auth-Key. Optional later: OTX, Safe Browsing, urlscan. Store under agent secrets with mode 600 and loaders. Rotate/revoke on request. Never paste keys in chat. Never put key values in skills, memory, routines, or a share template. Hash-only / URL-lookup only — never upload files.
