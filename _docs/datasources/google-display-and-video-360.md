---
layout: page
section: datasources
navigation_title: "Google Display & Video 360"
title: "Google Display & Video 360 data source"
order: 9
date: 2021-10-20
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Google Display & Video 360** from the list.
3. Click **Click to authenticate with Google** and go through the authentication and setup flow.
4. Name your data source.
5. Select the partner and advertisers from which you would like to import cost data.
6. Click **Save**.

## UTM matching for Youtube & partners ads

Currently, SegmentStream does not support automatic UTM matching for [Youtube & partners ads](https://support.google.com/displayvideo/answer/6274216?hl=en){:target="_blank"}.

You can define the default utm_source and utm_medium for all these ads through the **UTM source for YouTube & partners ads** and **UTM medium for YouTube & partners ads** settings, and SegmentStream will use the campaign name of those ads to match by utm_campaign.

The following setup will help improve cost data stitching and will allow seeing costs at campaign level for Youtube & partners ads.
`utm_source=youtube&utm_medium=cpm&utm_campaign={{campaign name in DV360 interface}}`
![Campaign name in DV360 Inteface](/img/dv360/dv360.png)
