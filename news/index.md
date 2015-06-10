---
title: News
---

{% for post in site.posts limit:1 %}

## {{ post.title }}

{{ post.date | date_to_string}} - {{post.category}}

{{post.content}}

{% endfor %}

## Older news

<ul>
  {% for post in site.posts offset:1 %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
