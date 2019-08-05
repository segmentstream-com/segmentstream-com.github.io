---
layout: page
section: integrations
title: "Dynamic Yield"
order: 1
---

In this section, you will learn:
* How to enable or disable Dynamic Yield on your site.
* How to send custom parameters and events to Dynamic Yield.

Dynamic Yield is a website personalization platform. SegmentStream allows you to send data about the behavior of your users to [Dynamic Yield](https://www.dynamicyield.com/).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#Requirements">Requirements</a></li>
  <li><a href="#requiredEventsAndVariables">Required events and variables</a></li>
  <li><a href="#AccountID">Account ID</a></li>
  <li><a href="#ProductFeed">Product feed has grouped products</a></li>
  <li><a href="#features">Features</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
With SegmentStream, you can fully integrate Dynamic Yield with your site.

To set up integration with Dynamic Yield:
1. Log in to [segmentstream.com](https://admin.segmentstream.com/)
2. Go to the "Integration" tab and click on the block with the Dynamic Yield logo.
3. In the panel that opens, configure the integration.
![](/img/integrations.dynamicyield.settings.png)


### <a name="Requirements"></a>Requirements
------
Before setting up the integration in the SegmentStream panel, you need to register in the connected system and ask your Dynamic Yield manager for your `Account ID` value.

### <a name="requiredEventsAndVariables"></a>Required events and variables
------
For the correct integration of your site with Dynamic Yield - you need to configure the transfer of events in the `digitalData.events` array.
The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Viewed Cart](/events/viewed-cart)
* [Added Product](/events/added-product)
* [Completed Transaction](/events/completed-transaction)
* [Logged In](/events/logged-in)
* [Registered](/events/registered)
* [Subscribed](/events/subscribed)

**Required variables**
* [page](/digitaldata/page)
* [product](/digitaldata/product)
* [listing](/digitaldata/listing)
* [cart](/digitaldata/cart)
* [transaction](/digitaldata/transaction)
* [user](/digitaldata/user)

### <a name="AccountID"></a>Account ID
------
This identifier is used when initially loading the Dynamic Yield API to your website.

### <a name="ProductFeed"></a>Product feed has grouped products
------
Dynamic Yield receives information about products placed on the site through a CSV, JSON, XML feed. With a certain interval, the Dynamic Yield robot downloads a feed from your server. This feed contains information about all products on the site.

[Learn more about the feed format.](https://dy.dev/docs/uploading-and-updating-your-feed)

For correct integration, Dynamic Yield should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match the product identifiers from the incoming events with those in the feed.

-If you use grouping of goods using the `group_id` feed parameter - be sure to activate this setting.
  >In this case, the product id from your feed must match the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

 -If you do NOT use grouping of goods using the `group_id` feed parameter - do not activate this setting.
  >In this case, the product id from your feed must match the `product.id` of the `digitalData` object.

### <a name="features"></a>Features
------
Once the integration is set up, the following features of the Dynamic Yield integration will be activated:

**Implement Context API**
User behaviour data such as the type of page viewed and the contents of the users shopping cart will be sent to Dynamic Yield once a page is loaded.

**Dynamic Yield Script**
Dynamic Yield API scripts are loaded asynchronously. The scripts collect all user activity and render experiments.

>**Please note!** Dynamic Yield recommends that the scripts are loaded synchronously inside the website code, without the use of an external script. SegmentStream will automaticaty detect if you follow those instructions, and the two previously described features will not be activated by the SDK. This will not affect the operation of the 'Events' feature.

**Events**
This feature enables optimization for conversion and purchase events, as well as omnichannel events.
SegmentStream currently supports the following Dynamic Yield events:
* Add to Cart
* Purchase
* Login
* Signup
* Newsletter Subscription

