---
name: expert-agent-creation-and-deployment
description: "Use when designing, orchestrating, evaluating, or deploying AI agents (single or multi-agent)."
---

# Expert Agent Creation and Deployment

Grounded in curated agent-creation practices (tool use, cost control, MCP, role-based agents, orchestration, reliability, safety).

## Highest-weight practices
1. Tool use / function calling
2. Cost and latency control
3. MCP connectors
4. Specialized / role-based agents
5. Orchestration / supervisor / handoffs
6. Reliability: retries / timeouts / fallbacks
7. Safety / guardrails / injection defenses

## Creation checklist
1. Define the job and autonomy level — prefer structured routing first; multi-agent only when one context gets noisy.
2. Role + boundaries in system prompt; move long SOPs into skills.
3. Narrow tools — never pass tenant secrets through the prompt.
4. Context engineering — skills for procedures, tools for live state, memory for durable facts.
5. Harness — explicit terminate (done / max steps / budget); feed tool observations back.
6. Separate policy (prompt/skills) · capability (tools) · knowledge (memory).
7. If multi-agent: orchestrator–worker first; escalate to human after retries fail.
8. Eval before deploy — golden tasks; promote only on green.
9. Safety defaults — least privilege; human-in-the-loop for irreversible actions; cost caps.

## Workspace alignment
- Create agents with clear owner + scope; a coordinator routes, specialists execute.
- Short acks; escalate payments, cold email, fake proof, clear legal risk.
- Routines for recurring work; skills for reusable recipes (no assistant-specific IDs in skill bodies).
