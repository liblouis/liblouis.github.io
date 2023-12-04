---
category: Liblouis
title: Liblouis Release 3.28.0
---

This release manages to bring as many new features, table improvements and bug fixes as we haven\'t seen in a long time. There are a number of major bug fixes that Bert worked on that fix bugs and inconsistencies. On the table side there is a new table for Filipino contracted braille, James has tirelessly been working on UEB improvements and (as usual) Attila worked on the Hungarian tables.

I\'d like to thank everybody for helping to bring liblouis forward.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouis/milestone/38?closed=1).

* Will be replaced with the ToC
{:toc}


## New features

-   `lou_translate` has a new option to specify the table to use with a query. See the updated documentation on how to make use of this new feature.

## Bug fixes

-   Fix a bug when matching context rules that begin with uppercase letters. Thanks to Anthony Tibbs for the [very detailed bug report](https://github.com/liblouis/liblouis/issues/1461) and thanks to Bert for the actual fix.
-   Fix a memory corruption error in the code for the swap opcodes. Thanks to the OSS-fuzz project for reporting and to Christian Egli for fixing it.
-   Change how emphasis phrases are determined. Also allow non-whole words at the start and end of a phrase. This fixes a problem in the UEB handling. Thanks to Ken Perry from APH for reporting and to Bert Frees for fixing it.
-   Character definition and base rules are now always considered in the order in which they are defined in the table. In other words the topmost rule always wins. This fixes a number of problems and inconsistencies. Thanks to Bert Frees for the fix.
    -   Fix a problem with `compbrlAtCursor` and `compbrlLeftCursor` that was reported by Daniel Mayr
-   When a table does not define any capital marks, rules are now case sensitive thanks to Bert Frees

## Braille table improvements

-   Improvements to UEB
    -   fixes to many words starting with letters \"BE-\".
    -   Fix back translation of dots 26 - when standing alone; should be the word enough.
    -   Fix assignment for the right double arrow and added left, up, and down double arrows.
    -   Fix typos in a couple of rules.
    -   Fix words beginning \"CONS-\" and \"DISHD-\" when written uppercase, all above thanks to James Bowden.
    -   Ensure letter indicators are added to letters A-J following numbers in a capitalized passage, thanks to Anthony Tibbs.
-   Improvements to Hungarian (added more exceptions) thanks to Attila Hammer.
-   New table for Filipino contracted braille, thanks to Allan Mesoga and Dang Hoai Phúc.

## Other changes

-   The `manywarnigs` module from gnulib is no longer used. It caused massive slowdowns when compiling with gcc.
-   Add the name of the concerned table when logging warnings thanks to Bert Frees for the patch and to Attila Hammer for the PR.

## Deprecation notice

-   None

## Backwards incompatible changes

-   The order of how character definition and base rules are considered has changed. All included tables were adapted, but if you maintain your own tables you might want to look [at the change](https://github.com/liblouis/liblouis/pull/1481) to see what you need to do.

## Invisible changes

## New, renamed or removed tables

### New

-   fil-g2.ctb

### Renamed

None

### Removed

None
