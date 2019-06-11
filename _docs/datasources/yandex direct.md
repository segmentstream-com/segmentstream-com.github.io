---
layout: page
section: datasources
title: "Yandex.Direct"
order: 4
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from Yandex.Direct

Connecting this data source allows you to import advertising costs information into Google BigQuery once every 24 hours.

This integration is available for both ordinary advertisers and advertising agencies.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/YD2.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Enable option for import normalized costs report

(3) Enable option for import campaign performance report

(4) Take into account the VAT. If you do not check the box, the prices in the report will be exclusive of VAT.

(5) The data source belongs to the agency. See Customization for advertising agencies.

(6) Account currency. Select the currency in which the data is displayed in the advertising account.

(7) Value multiplier. Multiplied by the cost in the final report.

If you use smart banners for advertising, you must fill in the parameters (7) and (8).

(8) Smart banner advertising campaign identifier.

(9) Utm parameters of the url for the smart banner are copied from the settings of the Yandex.Direct advertising account: **Editing active smart banners** → **URL parameters**.

Example: `utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_term={ad_id}&utm_content={gbid}`

Notes:
- You must fill the url params for all smart banners.
- Using any of the `keyword`, `phrase_id`, `retargeting_id`, `adtarget_name`, `adtarget_id` substitution params in smart banners, will cause the loss of the `Impressions` for all smart banner campaigns.

## Configuration for advertising agencies

When the "Agency" option is enabled, new options become available.

![](/img/YD3.png)

(1) Spend agency points. Agency points will be used to retrieve reports. Points are transformed into a certain number of requests to the Yandex.Direct API per unit of time. If this option is enabled, when requesting the Yandex.Direct API, the points of the agency will be used, and not the advertiser.

(2),(3) Yandex accounts of your advertisers. Account names are used for authorization and become part of the tables in the final reports.

---

To save and enable the data source, click "Save" (1)

![](/img/YD4.png)

Clicking "Remove" (2) will delete the data source with its options and authorization.

You can enable or disable the data source at any time (3).

The "Disconnect" button (4) is used to revoke the authorization data. The settings are saved.

---

After the data source runs, the following tables will be created in BigQuery:

yandexDirectCampaignPerformance_{login}_{DATE} - full campaign performance report downloaded from Yandex.Direct

yandexDirectCosts_{login}_{DATE} - report containing information on clicks, impressions and cost in the context of advertisements

For advertising agencies, the number of tables will be a multiple of the number of advertisers connected.

## Substitution params

You can use Yandex.Direct's dynamic parameters in ad urls and smart banners. List of supported substitutions:
- `ad_id`
- `banner_id`
- `addphrases`
- `campaign_id`
- `device_type`
- `gbid`
- `keyword`
- `phrase_id`
- `retargeting_id`
- `coef_goal_context_id`
- `position_type`
- `source`
- `region_name`
- `region_id`
- `source_type`
- `adtarget_name`
- `adtarget_id`

Read more about dynamic parameters: https://yandex.ru/support/direct/statistics/url-tags.html?lang=en
