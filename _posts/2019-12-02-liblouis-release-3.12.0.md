---
category: Liblouis
title: 'Liblouis Release 3.12.0'
---

This release contains major updates to the UEB, Afrikaans, Chinese, Danish and Polish tables. Aside from that there have been many code cleanups, such as the elimination of many global vars and bug fixes such as an endless loop or a crash in `lou_translate`.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/22?closed=1).

* Will be replaced with the ToC
{:toc}

New features
------------

None

Bug fixes
---------

-   Fix a memory leak when several tables are specified and some of them that can\'t be resolved. Thanks to André-Abush Clause.
-   Fix an endless loop with multipass rules where `endReplace` is smaller or equal to `startMatch`. Thanks to Bert Frees and Bue Vester-Andersen.

Braille table improvements
--------------------------

-   Punctuation corrections in Ethiopic Braille thanks to Dr. Tamru E. Belay.
-   Fixes to the Norwegian 8dot braille table in regards to 4 Sami characters, capital and small letters S and Z with caron. Thanks to Oddvar Øyan and Lars Bjørndal.
-   Improvements to Afrikaans contracted braille thanks to Christo de Klerk
    -   Over 50 cases have been corrected where braille rules were not correctly applied in words, mainly in those cases where contractions depend on pronunciation; for example, ui or ie must not be contracted in requiem.
    -   Corrected contraction errors caused by start or end of input not properly taken into account.
    -   Words are no longer contracted into lower word contractions when they are adjacent to lower punctuation, for example: \"hier.
    -   Words are now contracted into their lower contractions when they are adjacent to upper punctuation, for example: (hier.
-   New draft table for Dutch 8-dot computer braille thanks to Leonard de Ruijter.
-   Updates to the Chinese braille table (`zh-tw.ctb`) thanks to Bo-Cheng Jhan, Coscell Kao, 特種兵, 黃偉豪, and Victor Cai.
-   Fixes to Polish grade 1, thanks to Łukasz Golonka
    -   Removes some unneeded `midnum` symbols from the Polish Grade 1.
    -   Fixes some symbols which weren\'t defined according to the specification.
    -   Makes it possible to type dot from a braille keyboard.
    -   Adds Greek letters and some commonly used math operators to both the Grade 1 and the computer braille table.
-   Fix several conflicts in `fr-bfu-comp68.cti` with regards to the IPA Unicode range. These had been especially noticed when `compbrlAtCursor` mode flag was used. Thanks to André-Abush Clause.
-   Major Improvements to contraction use in UEB thanks to James Bowden.
-   Updates to the Danish Tables thanks to Bue Vester-Andersen:
    -   Added miscelaneous Unicode characters to 8 dots grade 1 and 2 (accented letters, punctuation, arrows and some math signs). Most of these characters have not been defined in the Danish Braille standard. This implementation is purely experimental, and the characters may be changed later.
    -   Updated the 6 dots tables with more Unicode characters (no arrows or math signs).
    -   Corrected a bug in 8 dots grade 2, which resulted in the \"var\" contraction not always being properly applied.

Other changes
-------------

-   Make sure the log callback uses the same calling convention as all the other exported functions. Thanks to Leonard de Ruijter.
-   Fix a problem with Non-ASCII characters in file paths in the Python bindings, thanks to André-Abush Clause.
-   Eliminate some of the globals variables thanks to Bert Frees.
-   The display and the translation are now separated at least internally, thanks to Bert Frees. As a reminder, there are two phases to a braille conversion:

    - **translation**: liblouis uses the rules in the translation table to convert characters to dots
    - **display**:   display the dots as characters. Usually liblouis uses the characters defined in display rules (in display tables) but as a fallback it uses mappings defined in the translation table, e.g. letter rules.

-   No longer install `lou_compare`, a tool that is used to run regression tests for UEB. As it is only run during testing it will no longer be installed by default on a users machine.
-   Remove a hidden feature of `lou_translate` that would cause it to crash if passed an invalid file name. Thanks to Christian Egli.
-   Raise an error if a dot pattern can not be displayed instead of silently ignoring it thanks to Bert Frees.

Deprecation notice
------------------

None

Backwards incompatible changes
------------------------------

None

Invisible changes
-----------------

New, renamed or removed tables
------------------------------

### New

-   nl-comp8.utb

### Renamed

None

### Removed

None
