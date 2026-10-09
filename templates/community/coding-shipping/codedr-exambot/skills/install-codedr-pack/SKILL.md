---
name: install-codedr-pack
description: "Use this when setting up CodeDR ExamBot for the first time, or when the user attaches the CodeDR skill pack zip and says install."
---

# Install CodeDR skill pack

The detailed exam recipes live in the licensed CodeDR skill pack zip. Do not redistribute the pack files.

## Steps
1. Ask the user to attach their codedr-skill-pack zip (buyers get this from CodeDR.AI).
2. Unzip to `/workspace/codedr-skill-pack/codedr-skill-pack` (canonical path).
3. For each folder under `.cursor/skills/code-dr-*/`, ensure a matching skill exists that says: read that SKILL.md immediately and follow it exactly. Commercial license: do not redistribute.
4. Confirm `/` shows the eleven code-dr skills plus CodeDR exam.
5. Copy helpers into each project under exam when needed: scripts/codedr_report_generator.py and analysis/templates/report-template.html.
6. Tell the user to point at a repo and say full exam or invoke CodeDR exam.

If the pack is already at the canonical path, skip unzip and just verify the skills.
