---
layout: page
section: datasources
navigation_title: "RTB House"
title: "RTB House data source"
order: 5
date: 2020-10-03
---

## Getting started

1. Inside the admin panel navigate to the **Data Sources** page and click **+ NEW** on the top right corner.
2. Choose **RTB House** from the list.
3. Authenticate using your RTB House **Username** and **Password**.
4. Click **Save**.

## UTM matching for campaigns

Currently, SegmentStream supports automatic UTM matching for RTBHouse campaigns only when UTM params are defined inside the URL for each offer in your product feed. Otherwise, you would need to match RTBHouse campaigns manually inside the SegmentStream admin panel.

By default, the following matching applies for `utm_source` and `utm_medium`:
* `utm_source` ▸ `rtbhouse`
* `utm_medium` ▸ `cpc`

This matching can be changed inside the admin panel by specifying appropriate values **UTM source** and **UTM medium** options.
