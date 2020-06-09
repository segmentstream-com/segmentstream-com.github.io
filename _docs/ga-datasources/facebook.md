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
`&#123;&#123;ad.id&#125;&#125;` | The unique ID of the ad.
`&#123;&#123;adset.id&#125;&#125;` | The unique ID of the ad set. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.
`&#123;&#123;campaign.id&#125;&#125;` | The unique ID number of the ad campaign. A campaign contains ad sets and ads.
`&#123;&#123;ad.name&#125;&#125;` | The name of the ad
`&#123;&#123;adset.name&#125;&#125;` | The name of the ad set. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.
`&#123;&#123;campaign.name&#125;&#125;` | The name of the ad campaign. A campaign contains ad sets and ads.
`&#123;&#123;site_source_name&#125;&#125;` | Depending on where the ad appeared this parameter has four possible values.<br/> `fb` - Facebook<br/>`ig` - Instagram<br/>`msg` - Messenger<br/>`an` - the Audience Network
