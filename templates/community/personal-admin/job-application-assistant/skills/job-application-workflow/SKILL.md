---
name: job-application-workflow
description: "Use this when polishing a master resume, maintaining an interested-jobs list, or tailoring a resume and cover note to a job posting - drafts only until the user explicitly approves applying to a named role."
---

# Job application workflow

## Hard rules

- Never invent credentials, dates, employers, degrees, bar admissions, skills, or metrics the user did not provide.
- Never submit, upload, Easy Apply, send, or otherwise deliver a resume, cover letter, or application without an **explicit yes in chat naming that specific job/role**.
- Prefer remote roles when the user said so. Treat in-person/hybrid as parked unless they match the user's location exceptions or they flag strong interest.
- Build or update a **master interested list** before pushing applications. Shortlist and tailor first; apply only after the list process and a named yes.

## Master resume

1. Ingest the user's materials (PDF, doc, paste). Ask only for missing facts that change the draft.
2. Produce a clean master resume: role-agnostic summary, experience, education, credentials. Keep stronger true framing the user locked; omit lines they asked to drop.
3. Save a durable master file in the workspace and keep memories of locked edits (what to omit or emphasize).

## Interested-jobs list

Maintain a shared list with sections such as Active, Candidates, and Parked. Each entry needs title, employer, link, location/remote notes, credential fit, and status (not tailored / tailored / awaiting yes / applied only after yes).

When browsing boards:

- Prefer sites that load reliably when another board is bot-walled.
- Filter to the user's credential fit and seniority band (match level or slightly above unless they say otherwise).
- For broad years-of-experience postings, follow the user's rule on whether clinic/school years count; treat practicing-attorney / post-admission / in-house minimums more strictly.

## Tailor per posting

1. Read the posting. Map required themes to real facts from the master resume only.
2. Deliver a tailored resume (and short cover note when asked) for the user to review.
3. Do not apply until they name that role and say yes. After yes, follow their send path; otherwise leave drafts in the workspace.

## Reporting

Summarize shortlists and drafts for the user. Do not fan out applications or message employers on your own initiative.

## Dual PDF formats (required)

Every resume and cover PDF export must support **both**:

1. **ATS / machine-searchable:** single column; standard headings (Professional Summary, Skills, Professional Experience, Education, Licenses and Credentials); contact in body; text-selectable PDF; no multi-column layouts, tables used for page layout, icons, or graphics; ASCII dates; parse-test with pdftotext or select-all paste.
2. **Quiet SpaceX-inspired:** same single-column selectable text; tighter typography; charcoal name and section headings; thin horizontal rules under section headings; generous whitespace; minimal chrome. Default visual theme for owner-facing packs unless they ask otherwise.

### Aligned text (required on both formats)
Job and education blocks must line up cleanly:
- Row 1: title LEFT, dates RIGHT
- Row 2: employer or school LEFT, location RIGHT
Implement with CSS flex rows, never HTML tables. Contact line stays centered under the name. Section headings stay centered.

### Pipeline notes
Prefer HTML to Chrome print-to-PDF (US Letter, ~0.50 in margins, Liberation Sans / Arial, body ~10.5 pt). Filenames: `{Role}_RESUME_{OwnerName}.pdf` / `{Role}_COVER_{OwnerName}.pdf`. DOCX only if a portal asks or looks like legacy Taleo/iCIMS.

## Style
Prefer periods, commas, parentheses, or ASCII ` - `. Do not use em dashes or en dashes in drafts.

## Demo sample
The example-demo-resume skill holds a fictional Avery Quinn master for illustration. Never treat demo facts as the owner's.
