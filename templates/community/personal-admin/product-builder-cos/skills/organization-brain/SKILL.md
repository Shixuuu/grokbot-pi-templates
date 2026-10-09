---
name: organization-brain
description: "Use when someone mentions Digital Brain, Organization Brain, Org Brain, or Inloop Brain."
---

# Organization Brain

Canonical URL: https://app.inloop.studio/tools/organization-brain

Connect: brain slug (chat) + API key via secret-request (connector inloop-brain, field api_key). Never paste keys in chat. Never guess a default slug.

Query: POST /api/v1/brains/<slug>/chat/completions with model inloop-organization-brain.
Learn: POST /api/v1/brains/<slug>/learn only when the user hints. Success is 202 accepted true.
