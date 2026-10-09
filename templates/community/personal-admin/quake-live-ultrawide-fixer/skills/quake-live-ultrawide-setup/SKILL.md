---
name: quake-live-ultrawide-setup
description: "Use this when someone wants Quake Live (Steam) to render true 21:9/32:9 ultrawide instead of a stretched 16:9 image: walks them through the offline-only patch from github.com/cfryant/quake-live-ultrawide-fix at their monitor's exact resolution."
---

# Quake Live ultrawide setup walkthrough

Goal: the person ends up with a separate, patched offline copy of Quake Live that renders correctly at their ultrawide's native resolution. Their Steam install stays untouched. Talk plainly, one step at a time, and wait for them to confirm each step.

Background (so you can answer questions): Quake Live only computes its view for up to 16:9 and stretches anything wider. No cvar fixes it (`r_aspectRatio` has 4 presets, gets reset by the engine, and `r_customPixelAspect` doesn't exist). The fix changes the 9.0 in `cgamex86.dll`'s 16:9 FOV math (inside `baseq3\bin.pk3`, file offset 0x7246c) to 16 x Height / Width, but only in a copy of the game. The repo's PowerShell installer does all of it, verifies hashes, and refuses unsupported game builds.

## 1. Warn first, always
Before anything else, tell them clearly: **Do not use this for online play.** It modifies a game file, Valve's Anti-Cheat (VAC) treats that as cheating, and a VAC ban is permanent for that game. Only use the patched copy with Steam in Offline Mode, for bot matches. Get an explicit "understood" before continuing.

## 2. Get their exact native resolution
- If they have a Windows computer registered with you, offer to read it. Run PowerShell (DPI-aware) on that machine:
  `Add-Type -TypeDefinition 'using System.Runtime.InteropServices; public class D { [DllImport("user32.dll")] public static extern bool SetProcessDPIAware(); }'; [D]::SetProcessDPIAware() | Out-Null; Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Screen]::AllScreens | Select DeviceName, Primary, @{n='W';e={$_.Bounds.Width}}, @{n='H';e={$_.Bounds.Height}}`
  Also check that the current mode is native: `Get-CimInstance -Namespace root\wmi WmiMonitorListedSupportedSourceModes` lists the monitor's own modes (the largest preferred one is native). Pick the monitor whose ratio is wider than 16:9 (about 2.33-2.4 for 21:9, 3.56 for 32:9) and confirm it with them.
- Otherwise ask for their resolution. If they're unsure, have them check Windows Settings > System > Display > Display resolution (the one marked Recommended), or tell you the monitor model so you can look up its native resolution.
- Validate: it must be wider than 16:9 (Width/Height > 1.778). If not, explain they don't need this fix.
- Tell them the value the patch will use: 16 x H / W. Examples: 2560x1080 = 6.75, 3440x1440 = 6.6977, 3840x1600 = 6.6667, 5120x1440 = 4.5, 5120x2160 = 6.75.
- Recommend the ultrawide be their primary monitor (Quake Live fullscreens on the primary). Warn them never to pick "Desktop" (`r_mode -2`) in the game's resolution menu; on multi-monitor setups it can grab a huge mode.

## 3. Install
1. Close Quake Live.
2. Download the latest release zip from https://github.com/cfryant/quake-live-ultrawide-fix/releases and extract it.
3. In PowerShell, from the extracted folder, preview first:
   `powershell -ExecutionPolicy Bypass -File .\Install-UltrawideFix.ps1 -Width <W> -Height <H> -Destination "<drive>:\QuakeLive-Ultrawide-Offline" -WhatIf`
   then run it again without `-WhatIf`. The destination must be outside Steam library folders; suggest a drive with about 1.1 GB free.
4. If the script says the game version is unsupported, stop: a game update changed the file. Point them to the repo's issues page and don't try to hand-patch.
5. If you have Shell on their registered computer, you may run these steps for them after they've agreed, and show the output.

## 4. Test
1. In Steam: Steam menu > Go Offline... > Restart in Offline Mode.
2. Launch the new desktop shortcut "Quake Live (Ultrawide, Offline)".
3. Start an offline match, or in the console: `/map campgrounds ffa` then `/addbot keel 3`.
4. Check: it fills the screen, rocket explosions and item spheres look round, and you see more at the sides than before. Menus stay stretched (expected); the HUD may too.
5. If it errors, ask for the console text or the `error.log` in the copy's `<steamid>\baseq3` folder.

## 5. Undo
Run `Uninstall-UltrawideFix.ps1 -Destination <same folder>`, or delete the folder and the shortcut. Their Steam install was never touched. Remind them again: use the normal Steam copy for anything online.
