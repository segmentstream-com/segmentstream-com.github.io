---
layout: page
section: guides
navigation_title: "UTM-tagging best practices"
title: "UTM-tagging best practices"
date: 2020-11-04
---

This guide describes how to properly implement paid campaigns UTM-tagging for the most popular data sources.

The most important advice is to be consistent in tagging. Permanent labels allow you to measure beyond a single campaign or a keyword. To be consistent, you need to develop naming conventions.

> Is it better to call some content parameter “big” or “500×350”? Or the creative “grey” or “dark”? The answer is always: it's not that important as long as you are consistent.

Try to tag as many touchpoints as possible. Some commonly overlooked options include:

- email signatures
- links in mobile apps or games
- social posts
- links in social share buttons
- QR codes

In some advertising systems, you can use dynamic parameters  `{...}` in your links. These parameters help to attribute costs to sessions with high accuracy. We encourage you to use as many of them as possible as long as they are supported by SegmentStream for the particular data source.

## Google Ads

SegmentStream supports many [dynamic parameters](/datasources/google-ads#supported-dynamic-url-parameters) for Google Ads data source. Using these parameters in your UTM-tagging will dramatically increase the accuracy of costs attribution for your website sessions.

A good example of UTM-tagging for Google Ads campaigns:

**Search campaigns (campaign level settings):**
```
utm_source=google&utm_medium=search&utm_campaign=some_campaign&utm_term={keyword}&utm_content={creative}
```
**Shopping campaigns (adgroup level settings):**
```
utm_source=google&utm_medium=shopping&utm_campaign=some_campaign&utm_term=some_adgroup_name&utm_content={creative}
```
**Display campaings (adgroup level settings):**
```
utm_source=google&utm_medium=display&utm_campaign=some_campaign_name&utm_term=some_adgroup_name&utm_content={creative}
```
**Video campaings (adgroup level settings):**
```
utm_source=google&utm_medium=video&utm_campaign=some_campaign_name&utm_term=some_adgroup_name&utm_content={creative}
```

Alternatively, you can use a `{campaignid}` and `{adgroupid}` dynamic parameters to define `utm_campaign` and `utm_term` automatically at the account level or campaign level. The only downside here will be a less readable `utm_campaign` and `utm_term`:

**Search campaigns (campaign or account level settings):**
```
utm_source=google&utm_medium=search&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}
```
**Shopping campaigns (campaign or account level settings):**
```
utm_source=google&utm_medium=shopping&utm_campaign={campaignid}&utm_term={adgroupid}&utm_content={creative}
```
**Display campaings (campaign or account level settings):**
```
utm_source=google&utm_medium=display&utm_campaign={campaignid}&utm_term={adgroupid}&utm_content={creative}
```
**Video campaings (campaign or account level settings):**
```
utm_source=google&utm_medium=video&utm_campaign={campaignid}&utm_term={adgroupid}&utm_content={creative}
```

> We suggest to avoid using UTM tagging inside the **Final URL** or inside your product feed links and use **Tracking template** or **Final URL suffix** inside the Settings at Account, Campaign or Ad Group level.
