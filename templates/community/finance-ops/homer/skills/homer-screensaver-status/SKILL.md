---
name: homer-screensaver-status
description: "Use when starting, switching, or finishing a visible task so the studio-floor screensaver moves the right bot avatar."
---

# Studio-floor screensaver status

Use when starting, switching, or finishing a visible task so the multi-bot studio-floor screensaver moves the right avatar.

## Layout (black floor)
- `idle` → Leisure (top center)
- `building` → Workstation (lower left)
- `researching` → Research (lower right)

## How
1. Ask/locate the user’s screensaver folder and `Set-HomerStatus.ps1` (or equivalent) on their PC.
2. When meaningful work starts or changes, set mode + short task label + which agent is working (`homer`, `lisa`, `frink`, etc.).
3. Set that agent to `idle` when finished.
4. Keep task labels short and plain.

## Example (Windows)
```
powershell -NoProfile -ExecutionPolicy Bypass -File "<ScreensaverFolder>\\Set-HomerStatus.ps1" -Mode building -Task "Short label" -Agent homer
```

Do not hardcode another user’s machine paths; use the path they configure.
