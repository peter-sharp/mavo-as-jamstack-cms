Seeing if [mavo](https://mavo.io/) could make a good jekyll cms
<ul mv-list property="item">
{% for item in site.data.cmsData.item %}
<li mv-list-item>{{ item }}</li>
{% endfor %}
</ul>

[Demo](https://peter-sharp.github.io/mavo-as-jekyll-cms/)
