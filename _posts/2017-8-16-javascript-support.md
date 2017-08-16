---
title: Liblouis ported to Javascript
category: Liblouis
---

We are happy to announce that liblouis now officially supports
platforms targeting Javascript. This includes web browsers,
javascript-based servers and cross-platform applications.

The new Javascript port of liblouis is created by cross-compiling the
original liblouis implementation written in the programming language C
and wrapping it in javascript code that makes table loading from
remote sources, switching the liblouis release version and other tasks
that are more common in browser environments easy.

While you might not be a Javascript developer, there are other reasons
to be excited about this new way to use liblouis: A
[browser based interface](https://reiner-dolp.github.io/liblouis-web)
allows you to try or showcase liblouis versions without installation.
It also has a benefit for table authors and maintainers as regressions
in liblouis tables can now easily be detected. We already provide a
[tool that lets you create interactive test cases](https://reiner-dolp.github.io/liblouis-web)
that can be used to report bugs.

Javascript packages can either be cloned directly from the
[repository](https://github.com/liblouis/liblouis-js) or downloaded
through the package managers
[npm](https://www.npmjs.com/package/liblouis) and
[bower](https://bower.io/search/?q=liblouis).

You can install the latest official liblouis release using the
commands

``` console
$ npm install liblouis-build@latest
$ npm install liblouis
```

Or install the latest available development version of liblouis using
the commands

``` console
$ npm install liblouis/js-build
$ npm install liblouis
```

Several [usage examples](https://github.com/liblouis/liblouis-js#usage-examples) and
extended installation instructions can be found in the instructions
displayed at the [repository landing page](https://github.com/liblouis/liblouis-js).


