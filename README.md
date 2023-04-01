Seeing if [mavo](https://mavo.io/) could make a good jekyll cms
<ul>
{% for item in site.data.cmsData.item %}
<li property="item" mv-multiple>{{ item }}</li>
{% endfor %}
</ul>

[Demo](https://peter-sharp.github.io/mavo-as-jekyll-cms/)
