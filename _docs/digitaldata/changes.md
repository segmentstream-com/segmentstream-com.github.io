---
layout: page
section: digitaldata
title: "changes"
date: 2018-04-13 17:00:00
order: 1
---

It is often necessary to change the contents of the `digitalData` variable without reloading the page.
For example: when subscribing to a newsletter, adding a product to the cart, logging in, registering, and many other events. In this case, you should use the construct in the form of `digitalData.changes.push (...)`. SegmentStream "listens" to the change of the array `digitalData.changes` and automatically updates the corresponding elements of the `digitalData` object.

> We strongly do not recommend changing the contents of `digitalData` by directly overriding elements in the form of `digitalData.user.name` = 'Ivan'.

### There are 2 ways to use the changes method:
------
<ul class="page-navigation">
  <li><a href="#0">Changing a specific variable</a></li>
  <li><a href="#1">Changing the entire `digitalData` object</a></li>
</ul>

### <a name="0"></a>Changing a specific variable
If you need to dynamically change the value of one variable, a special array of 3 elements must be added to the array `digitalData.changes`:
 - The name of the `digitalData` variable the value of which must be dynamically changed
 - An object, a String, or a Number that will replace the value of a variable
 - Name of the source of the data change

**Example**: The visitor of the site subscribes to the newsletter. The information that the visitor has successfully subscribed is displayed without reloading the page. At this point, you need to change the value of the variable `digitalData.user.isSubscribed` from false to true.

##### State of the digitalData before the subscription event:
```javascript
digitalData = {
  ...
  user: {
    ...
    isSubscribed: false,
    ...
  },
  ...
}
```

##### The sequence of adding the event and changes in `digitalData`:
```javascript
//After the server responds, confirming a successful subscription - we add the event to the array digitalData.events
digitalData.events.push({
  category: 'Email',
  name: 'Subscribed',
  user: {...}
});

//After adding the event - add a change to the digitalData.changes array
digitalData.changes.push(['user.isSubscribed', true, 'Source Code']);
```


##### State of the digitalData after the subscription event:
```javascript
digitalData = {
  ...
  user: {
    ...
    isSubscribed: true,
    ...
  },
  ...
}
```

### <a name="1"></a>Changing the entire `digitalData` object
This approach should be used for sites that are fully built on AJAX or Single-page (SP) sites.

Single-page sites are a bit different from the usual sites. When clicking on a link, the SP does not load a new page. Instead, the visitor's browser sends an asynchronous request (AJAX-request) to the server. The server returns new content. With this content, the visitor's browser dynamically replaces or complements the content that was previously on the site. As a result, the visitor seems to have downloaded a new page of the site.

In order for SegmentStream to correctly process dynamic content changes, you need to dynamically update the data layer of digitalData. The algorithm is described below:

- The user clicks on a link, the request goes to the server
- The server responds with the content of the new page, as well as a new copy of the digitalData object
- After the content and URL of the site change, you need to call the methods in the following sequence: `digitalData.changes.push({...})` and `digitalData.events.push({name: 'Viewed Page'})`

> Important. A complete change of the object `digitalData` on single-page sites should always be accompanied by the event "Viewed Page". This event helps the SegmentStream system to determine the moment of the "virtual load" of a new page.

**Example**: A visitor on a single-page site navigates through a link from the catalog to a product card. The content of the site is dynamically updated.

##### State of digitalData before moving through a link from the catalog:
```javascript
digitalData = {
  version: '1.1.2', // wont change
  website: {...},   // wont change
  page: {...},      // will change
  listing: {...},   // will change. The digitalData.listing object should not be present on the product page
  user: {...},      // wont change
  cart: {...},      // wont change
  changes: [...],   // will change. A new digitalData snapshot will be added to the array
  events: [...]     // will chagne. A 'Viewed Page' event will be added to the array
}
```

##### The sequence of adding the event of loading a new page and changes to digitalData:
```javascript
//Add a change to the array digitalData.changes
digitalData.changes.push({
  product: {...},     //describes the product loaded
  page: {...}         //describes the "loaded" page
});

//After dynamically changing the digitalData object, the 'Viewed Page' event must be added
digitalData.events.push({
  name: 'Viewed Page',
});
```
> Note the sequence: first change the object, then add the event "Viewed Page"

##### State of digitalData after loading the product page:
```javascript
digitalData = {
  version: '1.1.2', // didnt change
  website: {...},   // didnt change
  page: {...},      // changed with the object pushed to changes
  product: {...},   // added.
  user: {...},      // didnt change
  cart: {...},      // didnt change
  changes: [...],   // changed. Added the changed object
  events: [...]     // changed. Added the "Viewed Page" event
}
```

> Important. If the keys "version", "user", "context", "cart", "website" are not used in the new object, the contents of the corresponding variables will remain unchanged.
