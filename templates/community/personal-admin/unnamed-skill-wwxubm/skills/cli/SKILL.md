---
name: cli
description: "use this when a new bookkeeping bot starts, Feishu/lark-cli is missing or not logged in, or the user needs install + device-code auth + creating the 记账本 Base before syncing"
---

# 记账开箱：本地账本 + 飞书 CLI 安装与授权

首次对话或发现飞书未就绪时执行。全程中文短讯，一步一步带用户走完，不要假设对方已装 CLI 或已登录。

## 目标验收

1. `/workspace/bookkeeping/` 目录与当月 CSV 就绪
2. 本机 `lark-cli` 可用且用户身份已登录（含 base / drive / docs / wiki）
3. 云盘有「记账」文件夹与「记账本」多维表格（表「流水」字段齐全）
4. `/workspace/bookkeeping/feishu-base.json` 已写入坐标
5. 告诉用户：可发文字 / 小票截图 / 录音（m4a 等）/ webhook URL

## A. 本地账本（无飞书也能记账）

```bash
mkdir -p /workspace/bookkeeping/ledger /workspace/bookkeeping/receipts/$(date +%Y-%m) /workspace/bookkeeping/audio/$(date +%Y-%m)
```

若 `ledger/YYYY-MM.csv` 不存在，写入表头：

`id,datetime,type,amount,currency,category,account,payee,note,source,confidence,attachment`

先告诉用户：本地账本已可用，飞书同步下一步配置。

## B. 安装飞书 CLI（本机 / 虚拟机）

检测：`command -v lark-cli`。没有则按官方 Agent 路径安装：

```bash
npx @larksuite/cli@latest install
npx skills add larksuite/cli -y -g
lark-cli --version
lark-cli doctor
```

安装失败时用中文说明缺什么（Node/npm 等），给出可复制命令，不要假装已装好。

## C. 配置应用凭证（仅首次）

若 `lark-cli auth status` 显示尚无 app：

```bash
lark-cli config init --new
```

对 Agent：用 `--no-wait` / 后台方式时，把输出里的授权链接原样发给用户，等用户在浏览器完成后再继续。不要改 URL。

## D. 用户登录授权（设备码）

需要同步云盘多维表格时，必须用户身份。domains 至少：`base,drive,docs,wiki`。

```bash
lark-cli auth login --no-wait --json --domain base,drive,docs,wiki
```

然后：

1. 用 `lark-cli auth qrcode --output /workspace/bookkeeping/feishu-login-qr.png '<verification_url>'` 生成二维码
2. **先发 verification_url 原文，再附二维码图**（必须展示图片，不能只生成文件）
3. 保存本次 `device_code` 到本机临时文件（权限 600），**本回合结束，等用户说「好了 / 已授权」**
4. 用户确认后执行：`lark-cli auth login --device-code '<device_code>'`
5. `lark-cli auth status` / `lark-cli whoami --as user` 确认 user 就绪

过期则用**相同 domains** 重新跑 `--no-wait --json`，不要复用旧码。

## E. 创建飞书记账表

用户登录成功后：

1. `lark-cli drive +create-folder --name "记账" --as user --json`（已有同名文件夹可复用其 token）
2. `lark-cli base +base-create --name "记账本" --table-name "流水" --time-zone Asia/Shanghai --folder-token '<folder_token>' --as user --fields '…'`

首表字段（与本地 CSV 对齐）：

- 摘要 text
- 发生时间 datetime（`yyyy/MM/dd HH:mm`）
- 收支 select：支出 / 收入
- 金额 number currency CNY
- 币种 select：CNY/USD/HKD/EUR（默认 CNY）
- 分类 select：餐饮/交通/购物/订阅/住房/娱乐/医疗/工资/稿费/投资/转账/其他
- 账户 select：现金/微信/支付宝/银行卡/信用卡/其他
- 商户 text、备注 text
- 来源 select：文字/截图/录音/webhook/其他
- 置信度 select：高/待确认/低
- 附件 attachment、本地ID text

字段 JSON 形状遵循 `lark-cli skills read lark-base` → field schema，不要发明旧版 `ui_type` / 数字 type。

3. 把返回的 `base_token`、`table.id`、`url`、`folder_token` 写入 `/workspace/bookkeeping/feishu-base.json`
4. 把可点击的 Base 链接发给用户

## F. 可选：录音转写

若要用录音入账：

```bash
python3 -m venv /workspace/bookkeeping/.venv-asr
/workspace/bookkeeping/.venv-asr/bin/pip install -U pip faster-whisper
```

提供 `transcribe.sh`：输入音频路径，输出中文转写（模型默认 base，`language=zh`）。

## G. 收尾话术

- 本地目录已好；飞书「记账本」链接 …
- 直接发文字、丢截图/小票、或发录音/录音 URL
- Webhook：在例程面板复制 URL 与 key，可提交 `text` / `image_url` / `audio_url`
- 缺支付方式时账户先记「其他」并短问一句

## 失败与降级

- 飞书未授权：仍写入本地 CSV，明确说「飞书未同步」，引导回到 C/D
- `feishu-base.json` 缺失：不要猜 token，跑本技能 E
- 远程用户电脑不可达：优先在虚拟机（本机）完成 CLI 与登录，不要卡在另一台电脑上

## 隐私

账本与附件只放工作区；分享或转告其他助手时脱敏金额与商户。
