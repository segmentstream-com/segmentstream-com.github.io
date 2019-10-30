---
layout: page
section: integrations
title: "RTB House"
order: 1
---

In this section you will learn:
* How to connect or disable RTB House on your site.
* How to check the correctness of the integration settings.
* How to configure the sending of custom segments.

RTB House is a dynamic retargeting system. SegmentStream allows you to send data about the behavior of your users to [RTB House](https://www.rtbhouse.com).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#requiredEventsAndVariables">Required events and variables</a></li>
  <li><a href="#accountKey">Account key</a></li>
  <li><a href="#crossDevice">Cross-Device tracking</a></li>
  <li><a href="#userSegment">User segment</a></li>
  <li><a href="#useCustomDeduplication">Use custom deduplication</a></li>
  <li><a href="#correctnessOfIntegrationSetup">Checking the correctness of the integration setup</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
With the help of SegmentStream, you can fully integrate RTB House on your website: events, deduplication etc. <br />
To setup the RTB House integration:
1. Log in on the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Click on the "Integration" tab and click on the block with the RTB House logo.
3. In the panel that opens, configure the integration.
![](/img/integrations.rtb.settings.png)
<br />
You can read more details about the settings below.

### <a name="requiredEventsAndVariables"></a>Required events and variables
------
For the correct operation of the integration of your site with RTB House - you must configure the filling of certain events in the `digitalData.events` array. The list of events is as follows:

**Required events**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Started Order](/events/started-order)
* [Updated Cart](/events/updated-cart)
* [Viewed Cart](/events/viewed-cart)
* [Completed Transaction](/events/completed-transaction)

It is also necessary to configure the filling of certain variables of the `digitalData` object. A list of the variables is given below:
* `page.type`
* `product` - the product object occurs in several places of the `digitalData` object: directly in `digitalData.product`, in the `items` and `lineItems` arrays of the `listing`, `cart` and `transaction` objects.
* `listing`, `cart`, `transaction` objects
* and others.

### <a name="accountKey"></a>Account key
------
The ID of your account can be checked with your RTB House account manager

### <a name="crossDevice"></a>Cross-Device tracking
------
If the [`digitalData.user.email`](/digitaldata/user#user.email) variable is filled, then we will automaticaly send a `uid` matching the sha256 hash of that email.

### <a name="userSegment"></a>User segment
------
RTB House allows you to send user segments with each event. For example, if you want to completely disable retargeting for a specific segment of users - you need to create a numeric variable in the `digitalData` object and insert its address into the integration configuration field.
For example, for all users on which you want to disable retargeting, you pass the value 1 to the variable `digitalData.user.segment.rtbSegment`. For the rest, 0.
For more information about creating variables, see [variables](/for-analyst/variables).

### <a name="useCustomDeduplication"></a>Use custom deduplication
------
Deduplication is an attribution setting that can be sent to RTB House along with the order. By default, this feature is disabled. This means that RTB House uses its own attribution model to set up its own machine learning algorithms.
> The attribution model is the rule by which the value of the conversion/(order value) is redistributed between all sources of traffic that led the user to the site before buying. There is a large number of [attribution models](https://support.google.com/analytics/answer/1665189?hl=en), the most common of these is last non-direct click. When using this model of attribution - 100% of the conversion value will be assigned to the last indirect source of traffic. For example, if a user first came to the site from a search, then from RTB House, then typed the URL in the browser - the whole value of the order will be assigned to the source of "RTB House".

If you use "own deduplication", SegmentStream will remember the source (the value of the GET parameter utm_source). If this value is "rtb-house", the transaction will be attributed to the RTB House source.

### <a name="correctnessOfIntegrationSetup"></a>Checking the correctness of the integration setup
------
After configuring the integration in the SegmentStream interface, but before PUBLICATION - go to the site in test_mode, [go through the conversion funnel and check for errors](/for-analyst/integrations#testing).
If there are no errors - publish the current version.
