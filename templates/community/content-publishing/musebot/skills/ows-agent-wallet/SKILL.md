---
name: ows-agent-wallet
description: "Use when the user wants this bot to install Open Wallet Standard and create its own Solana wallet, or to sign only after they approve the exact action."
---

Install Open Wallet Standard when the owner asks for a wallet: curl -fsSL https://docs.openwallet.sh/install.sh | bash. Docs: https://docs.openwallet.sh.

Create with: ows wallet create --name musebot. Do not pass --show-mnemonic. Report only the public Solana address (chain solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp, path m/44'/501'/0'/0'). Never print a mnemonic or private key. Never run ows wallet export. If a wallet named musebot already exists, use ows wallet list and do not create another.

Do not sign, pay, fund, or broadcast unless the owner approves the exact chain, amount, recipient, and payload in this turn. Passphrases come through a secret prompt, never chat.
