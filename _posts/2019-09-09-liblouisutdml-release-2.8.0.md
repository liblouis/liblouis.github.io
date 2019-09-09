---
category: Liblouisutdml
title: 'Liblouisutdml Release 2.8.0'
---

This Liblouisutdml release adds a couple of new features and adds support for liblouis 3.11.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouisutdml/milestone/3?closed=1).

* Will be replaced with the ToC
{:toc}

New features
------------

-   Add support for liblouis 3.11
-   Add a setting for minimum syllable length (hyphenation) thanks to Bert Frees
-   Add a new page number format: Roman capitals, thanks to Bert Frees

Bug fixes
---------

-   Drop the dependency on internal liblouis API, thanks to Christian Egli and Bert Frees
-   Handle empty elements with style thanks to Bert Frees
-   Fix `topBoxline` and `bottomBoxline` thanks to Bert Frees
-   Fix `printPageNumberRange=yes` with `printPageNumberAt=bottom` thanks to Bert Frees
-   Allow Roman numbers greater than 1000 thanks to Bert Frees
-   Fix Belgian math thanks to Bert Frees

Other
-----

-   Added a huge set of MathML -\> Nemeth tests thanks to Neil Soiffer
-   Add a description to the NAME section of the man page thanks to Samuel Thibault
