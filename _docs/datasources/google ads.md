---
layout: page
section: datasources
title: "Google Ads"
---

In this section you will learn:
* How to connect Google Ads data import.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#importing-data">Importing data from Google Ads</a></li>
  <li><a href="#connecting-and-configuring">Connecting and configuring</a></li>
  <li><a href="#options-description">Options description</a></li>
  <li><a href="#display-name">Display name</a></li>
  <li><a href="#cost-multiplier">Cost multiplier</a></li>
  <li><a href="#customer-ids">Customer ID(s)</a></li>
  <li><a href="#keyword-performance-report">Import "Keyword Performance" report</a></li>
  <li><a href="#audience-performance-report">Import "Audience Performance" report</a></li>
  <li><a href="#criteria-performance-report">Import "Criteria Performance" report</a></li>
  <li><a href="#placement-performance-report">Import "Placement Performance" report</a></li>
  <li><a href="#click-performance-report">Import "Click Performance" report</a></li>
  <li><a href="#campaign-performance-report">Import "Campaign Performance" report</a></li>
  <li><a href="#ad-performance-report">Import "Ad Performance" report</a></li>
  <li><a href="#normalized-costs-report">Import normalized costs report</a></li>
  <li><a href="#managed-customers-dictionary">Import "Managed Customers" dictionary</a></li>
  <li><a href="#user-interest-dictionary">Import "User Interest" dictionary</a></li>
  <li><a href="#adwords-user-list-dictionary">Import "Adwords User List" dictionary</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data source</a></li>
  <li><a href="#how-to-find-your-account-id">How to Find Your Account ID</a></li>
  <li><a href="#what-customer-id-to-add">What Customer ID to add</a></li>
  <li><a href="#where-to-get-data-on-advertising-costs">Where to get data on advertising costs</a></li>
  <li><a href="#where-to-get-dictionary-data">Where to get dictionary data</a></li>
  <li><a href="#supported-substitutions">Supported substitutions</a></li>
  <li><a href="#table-structures">Table structures</a></li>
</ul>

### <a name="importing-data"></a>Importing data from Google Ads
------

After enabling this data source, Google Ads advertising costs information for the past 7 days will be uploaded to BigQuery once every 24 hours.

This integration is available for both ordinary advertisers and advertising agencies.

### <a name="connecting-and-configuring"></a>Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

After authorization you need to set the data source parameters.

### <a name="options-description"></a>Options description
------
![](/img/gl-a.4.png)

### <a name="display-name"></a>Display name
The name of the data source. It is displayed in the interface in the list of sources.

### <a name="cost-multiplier"></a>Cost multiplier
Value multiplier. Multiplied by the cost in the final report.

### <a name="customer-ids"></a>Customer ID(s)
For a full picture of advertising costs, you need to add all your active advertising accounts (see the <a href="#how-to-find-your-account-id">"How to Find Your Account ID"<a/> section to find out where to find the advertising account ID).

### <a name="keyword-performance-report"></a>Import "Keyword Performance" report
Enable "Keyword Performance" report import, without normalizing the values ​​in the table.

### <a name="audience-performance-report"></a>Import "Audience Performance" report
Enable "Audience Performance" report import, without normalizing the values ​​in the table.

### <a name="criteria-performance-report"></a>Import "Criteria Performance" report
Enable "Criteria Performance" report import, without normalizing the values ​​in the table.

### <a name="placement-performance-report"></a>Import "Placement Performance" report
Enable "Placement Performance" report import, without normalizing the values ​​in the table.

### <a name="click-performance-report"></a>Import "Click Performance" report
Enable "Click Performance" report import, without normalizing the values ​​in the table.

### <a name="campaign-performance-report"></a>Import "Campaign Performance" report
Enable "Campaign Performance" report import, without normalizing the values ​​in the table.

### <a name="ad-performance-report"></a>Import "Ad Performance" report
Enable "Ad Performance" report import, without normalizing the values ​​in the table.

### <a name="normalized-costs-report"></a>Import normalized costs report
Imports normalized expenses report.

### <a name="managed-customers-dictionary"></a>Import "Managed Customers" dictionary
Enable "Managed Customers" dictionary import.

### <a name="user-interest-dictionary"></a>Import "User Interest" dictionary
Enable "User Interest" dictionary import.

### <a name="adwords-user-list-dictionary"></a>Import "Adwords User List" dictionary
Enable "Adwords User List" dictionary import.

### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.

### <a name="how-to-find-your-accound-id"></a>How to Find Your Account ID

Log in to Google Ads with an account that has access to the desired company. Depending on how many accounts you have created, copy the Customer ID. If you have more than one account, then you need to copy the account ID under the number 1. If you have only one account, then copy the ID under the number 2.

Customer ID has the following format XXX-XXX-XXXX, where X - is a number from 0 to 9.

### <a name="what-customer-id-to-add"></a>What Customer ID to add

The following list shows the Customer IDs linked to particular Google Ads manager accounts:

- 1234 — manager account
  - 1111 — Customer ID
  - 2222 — Customer ID
  - 3333 — Customer ID
  - 4444 — Customer ID

> If you want to download reports for all managed accounts (ex. 1111, 2222, 3333, 4444), specify the manager account (ex. 1234). SegmentStream will do everything by itself.

![](/img/gl-a.3.png)

### <a name="where-to-get-data-on-advertising-costs"></a>Where to get data on advertising costs

- **googleAdsCosts_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for normalized costs
- **googleAdsKeywordsPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Keyword Performance" report
- **googleAdsAudiencePerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Audience Performance" report
- **googleAdsCriteriaPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Criteria Performance" report
- **googleAdsPlacementPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Placement Performance" report
- **googleAdsClickPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Click Performance" report
- **googleAdsCampaignPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Campaign Performance" report
- **googleAdsAdPerformance_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Ad Performance" report

### <a name="where-to-get-dictionary-data"></a>Where to get dictionary data

- **googleAdsManagedCustomersDict_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Managed Customers" dictionary
- **googleAdsUserInterestDict_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "User Interest" dictionary
- **googleAdsAdwordsUserListDict_{NORMALIZED_CUSTOMER_ID}_{YYYYMMDD}** - data for "Adwords User List" dictionary

### <a name="supported-substitutions"></a>Supported substitutions

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

### <a name="table-structures"></a>Table structures
------

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
