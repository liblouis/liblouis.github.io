---
title: "Emacs mode for editing liblouis tables"
date: 2022-05-10
layout: post
category: 
- Liblouis
tags: 
- Emacs
---

Good news for those of you who are editing liblouis tables using
[Emacs](https://www.gnu.org/software/emacs/). There is now a liblouis mode that helps by providing syntax
highlighting and other helper functionality.


## Installation

The mode can be installed from melpa using `M-x package-install`. It
automatically opens all files that contain the following magic line
(which most tables contain):

    # liblouis: <...>

`en-ueb-g1.ctb` for example contains

    # liblouis: Unified English Braille Code (Grade 1)


## Usage

Just open a liblouis table file with Emacs and you should have syntax
highlighting. Also `M-x compile` should run `lou_checktable` on the
currently opened liblouis table.

There is also support for parsing the output produced by the liblouis
test suite so that you can easily navigate to problems in the YAML
files when using `compilation-minor-mode` in the `test-suite.log`.


## History

The mode is not all that new. It was part of the liblouis distribution
for a long time. What is new is that it has been simplified, moved to
a [separate repository](https://github.com/liblouis/liblouis-mode) and added to [melpa, the Emacs Lisp Package
Archive](https://melpa.org/#/?q=liblouis) so that it could easily be installed from within Emacs.
