import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-sentence absurd invention pitch: a smoke alarm that treats burnt
// toast as the non-emergency it is. The laugh is in the invention itself —
// an alarm whose job is to panic, calmly refusing to panic — and the fix is
// weirdly plausible: a whisper still wakes you, a shriek just ruins breakfast.
const ENTRY =
  "The Toast Whisperer is a smoke alarm that calmly murmurs 'relax, it's only toast' instead of shrieking, so burnt breakfast stops sounding like a house fire.";

// The gate requires 1-220 characters (Unicode code points), not only whitespace.
// Count code points, not UTF-16 units, so a multi-byte character counts once.
const length = [...ENTRY].length;
if (length < 1 || length > 220) {
  throw new Error(`entry must be 1-220 Unicode characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
