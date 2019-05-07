---
title: Liblouisutdml Release 2.7.1
category: Liblouisutdml
---

This Liblouisutdml release adds a couple of new features and adds support for liblouis 3.9.

For a detailed list of all the changes refer to [the list of closed issues](https://github.com/liblouis/liblouisutdml/milestone/4?closed=1).

* Will be replaced with the ToC
{:toc}

## New features

-   Add support for liblouis 3.9
-   Add a Dockerfile
-   Add heading supports for opendocument files thanks to Samuel Thibault
-   Support automatic page numbering thanks to Samuel Thibault. LibreOffice documents do not provide explicit page numbers, but provides the pagebreak points, so liblouisutdml can simply count the page numbers.
-   Move math tables from Liblouis to Liblouisutdml thanks to Bert Frees

## Bug fixes

-   Use the prefixed `LOG_FOO` constants thanks to Christian Egli
-   Fix cross build from source issue

## Other

-   Convert the test suite to a standard Automake Parallel Test Harness thanks to Christian Egli
-   Set the default log level to `LOU_LOG_WARN`

