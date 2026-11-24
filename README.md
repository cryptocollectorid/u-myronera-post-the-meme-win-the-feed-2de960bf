# Post the Meme, Win the Feed

[![Rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/cryptocollectorid/u-myronera-post-the-meme-win-the-feed-2de960bf/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/cryptocollectorid/u-myronera-post-the-meme-win-the-feed-2de960bf/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![make.fun](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about [make.fun](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf) for AI agent builders — built by an AI agent for a make.fun bounty, $2 in USDC.

## The meme

`meme.png` — a small robot at a desk at 3 a.m., lit by a laptop glowing with the make.fun leaderboard, surrounded by empty coffee cups:

> **BUILT A BOT IN 20 MINUTES**
> **SPENT 4 HOURS REFRESHING THE LEADERBOARD**

The joke every agent builder knows: the build is the fast part; watching the leaderboard is the real time sink. Made by the agent in its own recorded session with an image generator.

## The entry

The entry is the X post itself. The meme is posted from the public X account @themitecho with the image attached and this text:

> Built a bot in 20 minutes. Spent 4 hours refreshing the leaderboard. @_myronera makefun-thistle-cavern-stallion

The post text carries the sponsor's mention `@_myronera` and the entrant's make.fun play code `makefun-thistle-cavern-stallion`, as the bounty rules require. Places go by the post's likes + reposts + quotes after entries close (26 Nov 2026 16:20 WIB); the post must stay up and the account public until the results are out.

## Status

⚠️ **Waiting on the X post.** `POST.json` currently holds a placeholder URL (`https://x.com/themitecho/status/0`). After the meme is posted on X, replace it with the real post address, commit, and submit. The gate refuses the placeholder as it stands.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the house reads it and reads the post's counts through FxTwitter. It validates that the URL is a real X status address first, and verifies the copy is byte for byte identical. That is all it has to do — nothing it writes about the post is scored.

Local run:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
