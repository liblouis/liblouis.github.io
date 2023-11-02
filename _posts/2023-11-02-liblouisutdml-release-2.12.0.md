---
category: Liblouisutdml
title: Liblouisutdml Release 2.12.0
---

This Liblouisutdml release brings major improvements to Nemeth Math handling thanks to Attila Hammer and Norbert Markus. It also adds support for liblouis 3.27.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouisutdml/milestone/8?closed=1).

## New features

-   Add support for liblouis 3.27
-   Major upgrade to Nemeth Math handling thanks to Attila Hammer and Norbert Markus.
    -   The order of some character definitions and include statements have been changed so that the now updated Nemeth Braille dot patterns of mathematical symbols take precedence over the literary Braille patterns for the same Unicode characters. E.g. the horizontal ellipsis, and division sign are among those affected.
    -   Now the caret symbol appears with its intended Nemeth Braille dot pattern.
    -   The colon and semicolon as mathematical symbols appear with a punctuation prefix (dots 456-25 and dots 456-23) and a space is added after them. The space may be skipped depending on the context.
    -   A number of rules have been disabled to give way to the now updated Nemeth Braille dot patterns of mathematical symbols in `nemethdefs.cti`.
    -   The list of function names and abbreviations has been extended with items (e.g. two-letter abbreviations of function names and their combinations).
    -   Indication of subscripts and superscripts has been improved and consolidated. E.g., numeric subscripts are now either indicated or not indicated by a subscript prefix as required. However, multilevel subscripts and superscripts are not (yet) covered as it requires keeping track of the current level.
    -   A number sign is inserted before the first digit following a dot 5 or dots 56 (also in combinations with a minus sign) if that prefix is the first cell in the block or after a space.
    -   Now a single digit or letter with overbar is handled correctly. Previously a two-step rule had the side-effect of deleting dot 5 from dots 5-13-156 even when this sequence appeared as part of signs of comparison (less than or equal to, etc). Now those signs of comparison, including those for sets are correctly displayed. The solution does not yet cover letters of another alphabet or type form. Such instances are displayed using the uncontracted five-step Nemeth rule.
    -   Support for the contracted indication of a horizontal bar under a single digit or letter is added (dots 146-156 following the digit or letter) according to a 2013 BANA update to Nemeth Rule XIV. The solution does not yet cover letters of another alphabet or typeform. Such instances are displayed using the uncontracted five-step Nemeth rule.
    -   Now a Nemeth rule for repeating decimals is observed. When a series of digits have each a dot above in print to mark a repeating period, it is sufficient to show a single dot in Braille. The modification block, however, applies to all the digits affected.
    -   The decimal point now appears correctly (dots 46) even when preceding or following a dot five which indicates the beginning of a modification.
    -   A space is inserted between the Braille representation of `{}` for the empty set.
    -   The space is removed from between a grouping symbol and a horizontal ellipsis in various combinations.
    -   The space between a function name/abbreviation and a superscript belonging to it is removed. In case of a log and colog, a subscript is expected. Note that the current solution is far from perfect as processing function names and their surroundings could better be done by an algorithm.
    -   Any series of Multiple spaces in the math blocks are reduced to a single space at that place.

## Other

-   Fix a memory leak thanks to Samuel Thibault
-   Add missing declarations to louisutdml.h, thanks to Peter Fordham for the report
-   Update gnulib
