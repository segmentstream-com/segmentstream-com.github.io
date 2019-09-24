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
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#requiredEvents">Required events</a></li>
  <li><a href="#facebookPixelID">Facebook Pixel ID</a></li>
  <li><a href="#productFeed">Product feed has grouped products</a></li>
  <li><a href="#costOfGoods">Pass the cost of goods to the event value parameter</a></li>
  <li><a href="#customEvents">Custom events</a></li>
  <li><a href="#eventParameters">Event parameters</a></li>
  <li><a href="#checkingIntegrationCorrectness">Checking the correctness of the integration setup</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
Using SegmentStream, you can fully integrate Facebook with your site: Including standard and custom events

[Facebook integration guide](https://developers.facebook.com/docs/facebook-pixel/api-reference)

To configure the Facebook integration:
1. Log in to the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Go to the "Integration" tab and click on the block with the Facebook logo.
3. In the opened panel - configure the integration.
![](/img/integrations.facebook.settings.png)

You can read more details about the settings below.

### <a name="requiredEvents"></a>Required events
------
For the correct integration of your site with Facebook - you need to configure the transfer of 3 events in the `digitalData.events` array. The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Completed Transaction](/events/completed-transaction)

### <a name="facebookPixelID"></a>Facebook Pixel ID
------
You can find the Facebook Pixel ID in the facebook section: Managing Advertising > All Tools > Pixels.

![](/img/integrations.facebook.2.png)

Copy the ID and paste it into the "Pixel Facebook ID" field of the integration settings window.

>Multiple Facebook pixels can be connected by entering their IDs separated by a coma. For example, in the screenshot below the pixels '111' and '222' are connected.
![](/img/integrations.facebook.multipixel.png)

### <a name="productFeed"></a>Product feed has grouped products
------
Facebook receives information about products placed on the site through an XML feed. With a certain interval, the Facebook robot downloads a feed from your server. This feed contains information about all products on the site.

[Learn more about the feed format.](https://support.google.com/merchants/answer/7052112)

For correct integration, Facebook should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match what it sees in the incoming events with the XML feed.

[More about product groups](https://support.google.com/merchants/answer/6324507)

-If you use grouping of goods using the `item_group_id` xml-feed parameter - be sure to activate this setting.
  >In this case, the product id from your XML feed must match the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

 -If you do NOT use grouping of goods using the `item_group_id` xml-feed parameter - do not activate this setting.
  >In this case, the product id from your XML feed must match the `product.id` of the `digitalData` object.

### <a name="costOfGoods"></a>Pass the cost of goods to the event value parameter
------
By default, along with the `Viewed Product Detail` event, SegmentStream does not transfer the price of the item in the `value` parameter. In the Facebook documentation it is written that the value of an event should be passed to the value parameter and not the value of an item.
If you want to transfer the value of the goods to the `value` variable - enable this setting. The currency from the variable `product.currency` will also automatically be transferred.

### <a name="customEvents"></a>Custom events
------
SegmentStream can send custom events to Facebook along with standard events.
To configure the transfer of custom events, fill in 2 fields:
1. Left - Name the event that is pushed to the `digitalData.events` array, for example: [Registered](/events/registered)
2. Right - The name of the event that you want to see in the Facebook interface.

> You can choose the name of the event in Facebook at your discretion, but we recommend that you adhere to Facebook's naming rules. Facebook uses the CamelCase format.

You can add an unlimited number of custom events

### <a name="eventParameters"></a>Event parameters
------
SegmentStream can send custom parameters along with events, which can be used to define any custom audiences you create, as it is described in the Facebook [documentation](https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#parameters).

To configure the transfer of event parameters, fill in 3 fields:
1. Left - Enter the name of the parameter that you want to pass data to. Should not contain any spaces.
2. Center - Specify the data source:
 - **DigitalData**. Any variable that is present in the digitalData object
 - **Event**. Any variable of any event that is pushed to the `digitalData.events` array
3. Right - Specify the name of the variable in the right field

Below are two examples of usage:
- If you want to pass a `promotion` parameter to Facebook that gets its value from the `sharePromotion` variable of an event:
![](/img/integrations.facebook.exampleEventParameter.png)
- If you want to pass a `websiteDesign` parameter to Facebook that gets its value from the `website.design` variable of the digitalData object:
![](/img/integrations.facebook.exampleDigitalDataParameter.png)

You can add an unlimited number of event parameters, and they will be passed to all events sent to Facebook.

### <a name="checkingIntegrationCorrectness"></a>Checking the correctness of the integration setup
------
After configuring the integration in the SegmentStream interface, but before PUBLICATION - go to the site in test_mode, [go through the conversion funnel and check for errors](/for-analyst/integrations#2).
If there are no errors - publish the current version.
