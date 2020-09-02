---
category: Liblouis
title: 'Liblouis Release 3.15.0'
---

This release contains updates to the Afrikaans, Malayalam, Malay, Israeli, classical English and Portuguese tables. It also contains a new table for Coptic thanks to first-time contributor Ibraam Nasif. Behind the scenes there have been major changes to the cross-compilation tool-chain that will finally allow us to ship pre-built windows binaries that contain `lou_checkyaml.exe`.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/25?closed=1).

* Will be replaced with the ToC
{:toc}

New features
------------

None

Bug fixes
---------

None

Braille table improvements
--------------------------

-   New computer braille table for the Coptic language thanks to Ibraam Nasif from Coptic Bishopric of Youth
-   Improvements to Afrikaans thanks to Christo de Klerk
    -   Fixed correct handling of the ŉ character (0x149)
    -   Prevent contraction of
        -   \"self\" in \"selfoon\", \"selfone\",
        -   \"ui\" in words and names like \"quisling\", \"quidproquo\", \"quiëtis\", \"Quinten\", \"Quintus\",
        -   \"er\" in words like \"konstituering\".
-   Improved table for Malayalam grade 1 thanks to Jake Kyle.
    -   Fixed rules for Candrakkala character at the end of a word.
    -   Fixed rules for letters ര മ ങ in certain contexts.
    -   Improved back-translation.
-   Improvements to grade 2 Malay braille thanks to Herbert Koh.
-   Improvements to Israeli 6-dot thanks to BAUM Engineering.
    -   Fixed number sign for Arabic digits.
    -   Fixed Hebrew letters with dagesh.
-   Added bullets to the classical English tables, thanks to Bue Vester-Andersen
-   Improved Portuguese grade 1 thanks to Bue Vester-Andersen.
    -   Fixed forward translation of &, \<, \>, \`, ¶ and \'.
    -   Improved back-translation. The table is now tagged as going both forward and backward.
    -   Added missing square root sign.

Other changes
-------------

None

Deprecation notice
------------------

None

Backwards incompatible changes
------------------------------

None

Invisible changes
-----------------

-   Major rework of the cross-compilation tool-chain. There are now Docker images that should allow for local builds of binaries for 32 and 64 bit. These include the libyaml library so the binaries contain `lou_checkyaml.exe`. This will allow table creators to test their changes locally under windows.

New, renamed or removed tables
------------------------------

### New

-   cop-eg-comp8.utb

### Renamed

None

### Removed

None
