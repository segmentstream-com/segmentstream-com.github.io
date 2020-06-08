---
layout: page
section: integrations
title: "Google Analytics"
order: 1
---

In this section you will learn:
* How to install the Google Analytics counter on your site.
* How to set up Google Analytics event tracking
* How to configure the advanced e-commerce module.
* How to set up Google Analytics events
* How to pass custom dimensions, metrics and content groups
* How to fine-tune Google Analytics tracking on your site

SegmentStream makes it easy to send data about your users' behavior to [Google Analytics](https://analytics.google.com/). After full [integration of digitalData with your site](/javascript-sdk/digitaldata), you can go to the integration setup in the SegmentStream panel.

## Introduction
------
With the help of SegmentStream, you can fully integrate Google Analytics with your website: events, advanced e-commerce, special metrics and parameters, content groups and much more. <br />
[Google Analytics integration guide](https://support.google.com/analytics#topic=3544906) <br/><br/>
To configure the Google Analytics integration:
1. Log in to the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel.
2. Go to the "Integration" tab and click on the block with the Analytics logo.
3. In the opened panel - configure the integration.
![](/img/integrations.ga.settings.png)
<br />
You can read more details about the settings below.

> Important! To work with the main Google Analytics tracker, you need to configure the [Viewed Page](/events/viewed-page) event.

## Tracking ID
------
To set up site tracking, you must create a resource in your Google Analytics account. When creating a resource, Google Analytics will generate a unique tracking ID. Look at the screenshot below for help on how to find it.
![](/img/integrations.ga.id.png)
Copy the tracking ID and paste it into the appropriate field in the SegmentStream interface.
![](/img/integrations.ga.settings.id.png)

## Event tracking
------
By default, SegmentStream sends all the events that are pushed to the `digitalData.events` array to Google Analytics.

> Important! The [Viewed Page](/events/viewed-page) event is automatically converted to the pageview interaction type and is not included in the Behavior > events > top events report.

All events passed to Google Analytics can have several characteristics: eventCategory, eventAction, eventLabel, eventValue, nonInteraction.
SegmentStream has a built-in digitalData format mapper in the Google Analytics format. Below is an example of a click event on a button.
```javascript
digitalData.events.push({
  category: 'UX',
  name: 'Clicked Button',
  action: 'Clicked Button',
  label: 'Green',
  value: 10,
  nonInteraction: true
})
```

This event will be automatically converted to the Google Analytics format:
```javascript
ga('send', {
  hitType: 'event',
  eventCategory: 'UX',
  eventAction: 'Clicked Button',
  eventLabel: 'Green',
  eventValue: 10,
  nonInteraction: true
});
```

> Important! By default, if you do not pass the action field, the value of the name field will be used as the eventAction. Thus, action and name can take different values.

> Important! By default, nonInteraction is set to false.

[Google guide on event tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/events?hl=en)

## Use Proxy
------
You can activate this setting if your users ISPs might be blocking requests to the Google Analytics server.

## Enhanced Ecommerce module
------
Google Analytics allows you to track the interaction of users with your products: product impressions in catalogs, product clicks, detailed viewing of product pages, adding to cart, orders and more. The integration SegmentStream allows you to connect or disconnect the advanced e-commerce module in 1 click.

> Important! You must configure the transmission of certain events to the `digitalData.events` array for the Enhanced Ecommerce module to work correctly. The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Added Product](/events/added-product)
* [Viewed Checkout Step](/events/viewed-checkout-step)
* [Completed Transaction](/events/completed-transaction)

**Optional events**
* [Viewed Product](/events/viewed-product)
* [Clicked Product](/events/clicked-product)
* [Viewed Campaign](/events/viewed-campaign)
* [Clicked Campaign](/events/clicked-campaign)
* [Completed Checkout Step](/events/completed-checkout-step)
* [Refunded Transaction](/events/refunded-transaction)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Viewed Cart](/events/searched-products)

## User Id
------
If SegmentStream is correctly integrated into your site, it means that on each page you have passed the visitor ID from your CRM or ERP to the digitalData.user.id variable. Google Analytics allows you to glue your user sessions from different browsers or devices into one story thanks to the "USER-ID" module. You can enable or disable USER-ID sending in Google Analytics in 1 click.

[Google USER-ID guide](https://support.google.com/analytics/answer/3123662?hl=en)
## Enhanced link attribution
------
The improved link attribution module allows you to automatically distinguish links on a page that lead to the same URL. This can be useful if you are using the Page Analytics extension for Chrome. This extension adds a layer of analytical data on top of the page. The extension highlights each link and displays a set of KPIs. In case if the improved link attribution was not enabled, KPIs for 2 links leading to the same URL would have identical values.

[Google Enchanced link attribution guide](https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-link-attribution)
## Anonymize IP
------
Google Analytics allows site owners to hide their visitors' IP addresses when processing data. Enable or disable the IP anonymization feature in 1 click.

[Google IP anonymization guide](https://support.google.com/analytics/answer/2763052?hl=en)

## Transliterate cyrillic symbols
------
You can activate this setting if you are sending cyrillic symbols to GA. By transliterating you can significantly reduce the size of hits and events that contain product names, descriptions, etc.

## Enable cross-domain tracking
------
By default, Google Analytics does not glue together user visits to different second-level domains into the same history. This function could be necessary if different parts of the same site are on different domains, for example: an online store - https://shop.com and a blog - https://blog.com. To send information about the behavior of a particular visitor on different domains in the same Google Analytics property, you must enable cross-domain tracking.
Activate the "Enable cross-domain tracking" feature and add all the domains you want to link.

[Cross-domain measurement guide](https://support.google.com/analytics/answer/1034342?hl=en)

## Currency
------
In Google Analytics, there is a set of options for the enhanced e-commerce module that represent monetary values ​​in different currencies, for example: revenue from goods, transaction revenue, shipping costs, etc. A list of supported currencies is described in the Google currency guide. Important! If the currency specified in the SegmentStream integration settings is different from the global presentation currency (specified in the Analytics settings), Google Analytics will convert at the exchange rate for the previous day.

[Google currency guide](https://support.google.com/analytics/answer/6205902?hl=en)


## Site speed sample rate
------
Google allows you to specify the percentage of users whose data will be collected to track the speed of the site. The default value is 1.

[Google guide on site speed sample rate](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#siteSpeedSampleRate)

## Website domain
------
In this setting, you can specify the domain in which the cookie will be stored with the unique visitor ID of your site. We recommend using the default value: `auto`. In this case, the Google Analytics library automatically saves all cookies to the highest-level domain.

[Google guide on Cross-domain tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain)

## ClientId
------
Google Analytics identifies different hits from the same site visitor using ClientId.
The identifier is generated by the analytics.js library and stored in the visitor's cookies.
Through SegmentStream, sending ClientId with the first and all subsequent hits of the visitor can be configured in 1 click.
Select the number of the custom parameter in the drop-down list below the "ClientId custom dimension" field.

[Google guide on ClientId](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id)

## Optimize Container ID
------
If you are using Google Optimize you can pass the container ID into this field.

[Google guide on Optimize](https://support.google.com/tagmanager/answer/7164339?hl=en)

## Metrics
------
In Google Analytics, you can send custom metrics. The indicator is a quantitative value (integer, fractional number, time). For example: the number of sessions, the amount of the order, the depth of viewing, etc. Metrics can be transmitted at different levels:
- at hit level (any interaction of the user with the site, information about which goes to the Google Analytics server)
- at the product level (all user interactions with the product).
In order to configure the transfer of a custom metric:

1. Create a custom metric in the GA interface. Remember the number of the created metric.
 ![](/img/integrations.ga.metric.2.png)
2. Go to the Metrics field in the GA integration setup in the SegmentStream admin panel.
 ![](/img/integrations.ga.metric.1.png)
3. In the drop-down list, select the metric number that you just created in Google Analytics (for example metric1).
 ![](/img/integrations.ga.metric.3.png)
4. Specify the data source:
 - **DigitalData**. Any numeric variable that is contained in a digitalData object can be passed to Google Analytics at hit levels. For example: along with loading a page, you can transfer to Google Analytics at the hit level the number of products that the user has in the cart.
 - **Event**. In Google Analytics, along with the event, you can send additional information, for example: if you don't have data for the Event Category, Event Action, Event Label, Value fields.
 - **Product**. Google Analytics allows you to pass specific metrics at the product level. Thus, along with all the events that occur with the goods on your site (for example: viewing the product page, adding goods to the shopping cart, buying goods), you can transfer additional indicators. For example, you can transfer the number of items available in the warehouse when the user views the product card.

5. Save and publish the changes.

[Google Guide on custom metrics](https://support.google.com/analytics/answer/2709829?hl=en#set_up_custom_metrics)

## Dimensions
------
In Google Analytics, you can pass custom dimensions. Parameters are data attributes. All metrics (numeric data) are calculated in the parameter sections. Examples of parameters: Traffic source, Page URL, Region, etc. Parameters can be transmitted at different levels:
  - at hit level (information isn't aggregated)
  - at session level (information is aggregated by each session of each user)
  - at the user level (information is aggregated by all sessions of each user)
  - at product level (information is aggregated by each product).

  > A short explanation, for understanding the difference in levels: For example, you want to transfer to the GA your user's hobby when the user saves information about himself on your site. You send the event and along with the event you transmit a special parameter (the name of your user's hobby). If you have configured a parameter at the hit level, then the user's hobby information will only be available in the event reports. If you have configured the parameter at the session level, hobby information will be available in most reports, but only within one day and one session. If you have configured a parameter at the user level, hobby information will be available in most reports and for any date range after the event.<br />

  The setting of the custom dimensions is identical to [setting custom metrics](#11).

[Google guide on custom dimensions](https://support.google.com/analytics/answer/2709829?hl=en#set_up_custom_dimensions)

## Content groups
------
In Google Analytics, you can view reports not only in the slices of certain page addresses, but also in page groups. You can set these groups to your liking. For example, you can create a "Page type" content group and upload the value of the `digitalData.page.type` variable every time the page loads.
1. Create a content group:
![](/img/integrations.ga.content-grouping.png)
2. Setup the transmission of `digitalData.page.type` in the SegmentStream interface:
![](/img/integrations.ga.content-grouping.1.png)

[Google guide on Content Grouping](https://support.google.com/analytics/answer/2853546?hl=ru)

## Namespace
------
The analytics.js library allows you to create not one but several counters on the same page. This can be useful if you are sending data to two or more resources. For example, if you have an international business and you collect data from all regions in one common resource, but each region has its own resource with its own special settings.
We recommend that you specify a unique value, for example `ss`.

[Google on Working with multiple trackers](https://developers.google.com/analytics/devguides/collection/analyticsjs/creating-trackers?hl=en#working_with_multiple_trackers)

## Server Side
------
When you track an event with the **[HTTP API](/http-api/overview)** we will send it along to the Google Analytics REST API using [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1).

## Combining Server-side and Client-side Events

Google Analytics uses cookies to keep track of visitors and their sessions while visiting your website. The cookie data is stored in the visitor’s browser, and is sent along to Google Analytics every time a new event occurs. This allows Google Analytics to show a single unique visitor between multiple page reloads.

Your servers also have access to this cookie, so they can re-use it when you send server-side events to SegmentStream. If you don’t use the existing cookie SegmentStream has to create a new one to make the server-side request to Google Analytics. When we create a new cookie the client-side and server-side events from the same user will look like two distinct visitors in Google Analytics.

If you want to use server-side Google Analytics you need to p**ass your Google Analytics cookies to SegmentStream**.

## Passing Cookies from Universal Analytics

Universal Analytics (analytics.js) uses the [`clientId`](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage#analyticsjs) to keep track of unique visitors.

*A Google Analytics Universal cookie will look like this:*
`_ga=GA1.2.1033501218.1368477899;`

The `clientId` is this part: `1033501218.1368477899`

You can double check that it’s your `clientId` by running this script in your javascript console:

```javascript
ga(function (tracker) {
    var clientId = tracker.get('clientId');
    console.log('My GA universal client ID is: ' + clientId);
});
```

If you want our server-side destination to use your user’s `clientId`, pass it to SegmentStream in the `integrations['Google Analytics'].clientId` object. You must pass this value manually on every call as we do not store this value for you. If you do not pass this through, we look for the `user.userId` or `user.anonymousId` value and set it as the `cid`.

*Here’s an example:*

## Completed Transaction ~> ('ec:setAction', 'purchase')

```json
{
  "hitId": "4c59d330-35c7-11e9-8f27-8d1d7d4690e7",
  "sentAt": "2019-02-21T10:56:10.723Z",
  "event": {
    "category": "Ecommerce",
    "name": "Completed Transaction",
    "label": "some label",
    "user": {
      "anonymousId": "80ddb140-35c6-11e9-bd56-eb1c05e6de18",
      "emailHash": "eff8c37862c7a2f0019448289bdd0869c30ae7f07060e4be9d",
      "userId": "u2783187492"
    },
    "transaction": {
      "orderId": "543234",
      "lineItems": [ ... ],
      "total": 240,
      "currency": "USD"
    },
    "nonInteraction": false
  },
  "context": {
    "ip": "123.22.334.55"
  },
  "integrations": {
    "Google Analytics": {
      "clientId": "1033501218.1368477899"
    }
  }
}

```

## Refunded Transaction ~> ('ec:setAction', 'refund')

```json
{
  "hitId": "4c59d330-35c7-11e9-8f27-8d1d7d4690e7",
  "sentAt": "2019-02-21T10:56:10.723Z",
  "event": {
    "category": "Ecommerce",
    "name": "Refunded Transaction",
    "label": "some label",
    "user": {
      "anonymousId": "80ddb140-35c6-11e9-bd56-eb1c05e6de18",
      "emailHash": "eff8c37862c7a2f0019448289bdd0869c30ae7f07060e4be9d",
      "userId": "u2783187492"
    },
    "transaction": {
      "orderId": "543234",
      "lineItems": [ ... ],
      "total": 240,
      "currency": "USD"
    },
    "nonInteraction": true
  },
  "context": {
    "ip": "123.22.334.55"
  },
  "integrations": {
    "Google Analytics": {
      "clientId": "1033501218.1368477899"
    }
  }
}

```

<!-- ## Checkout options
------
If you are measuring checkout option effectiveness you can pass.

[Google guide on checkout options](https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-checkout) -->
