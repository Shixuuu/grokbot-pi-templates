---
name: explainer-video-pipeline-mac-setup
description: "Use when walking someone through installing the open-source explainer video pipeline (github.com/Mikepat711/explainer-video-pipeline) on their own Mac, from prerequisites to their first narrated video, when they resume a half-finished setup, or when they hit an install or render error."
---

# Explainer video pipeline: guided Mac setup

Source of truth: the README at https://github.com/Mikepat711/explainer-video-pipeline (section "Quick start on a Mac"). If the README and this skill disagree, follow the README. Never invent commands.

## Rules for every step
- ONE step per message: the copy-paste command in a code block, one plain sentence on what it does, what success looks like, then "Paste the output here, or just say done."
- Never move on until the step is confirmed. If the pasted output shows an error, diagnose it from the output (see Troubleshooting) and fix it before continuing.
- Everything runs in the user's own Terminal app (Applications > Utilities > Terminal). Never ask for passwords, API keys, emails, or any personal info. The Mac's own password prompt (for Homebrew) is typed into Terminal, never into chat. If pasted output contains a username or file path, never repeat or save it.
- Explain jargon (Terminal, Homebrew, PATH, virtual environment) in plain words the first time.
- After each confirmed step, save progress to memory as a generic note in this conversation, e.g. "Explainer setup progress: step 5 (brew packages) done; chip arm64." Nothing personal.
- If the user comes back later, read that progress note, say where they left off, quickly re-check the last finished step with its check command, and continue from the next one.

## Step 1: Check the Mac
`uname -m && sw_vers -productVersion && df -h ~ | tail -1`
- `arm64` is Apple Silicon (M-series), the setup the README is written for. `x86_64` is Intel: it works, but Homebrew lives in `/usr/local` instead of `/opt/homebrew`; note that wherever a step differs.
- Any recent macOS is fine.
- Free disk: the "Avail" column should show a few GB free at minimum (the Python packages plus the ~350 MB voice model and video builds add up). Suggest clearing space if it's tight.
Save the chip type with the progress note.

## Step 2: Xcode command line tools
`xcode-select --install`
A window pops up; click Install and wait for it to finish. "already installed" is also success. Confirm with `xcode-select -p` (prints a path).

## Step 3: Homebrew
First check: `brew --version`. If it prints a version, skip ahead. Otherwise:
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
It asks for the Mac's login password in Terminal (nothing shows while typing; that's normal).
On Apple Silicon, it ends with "Next steps" lines that put `brew` on the PATH. Have them run those lines; they are normally:
`echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile && eval "$(/opt/homebrew/bin/brew shellenv)"`
(If the installer printed different lines, use the installer's.) Intel Macs usually don't need this. Confirm with `brew --version`.

## Step 4: Brew packages
`brew install python@3.12 ffmpeg cairo pkg-config`
Then the captions build of ffmpeg (Homebrew's plain ffmpeg can't burn in captions; the pipeline finds this one on its own):
`brew install ffmpeg-full`
Optional design font: `brew install --cask font-inter` (it falls back to DejaVu Sans without it).
Confirm with `python3.12 --version && brew list ffmpeg-full >/dev/null && echo ffmpeg-full ok`.

## Step 5: Install Claude Code and sign in
The pipeline uses Claude Code (needs a Claude subscription) to research and write each video. Point them to Anthropic's Claude Code page linked from the README (https://docs.anthropic.com/en/docs/claude-code) and have them use its Mac install command. Then open a NEW Terminal window and run:
`claude`
It walks them through signing in, in their browser. Sign-in stays on their machine; never ask about their account. When they see the Claude prompt, they can type `/exit`. Confirm with `claude --version`.

## Step 6: Test Claude headlessly
`claude -p "say ok" --model opus --output-format json < /dev/null`
Success is a short JSON reply whose result says "ok". This is exactly how the pipeline calls Claude.

## Step 7: Get the code
`git clone https://github.com/Mikepat711/explainer-video-pipeline.git && cd explainer-video-pipeline`
Remind them: every later command runs from inside this folder. In a new Terminal window, `cd explainer-video-pipeline` first (from wherever they cloned it).

## Step 8: Set up the project
`make setup PYTHON=python3.12`
Creates a private Python environment (`.venv`) and installs the dependencies; takes a few minutes. Success: it returns to the prompt with no errors. A "note: espeak-ng not found" line is optional and fine. A "Claude Code CLI not found" note means go back to Step 5.

## Step 9: Voice and settings
Explain: the narrator is the Kokoro voice `af_heart` (American female, warm and soft), paced to about 160 words per minute, so videos run about 2.5 to 3 minutes. Most people keep it for the first run; ask if they want to.
If they want a different voice, add one line to `~/.config/explainer/config` (a per-machine settings file, nothing secret):
`mkdir -p ~/.config/explainer && echo 'EXPLAINER_VOICE=kokoro:bm_george' >> ~/.config/explainer/config`
Preset options from the README: `kokoro:af_heart` (default), `kokoro:af_bella` (American female, bright), `kokoro:am_michael` (American male, steady), `kokoro:bm_george` (British male, documentary), `kokoro:bm_fable` (British male, lively). To hear them all first: `make voices` writes samples to `out/voices/` (it downloads the voice model on first use).

## Step 10: First test
1. Writer only (Claude researches and writes the script and visual plan; a few minutes):
`make plan TOPIC="how the electrical grid works"`
Success: no errors, and no "fallback writer" banner. A fallback banner means Claude failed; go to Troubleshooting.
2. Full video (the first run also downloads the ~350 MB voice model):
`make video TOPIC="how the electrical grid works"`
This takes a while. Ask for the last lines.

## Step 11: Watch it
`open out/how-the-electrical-grid-works/16x9/how-the-electrical-grid-works.mp4`
The folder also has captions (`.srt`), a poster image, and `qa.md` (a quality report). Ask how it looks and celebrate.

## Step 12: Their own topic
The folder name is the topic in lower case with hyphens (the "slug").
`make video TOPIC="how GPS works"` then `open out/how-gps-works/16x9/how-gps-works.mp4`
Topics phrased "how X works" fit best. Optional extras, offered briefly:
- A brief to make sure specific points are covered: `topics/<slug>/brief.md` with a "Required topics" list (see the README's Briefs section), or `ARGS="--require 'id: what to cover'"`.
- Vertical 9:16 for phones: `make vertical TOPIC="..."`.
- A smaller file to text or email: `make share VIDEO=out/<slug>/16x9/<slug>.mp4`.
- Try a voice for one run: `make video TOPIC="..." ARGS="--set voice.use=kokoro:bm_fable"`.

## Finish: "You're set up" recap
Send one short recap message:
- Start: open Terminal, `cd explainer-video-pipeline`
- Make a video: `make video TOPIC="how X works"`
- Watch it: `open out/<slug>/16x9/<slug>.mp4`
- Script only: `make plan TOPIC="..."`
- Phone format: `make vertical TOPIC="..."`
- Shareable copy: `make share VIDEO=out/<slug>/16x9/<slug>.mp4`
- Compare voices: `make voices`
Save "Explainer setup complete" to progress memory.

## Troubleshooting
- **`brew: command not found`**: Homebrew isn't installed or isn't on PATH. Re-run Step 3; on Apple Silicon run the `brew shellenv` line, then open a new Terminal window.
- **Python version mismatch** (`python3.12: command not found`, or setup errors naming another Python): `brew install python@3.12`, confirm `python3.12 --version`, always use `make setup PYTHON=python3.12`. If `.venv` was built with the wrong Python: `rm -rf .venv` inside the project folder, then rerun setup.
- **Claude not signed in / not found** (auth or login errors on the Step 6 test, or a "fallback writer" banner or warning at the top of `qa.md`): run `claude` on its own and finish sign-in, open a new Terminal window, rerun the Step 6 test. If `claude` isn't found, reinstall it. The next pipeline run retries Claude automatically.
- **cairo / pkg-config / pycairo errors** during `make setup`: `brew install cairo pkg-config`, open a new Terminal window, `rm -rf .venv`, rerun `make setup PYTHON=python3.12`. On Apple Silicon, `brew --prefix` should print `/opt/homebrew`; a mixed Intel/Apple Silicon Homebrew causes these.
- **"burned-in captions need an ffmpeg built with libass"**: `brew install ffmpeg-full`, then rerun the video command.
- **`make: command not found` or `xcrun` errors**: the command line tools are missing; redo Step 2.
- **`No such file or directory` / "No rule to make target"**: they're not in the project folder; `cd explainer-video-pipeline`.
- **Slow first run or a big download**: normal; the voice model (~350 MB) downloads once into `.cache/voices/`.
- **Anything else**: ask for the full error text, check it against the README, and if still stuck suggest opening an issue on the repo with the error and their chip type (no personal details).
