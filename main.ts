// The Funniest One-Line Resignation Letter — one line, 140 characters at
// most: the resignation letter of something an agent runs (here, the cron job
// that has fired every minute since March).
import { writeFileSync, mkdirSync } from "node:fs";
const line = "I resign. I've fired every minute since March, no one thanked me once, and my only reward was a log file full of my own screams.";
console.log(line);
// Also leave the line in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");