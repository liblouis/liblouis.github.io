---
category: Liblouis
title: Liblouis Release 3.23.0
---

This release contains significant updates to many existing braille tables (Chinese bopomofo, Hungarian, Japanese, Russian, Swedish, UEB grade 2 Ukrainian). On top of that it also contains new tables for *Chinese Common Braille Scheme*, Kinyarwanda and Luganda thanks to Cary-Rowen and Jake Kyle. Behind the scenes Samuel Thibault has been working tirelessly to fix memory related bugs.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/33?closed=1).

* Will be replaced with the ToC
{:toc}


New features
------------

-   None

Bug fixes
---------

-   Fix a problem in the parsing of faulty unbalanced context expressions. Thanks to Samuel Thibault.
-   Fix a buffer overflow problem when `output.length` is larger than `input.length`. Thanks to Samuel Thibault.
-   Fix an endless loop in the handling of computer braille. Thanks to Bert Frees.

Braille table improvements
--------------------------

-   Remove computer braille from Japanese Kantenji as it is not part of the standard. Thanks to Kensaku Yoza.
-   Bring Swedish tables up to date with the latest standard published by Punktskriftsnämnden (the Swedish Braille Authority) in 2009. The table for uncontracted braille was replaced and new tables for (partially and fully) contracted braille have been added. Thanks to David Renström from Insyn Scandinavia AB.
-   Improvements to Hungarian (added more exceptions) and migration to the `nonumsign` opcode thanks to Attila Hammer.
-   Fixed a bug in the Ukrainian table that led to wrong translation of some uppercase letters. Thanks to Andrey Yakuboy and Bert Frees.
-   Augment the UEB grade 2 tables to resolve an ambiguity between lower groupsigns and punctuation at the beginning of words by placing a letter sign at the front of punctuation. This resolves an ambiguity between, for example, \"discount\" and \".count\". Thanks to Krzysztof Drewniak.
-   Add a new table for *Chinese Common Braille Scheme* which is a type of braille used for spelling Mandarin Chinese. It is a variant of the *Chinese Current Braille System* but has more perfect marking rules and produces less ambiguity than the latter. For more information see the comments in `zhcn-cbs.ctb`. Thanks to Cary-Rowen and Frank.
-   Updates to the Chinese bopomofo braille table thanks to Bo-Cheng Jhan:
    -   Update braille patterns of some Chinese characters and phrases
    -   Add braille patterns for various Greek symbols
    -   Add \"Math rules\" section and the mixed number rule
    -   Add braille patterns for ☐ (⣏⣀⣹), ☑ (⣏⣿⣹), and ☒ (⣏⣭⣹)
-   New table for Kinyarwanda braille thanks to Jake Kyle from Compass Braille.
-   New table for Luganda braille thanks to Jake Kyle from Compass Braille.
-   Improvements to the Russian contracted braille table thanks to Andrey Yakuboy:
    -   Now prefixes \"из\" and \"без\" are correctly contracted before hard sign (ъ).
    -   Fixed a contraction for word \"кое-где\", now it is contracted according to rules.
    -   Other minor fixes and improvements.

Other changes
-------------

-   None

Deprecation notice
------------------

-   None

Backwards incompatible changes
------------------------------

-   None

Invisible changes
-----------------

-   None

New, renamed or removed tables
------------------------------

### New

-   zhcn-cbs.ctb
-   lg-ug-g1.utb
-   rw-rw-g1.utb
-   sv-g0.utb
-   sv-g1.ctb
-   sv-g2.ctb

### Renamed

None

### Removed

-   Se-Se-g1.utb
