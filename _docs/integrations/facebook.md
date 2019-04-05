---
layout: page
section: integrations
title: "Facebook"
order: 1
---

In this section you will learn:
* How to set a Facebook pixel on your site.
* How to turn on dynamic retargeting in Facebook.
* How to configure the transfer of custom events to Facebook.

Facebook is a social network with a large set of advertising tools. Facebook shows ads in the news feed of its users, including dynamic retargeting. SegmentStream allows you to send data about the behavior of your users to the [Facebook Pixel](https://developers.facebook.com/docs/facebook-pixel/api-reference#events).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Required events</a></li>
  <li><a href="#2">Facebook Pixel ID</a></li>
  <li><a href="#2_1">Product feed has grouped products</a></li>
  <li><a href="#2_2">Pass the cost of goods to the event value parameter</a></li>
  <li><a href="#3">Custom events</a></li>
  <li><a href="#4">Checking the correctness of the integration setup</a></li>
</ul>

### <a name="0"></a>Introduction
------
Using SegmentStream, you can fully integrate Facebook with your site: Including standard and custom events

[Facebook integration guide](https://developers.facebook.com/docs/facebook-pixel/api-reference)

To configure the Facebook integration:
1. Log in to the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Go to the "Integration" tab and click on the block with the Facebook logo.
3. In the opened panel - configure the integration.
![](/img/integrations.facebook.1.png)

You can read more details about the settings below.

### <a name="1"></a>Required events
------
For the correct integration of your site with Facebook - you need to configure the transfer of 3 events in the `digitalData.events` array. The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Completed Transaction](/events/completed-transaction)

### <a name="2"></a>Facebook Pixel ID
------
You can find the Facebook Pixel ID in the facebook section: Managing Advertising > All Tools > Pixels.

![](/img/integrations.facebook.2.png)

Copy the ID and paste it into the "Pixel Facebook ID" field of the integration settings window.

### <a name="2_1"></a>Product feed has grouped products
------
Facebook receives information about products placed on the site through an XML feed. With a certain interval, the Facebook robot downloads a feed from your server. This feed contains information about all products on the site.

[Learn more about the feed format.](https://support.google.com/merchants/answer/7052112)

For correct integration, Facebook should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match what it sees in the incoming events with the XML feed.

[More about product groups](https://support.google.com/merchants/answer/6324507)

-If you use grouping of goods using the `item_group_id` xml-feed parameter - be sure to activate this setting.
  >In this case, the product id from your XML feed must match the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

 -If you do NOT use grouping of goods using the `item_group_id` xml-feed parameter - do not activate this setting.
  >In this case, the product id from your XML feed must match the `product.id` of the `digitalData` object.

### <a name="2_2"></a>Pass the cost of goods to the event value parameter
------
By default, along with the `Viewed Product Detail` event, SegmentStream does not transfer the price of the item in the `value` parameter. In the Facebook documentation it is written that the value of an event should be passed to the value parameter and not the value of an item.
If you want to transfer the value of the goods to the `value` variable - enable this setting. The currency from the variable `product.currency` will also automatically be transferred.

### <a name="3"></a>Custom events
------
SegmentStream can send custom events to Facebook along with standard events.
To configure the transfer of custom events, fill in 2 fields:
1. Left - Name the event that is pushed to the `digitalData.events` array, for example: [Registered](/events/registered)
2. Right - The name of the event that you want to see in the Facebook interface.

> You can choose the name of the event in Facebook at your discretion, but we recommend that you adhere to Facebook's naming rules. Facebook uses the CamelCase format.

You can add an unlimited number of custom events

### <a name="5"></a>Checking the correctness of the integration setup
------
After configuring the integration in the SegmentStream interface, but before PUBLICATION - go to the site in test_mode, [go through the conversion funnel and check for errors](/for-analyst/integrations#2).
If there are no errors - publish the current version.

