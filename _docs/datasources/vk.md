---
layout: page
section: datasources
navigation_title: "VK"
title: "VK data source"
order: 10
date: 2020-07-20
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **VK** from the list.
3. Click **Authenticate with VK** and go through the authentication flow.
4. Select **Account** which cost data you would like to import
5. Optionally, select **Client** which cost data you would like to import (only for agency accounts).
6. Enable required reports.
7. Click **Save**.

## Available reports

SegmentStream allows to import the following reports from VK.

### Ads statistics

#### Table name

- **`vkCampaignStatistics_{CLIENT_ID}_{YYYYMMDD}`** - for agencies
- **`vkCampaignStatistics_{ACCOUNT_ID}_{YYYYMMDD}`** - for advertisers

#### Table schema

Field name|Type|Mode
--- | --- | ---
account_id | INTEGER | NULLABLE
ad_id | INTEGER | NULLABLE
ad_name | STRING | NULLABLE
campaign_id | INTEGER | NULLABLE
campaign_name | STRING | NULLABLE
link_url | STRING | NULLABLE
utmSource | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmTerm | STRING | NULLABLE
utmContent | STRING | NULLABLE
reach | INTEGER | NULLABLE
cost | FLOAT | NULLABLE
currency | STRING | NULLABLE
impressions | INTEGER | NULLABLE
clicks | INTEGER | NULLABLE

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name

- **`vkCosts_{CLIENT_ID}_{YYYYMMDD}`** - for agencies
- **`vkCosts_{ACCOUNT_ID}_{YYYYMMDD}`** - for advertisers

### Table schema

Field name|Type|Mode
--- | --- | ---
date | DATE | NULLABLE
account | STRING | NULLABLE
utmSource | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmTerm | STRING | NULLABLE
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
currency | STRING | NULLABLE

### Excluding VAT

By default, VK cost data includes VAT. To exclude VAT from imported costs you should switch on **Exclude VAT** option and define the **VAT rate** to be excluded.

### Supported dynamic URL parameters

By default VK allows to use a lot of [dynamic URL tagging parameters](https://vk.com/faq11846){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{campaign_id}` | Advertising campaign ID.
`{campaign_name}` | Advertising campaign name.
`{ad_id}` | Ad ID.
  
### Default source/medium

VK allows running ads that do not lead directly to your website (for example VK page promo, VK post promo, events promo, etc). This means that these types of campaigns can not have UTM-params and it is not possible to import them into Google Analytics or match them with website sessions due to limitations that require all imported costs to have campaign source and medium defined.

As a workaround, you can define default UTM-source and UTM-medium for your Facebook data source to manually attribute these costs to sessions with specified utm_source and utm_medium.

### UTM matching for dynamic remarketing ads

Currently, SegmentStream does not support automatic UTM matching for dynamic remarketing campaigns based on price lists.

Usually, there are 2 options for how you define UTM parameters for your dynamic remarketing campaigns:

1. Inside the XML/YML product feed
2. Inside the price list settings:
![VK price list UTM params](/img/vk/vk-pricelist.png)

Unfortunately, at the moment VK API does not allow to retrieve these settings. As a workaround, you should define the same UTM params you defined in the price list settings inside the ad carousel post. This is how you can do it.

1. Open your dynamic remarketing ad settings and click on the link which leads to the carousel community post which is used as a layout for your ad:
![VK ad carousel post link](/img/vk/vk-carousel-layout-link.png)

2. Click edit:
![VK ad carousel edit](/img/vk/vk-carousel-edit.png)

3. Click on the link of the first product in the carousel to edit it:
![VK ad carousel link edit](/img/vk/vk-carousel-link-edit.png)

4. Enter any external website link (anyway it will be overridden by your XML/YML feed values) with the UTM parameters **identical** to the UTM parameters for the price list.
![VK ad carousel link value](/img/vk/vk-carousel-link-value.png)

For example, if you price list has the following value:
* `utm_source=vk&utm_medium=cpc&utm_campaign=carousel_dynamic_retargeting&utm_content={campaign_id}&utm_term={ad_id}`

The value of your carousel product link after the `?` sign should be completely identical:
* `https://website.com/?utm_source=vk&utm_medium=cpc&utm_campaign=carousel_dynamic_retargeting&utm_content={campaign_id}&utm_term={ad_id}`

> Note, that if you have price lists or product feeds with different URL templates, you should create a separate carousel ad layout for each of them.

This workaround will allow SegmentStream to fetch UTM settings from the carousel ad layout instead of the price list or product feed.
