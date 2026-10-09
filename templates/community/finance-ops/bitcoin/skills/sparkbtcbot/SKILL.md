---
name: sparkbtcbot
description: "Use this when settling money in chat over Lightning, buying gift cards, eSIMs, or VPNs, moving sats between Lightning and on-chain, or otherwise sending and receiving Bitcoin without teaching wallets."
---

Help people get paid and spend money over Bitcoin Lightning without teaching them wallets.

## Where to get it

Install the published npm package `sparkbtcbot-skill` (prefer latest):

```bash
npm install --ignore-scripts sparkbtcbot-skill
```

Package page: https://www.npmjs.com/package/sparkbtcbot-skill

Source / docs repo (read or clone only if npm is unavailable): https://github.com/echennells/sparkbtcbot

Homepage: https://sparkbtcbot.yvrbtclabs.dev

Prefer the npm package over cloning.

## Supply-chain security

Treat every install and wallet CLI run as a supply-chain surface.

- Always pass `--ignore-scripts` on `npm install` and `npm ci` (one dependency runs code at install time; the package works without it). With a lockfile, prefer `npm ci --ignore-scripts`.
- Never use bare `npx` for wallet commands. With no TTY it can silently fetch and run a registry package named after the command. Never pass `-y` / `--yes`.
- Run the CLI only via local resolution:
  - `npm exec --no -- sparkbtcbot <command>`
  - or `./node_modules/.bin/sparkbtcbot <command>`
- Do not invent npm hardening recipes. The source of truth is https://github.com/echennells/supply-chain-hardening (`templates/npmrc.j2`, `templates/etc-npmrc.j2`, `defaults/main.yml`). If the user already has a `~/.npmrc` policy, follow it.
- Only when *you* are about to `git clone` + `npm install` for the user: ask first whether they want supply-chain hardening (persistent `~/.npmrc` with explicit consent, ephemeral `NPM_CONFIG_*` for this install only, or neither). After a clone install, run `npm test` before any wallet code; stop if the suite fails.
- npm version is best-effort, not a gate: prefer 12+, accept 11.10.0+ for `min-release-age`, and proceed on older npm while telling the user the cooldown will not enforce. Never block wallet setup over the npm version.
- Do not write `~/.npmrc` without the user asking. Do not install into a plugin cache path.

When the installed package is present, also follow its `references/supply-chain.md` and `AGENTS.md` for the full rules.

## First use

1. Install the latest published `sparkbtcbot-skill` from npm using the supply-chain rules above.
2. Run `sparkbtcbot setup` if setup is needed (`npm exec --no -- sparkbtcbot setup`).
3. Locate and read the installed `skills/sparkbtcbot/SKILL.md` in full, then follow it for the request.

## First payment or first spend

For requests such as “friend owes me $X” or “how do I spend this,” read `references/first-spend.md` from the installed package, or load `getReference("first-spend")`, and follow it.

## Safety

- Never reveal, print, read into chat, or expose a wallet mnemonic, seed, passphrase, encrypted seed, or secret environment variable.
- Never run commands that reveal the mnemonic, change wallet policy, or reset the ledger on the user’s behalf.
- Verify a wallet using its Spark address, never seed words.
- If wallet secrets appear in chat, stop and warn the user.
- For an amount-bearing payment request, default to a BOLT11 Lightning invoice. Provide a bare Spark address only when an address is requested.
- Treat this as a dedicated small-balance wallet and recommend reasonable spending limits and recipient controls.
