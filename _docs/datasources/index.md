---
layout: page
section: datasources
navigation_title: "Overview"
title: "Data Sources overview"
order: 0
date: 2020-06-24
---

## Available data sources

To set up the automatic data import into own Google BigQuery data warehouse you need to connect at least one data source.

There following built-in data sources are available for the Google BigQuery projects withing the SegmentStream platform:

### Advertising

* [Google Ads](/datasources/google-ads)
* [Facebook](/datasources/facebook)
* [Microsoft Ads (former Bing)](/datasources/microsoft-ads)
* [Criteo](/datasources/criteo)
* [RTB House](/datasources/rtb-house)
* [Yandex.Direct](/datasources/yandex-direct)
* [Yandex.Market](/datasources/yandex-market)
* [myTarget](/datasources/mytarget)
* [VK](/datasources/vk)
* [Recreativ](/datasources/recreativ)

### Analytics

* [Google Analytics](/datasources/google-analytics)
* [AppMetrica](/datasources/appmetrica)
* [Calltouch](/datasources/calltouch)

### CRM
* [amoCRM](/datasources/amocrm)
* [retailCRM](/datasources/retailcrm)

### Other
* [Fixer (currency exchange rates)](/datasources/fixer)
* [Google Sheets](/datasources/google-sheets)
* [JSON feed](/datasource/json-feed)

## Connecting data source

To connect a data source you should follow the following steps:

1. Click **Add Data Source** button:
![Add BigQuery data source](/img/google-analytics/ga-add-data-source.png)

2. Select the ad patforrm you would like to import cost data from:
![Select BigQuery data souce](/img/google-analytics/ga-select-data-source.png)

3. Go through the authentication flow depending on the selected data source:
![Authenticate BigQuery data source](/img/google-analytics/ga-auth-data-source.png)

4. Apply additional transformation settings following the instructions in the appropriate documentation of the specific data source.

## Historical data import

In order to import historical cost data, please contact our support team. SegmentStream allows to backfill historical data depending on your pricing plan type:

* For monthly subscriptions we can backfill up to 30 days of historical data.
* For annual subscriptions we can backfill up to 6 months of historical data (depending on ad platforms allowance).
