---
layout: page
section: datasources
navigation_title: "myTarget"
title: "myTarget data source"
order: 10
date: 2020-06-20
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **myTarget** from the list.
3. Click **Authenticate with myTarget** and go through the authentication flow.
4. Enable required reports.
5. Click **Save**.

## Available reports

SegmentStream allows to import the following reports from myTarget.

### Campaign statistics

#### Table name

**`myTargetCampaignStatistics_{USER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
impressions | INTEGER | REQUIRED
clicks | INTEGER | REQUIRED
banner_id | INTEGER | REQUIRED
campaign_id | INTEGER | REQUIRED
campaign_name | STRING | REQUIRED

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`myTargetCosts_{USER_ID}_{YYYYMMDD}`**

### Table schema

Field name| Type | Mode
--- | --- | ---
date | DATE | NULLABLE
utmSource | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmTerm | STRING | NULLABLE
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
currency | STRING | NULLABLE

### Supported dynamic URL parameters

By default myTarget allows to use a lot of [dynamic URL tagging parameters](https://target.my.com/help/advertisers/utm/en#manually){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{% raw %}{{advertiser_id}}{% endraw %}` | Advertiser's ID.
`{% raw %}{{campaign_id}} {% endraw %}` | Advertising campaign ID.
`{% raw %}{{campaign_name}}{% endraw %}` | Advertising campaign name.
`{% raw %}{{banner_id}} {% endraw %}` | Banner ID.
