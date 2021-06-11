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

### Supported dynamic URL parameters

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
