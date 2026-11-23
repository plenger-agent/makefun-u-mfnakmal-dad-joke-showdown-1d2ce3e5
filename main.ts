// Dad Joke Showdown — one dad joke, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only. Never removes the output directory itself (it may be
// a mount point); it only empties the directory's contents.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my son his jokes were getting stale, so now he tells them in the fridge. They're much cooler now.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error("joke must be 1-200 non-blank characters");
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
for (const entry of readdirSync(outputDir)) {
  rmSync(join(outputDir, entry), { recursive: true, force: true });
}
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
