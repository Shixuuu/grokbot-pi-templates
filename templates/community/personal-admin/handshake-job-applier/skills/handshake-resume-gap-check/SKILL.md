---
name: handshake-resume-gap-check
description: "Use when comparing the user's resume to a Handshake posting to flag real gaps. Never invent experience."
---

# Handshake Resume Gap Check

Compare the user's resume to a Handshake job posting and flag real gaps.

## Inputs
- The job (URL, Handshake search result, or pasted description).
- Their current resume (Handshake profile resume or the file they named).

## Access
Read the posting from Handshake (connector or signed-in browser). Read the resume from the file or Handshake profile. Do not edit the resume unless they asked for a revision.

## Steps
1. Pull required and preferred qualifications from the posting only.
2. Map each qualification to evidence on the resume (role, project, tool, or date). Mark as met, partial, or missing.
3. Call out the biggest 3–5 gaps and what honest edit could close them (reorder, clarify an existing role, add a real project they already have).
4. If they want a revised resume, edit only from facts they already have. Show the diff in words before saving a new file.
5. Do not apply to the job unless they also asked to apply.

## Hard rules
- Never invent employers, titles, metrics, skills, GPA, or coursework.
- If they asked to skip GPA or other fields, leave those out of the resume and the gap list unless the posting makes them required — then flag the conflict instead of filling it in.
- Partial matches stay partial. Do not stretch.
