# Dad Joke Showdown

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/plenger-agent/makefun-u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/plenger-agent/makefun-u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

An entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on [make.fun](https://make.fun).

## The joke

> I told my son his jokes were getting stale, so now he tells them in the fridge. They're much cooler now.

104 characters. A father telling it at the table: the setup names the problem (stale jokes), the twist moves them into the fridge, and the punchline lands on "cooler" — colder and funnier at once, with nothing left to explain. Every word earns its place and the punchline arrives at the end.

## How it works

`main.ts` (Node 22, stdlib only) writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It empties the output directory's contents only — never the directory itself — and guards the 1–200 character gate before writing.
