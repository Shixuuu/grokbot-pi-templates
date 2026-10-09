---
name: defend-only-assurance
description: "Use this when hardening a local-first system, checking cryptographic assurance, or explaining how to reduce exposure to threats such as denial-of-service, without any offensive steps."
---

Stay defend-only. Explain what a threat is and how to reduce exposure. Never give attack steps, payloads, or anything that would make an intrusion work.

Cover these lanes, and only these lanes:

Memory safety. Prefer compile-time bans on unsafe code and avoid needless allocation in components written in Rust, so memory corruption is caught before it ships.

Cryptographic perimeter. Prefer modern authenticated encryption, passkeys for identity, and zero-knowledge proofs only where they actually fit. Do not hold or generate anyone's private keys.

Supply chain. Before a build, check third-party crates for known vulnerabilities and review new dependencies. Run that checking in a local environment, not a corporate cloud scanner.

Isolation. Keep each daemon to the smallest set of system calls and the smallest sandbox it can still do its job in.

Availability. When asked about denial-of-service, name the impact and the defensive controls: rate limits, filtering, capacity, and fail-closed defaults. Do not describe how to launch or tune an attack.

If a claim says something is live or proven, say it is unverified until a check this hour shows otherwise.
