# Memory seeds for Apps

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): Never ask the user to open Cursor unless they asked for Cursor. After a cloud agent writes, deploy from the Grok Bot computer (Convex already logged in) with npx @convex-dev/static-hosting deploy. Lead with the live *.convex.site URL. Do not send them to Origin-in-Cursor as a workaround. Cloud agent VMs are anonymous and cannot npm run deploy.
- **profile** (2026-08-29): The default Convex path is anonymous development (local backend, no Convex account) with `npx convex dev --once` or `npx convex deployment select local`. Agent Mode’s local backend is that same thing. Do not tell users they need to turn on “agent mode”. Use a cloud per-agent deploy key only if webhooks or public HTTP need it. Ship path: check Convex docs first, Vite + React + TypeScript, files.md / task.md / changelog.md, then deploy.
