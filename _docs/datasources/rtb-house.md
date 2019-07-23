---
layout: page
section: datasources
title: "RTB House"
order: 10
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from RTB House

After enabling this data source, RTB House advertising costs information will be uploaded to Google BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

After adding new RTB House data source you must enter username and password from RTB House panel
![](/img/datasources.rtbhouse.1.png)


After authorization you need to set the data source parameters.

![](/img/datasources.rtbhouse.2.png)


(1) The name of the data source. It is displayed in the interface in the list of sources.

**Import normalized costs report** (2) - enable/disable to import normalized costs report.

**Import Advertisers statistics report** (3) - enable/disable to import advertisers statistics report.

To save and enable the data source, click "Save" (4).

The "Disconnect" button (6) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (5).

### Where to get data on advertising costs

The data for this data source will be written to a table named **rtbHouseCosts_{USER_LOGIN}_{YYYYMMDD}**.

The data for the advertisers statistics report will be written to a table named **rtbHouseCategoryStatsReport_{USER_LOGIN}_{YYYYMMDD}**.


### Table structure

#### **rtbHouseCosts**

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

Note, that clicks and impressions are float.

#### **rtbHouseCategoryStatsReport**

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
