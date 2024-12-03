---
category: Liblouis
title: Liblouis Release 3.32.0
---

A lot of intense work by Matt, Paul, Leonard, Eric, Sarah and Bert went into this release. There are new tables for Biblical Language and Ancient Near Eastern Studies. We have improvements for UEB, Spanish, Turkish and Hungarian. There are also a couple of new features, for example the handling of the language metadata has been extended to handle language ranges.

I\'d like to thank all the very dedicated contributors for helping to push liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/42?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   `lou_translate` now has an option to specify a display table. This is especially useful when using a query. Before it would just default to a Unicode display table, thanks to Christian Egli.
-   Meta data for `language` and `region` can now be specified using a [IETF Extended Language Range](https://datatracker.ietf.org/doc/html/rfc4647#section-2.2). This is particularly useful for accessing tables related to a specific region, for instance. Thanks to Bert Frees.

## Bug fixes

-   Fix a memory problem in the `getTable` function. Thanks to the oss-fuzz project for reporting and to Christian Egli for fixing it.
-   Fix a build problem on Windows related to `strncasecmp` which was reported at the last minute by Leonard de Ruijter and fixed by Christian Egli.

## Braille table improvements

-   Updates to Spanish grade 1 thanks to José Manuel Delicado:
    -   Removed lowered digits. This allows certain punctuation to be written again.
    -   Included `digits6Dots.uti`. This prevents the numsign from disappearing.
    -   The symbols `.`{.verbatim} and `,`{.verbatim} are used as numeric mode chars.
    -   Added the `noback` operator to the apostrophe symbol, since it\'s not very used and conflicts with the `.`{.verbatim}.
-   Extensive fixes to the UEB computer code thanks to James Bowden.
-   Improvements to Turkish grade 2 thanks to Oğuz Uğur and Attila Hammer.
-   Hungarian improvements (added more exceptions) thanks to Attila Hammer.
-   There is now an include table for symbols referencing the critical apparatus in critical texts thanks to Matt Yeater.

## Other changes

-   Migrate to `realloc-posix` from gnulib, as `realloc-gnu` that we used before is now deprecated. Thanks to Christian Egli.
-   Improvements to the manual thanks to Huan Wu.
-   Thanks to Rob Beezer we now have instructions on how to install Python bindings in a virtual environment.

## Deprecation notice

-   None

## Backwards incompatible changes

-   If liblouis has been compiled for 16-bit Unicode it will now error if a table contains characters outside of that range. Previously it would issue a warning and ignore the problem. Thanks to Christian Egli.

## Invisible changes

-   None

## New, renamed or removed tables

### New

-   `critical-apparatus.uti`
-   `he-common-consonants.uti`
-   `he-common-vowels-ihbc.uti`

### Renamed

-   None

### Removed

-   None
