---
layout: page
section: datasources
navigation_title: "Twitter"
title: "Twitter data source"
order: 16
date: 2020-10-02
---

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Sources** page and click **Add data source**.
2. Choose **Twitter** from the list.
3. Click **Click to authenticate with Twitter** and go through the authentication flow.
4. Select accounts which cost data you would like to import.
5. Click **Save**.

## Additional transformation settings

SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`twitterCosts_{ACCOUNT_ID}_{YYYYMMDD}`**

### Table schema

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
utmTerm | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | REQUIRED
utmSource | STRING | REQUIRED
currency | STRING | NULLABLE
account | STRING | NULLABLE
domain | STRING | NULLABLE

### Default source/medium

Twitter allows running ads that do not lead directly to your website (for example Twitter page promo, Twitter post promo, events promo, etc). This means that these types of campaigns can not have UTM-params and it is not possible to import them into Google Analytics or match them with website sessions due to limitations that require all imported costs to have campaign source and medium defined.

As a workaround, you can define default UTM-source and UTM-medium for your Twitter data source to manually attribute these costs to sessions with specified utm_source and utm_medium.
