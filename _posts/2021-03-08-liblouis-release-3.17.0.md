---
category: Liblouis
title: 'Liblouis Release 3.17.0'
---

This release stands in the tradition of small incremental improvements that make it another fine and solid release. Andrey Yakuboy put in a lot of work to improve Russian literary and computer braille. He also provided a new table for Belarusian uncontracted and computer braille. Aside from that there are numerous improvements in Braille tables such as French, Polish and Urdu. The documentation has been improved as has the table meta marking the tables whether they are geared towards forward or backwards translation. I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/27?closed=1).

* Will be replaced with the ToC
{:toc}

Braille table improvements
--------------------------

-   The backtranslation of æ in French 6 dot braille has been fixed thanks to André-Abush Clause.
-   The definition of the vertical line symbol (\|) in the Russian computer braille table was corrected thanks to Andrey Yakuboy.
-   Improvements to the Russian literary braille thanks to Andrey Yakuboy:
    -   Letters which are used in Old-Russian texts were added.
    -   Arrows, integrals and other symbols were added.
    -   the horizontal bar symbol (u+2015) was added and marked as a dash-symbol.
    -   Now accent marks are put before a letter according to the Russian braille rules.
    -   Many bugs with processing space-symbols were fixed.
    -   Improvements to processing dialogs and direct speech.
    -   Improvements to processing letters of different alphabets.
-   New tables for Belarusian uncontracted and computer braille thanks to Andrey Yakuboy.
-   Various fixes to Polish tables thanks to Łukasz Golonka:
    -   Add em dash to both computer and literary Polish tables
    -   Remove some definitions which made it impossible to back translate quoted strings from the Grade 1 table
    -   Fix back translation of capital M and add tests for back translation of all Latin capital letters for Grade 1 table
-   Update to Urdu thanks to Jake Kyle:
    -   Revised definitions of SUPERSCRIPT ALEF and ARABIC LIGATURE ALLAH ISOLATED FORM.
    -   Changed contractions of ٹھ, ان, اِن, بے, بی, اَور and اور.
    -   Dots 3-3 used for repeated words instead of 6-6.

Other changes
-------------

-   Fixed some valgrind issues thanks to André-Abush Clause.
-   Improve the documentation of *caps* opcodes thanks to Bue Vester-Andersen.
-   Add meta data to all tables indicating whether a table is geared towards forward or backwards translation or both. Again thanks to Bue Vester-Andersen.

New, renamed or removed tables
------------------------------

### New

-   bel.utb
-   bel-comp.utb

### Renamed

None

### Removed

None
