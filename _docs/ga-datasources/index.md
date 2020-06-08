---
layout: page
section: ga-datasources
title: "Overview"
order: 0
date: 2020-06-08
---

## Available data sources

To set up the automatic cost data import you need to connect at least one data source.

There following built-in data source are available for the Google Analytics projects withing the SegmentStream platform:

* [Facebook](/ga-datasources/facebook)
* [Criteo](/ga-datasource/criteo)
* [RTB House](/ga-datasources/rtb-house)
* [Yandex.Direct](/ga-datasources/yandex-direct)
* [Yandex.Market](/ga-datasources/yandex-market)
* [myTarget](/ga-datasources/mytarget)
* [VK](/ga-datasources/vk)

## Connecting data source

To connect a data source you should follow the following steps:

1. Click **Add Data Source** button:
![Add Google Analytics cost import data source](/img/google-analytics/ga-add-data-source.png)

2. Select the ad patforrm you would like to import cost data from:
![Select Google Analytics data souce](/img/google-analytics/ga-select-data-source.png)

3. Go through the authentication flow depending on the selected data source:
![Authenticate Google Analytics data source](/img/google-analytics/ga-auth-data-source.png)

4. Apply additional transformation settings following the instructions in the appropriate documentation of the specific data source.

## Google Ads data source

There is no Google Ads data source inside the SegmentStream platform as Google Analytics has a built-in integration for the Google Ads costs import. Please, read moe about this feature using the following links:
* [Link Google Analytics and Google Ads accounts](https://support.google.com/google-ads/answer/1704341?visit_id=637235865015177230-592091607&rd=1){:target="_blank"}
* [Link Google Analytics and a Google Ads manager account (MCC)](https://support.google.com/google-ads/answer/6209127?hl=en&ref_topic=3121765){:target="_blank"}

## VAT handling

As far as Google Analytics imports all cost data from Google Ads without VAT, SegmentStream follows the same logic for all other data sources to avoid cost data VAT inconsistency.

Nevertheless, Yandex.Market and VK data sources require additional settings to subtract VAT from the cost data by specifying the percentage of VAT to exclude.

If you don't exclude VAT for these services while importing cost data, you'll end up overestimating the costs of your VK and Yandex.Market campaigns. As a result, you won't be able to make correct conclusions on their efficiency comparing to other channels.

> **Note:** currently, there is no technical possibility to add VAT for the imported costs. If you want to analyze data with VAT included, you can create a custom report in Google Analytics adding [calculated metrics](https://support.google.com/analytics/answer/6121409?hl=en){:target="_blank"} to it.
