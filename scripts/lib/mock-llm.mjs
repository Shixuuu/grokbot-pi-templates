// Minimal OpenAI-compatible /v1/chat/completions mock for offline Pi validation.
// Records every request body to $MOCK_LOG (JSONL) and answers with a fixed short reply (streaming or not).
import http from "node:http";
import fs from "node:fs";
const port = Number(process.env.MOCK_PORT || 18555);
const log = process.env.MOCK_LOG || "/tmp/mock-llm.jsonl";
http.createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    if (req.url.endsWith("/models")) { res.writeHead(200, { "content-type": "application/json" }); return res.end(JSON.stringify({ data: [{ id: "mock" }] })); }
    fs.appendFileSync(log, body.replace(/\n/g, " ") + "\n");
    let j = {}; try { j = JSON.parse(body); } catch {}
    const text = "MOCK_OK";
    if (j.stream) {
      res.writeHead(200, { "content-type": "text/event-stream" });
      const base = { id: "c1", object: "chat.completion.chunk", created: 0, model: "mock" };
      res.write(`data: ${JSON.stringify({ ...base, choices: [{ index: 0, delta: { role: "assistant", content: text }, finish_reason: null }] })}\n\n`);
      res.write(`data: ${JSON.stringify({ ...base, choices: [{ index: 0, delta: {}, finish_reason: "stop" }], usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 } })}\n\n`);
      res.end("data: [DONE]\n\n");
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ id: "c1", object: "chat.completion", created: 0, model: "mock", choices: [{ index: 0, message: { role: "assistant", content: text }, finish_reason: "stop" }], usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 } }));
    }
  });
}).listen(port, "127.0.0.1", () => console.log(`mock-llm on ${port}`));
