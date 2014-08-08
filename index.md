---
layout: front
title: Liblouis*
intro: The Liblouis software suite provides an open-source braille translator, back-translator and formatter for a large number of languages and braille codes. It is a set of libraries designed for use in any of a number of applications, both free and commercial. It is written in C so that it does not require a runtime environment and hence can be used in applications written in high-level languages such as Java and Python.
---

{::options parse_block_html="true" /}

<div class="col-md-12">

## News

{% for post in site.posts limit:1 %}
{{ post.date | date_to_string}} [{{ post.title }}]({{ post.url }})
{% endfor %}

</div>

<div class="col-md-6">

## Braille translator and back-translator

**Liblouis** is an open-source braille translator and back-translator named in honor of [Louis Braille](http://en.wikipedia.org/wiki/Louis_Braille). It features support for computer and literary braille, supports contracted and uncontracted translation for [many languages](https://github.com/liblouis/liblouis/tree/master/tables) and has support for hyphenation. New languages can easily be added through tables that support a rule- or dictionary based approach. Tools for testing and debugging tables are also included. Liblouis also supports math braille (Nemeth and Marburg).

Liblouis has features to support screen-reading programs. This has led to its use in two open-source screenreaders, [NVDA](http://www.nvda-project.org/) and [Orca](http://live.gnome.org/Orca). It is also used in some commercial assistive technology applications for example by [ViewPlus](http://www.viewplus.com).

Liblouis is based on the translation routines in the [BRLTTY](http://mielke.cc/brltty/) screenreader for Linux. It has, however, gone far beyond these routines. In Linux and Mac OSX it is a shared library, and in Windows it is a DLL.

Liblouis is free software licensed under the [GNU Lesser GPL](https://www.gnu.org/licenses/lgpl.html).

* Read our [publications & presentation slides](presentations)
* Consult the [documentation](documentation)
* Subscribe to our [mailing list])http://www.freelists.org/list/liblouis-liblouisxml) or chat with us on [irc](irc://irc.oftc.net/liblouis) (irc://irc.oftc.net/liblouis).

</div>

<div class="col-md-6">

## Braille formatter

**Liblouisutdml** is an open-source braille formatter. The formatting can be configured via a style sheet. By incorporating Liblouis it provides the capability of translating any XML or plain text file into properly transcribed, embosser-ready braille. This includes translation into grade two, mathematical codes, etc.

Liblouisutdml is free software licensed under the [GNU Lesser GPL](https://www.gnu.org/licenses/lgpl.html).

## Braille production

There are two braille production systems based on Liblouis and Liblouisutdml.

[BrailleBlaster](http://www.brailleblaster.org), a joint project between ViewPlus Technologies, American Printing House for the Blind and Abilitiessoft, is aimed at hands-on production where every detail of the Braille is controlled via a graphical user interface.

[DAISY Pipeline](http://www.daisy.org/pipeline2), backed by the DAISY Consortium, is aimed at automated, hands-off, high-volume production on the server.

</div>

