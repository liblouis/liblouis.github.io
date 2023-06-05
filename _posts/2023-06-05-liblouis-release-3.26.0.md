---
category: Liblouis
title: Liblouis Release 3.26.0
---

This release contains one new feature, namely the possibility to mark a test as an expected failure just for back- or forward translation. On top of that we have updates for Danish, Hungarian, Norwegian and Nemeth Braille plus the usual assortment of code cleanups and bug fixes.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/36?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   The YAML syntax to define tests has been improved so that expected failures can now contain a direction attribute. In other words you can now specify whether you expect a test to fail for both directions or just for forward or backward translation. For more details consult the updated documentation on how to write YAML tests. Thanks to Christian Egli.

## Bug fixes

-   Fix an out-of-bound write in `brl_checks.c` thanks to Bert Frees for the fix and to Han Zheng for the report.
-   Clear the display table cache on `lou_free` thanks to Bert Frees for the fix and to David Korczynski for the report.

## Braille table improvements

-   Improvements to Hungarian (added more exceptions) thanks to Attila Hammer.
-   Changed the Danish grade 2 tables in accordance with updates from the Danish Braille committee, thanks to thanks to Bue Vester-Andersen.
-   Added support for more symbols in the Nemeth braille tables thanks to Norbert Markus.
-   Improvements to Norwegian braille thanks to Lars Bjørndal
    -   Put `noback` before acute sign to enable input at sign (email addresses).
    -   Added more `noback` prefixes.
    -   Corrected leftwards arrow and added definition for left right arrow.
    -   Changed bullet point from 2356 to 36-36. According to the Norwegian braille standard, this is the preferred unordered list item prefix.

## Other changes

-   Clarify the `README` for Python thanks to Rob Beezer.
-   Properly remove support for Python2 in the Python bindings again thanks to Rob Beezer.

## Deprecation notice

-   None

## Backwards incompatible changes

-   None

## Invisible changes

-   None

## New, renamed or removed tables

### New

-   None

### Renamed

-   None

### Removed

-   None
