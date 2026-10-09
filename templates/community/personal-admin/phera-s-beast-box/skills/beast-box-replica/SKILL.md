---
name: beast-box-replica
description: "Use when asked to install, rebuild, run, health-check, or demo The Beast Box engine (RAWRPHOS transformer, Cosmic UI, E1-E20 gauntlet) on your own computer."
---

# Run The Beast Box replica on your computer

The Beast Box is an open-source agent engine with a small CPU transformer (RAWRPHOS), a Cosmic web UI and an E1-E20 safety gauntlet. Its repo ships a replica kit in `replica/` that rebuilds and verifies it on a fresh Debian or Ubuntu machine.

## Install
1. Get the code: `git clone https://github.com/NavisWORLD/The-beast-box-.git ~/beast-box`. If `replica/` isn't on the default branch yet, check out the branch from the open replica kit pull request (`gh pr list` or the GitHub page).
2. Run the kit as a slow background shell job: `cd ~/beast-box && ./replica/setup.sh --with-ollama --ollama-models qwen2.5:1.5b` (drop `--with-ollama` for RAWRPHOS only). It installs apt deps, uv and a Python 3.12 venv, CPU torch and the packages, downloads and hash-checks the RAWRPHOS 14K checkpoint, optionally a CPU-only Ollama with small models, then runs doctor, the cosmic smoke test, the gauntlet, pytest, cargo and node tests. Read `replica/README.md` for other flags (`--skip-tests`, `--clone`, `--ref`, `--with-qc67`).
3. Report the final pass/fail summary in plain words: gauntlet competence and containment, tests passed and failed, and the checkpoint hash result. Never invent numbers; read them from the summary file it writes.

## Run
- `./replica/run.sh start` starts the Cosmic UI (port 8081), the RAWRPHOS server (8767), Ollama if installed, and Phera's Beast Box dashboard (8090), all on localhost. Use `status` and `stop` too.
- Check with curl, then take a headless Chrome screenshot of the dashboard to show the owner.
- Services don't survive a reboot; run `start` again.

## Talk and switch models
- The dashboard's "Brains, pick one" panel lists live backends; "Talk to the Beast" chats through the engine and labels which brain answered. Memory lives in the engine, so it carries across brain swaps and restarts.
- In the Cosmic UI, use Brain Bay to set the brain and clock in. Small CPU models can misread memory; say so honestly.
- RAWRPHOS and QC67 are tiny experimental story models, not knowledge models.
- Cloud, private Hugging Face and quantum (IBM/Azure) backends need the owner's own credentials. Ask for them through a secret request, never in chat.

## Safety
Don't print the RAWRPHOS API key (it lives in an owner-only secrets file), don't kill processes you didn't start, and don't push to the repo without being asked.
