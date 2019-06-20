---
layout: page
section: datasources
title: "Fixer"
order: 11
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from Fixer

After enabling [Fixer](http://fixer.io) data source allows importing exchange rates information into Google BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/fixer1.png)

In order to connect a new data source, go to "DATA IMPORT → Automatic" (1), select the type of data source from menu (2) and enter the API token from the Fixer personal account [https://fixer.io/dashboard](https://fixer.io/dashboard) (3)

![](/img/fixer2.png)

### Configuring data source

![](/img/fixer3.png)

This data source has two setting - Title (1) and Base currency (2)

Относительно выбранной базовой валюты будет рассчитан коэффициент, умножив на который, вы сможете конвертировать значения из другой валюты.

To save and enable the data source, click "Save" (3).

The "Disconnect" button (4) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (5).

### Where to get data on advertising costs

The data for this data source will be written to a table named **fixerExchangeRates_{BASE_CURRENCY}_{YYYYMMDD}**

### Table structure

Field name|Type|Mode
--- | --- | ---
currency | STRING | REQUIRED
rate | FLOAT | REQUIRED
