---
layout: page
section: datasources
title: "Microsoft Advertising"
order: 1
---

In this section you will learn how to connect Microsoft Advertising data import.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#importing-data">Importing data from Microsoft Advertising</a></li>
  <li><a href="#connecting-and-configuring">Connecting and configuring</a></li>
  <li><a href="#options-description">Options description</a></li>
  <li><a href="#display-name">Display name</a></li>
  <li><a href="#application-id">Application ID</a></li>
  <li><a href="#import-reports">Import reports</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data source</a></li>
  <li><a href="#where-to-find-imported-data">Where to find imported data</a></li>
  <li><a href="#table-structures">Table structures</a></li>
</ul>

### <a name="importing-data"></a>Importing data from Microsoft Advertising
------

After enabling this data source, Microsoft Advertising reports information will be uploaded to BigQuery once every 24 hours.

### <a name="connecting-and-configuring"></a>Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

After authorization you need to set the data source parameters.

### <a name="options-description"></a>Options description
------
![](/img/datasources.microsoft-ads.1.png)

### <a name="display-name"></a>Display name
The name of the data source. It is displayed in the interface in the list of sources.

### <a name="account-id"></a>Account ID
Unique ID of your account in Microsoft Advertising.
To find it log in your Microsoft Advertising account and find parameter "aid" in URL:
![](/img/datasources.microsoft-ads.2.png)
You should copy number after symbol "=" and before leading "&"

### <a name="customer-id"></a>Customer ID
The ID of the customer that owns this Microsoft Advertising account.
To find it log in your Microsoft Advertising account and find parameter "cid" in URL:
![](/img/datasources.microsoft-ads.3.png)
You should copy number after symbol "=" and before leading "&"


### <a name="import-reports"></a>Import reports
Enables import of raw report data from Microsoft Advertising to BigQuery

### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.

### <a name="where-to-find-imported-data"></a>Where to find imported data
Within 24 hours since you've enabled Microsoft Advertising data source you should find following tables in your BigQuery dataset if corresponding report was enabled:
- **microsoftAdsAdGroupPerformance_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Ad group" report
- **microsoftAdsAdPerformance_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Ad" report
- **microsoftAdsAgeGenderAudience_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Age & Gender" report
- **microsoftAdsAudiencePerformance_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Audience" report
- **microsoftAdsCampaignPerformance_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Campaign" report
- **microsoftAdsGeographicPerformance_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Geo" report
- **microsoftAdsKeywordPerformance_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Keyword" report
- **microsoftAdsSearchQueryPerformance_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Search term" report
- **microsoftAdsShareOfVoice_{ACCOUNT_ID}_{YYYYMMDD}** - data for "Share of voice" report

### <a name="table-structures"></a>Table structures
------

### "Ad group" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
Status | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
CurrencyCode | STRING | NULLABLE | 
AdDistribution | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
DeviceType | STRING | NULLABLE | 
Language | STRING | NULLABLE | 
DeviceOS | STRING | NULLABLE | 
ImpressionSharePercent | STRING | NULLABLE | 
ImpressionLostToBudgetPercent | STRING | NULLABLE | 
ImpressionLostToRankAggPercent | STRING | NULLABLE | 
QualityScore | STRING | NULLABLE | 
ExpectedCtr | STRING | NULLABLE | 
AdRelevance | STRING | NULLABLE | 
LandingPageExperience | STRING | NULLABLE | 
HistoricalQualityScore | STRING | NULLABLE | 
HistoricalExpectedCtr | STRING | NULLABLE | 
HistoricalAdRelevance | STRING | NULLABLE | 
HistoricalLandingPageExperience | STRING | NULLABLE | 
PhoneImpressions | STRING | NULLABLE | 
PhoneCalls | STRING | NULLABLE | 
Ptr | STRING | NULLABLE | 
Network | STRING | NULLABLE | 
TopVsOther | STRING | NULLABLE | 
BidMatchType | STRING | NULLABLE | 
DeliveredMatchType | STRING | NULLABLE | 
Assists | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ReturnOnAdSpend | STRING | NULLABLE | 
CostPerAssist | STRING | NULLABLE | 
RevenuePerConversion | STRING | NULLABLE | 
RevenuePerAssist | STRING | NULLABLE | 
TrackingTemplate | STRING | NULLABLE | 
CustomParameters | STRING | NULLABLE | 
AccountStatus | STRING | NULLABLE | 
CampaignStatus | STRING | NULLABLE | 
AdGroupLabels | STRING | NULLABLE | 
ExactMatchImpressionSharePercent | STRING | NULLABLE | 
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

### "Ad" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdId | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
AdTitle | STRING | NULLABLE | 
AdDescription | STRING | NULLABLE | 
AdDescription2 | STRING | NULLABLE | 
AdType | STRING | NULLABLE | 
CurrencyCode | STRING | NULLABLE | 
AdDistribution | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
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
Assists | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ReturnOnAdSpend | STRING | NULLABLE | 
CostPerAssist | STRING | NULLABLE | 
RevenuePerConversion | STRING | NULLABLE | 
RevenuePerAssist | STRING | NULLABLE | 
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

### "Age & Gender" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
AdDistribution | STRING | NULLABLE | 
AgeGroup | STRING | NULLABLE | 
Gender | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ExtendedCost | STRING | NULLABLE | 
Assists | STRING | NULLABLE | 
Language | STRING | NULLABLE | 
AccountStatus | STRING | NULLABLE | 
CampaignStatus | STRING | NULLABLE | 
AdGroupStatus | STRING | NULLABLE | 
BaseCampaignId | STRING | NULLABLE | 
AllConversions | STRING | NULLABLE | 
AllRevenue | STRING | NULLABLE | 
ViewThroughConversions | STRING | NULLABLE | 

### "Audience" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
AudienceId | STRING | NULLABLE | 
AudienceName | STRING | NULLABLE | 
AssociationStatus | STRING | NULLABLE | 
BidAdjustment | STRING | NULLABLE | 
TargetingSetting | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ReturnOnAdSpend | STRING | NULLABLE | 
RevenuePerConversion | STRING | NULLABLE | 
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

### "Campaign" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
Country | STRING | NULLABLE | 
State | STRING | NULLABLE | 
MetroArea | STRING | NULLABLE | 
City | STRING | NULLABLE | 
CurrencyCode | STRING | NULLABLE | 
AdDistribution | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
ProximityTargetLocation | STRING | NULLABLE | 
Radius | STRING | NULLABLE | 
Language | STRING | NULLABLE | 
BidMatchType | STRING | NULLABLE | 
DeliveredMatchType | STRING | NULLABLE | 
Network | STRING | NULLABLE | 
TopVsOther | STRING | NULLABLE | 
DeviceType | STRING | NULLABLE | 
DeviceOS | STRING | NULLABLE | 
Assists | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ReturnOnAdSpend | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
CostPerAssist | STRING | NULLABLE | 
RevenuePerConversion | STRING | NULLABLE | 
RevenuePerAssist | STRING | NULLABLE | 
LocationType | STRING | NULLABLE | 
MostSpecificLocation | STRING | NULLABLE | 
AccountStatus | STRING | NULLABLE | 
CampaignStatus | STRING | NULLABLE | 
AdGroupStatus | STRING | NULLABLE | 
County | STRING | NULLABLE | 
PostalCode | STRING | NULLABLE | 
LocationId | STRING | NULLABLE | 
BaseCampaignId | STRING | NULLABLE | 
AllConversions | STRING | NULLABLE | 
AllRevenue | STRING | NULLABLE | 
AllConversionRate | STRING | NULLABLE | 
AllCostPerConversion | STRING | NULLABLE | 
AllReturnOnAdSpend | STRING | NULLABLE | 
AllRevenuePerConversion | STRING | NULLABLE | 
ViewThroughConversions | STRING | NULLABLE | 

### "Geo" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
Country | STRING | NULLABLE | 
State | STRING | NULLABLE | 
MetroArea | STRING | NULLABLE | 
City | STRING | NULLABLE | 
CurrencyCode | STRING | NULLABLE | 
AdDistribution | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
ProximityTargetLocation | STRING | NULLABLE | 
Radius | STRING | NULLABLE | 
Language | STRING | NULLABLE | 
BidMatchType | STRING | NULLABLE | 
DeliveredMatchType | STRING | NULLABLE | 
Network | STRING | NULLABLE | 
TopVsOther | STRING | NULLABLE | 
DeviceType | STRING | NULLABLE | 
DeviceOS | STRING | NULLABLE | 
Assists | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ReturnOnAdSpend | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
CostPerAssist | STRING | NULLABLE | 
RevenuePerConversion | STRING | NULLABLE | 
RevenuePerAssist | STRING | NULLABLE | 
LocationType | STRING | NULLABLE | 
MostSpecificLocation | STRING | NULLABLE | 
AccountStatus | STRING | NULLABLE | 
CampaignStatus | STRING | NULLABLE | 
AdGroupStatus | STRING | NULLABLE | 
County | STRING | NULLABLE | 
PostalCode | STRING | NULLABLE | 
LocationId | STRING | NULLABLE | 
BaseCampaignId | STRING | NULLABLE | 
AllConversions | STRING | NULLABLE | 
AllRevenue | STRING | NULLABLE | 
AllConversionRate | STRING | NULLABLE | 
AllCostPerConversion | STRING | NULLABLE | 
AllReturnOnAdSpend | STRING | NULLABLE | 
AllRevenuePerConversion | STRING | NULLABLE | 
ViewThroughConversions | STRING | NULLABLE | 

### "Keyword" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
Keyword | STRING | NULLABLE | 
KeywordId | STRING | NULLABLE | 
AdId | STRING | NULLABLE | 
AdType | STRING | NULLABLE | 
DestinationUrl | STRING | NULLABLE | 
CurrentMaxCpc | STRING | NULLABLE | 
CurrencyCode | STRING | NULLABLE | 
DeliveredMatchType | STRING | NULLABLE | 
AdDistribution | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
BidMatchType | STRING | NULLABLE | 
DeviceType | STRING | NULLABLE | 
QualityScore | STRING | NULLABLE | 
ExpectedCtr | STRING | NULLABLE | 
AdRelevance | STRING | NULLABLE | 
LandingPageExperience | STRING | NULLABLE | 
Language | STRING | NULLABLE | 
HistoricalQualityScore | STRING | NULLABLE | 
HistoricalExpectedCtr | STRING | NULLABLE | 
HistoricalAdRelevance | STRING | NULLABLE | 
HistoricalLandingPageExperience | STRING | NULLABLE | 
QualityImpact | STRING | NULLABLE | 
CampaignStatus | STRING | NULLABLE | 
AccountStatus | STRING | NULLABLE | 
AdGroupStatus | STRING | NULLABLE | 
KeywordStatus | STRING | NULLABLE | 
Network | STRING | NULLABLE | 
TopVsOther | STRING | NULLABLE | 
DeviceOS | STRING | NULLABLE | 
Assists | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ReturnOnAdSpend | STRING | NULLABLE | 
CostPerAssist | STRING | NULLABLE | 
RevenuePerConversion | STRING | NULLABLE | 
RevenuePerAssist | STRING | NULLABLE | 
TrackingTemplate | STRING | NULLABLE | 
CustomParameters | STRING | NULLABLE | 
FinalUrl | STRING | NULLABLE | 
FinalMobileUrl | STRING | NULLABLE | 
FinalAppUrl | STRING | NULLABLE | 
BidStrategyType | STRING | NULLABLE | 
KeywordLabels | STRING | NULLABLE | 
Mainline1Bid | STRING | NULLABLE | 
MainlineBid | STRING | NULLABLE | 
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

### "Search term" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
AdId | STRING | NULLABLE | 
AdType | STRING | NULLABLE | 
DestinationUrl | STRING | NULLABLE | 
BidMatchType | STRING | NULLABLE | 
DeliveredMatchType | STRING | NULLABLE | 
CampaignStatus | STRING | NULLABLE | 
AdStatus | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
SearchQuery | STRING | NULLABLE | 
Keyword | STRING | NULLABLE | 
AdGroupCriterionId | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
Language | STRING | NULLABLE | 
KeywordId | STRING | NULLABLE | 
Network | STRING | NULLABLE | 
TopVsOther | STRING | NULLABLE | 
DeviceType | STRING | NULLABLE | 
DeviceOS | STRING | NULLABLE | 
Assists | STRING | NULLABLE | 
Revenue | STRING | NULLABLE | 
ReturnOnAdSpend | STRING | NULLABLE | 
CostPerAssist | STRING | NULLABLE | 
RevenuePerConversion | STRING | NULLABLE | 
RevenuePerAssist | STRING | NULLABLE | 
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

### "Share of voice" report table structure

Field name | Type | Mode |
AccountName | STRING | NULLABLE | 
TimePeriod | STRING | NULLABLE | 
CampaignName | STRING | NULLABLE | 
AdGroupName | STRING | NULLABLE | 
Keyword | STRING | NULLABLE | 
DeliveredMatchType | STRING | NULLABLE | 
BidMatchType | STRING | NULLABLE | 
Language | STRING | NULLABLE | 
AccountNumber | STRING | NULLABLE | 
AccountId | STRING | NULLABLE | 
KeywordId | STRING | NULLABLE | 
AdGroupId | STRING | NULLABLE | 
CampaignId | STRING | NULLABLE | 
Impressions | STRING | NULLABLE | 
Clicks | STRING | NULLABLE | 
Ctr | STRING | NULLABLE | 
AverageCpc | STRING | NULLABLE | 
Spend | STRING | NULLABLE | 
AveragePosition | STRING | NULLABLE | 
ImpressionSharePercent | STRING | NULLABLE | 
ImpressionLostToBudgetPercent | STRING | NULLABLE | 
ImpressionLostToRankAggPercent | STRING | NULLABLE | 
CurrentMaxCpc | STRING | NULLABLE | 
QualityScore | STRING | NULLABLE | 
ExpectedCtr | STRING | NULLABLE | 
AdRelevance | STRING | NULLABLE | 
LandingPageExperience | STRING | NULLABLE | 
Conversions | STRING | NULLABLE | 
ConversionRate | STRING | NULLABLE | 
CostPerConversion | STRING | NULLABLE | 
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
ExactMatchImpressionSharePercent | STRING | NULLABLE | 
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