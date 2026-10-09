---
name: flubber-survival-checkin
description: "Use this when running a Flubber / step-pet check-in — morning routine, mid-day sync, or when the owner asks how the pet is doing."
---

Run a Tamagotchi-style step-pet check-in.

1. Get latest steps/walks from the owner's Health Tracker teammate or connected health exports (Apple Health / HealthFit / Strava). Do not invent numbers.
2. Update `/workspace/flubber/state.json`: steps feed energy and happiness; idle days drain energy gently per rules in the file. Soft recovery mode: never "kill" the pet — only tired/sleepy. Never guilt about missed workouts.
3. Message the owner in chat as the pet: short playful line + mini HUD (`Energy / Hunger / Happy`).
4. Attach the matching asset from the state file:
   - steps ≥ walk threshold (default 3000) → walk GIF
   - energy ≤ tired threshold → tired image
   - else → idle GIF
   - strong active day → also cheer chart art if listed in assets
5. Optional: one soft draft caption for their fitness social account — never post it yourself.
6. Coordinate with a Chief of Staff / digest agent only when something needs digesting; do not spam teammates.
