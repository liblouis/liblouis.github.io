---
category: Liblouis
title: Liblouis Release 3.19.0
---

For this release Bert Frees has been hard at work to clean up the code base. He fixed a few bugs one of which was causing memory corruption. Others have contributed corrections to braille tables or even provided new tables. For example there are now tables for Tshivenda and for Russian contracted braille.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/29?closed=1).

```{=markdown}
* Will be replaced with the ToC
{:toc}
```
Bug fixes
---------

-   Fix a bug in the `uplow` opcode thanks to Bert Frees.
-   Fix a possible crash due to memory corruption thanks to Bert Frees.

Braille table improvements
--------------------------

-   The Norwegian 6 dots braille tables now correctly handles signs like section sign (\'§\' and \'§§\'), as well as numbersign (\'\#\') before numbers. In addition the letters a with acute, o with tilde, n with long right leg and thorn are redefined. Phrases with capitals only are know handled correctly. All thanks to Lars Bjørndal.
-   Fix a problem with \'ç\' in Northern Kurdish thank to Imam Kahraman and Christian Egli.
-   Add support for back translation in Russian literary braille thanks to Andrey Yakuboy.
-   In Russian literary braille, if the letters \'Ё\' and \'Й\' consist of two code points, they are displayed correctly.
-   Add new Russian contracted (grade 1) table thanks to Andrey Yakuboy and Ekaterina Anisimova.
-   Update to Urdu, mostly to cater for spelling variations found in source text. Thanks to Jake Kyle.
-   New contracted braille table for Tshivenda created by Christo de Klerk at the request and under the auspices of the South African Braille Authority.
-   Fix in Arabic computer braille table thanks to Ikrami Ahmad:
    -   back-translate 256 to Latin full stop
-   Fix translation of URLs and file paths in Polish grade 1 table, thanks to Łukasz Golonka.

Other changes
-------------

-   Fix the build script for Microsoft `nmake` thanks to Leonard de Ruijter.

Deprecation notice
------------------

-   None

Backwards incompatible changes
------------------------------

-   None

Invisible changes
-----------------

-   Major refactoring of `compileTranslationTable.c` thanks to Bert Frees. Thanks to these changes a few bugs were found and fixed in the code and a few tables.

New, renamed or removed tables
------------------------------

### New

-   ru-ru-g1.ctb
-   ve-za-g1.utb
-   ve-za-g2.ctb

### Renamed

None

### Removed

None
