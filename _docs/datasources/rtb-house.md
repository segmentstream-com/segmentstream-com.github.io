---
layout: page
section: datasources
navigation_title: "RTB House"
title: "RTB House data source"
order: 10
date: 2020-07-20
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **RTB House** from the list.
3. Authenticate using your RTB House **Username** and **Password**.
4. Enable required reports.
5. Click **Save**.

## Available reports

SegmentStream allows to import the following reports from RTB House.

### Category statistics

#### Table name
**`rtbHouseCategoryStatsReport_{USER_LOGIN}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
category | STRING | NULLABLE
categoryId | INTEGER | NULLABLE
conversionsValue | INTEGER | NULLABLE
impsCount | FLOAT | NULLABLE
clicksCount | INTEGER | NULLABLE
ctr | FLOAT | NULLABLE
conversionsRate | FLOAT | NULLABLE
campaignCost | FLOAT | NULLABLE
cpc | FLOAT | NULLABLE
conversionsCount | INTEGER | NULLABLE
currency | STRING | NULLABLE
date | DATE | NULLABLE

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`rtbHouseCosts_{SHOP_NAME}_{YYYYMMDD}`**

### Table schema

Field name|Type|Mode
--- | --- | ---
date | DATE | NULLABLE
cost | FLOAT | NULLABLE
clicks | FLOAT | NULLABLE
impressions | FLOAT | NULLABLE
utmTerm | INTEGER | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmSource | STRING | NULLABLE
currency | STRING | NULLABLE
