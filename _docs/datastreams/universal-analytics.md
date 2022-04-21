---
layout: page
section: datastreams
navigation_title: "Universal Analytics"
title: "Universal Analytics Data Source"
order: 1
date: 2021-03-05
---

**Universal Analytics Data Source** allows collecting hit-level non-sampled data with unlimited dimensions and metrics into your Google BigQuery account using your existing Google Analytics tracker even if you use a free version of Google Analytics.

## Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).
- Make sure that Google Analytics tracker already implemented in website.
- You subscribed to SegmentStream **enterprise plan**

## How it works?

After simple integration with Google Tag Manager or javascript on your website, SegmentStream will start listening all Google Analytics events already implemented on the website and push same events into Google BigQuery in real-time.

## Getting started

1. Inside the admin panel go to **Data Sources** and click **Add data source**.
2. Choose **Universal Analytics** from the list.
3. Define the Google BigQuery **Destination table** where collected data will be stored.
4. Select the **Integration type** that suits you.
5. Copy **Snippet** code.
6. Click **Save** and follow the further instructions to integrate the code.

## Integrating using Google Tag Manager (GTM)

Choose this method if your Google Analytics is integrated using Google Tag Manager.

1. In the **Variables** section click **New** to create a customTask variable.

    ![GTM Setup Step 1](/img/datastreams/ua-gtm-1.png)

2. Click on the **Variable Configuration** > **Custom JavaScript** in *Page Variables* section:

    ![GTM Setup Step 2](/img/datastreams/ua-gtm-2.png)

3. Set **SegmentStream** as a Name of the variable. Paste code from the Data Source settings modal to **Custom Javascript** field. Click Save.

    ![GTM Setup Step 3](/img/datastreams/ua-gtm-3.png)

4. Add this variable as your Gooogle Analytics Settings `customTask` field

    ![GTM Setup Step 4.1](/img/datastreams/ua-gtm-4.png?v2)

    In case you enabled have **Enable overriding settings in this tag** option switched on, you would need to define `customTask` field in **each** of your Universal Analytics tags.

    ![GTM Setup Step 4.2](/img/datastreams/ua-gtm-4-2.png)

    > **Important!** You can't use more than one customTask in one GTM tag. The function of each new customTask overrides the function of the previous one. If it's required to use several customTask functions in a single tag, you should join their JavaScript code within a single customTask using [this guide](/guides/combining-custom-tasks){:target="blanks"}.



5. **Save** the tag and **Publish** the container.

## Integration with analytics.js (website code)

Choose this method if your Google Analytics integrated with website source code.

Add **Snippet** from **analytics.js** type to the website source code on each page after the command ```ga('create', 'UA-XXXXX-Y', 'auto'); ``` and before ```ga('send', 'pageview');```:

    ga('create', 'UA-XXXXX-Y', 'auto');

    <% snippet code from admin panel %>

    ga('send', 'pageview');

## Check if integration works correctly

1. Go to your website, open **console** > **network** and filter results with *track.segmentstream* endpoint. If snippet integrated correctly you will see requests:
    ![GTM Setup](/img/datastreams/datastreams-check.png)

2. Go to your Google BigQuery account and check if table with name from **Destination table** appears in your DataSet.

## Sending hits using Measurement Protocol

Sometimes you might need to send some hits using [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide){:target=blank}. For example - transactions or refunds.

To achieve this you just need to send the same request you send to your Google Anlaytics to your SegmentStream data stream endpoint.

For example:

```
POST https://track.segmentstream.com/ds/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
// Use proper endpoint from the admin panel

v=1                                   // Version.
&tid=UA-XXXXX-Y                       // Tracking ID / Property ID.
&cid=555                              // Anonymous Client ID.
&t=pageview                           // Pageview hit type.
&dh=mydemo.com                        // Document hostname.
&dp=/receipt                          // Page.
&dt=Receipt%20Page                    // Title.

&ti=T12345                            // Transaction ID. Required.
&ta=Google%20Store%20-%20Online       // Affiliation.
&tr=37.39                             // Revenue.
&tt=2.85                              // Tax.
&ts=5.34                              // Shipping.
&tcc=SUMMER2013                       // Transaction coupon.

&pa=purchase                          // Product action (purchase). Required.
&pr1id=P12345                         // Product 1 ID. Either ID or name must be set.
&pr1nm=Android%20Warhol%20T-Shirt     // Product 1 name. Either ID or name must be set.
&pr1ca=Apparel                        // Product 1 category.
&pr1br=Google                         // Product 1 brand.
&pr1va=Black                          // Product 1 variant.
&pr1ps=1                              // Product 1 position.
```

## Table SCHEMA

Field name|Type|Mode|Description
---|---|---|---
hit_id|string|Nullable|Unique hit identifier
ip|string| Nullable|Visitor's IP address
received_at|integer|Nullable|Hit time in milliseconds passed since January 1, 1970
ssuid|string|Nullable|Cross-domain unique user's identifier
payload|string|Nullable|Raw hit payload
cookie|record|Repeated|1st-party cookies of major advertising platforms
cookie.name|string|Nullable|Cookie name
cookie.value|string|Nullable|Cooke value
date|date|Nullable|**partitition field**,	Date of the hit with UTC offset
user_agent|string|Nullable|Visitor's device userAgent

>By default, SegmentStream collects the following cookies alongside with the hit data: `_ym_uid`, `_ga`, `ssaid`, `_fbp`, `_fbc`, `tmr_lvid`. The list of cookies can be expanded by request.
