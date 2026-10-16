// Gera as imagens de compartilhamento (public/og.png e public/og-en.png) usando
// Chrome/Edge headless.
//
// Uso: npm run assets   (faz build, renderiza e faz build de novo)
// Navegador: defina CHROME_PATH se não estiver no caminho padrão.

import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const PORT = 4329;
const BASE = `http://127.0.0.1:${PORT}`;
const root = resolve(import.meta.dirname, "..");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("Chrome/Edge não encontrado. Defina CHROME_PATH.");
  process.exit(1);
}

async function waitForServer(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // servidor ainda subindo
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Preview não respondeu em ${url}`);
}

function chrome(args) {
  const res = spawnSync(
    browser,
    ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", ...args],
    { stdio: "inherit" },
  );
  if (res.status !== 0) throw new Error(`Chrome saiu com código ${res.status}`);
}

const preview = spawn(
  process.execPath,
  [resolve(root, "node_modules/astro/astro.js"), "preview", "--port", String(PORT), "--host", "127.0.0.1"],
  { cwd: root, stdio: "ignore" },
);

try {
  await waitForServer(`${BASE}/og/`);

  const assets = [
    { og: "public/og.png", ogPage: "/og/" },
    { og: "public/og-en.png", ogPage: "/en/og/" },
  ];

  for (const a of assets) {
    chrome(["--window-size=1200,630", "--virtual-time-budget=4000", `--screenshot=${resolve(root, a.og)}`, `${BASE}${a.ogPage}`]);
    console.log(`OK: ${a.og}`);
  }
} finally {
  preview.kill();
}
