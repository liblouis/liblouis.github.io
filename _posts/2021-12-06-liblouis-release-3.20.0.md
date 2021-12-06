---
category: Liblouis
title: Liblouis Release 3.20.0
---

This is a major release. Not only in terms of table additions and updates but also in the way the tables are written. Bert has replaced the `uplow` opcode with a more generalized `base` opcode. This clears up the path for a more generalized handling of emphasis and uppercase characters. In the course of this simplification some bugs with computer braille were discovered and fixed.

On the Braille tables side there is a brand new table for braille kanji and there are major updates to the Polish, Chinese, Russian literary and the UEB tables.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/30?closed=1).

```{=markdown}
* Will be replaced with the ToC
{:toc}
```
New features
------------

-   There is an experimental new feature that allows a table writer to write table macros. This feature is disabled by default. Macros are a helpful tool for refactoring, however as it stands the feature is not mature and might disappear in future releases.
-   Add a new opcode `base` that associates a character with another already defined character. Think of it as a generalized form of `uplow`. A typical use of this opcode is for defining a pair of letters, a lowercase and the corresponding uppercase.

Bug fixes
---------

-   Fix a problem with the dot 7 capitalization indicator in computer braille thanks to Bert Frees.

Braille table improvements
--------------------------

-   New table for Kantenji (or \"braille kanji\", a Japanese braille system) thanks to Kensaku Y.
-   Improvements to Polish literary braille table thanks to Łukasz Golonka.
    -   use correct representation of indexes for squared, cubed etc.
    -   use correct representation for fractions
    -   change symbol used for underscore from dots 46 to 6
    -   add U+2212 minus symbol (also to computer braille table)
-   Updates to the Chinese braille table (`zh-tw.ctb`) thanks to Bo-Cheng Jhan.
    -   Complete translation of CJK Radicals Supplement
    -   Change the default braille pattern of \'蛤\' to ⠗⠜⠂
    -   Correct the default braille pattern of many Chinese characters
    -   Add various Chinese phrases involving exceptions of braille patterns
    -   Add a math symbol \'◊\' (⠫⠓)
-   Improvements to the Russian literary (uncontracted and contracted) braille thanks to Andrey Yakuboy.
    -   If the dot sign (\'.\') is after digits at the beginning of a string, the braille dot 6 isn\'t inserted between the last digit and the dot. This is necessary for items\' numbers of numbered lists.
    -   Back translation for French letters has been disabled because of conflicts with punctuations.
    -   Back translation for Latin (mostly English and German) letters has been improved.
    -   The definition of the 7/8 fraction (U+215E) has been fixed.
    -   Placement of spaces around math symbols has been improved according to the Russian braille rules.
    -   The apostrophe sign (\"\'\") and the right tick sign (u+2019) are displayed correctly if they\'re in the end of a word (English, for example).
    -   New contractions have been added and minor bugs have been fixed in the Russian contracted braille table.
-   New display table (`ru-brf.dis`) has been added. It adds support of Braille ASCII for Russian and other Cyrillic tables. Thanks to Andrey Yakuboy.
-   Improvements to UEB thanks to James Bowden.
    -   Fixed placement of numeric indicator in letters dot numbers.
    -   Added more mathematical symbols.
    -   Added the four new allowed shortform extension words.
    -   Improvements to words starting with \"dis(h)\" and \"cross(h)\".
-   Implement alphabet change indicator in Dutch braille thanks to Bert Frees.

Other changes
-------------

Deprecation notice
------------------

-   None

Backwards incompatible changes
------------------------------

-   The `uplow` opcode has been removed and replaced with the more general `base` opcode.

Invisible changes
-----------------

New, renamed or removed tables
------------------------------

### New

-   ru-brf.dis
-   ja-kantenji.utb
-   latinUppercaseComp6.uti

### Renamed

None

### Removed

-   ru-ru.dis
-   cs-letterDef8Dots.uti
-   ru-chardefs.cti
-   nl-g0.uti
-   nl-BE-g0.utb
