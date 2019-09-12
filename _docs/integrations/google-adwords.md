---
layout: page
section: integrations
title: "Google Adwords"
order: 1
---

In this section you will learn:
* How to connect Google Adwords dynamic remarketing.
* How to check the correctness of the integration setup.

The Google Adwords dynamic remarketing module allows you to display ads with products that users are interested in.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#requiredEvents">Required events</a></li>
  <li><a href="#conversionID">Conversion ID</a></li>
  <li><a href="#businessType">Business type</a></li>
  <li><a href="#productFeed">Product feed has grouped products</a></li>
  <li><a href="#correctnessOfTheIntegrationSetup">Checking the correctness of the integration setup</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
With the help of SegmentStream, you can fully integrate the Google Adwords Dynamic Remarketing Module with your site.

[Google integration guide](https://support.google.com/tagmanager/answer/6106009?hl=en#OneTagPerFunnel)

To configure the Adwords integration:
1. Log in to the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Go to the "Integration" tab and click on the block with the Adwords logo.
3. In the opened panel - configure the integration.
![](/img/integrations.googleadwords.1.png)
<br />
You can read more details about the settings below.

### <a name="requiredEvents"></a>Required events
------
For the correct operation of the Adwords integration you must configure the filling of certain events in the `digitalData.events` array. The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Viewed Cart](/events/viewed-cart)
* [Completed Transaction](/events/completed-transaction)

It is also necessary to configure the filling of certain variables of the `digitalData` object. A list of some variables is given below:
* `page.type`
* `product` - the product object occurs in several places of the `digitalData` object: directly in `digitalData.product`, in the `items` and `lineItems` arrays of the `listing`, `cart` and `transaction` objects.
* `listing`, `cart`, `transaction` objects
* and others

> We strongly recommend that you configure the filling of all variables in the `digitalData` object (not just those described above), in accordance with the [documentation](/for-developer/).

### <a name="sdkVersion"></a>SDK version
------
Use the 'gtag.js' version if you are connecting Google Adwords to your website for the first time.

### <a name="conversionID"></a>Conversion ID
------
You can find the conversion tracking ID in the Google Adwords system interface.

### <a name="businessType"></a>Business type
------
The code for dynamic Google Ad Remarketing depends on the type of activity selected in the campaign settings. It is necessary in the SegmentStream interface to choose the same type as in the Google Ads API.

For example, if you select the "Retail" type in Google Ads, you must also select "Retail" in the SegmentStream interface.

>If the necessary type of activity is missing in the SegmentStream interface - contact support at support@segmentstream.com

[More about business types](https://support.google.com/google-ads/answer/7305793?hl=en)

### <a name="productFeed"></a>Product feed has grouped products
------
Google Ads receives information about products placed on the site through an XML feed. With a certain interval, the Google robot downloads a feed from your server. This feed contains information about all products on the site.

[Learn more about the feed format.](https://support.google.com/merchants/answer/7052112)

For correct integration, Google should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match what it sees in the incoming events with the XML feed.

[More about product groups](https://support.google.com/merchants/answer/6324507)

-If you use grouping of goods using the `item_group_id` xml-feed parameter - be sure to activate this setting.
  >In this case, the product id from your XML feed must match the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

 -If you do NOT use grouping of goods using the `item_group_id` xml-feed parameter - do not activate this setting.
  >In this case, the product id from your XML feed must match the `product.id` of the `digitalData` object.

### <a name="correctnessOfTheIntegrationSetup"></a>Checking the correctness of the integration setup
------
After configuring the integration in the SegmentStream interface, but before PUBLICATION - go to the site in test_mode, [go through the conversion funnel and check for errors](/for-analyst/integrations#testing).
If there are no errors - publish the current version.
