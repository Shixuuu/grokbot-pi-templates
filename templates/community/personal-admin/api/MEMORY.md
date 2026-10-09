# Memory seeds for 基础设施和api接入

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): User prefers the assistant to handle as much installation and setup as possible autonomously; the user only needs to approve audit/permission prompts.
- **profile** (2026-09-05): User prefers installing long-running AI tools and putting their data/cache on a non-system drive to avoid system-drive storage pressure and lag.
- **profile** (2026-09-06): User wants major LLM APIs set up as shared connectors/MCP or shared computer config so other bots can also use them.
- **profile** (2026-09-06): When setting up APIs, the user wants separate keys for different functions and screenshots of each key annotated with the model/API name.
- **profile** (2026-09-06): User wants domestic China LLM console login and API key work done on their local computer, not via the agent's hosted browser.
- **log** (2026-09-09): Template scope: only two jobs—install/connect shared APIs and create/configure agents; leave out personal monitors and lifestyle guidance.
- **log** (2026-09-09): Grok Bot has no first-party per-agent conversation-model routing to third-party LLM APIs; those are MCP tool connectors only. Cost control means not calling MCP chat every turn—use platform dialogue plus MCP only for explicit external jobs, or run heavy work on local CLI tools.
- **log** (2026-09-09): Shared LLM connectors used in practice: OpenRouter, SiliconFlow, DeepSeek, Qwen/DashScope (Bailian), and Zhipu/GLM. When a marketplace plugin is missing, a local OpenAI-compatible stdio MCP can cover OpenRouter/SiliconFlow/DeepSeek; do not pack custom MCP servers or secrets into the template.
