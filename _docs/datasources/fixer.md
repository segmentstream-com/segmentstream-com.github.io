---
layout: page
section: datasources
title: "Fixer"
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from Fixer

After enabling the [Fixer](http://fixer.io) data source, exchange rates information will be uploaded to BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/fixer1.png)

In order to connect a new data source, go to "DATA IMPORT → Automatic" (1), select the type of data source from the menu (2) and enter the API token from your Fixer personal account [https://fixer.io/dashboard](https://fixer.io/dashboard) (3)

![](/img/fixer2.png)

### Configuring data source

![](/img/fixer3.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) The Base currency, which is the currency to which the exported exchange rates are relative to.

To save and enable the data source, click "Save" (3).

The "Disconnect" button (4) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (5).

### Where to get data for exchange rates

- **fixerExchangeRates_{BASE_CURRENCY}_{YYYYMMDD}** - data for exchange rates

### Table structure

Field name|Type|Mode
--- | --- | ---
currency | STRING | REQUIRED
rate | FLOAT | REQUIRED
