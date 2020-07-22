---
layout: page
section: datasources
navigation_title: "Google Ads"
title: "Google Ads data source"
date: 2020-07-02
order: 2
---

Google Ads is an online advertising service developed by Google. With Google Ads, you can take advantage of online advertising to improve your internet marketing effectiveness. [Visit Website ▸](https://ads.google.com/home/){:target="_blank"}

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Sources** page and click **Add data source**.
2. Choose **Google Ads** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Select [manager](#manager-advertising-accounts) or individual Google Ads advertising accounts you would like to connect.
5. Enable required reports.
6. Click **Save**.

## Manager advertising accounts

By default, both [manager](https://support.google.com/google-ads/answer/6139186){:target="_blank"} and individual advertising accounts are available for the data import. If you decide to select a manager account, all associated individual accounts will be automatically connected as well.

## Available reports

SegmentStream allows to import the following reports from Google Ads.

### Keyword performance

[https://developers.google.com/adwords/api/docs/appendix/reports/keywords-performance-report](https://developers.google.com/adwords/api/docs/appendix/reports/keywords-performance-report){:target="_blank"}

#### Table name
**`googleAdsKeywordsPerformance_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
Cost | INTEGER | REQUIRED
Impressions | INTEGER | REQUIRED
Clicks | INTEGER | REQUIRED
ConversionRate | FLOAT | REQUIRED
CpcBid | INTEGER | REQUIRED
KeywordMatchType | STRING | REQUIRED
Status | STRING | REQUIRED
Id | INTEGER | REQUIRED
Criteria | STRING | REQUIRED
AdGroupId | INTEGER | REQUIRED
AdGroupName | STRING | REQUIRED
CampaignId | INTEGER | REQUIRED
CampaignName | STRING | REQUIRED
AccountDescriptiveName | STRING | REQUIRED
Conversions | FLOAT | REQUIRED
AllConversions | FLOAT | REQUIRED
FirstPositionCpc | STRING | REQUIRED
FirstPageCpc | STRING | REQUIRED

### Audience performance

[https://developers.google.com/adwords/api/docs/appendix/reports#audience](https://developers.google.com/adwords/api/docs/appendix/reports#audience){:target="_blank"}

#### Table name

**`googleAdsAudiencePerformance_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
Cost | INTEGER | REQUIRED
Impressions | INTEGER | REQUIRED
Clicks | INTEGER | REQUIRED
ConversionRate | FLOAT | REQUIRED
CpcBid | INTEGER | REQUIRED
Criteria | STRING | REQUIRED
ClickType | STRING | REQUIRED
AdGroupId | INTEGER | REQUIRED
AdGroupName | STRING | REQUIRED
CampaignId | INTEGER | REQUIRED
CampaignName | STRING | REQUIRED
AccountDescriptiveName | STRING | REQUIRED
Conversions | FLOAT | REQUIRED
AllConversions | FLOAT | REQUIRED

### Criteria performance

[https://developers.google.com/adwords/api/docs/appendix/reports#criteria](https://developers.google.com/adwords/api/docs/appendix/reports#criteria){:target="_blank"}

#### Table name

**`googleAdsCriteriaPerformance_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
Cost | INTEGER | REQUIRED
Impressions | INTEGER | REQUIRED
Clicks | INTEGER | REQUIRED
CampaignId | INTEGER | REQUIRED
AdGroupId | INTEGER | REQUIRED
AccountDescriptiveName | STRING | REQUIRED
ClickType | STRING | REQUIRED
CpcBid | INTEGER | REQUIRED
Criteria | STRING | REQUIRED
AdNetworkType1 | STRING | REQUIRED
Id | INTEGER | REQUIRED
BidModifier | FLOAT | REQUIRED
Device | STRING | REQUIRED
CriteriaType | STRING | REQUIRED
Conversions | FLOAT | REQUIRED
AllConversions | FLOAT | REQUIRED
FirstPositionCpc | STRING | REQUIRED
FirstPageCpc | STRING | REQUIRED

### Placement performance

[https://developers.google.com/adwords/api/docs/appendix/reports#placement](https://developers.google.com/adwords/api/docs/appendix/reports#placement){:target="_blank"}

#### Table name

**`googleAdsPlacementPerformance_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
Cost | INTEGER | REQUIRED
Impressions | INTEGER | REQUIRED
Clicks | INTEGER | REQUIRED
ConversionRate | FLOAT | REQUIRED
Criteria | STRING | REQUIRED
AdGroupId | INTEGER | REQUIRED
AdGroupName | STRING | REQUIRED
CampaignId | INTEGER | REQUIRED
CampaignName | STRING | REQUIRED
AccountDescriptiveName | STRING | REQUIRED
Conversions | FLOAT | REQUIRED
AllConversions | FLOAT | REQUIRED

### Click performance

[https://developers.google.com/adwords/api/docs/appendix/reports#click](https://developers.google.com/adwords/api/docs/appendix/reports#click){:target="_blank"}

#### Table name

**`googleAdsClickPerformance_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
GclId | STRING | REQUIRED
Page | INTEGER | REQUIRED
Slot | STRING | REQUIRED
Device | STRING | REQUIRED
AoiCityCriteriaId | INTEGER | REQUIRED
AoiCountryCriteriaId | INTEGER | REQUIRED
AoiRegionCriteriaId | INTEGER | REQUIRED
LopCityCriteriaId | INTEGER | REQUIRED
LopCountryCriteriaId | INTEGER | REQUIRED
LopRegionCriteriaId | INTEGER | REQUIRED
AdNetworkType1 | STRING | REQUIRED
AdNetworkType2 | STRING | REQUIRED
CreativeId | INTEGER | REQUIRED
CriteriaId | INTEGER | REQUIRED
CriteriaParameters | STRING | REQUIRED
AdGroupId | INTEGER | REQUIRED
AdGroupName | STRING | REQUIRED
CampaignId | INTEGER | REQUIRED
CampaignName | STRING | REQUIRED
AccountDescriptiveName | STRING | REQUIRED

### Campaign performance

[https://developers.google.com/adwords/api/docs/appendix/reports#campaign](https://developers.google.com/adwords/api/docs/appendix/reports#campaign){:target="_blank"}

#### Table name

**`googleAdsCampaignPerformance_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
Cost | INTEGER | REQUIRED
Impressions | INTEGER | REQUIRED
Clicks | INTEGER | REQUIRED
ClickType | STRING | REQUIRED
CampaignId | INTEGER | REQUIRED
CampaignName | STRING | REQUIRED
AccountDescriptiveName | STRING | REQUIRED
AdNetworkType1 | STRING | REQUIRED
Device | STRING | REQUIRED
AdvertisingChannelSubType | STRING | REQUIRED
Conversions | FLOAT | REQUIRED
AllConversions | FLOAT | REQUIRED

### Ad performance

[https://developers.google.com/adwords/api/docs/appendix/reports#ad](https://developers.google.com/adwords/api/docs/appendix/reports#ad){:target="_blank"}

#### Table name

**`googleAdsAdPerformance_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
Cost | INTEGER | REQUIRED
Impressions | INTEGER | REQUIRED
Clicks | INTEGER | REQUIRED
ConversionRate | FLOAT | REQUIRED
AdGroupId | INTEGER | REQUIRED
AdGroupName | STRING | REQUIRED
CampaignId | INTEGER | REQUIRED
CampaignName | STRING | REQUIRED
Id | INTEGER | REQUIRED
Device | STRING | REQUIRED
ClickType | STRING | REQUIRED
AdNetworkType2 | STRING | REQUIRED
CriterionId | INTEGER | REQUIRED
CriterionType | STRING | REQUIRED
ImageCreativeName | STRING | REQUIRED
AccountCurrencyCode | STRING | REQUIRED
Date | DATE | REQUIRED
AdType | STRING | REQUIRED
CreativeFinalUrls | STRING | REQUIRED
CreativeTrackingUrlTemplate | STRING | REQUIRED
Conversions | FLOAT | REQUIRED
AllConversions | FLOAT | REQUIRED

<!-- edit later

### Import "Managed Customers" dictionary
Enable "Managed Customers" dictionary import.

### Import "User Interest" dictionary
Enable "User Interest" dictionary import.

### Import "Adwords User List" dictionary
Enable "Adwords User List" dictionary import.
-->

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`googleAdsCosts_{CUSTOMER_ID}_{YYYYMMDD}`**

### Table schema

Field name|Type|Mode
--- | --- | ---
date | DATE | NULLABLE
account | STRING | NULLABLE
utmSource | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmTerm | STRING | NULLABLE
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
currency | STRING | NULLABLE

### Supported dynamic URL parameters

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

<!-- edit later
### Where to get dictionary data

- **googleAdsManagedCustomersDict_{CUSTOMER_ID}_{YYYYMMDD}** - data for "Managed Customers" dictionary
- **googleAdsUserInterestDict_{CUSTOMER_ID}_{YYYYMMDD}** - data for "User Interest" dictionary
- **googleAdsAdwordsUserListDict_{CUSTOMER_ID}_{YYYYMMDD}** - data for "Adwords User List" dictionary

### Table structures

### "Managed Customers" dictionary table structure

Field name|Type|Mode
--- | --- | ---
CustomerId | STRING | REQUIRED
Name | STRING | REQUIRED
Currency | STRING | REQUIRED
Labels | STRING | NULLABLE

### "User Interest" dictionary table structure

Field name|Type|Mode
--- | --- | ---
UserInterestId | INTEGER | REQUIRED
UserInterestName | STRING | REQUIRED

### "Adwords User List" dictionary table structure

Field name|Type|Mode
--- | --- | ---
Id | INTEGER | REQUIRED
Name | STRING | REQUIRED

-->
