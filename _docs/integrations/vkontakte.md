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

Vkontakte is a social network with a small set of advertising tools. Vkontakte is able to create audiences based on site events and show ads to these audiences. In November 2017 Vkontakte added product dynamic remarketing. DigitalDataManager allows you to send data about the behavior of your users to [Vkontakte](https://vk.com/dev/manuals).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Vkontakte pixel ID</a></li>
  <li><a href="#2">Custom events</a></li>
  <li><a href="#3">Custom events (old version)</a></li>
  <li><a href="#4">Default pricelist ID for dynamic retargeting</a></li>
</ul>


### <a name="0"></a>Introduction
------
Using SegmentStream, you can fully integrate Vkontakte with your site.

>Vkontakte supports 2 versions of the API, so in the SegmentStream interface there are settings for both new and old versions.

To configure the OneSignal integration:
1. Log in on the [segmentstream.com](https://admin.ddmanager.ru/) website and go to the integration management panel
2. Click on the "Integration" tab and click on the block with the Vkontakte logo.
3. In the panel that opens, configure the integration.

![](/img/integrations.vkontakte.1.png)

You can read more details about the settings below.


### <a name="1"></a>Vkontakte pixel ID
------
You can find the Pixel ID in the section: Advertising > Targeting > Retargeting > Pixels.

![](/img/integrations.vkontakte.2.png)
![](/img/integrations.vkontakte.3.png)

Copy the ID and paste it into the "Vkontakte pixel ID" field of the integration settings window.

### <a name="2"></a>Custom events
------
SegmentStream can pass any event to Vkontakte.
To set up the transmission of an event you have to fill in two fields:
1. Left - The name of the event that is pushed to the `digitalData.events` array, for example: [Registered](/events/registered)
2. Right - The name of the event that you want to see in the VKontakte interface.

You can add an unlimited number of events.

[Vkontakte guide on events](https://vk.com/support?act=home_ads&union_id=1602826263)

### <a name="3"></a>Custom events (old version)
------
In the deprecated version of the API for each event in the VKontakte interface you need to create a special tracker.
To set up the transmission of data to those trackers you have to fill in two fields:
1. Left - The name of the event that is pushed to the `digitalData.events` array, for example: [Completed Transaction](/events/completed-transaction)
2. Right - URL of the tracker from the VKontakte interface.

### <a name="4"></a>Default pricelist ID for dynamic retargeting
------
For the correct operation of the dynamic retargeting module, the following events are required:
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Added Product](/events/added-product)
* [Added Product to Wishlist](/events/added-product-to-wishlist)
* [Removed Product](/events/removed-product)
* [Removed Product from Wishlist](/events/removed-product-from-wishlist)
* [Started Order](/events/started-order) (не обязательно)
* [Added Payment Info](/events/added-payment-info) (не обязательно)
* [Completed Transaction](/events/completed-transaction)

>Dynamic retargeting only works with the new version of the pixel.

For the correct operation of the system, you must specify the price-list identifier. Set the value as 1 if the prices on your site do not vary from region to region.

If the prices depend on the region, make an additional setting in the "Event variables" tab:
 - Write `priceListId` in the "variable name" field
 - Leave the "Event Name" field blank. This means that for any event a non-standard price list will be used
 - In the "Event handler" field write a function that, depending on the region of the user, returns the corresponding value of the price list.
 - Click "Save"

 ![](/img/integrations.vkontakte.4.png)
