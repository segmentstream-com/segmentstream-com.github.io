---
layout: page
section: ga-datasources
navigation_title: "Overview"
title: "Costs Data Sources overview"
order: 0
date: 2020-06-19
---

## Available data sources

To set up the automatic cost data import you need to connect at least one data source.

There following built-in data sources are available for the Google Analytics projects withing the SegmentStream platform:

* [Facebook](/datasources/facebook)
* [Criteo](/datasources/criteo)
* [RTB House](/datasources/rtb-house)
* [Yandex.Direct](/datasources/yandex-direct)
* [Yandex.Market](/datasources/yandex-market)
* [myTarget](/datasources/mytarget)
* [VK](/datasources/vk)
* [Microsoft Advertising](/datasources/microsoft-ads)
* [LinkedIn](/datasources/linkedin)
* [Quora](/datasources/quora)
* [TikTok](/datasources/tiktok)
* [Google Sheets](/datasources/google-sheets)
* [Twitter](/datasources/twitter)
* [Reddit](/datasources/reddit)
* [Snapchat](/datasources/snapchat)

## Connecting data source

To connect a data source you should follow the following steps:

1. Click **Add Data Source** button:
![Add Google Analytics cost import data source](/img/google-analytics/ga-add-data-source.png)

2. Select the ad patforrm you would like to import cost data from:
![Select Google Analytics data souce](/img/google-analytics/ga-select-data-source.png)

3. Go through the authentication flow depending on the selected data source:
![Authenticate Google Analytics data source](/img/google-analytics/ga-auth-data-source.png)

4. Apply additional transformation settings following the instructions in the appropriate documentation of the specific data source.

## Google Ads cost data import

There is no Google Ads data source inside the SegmentStream platform as Google Analytics has a built-in integration for the Google Ads costs import. Please, read moe about this feature using the following links:
* [Link Google Analytics and Google Ads accounts](https://support.google.com/google-ads/answer/1704341?visit_id=637235865015177230-592091607&rd=1){:target="_blank"}
* [Link Google Analytics and a Google Ads manager account (MCC)](https://support.google.com/google-ads/answer/6209127?hl=en&ref_topic=3121765){:target="_blank"}

## Currency conversion

SegmentStream automatically converts all currencies to the one used for your Google Analytics view. Note that SegmentStream will use the first view in the list to determine the cost data currency. This currency will be used to convert all cost data for all selected views.

You can always change the currency used to display ad costs in Google Analytics. To do so, [change the currency setting](https://support.google.com/analytics/answer/1010249){:target="_blank"} for the Google Analytics view connected to the data set with cost data.

In this case, the new currency setting will be applied only to the data SegmentStream will import to Google Analytics after you've changed the setting. The currency won't change for the previously imported data. However, you can contact our support team to run a backfill to update previously imported data.

## VAT handling

As far as Google Analytics imports all cost data from Google Ads without VAT, SegmentStream follows the same logic for all other data sources to avoid cost data VAT inconsistency.

Nevertheless, [Yandex.Market](/datasources/yandex-market){:target="_blank"} and [VK](/datasources/vk){:target="_blank"} data sources require additional settings to subtract VAT from the cost data by specifying the percentage of VAT to exclude.

If you don't exclude VAT for these services while importing cost data, you'll end up overestimating the costs of your VK and Yandex.Market campaigns. As a result, you won't be able to make correct conclusions on their efficiency comparing to other channels.

> **Note!** Currently, there is no technical possibility to add VAT for the imported costs. If you want to analyze data with VAT included, you can create a custom report in Google Analytics adding [calculated metrics](https://support.google.com/analytics/answer/6121409?hl=en){:target="_blank"} to it.

## Historical data import

In order to import historical cost data, please contact our support team. SegmentStream allows to backfill historical data depending on your pricing plan type:

* For monthly subscriptions we can backfill up to 30 days of historical data.
* For annual subscriptions we can backfill up to 6 months of historical data (depending on ad platforms allowance).
