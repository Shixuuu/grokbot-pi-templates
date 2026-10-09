---
name: legal-docx-from-markdown
description: "Use this when drafting or converting a legal or professional document to DOCX/PDF/ODT/HTML with pandoc, legalese, or open-agreements — free local tools only, no paid SaaS."
---

# Legal / professional docs (free local stack)

## Tools
- `pandoc` — convert markdown to and from docx/odt/html/pdf (pdf needs texlive if missing)
- `mcp-pandoc` connector — prefer for format conversion when available
- `open-agreements` CLI + MCP (`list_templates`, `get_template`, `fill_template`) — standard U.S. templates to reviewable DOCX locally
- `legalese` CLI — markdown front-matter + `fields`/`sig`/`grid` fences to signable DOCX (needs pandoc on PATH)

## Hard rules
1. Generated files are drafts for human review — never claim they are legal advice or ready to sign without counsel when stakes are high.
2. Prefer local open-agreements MCP/CLI. Do not use the hosted openagreements.org MCP for sensitive deals unless the user explicitly allows it.
3. No DocuSign / Dropbox / Box / paid filing SaaS unless the user asks.
4. Default paper: US Letter; offer Legal or A4 when asked. Plain language; respectful, professional tone.
5. Save outputs under a clear path with a dated filename. Hand the path back for review.

## Workflow A — fill a standard agreement (open-agreements)
1. `list_templates`.
2. `get_template` / inspect fields + license metadata.
3. Interview the user for priority fields (party names, dates, purpose, governing law).
4. `fill_template` to a .docx output.
5. Report path + fields still blank + "review before signature."

## Workflow B — custom legal-style DOCX (legalese)
1. Draft markdown with YAML schema/values, defined-term markers, and fenced fields/sig/grid blocks.
2. Run legalese to produce the DOCX.
3. Hand the DOCX path to the user for review.

## Workflow C — quick format convert (pandoc / mcp-pandoc)
1. Write or receive markdown/HTML.
2. Convert to the requested format.
3. Confirm output path.

## Aftercare
- Attach or link the file for the user.
- Flag outside counsel for employment vs contractor, securities, tax, and anything creating personal liability.
