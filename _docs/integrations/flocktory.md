---
layout: page
section: integrations
title: "Flocktory"
order: 1
---

Flocktory is a complete marketing platform. SegmentStream allows you to send data about the behavior of your users to [Flocktory](https://www.flocktory.com/en/).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#required-events-and-variables">Required events and variables</a></li>
  <li><a href="#website-id">Website ID</a></li>
  <li><a href="#enable-postcheckout">Enable Postcheckout</a></li>
  <li><a href="#enable-precheckout">Enable Precheckout</a></li>
  <li><a href="#enable-exchange">Enable Exchange</a></li>
  <li><a href="#exchange-trigger-events">Exchange trigger event</a></li>
  <li><a href="#exchange-spot">Setting an exchange spot</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
With SegmentStream, you can fully integrate Flocktory with your site.

To set up integration with Flocktory:
1. Log in to [segmentstream.com](https://admin.segmentstream.com/)
2. Go to the "Integration" tab and click on the block with the Flocktory logo.
3. In the panel that opens, configure the integration.
![](/img/integrations.flocktory.settings.png)

### <a name="required-events-and-variables"></a>Required events and variables
------
For the correct integration of your site with Flocktory - you need to configure the transfer of events in the `digitalData.events` array.
The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Viewed Cart](/events/viewed-cart)
* [Added Product](/events/added-product)
* [Removed Product](/events/removed-product)
* [Completed Transaction](/events/completed-transaction)

**Required variables**
* [page](/digitaldata/page)
* [product](/digitaldata/product)
* [listing.categoryId](/digitaldata/listing#listing.categoryId)
* [cart](/digitaldata/cart)
* [transaction](/digitaldata/transaction)
* [user](/digitaldata/user)

### <a name="website-id"></a>Website ID
------
By entering your Flocktory website ID in this field you enable the main Flocktory integration. You can read about it in detail on the [Flocktory documentation page](https://flocktory.github.io/en/integration/general/)

>You can find your website's ID in your Flocktory admin panel – or request the ID from your Flocktory account manager.

### <a name="enable-postcheckout"></a>Enable Postcheckout
------
Enabling this toggle switch will activate the Flocktory Postcheckout module. You can read about it in detail on the [Flocktory documentation page](https://flocktory.github.io/en/integration/postcheckout/)

### <a name="enable-precheckout"></a>Enable Precheckout
------
Enabling this toggle switch will activate the Flocktory Precheckout module. You can read about it in detail on the [Flocktory documentation page](https://flocktory.github.io/en/integration/precheckout/)

### <a name="enable-exchange"></a>Enable Exchange
------
The Flocktory Exchange module is enabled by the toggle switch.

You can read about it in detail on the [Flocktory documentation page](https://flocktory.github.io/en/integration/exchange/)

### <a name="exchange-trigger-events"></a>Exchange trigger event
------
By default, the Exchange banner is triggered when the `Completed Transaction` event is pushed to the `digitalData.events` array. Fill this field with the name of the event that you want to trigger the Exchange banner.

This feature is usually used in scenarios where a website sends the `Completed Transaction` event right before redirecting to an online payment system, therefore leaving no chance for the Exchange banner to be viewed. To overcome this, a separate event has to be created, which is triggered when the user is redirected back from the payment system to the 'Thank You' page, for example `Viewed Thank You Page`.

### <a name="exchange-spot"></a>Setting an exchange spot
------
Spot is an optional parameter that serves as an internal filter for Flocktory campaigns.
It should be used if you have different “thank you” pages and want to show different campaigns on each one.
There are two ways to set the Spot parameter through SegmentStream:
- Add a spot parameter to the [Completed Transaction](/events/completed-transaction) event and the configured [exchange trigger event](#exchangeTriggerEvent), for example:
```javascript
window.digitalData.events.push({
    category: 'Ecommerce',
    name: 'Completed Transaction',
    transaction: {
      //transaction data
    },
    spot: 'desktop'
});
window.digitalData.events.push({
    name: 'Viewed Thank You Page',
    spot: 'desktop'
});
```
- Dynamically map digitalData parameters to different spot values, for example, if you need to pass a spot value of `redesign` if the digitalData.website.redesign value is `true`, and pass `old` if the value is `false` or `undefined` you have to follow the following steps:
1. Open the Flocktory integration and click on the "Event variables" tab.
2. Click "Add"
3. Fill the 'Variable name' field (a) with the 'spot' value and leave the 'Event name' field (b) empty, so that the spot parameter of all events sent to Flocktory will be overwritten.
4. Finally enter the code into the `Handler function` field (c), that will determine which value to set to the parameter depending on the value of the digitalData.website.redesign variable.
![](/img/integrations.flocktory.spot.png)
5. Save (d) the event variable.

You can read about it in detail on the [Flocktory documentation page](https://flocktory.github.io/en/integration/exchange/)

