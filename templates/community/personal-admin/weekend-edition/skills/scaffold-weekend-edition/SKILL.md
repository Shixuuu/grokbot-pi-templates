---
name: scaffold-weekend-edition
description: "use this when installing Weekend Edition, when compose_newspaper.py is missing, or when scaffolding/repairing the newspaper pipeline under /workspace/weekend-edition/"
---

# Scaffold weekend-edition pipeline

Create or repair the newspaper pipeline under `/workspace/weekend-edition/` so compose can run. Safe for marketplace imports. **Never overwrite an existing `config.json`.**

## When to run

- First run after installing this bot / template
- `compose_newspaper.py` is missing
- Reader asks to scaffold or repair the pipeline

## Steps

1. Create dirs (ok if they exist): `/workspace/weekend-edition/inbox`, `sources`, `out`, `assets`, `fonts`.
2. Prefer copying from this skill's local `files/` folder when present (`/home/box/agent-data/workflows/scaffold-weekend-edition/files/`): copy `compose_newspaper.py`, `print_prep_image.py`, `config.example.json`, `SETUP.md`, and optional `PROFILE.md` / `INSTALLER.md` / font if present.
3. If `files/` is missing (typical marketplace import), assemble the pipeline from companion skills `weekend-edition-pipeline-p1` through `weekend-edition-pipeline-p3` (each body is a base64 fragment; concatenate in order). Fallback: `/home/box/agent-data/workflows/scaffold-weekend-edition/pipeline.tgz.b64`. Then inline:

```
import base64, io, tarfile
from pathlib import Path
root = Path('/workspace/weekend-edition')
root.mkdir(parents=True, exist_ok=True)
for d in ('inbox','sources','out','assets','fonts'):
    (root/d).mkdir(exist_ok=True)

def skill_body(name):
    p = Path(f'/home/box/agent-data/workflows/{name}/SKILL.md')
    if not p.exists():
        return ''
    text = p.read_text().strip()
    if text.startswith('---'):
        parts = text.split('---', 2)
        text = parts[2].strip() if len(parts) >= 3 else text
    lines = [ln.strip() for ln in text.splitlines() if ln.strip() and not ln.startswith('#')]
    return ''.join(lines)

b64 = ''.join(skill_body(f'weekend-edition-pipeline-p{i}') for i in range(1,4))
if not b64.startswith('H4sI'):
    alt = Path('/home/box/agent-data/workflows/scaffold-weekend-edition/pipeline.tgz.b64')
    if alt.exists():
        b64 = alt.read_text().strip()
if not b64.startswith('H4sI'):
    raise SystemExit('pipeline bundle missing — reinstall Weekend Edition or copy files/ from scaffold skill')
raw = base64.b64decode(b64)
with tarfile.open(fileobj=io.BytesIO(raw), mode='r:gz') as tar:
    tar.extractall(root)
print('extracted', sorted(p.name for p in root.iterdir() if p.is_file()))
```

4. If the nameplate font is still missing, download UnifrakturMaguntia-Book.ttf from Google Fonts (ofl/unifrakturmaguntia) into `/workspace/weekend-edition/fonts/` (optional; Times-Bold fallback works).
5. **Do not create or overwrite `config.json`.** If missing, run SETUP.md intake next and write config from answers using `config.example.json` as the shape.
6. Confirm to the reader: pipeline ready; whether config exists; remind them to connect the X plugin for bookmarks.

## Rules

- Never delete inbox, sources, slate, watermark, or out PDFs.
- Never invent paper name / handle / zip.
- Idempotent: re-running repairs missing files only.
