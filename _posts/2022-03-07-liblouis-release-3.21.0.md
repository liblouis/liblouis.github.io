---
category: Liblouis
title: Liblouis Release 3.21.0
---

This release sees major updates for Hungarian and German. The Swiss Library for the Blind, Visually Impaired and Print Disabled has agreed to upstream their tables and Attila Hammer has adapted Hungarian to the latest standard. A bug in numeric mode was fixed which should it make more useful for languages other than UEB. Finally there are fixes for Norwegian and Danish.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/31?closed=1).

* Will be replaced with the ToC
{:toc}


New features
------------

-   New table for German 6-dot computer braille thanks to the Swiss Library for the Blind, Visually Impaired and Print Disabled

Bug fixes
---------

-   When numeric mode was enabled, i.e. when a table contains any of the `numericmodechars`, `midnumericmodechars` or `numericnocontchars` opcodes, contraction was automatically disabled. This is required for UEB but not necessarily so for other braille systems (as mentioned in [issue 615](https://github.com/liblouis/liblouis/issues/615)). This has now been changed so that contraction is only disabled if the `nocontractsign` has been defined. Thanks to Christian Egli.

Braille table improvements
--------------------------

-   Fixed emphasis, section sign and dash between numbers in Danish tables thanks to Bue Vester-Andersen.
-   Correct latin small letter sharp s in Norwegian thanks to Lars Bjørndal and Dawn Renouf Bjørneby.
-   Major improvements to German Braille thanks to the Swiss Library for the Blind, Visually Impaired and Print Disabled
    -   Improvements to emphasis handling in German tables and greatly extended test coverage.
    -   All the improvements from the tables formerly known as bidi tables were merged in the main tables and are now used by both tables. The bidi tables have been renamed to \"detailed\". Essentially the detailed tables provide capitalized Braille which helps with the back-translation.
    -   Upstream all improvements from the `sbs-braille-tables`.
-   Improvements to the Hungarian tables thanks to Attila Hammer.
    -   Improved back-translation, notably of words containing special consonants like \"szsz\" or \"ssz\".
    -   Extended the Hungarian grade 1 \"braille input\" (back-translation aided by special extra dot patterns).
    -   Implemented latest update to the Hungarian braille standard (for example the characters \"\\\" and \"\|\" were changed).

Other changes
-------------

-   Make `autogen.sh` work on MacOS, thanks to Ken Perry

Deprecation notice
------------------

-   None

Backwards incompatible changes
------------------------------

Invisible changes
-----------------

New, renamed or removed tables
------------------------------

### New

-   de-comp6.utb

### Renamed

-   de-g0-bidi.utb -\> de-g0-detailed.utb
-   de-g1-bidi.ctb -\> de-g1-detailed.ctb

### Removed

None
