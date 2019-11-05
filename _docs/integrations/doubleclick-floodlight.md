---
layout: page
section: integrations
title: "DoubleClick Floodlight"
order: 1
---

In this section you will learn:
* How to turn DoubleClick Floodlight on or off on your website.
* How to send event tracking information to DoubleClick Floodlight.
* How to pass custom variables to DoubleClick Floodlight.

The DoubleClick Floodlight integration is used for sending activity and conversion data from your website to the Google Campaign Manager.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#configuration-id">Floodlight configuration ID</a></li>
  <li><a href="#event-name">Event name</a></li>
  <li><a href="#activity-group-tag-string">Activity group tag string</a></li>
  <li><a href="#activity-tag-string">Activity tag string</a></li>
  <li><a href="#counting-method">Counting method</a></li>
  <li><a href="#custom-variables">Custom variables</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
Through SegmentStream you can integrate DoubleClick Floodlight in a couple of clicks.

To configure your integration with DoubleClick Floodlight:
1. Login on the [segmentstream.com](https://admin.segmentstream.com/) website.
2. Enter the "Integration" tab and click on the block with the DoubleClick Floodlight logo.
3. In the panel that opens, configure the integration.

![](/img/integrations.doubleclick.settings.png)

The tracking of each event in DoubleClick requires the filling of a list of settings.

### <a name="configuration-id"></a>Floodlight configuration ID
------
The Floodlight Configuration ID is a unique Google Campaign Manager identifier, it can be found on the 'All Counters' page in your Campaign Manager account. For more information, visit the [Google help page](https://support.google.com/analytics/answer/7548015?hl=en).

### <a name="event-name"></a>Event name
------
This field should be filled with the name of the digitalData event that triggers the activity tag tracked. For more information on digitalData events visit our [events documentation page](/for-analyst/events).

### <a name="activity-group-tag-string"></a>Activity group tag string
------
The Floodlight activity group tag string is the name of the container for the tracked Floodlight activity.
For more information, visit the [Floodlight activity group help page](https://support.google.com/searchads/answer/2478308?hl=en&ref_topic=2478218&visit_id=637085487339270380-2118517468&rd=1).

### <a name="activity-tag-string"></a>Activity tag string
------
The Floodlight activity tag string is the name of the tracked Floodlight activity.
For more information, visit the [Floodlight Counter tags help page](https://support.google.com/tagmanager/answer/6107168?hl=en).

### <a name="counting-method"></a>Counting method
------
Select one of the two conversion counting methods:
* 'Standard' if you need to count the number of conversions associated with an event.
* 'Transactions' if you need to track the number of sales made or the number of items purchased.
For more information, visit the [Floodlight conversion counting methods help page](https://support.google.com/dcm/answer/2823400?hl=en).

### <a name="custom-variables"></a>Custom variables
------
DoubleClick Floodlight allows you to pass any parameter to the tracked activity tag.
For more information, visit the [Floodlight custom variables help page](https://support.google.com/dcm/answer/2823222?hl=en).

To configure the transfer of a parameter, you have to fill in 3 fields:
1. Left - In the drop-down list, select the custom variable number (u1, u2, and so on) that you want to pass the parameter to.
2. Center - Specify the data source:
 - **DigitalData**. Any variable that is present in the digitalData object
 - **Event**. A variable that is present in the digitalData event that triggers the activity tag.
3. Right - Specify the name of the variable.

In the screenshot above are two examples of usage:
- The `u2` custom variable is receiving the value of the  `user.firstName` digitalData variable.
- The `u4` custom variable is receiving the value of the `example` Viewed Page event variable.

If the `digitalData.user` object is filled, and the `Viewed Page` event is pushed as in the example below, the `u2` and `u4` custom variables will receive the `John` and `test example` values respectively.
```javascript
window.digitalData = {
    user: {
      userId:'125',
      firstName:'John'
    }
    // ...other digitalData data
};
window.digitalData.events.push({
    name: 'Viewed Page',
    example: 'test example'
});
```


