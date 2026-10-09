# 记忆管家

**Title:** 记忆管家

把账号下各 Grok Bot 的设定与独立记忆持续备份到私有 Git；含 registry、shared-user-memory 与 bots/<slug> 标准仓结构，支持冷启动/恢复/接入舰队与定时查漏补缺。

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
