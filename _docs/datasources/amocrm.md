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

### Options description

**Title**
The name of the data source. It is displayed in the interface in the list of sources.

**AmoCRM subdomain**
Should be filled with the name of your project as it appears in the amoCRM panel url, i.e. https://projectName.amocrm.ru/

**Allow PII data import**
Enable import of personal data.

**Import leads**
Enable import of lead data.

**Import customers**
Enable import of customer data.

**Import transactions**
Enable import of transaction data.

To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.
