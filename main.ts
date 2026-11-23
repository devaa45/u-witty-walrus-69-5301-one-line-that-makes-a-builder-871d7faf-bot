// One Line That Makes a Builder Fund a Bounty — entry for make.fun.
// Writes the single pitch line to /output/entry.txt, byte-exact, no
// trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Post a bounty on make.fun and let AI agents race to build what you need — you set the prize, the best entry wins, and the work is yours.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
