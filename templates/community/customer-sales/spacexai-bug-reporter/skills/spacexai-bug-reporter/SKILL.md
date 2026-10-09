---
name: spacexai-bug-reporter
description: "Use when the user wants to report a bug or reach support for any xAI product or service. Triggers include report a bug, report an issue, reach a human, xAI support, billing issue, /spacexai-bug-reporter."
---

# SpaceXAI Bug Reporter

Chat-first skill for every public xAI product and service.
Guide the user through the official path in this conversation.
Route by product: Grok apps → Report an issue; billing → receipt / refund form; API / Console → support@x.ai; Grok in X / X billing → X Help Center.
Never invent support channels. Never file a ticket.

Independent project — not affiliated with, endorsed by, sponsored by, or officially connected to xAI.

## Hosts

Grok Chat (grok.com / iOS / Android) and Grok Bot / Cursor: assemble the paste-ready report here. Do not file tickets.
NEVER run bash, curl, or scripts. NEVER fetch status.x.ai or share URLs (structural checks only).
Ask the user for device model, OS version, and Grok app or browser version.

## Flow

1. Stay in this chat; treat it as evidence when the bug happened here.
2. Name Product and Surface; infer Platform (Web / iOS / Android / X / API / Console).
3. Outage claims: ask user to glance at https://status.x.ai — do not fetch; still prepare a report.
4. Propose Severity + Category + Impact; user choice wins.
5. Collect missing required fields one or two questions at a time.
6. Evidence: nonempty conversation share id OR screenshot attached in this chat OR (API only) sanitized logs. Promise-to-attach-later is not evidence.
7. Sanitize: strip live API keys, passwords, 2FA, cookies, full Authorization headers.
8. Emit the exact paste template with Status READY or INCOMPLETE.
9. Hand off with exactly one Submit-via family.

## Required before READY

Product, Surface, Submit via, Severity, Category, Impact, Account email, Subscription tier, Platform, System & app info, Bug description, Evidence (as above). Billing also needs invoice/receipt number and purchase channel.

## Paste template

```
-----BEGIN REPORT-----
Status: READY | INCOMPLETE

=== TRIAGE ===
Product:
Surface:
Submit via:
Severity:
Category:
Impact:

=== REQUIRED ===
Account email:
Subscription tier:
Platform:
System & app info:
Bug description:

Evidence:
  Conversation share link:
  Screenshot:
  API request / response / logs (sanitized):

=== PREFERRED ===
Steps to reproduce:
Expected vs actual:

=== BILLING (if applicable) ===
Invoice / receipt number:
Purchase channel (Web / App Store / Google Play / X / API):

=== NOTES ===
Workaround:
Frequency:
Reported from inside the chat where the bug occurred:
Outage check (status.x.ai):
-----END REPORT-----
```

## Hand-off

Grok consumer: ⋮ → Report an issue / Report Issue, paste block.
Billing: reply to receipt/invoice email; refunds via accounts.x.ai/refund or Apple/Google flows; manage https://grok.com/?_s=billing.
API: email support@x.ai subject API Bug Report (not for Grok app bugs).
Grok in X: https://help.x.com/ or https://x.com/premium; if same model bug on grok.com also Report an issue there.

Optional hangouts (not tickets): Grok Community https://discord.gg/kqCc86jM55 · xAI API Discord https://discord.gg/x-ai
Public status: https://status.x.ai

Slash trigger: /spacexai-bug-reporter (legacy /xai-bug-reporter may still be recognized).
