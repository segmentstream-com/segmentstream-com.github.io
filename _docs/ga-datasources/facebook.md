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

SegmentStream supports the following parameters.

Name|Description
--- | ---
`{{ad.id}}` | The unique ID of the ad.
`{{adset.id}}` | The unique ID of the ad set. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.
`{{campaign.id}}` | The unique ID number of the ad campaign. A campaign contains ad sets and ads.
`{{ad.name}}` | The name of the ad
`{{adset.name}}` | The name of the ad set. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.
`{{campaign.name}}` | The name of the ad campaign. A campaign contains ad sets and ads.
`{{site_source_name}}` | Depending on where the ad appeared this parameter has four possible values.<br/> `fb` - Facebook<br/>`ig` - Instagram<br/>`msg` - Messenger<br/>`an` - the Audience Network
