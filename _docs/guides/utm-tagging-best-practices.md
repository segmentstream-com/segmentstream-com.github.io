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

## How session cost calculation works

By default, SegmentStram uses the set of 5 UTM parameters (source, medium, campaign, term, content) to identify the cost of each session. The more granular tagging you have - the more accurately SegmentStream will be able to attribute a proper cost for a specific session.

For example, imagine you have **3 clicks**:

* `utm_source=google&utm_medium=cpc&utm_campaign=supercampaign&utm_content=ad1|position|1` (you paid **$3** per click)
* `utm_source=google&utm_medium=cpc&utm_campaign=supercampaign&utm_content=ad1|position|2` (you paid **$1** per click)
* `utm_source=google&utm_medium=cpc&utm_campaign=supercampaign&utm_content=ad1|position|3` (you paid **$5** per click)

As you can see, if you have a `utm_content` and SegmentStream was able to properly parse it, it will be possible to stitch your clicks with initiated session very accurately to identify the cost of each session (in our case **$3**, **$1** and **$5**).

But if `utm_content` does not have dynamic parameters that allow more granular segmentation (in our example - by position) all 3 clicks will looks the same and there will be no way to understand the cost of each particualr session:

* `utm_source=google&utm_medium=cpc&utm_campaign=supercampaign&utm_content=ad1`

Alternatively, if SegmentStream was unable to properly parse `utm_content` due to unsupported UTM dynamic parameters, stitching will fallback to `utm_campaign` level with the same set of UTMs for all 3 clicks:

* `utm_source=google&utm_medium=cpc&utm_campaign=supercampaign`

This way, SegmentStream will allocate the same cost for each of 3 sessions. Knowing that overall spend was **$9**, the cost of each session will be **$3**, **$3** and **$3**.

As you can see, this will cause less accurate identification of the cost of each session which will lead to less accurate ROAS analysis.

**That's why we ecourage to:**
  
* Use different UTM parameters for different Campaigns, Ad Groups and Ads;
* Use as many dynamic parameters as possible to make your UTM-tagging more granular;
* Use only supported dynamic parameters when you do you UTM tagging (for example, [here](/datasources/google-ads#supported-dynamic-url-parameters) you can find supported dynamic parameters for Google Ads).

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
