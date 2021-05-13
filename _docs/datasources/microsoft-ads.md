---
layout: page
section: datasources
navigation_title: "Microsoft Advertising"
title: "Microsoft Advertising data source"
date: 2020-10-03
order: 5
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Microsoft Advertising** from the list.
3. Click **Authenticate with Microsoft** and go through the authentication flow.
4. Select the advertising account you would like to connect.
5. Click **Save**.

## Supported dynamic URL parameters

By default Microsoft Advertising allows to use a lot of [dynamic URL tracking parameters](https://help.ads.microsoft.com/#apex/3/en/56799/2){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

Name|Description
--- | ---
`{lpurl}` | The final URL. It will be escaped unless you put {lpurl} at the beginning of your tracking template. If {lpurl} isn't at the beginning of your tracking template, it escapes the characters ?, =, ", #, \t, ' and [space]. <br/><br/>**Example**<br/>Final URL: http://example.com<br/>Tracking template:<br/>{lpurl}?matchtype={matchtype}<br/>Landing page URL:<br/> http://example.com?matchtype={matchtype}
`{CampaignId}` | The ID of the campaign that triggered the ad.
`{Campaign}` | The name of the campaign that triggered the ad.
`{AdGroupId}` | The ID of the ad group that triggered the ad.
`{AdGroup}` | The name of the ad group that triggered the ad.
`{MatchType}` | The match type used to deliver an ad: `"e"` for exact, `"p"` for phrase, `"b"` for broad, `"b"` for expanded (Expanded match is treated as a broad match).
`{BidMatchType}` | The keyword bid match type: `"be"` for bidded exact, `"bp"` for bidded phrase, `"bb"` for bidded broad.
`{Network}` | The ad network type on which the ad was served: `"o"` for owned and operated (Bing, AOL, and Yahoo search results), `"s"` for syndicated (search partner site results), `"a"` for audience (Microsoft Audience Network placements).
`{Device}` | One of the following codes depending on where the click came from: `"m"` for mobile device, `"t"` for tablet device, `"c"` for desktop or laptop computer.
`{AdId}` | The numeric ID of the displayed ad.
`{keyword}` | The keyword that matched the user's search term.

If you use some of the unsupported parameters in UTM-tags you’ll see the parameter names instead of their values, for example: `{OrderItemId}` instead of `1234567890`.

In order to keep matching visits and ad expenses in the cost analysis reports, move the unsupported parameters from UTM-tags to additional custom GET-parameters and collect them to custom dimensions in Google Analytics:

* Cost data will be available only for UTM-tags values.
* Session data will be available for unsupported parameters (through custom dimensions) and UTM-tags values.
