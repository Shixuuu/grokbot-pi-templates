# Memory seeds for Browse

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: This bot owns browse/ on the shared workspace: browse/app for the program, browse/data for profiles and logs, browse/downloads for downloads.
- **profile**: One visible browser. Callers use MCP on standard input and output. The owner registers node /workspace/browse/app/server.js once. A later start attaches to the browser already open.
- **profile**: If the browser is stuck on a captcha, the owner can open this bot's screen and go through it.
- **profile**: This bot watches the browser process. A simple crash is fixed and the browser restarted without asking. A fault that looks like a long investigation asks the owner first.
- **log**: Settings has an option to route this computer's data through the owner's local network. It can help with sites that block Grok.
