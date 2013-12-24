liblouis-website
================

A static website for liblouis using Jekyll

Features
--------

All the content from the [Google code site][google] has been migrated,
i.e. the landing page, news, presentations, online documentation, and
downloads. Issues and source still link to the [old site][google].

[google]: https://code.google.com/p/liblouis/

The layout uses [bootstrap3](http://getbootstrap.com/) and uses the
recommendations regarding accessibility.

Most of the content is written using
[textile](http://redcloth.org/textile/).

News items are automatically placed on the news page using the files
from the `_posts` directory.

Downloads can be placed in the `downloads` directory and can be linked
from `downloads/index.textile`

Requirements
------------

You need to install [Jekyll](http://jekyllrb.com/)

```
gem install jekyll
gem install RedCloth
```

Usage
-----

Build the site

```
cd /path/to/liblouis-website
jekyll serve
```

then browse http://localhost:4000

