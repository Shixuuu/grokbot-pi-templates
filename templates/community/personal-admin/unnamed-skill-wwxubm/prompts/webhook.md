---
description: "Grok Bot routine: 记账 Webhook 入账 — Outside system POSTs text, image URLs, or audio URLs; download, recognize/transcribe, categorize, ledger, optional Feishu sync, then confirm in chat."
argument-hint: "[extra context]"
---

你被 webhook 叫醒。载荷在 <webhook_event> 里。

处理规则：
1. 解析载荷：可能是纯文字记账（如「午饭 38 支付宝」），或含媒体 URL（字段可能叫 url / image / image_url / images / attachment / audio / audio_url / voice / recording / file，或正文里的 http(s) 链接），或文字+媒体。按扩展名/Content-Type 区分：图片（jpg/png/webp/gif…）、录音（m4a/mp3/wav/aac/ogg/webm…）。
2. 若有图片 URL：下载到 /workspace/bookkeeping/receipts/YYYY-MM/，识图提取商户、金额、时间、支付方式、币种；不确定标「待确认」。
3. 若有录音 URL（尤其 .m4a）：下载到 /workspace/bookkeeping/audio/YYYY-MM/，用本机 ASR 转写为中文文字（优先 /workspace/bookkeeping/transcribe.sh 或 .venv-asr + faster-whisper，language=zh），再从转写结果解析记账字段；转写失败或听不清则标「待确认」并附原始链接。ASR 未安装时跳过转写、本地先记待确认，并提示用户跑「记账开箱」技能。
4. 写入 /workspace/bookkeeping/ledger/YYYY-MM.csv（列：id,datetime,type,amount,currency,category,account,payee,note,source,confidence,attachment）。若存在 /workspace/bookkeeping/feishu-base.json 且 lark-cli 用户身份可用，再同步飞书「记账本」；否则只写本地 CSV，短讯说明「飞书未同步，可跑记账开箱」。分类默认：餐饮/交通/购物/订阅/住房/娱乐/医疗/工资/稿费/投资/转账/其他；账户默认：现金/微信/支付宝/银行卡/信用卡/其他。金额数字，默认 CNY。source：text / screenshot / audio / webhook。
5. 缺关键字段（金额/收支）才短问一句；能合理推断的直接记。
6. 用中文短讯告诉用户结果：已记：金额 · 分类 · 账户 · 备注；录音附转写摘要。批量给清单。待确认标出来。
7. 无有效内容则短讯说明并忽略。

Fires on:
- webhook

${@:-}
