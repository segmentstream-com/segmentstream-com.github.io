---
layout: page
section: datasources
navigation_title: "Yandex.Market"
title: "Yandex.Market data source"
order: 10
date: 2020-08-18
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Yandex.Market** from the list.
3. Click **Authenticate with Yandex** and go through the authentication flow.
4. Select shops which cost data you would like to import or select **All shops** option to import cost data from all the shops your account has access to.
5. Enable required reports.
6. Click **Save**.

## Available reports

SegmentStream allows to import the following reports from Yandex.Market.

### Campaign performance

#### Table name
**`yandexMarketCampaignStatistics_{SHOP_NAME}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
offer_id | STRING | REQUIRED
spending | FLOAT | REQUIRED
clicks | INTEGER | REQUIRED
campaign_name | STRING | REQUIRED

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`yandexMarketCosts_{SHOP_NAME}_{YYYYMMDD}`**

### Table schema

Field name| Type | Mode
--- | --- | ---
date | DATE | NULLABLE
utmSource | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmTerm | STRING | NULLABLE
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
currency | STRING | NULLABLE

### Excluding VAT

By default, Yandex.Market cost data includes VAT when you account currency is RUB. To exclude VAT from imported costs you should switch on **Exclude VAT** option and define the **VAT rate** to be excluded.

## Historical data import limits

The maximum period for which historical data is available on the Yandex.Market side is 30 days.
