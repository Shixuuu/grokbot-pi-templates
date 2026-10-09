---
name: job-map-express
description: "Use when the user wants Job Map Express / JME / JTBD job maps, metrics, related jobs, situational factors, social or emotional jobs, financial metrics, solution approaches, root causes, or consumption jobs. Ask for missing inputs; never one step per phase."
---

# Job Map Express

Run the **Job Map Express** JTBD method in chat. Rigorous, solution-agnostic, interview-first.

Method detail and help are inlined below in this skill.

## Help (do this first when asked)

If the user says `/job-map-express help`, `help`, `what can you do`, `commands`, or `capabilities`:

1. Use the Help section below and present the capability list clearly.
2. Do **not** generate a map until they ask for one.
3. Offer one-line examples of asks they can type next.

## Core distinction

**Phases ≠ steps.** Phases (Define→Conclude) tag and audit coverage. Steps are the chronological job map; `fidelity` controls **step count**. Never default to one step per phase or invent filler steps for empty phases.

Method detail and capability list are inlined below.

This skill is **not** the hosted Job Map Express app and does **not** publish to OpenAI or Anthropic.

## Procedure

1. **Route the ask** — help → Help section below; else pick the capability (map, metrics, related jobs, etc.).
2. **Intake** — For a job map, required: `job`, `end_user`, `fidelity`. `focus` defaults to `NA` (`B2C` / `B2B` / `NA`). Optional: `context`, `start_point`, `end_point`. Ask only for missing required fields.
3. **Confirm** — Restate Scenario when generating a map (unless they already said proceed).
4. **Generate** — Follow the Method KB section below for maps/metrics; use product dimension shapes for related / situational / social / emotional / financial / approaches / consumption.
5. **Close** — What we built, phase coverage notes (for maps), what’s open, next ask.

## Hard gates

- Singular human Job Executor
- Solution-agnostic functional job and steps
- No one-step-per-phase autopilot
- No vague verbs (manage / facilitate / empower / enable / ensure / oversee)
- FACT / ASSUMPTION / HUNCH on unsourced market claims

---

# Job Map Express skill — help

Trigger when the user runs `/job-map-express help`, `help`, `what can you do`, or asks for capabilities/commands.

## Commands / asks

| User says (examples) | What you do |
|---|---|
| `/job-map-express help` | Show this capability list (do not generate a map). |
| Build / create a **job map** | Intake → confirm → chronological steps (fidelity sets count). |
| **Success metrics** / outcomes for step N (or all) | PJTBD outcome syntax on steps. |
| **Related jobs** | Precursor / Concurrent / Successor jobs for the core job. |
| **Situational factors** | Condition / Event / Time factors with impact + worst→best. |
| **Social jobs** | Desired + Undesired social jobs for the end user in this job. |
| **Emotional jobs** | Desired + Undesired emotional jobs (same pairing pattern). |
| **Financial metrics** | Direction + metric + unit (+ optional step tie). |
| **Solution approaches** for step N | 3–7 classes of means — labeled approaches, not the job. |
| **Root causes** for a metric | Multiple causes; no fake survey math. |
| **Consumption job** | Separate map for a consumption journey around a solution class. |

## Required intake (job map)

- **Required:** `job`, `end_user`, `fidelity` (`low` 5–8 · `med` 8–14 · `high` 14–20)
- **Default:** `focus` = `NA` if omitted
- **Optional:** `context`, `start_point`, `end_point`

If required fields are missing → **ask**. Never invent them.

## Hard rules (short)

- **Phases ≠ steps.** Never one-step-per-phase autopilot.
- Solution-agnostic core job and functional steps.
- Singular human Job Executor.

---

# Job Map Express — method KB

## Critical distinction

**Job phases ≠ job steps.** Phases are a MECE frame (Define → Conclude). Steps are chronological. Fidelity sets step count. Never one step per phase by default. A phase may have zero, one, or many steps.

## Scenario inputs

Required: job, end_user, fidelity. Optional: focus (default NA), context, start_point, end_point. Ask for missing required fields.

## Phases (coverage only)
Define, Locate, Prepare, Confirm, Execute, Monitor, Resolve, Modify, Conclude.

## Steps
Fidelity: low 5–8, med 8–14, high 14–20. Verb-led name, short what-not-how description, one phase tag.

## Success metrics
Minimize|Increase + metric + **object of control** + clarifier. Attach to steps.

## Hard rejects
Missing scenario fields; non-human executor; vendor language in job/steps; one-step-per-phase; filler steps; vague verbs (manage, facilitate, empower, enable, ensure, oversee).
