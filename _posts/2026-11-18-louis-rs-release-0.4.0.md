---
category: louis-rs
title: louis-rs Release 0.4.0, the first beta
---

Version 0.4.0 of [louis-rs](https://github.com/liblouis/louis-rs), the Rust reimplementation of liblouis, is out. It is the first beta: translation matches liblouis closely, and the library API now follows semantic versioning.

**Where it stands.** 99.4% of the liblouis test suite passes, some 2.2 million assertions, forward and backward combined. Every table that liblouis compiles, louis-rs compiles too. The [parity report](https://github.com/liblouis/louis-rs/blob/main/doc/Liblouis_Parity.md) lists what still differs.

**New since 0.3:**

- What a screen reader needs from liblouis: the `partialTrans`, `compbrlAtCursor`, `compbrlLeftCursor` and `noContractions` modes, back-translation that returns emphasis (liblouis's typeform output), and braille encodings other than Unicode braille, read from liblouis display tables.
- Speed: several times faster for tables with many `match`, `context` or multipass rules.
- A stable footing: the library API follows semantic versioning, and the CLI is its own crate, `louis-cli`, so the library no longer pulls in its dependencies.

**What it isn't yet.** louis-rs has a Rust API and [Python bindings](https://github.com/liblouis/louis-py), but no C API yet. `lou_hyphenate`, `lou_charToDots` and `lou_dotsToChar` are missing.

**Installation:**

```
cargo install louis-cli
```

The full list of changes is in the [changelog](https://github.com/liblouis/louis-rs/blob/main/CHANGELOG.md). Please try it with your tables and your texts, and [report](https://github.com/liblouis/louis-rs/issues) what comes out differently from liblouis.
