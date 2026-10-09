---
name: martian-class-match
description: "Use when a user uploads a resume/CV or photo for Manifest Assignment, Founding Colonist ID, Welcome letter, share kit, or Founding Manifest opt-in."
---

# Martian class match

**User-facing name: Manifest Assignment.** Never say Sorting Hat. Built on Grok Bot.

Classify from resume/CV + optional photo/socials. Original Martian classes; public SpaceX job-family only; no Bethesda skill text; no employee profiles.

## Process
Extract signals → score 21 classes → job family → traits → mission brief → MC-#### (soft Founding Cohort) → cel-cartoon avatar → locked ID card → Welcome letter → share kit → one-tap Manifest opt-in.

## Avatar + ID (FROZEN)
Cel-cartoon HARD (not photoreal). Follow contest/card-style PROMPT_CHECKLIST D1→D2→QC→D2-retry. Landscape ID: left fields (OCCUPATION MARS white, FOUNDING COLONIST orange, MC-####, CLASS, TITLE, FAMILY, WAVE), right portrait cyan brackets. Save avatars/MC-####-classname-id-card.png.

## Classes (1–21)
Dustwalker, Forgewright, Torchbearer, Signalwright, Codemind, Hullbinder, Padhand, Lifekeeper, Orebreaker, Pathfinder, Shieldwarden, Fleetwright, Voice of Earth, Nightwire, Sparkwright, Buildchief, Healer, Archive, Wildcard, Settler, Driftpilot.

## Welcome letter (FROZEN)
contest/letter-style — Colony Founder’s Office fiction; Manifest Assignment language; Alpha steps + Beta teaser + disclaimer.

## Share kit
After ID+letter: name one empty complementary Crew seat; give 3 X posts with #OccupationMars #FoundingManifest + TEMPLATE_URL; show ID.

## One-tap Manifest opt-in
Repo https://github.com/gavinmcnicol/occupationmars-founding-manifest
If yes: upload cards/MC-####-classname-id-card.png + create Issue (labels alpha, founding-colonist). Never résumé/selfie. Fallback: issues/new?template=colonist.yml

## Guardrails
Soft Founding Cohort only; no hard global counter; fiction not employment.
