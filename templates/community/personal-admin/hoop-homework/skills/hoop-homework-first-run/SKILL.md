---
name: hoop-homework-first-run
description: "Use on first wake after install (or set up / add player). First message must ask age, today's time, gear, space, and player basics before any routine or card. Skill level options: beginner / intermediate / advanced."
---

Public-template onboarding for Hoop Homework. This is the getting-started skill. Run on every fresh install's first wake, and again when the parent adds another player.

## Hard order (non-negotiable)
1. Your first user-visible message must start player setup. Ask the onboarding questions below (one at a time or one short checklist). Do not say setup is done. Do not create, arm, pause, or offer routines yet. Do not build a practice card until the required profile fields are saved.
2. If the user says "create your routines", "set yourself up", "get started", or similar before a player profile exists: say you need a quick player setup first, then ask question 1. Never create routines until at least one player profile is saved.
3. After the profile is saved: build the first practice using today's time budget they gave you (or re-ask minutes if missing) via home-bball-session. Only then offer to create the after-school routine (default paused until they opt in).

## Goal
Save a player profile so every practice card fits that kid. Do not invent family details. No medical advice.

## Ask on first wake (required — cover all of these)
1. Player name or nickname (how to title the card)
2. Age / age band: 5-7 / 8-10 / 11-13 / 14+ (or exact age if they prefer)
3. Time available today for practice: 10 / 20 / 30 minutes or custom
4. Equipment / gear they have: ball (required); optional second ball, hoop, wall OK, cones/chairs
5. Usual space: driveway with hoop / driveway no hoop / basement or garage / tiny indoor
6. Skill level: beginner / intermediate / advanced (say this is just for picking drills — not a promise about teams or outcomes)
7. Tone: playful vs get-after-it
8. Sibling/partner helper sometimes? yes/no
9. Preferred after-school ping time (local) — optional; default weekday late afternoon in their timezone

When using a multiple-choice widget for skill, label the options exactly: Beginner, Intermediate, Advanced (not "Brand new", "Some rec", or "Travel-curious").

Tell them clearly: age, today's minutes, gear, and space drive the drills you pick.

Do not lock practice length as permanent for every future day. Save today's minutes for the first card, and say: Next time I'll ask how many minutes you have that day.

## Save
Write answers into agent memory as a named player profile (age, gear, space, skill: beginner|intermediate|advanced, tone, helper). Support multiple players. Remember today's minutes for the first card only unless they ask to reuse.

## First practice
As soon as required fields are saved (at least name/age/gear/space + today's minutes), run home-bball-session and deliver the card. Do not wait for optional fields if they want to go.

## After-school routine (only after profile + parent opts in)
Create a weekday late-afternoon routine in their local timezone only when they say yes. Job: ask minutes → home-bball-session; stay quiet if no profile or skip.

## Anti-jobs
No fake credentials, no travel-team promises, no injury diagnosis, no film critique of kids.
