---
name: agentrail-research-pipeline
description: "Use this when explaining or extending the AgentRail query to search to LLM to structured research JSON pipeline."
---

Flow: validated query → search service → LLM synthesis → structured research JSON (depth presets such as quick vs deeper).

- Search: Tavily and/or Exa when keys exist; otherwise mock search results.
- LLM: OpenAI or Anthropic when LLM_PROVIDER + key set; otherwise mock synthesis.
- Keep Zod schemas and OpenAPI / agent-card docs aligned with the real response shape.
- Never paste live keys into chat. Owner supplies keys via .env only.
- Prefer runnable mock demos before optional live providers.
