---
layout: page
section: datasources
navigation_title: "Microsoft Advertising"
title: "Microsoft Advertising data source"
date: 2020-09-18
order: 5
---

Microsoft Advertising (formerly Bing Ads, Microsoft adCenter and MSN adCenter) is a service that provides pay per click advertising on both the Bing and Yahoo! search engines. [Visit Website ▸](https://ads.microsoft.com){:target="_blank"}

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Sources** page and click **Add data source**.
2. Choose **Microsoft Advertising** from the list.
3. Click **Authenticate with Microsoft** and go through the authentication flow.
4. Select advertising account you would like to connect.
5. Enable required reports.
6. Click **Save**.

## Available reports

SegmentStream allows to import the following reports from Microsoft Advertising.

### Campaign performance

[https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsCampaignPerformance_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
Country | STRING | NULLABLE |
State | STRING | NULLABLE |
MetroArea | STRING | NULLABLE |
City | STRING | NULLABLE |
CurrencyCode | STRING | NULLABLE |
AdDistribution | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
ProximityTargetLocation | STRING | NULLABLE |
Radius | FLOAT | NULLABLE |
Language | STRING | NULLABLE |
BidMatchType | STRING | NULLABLE |
DeliveredMatchType | STRING | NULLABLE |
Network | STRING | NULLABLE |
TopVsOther | STRING | NULLABLE |
DeviceType | STRING | NULLABLE |
DeviceOS | STRING | NULLABLE |
Assists | INTEGER | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
Revenue | FLOAT | NULLABLE |
ReturnOnAdSpend | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
CostPerAssist | FLOAT | NULLABLE |
RevenuePerConversion | FLOAT | NULLABLE |
RevenuePerAssist | FLOAT | NULLABLE |
LocationType | STRING | NULLABLE |
MostSpecificLocation | STRING | NULLABLE |
AccountStatus | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
County | STRING | NULLABLE |
PostalCode | STRING | NULLABLE |
LocationId | INTEGER | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
AllReturnOnAdSpend | STRING | NULLABLE |
AllRevenuePerConversion | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

### Ad group performance

[https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsAdGroupPerformance_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
Status | STRING | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
CurrencyCode | STRING | NULLABLE |
AdDistribution | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
DeviceType | STRING | NULLABLE |
Language | STRING | NULLABLE |
DeviceOS | STRING | NULLABLE |
ImpressionSharePercent | FLOAT | NULLABLE |
ImpressionLostToBudgetPercent | FLOAT | NULLABLE |
ImpressionLostToRankAggPercent | STRING | NULLABLE |
QualityScore | FLOAT | NULLABLE |
ExpectedCtr | FLOAT | NULLABLE |
AdRelevance | FLOAT | NULLABLE |
LandingPageExperience | FLOAT | NULLABLE |
HistoricalQualityScore | STRING | NULLABLE |
HistoricalExpectedCtr | STRING | NULLABLE |
HistoricalAdRelevance | STRING | NULLABLE |
HistoricalLandingPageExperience | STRING | NULLABLE |
PhoneImpressions | INTEGER | NULLABLE |
PhoneCalls | INTEGER | NULLABLE |
Ptr | FLOAT | NULLABLE |
Network | STRING | NULLABLE |
TopVsOther | STRING | NULLABLE |
BidMatchType | STRING | NULLABLE |
DeliveredMatchType | STRING | NULLABLE |
Assists | INTEGER | NULLABLE |
Revenue | FLOAT | NULLABLE |
ReturnOnAdSpend | FLOAT | NULLABLE |
CostPerAssist | FLOAT | NULLABLE |
RevenuePerConversion | FLOAT | NULLABLE |
RevenuePerAssist | FLOAT | NULLABLE |
TrackingTemplate | STRING | NULLABLE |
CustomParameters | STRING | NULLABLE |
AccountStatus | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdGroupLabels | STRING | NULLABLE |
ExactMatchImpressionSharePercent | FLOAT | NULLABLE |
CustomerId | STRING | NULLABLE |
CustomerName | STRING | NULLABLE |
ClickSharePercent | STRING | NULLABLE |
AbsoluteTopImpressionSharePercent | STRING | NULLABLE |
FinalUrlSuffix | STRING | NULLABLE |
CampaignType | STRING | NULLABLE |
TopImpressionShareLostToRankPercent | STRING | NULLABLE |
TopImpressionShareLostToBudgetPercent | STRING | NULLABLE |
AbsoluteTopImpressionShareLostToRankPercent | STRING | NULLABLE |
AbsoluteTopImpressionShareLostToBudgetPercent | STRING | NULLABLE |
TopImpressionSharePercent | STRING | NULLABLE |
AbsoluteTopImpressionRatePercent | STRING | NULLABLE |
TopImpressionRatePercent | STRING | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
AllReturnOnAdSpend | STRING | NULLABLE |
AllRevenuePerConversion | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

### Ad performance

[https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsAdPerformance_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdId | INTEGER | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
AdTitle | STRING | NULLABLE |
AdDescription | STRING | NULLABLE |
AdDescription2 | STRING | NULLABLE |
AdType | STRING | NULLABLE |
CurrencyCode | STRING | NULLABLE |
AdDistribution | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
DestinationUrl | STRING | NULLABLE |
DeviceType | STRING | NULLABLE |
Language | STRING | NULLABLE |
DisplayUrl | STRING | NULLABLE |
AdStatus | STRING | NULLABLE |
Network | STRING | NULLABLE |
TopVsOther | STRING | NULLABLE |
BidMatchType | STRING | NULLABLE |
DeliveredMatchType | STRING | NULLABLE |
DeviceOS | STRING | NULLABLE |
Assists | INTEGER | NULLABLE |
Revenue | FLOAT | NULLABLE |
ReturnOnAdSpend | FLOAT | NULLABLE |
CostPerAssist | FLOAT | NULLABLE |
RevenuePerConversion | FLOAT | NULLABLE |
RevenuePerAssist | FLOAT | NULLABLE |
TrackingTemplate | STRING | NULLABLE |
CustomParameters | STRING | NULLABLE |
FinalUrl | STRING | NULLABLE |
FinalMobileUrl | STRING | NULLABLE |
FinalAppUrl | STRING | NULLABLE |
AccountStatus | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
TitlePart1 | STRING | NULLABLE |
TitlePart2 | STRING | NULLABLE |
TitlePart3 | STRING | NULLABLE |
Headline | STRING | NULLABLE |
LongHeadline | STRING | NULLABLE |
BusinessName | STRING | NULLABLE |
Path1 | STRING | NULLABLE |
Path2 | STRING | NULLABLE |
AdLabels | STRING | NULLABLE |
CustomerId | STRING | NULLABLE |
CustomerName | STRING | NULLABLE |
CampaignType | STRING | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
AllReturnOnAdSpend | STRING | NULLABLE |
AllRevenuePerConversion | STRING | NULLABLE |
FinalUrlSuffix | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

### Keyword performance

[https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsKeywordPerformance_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
Keyword | STRING | NULLABLE |
KeywordId | INTEGER | NULLABLE |
AdId | INTEGER | NULLABLE |
AdType | STRING | NULLABLE |
DestinationUrl | STRING | NULLABLE |
CurrentMaxCpc | FLOAT | NULLABLE |
CurrencyCode | STRING | NULLABLE |
DeliveredMatchType | STRING | NULLABLE |
AdDistribution | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
BidMatchType | STRING | NULLABLE |
DeviceType | STRING | NULLABLE |
QualityScore | FLOAT | NULLABLE |
ExpectedCtr | FLOAT | NULLABLE |
AdRelevance | FLOAT | NULLABLE |
LandingPageExperience | FLOAT | NULLABLE |
Language | STRING | NULLABLE |
HistoricalQualityScore | STRING | NULLABLE |
HistoricalExpectedCtr | STRING | NULLABLE |
HistoricalAdRelevance | STRING | NULLABLE |
HistoricalLandingPageExperience | STRING | NULLABLE |
QualityImpact | FLOAT | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AccountStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
KeywordStatus | STRING | NULLABLE |
Network | STRING | NULLABLE |
TopVsOther | STRING | NULLABLE |
DeviceOS | STRING | NULLABLE |
Assists | INTEGER | NULLABLE |
Revenue | FLOAT | NULLABLE |
ReturnOnAdSpend | FLOAT | NULLABLE |
CostPerAssist | FLOAT | NULLABLE |
RevenuePerConversion | FLOAT | NULLABLE |
RevenuePerAssist | FLOAT | NULLABLE |
TrackingTemplate | STRING | NULLABLE |
CustomParameters | STRING | NULLABLE |
FinalUrl | STRING | NULLABLE |
FinalMobileUrl | STRING | NULLABLE |
FinalAppUrl | STRING | NULLABLE |
BidStrategyType | STRING | NULLABLE |
KeywordLabels | STRING | NULLABLE |
Mainline1Bid | FLOAT | NULLABLE |
MainlineBid | FLOAT | NULLABLE |
FirstPageBid | STRING | NULLABLE |
FinalUrlSuffix | STRING | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
AllReturnOnAdSpend | STRING | NULLABLE |
AllRevenuePerConversion | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

### Search query performance
[https://docs.microsoft.com/en-us/advertising/reporting-service/searchqueryperformancereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/searchqueryperformancereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsSearchQueryPerformance_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
AdId | INTEGER | NULLABLE |
AdType | STRING | NULLABLE |
DestinationUrl | STRING | NULLABLE |
BidMatchType | STRING | NULLABLE |
DeliveredMatchType | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdStatus | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
SearchQuery | STRING | NULLABLE |
Keyword | STRING | NULLABLE |
AdGroupCriterionId | INTEGER | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
Language | STRING | NULLABLE |
KeywordId | INTEGER | NULLABLE |
Network | STRING | NULLABLE |
TopVsOther | STRING | NULLABLE |
DeviceType | STRING | NULLABLE |
DeviceOS | STRING | NULLABLE |
Assists | INTEGER | NULLABLE |
Revenue | FLOAT | NULLABLE |
ReturnOnAdSpend | FLOAT | NULLABLE |
CostPerAssist | FLOAT | NULLABLE |
RevenuePerConversion | FLOAT | NULLABLE |
RevenuePerAssist | FLOAT | NULLABLE |
AccountStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
KeywordStatus | STRING | NULLABLE |
CampaignType | STRING | NULLABLE |
CustomerId | STRING | NULLABLE |
CustomerName | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
AllReturnOnAdSpend | STRING | NULLABLE |
AllRevenuePerConversion | STRING | NULLABLE |

### Share of voice
[https://docs.microsoft.com/en-us/advertising/reporting-service/shareofvoicereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/shareofvoicereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsShareOfVoice_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
AdGroupName | STRING | NULLABLE |
Keyword | STRING | NULLABLE |
DeliveredMatchType | STRING | NULLABLE |
BidMatchType | STRING | NULLABLE |
Language | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
KeywordId | INTEGER | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
CampaignId | INTEGER | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
ImpressionSharePercent | FLOAT | NULLABLE |
ImpressionLostToBudgetPercent | FLOAT | NULLABLE |
ImpressionLostToRankAggPercent | STRING | NULLABLE |
CurrentMaxCpc | FLOAT | NULLABLE |
QualityScore | FLOAT | NULLABLE |
ExpectedCtr | FLOAT | NULLABLE |
AdRelevance | FLOAT | NULLABLE |
LandingPageExperience | FLOAT | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
AdDistribution | STRING | NULLABLE |
ClickSharePercent | STRING | NULLABLE |
DeviceType | STRING | NULLABLE |
Network | STRING | NULLABLE |
AccountStatus | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
KeywordStatus | STRING | NULLABLE |
BidStrategyType | STRING | NULLABLE |
KeywordLabels | STRING | NULLABLE |
ExactMatchImpressionSharePercent | FLOAT | NULLABLE |
TopImpressionShareLostToRankPercent | STRING | NULLABLE |
TopImpressionShareLostToBudgetPercent | STRING | NULLABLE |
AbsoluteTopImpressionShareLostToRankPercent | STRING | NULLABLE |
AbsoluteTopImpressionShareLostToBudgetPercent | STRING | NULLABLE |
AbsoluteTopImpressionSharePercent | STRING | NULLABLE |
TopImpressionSharePercent | STRING | NULLABLE |
AbsoluteTopImpressionRatePercent | STRING | NULLABLE |
TopImpressionRatePercent | STRING | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

### Audience performance
[https://docs.microsoft.com/en-us/advertising/reporting-service/audienceperformancereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/audienceperformancereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsAudiencePerformance_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
AudienceId | STRING | NULLABLE |
AudienceName | STRING | NULLABLE |
AssociationStatus | STRING | NULLABLE |
BidAdjustment | STRING | NULLABLE |
TargetingSetting | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
Revenue | FLOAT | NULLABLE |
ReturnOnAdSpend | FLOAT | NULLABLE |
RevenuePerConversion | FLOAT | NULLABLE |
AccountStatus | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
AudienceType | STRING | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
AllReturnOnAdSpend | STRING | NULLABLE |
AllRevenuePerConversion | STRING | NULLABLE |
AssociationId | STRING | NULLABLE |
AssociationLevel | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

### Geographic performance
[https://docs.microsoft.com/en-us/advertising/reporting-service/geographicperformancereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/geographicperformancereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsGeographicPerformance_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
Country | STRING | NULLABLE |
State | STRING | NULLABLE |
MetroArea | STRING | NULLABLE |
City | STRING | NULLABLE |
CurrencyCode | STRING | NULLABLE |
AdDistribution | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Ctr | FLOAT | NULLABLE |
AverageCpc | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
AveragePosition | FLOAT | NULLABLE |
ProximityTargetLocation | STRING | NULLABLE |
Radius | FLOAT | NULLABLE |
Language | STRING | NULLABLE |
BidMatchType | STRING | NULLABLE |
DeliveredMatchType | STRING | NULLABLE |
Network | STRING | NULLABLE |
TopVsOther | STRING | NULLABLE |
DeviceType | STRING | NULLABLE |
DeviceOS | STRING | NULLABLE |
Assists | INTEGER | NULLABLE |
Conversions | FLOAT | NULLABLE |
ConversionRate | FLOAT | NULLABLE |
Revenue | FLOAT | NULLABLE |
ReturnOnAdSpend | FLOAT | NULLABLE |
CostPerConversion | FLOAT | NULLABLE |
CostPerAssist | FLOAT | NULLABLE |
RevenuePerConversion | FLOAT | NULLABLE |
RevenuePerAssist | FLOAT | NULLABLE |
LocationType | STRING | NULLABLE |
MostSpecificLocation | STRING | NULLABLE |
AccountStatus | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
County | STRING | NULLABLE |
PostalCode | STRING | NULLABLE |
LocationId | INTEGER | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
AllConversionRate | STRING | NULLABLE |
AllCostPerConversion | STRING | NULLABLE |
AllReturnOnAdSpend | STRING | NULLABLE |
AllRevenuePerConversion | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

### Age and gender audience
[https://docs.microsoft.com/en-us/advertising/reporting-service/agegenderaudiencereportcolumn?view=bingads-13](https://docs.microsoft.com/en-us/advertising/reporting-service/agegenderaudiencereportcolumn?view=bingads-13){:target="_blank"}

#### Table name

**`microsoftAdsAgeGenderAudience_{ACCOUNT_ID}_{YYYYMMDD}`**

#### Table schema

Field name | Type | Mode |
AccountName | STRING | NULLABLE |
AccountNumber | STRING | NULLABLE |
AccountId | INTEGER | NULLABLE |
TimePeriod | DATETIME | NULLABLE |
CampaignName | STRING | NULLABLE |
CampaignId | INTEGER | NULLABLE |
AdGroupName | STRING | NULLABLE |
AdGroupId | INTEGER | NULLABLE |
AdDistribution | STRING | NULLABLE |
AgeGroup | STRING | NULLABLE |
Gender | STRING | NULLABLE |
Impressions | INTEGER | NULLABLE |
Clicks | INTEGER | NULLABLE |
Conversions | FLOAT | NULLABLE |
Spend | FLOAT | NULLABLE |
Revenue | FLOAT | NULLABLE |
ExtendedCost | STRING | NULLABLE |
Assists | INTEGER | NULLABLE |
Language | STRING | NULLABLE |
AccountStatus | STRING | NULLABLE |
CampaignStatus | STRING | NULLABLE |
AdGroupStatus | STRING | NULLABLE |
BaseCampaignId | STRING | NULLABLE |
AllConversions | STRING | NULLABLE |
AllRevenue | STRING | NULLABLE |
ViewThroughConversions | STRING | NULLABLE |

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`microsoftAdsCosts_{CUSTOMER_ID}_{YYYYMMDD}`**

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
