---
layout: page
section: integrations
title: "Criteo"
order: 1
---

In this section you will learn:
* How to connect or disable Criteo on your site.
* How to check the correctness of the integration settings.
* How to configure the sending of custom segments.

Criteo is a dynamic retargeting system. SegmentStream allows you to send data about the behavior of your users to [Criteo](https://criteo.com/).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#requiredEventsAndVariables">Required events and variables</a></li>
  <li><a href="#criteoAccountID">Criteo Account ID</a></li>
  <li><a href="#productFeed">Product feed has grouped products</a></li>
  <li><a href="#userSegment">User segment</a></li>
  <li><a href="#customDeduplication">Use custom deduplication</a></li>
  <li><a href="#multipleCurrencies">Website has multiple currencies</a></li>
  <li><a href="#correctnessIntegrationSetup">Checking the correctness of the integration setup</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
With the help of SegmentStream, you can fully integrate Criteo with your site: events, hashed users' email addresses, deduplication and so on. <br />
[Criteo integration guide](https://support.criteo.com/hc/en-us/sections/200972171-%D0%9A%D0%B0%D0%BA-%D0%B2%D0%BD%D0%B5%D0%B4%D1%80%D0%B8%D1%82%D1%8C-Criteo-OneTag) <br/><br/>
To configure integration with Criteo:
1. Log in on the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Click on the "Integration" tab and click on the block with the Criteo logo.
3. In the panel that opens, configure the integration.
![](/img/integrations.criteo.settings.png)
<br />
You can read more details about the settings below.

### <a name="requiredEventsAndVariables"></a>Required events and variables
------
For the correct operation of the integration of your site with Criteo - you must configure the filling of certain events in the `digitalData.events` array. The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Viewed Cart](/events/searched-products)
* [Completed Transaction](/events/completed-transaction)
* [Subscribed](/events/subscribed)

It is also necessary to configure the filling of certain variables of the `digitalData` object. A list of some variables is given below:
* `page.type`
* `product` - the product object occurs in several places of the `digitalData` object: directly in `digitalData.product`, in the `items` and `lineItems` arrays of the `listing`, `cart` and `transaction` objects.
* `listing`, `cart`, `transaction` objects
* `user.email` or `user.emailHash` variables
* and others

> In the case of simultaneous filling of the variables `user.email` and` user.emailHash`, **SegmentStream** will send the value of the `user.emailHash` variable to Criteo. In the absence of `user.emailHash`, **SegmentStream** itself will hash the value of the `user.email` variable and send it to Criteo.

### <a name="criteoAccountID"></a>Criteo Account ID
------
The ID of your account can be checked with your Criteo account manager. As a rule, this is a five-digit number.

### <a name="productFeed"></a>Product feed has grouped products
------
Criteo receives information about products placed on the site through an XML feed. With a certain interval, the Criteo robot downloads a feed from your server. This feed contains information about all products on the site.

[Learn more about the feed format.](https://support.google.com/merchants/answer/7052112)

For correct integration, Criteo should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match what it sees in the incoming events with the XML feed.

[More about product groups](https://support.google.com/merchants/answer/6324507)

-If you use grouping of goods using the `item_group_id` xml-feed parameter - be sure to activate this setting.
  >In this case, the product id from your XML feed must match the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

 -If you do NOT use grouping of goods using the `item_group_id` xml-feed parameter - do not activate this setting.
  >In this case, the product id from your XML feed must match the `product.id` of the `digitalData` object.

### <a name="userSegment"></a>User segment
------
Criteo allows you to send user segments with each event. For example, if you want to completely disable retargeting for a specific segment of users - you need to create a numeric variable in the `digitalData` object and insert its address into the integration configuration field.
For example, for all users on which you want to disable retargeting, you pass the value 1 to the variable `digitalData.user.segment.criteoSegment`. For the rest, 0.
For more information about creating variables, see [variables](/for-analyst/variables).

### <a name="customDeduplication"></a>Use custom deduplication
------
Deduplication is an attribution setting that can be sent to Criteo along with the order. By default, this feature is disabled. This means that Criteo uses its own attribution model to set up its own machine learning algorithms.
> The attribution model is the rule by which the value of the conversion/(order value) is redistributed between all sources of traffic that led the user to the site before buying. There is a large number of [attribution models](https://support.google.com/analytics/answer/1665189?hl=en), the most common of these is last non-direct click. When using this model of attribution - 100% of the conversion value will be assigned to the last indirect source of traffic. For example, if a user first came to the site from a search, then from Criteo, then typed the URL in the browser - the whole value of the order will be assigned to the source of "Criteo".

If you use "own deduplication", SegmentStream will remember the source (the value of the GET parameter utm_source). If this value is "criteo", the transaction will be attributed to the Criteo source.

[Criteo deduplication parameter guide](https://support.criteo.com/hc/en-us/articles/205573701-%D0%9F%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80-%D0%B4%D0%B5%D0%B4%D1%83%D0%BF%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8)

### <a name="multipleCurrencies"></a>Website has multiple currencies
------
Enable this feature if your website uses multiple currencies.

### <a name="correctnessIntegrationSetup"></a>Checking the correctness of the integration setup
------
After configuring the integration in the SegmentStream interface, but before PUBLICATION - go to the site in test_mode, [go through the conversion funnel and check for errors](/for-analyst/integrations#eventVariables).
If there are no errors - publish the current version.
