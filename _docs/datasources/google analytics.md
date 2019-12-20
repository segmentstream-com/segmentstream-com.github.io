---
layout: page
section: datasources
title: "Google Analytics"
order: 2
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from Google Analytics

After enabling this data source, Google Analytics data for the previous day will be uploaded to BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/ga_datasource.png)

After authorization you need to set the data source parameters.

### Options description

**Title**
The name of the data source. It is displayed in the interface in the list of sources.

**View ID**
View ID of your Google Analytics account.

**Dimensions**
Input the dimensions that you want to import, for example:
- ga:sourceMedium
- ga:campaign
- ga:keyword
- ga:adContent
- ga:transactionId
- ga:dimensionXX (for example for clientId)
- ga:dimensionXX (for example for sessionId)

A maximum of 7 dimensions can be imported.

**Metrics**
Input the metrics that you want to import, for example:
- ga:sessions
- ga:transaction
- ga:transactionRevenue
- ga:goalXXCompletions

A maximum of 10 metrics can be imported.

>**Please note!** Not all dimensions and metrics can be queried together, we recommend using the [Dimensions & Metrics Explorer](https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/) to make sure that the settings used are valid.

**Destination table name**
The name of the table in BigQuery to which the imported data will be written.

To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.
