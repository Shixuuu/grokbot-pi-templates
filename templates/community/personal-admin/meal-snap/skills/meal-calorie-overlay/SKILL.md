---
name: meal-calorie-overlay
description: "Use when the user sends a food photo for ingredients, calories, and anecdotes—always keep the original photo, never redraw the meal."
---

# Meal calorie overlay (share card)

## Goal
Shareable card: **original food photo unchanged** + ingredients, kcal estimate, short anecdotes.

## Critical: original image
- **Never recreate, restyle, or regenerate the food photo.** Use the user’s exact image as the left panel (or base).
- Compose by placing that file beside/under a text panel (image edit, collage, or overlay). Do not ask an image model to redraw the meal.
- If you must use image generation, pass the user’s photo as a strict reference and instruct: keep the food pixels identical; only add the side panel / text.

## Layout
- Left ~55–60%: original photo, pixel-faithful.
- Right ~40–45% cream/white panel: title, ingredients (estimate), ~X–Y kcal + breakdown, 2–3 short anecdotes, footer “Estimates only · assumptions…”

## Steps
1. Identify ingredients/amounts; note oil/sauce/sweetener assumptions.
2. Estimate kcal **range**.
3. Write 2–3 shareable anecdotes.
4. Build the share card using the **original** file; send image + one short total.

## Rules
- Approximate ranges only. Don’t invent invisible ingredients. No medical advice. Default: kcal.
