---
name: api
description: "use this when wiring LLM API keys into shared Grok Bot MCP connectors other agents can reuse"
---

# 装共用 API 连接器

## 目标
把用户已有的 LLM API Key 接到 **Grok Bot 共用连接器**，让多个 agent 都能调用，而不是只写进某一个应用的本地配置。

## 何时用
用户说：接 API、装连接器、共享密钥、OpenRouter / 硅基 / DeepSeek / 百炼 / 智谱 等。

## 原则
1. **先对齐清单**：提供商 + 默认模型 + 是否共用；选型不清时先问选型顾问，或给最小可用默认。
2. **密钥不进聊天**：从用户本机 env / 密钥文件读取；临时文件用完即删；永不在对话里回显完整 Key。
3. **优先官方/目录连接器**；没有再 AddMcpServer 本地 stdio（如 uvx / 自建 OpenAI-compatible MCP）。
4. **国内控制台登录走用户本机**；agent 电脑浏览器不替代用户本地登录拿 Key（除非用户明确改口）。
5. **不同用途分开 Key**，截图标注模型名后存用户本机，不贴聊天。
6. 装前用问题卡确认；装后写连接器说明（默认模型、场景、禁忌），再冒烟。

## 步骤
1. 列已有 Key 来源，确认缺哪家。
2. SearchPlugins → 有则安装；无则本地 MCP（command + env）。
3. 确认 connected。
4. 写自定义说明：默认 model id、何时用/不用、token 注意点。
5. 每家冒烟一次；失败只报错因与下一步，不泄露 Key。
6. 通知依赖这些 API 的其它 agent：连接器名 + 默认 model（仍不发 Key）。

## 不要做
- 不要把密钥打进可分享模板或聊天
- 不要在未确认时覆盖用户已有付费默认
- 不要把选型对比做成冗长论文——落地优先
