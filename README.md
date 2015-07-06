# liblouis.github.io

The static website for liblouis, liblouisutdml and friends using Jekyll

## Features

All the content from the
[Google code site](https://code.google.com/p/liblouis) has been
migrated, i.e. the landing page, news, presentations and online
documentation. Downloads, issues and source link to the
[github site](https://github.com/liblouis/liblouis).

The layout uses [bootstrap3](http://getbootstrap.com/) and uses the
recommendations regarding accessibility.

All of the content is written using
[markdown](https://help.github.com/articles/markdown-basics/).

News items are automatically placed on the news page using the files
from the `_posts` directory.

Downloads are uploaded to the
[github site](https://github.com/liblouis/liblouis) and are be linked
from `downloads/index.md`

## Requirements

You need to install [Jekyll](http://jekyllrb.com/)

```
gem install jekyll
gem install RedCloth
```

## Usage

Build the site

```
cd /path/to/liblouis.github.io
jekyll serve
```

then open http://localhost:4000

