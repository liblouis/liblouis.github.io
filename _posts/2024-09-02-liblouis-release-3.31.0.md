---
category: Liblouis
title: Liblouis Release 3.31.0
---

This release adds support for new braille tables, such as Thai contracted and Greek International US, and updates existing braille tables such as the Finnish table which has been updated to the latest braille standard. Benehalo has uncovered a number of security problems in the liblouis code and has thankfully also provided fixes for them by hardening the code.

I\'d like to thank all the very dedicated contributors for helping to push liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/41?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   None

## Bug fixes

-   Benehalo discovered quite a number of security problems and kindly enough also just fixed them by adding some check guards and making the code more robust.

## Braille table improvements

-   Hungarian improvements (added more exceptions) thanks to Attila Hammer.
-   The usage of `match` opcodes with empty pre- and post patterns, e.g. `match - disk - 145-24-16` in some tables has been replaced with plain old `always` opcodes, as their implementation is much faster.
-   A change to the Spanish back-translation that went into the last release was reverted as it caused more problems than it solved.
-   The Dutch display table has been improved thanks to Bert Frees.
-   The Finnish table has been updated to reflect the latest Finnish braille standard from 2021 (Pistekirjoituksen perusteet, 2021) thanks to Sami Maatta from Celia.
-   Added a new Thai contracted braille table according to the guidelines of \"Thai Braille Use Manual\" of the National Braille Promotion and Development Fund. Thanks to Chatupol Nootatong.
-   Add a table for Greek International US braille. This table is based on the composed Greek characters, unlike the existing English table which is based on the decomposed system. Thanks to Sarah Blake LaRose and Leonard de Ruijter.

## Other changes

-   None

## Deprecation notice

-   None

## Backwards incompatible changes

-   None

## Invisible changes

-   None

## New, renamed or removed tables

### New

-   `th-g1.utb`
-   `grc-international-en-composed.utb`

### Renamed

None

### Removed

None
