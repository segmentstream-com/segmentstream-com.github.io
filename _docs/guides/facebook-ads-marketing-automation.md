---
layout: page
section: guides
navigation_title: "Facebook Ads marketing automation"
title: "Facebook Ads marketing automation"
date: 2021-03-30
---

When you run ads with Facebook Ads, you may want to see whether clicks on your ad led a customer to take a certain action, such as a purchase on your website, calling your business, or downloading an app.

Most of the users use [Facebook Pixel](https://www.facebook.com/business/help/952192354843755?id=1205376682832142){:target="_blank"} to track online conversions from the website.

Unfortunately, with this solution you are limited to default [Facebook attribution models](https://www.facebook.com/business/help/370704083280490?id=399393560487908){:target="_blank"} which don't support deduplication with other channels and have other limitations.

Also, some businesses might find themselves in a situation where there is not enough final conversions to properly optimise campaigns due to the "Limited Learning" problem:

<img src="/img/guides/facebook-ads-marketing-automation/facebook-ads-4.png" alt="Facebook Ads - Campaign Objective" width="400" style="display:block"/> 

In this case you will be able to replace final conversions with a **SegmentStream Score** which provides much more signals for Facebook algorithms to optimise faster.

![](/img/guides/facebook-ads-marketing-automation/facebook-ads-5.png)

This guide explains how to use SegmentStream's external attribution to automate Facebook Ads campaign bidding and budget allocation strategies as well as how to solve "Limited Learning" problem if you don't have enough conversions.

## Before you begin

- You should be subscribed to SegmentStream **enterprise plan** to use this feature.
- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).
- Make sure you have the [Facebook pixel correctly implemented in your website](https://www.facebook.com/business/help/952192354843755?id=1205376682832142){:target="blank"}. We recommend that you use the same pixel for your browser and server events.
- Make sure you website domain name is [verified by Facebook](https://developers.facebook.com/docs/sharing/domain-verification){:target="blank"} to enable [Aggregated Event Measurement](https://www.facebook.com/business/help/721422165168355/).

## Prepare data for import

Firstly, you need to make sure that an attribution table with the following format is prepared on a daily basis inside your Google BigQuery:

Field name|Type|Mode
--- | --- | ---
date | DATE | REQUIRED
fbc | STRING | REQUIRED
fbp | STRING | OPTIONAL
event_time | TIMESTAMP | REQUIRED
event_id | STRING | REQUIRED
value | FLOAT | OPTIONAL
currency | STRING | REQUIRED if `value` is used

Where:
- `date` - the date when conversion happened (good to use for partitioning);
- `fbc` - Facebook click identifier. You can find more information about ths paramer [here](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/){:target="blank"};
- `fbp` - Facebook Pixel cookie id. Sending this parameter may increase conversion stitching accuracy. You can find more information about ths paramer [here](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/){:target="blank"};
- `event_time` - exact time of the conversion with a timezone;
- `event_id` - a unique event identifier responsible for the deduplication (i.e. session_id, hit_id or other unique identificator);
- `value` - how much value (i.e. revenue/profit) is attributed to the click;
- `currency` - the currency of the attributed conversion value in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217){:target="blank"} format;

> If you use SegmentSteam's AI-driven multi-touch attribution - this table will be prepared for you by the implementation team.

## Connecting Facebook Ads to SegmentStream

1. Inside the admin panel go to **Data Destinations** page and click **Add Data Destination**.
2. Choose **Facebook** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Enter you **Facebook Pixel ID** (can be found inside the [Facebook Events Manager](https://www.facebook.com/events_manager2/){:target="blank"})
5. Enter the name of the BigQuery table with your attribution into **BigQuery source table name** (if you are using SegmentStream's AI-driven multi-touch attribution - ask the name from your implementation manager).
6. Enter **Event name** of your conversion (i.e. "Purchase Score").
7. Click **Save**.

Once connected, make sure you've started receiving server-side SegmenetStrem events inside the Facebook Event Manager:
![](/img/guides/facebook-ads-marketing-automation/facebook-ads-6.png)

> **Note!** It might take up to 24 hours before you see the first batch of events from SegmentStream.

## Creating a custom conversion inside the Businss Account

1. Go to [Facebook Events Manager](https://www.facebook.com/events_manager2/){:target="blank"} and choose your Facebook Business Account (make sure you choose a Business Account, not an Ad Account).
2. Click on **Custom conversions** menu item.
3. Click **Create Custom Conversion**:
   ![](/img/guides/facebook-ads-marketing-automation/facebook-ads-7.png)
4. Set conversion **Name** (i.e. "Purchase Score").
5. In **Data Source** select your Facebook Pixel.
6. In **Conversion Event** field select the event you've defined inside the SegmentStream admin panel (it might take up to 24 hours for the event to appear after connecting SegmentStream to Facebook).
7. Click **Create**.

## Sharing a custom conversion to your Ad Account

1. Expand your newly created custom conversion and click **Share**.
2. Select **Share with an Ad Account** and select your Ad account.
![](/img/guides/facebook-ads-marketing-automation/facebook-ads-8.png)

## Aggregated event measurement setup

Follow [this guide](https://www.facebook.com/business/help/422408905612648){:target="blank"} to setup **Aggregated Event Measurement** for the event you've defined inside the SegmentStream admin panel.

Make sure that SegmentStream event has the highest possible priority right blow your main convrsion event.

## Updating campaign settings

1. Select the campaign you would like to optimize based on the imported conversions.
2. Make sure that **Campaign Objective** is **Conversions**:
  <img src="/img/guides/facebook-ads-marketing-automation/facebook-ads-1.png" alt="Facebook Ads - Campaign Objective" width="600" style="display:block"/>
3. In the **Campaign Bid Strategy** section select either **Lowest cost** or **Cost cap** depending on whether you would like to limit your campaign by a daily budget or maximal CPA:
  <img src="/img/guides/facebook-ads-marketing-automation/facebook-ads-2.png" alt="Facebook Ads - Bid Strategy" width="600" style="display:block"/>
  Alternatively, you can use **Minimum ROAS** strategy if you want to optimise for ROAS.
  > **Note!** We suggest avoid using **Bid cap** strategy as it will not bring any benefit in  terms of the optimisation for imported conversions.
4. Select your recently created **Custom Conversion** for a **Conversion Event** field inside the **Conversion** section for each **Ad Set**.
5. Adjust your **Optimization & Delivery** settings for each **Ad Set** to match your selected **Campaign Bid Strategy**.
6. **Save** your campaign.

The setup is complete. Now Facebook Ads will start optimizing your campaign based on the conversions you are importing using SegmentStream.