---
layout: page
section: digitaldata
title: "recommendation"
order: 1
---

The array `digitalData.recommendation` contains `listing` objects  that describe the lists of recommended products located on the page

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Filling the array using a third-party recommendation system</a></li>
</ul>


### <a name="0"></a>Introduction
------
The `digitalData.recommendation` array must be declared and filled in the source code of the page or after the AJAX-load of the list of recommendations.

Example:
```javascript
window.digitalData = {
  ...,
  recommendation: [
    ...,
    { //это объект listing
      listName: "Last viewed products",
      listId: "recentlyViewed",
      items: [Product, Product, Product, ...]
    },
    { //это объект listing
      listName: "People also bought",
      listId: "crossSell",
      items: [Product, Product, Product, ...]
    },
    ...
  ],
  ...
}
```

>The `listing` object in the `digitalData.recommendation` array consists of only 3 variables.

[Detailed description of the `listing` object](/digitaldata/listing)

### <a name="1"></a>Filling the array using a third-party recommendation system
------
There are services that generate a list of recommendations on their side. After loading the page of your site, the service integrates the generated list into the code of your site. However, for the user, the integration list is loaded a little later than the main content of the page.

In this case, the `digitalData.recommendation` array should be filled by the developers of the recommendation system. For them, we prepared [a universal technical document in Google Docs format](https://docs.google.com/document/d/1WYBDLx6RLg6mPa_XBfeRmaPiiSzeI1Ion1AtnrZt6-E/edit?usp=sharing).
Pass this link to your recommendation system's manager.
