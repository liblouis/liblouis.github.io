---
title: "Improved security for liblouis"
date: 2023-08-18
layout: post
category:
- Liblouis
tags:
- security
---

Fuzzing or fuzz testing is an automated software testing technique
that involves providing invalid, unexpected, or random data as inputs
to a computer program. The program is then monitored for exceptions
such as crashes, failing built-in code assertions, or potential memory
leaks (see [Wikipedia article](https://en.wikipedia.org/wiki/Fuzzing)
on Fuzzing).

Automated fuzz tests have been set up for liblouis for a few years now
and these tests have uncovered quite a few bugs, even security
critical ones.

In June [Adalogics](https://adalogics.com/), a well known consultancy
for software security, has worked on some major improvements to the
existing test coverage. The report on their work and results in a
[blog post](https://adalogics.com/blog/liblouis-continous-fuzzing).

The work has already paid of, quite a steady stream of security
related issues trickles in through the automated fuzzing. Now all that
is left to do is to fix these issues.

Want to help with this? Contact us on the #liblouis channel at
irc.libera.chat or the matrix channel at
https://matrix.to/#/#liblouis:matrix.org

