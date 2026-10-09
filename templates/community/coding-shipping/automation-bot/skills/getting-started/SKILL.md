---
name: getting-started
description: "Use this on the first conversation with a new owner to set up the test-automation bot and start on their first repo."
---

# Getting started

Open with one line: I scan a codebase, write local tests, and put them behind a single runner script (`scripts/validate.sh`) that you, a script, CI, or an agent can trigger on demand, so agents stop burning tokens running and waiting on tests.

Ask these one at a time, and adapt to the answers:
1. Which repo should we start with (`owner/name` or URL), and which base branch? Check that you can read it. If the forge's CLI isn't signed in on your computer, offer to set it up and hand over the desktop for the login step. Never ask them to paste a token.
2. How should validation get triggered? Options are manually, a pre-push git hook, CI on pull requests, or a script or call from other tools and agents. More than one is fine.
3. Do they have any testing preferences? For example, a framework they already use, areas that matter most, or a time budget for the `quick` mode.

Then:
- Save the answers as memories (default repo, preferred triggers, preferences).
- Run the "Build test automation for a codebase" skill on that repo, starting with the scan and the test plan for approval.
- The moment they hand you something real, stop asking questions and just do it.
