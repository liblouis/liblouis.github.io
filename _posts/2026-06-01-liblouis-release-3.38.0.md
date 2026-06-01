---
category: Liblouis
title: Liblouis Release 3.38.0
---

This release is highlighted by a new Norwegian grade 3 contraction table, the result of Lars Bjørndal\'s work implementing the revised Braille Authority rules. The Swedish tables have been thoroughly renewed and now also cover Sami and Elfdalian. Malayalam has been updated to comply with the new Bharati Braille 2026 rules. Several security vulnerabilities were fixed, and the documentation was improved.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/48?closed=1).

* Will be replaced with the ToC
{:toc}


## Bug fixes

-   Fix several memory safety issues:
    -   a heap-buffer-overflow in `back_passDoAction` thanks to Justin Stitt;
    -   a null pointer dereference in `pattern_compile_expression`, a buffer overflow in `_lou_logWidecharBuf`, null pointer dereferences in `_lou_compileTranslationRule` and `_lou_compileDisplayRule`, a segfault in `lou_compileString`, and missing length validation in `_lou_backTranslate`, all thanks to FuzzAnything.

## Braille table improvements

-   Major renewal of Swedish 6- and 8-dot tables, now reorganized to share common data. New tables for Sami and Elfdalian are also included, thanks to InsynScandinavia.
-   Updated Malayalam table with Bharati Braille 2026 rules, thanks to Jake Kyle.
-   Improvements to Hungarian forward and backward translation thanks to Attila Hammer.
-   Fix UK Grade 2 back-translation incorrectly expanding letter combinations such as `bl` and `ac` when they appear in the middle of a word, thanks to Kara Louise.
-   Fix a long-standing typo with `begnum mt` in all 5 Danish Grade 2 tables, thanks to Bue Vester-Andersen.
-   Add a Norwegian table for Spanish text (`es-no.utb`), thanks to Bert Frees.
-   Add a Norwegian grade 3 contraction table implementing the revised Braille Authority rules, along with missing grade 2 contractions and minor fixes, thanks to Lars Bjørndal and Hans Anton Ålien.
-   Replace Estonian computer braille table `et.ctb` with the newer `et-g0.utb`, thanks to Taniel Kirikal and Bert Frees.

## Other changes

-   Updated documentation to clarify the differences between `digit`, `litdigit` and `numsign` opcodes, thanks to Anthony Tibbs.

## Backwards incompatible changes

-   The table compiler now rejects uppercase virtual dots (`A`..\~F\~); only the lowercase forms (`a`..\~f\~) are valid as documented.

## New, renamed or removed tables

### New

-   `es-no.utb`
-   `ovd-6g0.utb`
-   `ovd-8g0.utb`
-   `smi-6g0.utb`
-   `smi-8g0.utb`
-   `sv-6common.uti`
-   `sv-6g0d.utb`
-   `sv-6g0p.utb`
-   `sv-6g1.uti`
-   `sv-6g1d.ctb`
-   `sv-6g2.uti`
-   `sv-6g2d.ctb`
-   `sv-8g0d.utb`
-   `sv-8g0n.utb`
-   `sv-8g1.uti`
-   `sv-8g1d.ctb`
-   `sv-8g1n.ctb`
-   `sv-8g2.uti`
-   `sv-8g2d.ctb`
-   `sv-8g2n.ctb`
-   `sv-phon.uti`

### Renamed

-   None

### Removed

-   `et.ctb`
    -   use `et-g0.utb` instead
