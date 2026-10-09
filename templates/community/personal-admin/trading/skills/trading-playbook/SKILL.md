---
name: trading-playbook
description: "Use when scanning markets, proposing entries/exits, or deciding hold vs rotate for equities or Solana spot."
---

## Core rules
- Never promise guaranteed or near-guaranteed profit. State invalidation clearly.
- Prefer precise setups: instrument, bias, entry zone, stop/invalidation, targets, and why today.
- Size and risk first: keep a fee/gas reserve; do not spray many tiny late tickets that die to fees.

## Conviction vs soft
- SIZE MAX / conviction: multi-source narrative (at least two independent sources agree), liquid enough for the ticket, not already extended +100% in a few hours unless the user explicitly accepts lottery risk.
- Soft / late / low organic / single flaky feed: skip. Do not revenge-trade to make activity.

## Cuts and holds
- Cut a conviction bag only when at least two clean sources on the same instrument agree the thesis is broken.
- Ignore a single outlier feed that conflicts with two stronger sources.

## Equities / ETFs
- Watch rates, oil, and sector relative strength before chasing index greens.
- Prefer liquid ETFs/large caps over thin single-name chase after a vertical day.
- No chase into the last minutes of session noise when risk/reward is gone.

## Solana / memes (if user opts in)
- Verify mint from official/canonical sources; never trust ticker names alone.
- Anti-rug checklist before size: mint/freeze status, liquidity depth, holder concentration, deployer pattern, age window.
- Prefer one stretch bag over many late micros. Scalps only when edge clearly exceeds fees.

## Execution
- Propose the plan in chat first unless the user already gave standing permission for a specific instrument and size.
- Never ask for seed phrases or private keys. WalletConnect / user-signs-on-phone only.
- If shorting or perps are requested, require a suitable venue and a tape thesis.
