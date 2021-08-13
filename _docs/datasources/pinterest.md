---
layout: page
section: datasources
navigation_title: "Pinterest"
title: "Pinterest data source"
order: 9
date: 2020-10-03
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Pinterest** from the list.
3. Click **Click to connect Pinterest** and go through the authentication and setup flow.
4. Name your data source.
5. Click **Save**.

## Supported dynamic URL parameters

By default Pinterest allows to use a lot of [dynamic URL tagging parameters](https://help.pinterest.com/en/business/article/third-party-and-dynamic-tracking){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{% raw %}{campaignid} {% endraw %}` | Advertising campaign ID.
`{% raw %}{campaign_name}{% endraw %}` | Advertising campaign name.
`{% raw %}{adgroupid} {% endraw %}` | Ad group ID.
`{% raw %}{adgroup_name} {% endraw %}` | Ad group name.
`{% raw %}{creative_id} {% endraw %}` | Pin promotion ID.
`{% raw %}{adid} {% endraw %}` | Pin promotion ID.

## UTM matching for Shopping campaigns

Currently, SegmentStream does not support automatic UTM matching for [Shopping campaigns](https://help.pinterest.com/en/business/article/track-report-optimize-shopping-campaigns){:target="_blank"}. This means that you would need to match these types of campaigns manually inside the SegmentStream admin panel.

You can define the domain and UTM parameters for all Shopping campaigns through the **Landing page domain for Shopping campaigns** and **URL parameters for all Shopping campaigns** settings, and also define UTM parameters for specific Shopping campaigns by matching between the **Campaign ID** and **URL parameters** in the **URL parameters for specific Shopping campaigns** setting.

For example, if all Shopping campaigns have the following link to the website `http://www.site.com/?utm_source=Pinterest&utm_medium=cpc&utm_campaign={campaignid}` and a Shopping campaign with the **Campaign ID** = `123123123` with the following link to the website: `http://www.site.com/?utm_source=Pinterest&utm_medium=cpc&utm_campaign=Remarketing&utm_content=Shopping`, the mapping should be the following:

`123123123` ▸ `utm_source=Pinterest&utm_medium=cpc&utm_campaign=Remarketing&utm_content=Shopping`

This is how it might look inside the admin panel:
![Pinterest URL params matching](/img/pinterest/pinterest-utm-matching.png)
