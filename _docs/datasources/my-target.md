---
layout: page
section: datasources
title: "myTarget"
order: 9
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from myTarget

After enabling this data source, advertising costs information from your myTarget advertising account will be uploaded to BigQuery every day.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/mt_1.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Value multiplier. Multiplied by the cost in the final report.


**Import normalized costs report** (3) - enable/disable to import normalized costs report.

**Import banners statistics** (4) - enable/disable to import banners statistics costs, without normalizing the values ​​in the table.


### Where to get data on advertising costs


The data for normalized costs report will be written to a table named **myTargetCosts_{USER_ID}_{YYYYMMDD}**

The data for banners statistics report will be written to a table named **myTargetCampaignStatistics_{USER_ID}_{YYYYMMDD}**

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
