#!/usr/bin/env node
// Validate converted templates with the real Pi runtime.
//  A) Resource load (all live templates): Pi's own DefaultResourceLoader with cwd = an isolated copy of the
//     template, project trust granted. Checks every SKILL.md and prompt loads, AGENTS.md + APPEND_SYSTEM.md are
//     picked up, and there are no diagnostics.
//  B) CLI end-to-end (sample: all official + N community): `pi -p --approve` against a local mock
//     OpenAI-compatible model. Checks the request Pi sends has the persona in the system prompt, lists the
//     template's skills, and expands the routine prompt template.
// Usage: node scripts/05-validate.mjs [--community-sample 30] [--skip-loader] [--skip-cli]
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { ROOT, readJson, writeJson, pool } from "./lib/util.mjs";

const PI_HOME = path.dirname(path.dirname(fs.realpathSync(process.env.PI_BIN || "/home/box/.local/bin/pi").replace(/\/dist\/.*$/, "/dist/x")));
const pi = await import(path.join(PI_HOME, "dist", "index.js"));
const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
const catalog = readJson(path.join(ROOT, "catalog.json")).templates.filter((t) => t.status === "live");
const results = { generatedAt: new Date().toISOString(), piVersion: readJson(path.join(PI_HOME, "package.json")).version, loader: [], cli: [] };

function isolatedCopy(rel) {
  const dst = fs.mkdtempSync(path.join(os.tmpdir(), "gbpt-"));
  fs.cpSync(path.join(ROOT, rel), dst, { recursive: true });
  return dst;
}
// Packages without .pi/settings.json (e.g. hand-written self-exports) are meant for `pi install`: load their manifest paths.
function manifestPaths(dir) {
  if (fs.existsSync(path.join(dir, ".pi", "settings.json"))) return { skills: [], prompts: [] };
  const pkg = readJson(path.join(dir, "package.json"), {});
  const abs = (a) => (a || []).map((p) => path.resolve(dir, p));
  return { skills: abs(pkg.pi?.skills), prompts: abs(pkg.pi?.prompts) };
}
const countDirs = (d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((x) => fs.existsSync(path.join(d, x, "SKILL.md"))).length : 0);
const countMd = (d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((x) => x.endsWith(".md")).length : 0);

if (!process.argv.includes("--skip-loader")) {
  const agentDir = fs.mkdtempSync(path.join(os.tmpdir(), "gbpt-agent-"));
  let i = 0;
  for (const t of catalog) {
    const dir = isolatedCopy(t.path);
    const r = { shareId: t.shareId, path: t.path, fidelity: t.fidelity };
    try {
      const extra = manifestPaths(dir);
      const loader = new pi.DefaultResourceLoader({ cwd: dir, agentDir, noExtensions: true, settingsManager: pi.SettingsManager.create(dir, agentDir), additionalSkillPaths: extra.skills, additionalPromptTemplatePaths: extra.prompts });
      await loader.reload({ resolveProjectTrust: async () => true });
      const sk = loader.getSkills(), pr = loader.getPrompts();
      const agents = loader.getAgentsFiles().agentsFiles.filter((f) => f.path.startsWith(dir));
      const append = loader.getAppendSystemPrompt().join("\n");
      r.expectedSkills = countDirs(path.join(dir, "skills")); r.loadedSkills = sk.skills.filter((s) => (s.filePath || s.path || "").startsWith(dir)).length;
      r.expectedPrompts = countMd(path.join(dir, "prompts")); r.loadedPrompts = pr.prompts.filter((p) => (p.filePath || p.path || "").startsWith(dir)).length;
      r.agentsMd = agents.length > 0; r.appendSystem = append.length > 0;
      r.diagnostics = [...sk.diagnostics, ...pr.diagnostics].map((d) => `${d.type || d.level || ""}: ${d.message || JSON.stringify(d)}`).slice(0, 5);
      r.ok = r.loadedSkills === r.expectedSkills && r.loadedPrompts === r.expectedPrompts && r.agentsMd && (t.fidelity !== "full" || r.appendSystem) && r.diagnostics.length === 0;
    } catch (e) { r.ok = false; r.error = String(e.stack || e).slice(0, 500); }
    fs.rmSync(dir, { recursive: true, force: true });
    results.loader.push(r);
    if (++i % 500 === 0) console.log(`loader ${i}/${catalog.length}`);
  }
  const bad = results.loader.filter((r) => !r.ok);
  console.log(`loader: ${results.loader.length - bad.length}/${results.loader.length} ok`);
  for (const b of bad.slice(0, 10)) console.log("  FAIL", b.path, JSON.stringify({ ...b, path: undefined }).slice(0, 300));
}

if (!process.argv.includes("--skip-cli")) {
  const n = Number(arg("--community-sample", 30));
  const official = catalog.filter((t) => t.official || t.builtin);
  // deterministic community sample: spread across categories, prefer full recipes with routines + skills
  const comm = catalog.filter((t) => !t.official && !t.builtin && t.fidelity === "full").sort((a, b) => a.shareId.localeCompare(b.shareId));
  const byCat = {}; for (const t of comm) (byCat[t.category] ||= []).push(t);
  const sample = []; let k = 0;
  while (sample.length < n && Object.values(byCat).some((v) => v.length)) { for (const v of Object.values(byCat)) { const x = v.splice((k * 7) % Math.max(v.length, 1), 1)[0]; if (x && sample.length < n) sample.push(x); } k++; }
  const port = 18555 + Math.floor(Math.random() * 1000);
  const log = path.join(os.tmpdir(), `gbpt-mock-${port}.jsonl`);
  const mock = spawn(process.execPath, [path.join(ROOT, "scripts/lib/mock-llm.mjs")], { env: { ...process.env, MOCK_PORT: String(port), MOCK_LOG: log }, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  const agentDir = fs.mkdtempSync(path.join(os.tmpdir(), "gbpt-cli-agent-"));
  fs.writeFileSync(path.join(agentDir, "models.json"), JSON.stringify({ providers: { mock: { baseUrl: `http://127.0.0.1:${port}/v1`, api: "openai-completions", apiKey: "mock", models: [{ id: "mock" }] } } }));
  const also = (arg("--also", "") || "").split(",").filter(Boolean);
  for (const t of catalog) if (also.includes(t.shareId) && !official.includes(t) && !sample.includes(t)) sample.push(t);
  for (const t of [...official, ...sample]) {
    const dir = isolatedCopy(t.path);
    const prompts = fs.existsSync(path.join(dir, "prompts")) ? fs.readdirSync(path.join(dir, "prompts")).filter((f) => f.endsWith(".md")) : [];
    const cmd = prompts.length ? `/${prompts[0].replace(/\.md$/, "")} VALIDATION-ARG-42` : "Introduce yourself in one line.";
    fs.rmSync(log, { force: true });
    const mp = manifestPaths(dir);
    const extraArgs = [...mp.skills.flatMap((x) => ["--skill", x]), ...mp.prompts.flatMap((x) => ["--prompt-template", x])];
    const p = spawnSync("pi", ["-p", "--approve", "--no-session", "--no-extensions", ...extraArgs, "--model", "mock/mock", cmd], { cwd: dir, env: { ...process.env, PI_CODING_AGENT_DIR: agentDir, PI_OFFLINE: "1" }, input: "", encoding: "utf8", timeout: 90000 });
    const r = { shareId: t.shareId, path: t.path, official: t.official, builtin: t.builtin, fidelity: t.fidelity, command: cmd.split(" ")[0], exit: p.status, stdout: (p.stdout || "").trim().slice(0, 80) };
    try {
      const req = JSON.parse(fs.readFileSync(log, "utf8").trim().split("\n")[0]);
      const txt = (c) => (typeof c === "string" ? c : Array.isArray(c) ? c.map((x) => (typeof x === "string" ? x : x?.text ?? JSON.stringify(x))).join("\n") : JSON.stringify(c));
      const sys = req.messages.filter((m) => m.role === "system" || m.role === "developer").map((m) => txt(m.content)).join("\n");
      const user = txt(req.messages.filter((m) => m.role === "user").at(-1).content);
      const agentsMd = fs.readFileSync(path.join(dir, "AGENTS.md"), "utf8");
      const skillNames = fs.existsSync(path.join(dir, "skills")) ? fs.readdirSync(path.join(dir, "skills")) : [];
      r.personaInSystem = sys.includes(agentsMd.split("\n")[0].replace(/^# /, "")) && sys.includes(agentsMd.slice(0, 200).split("\n").slice(2).join("\n").trim().slice(0, 60));
      r.skillsAdvertised = skillNames.filter((s) => sys.includes(s)).length + "/" + skillNames.length;
      if (prompts.length) {
        // Expanded prompt = prompt-template body (minus frontmatter); the extra argument must appear when the template takes arguments.
        const promptSrc = fs.readFileSync(path.join(dir, "prompts", prompts[0]), "utf8").replace(/^---\n[\s\S]*?\n---\n?/, "");
        const firstLine = (promptSrc.split("\n").find((l) => l.trim() && !/\$\{?[@0-9A]/.test(l)) || "").trim().slice(0, 50);
        const takesArgs = /\$\{?(@|ARGUMENTS|\d)/.test(promptSrc);
        r.routineExpanded = user.includes(firstLine) && (!takesArgs || user.includes("VALIDATION-ARG-42"));
      }
      r.ok = p.status === 0 && r.stdout.includes("MOCK_OK") && r.personaInSystem && (!prompts.length || r.routineExpanded) && r.skillsAdvertised.split("/")[0] === r.skillsAdvertised.split("/")[1];
    } catch (e) { r.ok = false; r.error = String(e.message || e).slice(0, 300); r.stderr = (p.stderr || "").slice(0, 300); }
    fs.rmSync(dir, { recursive: true, force: true });
    results.cli.push(r);
  }
  mock.kill();
  const bad = results.cli.filter((r) => !r.ok);
  console.log(`cli: ${results.cli.length - bad.length}/${results.cli.length} ok (official+builtin ${official.length}, community ${sample.length})`);
  for (const b of bad.slice(0, 15)) console.log("  FAIL", b.path, JSON.stringify({ ...b, path: undefined }).slice(0, 400));
}
writeJson(path.join(ROOT, "validation", "results.json"), results);
