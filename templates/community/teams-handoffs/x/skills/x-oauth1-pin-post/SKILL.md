---
name: x-oauth1-pin-post
description: "use this when posting, uploading media, or authorizing X developer API writes via OAuth 1.0a PIN (not the X connector, not OAuth 2.0)"
---

# X 开发者 API：OAuth 1.0a PIN 授权与发帖

层 2 直调 `api.x.com`。不使用 X 连接器，不建议安装 X MCP，不用浏览器自动化 x.com。密钥只用 secret-request，禁止让用户把 Key/Token 贴进聊天，禁止回显、禁止写入 memory。

## 何时走这条，何时跳过

- 搜讨论、看某人在说什么、跟帖子串 → **不要用本流程**，走 Grok Build `x_search`（扣 Grok 额度，不扣 X 积分）。
- 发帖 / 配图 / 删帖 / 赞转关注 / 自己的数据 → 本流程。
- 凭证文件里已经有 `api_key`、`api_key_secret`、`access_token`、`access_token_secret` → **跳过授权**，直接验身份后发。
- 控制台弹出的 **OAuth 2.0** Access Token / Refresh Token **不要用**：Access 2 小时过期，Refresh 6 个月。发帖用 OAuth 1.0a。

## 最简便授权（不要收四个字段）

不要让用户手工抄 Access Token。只要 App 级两个密钥 + 用户点一次允许。

1. 确认控制台 App 权限是 **Read and write**（要私信再加 Direct message）。改过权限必须重新生成用户令牌；PIN 授权等于重新发一套用户令牌。
2. secret-request 收 **Consumer Key**（字段 `api_key`）和 **Consumer Secret**（字段 `api_key_secret`），connector 用 `x-developer`。落盘后 `chmod 600`。只确认 `set=true` 和长度，不打印值。
3. `POST https://api.x.com/oauth/request_token`，OAuth 1.0a HMAC-SHA1，`oauth_callback=oob`。
4. 把授权链接发给用户：`https://api.x.com/oauth/authorize?oauth_token=<request_token>`。请用户用目标账号登录并允许。
5. 用户把页面上的 PIN 发回来（PIN 可以进聊天）。`POST https://api.x.com/oauth/access_token`，带 `oauth_verifier=<PIN>`。
6. 把返回的 `oauth_token` / `oauth_token_secret` 写入同一凭证文件的 `access_token` / `access_token_secret`，可附 `screen_name`、`user_id`。删掉 request token 临时文件。
7. `GET /2/users/me`（免费）核对是不是目标账号。

`GET /2/usage/credits` 对用户令牌可能 404；`GET /2/usage/tweets` 可能要求 App-Only。查不到就说查不到，不编积分数字。

## 发帖

调用前说清：层 2，扣 X 积分。贵的先报价再确认。

参考价（以 console 实时价为准，不要装准）：

- 标准发帖 `POST /2/tweets` **$0.015**
- 正文含 URL（含被自动转成 t.co 的域名）**$0.20**
- 传图 finalize / 媒体 **约 $0.01**

正文里不要写 `x.com`、`http://`、`https://`：X 会自动加链接，误触发 $0.20。`@handle` 不是 URL。

配图：`POST https://upload.twitter.com/1.1/media/upload.json`（multipart，OAuth 签名不含 body 字段）→ 拿 `media_id_string` → `POST https://api.x.com/2/tweets` JSON：`{"text":"...","media":{"media_ids":["..."]}}`。JSON body 不参与 OAuth 1.0a 签名。

成功后把帖子链接交给用户：`https://x.com/<handle>/status/<id>`。

## 失败

- 401 / 签名错误：先核对四个字段是否齐，再重做 PIN，不要让用户再抄一遍 Access Token。
- PIN 过期或用错过 request token：重新 `request_token`，发新链接。
- 发帖 403 权限：App 还是 Read only，让用户改 Read and write 后重新走 PIN，不要用 OAuth 2.0 凑合。
