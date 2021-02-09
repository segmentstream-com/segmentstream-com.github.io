---
layout: page
section: datasources
navigation_title: "Facebook"
title: "Facebook data source"
order: 2
date: 2020-09-23
---

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Sources** page and click **Add data source**.
2. Choose **Facebook** from the list.
3. Click **Authenticate with Facebook** and go through the authentication flow.
4. Select accounts which cost data you would like to import.
5. Enable required reports.
6. Click **Save**.

## Available reports

SegmentStream allows to import the following reports from Facebook.

### Ads Insights

[https://developers.facebook.com/docs/marketing-api/insights/parameters/v7.0#fields](https://developers.facebook.com/docs/marketing-api/insights/parameters/v8.0#fields){:target="_blank"}

#### Table name
**`facebookCampaignStatistics_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
publisher_platform | STRING | NULLABLE
date_start | DATE | NULLABLE
impression_device | STRING | NULLABLE
impressions | INTEGER | NULLABLE
campaign_id | INTEGER | NULLABLE
campaign_name | STRING | NULLABLE
platform_position | STRING | NULLABLE
date_stop | DATE | REQUIRED
frequency | FLOAT | NULLABLE
account_id | INTEGER | NULLABLE
account_name | STRING | NULLABLE
spend | FLOAT | NULLABLE
clicks | INTEGER | NULLABLE
adset_id | INTEGER | NULLABLE
adset_name | STRING | NULLABLE
ad_id | STRING | NULLABLE
ad_name | STRING | NULLABLE
account_currency | STRING | NULLABLE
inline_link_clicks | INTEGER | NULLABLE
reach | INTEGER | NULLABLE
unique_clicks | INTEGER | NULLABLE
cpm | FLOAT | NULLABLE
cpc | FLOAT | NULLABLE
ctr | FLOAT | NULLABLE
actions | RECORD | NULLABLE
actions.action_type	 | STRING | NULLABLE
actions.value | FLOAT | NULLABLE
actions._1d_view | FLOAT | NULLABLE
actions._7d_view | FLOAT | NULLABLE
actions._28d_view | FLOAT | NULLABLE
actions._1d_click | FLOAT | NULLABLE
actions._7d_click | FLOAT | NULLABLE
actions._28d_click | FLOAT | NULLABLE
actions.dda | FLOAT | NULLABLE
conversions | RECORD | NULLABLE
conversions.action_type	 | STRING | NULLABLE
conversions.value | FLOAT | NULLABLE
conversions._1d_view | FLOAT | NULLABLE
conversions._7d_view | FLOAT | NULLABLE
conversions._28d_view | FLOAT | NULLABLE
conversions._1d_click | FLOAT | NULLABLE
conversions._7d_click | FLOAT | NULLABLE
conversions._28d_click | FLOAT | NULLABLE
conversions.dda | FLOAT | NULLABLE
cost_per_action_type | RECORD | NULLABLE
cost_per_action_type.action_type	 | STRING | NULLABLE
cost_per_action_type.value | FLOAT | NULLABLE
cost_per_action_type._1d_view | FLOAT | NULLABLE
cost_per_action_type._7d_view | FLOAT | NULLABLE
cost_per_action_type._28d_view | FLOAT | NULLABLE
cost_per_action_type._1d_click | FLOAT | NULLABLE
cost_per_action_type._7d_click | FLOAT | NULLABLE
cost_per_action_type._28d_click | FLOAT | NULLABLE
cost_per_action_type.dda | FLOAT | NULLABLE


> If some of the fields you need are missing, please, [let us know](https://support.segmentstream.com/hc/en-us/requests/new){:target="_blank"}!

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`facebookCosts_{ACCOUNT_ID}_{YYYYMMDD}`**

### Table schema

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
currency | STRING | NULLABLE

### Supported dynamic URL parameters

By default Facebook allows to use a lot of [dynamic URL tagging parameters](https://www.facebook.com/business/help/2360940870872492){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{% raw %}{{ad.id}}{% endraw %}` | The unique ID of the ad.
`{% raw %}{{adset.id}}{% endraw %}` | The unique ID of the ad set. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.
`{% raw %}{{campaign.id}}{% endraw %}` | The unique ID number of the ad campaign. A campaign contains ad sets and ads.
`{% raw %}{{ad.name}}{% endraw %}` | The name of the ad
`{% raw %}{{adset.name}}{% endraw %}` | The name of the ad set. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.
`{% raw %}{{campaign.name}}{% endraw %}` | The name of the ad campaign. A campaign contains ad sets and ads.
`{% raw %}{{site_source_name}}{% endraw %}` | Depending on where the ad appeared this parameter has four possible values.<br/> `fb` - Facebook<br/>`ig` - Instagram<br/>`msg` - Messenger<br/>`an` - the Audience Network
`{% raw %}{{placement}}{% endraw %}` | Depending on where the ad appeared this parameter has possible values.<br/>`Facebook_Mobile_Feed`<br/>`Facebook_Right_Column`<br/>`Facebook_Instant_Articles`<br/>`Facebook_Instream_Video`<br/>`Facebook_Marketplace`<br/>`Instagram_Stories`<br/>`Instagram_Feed`<br/>`Instagram_Explore`<br/>`Messenger_Inbox`<br/>`Messenger_Stories`<br/>`Facebook_Desktop_Feed`<br/>`an` (for Audience Network)<br/>`Others` (for all other placements)

### Default source/medium

Facebook allows running ads that do not lead directly to your website (for example Facebook page promo, Facebook post promo, events promo, etc). This means that these types of campaigns can not have UTM-params and it is not possible to import them into Google Analytics or match them with website sessions due to limitations that require all imported costs to have campaign source and medium defined.

As a workaround, you can define default UTM-source and UTM-medium for your Facebook data source to manually attribute these costs to sessions with specified utm_source and utm_medium.
