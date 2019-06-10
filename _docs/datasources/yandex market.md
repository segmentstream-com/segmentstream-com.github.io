---
layout: page
section: datasources
title: "Yandex.Market"
order: 8
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from Yandex.Market

Connecting this data source allows you to import campaigns statistics information into Google BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/YM1.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Shops names to import data from them. Shop names are identical as in Yandex.Market UI.

(3) Click Add if need to add shop.

(4) Enable option for import campaign statistics report. 

---

To save and enable the data source, click "Save" (1).

![](/img/YM2.png)

Clicking "Remove" (2) will delete the data source with its options and authorization.

You can enable or disable the data source at any time (3).

The "Disconnect" button (4) is used to revoke the authorization data. The settings are saved.

---

After the data source runs, the following tables will be created in BigQuery:

yandexMarketCampaignStatistics_{shop_id}_{DATE} - report containing information by campaigns offers (clicks, spending), see table structure bellow.


### Table structure for yandexMarketCampaignStatistics

Field name|Type|Mode
--- | --- | ---
offer_id | STRING | REQUIRED
spending | FLOAT | REQUIRED
clicks | INTEGER | REQUIRED
campaign_name | STRING | REQUIRED
