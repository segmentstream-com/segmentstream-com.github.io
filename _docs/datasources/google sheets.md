---
layout: page
section: datasources
title: "Google Sheets"
order: 12
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing custom costs from Google Sheets

After enabling this data source, Google Sheets costs information will be uploaded to BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/google-sheets-1.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Link to to google spreadsheet. Just copy-paste it from browser URL of spreadsheet table.

To save and enable the data source, click "Save" (3).

The "Disconnect" button (5) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (4).

### Required Google spreadsheet structure

To import a Google spreadsheet, you must use the following table structure:

![](/img/google-sheets-2.png)

Column order is important.

Field name|Description
--- | ---
date | Date in YYYY-MM-DD format
currency | Currency of report
utmMedium | UTM medium
utmSource | UTM source
utmCampaign | UTM campaign
utmTerm | UTM term
utmContent | UTM content
impressions | Impressions count
clicks | Clicks count
cost | Cost count

### Where to get data on custom costs

Custom costs from Google Sheets will be uploaded to **customCosts_{ID}** table.

Old data will be overwritten. 

### Custom costs table structure

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
utmTerm | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmSource | STRING | NULLABLE
currency | STRING | NULLABLE
