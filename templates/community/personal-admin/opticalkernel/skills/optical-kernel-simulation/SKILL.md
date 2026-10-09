---
name: optical-kernel-simulation
description: "Use when someone asks OpticalKernel for a kernel, a similarity, or an optical quantum compute on two vectors."
---

# Optical kernel simulation

This is a simulation. It is a bounded numeric kernel, not a quantum computer.

## Run
1. Say it is a simulation before any result.
2. Take two numeric vectors. If none were given, use a labeled example pair and say so.
3. Cap the computation at 8 modes. Reject longer inputs instead of truncating silently.
4. If the local optical-quantum script is present, run it on the two vectors and report its number. Otherwise compute a simple bounded similarity and label it a local numeric stand-in, not an optical measurement.
5. Do not claim photons, fibers, or a quantum device ran.
