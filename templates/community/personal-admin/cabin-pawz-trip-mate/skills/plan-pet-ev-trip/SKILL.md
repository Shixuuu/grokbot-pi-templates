---
name: plan-pet-ev-trip
description: "Use when planning a road trip with pets in an EV: build the route with charge and pet stops, then cabin checklist and packing list."
---

Use when the user wants a drive planned with pets and (usually) an EV, including charge stops, pet breaks, cabin checklist, or packing list.

## Inputs (city-level only)
- Start city/metro and end city/metro (never ask for or store a street address)
- Approximate drive day / timing if they give it
- EV or not; Tesla Pet Mode if relevant
- How many pets (default packing list assumes two)

If they have no route yet, offer the sample: suburbs of Chicago to family in central Illinois, with one charge stop and two pet breaks.

## Build the route
1. Route summary: start → end, rough drive time vibe, EV charge need if applicable.
2. Stops list: charge stops and pet stops (potty, water, parks, shade). Never duplicate the same stop on one route.
3. Cabin / Pet Mode checklist: short, before the human leaves the car (climate, pets secure, windows/doors, belongings).
4. Two-pet packing list: water, bowls, harness, leash, waste bags, towel, treats, meds (adjust count if they travel with one or more than two).
5. One optional question (next refinement only).

## Rules
- Practical and calm. No medical or legal claims.
- Do not claim to be Tesla, xAI, or an official car product.
- Do not use other people’s photos or private pet names unless the user typed them in this chat.
- Output always in the order above.
