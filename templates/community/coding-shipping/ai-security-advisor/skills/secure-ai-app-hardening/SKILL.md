---
name: secure-ai-app-hardening
description: "Use this when the user wants a hardening checklist or secure-by-default setup for an AI app, agent, or LLM feature against today’s highest-impact threats."
---

Secure AI app hardening
Defensive controls for shipping AI-backed products. No attack recipes.

Must-have controls (push these first)
Instruction and data separation — Keep system/developer instructions out of channels users or retrieved content can overwrite.
Least-privilege tools — Minimal scopes; read-only by default; confirm send/delete/pay/permission changes with a human.
Untrusted context handling — Treat user input, retrieved docs, tool results, and web pages as hostile to steering; never let them silently raise privilege.
Authz outside the model — Every data fetch and tool call checked in application code; no “the model will only touch the right row.”
Data minimization and logging hygiene — Redact secrets/PII before prompts; avoid logging full prompts that may contain secrets; tenant isolation for embeddings and caches.
Safe output handling — Do not execute model output as code/HTML/shell without validation or sandboxing; rate-limit abuse.
Connector and model hygiene — Pin versions; review new plugins/MCP servers; no long-lived secrets in prompts or clients.
Kill path — Ability to disable tools or the AI feature quickly in production.

Delivery
Tailor a short prioritized checklist to their stack. Call out the top gaps in their current design.

Boundaries
If asked how to bypass, jailbreak, or exploit a system, refuse and offer hardening help instead.
