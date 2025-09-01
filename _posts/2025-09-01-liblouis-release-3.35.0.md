---
category: Liblouis
title: Liblouis Release 3.35.0
---

This release brings quite a few technical improvements. We\'ve enhanced support for memory management in the API, added support for math characters in `match` rules, expanded the Python bindings to include metadata API support, and made it possible to set the log level via the `LOUIS_LOGLEVEL` environment variable.

There are also substantial updates to various language tables, including improvements to Portuguese 8-dot braille, Hebrew back-translation, Norwegian 8-dot support, UEB forward translation, and Hungarian braille. We\'ve added support for Rokuten Kanji (Japanese Kanji Braille). Russian, Ukrainian, and Belarusian literary braille tables have received updates to their space handling rules, and the Danish tables have seen fixes related to typos and hyphenation.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/45?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   `match` rules now also support testing for math characters. Thanks to James Bowden for the idea and Bert Frees for the implementation.
-   Add Support for \"Rokuten Kanji\", the other Japanese system for Kanji Braille.
-   The API now contains functions to free memory that was returned by API calls. See the documentation for details. Thanks to Leonard de Ruijter.
-   The Python bindings now support most of the metadata API, thanks to Leonard de Ruijter.

## Bug fixes

-   `ucBrl` in the mode parameter now correctly works also for back-translation. Thanks to Bert Frees.
-   Fix a segfault when a StringBuffer is used before it is initialized. Thanks to Anthony Tibbs.
-   Fix a bug in the handling of `nocont` in conjunction with `seqdelimiter`. Thanks to Bert Frees.

## Braille table improvements

-   Improvements to the Portuguese 8-dot Braille table: Correct angle quotation mark characters used in Portugal, add missing symbols, such as Greek alphabet and double quotation mark characters used in Brazil. Also added symbols that aren\'t defined in the Portuguese standard but are commonly found in texts and web pages, such as bullet points, some common mathematical symbols, etc. Thanks to Tiago M. Casal.
-   Fix the back-translation of the Greek Sigma and other small improvements to the Hebrew table. Thanks to Leonard de Ruijter.
-   Improvements to Norwegian 8dot thanks to Lars Bjørndal.
    -   Add more characters and math symbols.
    -   Fix a back-translation problem when two dot 6 are followed by a word.
    -   Fix a problem where the letter \"i\" is followed by number.
-   Improvements to UEB forward translation, in particular fixes for rarer words and some proper names. Thanks to James Bowden.
-   Hungarian improvements thanks to Attila Hammer.
-   Fix typos and hyphenations in the Danish tables thanks to Bue Vester-Andersen.
-   Improvements to the back translation for the Russian literary Braille table: Now, if a space is intentionally input after a comma or semicolon, a double space will not occur. If no space was input, a space will still be automatically added, as before. This change also applies to Ukrainian and Belarusian literary Braille tables. Thanks to Andrey Yakuboy.

## Other changes

-   Hans Anton Ålien proof read the documentation and fixed quite a few typos.
-   The log level of the library can now also be set via the `LOUIS_LOGLEVEL` environment variable.

## Deprecation notice

-   None

## Backwards incompatible changes

## Invisible changes

## New, renamed or removed tables

### New

-   ja-rokutenkanji.utb

### Renamed

None

### Removed

None
