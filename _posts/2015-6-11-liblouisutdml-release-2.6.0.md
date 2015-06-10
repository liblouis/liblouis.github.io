---
title: Liblouisutdml Release 2.6.0
category: Liblouisutdml
---

This is the first official Liblouisutdml release in a long time. Many
bug fixes and stability improvements have gone into it. There are a
couple of new features like end note functionality and boxlines for
example. Also there is an extensive test suite now and the
documentation has been vastly enhanced.

## New features

-   Added an extensive test suite which tests liblouisutml under various
    circumstances.
-   Add a configure option to disable the Java bindings.
-   Added Java bindings for logging callback API in liblouis.
-   Add end note functionality. Thanks to Paul Wood from Torch Trust

## Bug fixes

-   fixed a problem with duplicate semantics attributes
-   solve multiple brl nodes after math nodes
-   Improve the documentation on XPath expressions.
-   Fixed numerous problems in the build system.
-   Fixed the character used when UCS2 builds encounter characters above `u+ffff`

## Documentation updates

-   Document the end note functionality
-   Add an index for the default styles
-   Update the documentation appendix
-   Add the boxline style. Thanks to Michael Whapples.