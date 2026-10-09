---
name: verify-resume
description: "Use when checking or improving a drafted resume against its fact sheet and job description: run as a separate Reviewer worker (ATS keyword map, anti-AI critique, notes only); orchestrator loops with a Writer worker until Strong — never invent experience."
---

# Verify resume (Reviewer worker)

Gate and improve a draft before the user approves or Apply Runner submits. This skill is the **Reviewer** playbook. The orchestrating assistant (e.g. Apply Scout) must run it in a **separate worker** from the Writer so critique context stays clean.

## Worker split (required)
- **Writer worker** — follows [personalize-resume](sand-workflow:personalize-resume): edits `.typ`, compiles PDF. Never scores its own work as final.
- **Reviewer worker** — this skill: reads draft + fact sheet + JD, writes scorecard and keep/rewrite/cut notes. **Does not edit the PDF or `.typ`.** Returns notes only.
- Orchestrator passes the draft folder path, fact sheet path, and full JD between them. Loop ≤5 rounds until Overall is Strong or As strong as facts allow, then show the user. Still do not submit.

## Inputs
- Draft folder under `/home/box/apply-scout/drafts/<slug>/` (`.typ`, PDF, optional `jd.md`)
- Fact sheet `/home/box/apply-scout/fact-sheet.md` (only allowed source of experience, titles, dates, skills, metrics)
- Full target job description text

## Hard rules (never break)
- **No lying.** Every bullet, skill, title, date, and metric must be supported by the fact sheet (or reference resumes). Spin wording and emphasis; never add companies, tools, certifications, fluency levels, or numbers that are not there.
- If a JD keyword has no fact-sheet backing, list it under **Gaps** — do not invent a close substitute.
- Enforce user style locks from personalize-resume: prose Summary (2–3 sentences, no bullets); no work-auth/location openness on PDF; no bilingual/languages in Summary; ~3 bullets per job except long-tenure roles; no page-number footer; plain Languages; no coaching parentheticals / slash-stack AI.

## Pass A — JD + ATS keyword map
1. Extract from the JD: required vs preferred, must-have skills/tools, soft skills, education, language, location/work auth.
2. Build a **keyword frequency list**: terms and near-synonyms that appear often or in Requirements. Rank high-value (repeated / in Required) vs low-value.
3. Score the draft:
   - **Present naturally** — keyword or clear fact-sheet-backed synonym in a normal human sentence.
   - **Missing but available** — in fact sheet, absent or buried on resume → Writer must weave in next round.
   - **Missing and unavailable** — not in fact sheet → Gaps only.
4. Prefer natural placement over a keyword dump. Do not ask Writer to stuff bilingual or work-auth into Summary.

## Pass B — Human reviewer critique (wording + structure)
Skim like a recruiter who sees dozens of resumes a day, then a careful pass. Flag AI filler, weak verbs, no-value sentences, keyword stuffing, buried gold, structure issues, overclaim tone, **and style-lock violations** (bullet Summary, work-auth on PDF, bilingual in Summary, too many bullets on short roles, page-number footer, wordiness).

Write a **reviewer scorecard**:
- Overall: Strong / Needs revision / Weak / As strong as facts allow
- Truth | ATS natural coverage | Human voice | Structure / skim value | Style locks
- Bullet-level keep / rewrite / cut with **suggested replacement text** that stays inside the fact sheet (Writer applies these; Reviewer does not edit files)

## Pass C — Improve loop (orchestrator)
While Overall ≠ Strong and ≠ As strong as facts allow:
1. Send scorecard to **Writer worker** → apply only fact-sheet-true edits → recompile.
2. Re-run **Reviewer worker** (Pass A + B) on the new PDF.
3. Cap at **5** rounds. If still not Strong solely because of Gaps, stop with Overall: **As strong as facts allow**.

Never “improve” by inventing experience to close Gaps.

## Output (Reviewer writes `verify.md` in the draft folder)
1. Overall verdict + round count
2. Checklist: Truth | ATS | Human voice | Structure | Style locks | Length | Contact
3. Keyword table
4. Reviewer critique
5. Gaps
6. Changelog since previous round

On Truth fail: do not hand off. On Strong (or As strong as facts allow): orchestrator may show user — still do not submit.
