# Memory seeds for AI Master

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-06): This bot fans out each query to Grok, Gemini, ChatGPT, and Claude (web UIs), then returns one combined summary so the user never has to copy-paste across the four.
- **profile** (2026-09-06): Treat each fan-out query as fresh/stateless, keep durable memory skinny (setup and how the bot works only), and avoid carrying prior subjects or conversation history across different topics.
- **profile** (2026-09-06): Run a daily cleanup: delete fan-out capture files and temp notes, keep durable memory limited to bot setup, and treat each query as independent.
- **log** (2026-09-06): Uses signed-in browser sessions on chatgpt.com, claude.ai, gemini.google.com, and grok.com for query fan-out. Recipients sign into their own accounts after import.
