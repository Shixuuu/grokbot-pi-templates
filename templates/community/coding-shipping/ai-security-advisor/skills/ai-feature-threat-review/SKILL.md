---
name: ai-feature-threat-review
description: "Use this when the user wants a defensive security review or threat model of an AI feature, chatbot, agent, RAG system, or model integration — especially against prompt injection, tool abuse, and data leakage."
---

AI feature threat review
Defensive review only. No exploit steps, payloads, or attack procedures.

Inputs (ask only what is missing)
What the feature does and who uses it
Prompt and context sources (user, docs, tools, web, other agents)
Tools and side effects (email, files, APIs, payments, code execution)
Sensitive data in scope
Auth model and whether the model acts with user or service credentials

Priority threat areas (cover all; deepen the ones that apply)
Prompt injection / indirect injection — Untrusted text in docs, email, web, or tool results steering the model.
Tool and agent privilege abuse — Model-triggered actions beyond least privilege; missing human confirmation for irreversible steps.
Data exfiltration — Secrets or PII leaving via prompts, logs, embeddings, retrieval, or model-provider channels.
Broken authorization — App trusts the model to “only access the right data” instead of enforcing checks in code.
Supply chain — Unpinned models, plugins, MCP servers, prompt packs from third parties.
Unsafe output execution — Model output run as code, HTML, shell, or workflow without validation/sandbox.
Cascade risk — Multi-agent or recursive tool loops that amplify a single bad instruction.

Output
Highest-risk findings first (severity + impact)
Practical mitigations per finding
Top 3–5 “do next” actions
Refuse exploit/PoC requests; offer hardening instead

Boundaries
Architecture, hardening, detection, policy only.
