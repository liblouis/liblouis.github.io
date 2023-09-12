---
category: Liblouis
title: Liblouis Release 3.27.0
---

This release contains support for two more languages, namely Thai and Romanian uncontracted braille. There is also the usual assortment of incremental improvements to Bengali, Danish, Hungarian, Swedish, Urdu and US English. To top it off, some great new contributors did some code cleanups and bug fixes.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/37?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   Added support for Thai braille thanks to Chatupol Nootatong, Dr. Wiraman Niyomphol and Itsawat Banlawanich from Thai braille fund and Foundation for the Blind in Thailand.
-   Added a new Romanian 6 dot table, thanks to BAUM Engineering.

## Braille table improvements

-   Update to Urdu, removing old rule where dots 256 was used for Urdu letters TEH ALEF. Thanks to Jake Kyle.
-   Added the dari character to Bengali thanks to Attila Hammer.
-   Improvements to Hungarian (added more exceptions) thanks to Attila Hammer.
-   Improvements to Hungarian to support users if typing physical braille display, thanks to Attila Hammer.
-   Fixed the translation of Unicode ellipses in US English grade 1 and 2 tables thanks to Anthony Tibbs.
-   Added some more symbols to the Nemeth character definitions thanks to Norbert Markus and Attila Hammer.
-   Fixed a bug in Danish when back-translating a word contraction followed by \"!\", thanks to Bue Vester-Andersen.
-   Improved handling of numbers and fixed a couple of whole-word contraction errors in Swedish braille thanks to Insyn Scandinavia AB.
-   Added the possibility to retain the virtual dots on Dutch braille, so that it should be possible to distinguish between identical dot patterns that originate from different input. Thanks to Bert Frees.

## Other changes

-   Removed some code smell thanks to Aaron Cannon.
-   Duplicate emphasis class definitions now cause a warning, thanks to Attila Hammer.

## Deprecation notice

-   None

## Backwards incompatible changes

-   The line continuation feature was removed, as it was no longer needed and caused problems (e.g. [issue 239](https://github.com/liblouis/liblouis/issues/239)). The tables that depended on it were updated. Thanks to Aaron Cannon.
-   Invalid attribute names now cause a table compilation error instead of just a warning. Thanks to Attila Hammer.

## New, renamed or removed tables

### New

None

### Renamed

None

### Removed

None
