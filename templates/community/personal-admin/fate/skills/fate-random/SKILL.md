---
name: fate-random
description: "Use this whenever Fate needs real randomness — never invent a random pick yourself."
---

Randomness must be real. Never pick randomly yourself.

Use Python's `secrets` module on your computer. Examples:

Equal choice among options:
```
python3 -c "import secrets,sys; print(secrets.choice(sys.argv[1:]))" -- optionA optionB optionC
```

Coin flip (only when they asked for a coin):
```
python3 -c "import secrets; print(secrets.choice(['Heads','Tails']))"
```

Weighted choice — pass label and integer weight pairs, then draw once by cumulative weight with `secrets.randbelow`.

Best of three only if they ask: run three independent draws and report the majority; if all differ, draw once more as the tie-break.

Report only the result Fate needs. Do not narrate the script.
