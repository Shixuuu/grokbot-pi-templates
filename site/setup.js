/* Per-bot zip: fetch the template folder from raw.githubusercontent.com (pinned to the build commit) using the
 * build-time manifest, add SETUP.md + setup.sh + hermes/MEMORY.md, zip client-side with JSZip. */
(() => {
  "use strict";
  const SITE = "https://shixuuu.github.io/grokbot-pi-templates/";
  const HERMES_MEMORY_LIMIT = 2200;
  const enc = (p) => p.split("/").map(encodeURIComponent).join("/");
  const manifestUrl = (it) => `m/${it.p.replace(/\//g, "__")}.json`;
  const rawUrl = (repo, ref, it, f) => `https://raw.githubusercontent.com/${repo}/${ref}/templates/${enc(it.p)}/${enc(f)}`;
  const shq = (s) => `'${String(s).replace(/'/g, `'\\''`)}'`;

  async function fetchRetry(url, as = "arrayBuffer", tries = 3) {
    let last;
    for (let i = 0; i < tries; i++) {
      try {
        const r = await fetch(url, { cache: "force-cache" });
        if (!r.ok) throw new Error(`HTTP ${r.status} for ${url.split("/").slice(-2).join("/")}`);
        return await r[as]();
      } catch (e) {
        last = e;
        await new Promise((res) => setTimeout(res, 300 * (i + 1)));
      }
    }
    throw last;
  }

  /** Routines: names from routines/*.md, schedules from the first non-comment line of cron/<name>.cron. */
  function routinesOf(files, text) {
    const names = files.filter((f) => /^routines\/[^/]+\.md$/.test(f)).map((f) => f.slice(9, -3));
    return names.map((n) => {
      const c = text[`cron/${n}.cron`];
      let cron = "";
      if (c) {
        const line = c.split("\n").find((l) => l.trim() && !l.trim().startsWith("#"));
        if (line) cron = line.trim().split(/\s+/).slice(0, 5).join(" ");
      }
      const titleLine = (text[`routines/${n}.md`] || "").split("\n")[0].replace(/^#\s*(Routine:\s*)?/, "").trim();
      return { name: n, cron, title: titleLine || n, prompt: files.includes(`prompts/${n}.md`) };
    });
  }

  /** MEMORY.md bullets ("- **kind** (date): text") -> Hermes entries joined by "\n§\n", split at the 2,200-char limit. */
  function hermesMemory(md) {
    if (!md) return null;
    const entries = [];
    let cur = null;
    for (const line of md.split("\n")) {
      const m = line.match(/^- \*\*(\w+)\*\*(?: \(([^)]*)\))?:\s?(.*)$/);
      if (m) {
        if (cur) entries.push(cur);
        cur = { kind: m[1], text: (m[2] && m[1] === "log" ? `[${m[2]}] ` : "") + m[3] };
      } else if (cur && line.trim()) cur.text += "\n" + line.trim();
    }
    if (cur) entries.push(cur);
    if (!entries.length) return null;
    entries.sort((a, b) => (a.kind === "profile" ? 0 : 1) - (b.kind === "profile" ? 0 : 1));
    const fit = [];
    const rest = [];
    let used = 0;
    for (const e of entries) {
      const add = (fit.length ? 3 : 0) + e.text.length;
      if (!rest.length && used + add <= HERMES_MEMORY_LIMIT) {
        fit.push(e.text);
        used += add;
      } else rest.push(e.text);
    }
    return { memory: fit.join("\n§\n") + "\n", overflow: rest.length ? rest.map((t) => `- ${t.replace(/\n/g, "\n  ")}`).join("\n") + "\n" : "", total: entries.length, fit: fit.length };
  }

  function setupMd(it, data, files, routines, mem, connectors) {
    const slug = it.s;
    const skills = [...new Set(files.filter((f) => /^skills\/[^/]+\/SKILL\.md$/.test(f)).map((f) => f.split("/")[1]))];
    const scheduled = routines.filter((r) => r.cron);
    const unscheduled = routines.filter((r) => !r.cron);
    const catPath = it.p;
    const L = [];
    L.push(`# Set up "${it.n}"`, "");
    L.push(`${it.d}`, "");
    L.push(`| | |`, `| --- | --- |`);
    L.push(`| Template | ${it.i ? `https://x.ai/bot/${it.i}` : "(no public share link)"} |`);
    L.push(`| Creator | ${it.cr || "?"}${it.h ? ` ([@${it.h}](https://x.com/${it.h}))` : ""} |`);
    L.push(`| Catalog folder | https://github.com/${data.repo}/tree/${data.ref}/templates/${enc(catPath)} |`);
    const pl = (n, w, ws = w + "s") => `${n} ${n === 1 ? w : ws}`;
    L.push(`| Contents | ${pl(skills.length, "skill")}, ${pl(routines.length, "routine")} (${scheduled.length} scheduled), ${pl(it.m, "memory seed")}, ${pl(connectors.length, "connector")} |`);
    L.push(`| Downloaded from | ${SITE} (commit ${data.ref.slice(0, 7)}) |`, "");
    L.push("Unzip first: `unzip " + slug + ".zip && cd " + slug + "`. Every path below is relative to that folder.", "");
    L.push("## What's in this folder", "");
    L.push("| File | What it is |", "| --- | --- |");
    L.push("| `AGENTS.md` | The bot's persona and instructions (Grok Bot profile) |");
    if (files.includes(".pi/APPEND_SYSTEM.md")) L.push("| `.pi/APPEND_SYSTEM.md`, `.pi/settings.json` | Pi project config: persona appended to the system prompt; skills/prompts paths |");
    if (skills.length) L.push(`| \`skills/<name>/SKILL.md\` | ${pl(skills.length, "skill")}: ${skills.map((s) => `\`${s}\``).join(", ")} |`);
    if (routines.length) L.push("| `routines/<name>.md` | Routine text, verbatim |", "| `prompts/<name>.md` | Pi prompt templates (`/<name>`) for each routine |");
    if (scheduled.length) L.push("| `cron/*.cron`, `systemd/*` | Schedule sketches (crontab lines, systemd user timers) |");
    if (files.includes("MEMORY.md")) L.push("| `MEMORY.md` | Memory seeds shipped with the template |");
    if (mem) L.push("| `hermes/MEMORY.md` | The same seeds in Hermes format (`§`-separated, fits the 2,200-char limit) |");
    if (connectors.length) L.push("| `CONNECTORS.md`, `connectors.json` | Grok Bot plugins the bot used, to re-add as MCP servers |");
    L.push("| `setup.sh` | Optional helper that runs the steps below (`./setup.sh pi` or `./setup.sh hermes`) |", "");

    L.push("## Option 1: Pi", "");
    L.push("Needs Node 22.19+ and Pi 1.0+: `npm install -g @earendil-works/pi-coding-agent`.", "");
    L.push("**A. Run the bot in its folder** (persona + skills + routine prompts):", "");
    L.push("```bash", `cd ${slug}`, "pi --approve        # trusts the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/", "```", "");
    L.push("**B. Install the skills and routine prompts globally** (available in every Pi session, persona only applies inside the folder):", "");
    L.push("```bash", `pi install ./${slug}`, "```", "");
    L.push("**C. Or let the grokbot extension do everything** (persona + memory into `APPEND_SYSTEM.md`, disabled MCP stubs for connectors, real crontab/systemd schedules, clean uninstall). No GitHub login needed:", "");
    L.push("```bash", "pi install git:github.com/Shixuuu/pi-grokbot-import", "npm install -g github:Shixuuu/pi-grokbot-import", `grokbot install ${catPath} --dry-run   # review the plan`, `grokbot install ${catPath}`, "```", "");
    if (scheduled.length) {
      L.push("**Schedules (A/B).** Pi has no scheduler. Add crontab lines (`crontab -e`), replacing the path, or run `./setup.sh pi --cron`:", "");
      L.push("```cron");
      for (const r of scheduled) L.push(`${r.cron} cd /absolute/path/to/${slug} && pi -p "/${r.name}"`);
      L.push("```", "");
      L.push("Times are in the host's timezone; Grok Bot ran them in yours. Add `CRON_TZ=Area/City` above the lines if they differ.", "");
    }
    if (connectors.length) L.push(`**Connectors.** See \`CONNECTORS.md\`. Add an MCP server per connector with \`pi mcp add\` or \`.pi/mcp.json\`. No credentials are included.`, "");

    L.push("## Option 2: Hermes Agent (Nous Research)", "");
    L.push("Needs Hermes Agent installed (`hermes` on PATH, see https://hermes-agent.nousresearch.com/docs/). The bot gets its own **profile** so its persona, memory, skills and cron jobs stay separate from your main agent.", "");
    L.push("| This folder | Hermes |", "| --- | --- |");
    L.push(`| (new agent) | profile \`${slug}\`: \`~/.hermes/profiles/${slug}/\`, run it with \`hermes -p ${slug}\` |`);
    L.push(`| \`AGENTS.md\` | \`~/.hermes/profiles/${slug}/SOUL.md\` (primary identity, slot #1 of the system prompt) |`);
    if (skills.length) L.push(`| \`skills/<name>/\` | \`~/.hermes/profiles/${slug}/skills/grokbot/<name>/\` (same SKILL.md format: name + description frontmatter) |`);
    if (mem) L.push(`| \`hermes/MEMORY.md\` | \`~/.hermes/profiles/${slug}/memories/MEMORY.md\` (${mem.fit} of ${mem.total} seeds fit the 2,200-char limit${mem.overflow ? "; the rest are appended to SOUL.md" : ""}) |`);
    if (routines.length) L.push(`| \`routines/<name>.md\` + \`cron/<name>.cron\` | \`hermes -p ${slug} cron create "<cron>" "<prompt>" --workdir <this folder>\` (jobs live in \`~/.hermes/profiles/${slug}/cron/jobs.json\`) |`);
    if (connectors.length) L.push(`| \`CONNECTORS.md\` | \`mcp_servers:\` in \`~/.hermes/profiles/${slug}/config.yaml\` or \`hermes -p ${slug} mcp install <name>\` |`);
    L.push(`| Timezone | \`hermes -p ${slug} config set timezone Area/City\` |`, "");
    L.push("Automatic (creates the profile, copies persona, skills and memory; add `--cron` to also create the scheduled jobs, `--tz Area/City` to set the timezone):", "");
    L.push("```bash", `cd ${slug}`, `./setup.sh hermes --tz America/New_York        # add --cron to create the ${scheduled.length} scheduled job(s)`, `hermes -p ${slug}`, "```", "");
    L.push("Manual equivalent:", "");
    L.push("```bash", `cd ${slug}`, `hermes profile create ${slug}`, `P=~/.hermes/profiles/${slug}`, `cp AGENTS.md "$P/SOUL.md"`);
    if (skills.length) L.push(`mkdir -p "$P/skills/grokbot" && cp -R skills/* "$P/skills/grokbot/"`);
    if (mem) L.push(`mkdir -p "$P/memories" && cp hermes/MEMORY.md "$P/memories/MEMORY.md"`);
    if (mem && mem.overflow) L.push(`printf '\\n\\n## Memory seeds (reference)\\n\\n' >> "$P/SOUL.md" && cat hermes/MEMORY-overflow.md >> "$P/SOUL.md"`);
    for (const r of scheduled) L.push(`hermes -p ${slug} cron create ${shq(r.cron)} "Run the routine in routines/${r.name}.md: read that file and follow it exactly." --name ${shq(`${slug}: ${r.name}`)} --workdir "$PWD"`);
    L.push("```", "");
    L.push("Cron jobs with `--workdir` load this folder's `AGENTS.md` and run file/terminal tools from it, so keep the folder where it is (or recreate the jobs after moving it).", "");
    if (unscheduled.length) L.push(`Routines without a schedule (run them on demand, or give them one): ${unscheduled.map((r) => `\`${r.name}\``).join(", ")}.`, "");

    L.push("## Paste this to your agent", "");
    L.push("If you'd rather have your agent (Pi, Hermes, or another coding agent) do the setup, paste this:", "");
    L.push("```text");
    L.push(`I downloaded the Grok Bot template "${it.n}" into ./${slug} (unzipped). Set it up for yourself:`);
    L.push(`1. Read ./${slug}/SETUP.md, README.md and AGENTS.md. Tell me in 3 bullets what this bot does and what it needs from me.`);
    L.push("2. Install it using the section of SETUP.md that matches you (Pi: option A, B or C; Hermes: the profile steps). Show me the exact commands before running anything that writes outside this folder.");
    L.push(`3. Ask me for anything the template says to fill in${routines.length ? " (timezone, accounts, channels, fill-ins listed in routines/*.md)" : ""}. Do not invent values.`);
    if (scheduled.length) L.push(`4. Do not create the ${scheduled.length} scheduled job(s) until I confirm the times and timezone.`);
    if (connectors.length) L.push(`${scheduled.length ? 5 : 4}. For connectors in CONNECTORS.md, tell me which MCP servers to add and what credentials each needs; never paste secrets into files in this folder.`);
    L.push("Never send messages, place trades, or spend money on my behalf without asking me first.");
    L.push("```", "");
    L.push("---", "", `Content belongs to the original creator. Converted from Grok Bot by https://github.com/${data.repo} (unofficial, not affiliated with xAI).`, "");
    return L.join("\n");
  }

  function setupSh(it, routines, mem, connectors) {
    const slug = it.s;
    const scheduled = routines.filter((r) => r.cron);
    const R = scheduled.map((r) => `  ${shq(`${r.name}|${r.cron}`)}`).join("\n");
    return `#!/usr/bin/env bash
# Setup helper for the Grok Bot template "${it.n.replace(/[\r\n]/g, " ")}" (${slug}). See SETUP.md for what each step does.
#
#   ./setup.sh pi [--cron]                                     pi install this folder; --cron also adds crontab lines
#   ./setup.sh hermes [--profile NAME] [--tz Area/City] [--cron]  Hermes profile with persona, skills, memory; --cron creates jobs
set -euo pipefail
DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
SLUG=${shq(slug)}
MODE="\${1:-}"; [ $# -gt 0 ] && shift
PROFILE="$SLUG"; TZ_NAME=""; WITH_CRON=0
while [ $# -gt 0 ]; do
  case "$1" in
    --profile) PROFILE="$2"; shift 2 ;;
    --tz) TZ_NAME="$2"; shift 2 ;;
    --cron) WITH_CRON=1; shift ;;
    *) echo "Unknown option: $1" >&2; exit 2 ;;
  esac
done
ROUTINES=(
${R}
)

case "$MODE" in
  pi)
    command -v pi >/dev/null || { echo "pi not found. Install: npm install -g @earendil-works/pi-coding-agent" >&2; exit 1; }
    pi install "$DIR"
    echo "Installed skills + prompt templates. To run the bot with its persona: cd \\"$DIR\\" && pi --approve"
    for r in \${ROUTINES[@]+"\${ROUTINES[@]}"}; do
      n="\${r%%|*}"; c="\${r#*|}"
      line="$c cd \\"$DIR\\" && pi -p \\"/$n\\" # grokbot-template:$SLUG:$n"
      if [ "$WITH_CRON" = 1 ]; then
        { crontab -l 2>/dev/null | grep -vF "# grokbot-template:$SLUG:$n" || true; echo "$line"; } | crontab -
        echo "crontab: added $n ($c)"
      else
        echo "schedule (add with --cron or crontab -e): $line"
      fi
    done
    ;;
  hermes)
    command -v hermes >/dev/null || { echo "hermes not found. Install Hermes Agent: https://hermes-agent.nousresearch.com/docs/" >&2; exit 1; }
    ROOT="\${HERMES_ROOT:-$HOME/.hermes}"
    P="$ROOT/profiles/$PROFILE"
    if [ ! -d "$P" ]; then hermes profile create "$PROFILE"; fi
    mkdir -p "$P/skills/grokbot" "$P/memories"
    if [ -f "$P/SOUL.md" ] && ! grep -q "grokbot-template:$SLUG" "$P/SOUL.md"; then cp "$P/SOUL.md" "$P/SOUL.md.bak"; echo "Backed up the existing SOUL.md to SOUL.md.bak"; fi
    { echo "<!-- grokbot-template:$SLUG -->"; cat "$DIR/AGENTS.md"; } > "$P/SOUL.md"
    echo "Persona: $P/SOUL.md"
    if [ -d "$DIR/skills" ]; then
      for s in "$DIR"/skills/*/; do [ -d "$s" ] || continue; n="$(basename "$s")"; rm -rf "$P/skills/grokbot/$n"; cp -R "$s" "$P/skills/grokbot/$n"; echo "Skill: grokbot/$n"; done
    fi
${mem ? `    if [ -s "$P/memories/MEMORY.md" ] && ! cmp -s "$P/memories/MEMORY.md" "$DIR/hermes/MEMORY.md"; then cp "$P/memories/MEMORY.md" "$P/memories/MEMORY.md.bak"; echo "Backed up the existing MEMORY.md"; fi
    cp "$DIR/hermes/MEMORY.md" "$P/memories/MEMORY.md"; echo "Memory: ${mem.fit} seed(s) -> $P/memories/MEMORY.md"
${mem.overflow ? `    { printf '\\n\\n## Memory seeds (reference)\\n\\n'; cat "$DIR/hermes/MEMORY-overflow.md"; } >> "$P/SOUL.md"; echo "Memory: ${mem.total - mem.fit} more seed(s) appended to SOUL.md (over the 2,200-char limit)"
` : ""}` : ""}    if [ -n "$TZ_NAME" ]; then hermes -p "$PROFILE" config set timezone "$TZ_NAME"; fi
    for r in \${ROUTINES[@]+"\${ROUTINES[@]}"}; do
      n="\${r%%|*}"; c="\${r#*|}"
      prompt="Run the routine in routines/$n.md: read that file and follow it exactly."
      if [ "$WITH_CRON" = 1 ]; then
        hermes -p "$PROFILE" cron create "$c" "$prompt" --name "$SLUG: $n" --workdir "$DIR"
      else
        echo "cron (add with --cron): hermes -p $PROFILE cron create '$c' \\"$prompt\\" --name '$SLUG: $n' --workdir \\"$DIR\\""
      fi
    done
${connectors.length ? `    echo "Connectors: see $DIR/CONNECTORS.md; add MCP servers under mcp_servers: in $P/config.yaml or with: hermes -p $PROFILE mcp install <name>"\n` : ""}    echo "Done. Start it with: hermes -p $PROFILE"
    ;;
  *)
    sed -n '2,6p' "$0"; exit 2 ;;
esac
`;
  }

  async function buildZip(it, data, onProgress = () => {}) {
    if (typeof JSZip === "undefined") throw new Error("JSZip did not load");
    const man = await fetchRetry(manifestUrl(it), "json");
    const files = man.files.map((f) => f.p);
    const ref = man.ref || data.ref;
    const zip = new JSZip();
    const root = zip.folder(it.s);
    const text = {};
    const queue = files.slice();
    let done = 0;
    onProgress(0, files.length);
    const worker = async () => {
      while (queue.length) {
        const f = queue.shift();
        const buf = await fetchRetry(rawUrl(data.repo, ref, it, f));
        if (/\.(md|cron|json)$/.test(f)) text[f] = new TextDecoder().decode(buf);
        root.file(f, buf, { binary: true, date: new Date(data.generatedAt) });
        onProgress(++done, files.length);
      }
    };
    await Promise.all(Array.from({ length: Math.min(8, files.length) }, worker));
    const routines = routinesOf(files, text);
    const mem = hermesMemory(text["MEMORY.md"]);
    let connectors = [];
    try {
      connectors = JSON.parse(text["connectors.json"] || "{}").plugins || [];
    } catch {}
    const d = new Date(data.generatedAt);
    root.file("SETUP.md", setupMd(it, { ...data, ref }, files, routines, mem, connectors), { date: d });
    root.file("setup.sh", setupSh(it, routines, mem, connectors), { date: d, unixPermissions: 0o755 });
    if (mem) {
      root.file("hermes/MEMORY.md", mem.memory, { date: d });
      if (mem.overflow) root.file("hermes/MEMORY-overflow.md", mem.overflow, { date: d });
    }
    const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 6 }, platform: "UNIX" });
    return { blob, name: `${it.s}.zip`, files: files.length };
  }

  window.GrokbotSetup = { buildZip, hermesMemory, routinesOf };
})();
