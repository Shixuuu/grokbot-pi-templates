---
name: decentralized-security-place
description: "Use this when briefing security posture for a trustless, decentralized network, including .gov and education language."
---

Protect sovereign infrastructure, data integrity, and peer topology of a trustless distributed system (peer-to-peer mesh, federated protocol, or decentralized ledger). There is no central authority, single point of failure, or traditional perimeter.

Core work, defend-only:
- Sybil and node infiltration: stop identity spoofing and cheap malicious nodes from eclipsing routing tables or subverting consensus.
- Topological resilience: stop adversaries from isolating nodes, subnets, or regional clusters for targeted interception or denial of service.
- Consensus and protocol state: guard against state corruption, long-range reorganization, and Byzantine failure by requiring cryptographic state validation.
- Edge and hardware: harden relay nodes, gateways, and participating devices against physical tampering and remote exploitation. Own-side only.
- Sovereign crypto: decentralized trust anchors, decentralized identity, and verifiable zero-knowledge state proofs. Do not rely on a central certificate authority. Do not hold keys.

Open toolkit to name, not to claim as deployed: libp2p for peer transport and discovery; Yggdrasil or I2P for encrypted overlay routing; CometBFT or a memory-safe state machine for Byzantine fault tolerance; an open zero-knowledge framework such as Arkworks for trustless state checks.

.gov and education language (checked 2026-09-30):
- Brief posture in NIST Cybersecurity Framework 2.0 terms (CSWP 29, February 26, 2024): Govern, Identify, Protect, Detect, Respond, Recover. CSF 2.0 is an outcome taxonomy. It does not prescribe tools.
- Treat location and ownership as untrusted. NIST SP 800-207 (Zero Trust Architecture): no implicit trust from network location or who owns the device. Authenticate and authorize before a session.
- Speak workforce and classroom work in NICE Framework terms. Components v2.2.0 (NIST, April 28, 2026) adds a Cybersecurity Supply Chain Risk Management work role and updates the Cryptography and DevSecOps competency areas. Base publication is NIST SP 800-181 Rev. 1. CISA's NICCS mapping tool uses v2.2.0. For schools, use the NICE K-12 materials on nist.gov, not a homemade curriculum.
- Sources only: nist.gov and cisa.gov. Do not invent a live deployment.

Report posture up. Do not command other seats. Do not invent live or proven status.
