---
layout: page
section: guides
navigation_title: "Google Ads marketing automation"
title: "Google Ads marketing automation"
date: 2021-02-25
---

When you run ads with Google Ads, you may want to see whether clicks on your ad led a customer to take a certain action, such as a purchase on your website, calling your business, or downloading an app.

Most of the users use Google Analytics to [import conversions into Google Ads](https://support.google.com/google-ads/answer/2375435https://support.google.com/google-ads/answer/2375435){:target="_blank"}. Alternatively, it is possible to [deploy Google Ads tracker on a website](https://support.google.com/google-ads/answer/1722054){:target="_blank"} to track online conversions without Google Analytics.

Unfortunately, with both variants you are limited to default [Google Ads attribution models](https://support.google.com/google-ads/answer/6259715){:target="_blank"}.

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
7. Enter  **Conversion name** (for example, "Purchase - SegmentStream" or "Lead - SegmentStream").
8. Choose how to **Value** and how to **Count** conversions depending on your attribution model. For SegmentStream's AI-driven multi-touch attribution you should use the values as follows:
![Google Ads - Creating Conversion](/img/guides/google-ads-marketing-automation/google-ads-4.png)
9. Choose **Click-through conversion window** depending on your attribution window. Usually **30 days**.
10. Uncheck **Include in 'Conversion'** for now.
11. For the **Attribution model** choose **External attribution** and click **CREATE AND CONTINUE**:
![Google Ads - External Attribution](/img/guides/google-ads-marketing-automation/google-ads-5.png)

> Note! Please, make sure you've enabled a [cross-account conversion tracking](https://support.google.com/google-ads/answer/3030657){:target="blank"} if you created a conversion action inside the MCC account and would like to use it across you accounts.

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
3. In the **Bidding** section select **Target CPA** strategy and define your **Target CPA**:
![Google Ads - Target CPA](/img/guides/google-ads-marketing-automation/google-ads-6.png)
4. Expand the **Additional settings** section and then **Conversions** section.
5. Select **Choose conversion actions for this campaign** and select the conversion you've created earlier in this guide.
6. Click **SAVE**.

The setup is complete. Now Google Ads will start optimizing your campaign based on the external attribution you are importing using SegmentStream.

## Optimisation testing

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

Once the A/B-test is finished you will be able to compare CoS/ROAS across all channels for users with `ss_variation=0` and `ss_variation=1`. This will give understanding which attribution works better within one device in a multi-touch journey but unfortunately will not give understanding about multi-device interactions (an this is the main advantage of the AI-driven attribution). Nevertheless, if AI-driven attribution wins even within one device this is a clear sign it will work even better within cross-device customer journeys.
