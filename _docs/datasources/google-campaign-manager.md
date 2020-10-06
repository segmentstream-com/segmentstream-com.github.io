---
layout: page
section: datasources
navigation_title: "Google Campaign Manager"
title: "Google Campaign Manager data source"
order: 15
date: 2020-10-06
---

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Sources** page and click **Add data source**.
2. Choose **Google Campaign Manager** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Select **Profile** and a list of **Sites** whose cost data you would like to import.
5. Click **Save**.

## Additional transformation settings

SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions.

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`googleCampaignManagerCosts_{YYYYMMDD}`**

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