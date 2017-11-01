---
title: Docker images
---

We are happy to announce that there are now official docker images for
both liblouis and liblouisutdml. These images are built on every
commit and can act as a sort of a nightly snapshot if you will. This
opens up a number of possibilities and use cases. All you need to do
is to [install docker](https://www.docker.com/get-docker) and off you
go.

Once you have docker installed you can simply start any of the
liblouis tools with `docker run`. To run `lou_translate` for example
you'd type the following:

``` console
$ docker run --rm -it liblouis/liblouis lou_translate en-ueb-g2.ctb
This is a test
,? is a te/
```

The liblouis docker image supports `lou_checkyaml` and has the Python
bindings installed, so you could run a local YAML test to check your
local table.

``` console
$ ls
mytest.utb  mytest.yaml
$ docker run --rm -v $(pwd):/usr/src/ -i liblouis/liblouis lou_checkyaml /usr/src/mytest.yaml
SUCCESS (1 tests, 0 failures)
```
where `mytest.yaml` could look as follows:

``` yaml
table: [unicode.dis, mytest.utb]
tests:
  -
    - abcdefg
    - ⠁⠃⠉⠙⠑⠋⠛
```

Another interesting use case for this is to run `file2brl`:
``` console
$ docker run --rm -i liblouis/liblouisutdml file2brl < input.xml > output.xml
```

Please try this out and give us feedback via the mailing list.

