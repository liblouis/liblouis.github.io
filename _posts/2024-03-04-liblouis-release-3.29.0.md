---
category: Liblouis
title: Liblouis Release 3.29.0
---

A lot of hard work by Andrey, Anthony, Attila, Bert, Bue and James went into this release. We have many improvements for UEB, better support for Belarusian and Ukrainian literary braille, a major upgrade for Turkish and miscellaneous enhancements for Kannada, Danish, Dutch, Esperanto and Malay. There is also a brand new table for classical Greek for Spanish braille readers.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/39?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   There is a new uncontracted braille for Lao thanks to Aikeo Koomanivong, disability service center in Lao PDR DSC.
-   There is a new uncontracted braille table to read classical Greek characters according to the technical document B12-1 by the Spanish Braille Commission, thanks to Iván Novegil.

## Bug fixes

-   None

## Braille table improvements

-   Fixed issues with Kannada table `kannada.cti` thanks to Jake Kyle.
-   Improvements to the Belarusian and Ukrainian literary braille tables thanks to Andrey Yakuboy:
    -   Added support for back translation to the Belarusian and Ukrainian literary Braille tables (`bel.utb` and `uk.utb` respectively).
    -   Changed the dot patterns for parentheses in the Ukrainian braille table from 126-345 to 2356.
    -   Added new tables for Belarusian and Ukrainian braille with indication of capital letters (`bel-detailed.utb` and `uk-detailed.utb` respectively).
-   Minor improvements to the Danish tables thanks to Bue Vester-Andersen:
    -   Fixed definition of dollar sign (\$)
    -   Fixed rules for applying section sign (§)
    -   Fixed contraction of some words
-   Updates to UEB Contracted thanks to Anthony Tibbs:
    -   Final letter groupsigns will not be used immediately following capital indicators (e.g. when the first letter of the groupsign is capitalized, or the groupsign follows a capitalized passage) per UEB Rule 10.8.2
-   Updates to UEB thanks to James Bowden:
    -   Back translating braille dot 3 now results in the ordinary apostrophe U+0027 rather than U+2019
    -   Dot 5, used for \"spaced digits\" is only applied if a no-break space U+00a0 is used in the input. It fixes an issue with British postcodes which should be treated as two separate items. It also means that if someone wants spaced digits, numbers have to be joined together with no-break spaces deliberately.
-   Do not collapse Unicode braille in Dutch, thanks to Davy Kager.
-   Improvements to Hungarian (added more exceptions) thanks to Attila Hammer.
-   Added support for back-translation to the Esperanto table, thanks to Bue Vester-Andersen.
-   Major upgrade to the Turkish tables thanks to Oğuz UĞUR with lots of help from Attila Hammer.
    -   add support for accented characters
    -   add punctuation symbols from the Turkish Braille Writing Guideline
    -   fix some contractions
-   Corrections to the Malay Table thanks to lbk2907.

## Other changes

-   Duplicate emphasis classes are no longer warnings thanks to Christian Egli. There are cases where emphasis redefinition is legitimate. They are simply logged now.

## Deprecation notice

-   None

## Backwards incompatible changes

-   None

## Invisible changes

-   None

## New, renamed or removed tables

### New

-   bel-detailed.utb
-   uk-detailed.utb
-   lo-g1.utb

### Renamed

None

### Removed

None
