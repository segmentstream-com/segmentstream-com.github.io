---
layout: page
section: datasources
navigation_title: "Yandex.Direct"
title: "Yandex.Direct data source"
order: 15
date: 2020-06-19
---

## Getting started

1. Inside the admin panel navigate to the **Data Sources** page and click **+ NEW** on the top right corner.
2. Choose **Yandex.Direct** from the list.
3. Click **Authenticate with Yandex** and go through the authentication flow.
4. Apply additional settings if required.
5. Click **Save**.

## Configuration for advertising agencies

If you have an advertising agency account the option **Agency** should be enabled in the data source settings. This option makes it possible to import cost data for multiple clients which can be selected using **Client logins** dropdown.

Optionally, you can enable **Spend agency points** option. Points are transformed into a certain number of requests to the Yandex.Direct API per unit of time. If this option is enabled, when requesting the Yandex.Direct API, the points of the agency will be used, and not the advertiser.

## Supported dynamic URL parameters

By default Yandex.Direct allows to use a lot of [dynamic URL tagging parameters](https://yandex.com/support/direct/statistics/url-tags.html){:target="_blank"} to track campaigns.

SegmentStream supports the following parameters:

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

## UTM matching for Search banners

Currently, SegmentStream does not support automatic UTM matching for [Search banners](https://yandex.ru/support/direct/products-media-context-banner/about.html){:target="_blank"}. This means that you would need to match these types of campaigns manually inside the SegmentStream admin panel.

You can define the UTM parameters for all Search banners through the **URL parameters for all Search banners** setting, and also define them for specific Search banners by matching between the **Campaign ID** and **URL parameters** in the **URL parameters for specific Search banners** setting.

For example, if all Search banners have the following link to the website `http://www.site.com/?utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}` and a Search banner with the **Campaign ID** = `123123123` with the following link to the website: `http://www.site.com/?utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_term={keyword}&utm_content={banner_id}`, the mapping should be the following:

`123123123` ▸ `utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_term={keyword}&utm_content={banner_id}`

This is how it might look inside the admin panel:
![Yandex.Direct URL params matching](/img/yandex-direct/mcbanneroptions.png)
