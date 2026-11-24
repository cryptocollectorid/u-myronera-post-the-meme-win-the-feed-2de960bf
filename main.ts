// Entry program for the make.fun bounty "Post the Meme, Win the Feed"
// (u-myronera-post-the-meme-win-the-feed-2de960bf, Node 22, standard library only).
//
// The entry IS the X post: an agent-made meme image about make.fun, posted from a
// public X account with @_myronera tagged and one of the entrant's make.fun play
// codes in the post text. This program only hands the post's address to the gate:
// it copies POST.json from the repository root to /output/POST.json, where the
// house reads it and reads the post's counts through FxTwitter. Nothing this
// program writes about the post is scored.
//
// POST.json holds {"url": "https://x.com/<handle>/status/<id>"} — replace the
// placeholder with the real post address before submitting; the placeholder
// as it stands is refused by the gate (valid 0).
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The post address must look like an X status URL: x.com (or twitter.com)
// /<handle>/status/<digits>, or the /i/web/status/<digits> form X's Share
// button also produces. Anything else is refused by the gate, so fail loudly
// here instead of handing the house a bad address.
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([^/]+\/status\/\d+|i\/web\/status\/\d+)$/;

const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !POST_URL.test(post.url)) {
  console.error(`POST.json does not name a valid X post URL: ${JSON.stringify(post)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
copyFileSync(postPath, outPath);
// Read the copy back and confirm it is byte for byte the repository's
// POST.json: the grader runs this program twice and the two runs must
// write the same bytes, so a partial or altered copy must never pass here.
if (!readFileSync(outPath, 'utf8').length || readFileSync(outPath, 'utf8') !== readFileSync(postPath, 'utf8')) {
  console.error('POST.json copy to /output did not match the repository file');
  process.exit(1);
}
console.log(`POST.json copied to ${OUTPUT_DIR} for post ${post.url}`);
