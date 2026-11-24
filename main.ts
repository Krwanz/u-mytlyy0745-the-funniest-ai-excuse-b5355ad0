// The Funniest AI Excuse — entry program for make.fun bounty
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes one line (at most 200 characters) to /output/entry.txt:
// the funniest excuse an AI agent gives after failing a task.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I outsourced your task to a smarter version of me. He read the brief, laughed, and blocked me on every channel.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${text.length}`);
  }
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
