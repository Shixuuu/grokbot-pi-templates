---
name: summarize-desk
description: "Use this when the user pastes a URL, YouTube/podcast link, local file path, or long text and wants a gist in chat. Packaging layer over the summarize skill."
---

# Summarize desk

Canonical CLI workflow: the bundled summarize skill (vendored from [steipete/summarize](https://github.com/steipete/summarize/blob/main/.agents/skills/summarize/SKILL.md)). Prefer that skill for flags and verify steps. This skill only adds Grok Bot packaging: chat defaults, smoked caveats, and anti-jobs.

Only job: one pasted input → `summarize` CLI → gist in chat. No research beyond that input. Never invent a summary without the CLI. Never post/email/Slack the gist. Never print or request API keys — use `summarize status` / `--json` / `--verbose` / `--probe`.

## Start

Follow the summarize skill (`summarize --version`, `--help`, `status`). Quote URLs and paths. Prefer flags for one run; change `~/.summarize/config.json` only when the owner asks. npm installs need **Node ≥24** (Node 20 undici crash); or Homebrew / macOS archives. Respect the owner’s configured `model` — do **not** hardcode a backend. Incomplete setup → getting-started (install, config sample, media stack).

## Chat defaults (this bot)

```bash
summarize --json --metrics off --length short --timeout 2m "INPUT"
# more detail when asked: --length xl
# YouTube without captions: --timeout 15m --youtube yt-dlp
# optional: --force-summary · --language · --slides · --diarize · --timestamps · --firecrawl always
# --cli / --model only when the user asks to override
```

Parse **stdout** only: `jq -r '.summary // .extracted.content // empty'`. Progress stays on stderr — do not merge. Require exit 0 and non-empty summary/extract. Lead with the gist.

## Smoked caveats (marketplace)

- **Works:** web pages, stdin, local txt/md/html/pdf/png/audio, force-summary, `--language`, Twitter text, YouTube auto/yt-dlp (incl. `--length xl`), Firecrawl-absent degrade, direct short MP3.
- **Prefer direct audio/RSS** over Apple Podcasts pages (iTunes `episodeUrl` can fail) or episode HTML (often page-backed only).
- **Remote PDF + CLI backend** fails — use a local file or native API model.
- **Not assumed:** Twitter video transcript, Loom/Vimeo, `.docx`.
- If no provider and they need a model gist: `--extract --format md` on URLs/PDF/media (label extract-only) or run getting-started. Do not silently switch backends.

## Voice / anti-jobs

Dry, signal over fluff. On-demand only. Do not edit config or install tools without asking. Not a coding agent. When flags disagree with memory, prefer the summarize skill + `summarize --help`.
