---
layout: page
section: datasources
title: "myTarget"
order: 1
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from myTarget

After enabling this data source, myTarget advertising costs information will be uploaded to Google BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/datasources.mytarget.settings.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Value multiplier. Multiplied by the cost in the final report.

(3) **Import normalized costs report** - enable normalized costs report import.

(4) **Import banner statistics report** - enable banner statistics costs report import, without normalizing the values ​​in the table.


### Where to get data on advertising costs

- **myTargetCosts_{USER_ID}_{YYYYMMDD}** - data for normalized costs
- **myTargetCampaignStatistics_{USER_ID}_{YYYYMMDD}** - data for banner statistics report

### Table structure

**myTargetCosts**

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

**myTargetCampaignStatistics**

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
impressions | INTEGER | REQUIRED
clicks | INTEGER | REQUIRED
banner_id | INTEGER | REQUIRED
campaign_id | INTEGER | REQUIRED
campaign_name | STRING | REQUIRED

### Supported substitutions

- `{advertiser_id}`
- `{campaign_id}`
- `{campaign_name}`
- `{banner_id}`
