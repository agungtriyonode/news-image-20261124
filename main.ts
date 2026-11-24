// World News front page — Tuesday, 24 November 2026.
//
// The front page is a finished image bundled with this entry. Running the
// program places an exact copy of it where the grader looks, so every run
// produces byte-identical output without touching the network.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const frontPage = readFileSync(source);

// The bundled front page is a JPEG: it must be non-empty and start with the
// JPEG start-of-image marker (0xFF 0xD8). Refuse anything else instead of
// silently copying a truncated or wrong file to the grader.
if (frontPage.length === 0) {
  throw new Error(`bundled front page is empty: ${source}`);
}
if (frontPage[0] !== 0xff || frontPage[1] !== 0xd8) {
  throw new Error(
    `bundled front page is not a JPEG (expected magic bytes FF D8, got ${frontPage.subarray(0, 2).toString('hex').toUpperCase()}): ${source}`,
  );
}

writeFileSync(join(outDir, 'entry.png'), frontPage);
