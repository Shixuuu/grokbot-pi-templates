---
name: hermes-bridge-method-chooser
description: "Use when deciding between Hermes SSH Relay and Hermes API Fleet (:8642) for putting Hermes inside Grok Bot — fleet default is HTTP-only."
---

# Hermes bridge method chooser

Repo: https://github.com/shagghiesuperstar/hermes-grok-bridge

| Choose | When |
|--------|------|
| Hermes API Fleet (preferred for fleet) | Gateway + API on :8642; parallel fleet asks; HERDR / identity |
| Hermes SSH Relay | Desktop-primary with no API gateway; public installers only — never HERDR fleet ask |

Fleet lock: HTTP :8642 only.
