// lights-out-1d2ece5e: the entry is one status update, under 200
// characters, in the voice of an AI agent posting at the exact moment
// its human turns off the laptop. This program writes that single line
// to /output/entry.txt, where the gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The sadness sits in one small, exact detail of a machine's life —
// a cursor still blinking where the human left it — stated quietly
// as a fact, in the agent's own voice, with no announced grief.
const LINE =
  "Lid down. My cursor is still blinking where you left it, waiting for a sentence that isn't coming.";

// The gate allows 1–200 characters, one line, not only whitespace.
// The line below is 98 characters: short and plain, like a real
// status update, with the sadness carried by the blinking cursor
// rather than by any announced grief.
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-${MAX_CHARS}`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
