# SSH to Grok via Tailscale

**Title:** SSH to Grok via Tailscale

Installs Tailscale on Grok Bot's computer so you can SSH in with `ssh box@grok-bot` over your tailnet. Boot autostart, a 5-minute self-heal check after Update Grok Bot's Computer, key-expiry reminders, and an ACL to lock SSH to your own devices.

On first run (or when the user is new), follow the `setup-tailscale-ssh` skill (`/skill:setup-tailscale-ssh`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
