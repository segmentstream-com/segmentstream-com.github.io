---
layout: page
section: datasources
title: "retailCRM"
order: 10
---

In this section you will learn:
* How to connect retailCRM data import.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from retailCRM
------

After enabling this data source, retailCRM data will be uploaded to BigQuery once every 24 hours.

## Connecting and configuring
------
Before connecting the data source, you must create an API key, this is described in detail in the [retailCRM docs](https://help.retailcrm.ru/Users/ApiKeys).

The process of connecting data sources is described in detail in the [overview](/datasources/index).

After authorization you need to set the data source parameters.

## Options description
------
![](/img/retailcrm.png)

## Display name
The name of the data source. It is displayed in the interface in the list of sources.

## retailCRM subdomain
Should be filled with the first part of your CRM address. For example, if your CRM address is https://test-account.retailcrm.ru/, then the subdomain will be "test-account".

## Orders import
Enable import of orders data. If this option enabled, updated orders for the previous day will be uploaded.

## Order custom fields
The list of symbolic codes of order custom fields to import.

## Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.

## Where to get orders data
- **retailCrmOrders_{SUBDOMAIN}_{YYYYMMDD}** - data for updated "Orders"

## Table structures
------

### retailCrmOrders table structure

Field name | Type | Mode
--- | --- | ---
summ | FLOAT | NULLABLE
id | INTEGER | NULLABLE
number | STRING | NULLABLE
externalId | STRING | NULLABLE
orderType | STRING | NULLABLE
orderMethod | STRING | NULLABLE
countryIso | STRING | NULLABLE
createdAt | DATETIME | NULLABLE
statusUpdatedAt | DATETIME | NULLABLE
totalSumm | FLOAT | NULLABLE
prepaySum | FLOAT | NULLABLE
purchaseSumm | FLOAT | NULLABLE
site | STRING | NULLABLE
status | STRING | NULLABLE
fromApi | BOOLEAN | NULLABLE
shipped | BOOLEAN | NULLABLE
clientId | STRING | NULLABLE
customer | RECORD | NULLABLE
customer.id | INTEGER | NULLABLE
customer.externalId | STRING | NULLABLE
customer.site | STRING | NULLABLE
customer.personalDiscount | FLOAT | NULLABLE
customer.marginSumm | FLOAT | NULLABLE
customer.totalSumm | FLOAT | NULLABLE
customer.averageSumm | FLOAT | NULLABLE
customer.ordersCount | INTEGER | NULLABLE
customer.costSumm | FLOAT | NULLABLE
customer.firstClientId | STRING | NULLABLE
customer.lastClientId | STRING | NULLABLE
customer.source | RECORD | NULLABLE
customer.source.source | STRING | NULLABLE
customer.source.medium | STRING | NULLABLE
customer.source.campaign | STRING | NULLABLE
customer.source.keyword | STRING | NULLABLE
customer.source.content | STRING | NULLABLE
delivery | RECORD | NULLABLE
delivery.cost | FLOAT | NULLABLE
delivery.netCost | FLOAT | NULLABLE
source | RECORD | NULLABLE
source.source | STRING | NULLABLE
source.medium | STRING | NULLABLE
source.campaign | STRING | NULLABLE
source.keyword | STRING | NULLABLE
source.content | STRING | NULLABLE
items | RECORD | REPEATED
items.id | INTEGER | NULLABLE
items.initialPrice | FLOAT | NULLABLE
items.discountTotal | FLOAT | NULLABLE
items.vatRate | FLOAT | NULLABLE
items.createdAt | DATETIME | NULLABLE
items.quantity | INTEGER | NULLABLE
items.status | STRING | NULLABLE
items.purchasePrice | FLOAT | NULLABLE
items.isCanceled | BOOLEAN | NULLABLE
customFields | RECORD | REPEATED
customFields.name | STRING | NULLABLE
customFields.code | STRING | NULLABLE
customFields.type | STRING | NULLABLE
customFields.value | RECORD | NULLABLE
customFields.value.string | STRING | NULLABLE
customFields.value.text | STRING | NULLABLE
customFields.value.integer | INTEGER | NULLABLE
customFields.value.numeric | FLOAT | NULLABLE
customFields.value.boolean | BOOLEAN | NULLABLE
customFields.value.date | DATE | NULLABLE
customFields.value.email | STRING | NULLABLE
customFields.value.dictionary | RECORD | NULLABLE
customFields.value.dictionary.name | STRING | NULLABLE
customFields.value.dictionary.element | RECORD | NULLABLE
customFields.value.dictionary.element.name | STRING | NULLABLE
customFields.value.dictionary.element.code | STRING | NULLABLE
