---
name: kev-checkpoint-install-and-serve-locally
description: "use this when setting up, starting, or stopping the open-source Kev allow / ask-a-person / deny checkpoint model on a local Apple Silicon Mac so bot actions can be checked offline"
---

# Kev checkpoint: install and serve locally

Kev (github.com/jaredpalmer/kev, open source) is a small model that answers a structured question about a proposed action. Here it rules each bot action allow, ask_human, or deny. Everything runs offline on the owner's Mac; nothing leaves the machine.

## Requirements
- An Apple Silicon Mac registered as one of the owner's computers (16 GB RAM minimum for the 4B model; 24 GB is comfortable). An Intel Mac can't run it usefully.
- About 13 GB of free disk space. No admin password needed.
- Every command on the owner's computer needs their approval, so batch steps into a few scripts rather than many small commands.

## Install (one time, all inside ~/kev-test)
1. Check free memory (`memory_pressure`); if it's under 60%, or other agents on the Mac are busy, wait.
2. Set up an env file so nothing spills outside the folder: `UV_CACHE_DIR`, `UV_PYTHON_INSTALL_DIR`, `UV_PYTHON_BIN_DIR`, and `HF_HOME` all under `~/kev-test`, `UV_NO_MODIFY_PATH=1`, `HF_HUB_DISABLE_TELEMETRY=1`, and a local-only `KEV_API_KEY`.
3. Install `uv` into the user folder if it's missing. Fetch Kev at a pinned commit (shallow fetch of that one commit), then run `uv sync --extra serve --frozen` at low priority (`nice -n 19 taskpolicy -b`).
4. Download the adapters and their base models ahead of time, at pinned revisions (for example `jaredpalmer/kev-4b` plus its Qwen base; `kev-0.8b` is a smoke-test size only). Serving runs with `HF_HUB_OFFLINE=1`, so the models must already be downloaded.

## Serve
- Start with the environment's own Python, not `uv run`, so the memory guard watches the real process: `python -m kev.serve --run jaredpalmer/kev-4b --port 8009`, bound to 127.0.0.1, at low priority, with `HF_HUB_OFFLINE=1`.
- Run a memory guard beside it that samples free memory every 2 seconds and stops the server if free memory drops below 25%.
- Ready check: `GET http://127.0.0.1:8009/v1/models` with `authorization: Bearer $KEV_API_KEY`. The first request after loading is slow (warm-up); later ones run about 1 second each for the 4B model on an M4.

## Stop
- Stop the server and the guard when a batch is done, unless the owner wants it left running. Confirm no Kev process remains and memory is back to normal.

## Report
Say plainly what's installed (commit, versions, sizes you measured), whether anything is running, and anything that went differently from the plan. Never claim a size or speed you didn't measure.
