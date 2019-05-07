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
  <li><a href="#4">Event naming convention</a></li>
</ul>

### <a name="0"></a>Introduction
------
Any event is a set of information that enters the digitalData.events data array. The information in the array must be represented as a javaScript object.
For example: SegmentStream will register an event with the name "Some event" when the following code is executed:
```javascript
digitalData.events.push({
  name: 'Some event',
  value: 3000
});
```
Now SegmentStream can send information about the event "Some event" with the value 3000 to any system, for example, Google Analytics and Yandex Metrika.

### <a name="1"></a>Event creation
------
SegmentStream has 3 basic triggers:
* Event
* Click
* Impression

> Important! The default SegmentStream client library always sends a built-in Viewed Page event after loading. This event can be disabled by turning off the [Automatic sending of the Viewed Page event](/for-analyst/settings#sendViewedPageEvent) option in the project settings.

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
The code _digitalData('page.type') [is explained in the helper functions section](/for-developer/helpers).


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

### <a name="4"></a>Event naming convention
------
Standard SegmentStream integrations work with a list of reserved events, for example: [Viewed Product Detail](/events/viewed-product-detail), [Viewed Checkout Step](/events/viewed-checkout-step), [Completed Transaction](/events/completed-transaction), etc.
The complete list of reserved events is located in the side menu under "Events List". Use the event names listed in this list.

If you need to add an event that is not in the reserved list - use our [event naming convention](/for-developer/naming).
