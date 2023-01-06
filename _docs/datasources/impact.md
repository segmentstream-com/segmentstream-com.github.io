---
layout: page
section: datasources
navigation_title: "impact.com"
title: "impact.com data source"
order: 10
date: 2022-05-30
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **impact.com** from the list.
3. Enter the **Account SID** and **Auth Token** API credentials and click **Save**. You can find your credentials in your [impact.com](https://app.impact.com/){:target="blank"} account settings by navigating to [Vertical Ellipsis] → Settings → API. Read Only permissions are sufficient to export costs data.
<img src="/img/impact_auth_1_api.png" alt="Impact — API" width="600" style="display:block"/>

4. Select your **Advertising accounts**.
5. Click **Save**.

## Supported dynamic URL parameters

By default impact.com supports a list of [dynamic URL tracking parameters](https://integrations.impact.com/impact-brand/docs/branch#section-link-parameters-reference){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{irmpname}	` | Name of the impact.com partner.
`{ircid}` | Your impact.com Program ID value.
