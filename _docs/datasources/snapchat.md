---
layout: page
section: datasources
navigation_title: "Snapchat"
title: "Snapchat data source"
order: 16
date: 2020-10-02
---

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Sources** page and click **Add data source**.
2. Choose **Snapchat** from the list.
3. Click **Click to authenticate with Snapchat** and go through the authentication flow.
4. Select accounts which cost data you would like to import.
5. Click **Save**.

## Additional transformation settings

SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`snapchatCosts_{ACCOUNT_ID}_{YYYYMMDD}`**

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
