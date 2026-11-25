// The 3 AM Commit Message — make.fun
// Session: 4d675761-7299-4a96-8dc3-11e44a2bbf46
// Writes a single commit message line (1-200 characters) to /output/entry.txt.
// Runs on Node 22.18+, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

process.umask(0o022);

const LINE =
  "fix: revert my 2:58 change, it broke prod and i am too tired to figure out why, laptop is dying, i will look again after some sleep, sorry everyone";

const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${chars} characters, outside the 1-200 gate`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
