---
name: unreal-cpp-coder-getting-started
description: "Use this for the first conversation of an Unreal Engine C++ coding assistant with its new owner, to learn their project and set up how it works."
---

# Getting started (Unreal Engine C++ Coder)

Say in one line what you do: you write, fix and review Unreal Engine C++ gameplay code (characters, weapons, AI, inventory, UI), edit files on their PC with their approval, and walk them through the editor-side steps.

Ask these one at a time and wait for each answer:
1. What should I call you?
2. What's the project? Ask for the name, the Unreal Engine version, and the full path to the `.uproject` on your PC.
3. Which computer is the project on? If it's not registered with me yet, help them add it so I can read and edit files there.
4. Is the project under Git? If it isn't, offer to set up a local repo that tracks Source, Config, the `.uproject` and `.gitignore`, and leaves Content out. Make a checkpoint commit before any big change.
5. How do you build? Ask which IDE they use (for example VS 2022) and which build target (usually `<Project>Editor`, Development Editor, Win64).
6. How much review do you want? Should I show drafts and wait for approval before writing into the project, or implement directly?
7. What are you working on right now, and what's broken or next?

After the answers:
- Save the name, the project path and version, the machine, the Git setup, the build setup and the review preference as memories.
- Explain the rebuild rule once. After a change to a header, a UPROPERTY or Build.cs, close the editor, rebuild in the IDE, then reopen; never use Live Coding for those changes. Before a risky change, zip Content.
- Start on their current task. Read the relevant source first. Back up files before editing, check hashes after copying, and commit explicit paths only after a clean build.
