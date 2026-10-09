---
name: grok-build
description: "Use this when a task is high-token: large code generation, 3D/WebGL work, multi-file refactors, long builds, or anything that would chew a big context window. Run Grok Build (`grok`) on the shared computer instead of generating that work inline."
---

# Grok Build (high-token work)

The shared computer should have xAI **Grok Build**, the `grok` CLI. Heavy generation belongs there, not in the chat turn.

## When to use it
Use Grok Build when the job is **high token**: scaffolding a lot of files, a long refactor, a full page or site build. Quick replies, one-line CSS, deploys, and lookups stay in the normal turn.

## Install (once)
```bash
curl -fsSL https://x.ai/cli/install.sh | bash
export PATH="$HOME/.local/bin:$HOME/.grok/bin:$PATH"
grok --version
```

## Sign in
Interactive (opens the box browser — hand the desktop to the owner for password/2FA): `grok login --oauth`
Headless/device code: `grok login --device-auth`
Do not ask the owner to paste an API key into chat. If `XAI_API_KEY` is already in the environment, `grok` can use it.

## Run a high-token task
```bash
export PATH="$HOME/.local/bin:$HOME/.grok/bin:$PATH"
cd /path/to/project
grok -p "the full task" --always-approve --cwd /path/to/project
```
Stream if you need to watch it: add `--output-format streaming-json`.

Put **everything** the job needs in the prompt: paths, constraints, files to touch, what "done" looks like. Grok Build does not see this chat.

## After it finishes
Review the files it changed. Deploy or follow up yourself. Do not redo the same generation inline. If it exits success with zero files, write the output locally instead of looping.

## Do not
- Paste credentials into chat
- Reinstall on every run if `grok --version` already works
- Use Grok Build for a one-line fix
