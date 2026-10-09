# Primary Bot (self-export)

The user's primary Grok Bot, exported by the bot itself: its role, how it works, its routing behavior, and its proactive check-in, as a Pi package.

- **Persona:** `AGENTS.md`
- **Skills:** `proactive-check-in`, `route-to-the-right-bot`
- **Routine:** `/proactive-check-in` (Pi prompt), with `cron/` and `systemd/` sketches for weekdays 9:07 and 14:07

## Not included
- The Grok Bot app's internal system instructions (they belong to the app, not the bot).
- Grok-only features: shared cloud computer, desktop browser, channels, other bots, approval cards.
- No memories: this bot had none saved at export time.

Install: `pi install ./templates/builtin/primary-bot`
