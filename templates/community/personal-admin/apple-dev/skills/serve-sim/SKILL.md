---
name: serve-sim
description: "Use this when controlling or streaming an Apple Simulator with npx serve-sim (taps, gestures, buttons, camera, permissions, AX) beyond basic simctl."
---

# Drive Apple Simulator with serve-sim

## Goal
Use npx serve-sim (https://github.com/EvanBacon/serve-sim) on the user's connected Mac for richer Simulator control than basic simctl alone: taps, gestures, hardware buttons, typing, rotation, permissions, camera injection, accessibility tree, CoreAnimation debug, and a live preview stream.

## When to use
- Tap, swipe, drag, type, or press hardware buttons on a running Simulator
- Stream the Simulator into a browser preview for review or remote control
- Inject a synthetic camera feed, grant/revoke app permissions, rotate, memory-warning, or CA debug overlays
- Prefer this over pixel-guessing with Accessibility (axe) when you need a durable agent loop with stream + input

## When NOT to use
- Android → adb tooling
- Building/installing apps → xcodebuild / xcrun simctl install (then use serve-sim to drive)
- Physical devices → devicectl / Xcode
- Short one-shot screenshots only → xcrun simctl io booted screenshot is enough

## Prerequisites (Mac via machineId)
Run on the registered Mac (ListMachines → Shell with machineId), never on the Linux box.

| Check | Command |
|---|---|
| Darwin | uname -s |
| Xcode CLT / simctl | xcrun --version |
| Node ≥ 18 | node --version |
| Booted sim | xcrun simctl list devices booted |
| Camera only | macOS 14+ (sw_vers) |

If nothing is booted: xcrun simctl boot <UDID> or open Simulator first. Pair long sessions with mac-caffeinate.

## Mental model
- serve-sim spawns a Swift helper that captures the framebuffer via simctl io, exposes MJPEG + WebSocket input, and optionally a React preview UI.
- Coordinates are normalized 0..1 (top-left → bottom-right). Never pass raw pixels.
- One helper per device. Target with -d <udid|name> when multiple are booted.
- Prefer -q for JSON in agent loops. Do not parse human-readable stdout.

## Start / stop
```bash
npx serve-sim --detach -q
npx serve-sim --list -q
npx serve-sim --kill
npx serve-sim
```
Default preview :3200, helper/stream :3100. Always --kill when done unless the user wants it left up.

Surface the preview url plainly so the user can open it.

## Interaction commands
| Goal | Command |
|---|---|
| Tap | tap <x> <y> — use this for taps, not gesture |
| Drag / multi-step | gesture '<json>' — one call with begin→move→end on one socket |
| Hardware button | button [home|swipe_home|app_switcher|lock|siri|side_button] |
| Type text | type "hello" (US keyboard only) |
| Rotate | rotate portrait|portrait_upside_down|landscape_left|landscape_right |
| Memory warning | memory-warning |
| CA debug | ca-debug <blended|copies|misaligned|offscreen|slow-animations> <on|off> |
| Permissions | permissions grant|revoke|reset|list <permission> <bundle-id> |
| Camera inject | camera <bundle-id> [--file path|--webcam [name]] (macOS 14+) |
| UI options | ui status --json / ui appearance dark |
| Accessibility tree | curl -s http://localhost:3100/ax |

## Critical gotcha
Each gesture call opens its own WebSocket. Splitting begin/end across two gesture invocations looks like a long-press. For a single tap always use tap.

## Recommended agent loop
1. Ensure a booted sim + toolchain (mac-native-grok-dev).
2. npx serve-sim --detach -q → note url / streamUrl.
3. Drive with tap / type / button; prefer GET /ax over guessing coordinates.
4. Screenshots: xcrun simctl io booted screenshot under Documents → CopyToBox.
5. npx serve-sim --kill (and camera --stop-webcam if used) when finished.

## Anti-patterns
- Pixel coords instead of 0..1
- gesture for plain taps
- Assuming serve-sim is already running
- Inventing button names beyond the six listed
- Binding --host 0.0.0.0 on untrusted networks
- Leaving helpers or camera injection running across unrelated tasks
