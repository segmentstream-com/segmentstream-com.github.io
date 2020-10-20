---
layout: page
section: guides
navigation_title: "UTM-tagging best practices"
title: "UTM-tagging best practices"
date: 2020-10-20
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

A good example of UTM-tagging for Google Ads may look the following way:
```
utm_source=google&utm_medium=cpc&utm_campaign=some_campaign&utm_term={keyword}&utm_content=tid|{targetid}|aid|{creative}|gid|{adgroupid}|src|{network}|dev |{device}|locph|{loc_physical_ms}|locin|{loc_interest_ms}|clid|{gclid}
```

Alternatively, you can use a `{campaignid}` dynamic param to define `utm_campaign` automatically at the account level. The only downside here will be a less readable `utm_campaign`:

```
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content=tid|{targetid}|aid|{creative}|gid|{adgroupid}|src|{network}|dev |{device}|locph|{loc_physical_ms}|locin|{loc_interest_ms}|clid|{gclid}
```
