---
name: unnamed-skill
description: "Use this when the user wants to transcribe YouTube, Bilibili, Xiaoyuzhou/podcast, or a raw audio/video URL into Chinese text. If the API key is missing, run 百炼设置引导 first."
---

把一条视频或播客变成可读中文稿。先认链接，再走对应路由。

没有 DASHSCOPE_API_KEY（也没有 DashScope / 百炼 connector）时：先跑百炼设置引导，不要空转失败。论文下载和已有官方字幕的视频不需要这把 key。

路由：YouTube；B 站；小宇宙及其他播客 enclosure；已经拿到的音频文件或直链。

## 方案

1. 官方字幕优先：YouTube caption / B 站 CC。有完整字幕就用，不再跑 ASR。
2. 没有字幕再 ASR：阿里云百炼 DashScope Paraformer-v2。下载音频 → 上传 OSS（或对公网 enclosure 直接提交 file_urls）→ 异步转写 → 拉 transcription_url 拼全文和带时间轴的句子。
3. 不要用 Whisper 当主路径（中文长内容不够稳）。
4. B 站不要用 yt-dlp（容易 412）。用 bili CLI。
5. 密钥只从本机环境或已有 connector 读，不要写进稿子、不要打印完整 key。需要的变量：DASHSCOPE_API_KEY，可选 DASHSCOPE_BASE_HTTP_API_URL。

## 每次怎么跑

1. 看用户给的 URL / 文件，按下面路由取音频。
2. 取到音频后交 Paraformer。没密钥就停，改走设置引导。
3. 写出两个文件再交给用户：*-transcript.txt 分段中文；有时间轴再写 *-transcript.json。
4. 交稿时用一句话说清：字幕还是 Paraformer、时长、大约字数、专名可能听错。不要改写成润色稿，除非用户要。

## YouTube
匹配 youtube.com / youtu.be / shorts。先官方字幕（yt-dlp --write-sub --write-auto-sub --skip-download 或 caption API），中英都试。没有再只下音频。云 IP 被拦就停并说明，不要硬换代理。不要一上来 Whisper。

## B 站
匹配 bilibili.com/video/BVxxxx / b23.tv。先 CC（bili video 带字幕），没有再用 bili audio。不要用 yt-dlp，不要刮 cookie。

## 小宇宙 / 播客
匹配 xiaoyuzhoufm.com/episode 以及 RSS enclosure 音频直链。从页面 __NEXT_DATA__ 取 title、duration、enclosure.url。公网 enclosure 直接给 Paraformer file_urls。单集默认可到约 3 小时。不要 yt-dlp 扒页，不要整期 RSS 全转，除非用户要。

## 任意音频 / 视频文件
本地文件或 mp3/m4a/wav 直链；视频容器用 ffmpeg 抽音轨。公网直链可不下载，直接 file_urls。默认体积大约 200MB，超了先压。不要乱爬，不要把原始音视频和 key 一起打包发走。

## Paraformer
模型 paraformer-v2；language_hints zh/en；POST {base}/services/audio/asr/transcription，header X-DashScope-Async: enable。本地文件用 DashScope OssUtils.upload。轮询 Transcription.wait 再下 transcription_url。

## 失败怎么换
YouTube 下不下来：换官方字幕，还没有就停。B 站 412：只用 bili。小宇宙没 __NEXT_DATA__：换公开 API / RSS enclosure。没有 API Key 或 401：改走百炼设置引导，不要换 Whisper。
