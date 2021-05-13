---
layout: page
section: datasources
navigation_title: "myTarget"
title: "myTarget data source"
order: 6
date: 2020-06-09
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **myTarget** from the list.
3. Click **Authenticate with myTarget** and go through the authentication flow.
4. Click **Save**.

## Supported dynamic URL parameters

By default myTarget allows to use a lot of [dynamic URL tagging parameters](https://target.my.com/help/advertisers/utm/en#manually){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{% raw %}{{advertiser_id}}{% endraw %}` | Advertiser's ID.
`{% raw %}{{campaign_id}} {% endraw %}` | Advertising campaign ID.
`{% raw %}{{campaign_name}}{% endraw %}` | Advertising campaign name.
`{% raw %}{{banner_id}} {% endraw %}` | Banner ID.
