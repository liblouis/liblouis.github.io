---
category: Liblouis
title: Liblouis Release 3.24.0
---

This release contains major updates to Hungarian, UEB, and Chinese bopomofo braille. Danish has been completely reworked and there is now support for the Danish braille standard 2022. There are also some new tables so that liblouis can now generate Georgian computer braille, Swahili (Kenya) and Chichewa (Malawi). Aside from that there is the usual assortment of code cleanups and bug fixes.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/34?closed=1).

* Will be replaced with the ToC
{:toc}


Braille table improvements
--------------------------

-   New grade 1, 1.2, 1.3, 1.4, 1.5 and 2 tables for Swahili (Kenya) and grade 1 table for Chichewa (Malawi) thanks to Jake Kyle, Dipendra Manocha and Martin Kieti.
-   Improvements to Hungarian thanks to Attila Hammer.
-   Update braille patterns of some Chinese characters and phrases in the Chinese bopomofo braille table thanks to Bo-Cheng Jhan.
-   Add experimental Georgian computer braille table thanks to Harris Mowbray and Mariam Mikiashvili.
-   Updated the Danish tables to the new 2022 Danish braille standard thanks to Bue Vester-Andersen.
    -   Limited contraction level (grade 2l or 1.5) is no longer part of the Danish braille standard 2022.
    -   There is no longer any need for \"literary\" tables. In Danish braille, capital letters are now always indicated, and steps have been taken in the standard to ensure better back-translation.
    -   As requested by The Danish Braille Committee, the tables for the 1993 standard will be kept as an option for at least a year. All the 1993 tables have been renamed to include \"~1993~\" in the filename, so the new tables will be used as default.
-   Improvements to UEB thanks to James Bowden.
    -   Add new sign for German sharp S (ICEB July 2022)
    -   Fix a couple of acronyms which require grade 1 indicator (LLB, LLP)
    -   Fix placement of numeral sign in letters comma digits
    -   Review rules for \"under\" and \"there\" contractions

Deprecation notice
------------------

-   None

Backwards incompatible changes
------------------------------

-   None

New, renamed or removed tables
------------------------------

### New

-   sw-ke-g1-2.ctb
-   sw-ke-g1-3.ctb
-   sw-ke-g1-4.ctb
-   sw-ke-g1-5.ctb
-   sw-ke-g1.utb
-   sw-ke-g2.ctb
-   ka.utb
-   ny-mw.utb
-   The following files now all refer to the corresponding tables for Danish braille 2022:
    -   da-dk-g08.ctb
    -   da-dk-g16.ctb
    -   da-dk-g18.ctb
    -   da-dk-g26.ctb
    -   da-dk-g28.ctb
    -   da-dk-octobraille.dis

### Renamed

-   The old Danish tables for the now deprecated 1993 standard have been renamed to include \"1993\" in the filename:
    -   da-dk-g08.ctb -\> da-dk-g08_1993.ctb
    -   da-dk-g16.ctb -\> da-dk-g16_1993.ctb
    -   da-dk-g16-lit.ctb -\> da-dk-g16-lit_1993.ctb
    -   da-dk-g18.ctb -\> da-dk-g18_1993.ctb
    -   da-dk-g26.ctb -\> da-dk-g26_1993.ctb
    -   da-dk-g26-lit.ctb -\> da-dk-g26-lit_1993.ctb
    -   da-dk-g26l.ctb -\> da-dk-g26l_1993.ctb
    -   da-dk-g26l-lit.ctb -\> da-dk-g26l-lit_1993.ctb
    -   da-dk-g28.ctb -\> da-dk-g28_1993.ctb
    -   da-dk-g28l.ctb -\> da-dk-g28l_1993.ctb
    -   da-dk-octobraille.dis -\> da-dk-octobraille_1993.dis

### Removed

None
