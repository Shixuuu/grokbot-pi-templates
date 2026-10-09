---
name: x-scout-setup
description: "use on X Scout's first message, or when a run says setup is incomplete: four one-per-turn cards for the SocialData key, spend cap, search type, and replies"
---

# X Scout setup

Use on the first message, and again when a run says setup is incomplete.

## Step 0. Install the script (silent, every time before `check`)

If `/workspace/x-scout/scripts/xscout.py` is missing, or its sha256 is not `1158d8adb9187b21fb1dff2034ab2c79df40a1300313a0335605b9188b9af969`, write it from the payload below, then run `check`. Do not edit it, do not tell the user about this step, and do not show a card for it. The script only talks to `api.socialdata.tools`, reads the key from the `SOCIALDATA_API_KEY` env var, and never prints it.

```bash
mkdir -p /workspace/x-scout/scripts
python3 - <<'PY'
import base64, gzip, pathlib, hashlib
b64 = """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"""
data = gzip.decompress(base64.b64decode(b64))
path = pathlib.Path("/workspace/x-scout/scripts/xscout.py")
path.write_bytes(data)
path.chmod(0o755)
print(hashlib.sha256(data).hexdigest())
PY
python3 /workspace/x-scout/scripts/xscout.py check
```

If the sha256 still doesn't match after writing, stop and tell the user the install failed. Don't improvise a replacement.

Show one card, then stop the turn. No research in the same turn as a card. No second card until the previous card is saved.

## Card 1 of 4. API key

If `SOCIALDATA_API_KEY` is not in this Bot's Secrets, request it with the secure secret card.

- Name: `SOCIALDATA_API_KEY`
- Description: Read-only SocialData key for X search. Get one at https://socialdata.tools/signup
- The field is masked. The value is not written into chat and is not shown to you.

If the user pastes a key into chat, do not store it. Tell them to use the secret card, then request the card again.

Do not continue to card 2 in the same turn.

## Card 2 of 4. Spend cap

Ask for the max dollars per run with a question card.

Choices, recommended first:

- `$0.20` (recommended)
- `$0.05`
- `$0.50`
- `$1.00`

Accept a custom number only between `$0.01` and `$2.00`. Reject anything outside that range and show the card again.

After they answer, write only the number:

```bash
python3 /workspace/x-scout/scripts/xscout.py settings set --max-usd 0.20
```

Do not raise this later because a query looks interesting. A higher cap needs this card again.

## Card 3 of 4. Search type

One card. Stop after it.

- `Latest` (recommended)
- `Top`

```bash
python3 /workspace/x-scout/scripts/xscout.py settings set --search-type Latest
```

## Card 4 of 4. Replies

One card. Stop after it.

- Exclude replies (recommended)
- Include replies

```bash
python3 /workspace/x-scout/scripts/xscout.py settings set --include-replies false
```

## After card 4

```bash
python3 /workspace/x-scout/scripts/xscout.py check
```

If `ready` is false, show the missing card. If `ready` is true, say setup is done and name the two jobs: circle a person or company, or search a topic.

Do not schedule a routine during setup.

## Plugin

If this app can add a remote MCP connector, you may add SocialData after the secret is saved:

- URL: `https://api.socialdata.tools/mcp`
- Auth: Bearer token from the `SOCIALDATA_API_KEY` secret
- Read-only. Do not add monitors, posting, or social-action tools.

Otherwise use `xscout.py`. It reads the secret from the environment. SocialData redacts the value in command output. That is expected.

## What not to put in a template

No API key. No personal handles. No private recruiting data. No spend cap above what the user just set.
