---
layout: page
section: guides
navigation_title: "Google Ads marketing automation"
title: "Google Ads marketing automation"
date: 2021-01-18
---

When you run ads with Google Ads, you may want to see whether clicks on your ad led a customer to take a certain action, such as a purchase on your website, calling your business, or downloading an app.

Most of the users use Google Analytics to [import conversions into Google Ads](https://support.google.com/google-ads/answer/2375435https://support.google.com/google-ads/answer/2375435){:target=blank}. Alternatively, it is possible to [deploy Google Ads tracker on a website](https://support.google.com/google-ads/answer/1722054){:target=blank} to track online conversions without Google Analytics.

Unfortunately, with both variants you are limited to default [Google Ads attribution models](https://support.google.com/google-ads/answer/6259715){:target=blank}.

This guide explains how to use SegmentStream's or any other external attribution to automate Google Ads campaign bidding and budget allocation strategies.

## Before you begin

- You should be subscribed to SegmentStream **enterprise plan** to use this feature.
- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).

## Prepare data for import

Firstly, you need to make sure that an attribution table with the following format is prepared on a daily basis inside your Google BigQuery:

Field name|Type|Mode
--- | --- | ---
date | DATE | REQUIRED
gclid | STRING | REQUIRED
external_attribution_credit | FLOAT | REQUIRED
conversion_date_time | TIMESTAMP | REQUIRED

Where:
- `date` - the date when conversion happened (good to use for partitioning);
- `gclid` - Google click identifier (is sent in a `gclid=xxxxx` format within the query string);
- `external_attribution_credit` - how much credit you attribute to the click (value from from 0 to 1);
- `conversion_date_time` - exact time of the conversion with a timezone;

> If you use SegmentSteam's AI-driven multi-touch attribution - this table will be prepared for you by the implementation team.

## Create conversion action in Google Ads

1. Sign in to your Google Ads account.
2. Click the **TOOLS & SETTINGS**  in the upper right corner of your account.
![Google Ads - Tools&Settings](/img/guides/google-ads-marketing-automation/google-ads-1.png)
3. Under **Measurement**, click **Conversions**.
4. Click *"+"* icon to add a new conversion:
![Google Ads - Add Conversion](/img/guides/google-ads-marketing-automation/google-ads-2.png)
5. Select **Import** -> **Other data sources or CRM** -> **Track conversions from clicks** and click **CONTINUE**:
![Google Ads - Import Conversions](/img/guides/google-ads-marketing-automation/google-ads-3.png)
6. Choose conversion **Category** depending on your business.
7. Enter  **Conversion name**.
8. Choose how to **Value** and how to **Count** conversions depending on your attribution model. For SegmentStream's AI-driven multi-touch attribution you should use the values as follows:
![Google Ads - Creating Conversion](/img/guides/google-ads-marketing-automation/google-ads-4.png)
9. Choose **Click-through conversion window** depending on your attribution window. Usually **30 days**.
10. Uncheck **Include in 'Conversion'** for now.
11. For the **Attribution model** choose **External attribution** and click **CREATE AND CONTINUE**:
![Google Ads - External Attribution](/img/guides/google-ads-marketing-automation/google-ads-5.png)

## Connecting Google Ads to SegmentStream

1. Inside the admin panel go to **Data Destinations ▸ Google Ads** page and click **Add Data Destination**.
2. Choose **Google Ads** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Select [manager](#manager-advertising-accounts) or individual Google Ads advertising accounts you would like to connect.
5. Select the **Conversion** you've created in a previous section of this tutorial.
6. Enter the name of the BigQuery table with your attribution into **BigQuery source table name** (if you are using SegmentStream's AI-driven multi-touch attribution - ask the name from your implementation manager).
7. Click **Save**.

## Updating campaign settings

1. Select the campaign you would like to optimize based on the external attribution you've just imported.
2. Select **Setting**.
3. In the **Bidding** section select that you would like to optimize for **Conversion**, check **Set a target cost per action** and define your **Target CPA**
4. Expand the **Additional settings** section and then **Conversions** section.
5. Select **Choose conversion actions for this campaign** and select the conversion you've created earlier in this guide.
6. Click **SAVE**.

The setup is complete. Now Google Ads will start optimizing your campaign based on the external attribution you are importing using SegmentStream.
