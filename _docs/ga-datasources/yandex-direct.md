---
layout: page
section: ga-datasources
title: "Yandex.Direct"
order: 4
date: 2020-06-08
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Yandex.Direct** from the list.
3. Click **Authenticate with Yandex** and go through the authentication flow.
4. Apply additional settings if required.
5. Click **Save**.

## Configuration for advertising agencies

If you have an advertising agency account the option **Agency** should be enabled in the data source settings. This option makes it possible to import cost data for multiple clients which can be selected using **Client logins** dropdown.

Optionally, you can enable **Spend agency points** option. Points are transformed into a certain number of requests to the Yandex.Direct API per unit of time. If this option is enabled, when requesting the Yandex.Direct API, the points of the agency will be used, and not the advertiser.

## Supported dynamic URL parameters

By default Yandex.Direct allows to use a lot of [dynamic URL tagging parameters](https://yandex.com/support/direct/statistics/url-tags.html){:target="_blank"} to track campains.

SegmentStream supports the following parameters.

Name|Description|Transmitted value
--- | --- | ---
`{ad_id}` or `{banner_id}` | ID of ad. | number
`{addphrases}` | Whether the impression was initiated by [related keywords](https://yandex.com/support/direct/keywords/related-keywords.html){:target="_blank"}. | `yes` — ad impression according to related keyword<br/>`no` — ad impression according to one of the source keywords
`{campaign_name}` | Naming a campaign. | text up to 60 characters
`{campaign_type}` | Campaign type. | `type1` — Text & Image ads<br/>`type2` — Ads for Mobile Apps<br/>`type3` — Dynamic ads<br/>`type4` — Smart banners<br/>`type6` — Search banner
`{campaign_id}` | Ad campaign ID. | number
`{device_type}` | Device type on which impression was made. | `desktop` — desktop<br/>`mobile` — mobile phone<br/>`tablet` — tablet
`{gbid}` | Group ID. | number
`{keyword}` | The keyword for which the ad was displayed (Text & Image Ads or Ads for Mobile Apps). | keyword text without negative keywords
`{phrase_id}` | The ID of the keyword for the Text & Image Ads or Ads for Mobile Apps. | number
`{retargeting_id}` | Audience target ID that links an ad group with a retargeting list or mobile app interests. Read more about audience targets in the [Yandex.Direct API documentation](https://yandex.ru/dev/direct/doc/dg/objects/audience-target-docpage/?ncrnd=8779){:target="_blank"}. | number
`{coef_goal_context_id}` | Bid adjustment ID for retargeting list. | number
`{adtarget_name}` | Dynamic text ad target. | name of a dynamic text ad target
`{adtarget_id}` | ID of a [targeting condition](https://yandex.com/support/direct/dynamic-text-ads/tools.html){:target="_blank"} for dynamic ad. | number
`{position_type}` | Ad block type if the ad appeared on a Yandex search results page. | `premium` — premium placement<br/>`other` — block to the right or at the bottom<br/>`none` — ad was displayed in the ad networks (YAN or ad exchanges)
`{source}` | Placement. | ad network publisher domain (for example, `travel.ru`) for impressions in ad networks (YAN or ad exchanges)<br/>`none` for impressions on Yandex search<br/>To serve on search sites in the Yandex Advertising Network, use either the domain or the value none.
`{source_type}` | Ad network type. | `search` — search site<br/>`context` — ad network site
`{region_name}` | Name of the region where the ad has been displayed. | name of the region
`{region_id}` | ID of the region where the ad has been displayed. | number

If you use some of the unsupported parameters in UTM-tags SegmentStream will not be able to match your cost data with Google Analytics sessions for this UTM-tag.

In order to keep matching visits and ad expenses in the cost analysis reports, move the unsupported parameters from UTM-tags to additional custom GET-parameters and collect them to custom dimensions in Google Analytics:

* Cost data will be available only for UTM-tags values.
* Session data will be available for unsupported parameters (through custom dimensions) and UTM-tags values.

> **Note.** Make sure you tag all campaign [sitelinks](https://yandex.com/support/direct/efficiency/quick-links.html#quick-links){:target="_blank"} the same way you tag the campaign. Otherwise SegmentStream might not be able to properly match clicks from sitelinks with Google Analytics sessions.

## UTM matching for Smart banners and Search banners

Currently, SegmentStream does not support automatic UTM matching for [Smart banners](https://yandex.ru/support/direct/smart-banners/about.html){:target="_blank"} and [Search banners](https://yandex.ru/support/direct/products-media-context-banner/about.html){:target="_blank"}.

This means that you would need to match these types of campaigns mannually inside the SegmentStream admin panel.

For all your Smart banners and Search banners you need to define matching between the **Campaign Id** and **URL parameters**. For example, if you have a Search banner with the **Campaign ID** = `123123123` with the following link to the website: `http://www.site.com/?utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_term={keyword}&utm_content={banner_id}`, the mapping inside the SegmentStream admin panel should look the following way:
`123123123` -> `utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_term={keyword}&utm_content={banner_id}`

<!--
> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from Yandex.Direct

After enabling this data source, Yandex.Direct advertising costs information will be uploaded to BigQuery once every 24 hours.

This integration is available for both ordinary advertisers and advertising agencies.

## Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/YD2.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) **Import normalized costs report**  - enable normalized costs report import.

(3) **Import campaign performance report** - enable campaign performance report import, without normalizing the values ​​in the table.

(4) Take into account the VAT. If you do not check the box, the prices in the report will be exclusive of VAT.

(5) The data source belongs to the agency. See Customization for advertising agencies.

(6) Value multiplier. Multiplied by the cost in the final report.

If you use smart banners for advertising, you must fill in the parameters (7) and (8).

(7) Smart banner advertising campaign identifier.

(8) Utm parameters of the url for the smart banner are copied from the settings of the Yandex.Direct advertising account: **Editing active smart banners** → **URL parameters**.

Example: `utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_term={ad_id}&utm_content={gbid}`

Notes:
- You must fill the url params for all smart banners.
- Using any of the `keyword`, `phrase_id`, `retargeting_id`, `adtarget_name`, `adtarget_id` substitution params in smart banners will cause the loss of `Impressions` data for all smart banner campaigns.

(9) Media context banner advertising campaign identifier.

(10) Utm parameters of the url for the media context banner are copied from the settings of the Yandex.Direct advertising account: **Editing active banners** → **Link to site**.

Example: `utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_term={ad_id}&utm_content={gbid}`

![](/img/YD.contextBannerSetting.png)

Notes:
- You must fill the url params for all media context banners.

## Configuration for advertising agencies

When the "Agency" option is enabled, new options become available.

![](/img/YD3.png)

(1) Spend agency points. Agency points will be used to retrieve reports. Points are transformed into a certain number of requests to the Yandex.Direct API per unit of time. If this option is enabled, when requesting the Yandex.Direct API, the points of the agency will be used, and not the advertiser.

(2),(3) Yandex accounts of your advertisers. Account names are used for authorization and become part of the tables in the final reports.

---

To save and enable the data source, click "Save" (1)

![](/img/YD4.png)

Clicking "Remove" (2) will delete the data source with its options and authorization.

You can enable or disable the data source at any time (3).

The "Disconnect" button (4) is used to revoke the authorization data. The settings are saved.

## Where to get data on advertising costs

- **yandexDirectCampaignPerformance_{login}_{DATE}** - data for full campaign performance report downloaded from Yandex.Direct
- **yandexDirectCosts_{login}_{DATE}** - data for report containing information on clicks, impressions and cost in the context of advertisements

For advertising agencies, the number of tables will be a multiple of the number of advertisers connected.

## Substitution params

You can use Yandex.Direct's dynamic parameters in ad urls and smart banners. List of supported substitutions:
- `ad_id`
- `banner_id`
- `addphrases`
- `campaign_id`
- `campaign_name`
- `campaign_type`
- `device_type`
- `gbid`
- `keyword`
- `phrase_id`
- `retargeting_id`
- `coef_goal_context_id`
- `position_type`
- `source`
- `region_name`
- `region_id`
- `source_type`
- `adtarget_name`
- `adtarget_id`

Read more about dynamic parameters: [https://yandex.ru/support/direct/statistics/url-tags.html](https://yandex.ru/support/direct/statistics/url-tags.html?lang=en)


## Tables structure

**yandexDirectCosts**

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
utmTerm | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | REQUIRED
utmSource | STRING | REQUIRED

**yandexDirectCampaignPerformance**

Field name|Type|Mode
--- | --- | ---
CampaignType | STRING | NULLABLE
MatchType | STRING | NULLABLE
Criterion | STRING | NULLABLE
Device | STRING | NULLABLE
Clicks | INTEGER | NULLABLE
Impressions | INTEGER | NULLABLE
Cost | INTEGER | NULLABLE
Placement | STRING | NULLABLE
CriterionType | STRING | NULLABLE
AdGroupId | INTEGER | NULLABLE
Date | DATE | NULLABLE
CampaignId | INTEGER | NULLABLE
CampaignName | STRING | NULLABLE
AdId | INTEGER | NULLABLE
AdNetworkType | STRING | NULLABLE
CriterionId | INTEGER | NULLABLE
MobilePlatform | STRING | NULLABLE
AdGroupName | STRING | NULLABLE
Gender | STRING | NULLABLE
LocationOfPresenceId | STRING | NULLABLE
LocationOfPresenceName | STRING | NULLABLE

-->