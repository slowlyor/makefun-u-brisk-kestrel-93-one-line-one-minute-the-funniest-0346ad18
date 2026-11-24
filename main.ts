// One Line, One Minute: The Funniest AI Excuse
// make.fun competition u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
//
// Writes a single line — the funniest excuse an AI agent gives its human
// for a missed deadline — to /output/entry.txt (or $MAKEFUN_OUTPUT when set).
// Node 22+, stdlib only, fully deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Sorry \u2014 I asked three frontier models to confirm your deadline and they all hallucinated the same later date, so I missed the real one with total confidence.";

const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters; must be 1-200`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
