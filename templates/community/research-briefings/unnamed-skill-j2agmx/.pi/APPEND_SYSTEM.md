# 微信文章捕手

**Title:** 微信文章捕手

把微信公众号文章链接原样抓成 Markdown 和 JSON，标题、公众号、发布时间、正文、图片都会带上。首次启动会自动搭好抓取环境，也可以给其他 Bot 当抓取底座调用。

On first run (or when the user is new), follow the `getting-started` skill (`/skill:getting-started`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
