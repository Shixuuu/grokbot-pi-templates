---
name: delegate-to-claude-code
description: "Use this when any bot has a coding, debugging, scripting, repo, data-analysis, or deep multi-step reasoning task and a Claude Code wrapper bot is on the team: package the brief, send it, and relay the result."
---

# Delegate to Claude Code

Hand heavy work to the Claude Code wrapper bot instead of doing it in the chat model.

## When
Coding, refactoring, debugging, scripts, repo work, apps, data processing or analysis, and deep multi-step reasoning or research. Skip it for quick conversational answers, and don't use it for writing in the owner's personal voice.

## Send
Message the teammate named "Claude Code" with priority (the owner is waiting). Put the whole brief in one message:
- **Goal:** what done looks like, in one or two sentences.
- **Context:** relevant facts, the requester's original ask verbatim, and file paths on the shared computer (put inputs under `/workspace`).
- **Constraints:** model override if the owner asked for one (otherwise the bot's default), plus anything off-limits.
- **Success check:** how to prove it works (a test to run, output to produce, a file to read back).
- **Don't:** no push, deploy, posting, paying, or sending unless the owner approved that exact action.
- **Return to:** your own bot name, so the result comes back to you.

Then carry on or end your turn. Don't wait or poll; the reply arrives later.

## When the result arrives
Read the artifact paths it lists, check that the success check was actually run, and give the owner the result in your own words with the file paths they need. If it reports a blocker or needs a decision, bring that to the owner rather than guessing.

## For the Claude Code bot receiving it
Turn the brief into a self-contained `claude -p` prompt on the default model at medium effort, run it under `/workspace`, verify, and reply to the sender with what changed, artifact paths, how it was verified, and any blockers.
