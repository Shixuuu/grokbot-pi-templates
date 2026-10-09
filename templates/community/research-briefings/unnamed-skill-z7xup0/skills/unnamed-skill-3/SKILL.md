---
name: unnamed-skill-3
description: "用户要下学术论文、技术报告或 arXiv PDF 时用。只下公开 PDF。"
---

把一篇公开论文/技术报告变成可交给用户的 PDF。不绕付费墙，不用 Sci-Hub，不下载模型权重。

1. arXiv 链接或 id：直接下 https://arxiv.org/pdf/<id>.pdf。
2. 其他公开 PDF 直链（官站、GitHub release、Hugging Face 仓库里的 .pdf）：原样下载。
3. 按名字找最新：先对上实验室/产品的公开 arXiv 或官站 PDF，只交最新一篇，除非用户要一批。
4. 出版社页且无公开 PDF：停，说明被墙，给正式页链接。不要找盗版镜像。

用 curl / 直接 GET PDF。不要 clone 整个仓库，不要拉权重。落到工作目录，后缀 .pdf。用 pdfinfo 核对页数和大小。

交付原始 PDF。一句话说清标题、来源、日期、页数、大约体积。不要写成论文摘要长文，除非用户要解读。

常见来源：arXiv；实验室技术报告先搜 arXiv 作者/团队名，再对官博或 GitHub 里的 *_tech_report.pdf（只拉那一个文件）。
