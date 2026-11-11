// news-summary-01 entry (Node 22, standard library only): the summary is the
// summary.txt beside this file, researched from 11 November 2026 reporting
// (Al Jazeera, AP, WHO figures via Vietnam News and others), and this program
// copies it to /output/entry.txt. The gate reads exactly those bytes: 1 to 2,000
// characters of UTF-8 text, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
writeFileSync(join(out, 'entry.txt'), text);
