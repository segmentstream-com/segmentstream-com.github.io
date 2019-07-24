---
layout: page
section: datasources
title: "Recreativ"
order: 10
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from Recreativ

After enabling this data source, Recreativ advertising costs information for the previous day will be uploaded to Google BigQuery once every 24 hours.

### Connecting and configuring

![](/img/recreativ.1.png)

In order to connect a new data source, go to "DATA IMPORT → Automatic" (1), select the type of data source from menu (2) and enter the API token from the Recreativ personal account [https://recreativ.com/advertiser/site/profile](https://recreativ.com/advertiser/site/profile) (3)

![](/img/recreativ.2.png)

### Configuring data source

![](/img/recreativ.3.png)


This data source has only one setting - Title (1). Enter it to distinguish data sources of the same type in the list.

To save and enable the data source, click "Save" (2).

The "Disconnect" button (4) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (3).

### Where to get data on advertising costs

- **recreativCampaignStatistics_{ADVERTISER_ID}_{YYYYMMDD}** - data for advertising costs

### Table structure

Field name|Type|Mode
--- | --- | ---
views | INTEGER | REQUIRED
clicks | INTEGER | REQUIRED
money | FLOAT | REQUIRED
is_retarget | BOOLEAN | REQUIRED
