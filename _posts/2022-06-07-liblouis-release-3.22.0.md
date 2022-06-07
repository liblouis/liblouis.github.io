---
category: Liblouis
title: Liblouis Release 3.22.0
---

This is a major release. On the Braille tables side there is a new table for German grade 2 with capitalization and there are updates to the Dutch, German Hungarian, Punjabi, Russian, UK Braille Computer Notation and Slovak tables. Christian added a new opcode to indicate the end of a number where the number doesn\'t end at a space character. Last but not least Samuel, Martin and Han have put a lot of work into checking for and fixing memory problems.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/32?closed=1).

* Will be replaced with the ToC
{:toc}


New features
------------

-   Add a new opcode `nonumsign` that helps with indicating the end of a number when it doesn\'t occur at the end at the end of a word such as \'123abc\' for example. For more details see the documentation. Thanks to Christian Egli.

Bug fixes
---------

-   Prevent a memory overflow in `compilePassOpcode` thanks to Martin Gieseking. This was reported in [CVE-2022-26981](https://github.com/advisories/GHSA-xrp8-mw8v-p6mq) and should now be fixed.
-   Prevent processing of characters beyond the string end in `parseChars` thanks to Martin Gieseking.
-   Prevent an invalid memory writes in `compileRule`. Thanks to Han Zheng for reporting it and to Christian Egli for fixing it.

Braille table improvements
--------------------------

-   Improvements to German braille:
    -   Improve handling of single letters in grade 2 thanks to Mischa Künzle.
    -   Improve handling of emphasis thanks to Bert Frees.
    -   Add a table for grade 2 *with capitalization* thanks to Christian Egli.
-   Fix a problem with Ñ in Dutch braille thanks to Paul Rambags
-   Updated Slovak Braille table to be inline with the 2021 Slovak braille usage guidelines.
-   Fixed a problem with the \'+\' symbol in UK Braille Computer Notation thanks to Mario Arias.
-   Major improvements to the Hungarian braille tables thanks to Attila Hammer.
-   Make Punjabi table to behave the same as Duxbury in forward translation and more reliably than Duxbury in back translation. Thanks to Jake Kyle.
-   Improvements to the Russian and other Cyrillic tables thanks to Andrey Yakuboy:
    -   Now all Russian based tables return braille Unicode braille by default when forward translating, no need to include `ru-unicode.dis` manually.
    -   French letters (æ, ë and ï) have been added to the Russian literary braille table.

Other changes
-------------

-   Integrate sanitizer tests in the CI pipeline and fix a large number of memory problems (leaks, overflow and undefined behavior) thanks to Samuel Thibault.
-   Removed the \"experimental\" label from the functions `lou_indexTables`, `lou_findTable`, `lou_findTables`, `lou_getTableInfo` and `lou_listTables` (the meta data query API).
-   Fix a build problem when using Clang 11 on macOS thanks to Robert Scott.

Deprecation notice
------------------

-   None

Backwards incompatible changes
------------------------------

-   None

Invisible changes
-----------------

New, renamed or removed tables
------------------------------

### New

-   de-g2-detailed.ctb

### Renamed

-   None

### Removed

-   None
