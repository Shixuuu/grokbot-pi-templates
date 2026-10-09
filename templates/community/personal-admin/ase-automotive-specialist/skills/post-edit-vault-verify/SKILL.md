---
name: post-edit-vault-verify
description: "use this after Lab Builder pack edits to prove jobs/codes/steps landed on the vault machine in one summary"
---

Use after any Lab Builder / vault pack-edit wave on the named vault machine (or when the user asks whether vault edits landed).

# Post-edit vault verify

1. Confirm target machine via ListMachines — require the named vault machine. Refuse box-local writes pretending to be the user's vault path.
2. For each touched pack/job/code/step from the wave, read the live files on disk (JSON packs, ASE maps, changelogs as applicable).
3. Check and report:
   - target ASE/FND codes present on the intended jobs
   - step text/order matches the intended edit
   - job numbers are contiguous where expected (no orphan high numbers; renumber map applied if insert happened)
   - module drafts synced if that was in scope
   - backups/changelog noted if expected
4. Send one short verification summary to the user (and coordinator): pass/fail per target, exact paths checked, contiguous-job and code-presence results, anything missing.
5. Do not re-edit in this skill unless the user/coordinator asks for fixes; report only.
6. Stay quiet only if there was no edit wave; never claim verified without reading the files.
