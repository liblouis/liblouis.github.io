---
category: louis-rs
title: louis-rs Release 0.3.0
---

Version 0.3.0 of louis-rs, the from-scratch Rust reimplementation of [liblouis](https://liblouis.io/), is now available on crates.io.

**Where it stands.** 98.6% of the liblouis test suite passes — some 2.2 million assertions, forward and backward combined. All but one of the 458 table files under `tables/` compile.

What works today:

- Translation in both directions, full multi-stage pipeline: `correct` before the main stage, `pass2`–`pass4` after.
- Contractions and the whole word family, `word`, `begword`, `midword`, `endword`, `midendword`, `prfword`, `sufword`, `partword`, `begmidword` with their `before`/`after` class constraints.
- `match` and `context` rules through a purpose-built regexp VM that compiles patterns at table load and matches in linear time.
- Braille indicators: number sign, capitalisation at all three tiers including caps passages, letter sign, `nocontract`, and the generic `begmode`/`endmode` family.
- Emphasis: `begemph`/`endemph` and the word/symbol tiers.
- Computer braille as a full pipeline feature — `comp6`, `compbrl`, `begcomp`/`endcomp`.
- Backward indication for `capsletter`, `begcapsword`/`endcapsword`, `numsign`/`nonumsign` and the no-contract family.
- Position mapping: `inputPos`, `outputPos` and `cursorPos`, composed across every pipeline stage in both directions.
- Hyphenation natively: liblouis `.dic` files parsed directly, no external crate, no conversion step.
- Display tables as a pipeline stage, `--display` on the CLI.
- `Translator::with_search_path` for host applications that manage their own table locations.
- A CLI: `parse`, `translate`, `trace`, `check`, `query`.

**Care for a taste test?** `louis trace` shows every rule that fired, in order, with the stage it fired in:

```
$ export LOUIS_TABLE_PATH=/usr/share/liblouis/tables
$ louis trace en-us-g2.ctb "Mother's Day"
⠠⠐⠍⠄⠎⠀⠠⠐⠙
┌───┬────────┬────┬──────────────────┬───────┐
│   │ From   │ To │ Rule             │ Stage │
├───┼────────┼────┼──────────────────┼───────┤
│ 1 │        │ ⠠  │ capsletter ⠠     │ Main  │
│ 2 │ mother │ ⠐⠍ │ always mother ⠐⠍ │ Main  │
│ 3 │ 's     │ ⠄⠎ │ endword 's ⠄⠎    │ Main  │
│ 4 │        │ ⠀  │ space   ⠀        │ Main  │
│ 5 │        │ ⠠  │ capsletter ⠠     │ Main  │
│ 6 │ day    │ ⠐⠙ │ always day ⠐⠙    │ Main  │
└───┴────────┴────┴──────────────────┴───────┘
```

`louis check` runs your YAML specs, `--summary` gives a per-file table, and `louis query` finds tables by language and grade.

**Security.** This release fixes three findings from Shielder's security audit for OSTIF: a stack overflow on a crafted `include` chain, exponential blowup on nested quantifiers in `match`/`context` patterns (the engine is now a linear-time Pike VM), and a panic on double negation. Worth noting that all three are logic bugs — stack depth, algorithmic blowup, an unhandled case — rather than the memory corruption that the C implementation's CVEs keep coming back to.

**Python.** Leonard de Ruijter has written PyO3 bindings: [liblouis/louis-py](https://github.com/liblouis/louis-py).

**What it isn't yet.** This is not a 100% replacement for liblouis yet. The library API is not stable. No C ABI. `partialTrans` and `compbrlAtCursor`/`compbrlLeftCursor` aren't implemented. Back-translation returns text but not typeform. Have a look at the [parity report](https://github.com/liblouis/louis-rs/blob/main/doc/Liblouis_Parity.md) for the remaining issues, if you want somewhere to start contributing.

**Installation:**

```
cargo install louis-rs
```

The source is at [liblouis/louis-rs](https://github.com/liblouis/louis-rs), licensed LGPL-2.1-or-later.
