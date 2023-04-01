Seeing if [mavo](https://mavo.io/) could make a good jekyll cms
<ul mv-list>
{% for item in site.data.cmsData.item %}
<li property="item" mv-list-item>{{ item }}</li>
{% endfor %}
</ul>

[Demo](https://peter-sharp.github.io/mavo-as-jekyll-cms/)
