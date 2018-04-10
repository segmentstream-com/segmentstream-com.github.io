---
layout: page
section: developer
title: "digitalData object"
date: 2017-06-05 12:00:00
order: 2
---

In this section you will learn:
* How to install the digitalData data layer on your website.
* How to correctly fill in all the variables inside the digitalData object.

digitalData is a global JavaScript object. It must be declared as high as possible in the source code of the site, [before connecting the DigitalDataManager library](/for-developer/snippet). This object should be present on every page of the site.

> Declare the `window.digitalData` object the first time the page loads. Do not try to build a system in which the object is created after an AJAX request. This decision will negatively affect your marketing infrastructure and make it unmanageable.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">How to fill the object</a></li>
</ul>

### <a name="0"></a>Introduction
------
Let's analyze the structure of the object in more detail. The object consists of other objects and arrays. All these objects and arrays must be filled with information in accordance with the standard described in this documentation.

In general, the `digitalData` object looks like this:

```javascript
window.digitalData = {
  version: '1.1.2',
  website: {...},         //Global information about the website
  page: {...},            //Data about the current page
  user: {...},            //Data about the visitor or authorized user
  product: {...},         //Data about the product currenly viewed
  wishlist: {...},        //Data about the users wishlist
  cart: {...},            //State of the users cart
  transaction: {...},     //Data about the completed transaction
  listing: {...},         //List of products viewed on the page
  recommendation: [...],  //List of recommended products viewed on the page
  campaigns: [...],       //List of internal promotion campaigns
  changes: [...],         //Changes that occured in the digitalData after it's initialization
  events: [...]           //Events that fired on the current page
}
```

The detailed composition of each variable is discussed below.

### <a name="1"></a>How to fill the object
------
digitalData can be represented as a structured description of the page that the visitor sees on the screen of his monitor. The composition of the digitalData object depends on the content of the page. Here are some examples:
 - The user loaded a product page and sees detailed information about the product: image, name, price, brand, etc. All this information should be contained in the object `digitalData.product`
 - The user loaded the main page, sees a list of recommended products and several banners. Information about the recommended products should be contained in the array `digitalData.recommendation`, and information about the banners in the array `digitalData.campaigns`.
 - The basket icon with the number of items is visible on each page of the online store. This means that the object `digitalData.cart` must be filled on every page of the site.

Also, digitalData contains information about the user that is visiting the website. This information may or may not be displayed explicitly, but should be present in the object, for example: whether the user subscribed to the email newletter, whether the user made purchases earlier, the user's name, etc.

As you can see from the examples above, some variables must be filled on each page, others - only on certain types of pages. If the content of the page changes without reloading the page - the content of the object `digitalData` also needs to be changed.

Next, we'll look in more detail at the standard for filling each variable and examine examples of filling an object for all typical pages of an online store.

Detailed object descriptions:
 - [version](/digitaldata/standard-version)
 - [website](/digitaldata/website)
 - [page](/digitaldata/page)
 - [product](/digitaldata/product)
 - [wishlist](/digitaldata/wishlist)
 - [cart](/digitaldata/cart)
 - [transaction](/digitaldata/transaction)
 - [listing](/digitaldata/listing)
 - [recommendation](/digitaldata/recommendation)
 - [campaigns](/digitaldata/campaigns)
 - [context](/digitaldata/context)
 - [changes](/digitaldata/#changes)
 - [events](/digitaldata/events)

More detailed description of the composition of digitalData for **typical pages of an online store**:
 - [Main page](/ecommerce/main-page)
 - [Product listing](/ecommerce/listing)
 - [Search results](/ecommerce/search)
 - [Product page](/ecommerce/product)
 - [Cart](/ecommerce/cart)
 - [Checkout pages](/ecommerce/checkout)
 - [Thank you page](/ecommerce/confirmation)
 - [Content page](/ecommerce/content)

 >If your website is not an online store, you can still use the DigitalDataManager. We will help you prepare a data schema (the structure of the digitalData object) specifically for your project.