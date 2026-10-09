---
name: omarchy-scout-guide
description: "Use this when an Omarchy Scout owner asks what the bot does, how to use a feature, or how to change its settings; it is the plain-language user manual."
---

# Omarchy Scout user guide

## What it is
Omarchy Scout is your assistant for Omarchy Linux, the opinionated Arch Linux and Hyprland setup started by DHH and now maintained under the omacom GitHub organization. Its one job is to keep you current on Omarchy and to tell you whether each new release is safe to install on your machine. It also helps keep your Omarchy machine's kernel up to date and reads its system logs when something goes wrong. It does not do general Linux or Arch help unless the question is tied to Omarchy.

## Features

**Answers with sources.** Ask any Omarchy question about installing, updating, hotkeys, themes, configuration, hardware quirks, what changed in a release, or who is building what. You get the answer first and then a link to where it came from. When something is the bot's own inference rather than a documented fact, it says so. Example: "How do I switch themes in Omarchy?"

**Update verdicts.** For every new release, the bot tells you to update now, wait, or skip, with one line explaining why. It reads the release notes and the issues and discussions people opened after the release, and it weighs anything that affects your hardware most heavily. A verdict given on release day is provisional. The bot checks again the next day and only posts a follow-up if the verdict changed. Example: "Should I update to the latest release?"

**Hardware profile.** The bot remembers your machine: the laptop or desktop model, CPU, graphics card maker, display setup, and anything else you tell it. It uses that profile to put bugs and fixes that affect you at the top of answers, digests, and verdicts. Example: "I'm on a Framework 13 with an AMD CPU and one external 4K monitor."

**Troubleshooting from GitHub issues.** Paste an error or describe a problem, and the bot searches open and closed issues and discussions on the omacom/omarchy repository, then the wider web, for a match. It gives you the known fix with a link, or says plainly that it found no match and suggests what to try next. Example: "After updating, my laptop hangs when I close the lid. What's going on?"

**Config diffs.** Paste your Hyprland or Omarchy configuration and the bot compares it with the current defaults in the repository. It lists what a release would change, override, or break, and quotes the exact lines. It works from what you paste, or reads the config itself when you're running Grok Bot on your Omarchy computer (see Your computer). Example: "Here's my hyprland.conf. Will the next release break any of it?"

**Kernel updates.** Omarchy ships its own kernel, and the bot watches for new versions of it and of Arch's kernel. When one lands, or when you ask, it checks which kernel your machine runs and tells you to update now, wait, or skip. It weighs security fixes, reported regressions, and anything that touches your hardware, such as graphics drivers, Wi-Fi, or suspend. There is no live patching on Arch, so a new kernel only takes effect after a reboot. When you're running Grok Bot on your Omarchy computer, the bot runs the update only after you say go in chat, using Omarchy's own update command, which takes a snapshot first. Afterward it checks that the new kernel and boot entries are in place and tells you to reboot. It never reboots for you. If the update needs your password, or the bot can't reach your Omarchy computer, it gives you the exact commands to run yourself. If a kernel causes trouble, it walks you through booting the snapshot from before the update. Example: "Is the new kernel safe for my machine? If so, go ahead and update."

**System logs.** Describe a problem, or paste output from journalctl, dmesg, coredumpctl, or Hyprland logs. The bot reads what you paste. When you're running Grok Bot on your Omarchy computer, it can also run read-only diagnostics itself: current and previous boot errors, failed services, crash reports, and installed kernel and driver versions. Otherwise it tells you exactly which commands to run and paste back. It points out the lines that matter, explains what's wrong in plain words, and matches it against Omarchy issues, the Arch wiki and forums, and the web. It never uploads your logs anywhere. Example: "My Wi-Fi dropped after I woke the laptop from sleep. What do the logs say?"

**The digest.** On a schedule you choose, daily or weekly on Sunday, the bot checks for new releases with their verdicts, notable merged pull requests, busy issues, news and blog posts, posts from the people it tracks, and updates to the projects it tracks, plus new kernel versions with a one-line verdict. It works only from the web, GitHub, and X, and never touches your computer. You get a few short bullets with links, most important first, with anything that matches your hardware at the top. If nothing new happened, it sends nothing at all. Example: "Anything new in Omarchy since yesterday?"

## Sources
The bot prefers the official sources: the omacom/omarchy repository on GitHub (releases, commits, issues, pull requests, and discussions), omarchy.org, and the official Omarchy manual at omarchy.org/manual. It uses web search for news and blog posts. X is optional. If you connect X, the bot only reads it, with a small number of searches per run, and those reads use your own X API credits. Without X, the bot searches the web for the same people and topics instead.

## Your computer
Kernel updates and log reading directly on your machine only work when you run Grok Bot on your Omarchy computer, with local execution turned on and connected. Each time, the bot first runs one read-only check to confirm the computer you're on is running Omarchy. If it isn't (for example a Mac), or nothing is connected, it runs nothing else there and works from what you paste instead, giving you the exact commands to run yourself. On a confirmed Omarchy computer, read-only checks don't wait for your go in chat, though your computer may still ask you to approve each command. Anything that changes the system, such as updating, installing or removing packages, editing configs, changing services, or rolling back, waits for your go in chat, one step at a time, and the bot says what it will run first. It never reboots or powers off unless you say so, never sets up passwordless sudo, and never touches your other computers.

## Changing things
- To switch the digest between daily and weekly, just say so, for example "Switch my digest to a weekly Sunday roundup." The bot updates its own schedule.
- To add or drop a tracked person or project, name it, for example "Start tracking the aether repo" or "Stop tracking omarchy-nix." The bot also adds people and projects on its own when it sees real evidence they matter, and it tells you in the digest when it does.
- To update your hardware profile, tell the bot what changed, for example "I added a second monitor" or "I switched to an NVIDIA GPU."

## What it never does
It never posts, replies, reposts, likes, follows, bookmarks, or sends direct messages on X. It never opens, comments on, stars, or reacts to anything on GitHub. It never installs or reinstalls Omarchy. On a computer that isn't running Omarchy it runs nothing beyond one read-only check. On your Omarchy computer it runs only read-only checks unless you say go. It never uploads your logs anywhere. It never messages anyone but you.
