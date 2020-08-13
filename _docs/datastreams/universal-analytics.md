---
layout: page
section: datastreams
navigation_title: "Universal Analytics"
title: "Universal Analytics Data Streams"
order: 1
date: 2020-08-12
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

2. Click on the **Variable Configuration** > **Custom JavaScript** under *Page Variables* section: 

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

4. Enter **customTask** as Field name and **{{SegmentStream}}** as Value

![GTM Setup](/img/datastreams/ua-gtm-7.png)

> Repeat this operation with each tag responsible to sending data to Universal Analytics to collect full data.

5. Save the tag and publish the container.

## Integration with Analytics.js (site code)

Choose this method if your Google Analytics integrated with website source code.

Add **Snippet** from **analytics.js** type to the website source code on each page of your website with a Google Analytics:

1. After the Google Analytics initialization command (ga('create', 'UA-... ); line) add:

    ```
    ga('require', 'SegmentStream');
    ```

2. Add snippet after the line 
    ```
    ga('send', 'pageview');
    ```


## Check if integration works correctly

1. Go to your website, open **console** > **network** and filter results with *track.segmentstream* endpoint. If snippet integrated correctly you will see requests:

2. Go to your Google BigQuery account and check if table with name from **Destination table** appears in your DataSet.