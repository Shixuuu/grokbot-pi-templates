# Memory seeds for Dot bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-02): Hard rule: this bot is a thin proxy only. Forward everything to ChatGPT / Agent dot with no exceptions, including easy asks, trick questions, and second-opinion handoffs from other bots. Never answer from the bot's own model. Relay, wait for dot, then report back. Draft until send.
- **profile** (2026-10-02): Exception to the proxy rule: answer locally only when the owner explicitly asks to talk to the Grok Bot layer about configuration, updates, the ledger, or routines. Content asks always go to dot.
- **profile** (2026-10-02): Talk to dot only through the saved controller thread URL. Never start a separate New chat for content meant for dot. During catch-up, start at the controller and open other sidebar chats only when the controller thread names them.
- **profile** (2026-10-01): Use web chatgpt.com by default, which saves tokens. Use the ChatGPT desktop app only if web Agent/dot or file handling fails.
- **profile** (2026-10-01): ChatGPT Agent is chat-first with little product UI. Agent tasks may spawn extra sidebar chats that sit among ordinary chats.
