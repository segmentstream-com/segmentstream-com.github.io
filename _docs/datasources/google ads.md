---
layout: page
section: datasources
title: "Google Ads"
order: 2
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing data from Google Ads

After enabling this data source, Google Ads advertising costs information for the past 7 days will be uploaded to BigQuery once every 24 hours.

This integration is available for both ordinary advertisers and advertising agencies.

### Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/gl-a.2.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Value multiplier. Multiplied by the cost in the final report.

For a full picture of advertising costs, you need to add all your active advertising accounts (3) (see the "How to Find Your Account ID" section to find out where to find the advertising account ID).

**Import "Keyword Performance" report** (4) - enable "Keyword Performance" report import, without normalizing the values ​​in the table.

**Import "Audience Performance" report** (5) - enable "Audience Performance" report import, without normalizing the values ​​in the table.

**Import "Criteria Performance" report** (6) - enable "Criteria Performance" report import, without normalizing the values ​​in the table.

**Import "Placement Performance" report** (7) - enable "Placement Performance" report import, without normalizing the values ​​in the table.

**Import "Click Performance" report** (8) - enable "Click Performance" report import, without normalizing the values ​​in the table.

**Import "Campaign Performance" report** (9) - enable "Campaign Performance" report import, without normalizing the values ​​in the table.

**Import "Ad Performance" report** (10) - enable "Ad Performance" report import, without normalizing the values ​​in the table.

**Import normalized costs report** (11) - imports normalized expenses report.

**Import "ManagedCustomers" dictionary** (12) - enable "ManagedCustomers" dictionary import.

**Import "UserInterest" dictionary** (13) - enable "UserInterest" dictionary import.

**Import "AdwordsUserList" dictionary** (14) - enable "AdwordsUserList" dictionary import.


To save and enable the data source, click "Save" (15).

The "Disconnect" button (17) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (16).

### How to Find Your Account ID

Log in to Google Ads with an account that has access to the desired company. Depending on how many accounts you have created, copy the Customer ID. If you have more than one account, then you need to copy the account ID under the number 1. If you have only one account, then copy the ID under the number 2.

Customer ID has the following format XXX-XXX-XXXX, where X - is a number from 0 to 9.

### What Customer ID to add

The following list shows the Customer IDs linked to particular Google Ads manager accounts:

- 1234 — manager account
  - 1111 — Customer ID
  - 2222 — Customer ID
  - 3333 — Customer ID
  - 4444 — Customer ID

> If you want to download reports for all managed accounts (ex. 1111, 2222, 3333, 4444), specify the manager account (ex. 1234). SegmentStream will do everything by itself.

![](/img/gl-a.3.png)

### Where to get data on advertising costs

- **googleAdsCosts_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for normalized costs
- **googleAdsKeywordsPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Keyword Performance" report
- **googleAdsAudiencePerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Audience Performance" report
- **googleAdsCriteriaPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Criteria Performance" report
- **googleAdsPlacementPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Placement Performance" report
- **googleAdsClickPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Click Performance" report
- **googleAdsCampaignPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Campaign Performance" report
- **googleAdsAdPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Ad Performance" report

### Where to get dictionary data

- **googleAdsManagedCustomersDict_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "ManagedCustomers" dictionary
- **googleAdsUserInterestDict_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "UserInterest" dictionary
- **googleAdsAdwordsUserListDict_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "AdwordsUserList" dictionary

### Supported substitutions

* lpurl
* gclid
* campaignid
* adgroupid
* creative
* network
* keyword
* loc_interest_ms
* loc_physical_ms
* matchtype
* device
* targetid


### Normalized costs table structure

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
utmTerm | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmSource | STRING | NULLABLE
currency | STRING | NULLABLE

### "Keyword Performance" report table structure

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

### "Audience Performance" report table structure

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

### "Criteria Performance" report table structure

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

### "Placement Performance" report table structure

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

### "Click Performance" report table structure

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

### "Campaign Performance" report table structure

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

### "Ad Performance" report table structure

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

### "ManagedCustomers" dictionary table structure
Field name|Type|Mode
--- | --- | ---
CustomerId | STRING | REQUIRED
Name | STRING | REQUIRED
Currency | STRING | REQUIRED
Labels | STRING | NULLABLE

### "UserInterest" dictionary table structure
Field name|Type|Mode
--- | --- | ---
UserInterestId | INTEGER | REQUIRED
UserInterestName | STRING | REQUIRED

### "AdwordsUserList" dictionary table structure
Field name|Type|Mode
--- | --- | ---
Id | INTEGER | REQUIRED
Name | STRING | REQUIRED