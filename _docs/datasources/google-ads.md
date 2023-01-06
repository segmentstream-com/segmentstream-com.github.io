---
layout: page
section: datasources
navigation_title: "Google Ads"
title: "Google Ads data source"
date: 2020-07-02
order: 3
---

Google Ads is an online advertising service developed by Google. With Google Ads, you can take advantage of online advertising to improve your internet marketing effectiveness. [Visit Website ▸](https://ads.google.com/home/){:target="_blank"}

## Getting started

1. Inside the admin panel navigate to the **Data Sources** page and click **+ NEW** on the top right corner.
2. Choose **Google Ads** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Select [manager](#manager-advertising-accounts) or individual Google Ads advertising accounts you would like to connect.
5. Click **Save**.

## Manager advertising accounts

By default, both [manager](https://support.google.com/google-ads/answer/6139186){:target="_blank"} and individual advertising accounts are available for the data import. If you decide to select a manager account, all associated individual accounts will be automatically connected as well.

## UTM tagging best practices

Please, avoid defining UTM parameters at **Ad** or **Ad Extension** level as SegmentStream won't be able to properly allocate costs for your [ad extension](https://support.google.com/google-ads/answer/2375499){:target="blank"} clicks (such as sitelink extensions, price extensions, promotion extensions, etc). Please, define your UTMs at Account, Campaign or Ad Group level instead.

## Supported dynamic URL parameters

By default Google Ads allows to use a lot of [dynamic URL tagging parameters](https://support.google.com/google-ads/answer/6305348){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{lpurl}` | The final URL. It will be escaped unless you put {lpurl} at the beginning of your tracking template. If {lpurl} isn't at the beginning of your tracking template, it escapes the characters ?, =, ", #, \t, ' and [space]. <br/><br/>**Example**<br/>Final URL: http://example.com<br/>Tracking template:<br/>{lpurl}?matchtype={matchtype}<br/>Landing page URL:<br/> http://example.com?matchtype={matchtype}
`{gclid}` | The Google click identifier of a click that comes from your ad.
`{campaignid}` | The campaign ID. (Use this when you've set up your tracking info at account level and want to know which campaign served your ad).
`{adgroupid}` | The ad group ID. (Use this when you've set up your tracking info at the account or campaign level and want to know which ad group served your ad),
`{targetid}` | The ID of the keyword (labelled 'kwd'), dynamic search ad ('dsa') target, remarketing list target ('aud'), product partition ('pla') or hotel group partition ('hpi') that triggered an ad. For multiple target IDs, the output shows in the following order: 'aud, dsa, kwd, pla, hpi'. For example, if you add a remarketing list to your ad group (criterion ID '456') and target the keywords ID '123' the {targetid} would be replaced by `'aud-456:kwd-123'`.
`{creative}` | A unique ID for your ad
`{network}` | Where the click came from: `"g"` for Google search, `"s"` for a search partner or `"d"` for the Display Network.
`{keyword`} | For the Search Network: the keyword from your account that matches the search query, unless you are using a Dynamic Search ad, which returns a blank value. For the Display Network: the keyword from your account that matches the content.
`{loc_interest_ms}` | The ID of the location of interest that helped to trigger the ad. [See developer website for location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). Reported only for campaigns that show ads to people searching for your targeted locations.
`{loc_physical_ms}` | The ID of the geographical location of the click. [See developer website for location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). Reported only for campaigns that show ads to people in your targeted locations.
`{matchtype}` | The match type of the keyword that triggered your ad: `"e"` for exact, `"p"` for phrase or `"b"` for "broad".
`{device}` | The type of device that the click came from: `"m"` for mobile (including WAP), `"t"` for tablet and `"c"` for computer.

If you use some of the unsupported parameters in UTM-tags you’ll see the parameter names instead of their values, for example: `{source}` instead of `search.google.com`.

In order to keep matching visits and ad expenses in the cost analysis reports, move the unsupported parameters from UTM-tags to additional custom GET-parameters and collect them to custom dimensions in Google Analytics:

* Cost data will be available only for UTM-tags values.
* Session data will be available for unsupported parameters (through custom dimensions) and UTM-tags values.
