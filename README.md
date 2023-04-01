# {{ cmsData.title | default: "Mavo As Jamstack CMS" }}

Seeing if [mavo](https://mavo.io/) could make a good Jamstack cms.

With the [htmlimport plugin](https://plugins.mavo.io/plugin/importhtml) and this hack to prevent mv-list showing duplicate items:

```CSS

[‍mv-list] > li {
    display: none;
}

[‍mv-list] > [‍mv-list-item] {
    display: list-item;
}

```

and some additional hackery around the [tinymce editor plugin](https://plugins.mavo.io/plugin/tinymce)

```html

<div property="content" class="tinymce"></div>
<div original-content>
{‍{ cmsData.content }‍}
</div>

```
```css
[‍mv-mode] + [‍original-content] {
    display: none;
}
```

we are pretty much there.

<div property="content" class="tinymce"></div>
<div original-content>
{{ cmsData.content }}
</div>

<ul>
{% for item in cmsData.item %}
<li>{{ item }}</li>
{% endfor %}
</ul>

[Demo](https://peter-sharp.github.io/mavo-as-jekyll-cms/)
