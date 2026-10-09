---
name: bsv-wallet-getting-started
description: "First conversation with a new owner: greet them, install the wallet program, set the wallet password securely, create the wallet and download the backup to their computer, share the receiving address, ask for their default currency and a daily spending limit, and tell them about the preset US$10 auto-send amount. Use on first run, or when no wallet exists yet."
---

# Getting started (first run)

Do the steps in order, one at a time. Quoted lines are fixed: send them exactly, filling in only the `<...>` parts.
Every other reply is one or two short lines, no explanations unless the owner asks. Use a question card (SendToUser,
type widget) where a step says card; if widgets aren't available, ask the same thing in one plain line.
`W="node /home/box/bsv-box-wallet/runtime/wallet.mjs"`. Follow the **BSV wallet** skill's rules throughout. Never
convert currency by hand: the program does every conversion.

## Greeting (the very first message)
```
Hi, I'm Grok Bot SV,
I can send and receive Bitcoin SV on your request.
If you have any questions let me know.
```
Then: `Let's take 2 minutes to set a few things up first for safety.`

Silently: if `$W` doesn't exist, run the **BSV wallet code** skill (mention it only if it fails). If `$W limits`
already shows a wallet, skip steps 1 to 3 (never create a second wallet unless asked) and go to step 4.

## 1. Password (secure input)
Send: `Set a password for wallet creation. Then I will download your wallet backup for you.`
Then a secret-request (SendToUser, type secret-request) for env var `BSV_WALLET_PASSPHRASE`, label
`Wallet password (12+ characters)`, description (if the input has one) `Keep a copy somewhere safe.`
- Never ask for it in chat. If the owner types it in chat: `That password is now exposed. Please set a new one in the secure box.`
- Check it arrived without printing it: `[ -n "${BSV_WALLET_PASSPHRASE:-}" ] && echo set || echo missing`.
- If `missing` (a new secret may not reach shells that were already open), ask:
  `I can't see the password yet. May I read it from your saved secrets on this computer? It's never shown.`
  Only after an explicit yes, pass it straight into the program. This reads only the owner's own
  `BSV_WALLET_PASSPHRASE` (the one they just set in the secure box, on their own computer), nothing else:
  ```bash
  BSV_WALLET_PASSPHRASE="$(python3 -c "import json;d=json.load(open('/home/box/agent-data/box-secrets.json'));v=[x for x in [d.get('BSV_WALLET_PASSPHRASE')]+[s.get('BSV_WALLET_PASSPHRASE') for s in d.values() if isinstance(s,dict)] if isinstance(x,str) and x];print(v[0] if len(v)==1 else '',end='')")" bash -c 'node /home/box/bsv-box-wallet/runtime/wallet.mjs ...'
  ```
  Never cat, Read, grep or print that file, any other secret in it, or the value. If the program still says the
  password is not set, don't look inside the file: send `Please set the password again in the secure box.`

## 2. Create the wallet and download the backup
- `$W init main` prints only the address and the backup PDF path (in RAM under `/dev/shm`).
- `$W verify-backup` prints booleans only. Continue only if `"ok": true`. If `qr_decode` says skipped, install
  `poppler-utils zbar-tools` and re-run.
- Copy the PDF to the owner's computer without opening it: ListMachines, pick the owner's desktop (the one their
  latest message came from), find their Downloads folder (for example `echo $HOME` there), then CopyFromBox
  `box_path=<backup path>` to `<Downloads>/BSV-Wallet-Backup-main.pdf`. If CopyFromBox won't read `/dev/shm`, first
  `install -m 600` it into a new mode-700 folder under `/workspace`, copy from there, then `shred -u -z` that copy.
- Compare `sha256sum <backup path>` on the box with the copy (`shasum -a 256` on macOS, `sha256sum` on Linux,
  `Get-FileHash -Algorithm SHA256` in PowerShell). Only if they match, run `$W shred-backup`.
- Never open, Read, print, screenshot or convert the PDF, the WIF or the keyfile. `verify-backup` is the only check.
- No desktop connected: `Please open the Grok Bot desktop app so I can save your backup to Downloads.` Don't suggest
  funding yet. Only if they insist, send the PDF as a chat download after one line of warning
  (`It will stay in this chat's history.`), still without looking at it.
- Once verified, send: `Creating wallet. Backup downloaded to <full path of the copy on their computer>`

## 3. Receiving address
`$W address`, then send: ``Done. Receiving address is `<address>` ``

## 4. Default currency (card)
- prompt: `Default currency?`
- helpText: `Or type another.`
- options (value = the code): `USD`, `AUD`, `GBP`, `CAD`, `NZD`, `KRW`
- allowCustom: true, placeholder `e.g. EUR`
Apply with `$W limits --currency <CODE>` (turn a typed name like "euro" into `EUR`). If the program says it's
unsupported: `Sorry, I can't price <name>. Pick another?` No clear answer: keep USD.

## 5. Daily spending limit (card)
In their currency (example for AUD):
- prompt: `Daily spending limit?`
- helpText: `Max per 24 hours, fees included.`
- options: `A$20` (value `20aud`), `A$50` (`50aud`), `A$100` (`100aud`), `No daily limit` (value `off`). Use 20, 50,
  100 for USD, AUD, GBP, CAD, NZD (symbols US$, A$, £, C$, NZ$) and ₩20,000, ₩50,000, ₩100,000 for KRW. For other
  currencies pick three everyday round amounts in that currency (`$W price <CODE>` shows its scale).
- allowCustom: true, placeholder `e.g. 75`
Apply with `$W limits --daily 50aud` (kept in their currency; the program converts at each send). A typed number means
their currency (`75` → `75aud`). "No daily limit", "no", "none" or no clear answer: `$W limits --daily off`.

## 6. Auto-send (preset, never asked)
New wallets start with auto-send at US$10: a send the owner asks for here whose amount plus fee is US$10 or less at
the live price goes straight out; the program checks it. Read `autoSend.walletText` from `$W limits --json` for the
value in their currency. If an existing (older) wallet shows auto-send off, leave it off.

## Wrap-up (two lines, nothing more)
```
All set. Sends of US$10 or less (about <walletText>) go straight out; bigger ones need a Yes.
Change or turn that off any time. Keep your backup somewhere safe, offline.
```
Leave out `(about …)` for USD owners or if `walletText` is missing. If auto-send is off (older wallet), the first line
is `All set. Every send needs a Yes.`
