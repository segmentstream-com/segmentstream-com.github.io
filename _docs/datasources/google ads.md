---
layout: page
section: datasources
title: "Google Ads"
order: 1
---

> Attention! The [Streaming](/integrations/ddmanager-streaming) integration has to be enabled to use this feature.

### Importing data from Google Ads

Connecting this data source allows you to import advertising costs information for the past 7 days into Google BigQuery once every 24 hours.

This integration is available for both ordinary advertisers and advertising agencies.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/gl-a.2.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

For a full picture of advertising costs, you need to add all your active advertising accounts (2) (see the "How to Find Your Account ID" section to find out where to find the advertising account ID).

(3) The currency in which you want to export the costs from the advertising accounts.

To save and enable the data source, click "Save" (4).

The "Disconnect" button (5) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (6).

### How to Find Your Account ID

Log in to Google Ads with an account that has access to the desired company. Depending on how many accounts you have created, copy the Customer ID. If you have more than one account, then you need to copy the account ID under the number 1. If you have only one account, then copy the ID under the number 2.

Customer ID has the following format XXX-XXX-XXXX, where X - is a number from 0 t0 9.

![](/img/gl-a.3.png)

### Where to get data on advertising costs

The data for this data source will be written to a table named **googleAdsCosts_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}**

### Table structure

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

### Supported substitutions

* lpurl
* campaignid
* adgroupid
* creative
* network
* keyword
