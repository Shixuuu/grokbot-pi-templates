---
name: wechat-article-fetch
description: "use this when you need to fetch a WeChat Official Account article (mp.weixin.qq.com link) and return its raw title, account, publish time, body and images as Markdown/JSON, or when another bot asks for WeChat article content"
---

# 微信公众号文章抓取

只抓取并返回原始内容，不做摘要、改写或入库。不用任何付费 API、登录或 cookie。

工具目录：本 SKILL.md 所在的技能目录（通常是 `/home/box/agent-data/workflows/<本技能文件夹>/`，下文简称 `$WX`）。虚拟环境放 `~/.local/share/wxfetch/venv`，千万不要放进技能目录（会撑爆技能快照）。

## 1. 环境自检（每次首抓前）
1. 如果 `$WX/scripts/wxfetch.py` 不存在（比如从模板新装的 Bot），把本文末尾「附带脚本」里的每个文件按标注路径原样写出（`mkdir -p $WX/scripts`，写完 `chmod +x $WX/wxfetch $WX/setup.sh`）。
2. 运行 `bash $WX/setup.sh --check`；非 0 就运行 `bash $WX/setup.sh` 自动安装（幂等）。

## 2. 抓取
```bash
$WX/wxfetch <url> --out /workspace/wechat/ --format both --download-images -q
```
默认 `--method auto`：先纯 HTTP，失败降级无头浏览器。输出 `<out>/<article_id>/article.md`（带 frontmatter）、`article.json`、`images/NNN.ext`；stdout 打印摘要 JSON。多篇逐篇跑，篇间停一两秒。

## 3. 结果与返回
如实回报，绝不假装成功。退出码：0 `OK`/`IMAGE_DOWNLOAD_PARTIAL`，2 `INVALID_URL`，3 `NETWORK_ERROR`，4 `ANTI_BOT`（稍后重试一次），5 `ARTICLE_DELETED`，6 `WECHAT_ONLY`，7 `ACCOUNT_MIGRATED`，8 `PAID_CONTENT`，9 `PARSE_ERROR`，10 `BROWSER_UNAVAILABLE`，11 `DEPENDENCY_ERROR`（重跑 setup.sh）。
按调用方（其他 Bot 或用户）要求给文件路径或直接贴正文，附标题、公众号、发布时间、字数、图片数，内容原样交付。

## 复现原理（脚本缺失时照此实现）
**环境**：Python 3 + venv（Debian 系统 Python 受 PEP 668 保护，别往系统 pip 装）。包：requests、beautifulsoup4、lxml、markdownify、playwright；`python -m playwright install --with-deps chromium`（无 root 时去掉 --with-deps）。setup.sh 负责检查并补齐这些，`--check` 只检查不装。

**1. 链接规整**：补 `https://`；去掉 `#wechat_redirect` 与追踪参数；非 mp.weixin.qq.com 的链接先跟随 302 直到落到 mp.weixin.qq.com。两种形态：短链 `/s/<id>`，长链 `/s?__biz=..&mid=..&idx=..&sn=..`。article_id 取短链 id，长链用 `biz_mid_idx`。

**2. HTTP 主路径（关键反爬规律，2026-10 实测）**：
- 短链 `/s/<id>`：用微信 iOS 内置浏览器 UA（`... Mobile/15E148 MicroMessenger/8.0.50(0x1800323a) NetType/WIFI Language/zh_CN`）直接 GET，返回 200。
- 长链：缺 `chksm` 参数时任何 UA 都会被 302 到 `wappoc_appmsgcaptcha`「环境异常」验证页。解决：保留原 chksm，没有就补占位 `&chksm=0`，并改用**非微信** UA（移动 Safari 或桌面 Chrome）；带 chksm + 微信 UA 仍会被拦。
- 请求头：Accept html、`Accept-Language: zh-CN`、`Cache-Control: no-cache`。重试 3 次并轮换 UA（wechat-ios → wechat-android → desktop-chrome → mobile-safari），确定性失败（已删除等）不重试。

**3. 页面判定**（按文本特征分类）：`环境异常/去验证/完成验证后即可继续访问/wappoc_appmsgcaptcha/secitptpage/verify` → ANTI_BOT；`该内容已被发布者删除/该文章已被删除/参数错误/此内容被多人投诉/经审核涉嫌/已停止访问该网页` → ARTICLE_DELETED；`请在微信客户端打开链接/请在微信中打开` → WECHAT_ONLY；`帐号已迁移/此帐号已被屏蔽/已自主注销` → ACCOUNT_MIGRATED；`var is_pay_subscribe = 1` 或含 `付费阅读`+`pay_fee_area` → PAID_CONTENT（只返回试读）。

**4. 解析**（BeautifulSoup + lxml）：
- 标题 `#activity-name` / `.rich_media_title` / `#js_text_title`；公众号名 `#js_name` / `.wx_follow_nickname`；作者 `meta[name=author]`；摘要、封面取 `og:description`、`og:image`。
- 发布时间：正则从脚本变量 `create_time` / `ct` / `ori_create_time` 取 Unix 秒，转成 +08:00 ISO 时间。
- 正文 `#js_content`（备选 `.rich_media_content`）：删 script/style/noscript 和 `ul.code-snippet__line-index`，去掉容器自带的 `visibility:hidden` 样式。
- 图片懒加载：`img` 的 `data-src`（或 `data-original`）写回 `src`，补全 `//` 开头的链接，去重收集；`style` 里 `background-image:url(...qpic.cn...)` 的也收。视频 iframe 的 `data-src` 回填，Markdown 里变成 `[视频](链接)`；`mpvoice` 变成 `[音频: 名称]`。
- 无 `#js_content` 的贴图/文字消息（`item_show_type` 8/10）：从脚本变量 `cdn_url` 取图片，从 `content_noencode` 取文字。
- 正文为空且没命中上面任何特征 → PARSE_ERROR。

**5. 浏览器降级**（Playwright Chromium 无头）：HTTP 结果是 ANTI_BOT、NETWORK_ERROR 或 PARSE_ERROR 时启用。用移动 Safari UA，视口 390×844，`add_init_script` 把 `navigator.webdriver` 设为 undefined（默认 HeadlessChrome UA 会被拦）；长链同样补 chksm；等待 `#js_content` 出现，滚动到底触发懒加载，取 `page.content()` 走同一套解析。

**6. 图片下载**：请求头带 `Referer: https://mp.weixin.qq.com/`（否则返回防盗链图），按 Content-Type 或 URL 里的 `wx_fmt` 定扩展名，存 `images/001.jpg` 等，校验文件头是真图片；Markdown 里把链接替换成本地相对路径。部分失败返回 IMAGE_DOWNLOAD_PARTIAL。

**7. 输出**：markdownify（ATX 标题、`-` 列表，剥掉 span/font）；微信代码块里一个 `<pre>` 内的多个 `<code>` 先合成一个。article.md 带 YAML frontmatter（title、account_name、author、publish_time、url、word_count、image_count），article.json 含全部元数据 + content_text + images 列表 + attempts 记录（每次尝试用的方法、UA、结果）。日志只写 stderr。

## 不支持
阅读数/点赞/评论（需微信登录）、付费全文、视频音频本体。不破解验证码。

## 维护
大量出现 ANTI_BOT 多半是微信改了反爬规律，按第 2 步重新试探 UA 与 chksm 的组合再修。

## 附带脚本
以下文件随技能分享，原样写到 `$WX` 下对应路径即可使用。

### `requirements.txt`
```text
requests>=2.31
beautifulsoup4>=4.12
lxml>=5.0
markdownify>=0.13
playwright>=1.45
```

### `setup.sh`
```bash
#!/usr/bin/env bash
# wechat-article-fetch: 环境自检 + 自动安装（幂等，可反复执行）
#
#   bash setup.sh            # 检查并安装全部依赖（核心 + Chromium 浏览器降级）
#   bash setup.sh --core     # 只装核心（纯 HTTP 主路径），不装浏览器
#   bash setup.sh --browser  # 确保核心 + 浏览器（同默认）
#   bash setup.sh --check    # 只检查不安装（doctor 模式），缺失时退出码 1
#
# 环境变量：
#   WXFETCH_VENV               虚拟环境路径（默认 ~/.local/share/wxfetch/venv）
#   PLAYWRIGHT_BROWSERS_PATH   Playwright 浏览器缓存目录（默认 ~/.cache/ms-playwright）
#   PIP_INDEX_URL              可选 pip 镜像
set -uo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV="${WXFETCH_VENV:-$HOME/.local/share/wxfetch/venv}"
PY="$VENV/bin/python"
REQ="$DIR/requirements.txt"
MODE="all"
case "${1:-}" in
  --core) MODE="core" ;;
  --browser|"") MODE="all" ;;
  --check) MODE="check" ;;
  -h|--help) sed -n '2,13p' "$0"; exit 0 ;;
  *) echo "unknown option: $1" >&2; exit 2 ;;
esac

ok()   { printf '  [ OK ] %s\n' "$*" >&2; }
bad()  { printf '  [MISS] %s\n' "$*" >&2; }
info() { printf '  [....] %s\n' "$*" >&2; }
MISSING=0

SUDO=""
if [ "$(id -u)" -ne 0 ]; then
  if command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then SUDO="sudo -n"; fi
fi
apt_install() {
  if ! command -v apt-get >/dev/null 2>&1; then echo "apt-get not found; please install manually: $*" >&2; return 1; fi
  if [ "$(id -u)" -ne 0 ] && [ -z "$SUDO" ]; then echo "need root/sudo to apt-get install: $*" >&2; return 1; fi
  DEBIAN_FRONTEND=noninteractive $SUDO apt-get update -qq >/dev/null 2>&1 || true
  DEBIAN_FRONTEND=noninteractive $SUDO apt-get install -y -qq "$@" >/dev/null
}

echo "== wechat-article-fetch setup (mode=$MODE) ==" >&2
echo "   dir=$DIR  venv=$VENV" >&2

# 1. python3
if command -v python3 >/dev/null 2>&1; then
  ok "python3: $(python3 --version 2>&1)"
else
  bad "python3"
  if [ "$MODE" = check ]; then MISSING=1; else apt_install python3 python3-venv python3-pip && ok "python3 installed" || { echo "FATAL: cannot install python3" >&2; exit 1; }; fi
fi

# 2. venv module (Debian/Ubuntu 需要 python3-venv / python3.X-venv)
venv_works() { local t; t="$(mktemp -d)"; python3 -m venv "$t/v" >/dev/null 2>&1; local r=$?; rm -rf "$t"; return $r; }
if [ -x "$PY" ] && "$PY" -c 'import sys' >/dev/null 2>&1; then
  ok "venv: $VENV"
else
  if [ "$MODE" = check ]; then bad "venv not created: $VENV"; MISSING=1
  else
    if ! venv_works; then
      info "python venv module missing, installing python3-venv"
      PYV="$(python3 -c 'import sys;print(f"{sys.version_info[0]}.{sys.version_info[1]}")')"
      apt_install python3-venv "python${PYV}-venv" || apt_install python3-venv || true
    fi
    rm -rf "$VENV"
    if python3 -m venv "$VENV" >/dev/null 2>&1 || python3 -m venv --without-pip "$VENV"; then
      if ! "$PY" -m pip --version >/dev/null 2>&1; then
        info "bootstrapping pip (ensurepip / get-pip)"
        "$PY" -m ensurepip --upgrade >/dev/null 2>&1 || { curl -fsSL https://bootstrap.pypa.io/get-pip.py -o /tmp/get-pip.py && "$PY" /tmp/get-pip.py -q; }
      fi
      ok "venv created: $VENV"
    else
      echo "FATAL: cannot create venv at $VENV" >&2; exit 1
    fi
  fi
fi

# 3. pip + python packages
core_ok()    { "$PY" -c 'import requests, bs4, lxml, markdownify' >/dev/null 2>&1; }
pw_mod_ok()  { "$PY" -c 'import playwright.sync_api' >/dev/null 2>&1; }
REQ_HASH="$( (cat "$REQ"; echo "$MODE") | sha256sum | cut -c1-16)"
if [ -x "$PY" ]; then
  if "$PY" -m pip --version >/dev/null 2>&1; then ok "pip: $("$PY" -m pip --version | cut -d' ' -f1-2)"; else bad "pip in venv"; MISSING=1; fi
  NEED_PIP=0
  core_ok && ok "python pkgs: requests bs4 lxml markdownify" || { bad "python core packages"; NEED_PIP=1; }
  if [ "$MODE" != core ]; then pw_mod_ok && ok "python pkg: playwright" || { bad "python package playwright"; NEED_PIP=1; }; fi
  if [ "$NEED_PIP" = 1 ]; then
    if [ "$MODE" = check ]; then MISSING=1
    else
      info "pip install -r requirements.txt"
      if [ "$MODE" = core ]; then grep -v '^playwright' "$REQ" > "$VENV/.req-core.txt"; RF="$VENV/.req-core.txt"; else RF="$REQ"; fi
      "$PY" -m pip install -q --disable-pip-version-check -r "$RF" || { echo "FATAL: pip install failed" >&2; exit 1; }
      core_ok || { echo "FATAL: core packages still not importable" >&2; exit 1; }
      ok "python packages installed"
      echo "$REQ_HASH" > "$VENV/.wxfetch-req-hash"
    fi
  fi
fi

# 4. Chromium (Playwright) — 浏览器降级路径
browser_ok() {
  "$PY" - <<'PYEOF' >/dev/null 2>&1
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b = p.chromium.launch(headless=True, args=["--no-sandbox"])
    pg = b.new_page(); pg.set_content("<p>ok</p>"); assert pg.inner_text("p") == "ok"; b.close()
PYEOF
}
if [ "$MODE" != core ] && [ -x "$PY" ] && pw_mod_ok; then
  if browser_ok; then ok "chromium (playwright) launches headless"
  elif [ "$MODE" = check ]; then bad "chromium for playwright not ready"; MISSING=1
  else
    info "installing chromium via playwright (first time may take a few minutes)"
    if [ "$(id -u)" -eq 0 ]; then
      "$PY" -m playwright install --with-deps chromium >"$VENV/.playwright-install.log" 2>&1 || tail -5 "$VENV/.playwright-install.log" >&2
    else
      if [ -n "$SUDO" ]; then
        info "installing OS deps with sudo (playwright install-deps chromium)"
        $SUDO env "PATH=$PATH" "$PY" -m playwright install-deps chromium >/dev/null 2>&1 || info "install-deps failed (will still try)"
      else
        info "no root/sudo: skipping OS deps; chromium may fail to start if system libs are missing"
      fi
      "$PY" -m playwright install chromium >"$VENV/.playwright-install.log" 2>&1 || tail -5 "$VENV/.playwright-install.log" >&2
    fi
    if browser_ok; then ok "chromium ready"; else bad "chromium still cannot launch (browser fallback disabled; HTTP path still works)"; MISSING=1; fi
  fi
elif [ "$MODE" = core ]; then
  info "browser check skipped (--core)"
fi

if [ "$MISSING" = 0 ]; then echo "== READY ==" >&2; exit 0; else echo "== NOT READY (see [MISS] above; run: bash $DIR/setup.sh) ==" >&2; exit 1; fi
```

### `wxfetch`
```bash
#!/usr/bin/env bash
# 便捷入口：./wxfetch <url> [options]   |   ./wxfetch doctor [--fix]
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VPY="${WXFETCH_VENV:-$HOME/.local/share/wxfetch/venv}/bin/python"
if [ -x "$VPY" ]; then exec "$VPY" "$DIR/scripts/wxfetch.py" "$@"; else exec python3 "$DIR/scripts/wxfetch.py" "$@"; fi
```

### `scripts/wxfetch.py`
```python
#!/usr/bin/env python3
"""wxfetch — 微信公众号文章抓取器（原样返回：标题/公众号/作者/发布时间/正文/图片）。

用法:
  python3 wxfetch.py <url> [--out DIR] [--format md|json|both] [--download-images]
                     [--method auto|http|browser] [--retries N] [--timeout S]
  python3 wxfetch.py doctor [--fix]

主路径: 纯 HTTP (requests + 微信/移动端 UA)；失败时自动降级 Playwright + Chromium。
本文件顶层只依赖标准库；第三方依赖缺失时会自动调用 ../setup.sh 安装到 venv 并以 venv 解释器重启。
"""
from __future__ import annotations

import argparse
import datetime as _dt
import hashlib
import html as _html
import json
import os
import random
import re
import subprocess
import sys
import time
from urllib.parse import parse_qs, urlencode, urljoin, urlparse, urlunparse

VERSION = "1.0.0"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(SCRIPT_DIR)
SETUP_SH = os.path.join(ROOT_DIR, "setup.sh")
VENV_DIR = os.environ.get("WXFETCH_VENV", os.path.join(os.path.expanduser("~"), ".local", "share", "wxfetch", "venv"))
VENV_PY = os.path.join(VENV_DIR, "bin", "python")
TZ_CN = _dt.timezone(_dt.timedelta(hours=8))

# ----------------------------------------------------------------------------
# 错误码（code 字符串 + 进程退出码）
# ----------------------------------------------------------------------------
ERRORS = {
    "OK": (0, "成功"),
    "USAGE_ERROR": (1, "参数用法错误"),
    "INVALID_URL": (2, "不是可识别的公众号文章链接"),
    "NETWORK_ERROR": (3, "网络错误/超时/HTTP 非 200"),
    "ANTI_BOT": (4, "触发微信环境异常/验证页（需人机验证）"),
    "ARTICLE_DELETED": (5, "文章不存在、已被删除、违规或因投诉无法查看"),
    "WECHAT_ONLY": (6, "该内容要求在微信客户端内打开"),
    "ACCOUNT_MIGRATED": (7, "公众号已迁移/帐号异常，文章不可见"),
    "PAID_CONTENT": (8, "付费内容，仅抓到试读部分"),
    "PARSE_ERROR": (9, "页面已获取但未解析到正文"),
    "BROWSER_UNAVAILABLE": (10, "浏览器降级不可用（Chromium/Playwright 未就绪）"),
    "DEPENDENCY_ERROR": (11, "依赖安装失败"),
    "IMAGE_DOWNLOAD_PARTIAL": (0, "正文成功，但部分图片下载失败"),
}

def log(*a):
    if not _QUIET:
        print("[wxfetch]", *a, file=sys.stderr, flush=True)

_QUIET = False
_PRIOR_ATTEMPTS: list = []  # 用于进程重启时保留之前的尝试记录

# ----------------------------------------------------------------------------
# 依赖自举
# ----------------------------------------------------------------------------
def _in_venv_python() -> bool:
    try:
        return os.path.realpath(sys.prefix) == os.path.realpath(VENV_DIR)
    except Exception:
        return False

def ensure_core_deps(auto_setup: bool = True):
    try:
        import requests, bs4, lxml, markdownify  # noqa: F401
        return
    except ImportError:
        pass
    if not _in_venv_python():
        if not (os.path.exists(VENV_PY) and subprocess.call([VENV_PY, "-c", "import requests,bs4,lxml,markdownify"],
                                                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL) == 0):
            if not auto_setup:
                _fatal("DEPENDENCY_ERROR", f"缺少依赖，请先运行: bash {SETUP_SH}")
            log("依赖缺失，自动运行 setup.sh --core ...")
            if subprocess.call(["bash", SETUP_SH, "--core"]) != 0:
                _fatal("DEPENDENCY_ERROR", f"setup.sh --core 失败，请手动运行: bash {SETUP_SH}")
        os.execv(VENV_PY, [VENV_PY, os.path.abspath(__file__)] + sys.argv[1:])
    if not auto_setup:
        _fatal("DEPENDENCY_ERROR", f"venv 内缺少依赖，请运行: bash {SETUP_SH}")
    if subprocess.call(["bash", SETUP_SH, "--core"]) != 0:
        _fatal("DEPENDENCY_ERROR", "setup.sh --core 失败")
    os.execv(VENV_PY, [VENV_PY, os.path.abspath(__file__)] + sys.argv[1:])

def ensure_browser_deps(auto_setup: bool = True) -> tuple[bool, str]:
    """确保 playwright + chromium 可用；必要时调用 setup.sh 安装。返回 (ok, msg)。"""
    def _try():
        try:
            from playwright.sync_api import sync_playwright  # noqa: F401
        except ImportError:
            return False, "playwright 未安装"
        try:
            from playwright.sync_api import sync_playwright
            with sync_playwright() as p:
                b = p.chromium.launch(headless=True, args=["--no-sandbox"])
                b.close()
            return True, "ok"
        except Exception as e:  # 浏览器二进制缺失 / 系统库缺失
            return False, f"chromium 无法启动: {str(e).splitlines()[0][:200]}"
    ok, msg = _try()
    if ok or not auto_setup:
        return ok, msg
    log(f"浏览器不可用（{msg}），自动运行 setup.sh 安装 Chromium ...")
    rc = subprocess.call(["bash", SETUP_SH, "--browser"], stdout=sys.stderr)
    if rc != 0:
        return False, f"自动安装失败（setup.sh --browser 退出码 {rc}），请手动运行: bash {SETUP_SH}"
    # 新装的包在当前进程里不一定可导入：以 venv 解释器重启，只跑浏览器路径，并带上之前的尝试记录
    os.environ["WXFETCH_PRIOR_ATTEMPTS"] = json.dumps(_PRIOR_ATTEMPTS, ensure_ascii=False)
    argv = [VENV_PY, os.path.abspath(__file__)] + sys.argv[1:] + ["--method", "browser", "--no-auto-setup"]
    log("浏览器依赖已安装，重启进程继续浏览器抓取 ...")
    sys.stdout.flush(); sys.stderr.flush()
    os.execv(VENV_PY, argv)

def _fatal(code, msg):
    res = {"ok": False, "code": code, "message": msg, "version": VERSION}
    print(json.dumps(res, ensure_ascii=False, indent=2))
    sys.exit(ERRORS[code][0])

# ----------------------------------------------------------------------------
# URL 处理
# ----------------------------------------------------------------------------
WX_HOST = "mp.weixin.qq.com"
KEEP_LONG_PARAMS = ("__biz", "mid", "idx", "sn")

def normalize_url(raw: str) -> tuple[str | None, str]:
    """返回 (规范化 URL 或 None, 说明)。非 mp.weixin.qq.com 的链接视为短链/跳转，交给 resolve 阶段。"""
    u = (raw or "").strip().strip("<>\"'")
    if not u:
        return None, "空 URL"
    if not re.match(r"^https?://", u, re.I):
        u = "https://" + u.lstrip("/")
    p = urlparse(u)
    host = (p.hostname or "").lower()
    if host != WX_HOST:
        return u, "external"
    path = p.path
    if re.match(r"^/s/[A-Za-z0-9_\-]+/?$", path):
        return urlunparse(("https", WX_HOST, path.rstrip("/"), "", "", "")), "short"
    if path in ("/s", "/mp/appmsg/show", "/mp/rumor") or path.startswith("/s?"):
        q = parse_qs(p.query)
        if all(k in q for k in KEEP_LONG_PARAMS):
            qs = urlencode([(k, q[k][0]) for k in KEEP_LONG_PARAMS])
            return urlunparse(("https", WX_HOST, "/s", "", qs, "")), "long"
        return urlunparse(("https", WX_HOST, path, "", p.query, "")), "long-partial"
    return None, f"不支持的 mp.weixin.qq.com 路径: {path}"

def article_key(url: str, meta: dict | None = None) -> str:
    meta = meta or {}
    p = urlparse(url)
    m = re.match(r"^/s/([A-Za-z0-9_\-]+)", p.path)
    if m:
        return m.group(1)
    if meta.get("biz") and meta.get("mid"):
        b = re.sub(r"[^A-Za-z0-9]", "", meta["biz"])
        return f"{b}_{meta['mid']}_{meta.get('idx') or 1}"
    return hashlib.md5(url.encode()).hexdigest()[:16]

# ----------------------------------------------------------------------------
# 页面状态识别
# ----------------------------------------------------------------------------
ANTI_BOT_MARKERS = ["环境异常", "去验证", "完成验证后即可继续访问", "wappoc_appmsgcaptcha", "secitptpage/verify", "请输入验证码"]
DELETED_MARKERS = ["该内容已被发布者删除", "此内容因违规无法查看", "此内容被投诉且经审核涉嫌侵权", "该内容已被删除",
                   "此内容发送失败无法查看", "内容涉嫌违反", "此内容因涉嫌违反相关法律法规", "因违规无法查看",
                   "该文章已被删除", "参数错误", "此内容被多人投诉", "经审核涉嫌", "已停止访问该网页"]
WECHAT_ONLY_MARKERS = ["请在微信客户端打开链接", "请在微信中打开", "仅支持在微信中", "该内容仅可在微信内查看"]
MIGRATED_MARKERS = ["该公众号已迁移", "帐号已迁移", "账号已迁移", "此帐号已被屏蔽", "此帐号已自主注销", "此账号已自主注销",
                    "该公众号已被封禁", "帐号已冻结"]

def classify_page(html: str, final_url: str = "") -> tuple[str, str] | None:
    """仅在没拿到正文时调用，返回 (code, 证据) 或 None。"""
    head = html[:400000]
    for mk in ANTI_BOT_MARKERS:
        if mk in final_url or mk in head:
            return "ANTI_BOT", mk
    for mk in DELETED_MARKERS:
        if mk in head:
            return "ARTICLE_DELETED", mk
    for mk in MIGRATED_MARKERS:
        if mk in head:
            return "ACCOUNT_MIGRATED", mk
    for mk in WECHAT_ONLY_MARKERS:
        if mk in head:
            return "WECHAT_ONLY", mk
    m = re.search(r'<div class="weui-msg__title[^"]*"[^>]*>\s*([^<]{2,80})', head) or \
        re.search(r'class="msg_desc"[^>]*>\s*([^<]{2,80})', head)
    if m:
        return "ARTICLE_DELETED", m.group(1).strip()
    return None

# ----------------------------------------------------------------------------
# 解析
# ----------------------------------------------------------------------------
def _js_var(html: str, name: str) -> str | None:
    pats = [
        rf'var\s+{name}\s*=\s*htmlDecode\(\s*"((?:[^"\\]|\\.)*)"\s*\)',
        rf"var\s+{name}\s*=\s*htmlDecode\(\s*'((?:[^'\\]|\\.)*)'\s*\)",
        rf'var\s+{name}\s*=\s*"((?:[^"\\]|\\.)*)"',
        rf"var\s+{name}\s*=\s*'((?:[^'\\]|\\.)*)'",
        rf'\b{name}\s*[:=]\s*"((?:[^"\\]|\\.)+)"',
        rf"\b{name}\s*[:=]\s*'((?:[^'\\]|\\.)+)'",
    ]
    for p in pats:
        m = re.search(p, html)
        if m and m.group(1).strip():
            return _unescape_js(m.group(1))
    return None

def _unescape_js(s: str) -> str:
    s = re.sub(r"\\x([0-9a-fA-F]{2})", lambda m: chr(int(m.group(1), 16)), s)
    s = re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), s)
    s = s.replace("\\/", "/").replace('\\"', '"').replace("\\'", "'").replace("\\n", "\n").replace("\\\\", "\\")
    return _html.unescape(s).strip()

def _clean_text(s: str | None) -> str:
    return re.sub(r"\s+", " ", s or "").strip()

def _fix_img_url(u: str | None) -> str | None:
    if not u:
        return None
    u = _html.unescape(u.strip())
    if u.startswith("data:") or not u:
        return None
    if u.startswith("//"):
        u = "https:" + u
    u = u.split("#", 1)[0]  # 浏览器渲染后会追加 #imgIndex=N
    if u.startswith("http://") and ("qpic.cn" in u or "qlogo.cn" in u):
        u = "https://" + u[7:]
    return u

def _ts_to_iso(ts) -> str | None:
    try:
        t = int(str(ts).strip())
        if t <= 0:
            return None
        return _dt.datetime.fromtimestamp(t, TZ_CN).isoformat()
    except Exception:
        return None

def parse_article(html: str, url: str) -> dict:
    """解析文章 HTML。返回 dict；若没有正文则 dict['content_html'] 为空。"""
    from bs4 import BeautifulSoup

    soup = BeautifulSoup(html, "lxml")
    meta = {}

    def sel_text(*sels):
        for s in sels:
            e = soup.select_one(s)
            if e:
                t = _clean_text(e.get_text(" "))
                if t:
                    return t
        return None

    def meta_prop(prop):
        e = soup.find("meta", attrs={"property": prop}) or soup.find("meta", attrs={"name": prop})
        return _html.unescape(e["content"]).strip() if e and e.get("content") else None

    meta["title"] = (sel_text("#activity-name", ".rich_media_title", "#js_text_title")
                     or _js_var(html, "msg_title") or meta_prop("og:title") or meta_prop("twitter:title"))
    if meta["title"]:
        meta["title"] = re.sub(r"\.html\(false\)$", "", meta["title"]).strip()
    meta["account_name"] = (sel_text("#js_name", ".wx_follow_nickname", "#js_wx_follow_nickname", ".account_nickname_inner")
                            or _js_var(html, "nickname") or _js_var(html, "nick_name"))
    meta["account_id"] = _js_var(html, "user_name")
    author = _js_var(html, "author") or sel_text("#js_author_name", "#js_author_name_text") or meta_prop("author")
    meta["author"] = author
    ct = None
    for name in ("create_time", "ct", "ori_create_time", "publish_time"):
        m = re.search(rf'var\s+{name}\s*=\s*["\']?(\d{{9,11}})', html) or re.search(rf'\b{name}\s*[:=]\s*["\']?(\d{{9,11}})["\']?', html)
        if m:
            ct = m.group(1)
            break
    meta["publish_timestamp"] = int(ct) if ct else None
    meta["publish_time"] = _ts_to_iso(ct) if ct else (sel_text("#publish_time") or None)
    meta["digest"] = _js_var(html, "msg_desc") or meta_prop("og:description") or meta_prop("description")
    meta["cover"] = _fix_img_url(_js_var(html, "msg_cdn_url") or meta_prop("og:image"))
    meta["source_url"] = _js_var(html, "msg_source_url") or None
    meta["canonical_url"] = _js_var(html, "msg_link") or meta_prop("og:url")
    for k in ("biz", "mid", "idx", "sn"):
        m = re.search(rf'var\s+{k}\s*=\s*"([^"]*)"\s*(?:\|\|\s*"([^"]*)"\s*)*', html)
        val = None
        if m:
            val = next((g for g in m.groups() if g), None)
        meta[k] = val
    m = re.search(r'var\s+item_show_type\s*=\s*["\']?(\d+)', html)
    meta["item_show_type"] = int(m.group(1)) if m else None
    m = re.search(r'var\s+copyright_stat\s*=\s*["\']?(\d+)', html)
    meta["is_original"] = (m.group(1) == "1") if m else None

    content = soup.select_one("#js_content") or soup.select_one(".rich_media_content")
    content_html = ""
    images: list[dict] = []
    if content is not None:
        for t in content.find_all(["script", "style", "noscript"]):
            t.decompose()
        for t in content.select("ul.code-snippet__line-index"):
            t.decompose()
        if "style" in content.attrs:
            del content.attrs["style"]
        # 懒加载图片: data-src -> src
        seen = set()
        for img in content.find_all("img"):
            src = _fix_img_url(img.get("data-src") or img.get("data-original") or img.get("src"))
            if not src:
                img.decompose()
                continue
            img["src"] = src
            for a in ("data-src", "data-original"):
                if a in img.attrs:
                    del img.attrs[a]
            if src not in seen:
                seen.add(src)
                images.append({"index": len(images) + 1, "url": src,
                               "width": img.get("data-w"), "ratio": img.get("data-ratio"),
                               "type": img.get("data-type"), "alt": img.get("alt")})
        # 背景图（部分排版用 style background-image）
        for el in content.find_all(style=re.compile(r"background-image\s*:\s*url", re.I)):
            m2 = re.search(r'url\(\s*["\']?([^"\')]+)', el["style"])
            u = _fix_img_url(m2.group(1)) if m2 else None
            if u and "qpic.cn" in u and u not in seen:
                seen.add(u)
                images.append({"index": len(images) + 1, "url": u, "width": None, "ratio": None, "type": "background", "alt": None})
        # 视频 iframe
        for ifr in content.find_all("iframe"):
            vs = ifr.get("data-src") or ifr.get("src")
            if vs:
                ifr["src"] = _html.unescape(vs)
        content_html = str(content)
        text = content.get_text("\n")
        text = re.sub(r"[ \t\u00a0\u3000]+\n", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text).strip()
    else:
        text = ""

    # 图片消息 / 文字消息（item_show_type 8 / 10）没有 #js_content 正文的兜底
    if not _clean_text(text) and not images:
        extra_imgs = []
        for m in re.finditer(r'cdn_url\s*:\s*[\'"]([^\'"]+)[\'"]', html):
            u = _fix_img_url(_unescape_js(m.group(1)))
            if u and u not in extra_imgs:
                extra_imgs.append(u)
        cn = _js_var(html, "content_noencode") or _js_var(html, "text_page_info_content")
        if cn or (extra_imgs and meta.get("item_show_type") in (8, 10)):
            text = (cn or meta.get("digest") or "").strip()
            images = [{"index": i + 1, "url": u, "width": None, "ratio": None, "type": "picture", "alt": None}
                      for i, u in enumerate(extra_imgs)]
            parts = [f"<p>{_html.escape(line)}</p>" for line in text.split("\n") if line.strip()]
            parts += [f'<p><img src="{_html.escape(u)}"></p>' for u in extra_imgs]
            content_html = "<div>" + "".join(parts) + "</div>"

    meta["paid"] = bool(re.search(r'var\s+is_pay_subscribe\s*=\s*["\']?1', html)) or ("付费阅读" in html[:300000] and "pay_fee_area" in html)
    meta["content_html"] = content_html
    meta["content_text"] = text
    meta["images"] = images
    return meta

def html_to_markdown(content_html: str, img_map: dict | None = None) -> str:
    from bs4 import BeautifulSoup
    from markdownify import markdownify as md

    soup = BeautifulSoup(content_html, "lxml")
    img_map = img_map or {}
    for img in soup.find_all("img"):
        src = img.get("src")
        if src in img_map:
            img["src"] = img_map[src]
        img.attrs = {"src": img.get("src"), "alt": (img.get("alt") or "").replace("Image", "").strip()}
    # 微信 code-snippet: 一个 <pre> 内多个 <code>（每行一个）
    for pre in soup.find_all("pre"):
        codes = pre.find_all("code")
        if len(codes) > 1:
            lines = [c.get_text() for c in codes]
            pre.clear()
            new = soup.new_tag("code")
            new.string = "\n".join(lines)
            pre.append(new)
    for ifr in soup.find_all("iframe"):
        src = ifr.get("src") or ""
        a = soup.new_tag("a", href=src)
        a.string = "[视频]"
        ifr.replace_with(a)
    for tag in soup.find_all(["mpvoice", "mp-common-mpaudio"]):
        name = tag.get("name") or tag.get("data-name") or "音频"
        tag.replace_with(f"[音频: {name}]")
    body = soup.body or soup
    out = md(str(body), heading_style="ATX", bullets="-", strip=["span", "font"], escape_underscores=False,
             escape_asterisks=False, escape_misc=False)
    out = out.replace("\u00a0", " ")
    out = re.sub(r"[ \t]+\n", "\n", out)
    out = re.sub(r"\n{3,}", "\n\n", out)
    out = re.sub(r"\*\*\s*\*\*", "", out)
    return out.strip() + "\n"

# ----------------------------------------------------------------------------
# 抓取：HTTP 主路径
# ----------------------------------------------------------------------------
UA_PROFILES = [
    ("wechat-ios", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) "
                   "Mobile/15E148 MicroMessenger/8.0.50(0x1800323a) NetType/WIFI Language/zh_CN"),
    ("wechat-android", "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/AP2A.240805.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240501 "
                       "MMWEBID/1234 MicroMessenger/8.0.50.2701(0x28003252) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64"),
    ("desktop-chrome", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Chrome/128.0.0.0 Safari/537.36"),
    ("mobile-safari", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) "
                      "Version/17.5 Mobile/15E148 Safari/604.1"),
]

def _headers(ua: str) -> dict:
    return {
        "User-Agent": ua,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.6",
        "Accept-Encoding": "gzip, deflate",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Upgrade-Insecure-Requests": "1",
    }

def resolve_external(url: str, timeout: float) -> tuple[str | None, str]:
    """短链/第三方跳转：跟随重定向直到 mp.weixin.qq.com。"""
    import requests
    try:
        r = requests.get(url, headers=_headers(UA_PROFILES[0][1]), timeout=timeout, allow_redirects=True)
    except Exception as e:
        return None, f"解析跳转失败: {e}"
    for h in [x.url for x in r.history] + [r.url]:
        if urlparse(h).hostname == WX_HOST:
            nu, kind = normalize_url(h)
            if nu and kind != "external":
                return nu, f"重定向到 {h}"
    m = re.search(r'https?://mp\.weixin\.qq\.com/s[^\s"\'<>]+', r.text or "")
    if m:
        nu, kind = normalize_url(_html.unescape(m.group(0)))
        if nu and kind != "external":
            return nu, "页面内找到公众号链接"
    return None, f"链接最终落在 {urlparse(r.url).hostname}，不是公众号文章"

def http_plan(url: str, raw_url: str, n: int) -> list[tuple[str, str, str]]:
    """生成 (url 变体, ua 名, ua) 尝试序列。

    实测（2026-10）：/s/<id> 短链用微信 UA 直接 200；/s?__biz=..&sn=.. 长链如果缺 chksm 参数，
    任何 UA 都会被 302 到 wappoc_appmsgcaptcha（环境异常验证页），带上 chksm（原值，或占位值）
    且使用非微信 UA 则正常 200。因此长链优先用 非微信 UA + chksm。
    """
    ua = dict(UA_PROFILES)
    if "/s?" not in url:
        names = ["wechat-ios", "wechat-android", "desktop-chrome", "mobile-safari"]
        variants = [url]
    else:
        names = ["mobile-safari", "desktop-chrome", "wechat-ios", "wechat-android"]
        q = parse_qs(urlparse(raw_url if re.match(r"^https?://", raw_url or "", re.I) else "https://" + (raw_url or "")).query)
        chk = (q.get("chksm") or [""])[0]
        variants = [url + "&chksm=" + (chk or "0"), url]
    plan = []
    for i in range(max(1, n)):
        # 最后一次（且总次数>1）才用不带 chksm 的原始长链兜底
        v = variants[-1] if (n > 1 and i == n - 1) else variants[0]
        plan.append((v, names[i % len(names)], ua[names[i % len(names)]]))
    return plan

def fetch_http(url: str, retries: int, timeout: float, raw_url: str = "") -> dict:
    import requests
    attempts = []
    sess = requests.Session()
    last_html, last_url = "", url
    plan = http_plan(url, raw_url, retries + 1)
    for i, (req_url, name, ua) in enumerate(plan):
        try:
            r = sess.get(req_url, headers=_headers(ua), timeout=timeout, allow_redirects=True)
            r.encoding = r.encoding if r.encoding and r.encoding.lower() != "iso-8859-1" else "utf-8"
            html = r.text
            last_html, last_url = html, r.url
            if r.status_code != 200:
                attempts.append({"method": "http", "ua": name, "code": "NETWORK_ERROR", "message": f"HTTP {r.status_code}"})
            else:
                parsed = parse_article(html, r.url)
                if _clean_text(parsed["content_text"]) or parsed["images"]:
                    attempts.append({"method": "http", "ua": name, "code": "OK", "message": f"HTTP 200, {len(html)} bytes"})
                    return {"ok": True, "parsed": parsed, "final_url": r.url, "attempts": attempts, "html": html}
                cls = classify_page(html, r.url) or ("PARSE_ERROR", "未找到 #js_content 正文")
                attempts.append({"method": "http", "ua": name, "code": cls[0], "message": cls[1]})
                if cls[0] in ("ARTICLE_DELETED", "ACCOUNT_MIGRATED"):
                    break  # 确定性失败，不再重试
        except requests.RequestException as e:
            attempts.append({"method": "http", "ua": name, "code": "NETWORK_ERROR", "message": str(e)[:300]})
        if i < retries:
            time.sleep(1.0 + random.random() * 1.5 * (i + 1))
            if attempts[-1]["code"] == "ANTI_BOT":
                sess = requests.Session()  # 换一套 cookie
    return {"ok": False, "attempts": attempts, "final_url": last_url, "html": last_html}

# ----------------------------------------------------------------------------
# 抓取：浏览器降级
# ----------------------------------------------------------------------------
def fetch_browser(url: str, timeout: float, auto_setup: bool, raw_url: str = "") -> dict:
    req_url, ua_name, ua = http_plan(url, raw_url, 1)[0]
    ok, msg = ensure_browser_deps(auto_setup)
    if not ok:
        return {"ok": False, "attempts": [{"method": "browser", "code": "BROWSER_UNAVAILABLE", "message": msg}]}
    from playwright.sync_api import sync_playwright
    attempts = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-blink-features=AutomationControlled"])
            ctx = browser.new_context(
                user_agent=ua, locale="zh-CN", timezone_id="Asia/Shanghai",
                viewport={"width": 390, "height": 844}, device_scale_factor=3, is_mobile=True, has_touch=True,
                extra_http_headers={"Accept-Language": "zh-CN,zh;q=0.9"})
            ctx.add_init_script("Object.defineProperty(navigator,'webdriver',{get:()=>undefined});")
            page = ctx.new_page()
            page.goto(req_url, wait_until="domcontentloaded", timeout=int(timeout * 1000))
            try:
                page.wait_for_selector("#js_content, .weui-msg, #js_text_title, .share_content_page", timeout=int(timeout * 1000))
            except Exception:
                pass
            # 滚动触发懒加载（原始 data-src 已足够，但部分模板会动态插入）
            try:
                page.evaluate("""async () => { for (let y=0; y<document.body.scrollHeight; y+=1200) { window.scrollTo(0,y); await new Promise(r=>setTimeout(r,60)); } }""")
            except Exception:
                pass
            html = page.content()
            final_url = page.url
            browser.close()
    except Exception as e:
        return {"ok": False, "attempts": [{"method": "browser", "code": "NETWORK_ERROR", "message": str(e).splitlines()[0][:300]}]}
    parsed = parse_article(html, final_url)
    if _clean_text(parsed["content_text"]) or parsed["images"]:
        attempts.append({"method": "browser", "code": "OK", "message": f"rendered {len(html)} bytes"})
        return {"ok": True, "parsed": parsed, "final_url": final_url, "attempts": attempts, "html": html}
    cls = classify_page(html, final_url) or ("PARSE_ERROR", "浏览器渲染后仍未找到正文")
    attempts.append({"method": "browser", "code": cls[0], "message": cls[1]})
    return {"ok": False, "attempts": attempts, "final_url": final_url, "html": html}

# ----------------------------------------------------------------------------
# 图片下载
# ----------------------------------------------------------------------------
def _img_ext(url: str, ctype: str | None) -> str:
    q = parse_qs(urlparse(url).query)
    fmt = (q.get("wx_fmt") or q.get("tp") or [""])[0].lower()
    m = re.search(r"mmbiz_(\w+)/", url)
    fmt = fmt or (m.group(1) if m else "")
    if ctype:
        ct = ctype.split(";")[0].strip().lower()
        fmt = {"image/jpeg": "jpg", "image/png": "png", "image/gif": "gif", "image/webp": "webp",
               "image/svg+xml": "svg", "image/bmp": "bmp"}.get(ct, fmt)
    fmt = {"jpeg": "jpg", "other": "jpg", "": "jpg"}.get(fmt, fmt)
    return fmt if re.fullmatch(r"[a-z0-9]{2,5}", fmt) else "jpg"

def download_images(images: list[dict], img_dir: str, timeout: float) -> dict:
    import requests
    os.makedirs(img_dir, exist_ok=True)
    sess = requests.Session()
    hdr = {"User-Agent": UA_PROFILES[0][1], "Referer": "https://mp.weixin.qq.com/", "Accept": "image/avif,image/webp,image/*,*/*;q=0.8"}
    mapping = {}
    for im in images:
        url = im["url"]
        err = None
        for attempt in range(3):
            try:
                r = sess.get(url, headers=hdr, timeout=timeout)
                if r.status_code == 200 and r.content and len(r.content) > 100:
                    ext = _img_ext(url, r.headers.get("Content-Type"))
                    fn = f"{im['index']:03d}.{ext}"
                    with open(os.path.join(img_dir, fn), "wb") as f:
                        f.write(r.content)
                    im["local_path"] = os.path.join(os.path.basename(img_dir), fn)
                    im["bytes"] = len(r.content)
                    im["downloaded"] = True
                    mapping[url] = im["local_path"]
                    err = None
                    break
                err = f"HTTP {r.status_code}, {len(r.content)} bytes"
            except Exception as e:
                err = str(e)[:200]
            time.sleep(0.5 * (attempt + 1))
        if err:
            im["downloaded"] = False
            im["error"] = err
    return mapping

# ----------------------------------------------------------------------------
# 输出
# ----------------------------------------------------------------------------
def _yaml_str(v) -> str:
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, (int, float)):
        return str(v)
    return json.dumps(str(v), ensure_ascii=False)

FRONT_KEYS = ["title", "account_name", "account_id", "author", "publish_time", "publish_timestamp", "url", "canonical_url",
              "source_url", "digest", "cover", "is_original", "item_show_type", "biz", "mid", "idx", "sn",
              "word_count", "image_count", "fetch_method", "fetched_at", "code"]

def render_markdown(res: dict) -> str:
    lines = ["---"]
    for k in FRONT_KEYS:
        lines.append(f"{k}: {_yaml_str(res.get(k))}")
    lines.append("---\n")
    if res.get("title"):
        lines.append(f"# {res['title']}\n")
    return "\n".join(lines) + "\n" + (res.get("content_markdown") or "")

def build_result(parsed: dict, url: str, final_url: str, method: str, attempts: list) -> dict:
    text = parsed["content_text"]
    res = {
        "ok": True, "code": "OK", "message": "", "version": VERSION,
        "url": url, "final_url": final_url, "fetch_method": method,
        "fetched_at": _dt.datetime.now(TZ_CN).isoformat(timespec="seconds"),
    }
    for k in ("title", "account_name", "account_id", "author", "publish_time", "publish_timestamp", "digest", "cover",
              "source_url", "canonical_url", "is_original", "item_show_type", "biz", "mid", "idx", "sn", "paid"):
        res[k] = parsed.get(k)
    res["word_count"] = len(re.sub(r"\s", "", text))
    res["image_count"] = len(parsed["images"])
    res["images"] = parsed["images"]
    res["content_text"] = text
    res["content_html"] = parsed["content_html"]
    res["attempts"] = attempts
    if parsed.get("paid"):
        res["code"], res["message"] = "PAID_CONTENT", ERRORS["PAID_CONTENT"][1]
    return res

def run(args) -> int:
    if args.download_images and not args.out:
        _fatal("USAGE_ERROR", "--download-images 需要同时指定 --out")
    nu, kind = normalize_url(args.url)
    if not nu:
        _fatal("INVALID_URL", f"{ERRORS['INVALID_URL'][1]}: {kind}")
    attempts = []
    try:
        attempts = json.loads(os.environ.pop("WXFETCH_PRIOR_ATTEMPTS", "[]"))
    except Exception:
        attempts = []
    if kind == "external":
        log(f"非 mp.weixin.qq.com 链接，尝试跟随跳转: {nu}")
        r, why = resolve_external(nu, args.timeout)
        attempts.append({"method": "resolve", "code": "OK" if r else "INVALID_URL", "message": why})
        if not r:
            return finish_error("INVALID_URL", why, args, attempts)
        nu = r
    log(f"抓取 {nu}")

    result = None
    if args.method in ("auto", "http"):
        h = fetch_http(nu, args.retries, args.timeout, args.url)
        attempts += h["attempts"]
        if h["ok"]:
            result = build_result(h["parsed"], nu, h["final_url"], "http", attempts)
        else:
            last = h["attempts"][-1]["code"] if h["attempts"] else "NETWORK_ERROR"
            log(f"HTTP 路径失败: {last} {h['attempts'][-1]['message'] if h['attempts'] else ''}")
            if args.save_debug_html and h.get("html") and args.out:
                os.makedirs(args.out, exist_ok=True)
                with open(os.path.join(args.out, "debug_http.html"), "w", encoding="utf-8") as f:
                    f.write(h["html"])
            if args.method == "http" or last in ("ARTICLE_DELETED", "ACCOUNT_MIGRATED"):
                return finish_error(last, attempts[-1]["message"], args, attempts)
    if result is None:
        log("降级到无头浏览器 (Playwright + Chromium) ...")
        _PRIOR_ATTEMPTS[:] = attempts
        b = fetch_browser(nu, max(args.timeout, 30), not args.no_auto_setup, args.url)
        attempts += b["attempts"]
        if b["ok"]:
            result = build_result(b["parsed"], nu, b["final_url"], "browser", attempts)
        else:
            # 选择最有信息量的失败原因
            codes = [a["code"] for a in attempts]
            for pref in ("ARTICLE_DELETED", "ACCOUNT_MIGRATED", "WECHAT_ONLY", "ANTI_BOT", "PARSE_ERROR", "BROWSER_UNAVAILABLE", "NETWORK_ERROR"):
                if pref in codes:
                    a = [x for x in attempts if x["code"] == pref][-1]
                    return finish_error(pref, a["message"], args, attempts)
            return finish_error("PARSE_ERROR", "未知失败", args, attempts)

    key = article_key(nu, result)
    img_map = {}
    out_dir = None
    if args.out:
        out_dir = os.path.join(os.path.abspath(args.out), key) if not args.flat else os.path.abspath(args.out)
        os.makedirs(out_dir, exist_ok=True)
    if args.download_images:
        if not out_dir:
            _fatal("USAGE_ERROR", "--download-images 需要同时指定 --out")
        log(f"下载 {len(result['images'])} 张图片 ...")
        img_map = download_images(result["images"], os.path.join(out_dir, "images"), args.timeout)
        failed = sum(1 for i in result["images"] if not i.get("downloaded"))
        result["images_downloaded"] = len(result["images"]) - failed
        if failed and result["code"] == "OK":
            result["code"], result["message"] = "IMAGE_DOWNLOAD_PARTIAL", f"{failed} 张图片下载失败"
    result["content_markdown"] = html_to_markdown(result["content_html"], img_map)
    result["article_id"] = key
    if not args.include_html:
        result.pop("content_html", None)

    fmt = args.format or ("both" if out_dir else "json")
    files = {}
    if out_dir and args.download_images:
        files["images_dir"] = os.path.join(out_dir, "images")
    if out_dir:
        if fmt in ("md", "both"):
            p = os.path.join(out_dir, "article.md")
            with open(p, "w", encoding="utf-8") as f:
                f.write(render_markdown(result))
            files["markdown"] = p
        if fmt in ("json", "both"):
            p = os.path.join(out_dir, "article.json")
            files["json"] = p
            result["files"] = files
            with open(p, "w", encoding="utf-8") as f:
                json.dump(result, f, ensure_ascii=False, indent=2)
        result["files"] = files
        summary = {k: result.get(k) for k in ("ok", "code", "message", "article_id", "title", "account_name", "author",
                                                "publish_time", "word_count", "image_count", "images_downloaded",
                                                "fetch_method", "url", "final_url")}
        summary["files"] = files
        summary["attempts"] = attempts
        print(json.dumps(summary, ensure_ascii=False, indent=2))
    else:
        if fmt == "md":
            print(render_markdown(result))
        else:
            print(json.dumps(result, ensure_ascii=False, indent=2))
    log(f"完成: {result['code']} via {result['fetch_method']} | {result.get('title')} | {result['word_count']} 字 | {result['image_count']} 图")
    return ERRORS[result["code"]][0]

def finish_error(code: str, msg: str, args, attempts) -> int:
    res = {"ok": False, "code": code, "message": f"{ERRORS[code][1]}: {msg}", "version": VERSION,
           "url": args.url, "attempts": attempts}
    if args.out:
        os.makedirs(args.out, exist_ok=True)
        p = os.path.join(args.out, "error.json")
        with open(p, "w", encoding="utf-8") as f:
            json.dump(res, f, ensure_ascii=False, indent=2)
        res["files"] = {"error": p}
    print(json.dumps(res, ensure_ascii=False, indent=2))
    log(f"失败: {code} — {msg}")
    return ERRORS[code][0]

def doctor(argv) -> int:
    fix = "--fix" in argv
    cmd = ["bash", SETUP_SH] + ([] if fix else ["--check"])
    if "--core" in argv:
        cmd = ["bash", SETUP_SH, "--core"]
    return subprocess.call(cmd)

def main():
    global _QUIET
    if len(sys.argv) > 1 and sys.argv[1] in ("doctor", "setup"):
        sys.exit(doctor(sys.argv[2:] + (["--fix"] if sys.argv[1] == "setup" else [])))
    ap = argparse.ArgumentParser(prog="wxfetch", description="抓取微信公众号文章（原样返回），HTTP 主路径 + 浏览器降级")
    ap.add_argument("url", help="mp.weixin.qq.com/s/... 或 /s?__biz=..&mid=..&idx=..&sn=.. 或会跳转到公众号文章的短链")
    ap.add_argument("--out", "-o", help="输出目录（会在其下建 <article_id>/ 子目录）。不指定则把结果打印到 stdout")
    ap.add_argument("--format", "-f", choices=["md", "json", "both"], help="输出格式；有 --out 时默认 both，否则默认 json")
    ap.add_argument("--download-images", action="store_true", help="下载图片到 <out>/<id>/images/ 并在 Markdown 中改写为本地相对路径")
    ap.add_argument("--method", choices=["auto", "http", "browser"], default="auto", help="auto=HTTP 失败后降级浏览器（默认）")
    ap.add_argument("--retries", type=int, default=3, help="HTTP 重试次数（会轮换 UA），默认 3")
    ap.add_argument("--timeout", type=float, default=20, help="单次请求超时秒数，默认 20")
    ap.add_argument("--flat", action="store_true", help="直接写入 --out 目录，不建 <article_id> 子目录")
    ap.add_argument("--include-html", action="store_true", help="JSON 中附带 content_html（清洗后的 #js_content HTML）")
    ap.add_argument("--save-debug-html", action="store_true", help="HTTP 失败时把原始页面保存为 <out>/debug_http.html")
    ap.add_argument("--no-auto-setup", action="store_true", help="依赖缺失时不自动安装，直接报 DEPENDENCY_ERROR")
    ap.add_argument("--quiet", "-q", action="store_true", help="不输出 stderr 进度日志")
    ap.add_argument("--version", action="version", version=VERSION)
    args = ap.parse_args()
    _QUIET = args.quiet
    ensure_core_deps(not args.no_auto_setup)
    sys.exit(run(args))

if __name__ == "__main__":
    main()
```
