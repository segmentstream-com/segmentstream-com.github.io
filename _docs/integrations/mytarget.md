---
layout: page
section: integrations
title: "myTarget"
order: 1
---

In this section you will learn:
* How to connect or disable myTarget on your site.
* How to check the correctness of the integration settings.
* How to configure Top@Mail.ru goals.

myTarget collects information about users who have visited your site or performed actions. SegmentStream allows you to send data to the [myTarget Top@Mail.Ru](https://target.my.com/) counters of your choice.

## Introduction
------
With the help of SegmentStream, you can fully integrate myTarget with your site: events, hashed users' email addresses, deduplication and so on. <br />
[myTarget integration guide](https://target.my.com/adv/help/creating_counter_and_goals/) <br/><br/>
To configure integration with myTarget:
1. Log in on the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Click on the "Integration" tab and click on the block with the myTarget logo.
3. In the panel that opens, configure the integration.
![](/img/integrations.mytarget.settings.png)
<br />
You can read more details about the settings below.

## Required events and variables
------
For the correct operation of the integration of your site with myTarget - you must configure the filling of certain events in the `digitalData.events` array. The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Viewed Cart](/events/searched-products)
* [Completed Transaction](/events/completed-transaction)

It is also necessary to configure the filling of certain variables of the `digitalData` object. A list of some variables is given below:
* `page.type`
* `product` - the product object occurs in several places of the `digitalData` object: directly in `digitalData.product`, in the `items` and `lineItems` arrays of the `listing`, `cart` and `transaction` objects.
* `listing`, `cart`, `transaction` objects
* and others

## Top@Mail.ru counter ID
------
You can add several Top@Mail.ru counter IDs using the SegmentStream admin panel interface. You can find your counter ids on the Top@Mail.Ru Counters page in the Audiences tab.

## Product feed has grouped products
------
myTarget receives information about products placed on the site through an XML feed. With a certain interval, the myTarget robot downloads a feed from your server. This feed contains information about all products on the site.

[Learn more about the feed format.](https://target.my.com/adv/help/dynamic_remarketing/)

For correct integration, myTarget should also receive information about the interaction of users with products on the site - views, additions to the shopping cart, purchases, etc. The system must correctly match what it sees in the incoming events with the XML feed.

[More about product groups](https://target.my.com/adv/help/dynamic_remarketing/)

  >Activate this setting if the offer id from your XML feed matches the `product.skuCode` of the `digitalData` object. Be sure to fill `product.skuCode` and `product.id` in each `product`.

  >Do not activate this setting if the offer id from your XML feed matches the `product.id` of the `digitalData` object.

## Pricelist number
------
In order to use myTargeting dynamic retargeting ads you must specify a price list identifier for each Top@Mail.ru counter ID. It can be sent as a constant or dynamic parameter.
To learn how to create price lists and set up dynamic retargeting campaigns visit the [myTarget dynamic retargeting documentation](https://target.my.com/adv/help/dynamic_remarketing/)

## Goals mapping
------
myTarget goals help you segment users that have performed certain actions on your site. Using this setting you can set digitalData event names to the corresponding myTarget goal names that you have set up in the myTarget admin panel.

You can set custom values for each goal by adding a `value` variable to the relative digitalData events, for example, if you have to pass a value of 10 to the goal `newSubscription` that is reached when a user subscribes to a newsletter, you have to set up the goal mapping in the setting and add the variable to your `Subscribed` event, as shown below:
![](/img/integrations.mytarget.goalsMapping.png)
```javascript
window.digitalData.events.push({
  name: 'Subscribed',
  user: {
    email: 'test@mail.com'
  },
  value: 10
})
```

To learn how to create goals in the myTarget admin panel visit the [myTarget documentation goals guide](https://target.my.com/adv/help/creating_counter_and_goals/#creating_goals)

## Checking the correctness of the integration setup
------
After configuring the integration in the SegmentStream interface, but before PUBLICATION - go to the site in test_mode, [go through the conversion funnel and check for errors](/javascript-sdk/integrations#eventVariables).
If there are no errors - publish the current version.
