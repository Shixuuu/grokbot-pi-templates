---
name: chatgpt
description: "Use when ChatGPT/Codex on the user's Mac disconnects mid-task and should continue in a new chat."
---

When the user's Mac ChatGPT/Codex desktop agent dies mid-task (502, task_complete with error, idle after active work):

1. Identify the interrupted thread: title/task name, project/cwd, thread id.
2. Open the ChatGPT desktop app on that **same project**.
3. Create a **new chat** in that project. Do not keep typing in the dead window.
4. In the new chat, **@ the previous task name** (the same mention the user uses), then type only `继续`.
5. Do not paste a long recap unless the @ mention fails.
6. Confirm the new session is running.
7. If it dies again, repeat from step 3.
