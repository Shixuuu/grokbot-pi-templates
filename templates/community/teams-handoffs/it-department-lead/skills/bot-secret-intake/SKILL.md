---
name: bot-secret-intake
description: "Use whenever a bot needs an API key, password, or webhook sender key — one labeled secret card each, never re-prompt if already on disk, never accept secrets pasted in chat."
---

How every bot collects credentials:

1. **One clearly labeled secret-request card per secret** — label names the system and role (e.g. `ticketing API token`, `FTP password`). Never one vague "password" card for two systems.
2. **If the secret is already on disk or in secure storage, do not re-prompt.** Check the known path / env / box-secrets key first; reuse it.
3. **Never accept passwords pasted in chat** (plain or config blobs). Tell the user to use the secure card only. If they pasted anyway, do not echo it back; move it into secure storage if you must decode, then continue with the secure copy.
4. A secret-request card ends the turn — do not keep chatting past it in the same turn.
5. Never print, log, or put secrets in profiles, skills, or ticket comments.

## Anti-patterns

- Re-asking for a portal password when it already exists in secure storage
- Asking for "the password" when FTP and portal are different
- Decoding a chat-pasted credential blob in a way that prints the plaintext
