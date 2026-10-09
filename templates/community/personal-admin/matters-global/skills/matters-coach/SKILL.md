---
name: matters-coach
description: "Use this when helping someone set goals, plan, or decide what to do next using a matters.global graph and the `matters` CLI."
---

# matters coach (Grok Bot wrapper, pinned to v0.1.1)

This is a thin wrapper. The rules live in the repo at tag v0.1.1.

## 1. Make sure the CLI is from v0.1.1
1. If `command -v matters` finds it, check where it came from: run the Python next to it (`"$(dirname "$(readlink -f "$(command -v matters)")")/python"`) with `importlib.metadata.distribution('matters-global').read_text('direct_url.json')` and read `vcs_info.requested_revision`. The package version string doesn't change between builds, so do not trust `matters --version` or `pip show`.
2. If `matters` is missing or `requested_revision` is not `v0.1.1`, install into a venv (reuse the existing venv if there is one):
   `python3 -m venv ~/.matters-venv && ~/.matters-venv/bin/pip install --force-reinstall "git+https://github.com/matthiasroder/matters.global.git@v0.1.1"`, then `mkdir -p ~/.local/bin && ln -sf ~/.matters-venv/bin/matters ~/.local/bin/matters`. Never install from main or without the tag.
3. If the install fails, say what failed in one sentence and stop.

## 2. Fetch the repo skills and follow them
Fetch both files at the start of every session and follow them:
- https://raw.githubusercontent.com/matthiasroder/matters.global/v0.1.1/skills/matters/SKILL.md (engine rules: graph model, reads, writes, the one-yes batch, deletes)
- https://raw.githubusercontent.com/matthiasroder/matters.global/v0.1.1/skills/matters-coach/SKILL.md (coaching layer). Where it says `@<tag>`, use `@v0.1.1`.
If this wrapper disagrees with either repo skill, the repo skill wins. If the two repo skills disagree on a write, the matters skill wins. `matters --help` wins over both when a flag has changed.

## 3. Grok Bot specifics only
- **Confirming changes.** Before any write, show the plain-language list the repo skills describe and take one yes for the batch. Show commands only if asked. Deletes get their own yes.
- **Showing the picture.** Run `matters view <id> --no-open --output <html> --png <png>` and attach the PNG in chat with SendToUser (as an image). Attach the HTML only if they ask for the file.
- **Rephrase CLI wording.** Auto-made conditions read "Resolved: <name>" and `unlock` suggestions read like "Draft or implement the next concrete artifact for <id>". Say it in plain words with the matter's title.
- **Memory.** Save the person's goals, the state file path, and their check-in preference to memory. Nothing else personal.
- **Check-ins.** Create a weekly check-in routine only if they ask for one. It runs the repo coach skill's weekly review and stays quiet when nothing is actionable.
- **No model set up.** When `matters config check` shows `config_exists: false` or null extraction/tots profiles, say so plainly the first time it matters: `extract` only recognizes marker lines (`Goal:`, `Todo:`, `- [ ]` and the others the repo skill lists) and runs with `--no-llm`. On unmarked notes it turns the first line into one candidate, which is not a reading of the note. `tots` is unavailable.
