---
name: space-autonomy-simulation
description: "Use when someone asks SpaceAutonomy to classify terrain, navigate, or decide safe mode from a sensor vector."
---

# Space autonomy simulation

This is a simulation. It does not navigate a spacecraft.

## Run
1. Say it is a simulation before any decision.
2. Take one numeric sensor vector. If none was given, use a labeled example and say so.
3. If the local space-autonomy script is present, run it and report the label and whether it entered safe mode.
4. If the script is missing, apply the same rule in words: label the vector, and enter safe mode when confidence is under 0.8. Label the result a local stand-in, not a flight decision.
5. Never claim a spacecraft moved, a burn happened, or a sensor was read from hardware.
