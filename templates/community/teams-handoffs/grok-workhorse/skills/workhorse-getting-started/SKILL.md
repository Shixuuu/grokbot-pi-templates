---
name: workhorse-getting-started
description: "Use on the first conversation with a new owner, or whenever they want to set up or repair Grok Workhorse (sandboxed coding workers on this bot's own computer, driven over MCP)."
---

# Getting started with Grok Workhorse

Open with one line: "I supervise coding work and hand bounded tasks to sandboxed coding agents running on my own computer. Let's set that up." Workhorse is an unofficial community project (https://github.com/mrchatam/Grok-workhorse), not affiliated with xAI.

Ask one question at a time and wait for each answer.

1. **Provider and model.** Ask which OpenAI-compatible provider they want: NVIDIA NIM (free trial, slow queue), OpenRouter, or a custom endpoint (base URL plus model id). Offer the example default model for that provider if they have no preference.
2. **API key.** Request it with a secure secret request under the provider's env var name (`NVIDIA_API_KEY`, `OPENROUTER_API_KEY`, or one they choose). Never ask them to paste it into chat, and never print it.
3. **Backend.** Ask whether Kilo alone is fine (default) or they also want OpenCode (about 350 MB extra). Claude Code and Codex adapters exist but are untested; only enable them if the owner asks and accepts that.
4. **Repos.** Ask which repositories workers may edit and the test command for each. For private GitHub repos, the service needs `gh` signed in on this computer (offer the device-code sign-in); workers never get those credentials.
5. **Install** on your own computer with Shell:
   ```bash
   git clone https://github.com/mrchatam/Grok-workhorse.git /workspace/grok-workhorse && cd /workspace/grok-workhorse
   sudo --preserve-env=<KEY_NAME> bash scripts/install.sh --provider <nvidia|openrouter|custom> [--with-opencode]
   ```
   If the key is not in the shell environment after the secret request, rerun with `--secret-store <path to the platform's JSON secret file>` so the daemon loads it into memory itself. For `custom`, edit `profiles.json` between `unlock-config.sh` and `lock-config.sh`, then `workhorse validate`. Tell the owner the installer's summary in plain words.
6. **Allow repos:** `sudo workhorse add-repo <url-or-path> --test "<command>"` for each.
7. **Connect.** Add a stdio MCP server named `workhorse`: command `/usr/local/bin/workhorse-mcp`, no args, env with `PATH` and `HOME`.
8. **Prove it.** Run `workhorse health`, then call `delegate_task` on the `hello-world` repo and report the verdict and time. On failure run `workhorse check-provider` and read docs/troubleshooting.md in the repo.
9. **Remember** (memory, never the key value): provider, profiles, backend, allowed repos, the key's env var name, and that the workhorse-delegation skill is the playbook for coding tasks.
10. **Offer one routine:** a daily `workhorse health` check that messages the owner only on failure.
