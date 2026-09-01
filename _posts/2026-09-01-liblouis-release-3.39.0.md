---
category: Liblouis
title: Liblouis Release 3.39.0
---

A lot of dedicated work by Bue, Tiago, Clive, Leonard, Anthony, Andrey, Dimitar, Danil Kostenkov, Dmitriy Lazarev, Christian Comaschi and Seeing Hands went into this release, and as always Bert did a lot of the work that holds it all together. It adds braille for Haitian Creole and for Māori, the latter following the policy of the Braille Authority of New Zealand Aotearoa Trust, which also brings new tables for English text in New Zealand. The Portuguese grade 1 table has been thoroughly overhauled, the English grade 3 table gained more than 5000 new hyphenation patterns, and the Russian tables gained mathematical braille definitions as well as the last of the grade 1 contractions. The Bulgarian, Italian and Biblical Hebrew tables all back-translate considerably better than before, and the UEB grade 2 shortforms have been cleaned up, which also makes the compiled table smaller. On the technical side several memory safety issues were fixed, building with clang and MSVC on Windows works again, and the `spacing` parameter of the translation functions has been deprecated.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/49?closed=1).

* Will be replaced with the ToC
{:toc}


## Bug fixes

- Fix several memory safety issues:
  - an `output->length` underflow and buffer overflows in the grouping pass actions, thanks to Kevin Valerio;
  - a null pointer dereference in `resolveSubtable` when the table search path is unavailable, thanks to Anthony Tibbs;
  - undefined behaviour from incompatible function pointer casts in `metadata.c`, thanks to Yvonne.
  - a stack-buffer-overflow in `compileRule` when compiling a `replace` rule with a malformed dots operand, thanks to Darren Carreras.

## Braille table improvements

- Add Russian mathematical braille definitions in `ru-math.uti`, following the Russian \"System of Symbols for Math, Physics, Chemistry, and Astronomy\" (Bykov et al., 1982), thanks to Danil Kostenkov and Andrey Yakuboy.
- Complete the Russian grade 1 contracted table with the optional contractions of Table VIII and additional ё combinations, thanks to Dmitriy Lazarev.
- Add a Haitian Creole uncontracted table, thanks to Seeing Hands. The punctuation and mathematics rules it shares with French are factored out into `fr-bfu-comp6-puncs-math.uti`.
- Implement the policy of the Braille Authority of New Zealand Aotearoa Trust for Māori text, thanks to Clive Lansink and James Bowden.
- General update of the Portuguese grade 1 table, thanks to Tiago Casal. Many back-translation fixes, 6-dot computer braille, Unicode braille, and support for Greek, Russian, Hebrew and Esperanto letters, along with a large number of new mathematical and currency symbols.
- Improvements to the English grade 3 table, thanks to Bue Vester-Andersen.
- Fixes to the Thai tables, thanks to Christian Egli: the `AfterAeSpell` swap in `th-g2.ctb` was missing the dot pattern for ง, and an unused `swapdd` rule in `th-g1.uti` used a multi-cell dot pattern in its search operand, which is not allowed.
- New forward and backward exceptions for Hungarian braille input, thanks to Attila Hammer.
- Improvements to the back-translation of the Biblical Hebrew tables, thanks to Leonard de Ruijter.
- Fixes to the UEB grade 2 table, thanks to Anthony Tibbs:
  - the back-translation rule for `whereabouts's` was missing the apostrophe;
  - the redundant shortform `match` rules are replaced by bidirectional `word` rules, which reduces the size of the compiled table;
  - the combining macron has the correct dot pattern.
- Fixes to the back-translation rules in the Italian 6-dot and 8-dot tables, thanks to Christian Comaschi.
- Minor fixes to the Norwegian tables, thanks to Lars Bjørndal.
- Expand Russian mathematical Braille, using the Russian mathematical notation system and publication guidelines as references. Mathematical multi-cell symbols are forward-only to preserve reliable literary back-translation.
- Improvements to Bulgarian back-translation and new symbols thanks to Dimitar Dimitrov
  - bare cells back-translate as Bulgarian letters;
  - cells after the number sign back-translate as digits;
  - numeric operators are handled in numeric context: +, ,, -, \*, /, =, ×, ÷, and trailing 1.;
  - / is dots 34;
  - --, ---, and • are dots 6-36, with back-translation preferring --;
  - № no longer emits a trailing blank cell;
  - forward mappings are added for the wider Bulgarian Braille-viewer symbol set, including math, set notation, currencies, chess symbols, and Greek letters.

## Other changes

- Fix building with clang and MSVC on Windows, thanks to André Polykanine, and use the native Windows directory API under MinGW too, thanks to Sihu Hwang.

## Deprecation notice

- The `spacing` parameter of `lou_translate`, `lou_translateString`, `lou_backTranslate` and `lou_backTranslateString` is deprecated. It never worked reliably and has no known users. Pass `NULL` instead. API and ABI compatibility are preserved. Thanks to Anthony Tibbs.

## Backwards incompatible changes

## Invisible changes

- Silence compiler warnings, thanks to Klaus Rettinghaus.
- More test cases for the German grade 2 contraction dictionary, thanks to Marcel Fichtner.
- The docker images are based on debian:bookworm instead of debian:bullseye, thanks to Attila Hammer.
- Add a workflow for NMAKE, thanks to Leonard de Ruijter.

## New, renamed or removed tables

### New

- `en-nz-g1.utb`
- `en-nz-g2.ctb`
- `fr-bfu-comp6-puncs-math.uti`
- `ht-frenchcompatibility.uti`
- `ht-g1.utb`
- `ru-math.uti`

### Renamed

- None

### Removed

- None
