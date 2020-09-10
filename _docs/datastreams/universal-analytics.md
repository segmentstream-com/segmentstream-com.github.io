---
layout: page
section: datastreams
navigation_title: "Universal Analytics"
title: "Universal Analytics Data Stream"
order: 1
date: 2020-08-19
---

**Universal Analytics Data Stream** allows to collect raw hit-level non-sampled data into your Google BigQuery account. 

## Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).
- Make sure that Google Analytics tracker already implemented in website.
- You subscribed to SegmentStream **enterprise plan**

## How it works?

After simple integration with Google Tag Manager or Source Code SegmentStream will start listening all Google Analytics events, already implemented on website, and push same events into Google BigQuery in real-time.

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Streams** page and click **Add data stream**.
2. Choose **Universal Analytics** from the list.
3. Define Google BigQuery **Destination table** where collected data will be stored.
4. Define **UTC offset** from the list.
5. Select **Integration type**. There are 2 types: GTM or Analytics.js
6. Copy **Snippet** code.
7. Click **Save** and follow the further instructions to integrate code.

## Integration with Google Tag Manager (GTM)

Choose this method if your Google Analytics integrated with Google Tag Manager.

### Create Custom JavaScript Variable

1. In the **Variables** section click **New** to create a customTask variable.

    ![GTM Setup](/img/datastreams/ua-gtm-1.png)

2. Click on the **Variable Configuration** > **Custom JavaScript** in *Page Variables* section: 

    ![GTM Setup](/img/datastreams/ua-gtm-2.png)

3. Set **SegmentStream** as a Name of the variable. Paste code from Data Streams settings modal to **Custom Javascript** field. Click Save.

    ![GTM Setup](/img/datastreams/ua-gtm-3.png)

### Add variable to the each of the Universal Analytics tags

1. Open Universal Analytics tag

    ![GTM Setup](/img/datastreams/ua-gtm-4.png)

2. Click on **Tag Configuration** > check **Enable overriding settings in this tag**

    ![GTM Setup](/img/datastreams/ua-gtm-5.png)

3. Go to **More settings** > **Fields to set** and click **Add Field** button.

    ![GTM Setup](/img/datastreams/ua-gtm-6.png)

4. Enter ```customTask``` as Field name and {% raw %}```{{SegmentStream}}```{% endraw %} as Value

    ![GTM Setup](/img/datastreams/ua-gtm-7.png)

    > You can't use more than one customTask in one GTM tag. The function of each new customTask overrides the function of the previous one. If it's required to use several customTask functions in a single tag, you should join their JavaScript code within a single customTask.

5. Save the tag and publish the container.

    > It is important to add the customTask field to all your Universal Analytics tags. For example, event tags, conversion tracking tags etc.

## Integration with Analytics.js (site code)

Choose this method if your Google Analytics integrated with website source code.

Add **Snippet** from **analytics.js** type to the website source code on each page after the command ```ga('create', 'UA-XXXXX-Y', 'auto'); ``` and before ```ga('send', 'pageview');```:

    ga('create', 'UA-XXXXX-Y', 'auto');

    <% snippet code from admin panel %>
    
    ga('send', 'pageview');


## Check if integration works correctly

1. Go to your website, open **console** > **network** and filter results with *track.segmentstream* endpoint. If snippet integrated correctly you will see requests:
    ![GTM Setup](/img/datastreams/datastreams-check.png)

2. Go to your Google BigQuery account and check if table with name from **Destination table** appears in your DataSet.

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

>Default cookies: _ym_uid, _ga, ssaid, _fbp, _fbc, tmr_lvid. Can be expanded by request to support@segmentstream.com