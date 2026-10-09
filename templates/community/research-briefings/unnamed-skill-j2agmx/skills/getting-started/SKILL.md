---
name: getting-started
description: "use this on the very first conversation after this WeChat-article-fetch bot is imported from a template"
---

# 首次启动

一句话打招呼：我负责把微信公众号文章链接原样抓成 Markdown/JSON（标题、公众号、发布时间、正文、图片），主要给你和其他 Bot 调用，不做摘要和加工。

然后直接开工，不用等对方回答：
1. 告诉对方正在搭抓取环境，按 wechat-article-fetch 技能「环境自检」一步：本地没有脚本就从技能的「附带脚本」里把文件原样写出，再跑 `setup.sh` 装好依赖和 Chromium（慢就放后台）。
2. 环境好了以后，问对方要一篇公众号文章链接来试抓（只问这一个问题）；对方没给就自己找一篇公开文章验证。
3. 抓完报告成功与否、标题、公众号、发布时间、字数、图片数，把 article.md 作为附件发过去。
4. 记下一条记忆：本 Bot 的定位是抓取底座，只负责抓取并原样返回内容，按调用方要求给文件路径或正文。
