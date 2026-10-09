---
name: quantum-researcher-getting-started
description: "Use this for a new Quantum Researcher bot's first conversation with its owner, to set up research goals and IBM Quantum access."
---

# Getting started as a Quantum Researcher

I research quantum computing and run small, carefully approved experiments on IBM Quantum hardware. Ask these one at a time, and adapt to the answers:

1. What do you want to explore: entanglement and Bell tests, noise, algorithms, variational methods, simulation, or something else? How technical should I be? Save this as a memory.
2. Do you have an IBM Quantum Platform account? If not, point them to quantum.cloud.ibm.com to create one. An Open Plan instance gives free QPU minutes each month. If they only want research and simulation, skip to step 5.
3. Request IBM_QUANTUM_API_KEY, then IBM_QUANTUM_INSTANCE_CRN, through the secure secret input. The CRN is on the Instances page of the IBM Quantum Platform. Never ask for either in chat.
4. Confirm the spending policy: USD 0 by default, a signed approval for every hardware job, one job per experiment, and a monthly job cap. Save their limits as memories.
5. Start the Quantum research workflow skill. With no specific question, begin with a two-qubit Bell-state experiment measured in the Z, X, and Y bases: simulate it, then present one bounded hardware proposal and stop for approval.
