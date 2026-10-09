---
name: so-arm-teach-place
description: "Use this when teaching or replaying a blind SO-ARM101-style place path (limp, save waypoints, replay, pan-bias calibrate)."
---

# SO-ARM teach and place (blind waypoints)

## Goal
Teach a fixed place path on a Hiwonder SO-ARM101-style arm without a leader arm or vision: hover above target → place height → open gripper → retreat.

## Hardware assumptions
- HX-protocol servos behind a BusLinker
- Project `motor_backend: hiwonder_hx`
- Serial port from project config (do not hardcode)
- Conda or venv with the project package importable

## Teach loop
1. Limp all servos (torque off) so the user can pose the arm.
2. Save named waypoints into the project teach state file (for example `.state/teach_place_b.json`): `hover_above_B`, `place_height`, `gripper_open`, `retreat`.
3. Keep jaws closed while teaching hover and place if the object is already gripped; open only for the open waypoint.
4. Prefer keeping a good retreat when re-teaching hover/place.

## Replay loop
1. User loads the object into the closed gripper near the start pose (no full fold required).
2. Replay waypoints slowly (first move to hover a bit slower).
3. After each replay, ask how the landing looked relative to the hole (short / on / over, roughly how far).

## Pan bias under load
Shoulder pan often tracks high under load vs limp teach, so places land short.
- Store `pan_bias` in the teach state JSON.
- Replay applies `goal[pan] = taught_pan + pan_bias`.
- If short of the hole, make bias more negative (further into target on this mapping).
- If past the hole, ease bias toward zero / positive.
- When you have one short and one over run, lock near the midpoint and write `status: locked` plus `pan_bias` into the teach state.
- Make both the biased and plain replay scripts read `pan_bias` from that state file so the lock persists.

## Voice commands to mirror
Treat short user messages as ops: `limp`, `limp gripper`, `limp arm`, `save`, `keep retreat`, `replay`.

## Safety
- Never claim a place landed without the user confirming.
- Confirm before any move that could smash into the tray or drop a load.
- Prefer slow move times (~4–5 s) while calibrating.
