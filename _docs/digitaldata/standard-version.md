---
layout: page
section: digitaldata
title: "version"
date: 2017-06-05 12:00:00
order: 1
---

The variable `digitalData.version` contains the version of the standard. The last stable version is `1.1.2`
- Type of data - string.
- Should be present on every page
- Example:
```JavaScript
  window.digitalData = {
    version: '1.1.2',
    ...
  }
```


### Version history
------
**1.1.2 - January 2017**
- added digitalData.changes method

**1.1.1 - July 2016**

- added digitalData.listing.category field
- deleted digitalData.product.subcategory field
- digitalData.product.category field is now an array
- added digitalData.listing.listId field
- In the Clicked Product semantic event, you must use listId instead of listName
- In the Viewed Product semantic event, you must use listId instead of listName

**1.1.0 - June 2016**
- added digitalData.website object
- added digitalData.website.regionId field
- digitalData.page.region moved to digitalData.website.region
- digitalData.page.siteType moved t0 digitalData.website.type
- digitalData.page.environment moved to digitalData.website.environment
- digitalData.user.language moved to digitalData.website.language
- listName deleted from the Product object.
- position deleted from the Product object.
- digitalData.page.categoryId moved to digitalData.listing.categoryId
- in the semantic event "Clicked Product", the fields listName and position are removed from the Product object.
- in the semantic event "Viewed Product", the fields listName and position are removed from the Product object.
- in the "Viewed Campaign" semantic event, tracking of multiple campaigns is performed using the campaigns field, instead of campaign.
- in the "Viewed Product" semantic event, tracking of multiple products is performed using the listItems field, instead of product.
- added the "Viewed Cart" semantic event

**1.0.0 - December 2015**
- Release of the first stable version of the digitalData standard.