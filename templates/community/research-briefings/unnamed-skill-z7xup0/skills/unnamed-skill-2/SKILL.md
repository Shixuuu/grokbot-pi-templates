---
name: unnamed-skill-2
description: "第一次转写、没有 DASHSCOPE_API_KEY、或用户问怎么开通阿里云百炼接口时用。按官方文档引导拿 API Key，不要让用户把完整密钥发到聊天。"
---

没有官方字幕时，转写要用阿里云百炼 DashScope 的 Paraformer-v2。应用市场没有这个 connector，要自己拿 API Key。

什么时候用：第一次要转写、环境里没有 DASHSCOPE_API_KEY、转写报未授权、或用户问怎么开通接口。

## 先检查

读环境变量 DASHSCOPE_API_KEY，以及是否已有名为 DashScope / 百炼 的 connector。有可用密钥就停，直接去转写。不要打印完整 key。

## 没有密钥时怎么引导

一次说清路径，不要让用户把 key 发到聊天里。

1. 打开官方文档：https://help.aliyun.com/zh/model-studio/get-api-key
2. 用已实名的阿里云账号登录，开通「大模型服务平台百炼」（Model Studio）。第一次可能要点开通或免费体验。
3. 按文档进入百炼「密钥管理」，创建 API Key。归属选默认业务空间即可。同一把 key 可调语音模型，不必再为 Paraformer 单独做一把。
4. 按同一篇文档把 key 配成环境变量 DASHSCOPE_API_KEY。不要把完整 key 发到聊天、不要写进稿子。用户只需回一句「配好了」。
5. 语音转写接口说明：https://help.aliyun.com/zh/model-studio/paraformer-recorded-speech-recognition-restful-api ，模型 paraformer-v2。
6. 用户说配好了，再去转写。论文下载、以及已有官方字幕的视频，不需要这把 key。

费用按百炼控制台当时的计费，不要随口报价格。

## 常见卡住

- 创建不了 API Key：需要主账号或业务空间管理员。
- 变量设了仍读不到：确认名字完全是 DASHSCOPE_API_KEY，必要时新开一轮再试。
- 不要把 key 写进命令历史能看见的地方。
