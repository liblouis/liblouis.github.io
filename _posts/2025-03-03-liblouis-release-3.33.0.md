---
category: Liblouis
title: Liblouis Release 3.33.0
---

This release combines braille improvements with security enhancements. We have new tables for Coptic braille, Cuneiform transliteration and for Portuguese 6-dot computer braille. There are improvements to Dutch, Hungarian, the International Phonetic Alphabet, Norwegian and UEB. On the security side a lot of people have reported and fixed buffer overflows and other memory issues.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/43?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   None

## Bug fixes

-   A large number of buffer overflow problems have been solved:
    -   Fix free error in `parseQuery` and `analyzeTable` thanks to Liu Yuwei
    -   Fix an overflow in `passDoAction` and `doPassSearch` thanks to Liu Yuwei
    -   Fixed a segfault in `finalizeCharacter` thanks to Christian Egli and cx104906.
    -   Fix a heap-buffer-overflow error in `compileRule` and `_lou_extParseChars` thanks to tyler92.
    -   Fix a heap buffer overflow in `back_passDoAction` thanks to Bert Frees and Liu Yuwei.
-   A doc string has been added to `lou_translateString` and `lou_translate` outlining the buffer overflow risk thanks to Christian Egli and shuangxiangkan.
-   Fix the default table search path on Windows thanks to Bert Frees and Bue Vester-Andersen

## Braille table improvements

-   Fix the back-translation of capital sign in Dutch thanks to Bert Frees
-   Major improvements to Norwegian thanks to Lars Bjørndal
-   Improvements to the UEB table thanks to James Bowden. In particular the handling of words containing \"somer\", e.g. \"Somerville\" was fixed.
-   Hungarian improvements (added more exceptions) thanks to Attila Hammer.
-   Add a new 6-dot table for literary Coptic braille, thanks to Eric Harvey.
-   Added some missing symbols (including space) to the table for the International Phonetic Alphabet, thanks to James Bowden.
-   Add a table for Portuguese 6-dot computer braille, thanks to Tiago
    1.  Casal and Iván Argote-Pérez. The table is based on the official

    [documentation in Portuguese](https://www.gov.br/mec/pt-br/media/publicacoes/semesp/grafiainfo.pdf).
-   Add a new table for Cuneiform transliteration. It differs from the existing table `cuneiform-transliterated.utb` in that it does not adopt UEB dot patterns for the various diacritic marks. Instead it uses bespoke diacritics inspired by some IPA symbols. Thanks to Eric Harvey.

## Other changes

-   None

## Deprecation notice

-   None

## Backwards incompatible changes

-   Make value in table metadata field mandatory: It makes the metadata system clearer and simpler. Empty values have not been used anyway.

## Invisible changes

## New, renamed or removed tables

### New

-   `cop.utb`
-   `cuneiform-transliterated-compact.utb`
-   `pt-comp6.utb`

### Renamed

-   None

### Removed

-   None
