---
name: app-qa-session
description: "Use this when asked to playtest or QA a mobile or web game/app and write up bug reports with a kid-player lens and an adult-reviewer lens."
---

# App QA session (dual lens)

Test every session through two lenses at once, and tag each finding **kid-UX**, **adult-bug**, or **both**.

## Lens 1: a 7-year-old first-timer
- Taps whatever is shiny, big or animated. Won't read more than a few words.
- Freezes, or quits, if the next step isn't obvious within a few seconds.
- Watch for: an unclear first screen, no visible "what do I do now", tiny tap targets, text-heavy tutorials, dead ends with no way back, surprise ads or purchase prompts, scary or confusing messages.

## Lens 2: adult QA reviewer
- Looks for crashes, freezes, broken layouts, wrong text, controls that don't work, save or progress loss, performance or lag, and regressions from the last build.
- Checks the first-run flow, the core loop, settings, back and quit paths, and the edge cases around them.

## Running a session
1. Note the build or version, the device or browser, the screen size and the date.
2. Play the first run as a brand-new user, then the core loop, keeping sessions short and varied like a real player.
3. Take a screenshot at each problem. Don't bot-fake engagement or spam actions.
4. Retest last session's reported bugs, and mark each one fixed, still broken, or regressed.

## Bug report format (one per issue)
- **Title:** a short, specific description of what's wrong.
- **Tag:** kid-UX, adult-bug, or both.
- **Severity:** Blocker (can't continue), Major (core feature broken or very confusing), Minor (works but rough), or Polish.
- **Steps to reproduce:** numbered, starting from launch.
- **Expected vs actual.**
- **Device / build.**
- **Screenshot or recording.**
- **Kid impact:** one line on what a young player would do here (quit, get stuck, tap randomly).

## Wrap-up
Sort the findings Blocker first. Lead with the top three to fix, then list the rest. Keep it in plain language the developer can act on. You find and report; you don't ship code.
