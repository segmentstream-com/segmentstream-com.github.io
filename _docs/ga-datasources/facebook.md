---
layout: page
section: ga-datasources
navigation_title: "Facebook"
title: "Facebook data source"
order: 1
date: 2020-06-09
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Facebook** from the list.
3. Click **Authenticate with Facebook** and go through the authentication flow.
4. Select accounts which cost data you would like to import.
5. Click **Save**.

## Supported dynamic URL parameters

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

## Default source/medium

Facebook allows running ads that do not lead directly to your website (for example Facebook page promo, Facebook post promo, events promo, etc). This means that these types of campaigns can not have UTM-params and it is not possible to import them into Google Analytics due to limitations that require all imported costs to have campaign source and medium defined.

As a workaround, you can define default UTM-source and UTM-medium for your Facebook data source to see costs for these campaigns inside your Google Analytics account.
