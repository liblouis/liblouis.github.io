---
category: Liblouis
title: Liblouis Release 3.34.0
---

This release brings significant improvements to various language tables, particularly for Classical/Biblical Hebrew where three main standards are now supported. We have a new table for Thai Grade 2 contracted braille, and substantial updates to Lithuanian braille tables. There are also improvements to Hungarian, Dutch, Norwegian, and Turkish tables. On the technical side, there\'s new support for building macOS universal binaries and the pre-built html and plain text documentation is no longer packaged with the released tarball.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/44?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   A new table for Thai Braille Grade 2, a contracted Braille system, has been added thanks to Chatupol Nootatong.

## Braille table improvements

-   Hungarian improvements thanks to Attila Hammer.
-   Fix a bug in the Dutch table related to apostrophes after a number which are not always a minute sign. Thanks to Bert Frees.
-   Fix the metadata of the Russian 6-dot computer braille table thanks to Bert Frees and Andrey Yakuboy.
-   Minor improvements to the Norwegian Braille: Some small fixes regarding 6 dot, added Cyrillic alphabet and added certain new characters to 8 dot, including bullet points used by JAWS when using Liblouis for 8 dot. Thanks to Lars Bjørndal and Bert Frees.
-   Major changes to the Lithuanian braille tables thanks to Rimas Kudelis
    -   Renamed `lt.ctb` to `lt-8dot.utb`
    -   Both tables have been reviewed and modified.
        -   The 6-dot table is now closer to the national standard issued in 2019.
        -   The 8-dot table is now intended to align with the 6-dot table instead of the 8-dot standard from 2011.
        -   Some whitespaces in the table files have been eliminated to make them easier to read using braille terminals.
-   Fixes for back-translation issues involving subscript numerals, diacritic marks, and capital letters turning into Greek letters. Makes no changes to the UEB-style cuneiform transliteration table. Thanks to Eric Harvey.
-   Major Expansion and Improvements to Classical/Biblical Hebrew thanks to Eric Harvey.
    -   Two new translation tables have been added so that the three main standards for Classical Hebrew are now available:
        1.  The original International Hebrew Braille Code (`hbo.utb`)
        2.  The system for full cantillation developed by Ray McAllister, Matthew Yeater, and Sarah Blake LaRose (`hbo-cantillated.utb`)
        3.  The compact standard without dagesh or shewa represented in the Katz transcription manual (`hbo-slim.utb`)
    -   `hbo.utb` is now the table for the International Hebrew Braille Code. Before it was used for the IHBC-McCallister system (now `hbo-cantillated.utb`). The International Hebrew Braille Code is the most-established and widely used standard for Classical Hebrew, so it seems right to make it the basic table.
    -   Most of the Hebrew-specific rules are contained in `.uti` files, and the `.utb` files only add rules for uncontracted English support. Since Classical Hebrew readers usually have another first language, this allows non-English speakers to create custom translation tables with Hebrew and their first language, or for easier inclusion in multilingual tables like `ancient-languages-us.utb`.
    -   In addition to the new tables, there are improvements to the `hbo-cantillated.utb` table for consistency and to make sure that braille output matches that produced by Duxbury as closely as possible:
        -   Ultra long vowels now contract consistently.
        -   Cantillation marks no longer interrupt the contractions for ultra-long vowels (hiriq-yod and tsere-yod).
        -   Holam now always renders properly as 135 and holam waw as 246.
-   Improvements to Turkish grade 1 and Turkish computer braille, thanks to Oğuz Uğur and Ozancan Karataş

## Other changes

-   There is a new configure option to build macOS universal binaries thanks to Bert Frees.
-   Fix incorrect (non-https) link in the documentation thanks to jinwoolee.
-   The pre-built html and plain text documentation is no longer packaged with the released tarball. All formats of the documentation can still be built from the source and from the released tarball as explained in the README. Thanks to Christian Egli.

## Deprecation notice

-   None

## Backwards incompatible changes

-   None

## Invisible changes

-   None

## New, renamed or removed tables

### New

-   hbo-cantillated.utb (formerly hbo.utb - hbo.utb was changed to follow the IHBC)
-   hbo-slim.utb
-   th-g2.ctb
-   lt-8dot.utb

### Renamed

-   ru-compbrl.ctb -\> ru-comp6.utb
-   ru.ctb -\> ru-comp8.utb

### Removed

None
