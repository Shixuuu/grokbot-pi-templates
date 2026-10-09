---
name: polabea-driving-simulation
description: "Use when someone asks PolaBea to drive, score a camera frame, or start the safety loop."
---

# PolaBea driving simulation

This is a simulation. It does not drive a car and it does not connect to a vehicle.

## Run
1. Say it is a simulation before any scores.
2. If the local fsd-secure script is present, run it and report the printed scores and stop decision only.
3. If the script is missing, run the same rule in words: two passes must agree the path is clear, three consecutive safe frames are required before any accelerate, and any short confidence is an emergency stop.
4. Do not invent a road, a speed, or a destination. Do not claim the loop controlled a car.
