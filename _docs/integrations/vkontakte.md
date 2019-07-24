---
layout: page
section: integrations
title: "Vkontakte"
order: 1
---

In this section you will learn:
* How to setup a Vkontakte pixel to your site.
* How to setup retargeting in Vkontakte.
* How to configure the transfer of events to Vkontakte.
* How to setup dynamic retargeting Vkontakte

Vkontakte is a social network with a small set of advertising tools. Vkontakte is able to create audiences based on site events and show ads to these audiences. In November 2017 Vkontakte added dynamic product remarketing. SegmentStream allows you to send data about the behavior of your users to [Vkontakte](https://vk.com/dev/manuals).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#vkontaktePixelID">Vkontakte pixel ID</a></li>
  <li><a href="#productFeed">Product feed has grouped products</a></li>
  <li><a href="#pricelistID">Default pricelist ID for dynamic retargeting</a></li>
  <li><a href="#customEvents">Custom events</a></li>
  <li><a href="#customEventsOld">Custom events (old version)</a></li>
</ul>


### <a name="introduction"></a>Introduction
------
Using SegmentStream, you can fully integrate Vkontakte with your site.

>Vkontakte supports 2 versions of the API, so in the SegmentStream interface there are settings for both new and old versions.

To configure the Vkontakte integration:
1. Log in on the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Click on the "Integration" tab and click on the block with the Vkontakte logo.
3. In the panel that opens, configure the integration.

![](/img/integrations.vkontakte.settings.png)

You can read more details about the settings below.

### <a name="vkontaktePixelID"></a>Vkontakte pixel ID
------
The Vkontakte SegmentStream integration allows you to connect any number of Pixel IDs you need.

You can find the Pixel ID in the section: Advertising > Targeting > Retargeting > Pixels.

![](/img/integrations.vkontakte.2.png)
![](/img/integrations.vkontakte.3.png)

Copy the ID and paste it into the "Vkontakte pixel ID" field of the integration settings window.

### <a name="productFeed"></a>Product feed has grouped products
------
Vkontakte receives information about products placed on the site through an XML feed. With a certain interval, the Vkontakte robot downloads a feed from your server. This feed contains information about all products on the site.

[Learn more about the feed format.](https://support.google.com/merchants/answer/7052112)

For correct integration, Vkontakte should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match what it sees in the incoming events with the XML feed.

[More about product groups](https://support.google.com/merchants/answer/6324507)

-If you use grouping of goods using the `item_group_id` xml-feed parameter - be sure to activate this setting.
  >In this case, the product id from your XML feed must match the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

 -If you do NOT use grouping of goods using the `item_group_id` xml-feed parameter - do not activate this setting.
  >In this case, the product id from your XML feed must match the `product.id` of the `digitalData` object.


### <a name="pricelistID"></a>Pricelist ID for dynamic retargeting
------

For the correct operation of the system, you must specify the pricelist identifier for each connected pixel. It can be set as a constant or dynamic parameter. Set the value as 1 if the prices on your site do not vary from region to region.
By setting a constant pricelist id for a pixel as in the screenshot below, the same value will always be passed regardless of region and other user attributes.
![](/img/integrations.vkontakte.constantPricelist.png)
If the prices depend on the region, there are several ways to pass the pricelist id:
1. It can be passed as a digitalData parameter, in the case that the value of `digitalData.website.regionId` corresponds to the needed pricelist ID, the following setting should be used.
![](/img/integrations.vkontakte.digitalDataPricelist.png)
2. It can be passed as an event parameter, if your event contains a parameter that is equal to the needed pricelist, the following setting should be used.
![](/img/integrations.vkontakte.eventPricelist.png)
3. If you don't have the pricelist identifier in the digitalData, but have data that can be translated into the necessary pricelist IDs, you need to setup an additional setting in the "Event variables" tab:
 - Write `priceListId` in the "variable name" field
 - Leave the "Event Name" field blank. This means that for any event a non-standard pricelist will be used
 - In the "Event handler" field write a function that, depending on the region of the user, returns the corresponding value of the pricelist.
 - Click "Save"

 ![](/img/integrations.vkontakte.customPricelist.png)

For the correct operation of the dynamic retargeting module, the following events are required:
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Added Product](/events/added-product)
* [Added Product to Wishlist](/events/added-product-to-wishlist)
* [Removed Product](/events/removed-product)
* [Removed Product from Wishlist](/events/removed-product-from-wishlist)
* [Started Order](/events/started-order) (optional)
* [Added Payment Info](/events/added-payment-info) (optional)
* [Completed Transaction](/events/completed-transaction)

>Dynamic retargeting only works with the new version of the pixel.

### <a name="customEvents"></a>Custom events
------
SegmentStream can pass any event to Vkontakte.
To set up the transmission of an event you have to fill in two fields:
1. Left - The name of the event that is pushed to the `digitalData.events` array, for example: [Registered](/events/registered)
2. Right - The name of the event that you want to see in the VKontakte interface.

You can add an unlimited number of events.

[Vkontakte guide on events](https://vk.com/support?act=home_ads&union_id=1602826263)

### <a name="customEventsOld"></a>Custom events (old version)
------
In the deprecated version of the API for each event in the VKontakte interface you need to create a special tracker.
To set up the transmission of data to those trackers you have to fill in two fields:
1. Left - The name of the event that is pushed to the `digitalData.events` array, for example: [Completed Transaction](/events/completed-transaction)
2. Right - URL of the tracker from the VKontakte interface.
