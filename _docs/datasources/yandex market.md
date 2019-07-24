---
layout: page
section: datasources
title: "Yandex.Market"
order: 8
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from Yandex.Market

After enabling this data source, campaign statistics information will be uploaded to BigQuery once every 24 hours.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/YM1.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Shops names to import data from them. Shop names are identical as in Yandex.Market UI.

(3) Click Add if need to add shop.

(4) **Import normalized costs report**  - enable normalized costs report import.

(5) If normalized costs report enabled, you can select billing currency of report.

(6) **Import offer statistics report**  - enable offer statistics report import.

---

To save and enable the data source, click "Save" (1).

![](/img/YM2.png)

Clicking "Remove" (2) will delete the data source with its options and authorization.

You can enable or disable the data source at any time (3).

The "Disconnect" button (4) is used to revoke the authorization data. The settings are saved.

## Where to get data on advertising costs

- **yandexMarketCampaignStatistics_{shop_id}_{DATE}** - report containing information by shop offers (clicks, spending), see table structure below.
- **yandexMarketCosts_{shop_id}_{DATE}** - report containing information on clicks, impressions and cost of the shop offers

### Table structure for yandexMarketCampaignStatistics

Field name|Type|Mode
--- | --- | ---
offer_id | STRING | REQUIRED
spending | FLOAT | REQUIRED
clicks | INTEGER | REQUIRED
campaign_name | STRING | REQUIRED


### Table structure for yandexMarketCosts

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
utmTerm | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | REQUIRED
utmSource | STRING | REQUIRED
