---
layout: page
section: digitaldata
title: "wishlist"
order: 1
---

The `digitalData.wishlist` array contains `product` objects, which describe the goods added by the visitor to their "favorites" list.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
</ul>


### <a name="introduction"></a>Introduction
------
The `digitalData.wishlist` array must be declared and filled in the source code of the page.

Example:
```javascript
window.digitalData = {
  ...,
  wishlist = [
    { /*product object*/ },
    { /*product object*/ },
    ...
  ]
  ...
}
```
[Detailed description of the `product` object](/digitaldata/product)

>The wishlist array is not used by any integrations, but data about products in the wishlist can be used for advanced segmentation and personalization.
