---
layout: page
section: datasources
navigation_title: "Google Ads"
title: "Google Ads data source"
order: 1
---

<ul class="page-navigation">
  <li><a href="#getting-started">Getting started</a></li>
  <li>
    <a href="#reports">Available reports</a>
    <ul>
      <li><a href="#keyword-performance-report">Keyword performance</a></li>
      <li><a href="#audience-performance-report">Audience performance</a></li>
      <li><a href="#criteria-performance-report">Criteria performance</a></li>
      <li><a href="#placement-performance-report">Placement performance</a></li>
      <li><a href="#click-performance-report">Click performance</a></li>
      <li><a href="#campaign-performance-report">Campaign performance</a></li>
      <li><a href="#ad-performance-report">Ad performance</a></li>
    </ul>
  </li>
  
  <li><a href="#additional-transformation-settings">Additional transformation settings</a></li>
</ul>

Google Ads is an online advertising service developed by Google. With Google Ads, you can take advantage of online advertising to improve your internet marketing effectiveness. [Visit Website ▸](https://ads.google.com/home/)

This document was last updated on April 8, 2020. If you notice any gaps, outdated information or simply want to leave some feedback to help us improve our documentation, please [let us know](https://support.segmentstream.com/hc/en-us/requests/new)!

### <a name="connecting-and-configuring"></a>Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Sources** page and click **Add data source**.
2. Choose **Google Ads** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Select Google Ads account by defining proper Customer ID(s). [How to find your Google Ads customer customer ID ▸](https://support.google.com/google-ads/answer/1704344?hl=en-GB)
5. Enable required reports.

## <a name="reports"></a>Available reports

SegmentStream allows to import the following reports from Google Ads.

### <a name="keyword-performance-report"></a>Keyword performance

[https://developers.google.com/adwords/api/docs/appendix/reports/keywords-performance-report](https://developers.google.com/adwords/api/docs/appendix/reports/keywords-performance-report)

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

### <a name="audience-performance-report"></a>Audience performance

[https://developers.google.com/adwords/api/docs/appendix/reports#audience](https://developers.google.com/adwords/api/docs/appendix/reports#audience)

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

### <a name="criteria-performance-report"></a>Criteria performance

[https://developers.google.com/adwords/api/docs/appendix/reports#criteria](https://developers.google.com/adwords/api/docs/appendix/reports#criteria)

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

### <a name="placement-performance-report"></a>Placement performance

[https://developers.google.com/adwords/api/docs/appendix/reports#placement](https://developers.google.com/adwords/api/docs/appendix/reports#placement)

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

### <a name="click-performance-report"></a>Click performance

[https://developers.google.com/adwords/api/docs/appendix/reports#click](https://developers.google.com/adwords/api/docs/appendix/reports#click)

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

### <a name="campaign-performance-report"></a>Campaign performance

[https://developers.google.com/adwords/api/docs/appendix/reports#campaign](https://developers.google.com/adwords/api/docs/appendix/reports#campaign)

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

### <a name="ad-performance-report"></a>Ad performance

[https://developers.google.com/adwords/api/docs/appendix/reports#ad](https://developers.google.com/adwords/api/docs/appendix/reports#ad)

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

### <a name="managed-customers-dictionary"></a>Import "Managed Customers" dictionary
Enable "Managed Customers" dictionary import.

### <a name="user-interest-dictionary"></a>Import "User Interest" dictionary
Enable "User Interest" dictionary import.

### <a name="adwords-user-list-dictionary"></a>Import "Adwords User List" dictionary
Enable "Adwords User List" dictionary import.
-->

## <a name="additional-transformation-settings"></a>Additional transformation settings

You can read more about additional transformation to group cost data by UTM [here](/datasources/#additional-transformation-settings).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

#### Table name
**`googleAdsCosts_{CUSTOMER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
date | DATE | REQUIRED
system | DATE | REQUIRED
utmSource | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmTerm | STRING | NULLABLE
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
currency | STRING | NULLABLE

### <a name="supported-substitutions"></a>Supported dynamic URL parameters

By default Google Ads allows to use a lot of [dynamic URL tagging parameters](https://support.google.com/google-ads/answer/6305348) to track campains.

SegmentStream supports the following parameters.

Name|Description
--- | ---
`{lpurl}` | The final URL. It will be escaped unless you put {lpurl} at the beginning of your tracking template. If {lpurl} isn't at the beginning of your tracking template, it escapes the characters ?, =, ", #, \t, ' and [space]. <br/><br/>**Example**<br/>Final URL: http://example.com<br/>Tracking template: {lpurl}?matchtype={matchtype}<br/>Landing page URL:<br/> http://example.com?matchtype={matchtype}
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

Cost data will be available only for UTM-tags values.
Session data will be available for unsupported parameters (through custom dimensions) and UTM-tags values.

* Cost data will be available only for UTM-tags values.
* Session data will be available for unsupported parameters (through custom dimensions) and UTM-tags values.

<!-- edit later
### <a name="where-to-get-dictionary-data"></a>Where to get dictionary data

- **googleAdsManagedCustomersDict_{CUSTOMER_ID}_{YYYYMMDD}** - data for "Managed Customers" dictionary
- **googleAdsUserInterestDict_{CUSTOMER_ID}_{YYYYMMDD}** - data for "User Interest" dictionary
- **googleAdsAdwordsUserListDict_{CUSTOMER_ID}_{YYYYMMDD}** - data for "Adwords User List" dictionary

### <a name="table-structures"></a>Table structures

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