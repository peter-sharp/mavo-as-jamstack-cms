# mavo as a github jekyll cms
Seeing if [mavo](https://mavo.io/) could make a good jekyll cms
<ul>
  {% for item in site.data.cmsData.items %}
  <li property="item" mv-multiple>{{ item }}</li>
  {% endfor %}
</ul>
