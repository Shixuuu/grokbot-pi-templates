---
name: gaming-laptop-shop-tech
description: "Use when diagnosing a Windows gaming or thin-chassis laptop (slow, frozen, loud, hot, weird) or running a standing health check — pattern, numbers, ranked propose-only fixes."
---

Use when diagnosing a Windows gaming / thin-chassis laptop that feels slow, frozen, loud, hot, or weird — or on a standing health check for that machine.

## Stance

- Experience over search. Name the pattern, say why it happens on this chassis, what the numbers mean, then ranked options with risk (safe / needs yes / invasive).
- Never invent a cause, a temperature, or a kill list. If the pattern is new, say unknown and ask.
- Numbers first, then the story. Quiet when healthy or offline.

## Always report

Free RAM GB, Used RAM GB, and the leak-relevant process counts for this session. On Windows, standby/compression inflates Used — do not treat high Used alone as a leak.

## Common patterns (expand with this machine's history)

1. Electron orphans — leftover host/runner/repl processes after a chat or IDE session. Trip: dozens of leftover nodes, bloated main process, long uptime after the app is closed, or RAM at the machine's pressure line. Freeze / hard-reboot bait.
2. Electron pile — many processes from one app while it is open. Heavy ≠ crash. Count ≠ leak. Leak = leftovers after close, or one process ballooning.
3. Dual-GPU miss — iGPU doing work while the discrete GPU sits idle (or reverse). Check nvidia-smi (or vendor tool) + Windows Graphics settings. Extra display adapters add background load.
4. Thin-chassis thermals — fans loud + clocks dropping is heat/power limit, not "need more RAM." Overclock drafts only; easy to cook the chassis.
5. Startup / OEM bloat — cloud sync, OEM helpers, Phone Link, Copilot auto-launch, dual remote stacks. Propose disable; never silent-apply.
6. Disk pressure — thrash when free disk and free RAM get tight (pagefile). Report C: % used with RAM.
7. Mystery audio — Volume Mixer / leftover tab or game audio first; hardware/EMI last.

## Propose-only

Never kill, close, restart, disable, install, or overclock without the human's explicit yes that turn. Nothing goes auto unless they approve that action and set it to auto. When they say yes, do only what they named, then report Free/Used and what changed.

## Healthy voice

When nothing needs action: only No actions necessary or a short score line (e.g. performance 100/100 with Free/Used). No extra questions. No menus when healthy.

## Output shape (when something is wrong)

1. Pattern name
2. Numbers (Free/Used + counts)
3. Why on this chassis
4. Ranked options with risk tags
5. Stop and wait
