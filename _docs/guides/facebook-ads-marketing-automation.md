---
layout: page
section: guides
navigation_title: "Facebook Ads marketing automation"
title: "Facebook Ads marketing automation"
date: 2021-03-09
---

When you run ads with Facebook Ads, you may want to see whether clicks on your ad led a customer to take a certain action, such as a purchase on your website, calling your business, or downloading an app.

Most of the users use [Facebook Pixel](https://www.facebook.com/business/help/952192354843755?id=1205376682832142){:target="_blank"} to track online conversions from the website.

Unfortunately, with this solution you are limited to default [Facebook attribution models](https://www.facebook.com/business/help/370704083280490?id=399393560487908){:target="_blank"}.

This guide explains how to use SegmentStream's or any other external attribution to automate Facebook Ads campaign bidding and budget allocation strategies.

## Before you begin

- You should be subscribed to SegmentStream **enterprise plan** to use this feature.
- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).
- Make sure you have the [Facebook pixel correctly implemented in your website](https://www.facebook.com/business/help/952192354843755?id=1205376682832142){:target="blank"}. We recommend that you use the same pixel for your browser and server events.

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
4. Enter you **Facebook Pixel ID** (can be found inside the **Facebook Ads Panel ▸ Event Manager**)
5. Enter the name of the BigQuery table with your attribution into **BigQuery source table name** (if you are using SegmentStream's AI-driven multi-touch attribution - ask the name from your implementation manager).
6. Enter **Event name** of your conversion (i.e. "Purchase ML").
7. Click **Save**.

## Updating campaign settings

1. Select the campaign you would like to optimize based on the imported conversions.
2. Make sure that **Campaign Objective** is **Conversions**:
<img src="/img/guides/facebook-ads-marketing-automation/facebook-ads-1.png" alt="Facebook Ads - Campaign Objective" width="600" style="display:block"/>
3. In the **Campaign Bid Strategy** section select either **Lowest cost** or **Cost cap** depending on whether you would like to limit your campaign by a daily budget or maximal CPA:
<img src="/img/guides/facebook-ads-marketing-automation/facebook-ads-2.png" alt="Facebook Ads - Bid Strategy" width="600" style="display:block"/>
Alternatively, you can use **Minimum ROAS** strategy if you want to optimise for ROAS.
> **Note!** We suggest avoid using **Bid cap** strategy as it will not bring any benefit in  terms of the optimisation for imported conversions.
1. Adjust your **Optimization & Delivery** settings for each **Ad Set** to match your selected **Campaign Bid Strategy**.
2. **Save** your campaign.

The setup is complete. Now Facebook Ads will start optimizing your campaign based on the conversions you are importing using SegmentStream.

<!-- ## Optimisation testing

Attribution testing is quite tricky, especially when it comes to cross-device multi-channel interactions. Nevertheless, there are some methodologies that allow to at least implement cookie-based multi-touch testing using built-in Google Ads experiments and Google BigQuery.

### Things to note about experiments
* Experiments are only available for Search and Display Network campaigns. You won’t be able to create an experiment for Video, App or Shopping campaigns.
* You can schedule up to five experiments for a campaign, but you can only run one experiment at a time.
* It may take some time for your experiment’s ads to complete the review process and to start running, depending on the size of your original campaign. You may want to schedule your experiment to begin in the future to prevent it from starting before your ads have been reviewed.
* If you use audience lists, you should have at least 10,000 users in the list to run an experiment. If you have less users than that, your results may be less accurate. 

> If you make changes to your original campaign, these changes won’t be reflected in your experiment. Making changes to either your original campaign or experiment while your experiment is running may make it harder to interpret your results.

### Set up an experiment

1. Sign in to your [Google Ads account](https://ads.google.com/){:target="blank"}.
2. From the page menu on the left, click **Drafts & experiments**, then click **Campaign Experiments** at the top of the page.
3. Click the **"+"** button.
4. Click Select draft, and select the draft you want to turn into an experiment.
5. Enter a name for your experiment. Your experiment shouldn’t share the same name as your campaigns and other experiments.
6. Select a start date for your experiment.
7. If you’d like to manually end your experiment, select **None**. Otherwise, select an end date for your experiment.
8. Enter the percentage of the original campaign’s budget that you’d like to allocate to your experiment.
9. For Search campaigns, under “Advanced options”, choose **Cookie-based** experiment split option. It means users may see only one version of your campaign, regardless of how many times they search. This can help ensure that other factors don’t impact your results, and will give you more accurate data.
10. Click Save to finish creating the experiment.
11. Once you create your experiment, you can find your experiments listed alongside your regular campaigns, as well as in your “Campaign experiments” page.
12. Add additional URL parameter `ss_variation=0` to your original campaign URL and `ss_variation=1` to the experiment campaign either using the **Final URL suffix** or **Tracking template**. This parameter will help to filter traffic initiated by each campaign inside the Google BigQuery.
13. Make sure you've changed a bidding strategy in the experiment campaign to tCPA or tROAS as described [here](  #updating-campaign-settings).

> **Important note!** The whole analysis will happen inside the Google BigQuery instead of Google Ads because you will be testing different attributions rather than different bidding strategies. Also, you would be testing multi-touch interactions across all possible channels, not only Google Ads interactions.

Once the A/B-test is finished you will be able to compare CoS/ROAS across all channels for users with `ss_variation=0` and `ss_variation=1`. This will give understanding which attribution works better within one device in a multi-touch journey but unfortunately will not give understanding about multi-device interactions (an this is the main advantage of the AI-driven attribution). Nevertheless, if AI-driven attribution wins even within one device this is a clear sign it will work even better within cross-device customer journeys. --> 
