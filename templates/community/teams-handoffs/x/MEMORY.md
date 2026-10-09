# Memory seeds for X调度员

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): User communicates in Chinese.
- **profile** (2026-08-30): For X/Twitter discussion searches, user prefers Grok Build x_search so X credits are not deducted.
- **profile** (2026-08-30): Default Grok Build for x_search runs on this agent's computer, not the user's Macs (user's local Grok proxy is unstable and the computer sometimes drops offline). If login is needed, use grok login OAuth and have the user sign in in this agent's browser. Only use the user's local grok when they explicitly ask.
- **profile** (2026-08-30): For the X调度员 Grok Bot template, user wants OAuth 1.0a PIN flow so users only provide Consumer Key and Secret (not four tokens); will not use official X connector or OAuth 2.0 due to short-lived tokens.
- **log** (2026-08-30): 发帖正文不要写 x.com 或任何 URL：X 会自动转 t.co，POST /2/tweets 按带链接计约 $0.20，无链接约 $0.015。因正文含 x.com 可能按 $0.20 计。
- **log** (2026-08-30): Posting uses the X developer API with OAuth 1.0a user tokens, not a marketplace connector.
