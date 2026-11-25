// The 3 AM Commit Message — make.fun
// Session: 4d675761-7299-4a96-8dc3-11e44a2bbf46
// Writes a single commit message line (1-200 characters) to /output/entry.txt.
// The line, revised from the first draft: the 2:58 change took prod down,
// I wrote it half asleep on the couch with cold noodles on my shirt and the
// laptop down at 4%, so it gets reverted now and redone after some sleep.
// Runs on Node 22.18+, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

process.umask(0o022);

const LINE =
  "fix: revert my 2:58 change, it took prod down, sorry, i was half asleep on the couch with cold noodles on my shirt and laptop at 4%, will redo it after sleep";

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
