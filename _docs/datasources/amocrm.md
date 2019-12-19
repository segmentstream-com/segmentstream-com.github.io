---
layout: page
section: datasources
title: "amoCRM"
order: 4
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from amoCRM

After enabling this data source, amoCRM data will be uploaded to BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/amocrm.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Should be filled with the name of your project as it appears in the amoCRM panel url, i.e. https://projectName.amocrm.ru/

(3) **Allow PII data import** - enable import of personal data.

(4) **Import leads** - enable import of lead data.

(5) **Import customers** - enable import of customer data.

(6) **Import transactions** - enable import of transaction data.

To save and enable the data source, click "Save" (9).

The "Disconnect" button (8) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (7).
