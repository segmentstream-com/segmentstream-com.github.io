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
  <li><a href="#1">What to do if the list of recommendations is formed by a third-party system?</a></li>
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
    { //this is a listing object
      listName: "Last viewed products",
      listId: "recentlyViewed",
      items: [Product, Product, Product, ...]
    },
    { //this is a listing object
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

### <a name="1"></a>What to do if the list of recommendations is formed by a third-party system?
------
There are services that generate a list of recommendations on their side. After loading the page of your site, the service integrates the generated list into the code of your site. However, for the user, the integration list is loaded a little later than the main content of the page.

In this case, the connected system itself tracks impressions and clicks of the product blocks. To send information about impressions and clicks to Google Analytics, you need the third-party system to push events to the `digitalData.events` array. To correctly track events in Google Analytics send the [third-party system developer guide](/for-developer/partners) link to the manager of the connected system.
