---
layout: page
section: integrations
title: "GdeSlon"
order: 1
---

In this section you will learn:
* How to turn GdeSlon on or off on your website.
* How to set up deduplication of paid channels.
* How to activate GdeSlon retargeting.

GdeSlon is an affiliate network that connects advertisers with web-masters. SegmentStream allows you to send all necessary user behaviour data to GdeSlon.

## Introduction
------
With the help of SegmentStream you can add the GdeSlon pixel on your website's 'Thank You' page, save the trafic source and partner id in the browser's cookies, and connect the GdeSlon retargeting module.

To configure your integration with GdeSlon:
1. Login on the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration control panel.
2. Enter the "Integration" tab and click on the block with the GdeSlon logo.
3. In the panel that opens, configure the integration.

You will find a more detailed description of the settings below.

## Requirements
------
Before you start setting up the integration in the SegmentStream panel, you need to register in the connected system and prepare all the necessary data:
  - Request a test link from your GdeSlon manager
    - It is important that the link contains the following
    GET_parameters: utm_medium, utm_source, gdeslon_uid. If there are no such parameters or other parameters are used, you should ask the GdeSlon manager to create a link in the following format https://site.com/?utm_medium=cpa&utm_source=gdeslon&utm_campaign=xxxxxgdeslon_uid=yyyyyy
 - Merchant ID
 - A list of all action codes and their application, for example:
    - 1 - first purchase
    - 2 - consecutive purchase
      - or
    - 1 - purchase a product from the 'Jeans' category
    - 2 - purchase a product from the 'Accessories' category
    - 3 - ....
 - Link to the product feed. It is needed to compare product IDs in the feed and digitalData layer.
 - If GdeSlon is already working on the website, you need to specify the name of the cookie in which the gdeslon_uid is stored by the developer or analyst. After the integration is enabled via SegmentStream, it will be necessary to disable the saving of cookies on the developers side.
 - You need to know with which traffic channels utm_medium deduplication will be configured. For example: with all or only with CPA or CPA and CPC.

## Merchant ID
------
The Merchant ID is a unique identifier for your online project and is issued by GdeSlon employees at your request.

## Product feed has grouped products
------
GdeSlon receives information about products placed on the site through an XML feed.

For correct integration, GdeSlon should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match what it sees in the incoming events with the XML feed.

-If you use grouping of goods using the `item_group_id` xml-feed parameter - be sure to activate this setting.
  >In this case, the product id from your XML feed must match the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

 -If you do NOT use grouping of goods using the `item_group_id` xml-feed parameter - do not activate this setting.
  >In this case, the product id from your XML feed must match the `product.id` of the `digitalData` object.

## Default action code
------
Depending on your arrangements with GdeSlon, you may have one or more action codes. For example, if you pay one price for the first purchase in your online store, and another for another purchase.

Most online stores pay the same price for all activities. In this case, you will have one action code, which you can learn from your GdeSlon manager.

If you have multiple action codes, you will need to configure Event Variables.
In the GdeSlon integration settings window, click on the Event Variables tab and click add.

Below is an example of setting different action codes depending on the visitor’s purchase number:
![](/img/integrations.gdeslon.1.png)

## Name of the cookie that stores the affiliate id
------
Every webmaster has a unique identifier in the GdeSlon network. This identifier is present as a GET parameter in all advertising links leading to your site. To remember the webmaster who brought you a potential buyer, you need to save the webmaster ID in the cookie. The webmaster whose number will be in the cookie at the time of order will receive a reward.

> If GdeSlon has already been integrated with your site before, we recommend that you specify the former name of the cookie in the settings so that the identifiers of partners who have previously led traffic to the site are not lost.

## Automatic cookie tracking
------
SegmentStream is able to automatically save the partner ID in a cookie for a set period.
Turn on the "Automatic tracking cookie" switch, specify the storage time in days and the domain of the cookie.

> If different sections of your site are located on subdomains, for example, the basket is located at checkout.site.ru, specify the top-level domain in the integration settings

> If you are already saving gdeslon_uid to a specific cookie, enter its name. After verification, ask the developer to disable the previous cookie filling.

## Activate deduplication
------
Deduplication or attribution is the rule according to which the value of the completed order is redistributed among all traffic sources that brought the user to the site before his purchase. In the case of partner networks, the 'last cookie wins' rule is most often used. This means that the last partner takes all the value.

By default, deduplication is disabled. This means that the webmaster who brought a user to the site will receive his reward, regardless of whether the webmasters of other partner networks or targeted and contextual advertising systems brought traffic to the site later.

If you enable deduplication, the system will remember the last traffic source (utm_source and utm_medium).
If you specify the list utm_medium, then SegmentStream will not send information about the purchase to GdeSlon, if the last user's transition before the purchase was with the corresponding utm_tag. For example, if you specify 'cpc', then any transitions from contextual advertising (if of course, your contextual advertising ads are marked as 'cpc') will "overwrite" previous navigation through webmasters' links.

If don't specify any utm_medium, then all redirects to links containing a utm_medium parameter will "overwrite" previous clicks on webmasters' links.

> If you are working with several partner networks at the same time, we strongly recommend that you enable deduplication and specify the utm_medium links of other partner networks.

## GdeSlon partner links utm_source
------
For deduplication and the accounting of partner rewards to work correctly it is necessary to specify the utm_source of the partner links. Confirm the value of this parameter with your GdeSlon manager.


## Activate retargeting
------
To enable GdeSlon retargeting, you need to enable the "Activate retargeting" toggle switch.

For GdeSlon retargeting to work correctly on your site, you must configure the transmission of certain events to the `digitalData.events` array. The list of events is given below:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Viewed Cart](/events/viewed-cart)
* [Completed Transaction](/events/completed-transaction)

You also need to configure the filling of certain variables of the `digitalData` object. Some variables are listed below:
* `page.type`
* `product.id`, `product.skuCode`, `product.unitSalePrice` - there are several instances of the product object in `digitalData`: directly in `digitalData.product`, and in the `items`,`lineItems` arrays of the `listing`, `cart`, `transaction` objects.
* `listing.items`, `listing.categoryId`.
* `cart.lineItems`.
* `transaction.orderId`, `transaction.total`, `transaction.lineItems`.

Table for clarification:

Events | Required variables
--- | ---
Viewed Page |	page.type
Viewed Product Detail |	page.type<br> [product].id<br> [product].skuCode<br> [product].unitSalePrice
Viewed Product Listing | page.type<br> [product].id<br> [product].skuCode<br> [product].unitSalePrice<br> listing.items<br> listing.categoryId
Searched Products |	page.type<br> [product].id<br> [product].skuCode<br> [product].unitSalePrice<br> listing.items
Viewed Cart |	page.type<br> [product].id<br> [product].skuCode<br> [product].unitSalePrice<br> lineItems.quantity
Completed Transaction |	page.type<br> [product].id<br> [product].skuCode<br> [product].unitSalePrice<br> lineItems.quantity<br> transaction.orderId<br> transaction.total
