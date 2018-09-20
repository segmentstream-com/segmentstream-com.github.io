---
layout: page
section: analyst
title: "Events"
date: 2013-06-05 12:00:00
order: 2
---

Events is one of the most important components of `digitalData`. All information is sent to analytics and marketing systems in the form of events. Below, you will find a detailed description on how to create and manage events in the SegmentStream interface.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Event creation</a></li>
  <li><a href="#3">Helper functions</a></li>
  <li><a href="#4">Event naming convention</a></li>
</ul>

### <a name="0"></a>Introduction
------
Any event is a set of information that enters the digitalData.events data array. The information in the array must be represented as a javaScript object.
For example: SegmentStream will register an event with the name "Event Happened" when the following code is executed:
```javascript
digitalData.events.push({
  name: 'Event Happened',
  value: 3000
});
```
Now SegmentStream can send information about the event "Event Happened" with the value 3000 to any system, for example, Google Analytics and Yandex Metrica.

### <a name="1"></a>Event creation
------
SegmentStream has 3 basic triggers:
* Event
* Click
* Impression

>Important! SegmentStream has 1 built-in event - Viewed Page. This event occurs when the SegmentStream library is fully loaded.

![](/img/events.1.png)

Based on these triggers and data from digitalData, you can create new events.


**Example 1: `Viewed Product Detail` Event**

Most marketing systems require information about your online store's product page views. To send the information about the viewed product to any integration, you need to configure the Viewed Product Detail event. This event occurs when the user loads a product page, or in the digitalData language: The Viewed Page event has occurred while the variable digitalData.page.type is equal to 'product' (the type of page on which the user is located is a product page).

![](/img/events.2.png)

```javascript
if (_digitalData('page.type') === 'product') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Detail'
  };
}
```
The code _digitalData('page.type') [is explained below](#3).


**Example 2: `Clicked Campaign` Event**

For tracking CTR and other indicators of the effectiveness of internal campaigns, you need to track clicks on banners. This event occurs when the user clicks on a banner or in the digitalData language: The Click trigger fires on the page element that contains the CSS class = "ddl_campaign_link".
> Important! If you selected "Click" as the trigger in the campaign setup, in the "Function that returns an event object" field, you can refer to the "element" variable. Element is the DOM object whose CSS selector you specified.

![](/img/events.3.png)

```javascript
var campaignId = element.getAttribute('data-campaign-id');
return {
  name: 'Clicked Campaign',
  category: 'Promo',
  campaign: campaignId
};
```

**Example 3: `Viewed Campaign` Event**

In conjunction with clicks on banners, you need to track banner impressions. The built-in "Impression" trigger works only when 75% of the monitored page element is in the site visitor's browser field of view. The CSS selector for the tracked element is specified in the corresponding event setting field.
> Important! If you selected "Impression" as the trigger in the campaign setup, in the "Function that returns an event object" field, you can refer to the "elements" variable. Elements is an array of DOM objects whose CSS selector you specified.

![](/img/events.4.png)

```javascript
var viewedCampaigns = [];
for (var i = 0; i < elements.length; i++) {
  var campaignId = elements[i].getAttribute('data-campaign-id');
  viewedCampaigns.push(campaignId);
}
return {
  name: 'Viewed Campaign',
  category: 'Promo',
  campaigns: viewedCampaigns
};
```

### <a name="3"></a>Helper functions
------
```javascript
_queryParam('q') // get url parameter value
_cookie('_ga') // get cookie value
_get(event, 'transaction.lineItems') // Safely get any event property
_digitalData('transaction.lineItems') // Safely get any digitalData property
_global('settings.mobile_app') // Safely get any window property
_domQuery('#logo') // get an array of elements by CSS-selector
_dataLayer('ecommerce.purchase') // Safely get a GTM dataLayer variable
return _fetch('/ajax?cart', function(result) {
  return result;
}); // get data from a remote server using ajax
return timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
}); // Delay before the handler returns the result
```

> The `_queryParam()` function always returns values in lowercase

> The `_domQuery()` function, and the selectors in the triggers **Click** and **Impression** work by the following principle:
>  - if jQuery is not loaded on the website (there is no global window.jQuery object) or jQuery is loaded after SegmentStream (is located further down the HTML page), [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) is used,
>  - if jQuery is loaded on the website, jQuery selectors are used.

### <a name="4"></a>Event naming convention
------
Standard SegmentStream integrations work with a list of reserved events, for example: [Viewed Product Detail](/events/viewed-product-detail), [Viewed Checkout Step](/events/viewed-checkout-step), [Completed Transaction](/events/completed-transaction), etc.
The complete list of reserved events is located in the side menu under "Events List". Use the event names listed in this list.

If you need to add an event that is not in the reserved list - use our [event naming convention](/for-developer/naming)
