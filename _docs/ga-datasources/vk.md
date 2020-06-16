---
layout: page
section: ga-datasources
navigation_title: "VK"
title: "VK data source"
order: 7
date: 2020-06-09
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **VK** from the list.
3. Click **Authenticate with VK** and go through the authentication flow.
4. Select **Account** which cost data you would like to import
5. Optionally, select **Client** which cost data you would like to import (only for agency accounts).
6. Click **Save**.
  
## UTM matching for dynamic remarketing ads

Currently, SegmentStream does not support automatic UTM matching for dynamic remarketing campaigns based on pricelists.

Usually, there are 2 options how you define UTM parameters for your dynamic remarketing campaigns:

1. Inside the XML/YML product feed
2. Inside the pricelist settings:
![VK Pricelist UTM params](/img/vk/vk-pricelist.png)

Unfortunately, at the moment VK API does not allow to retrieve these settings. As a workaround, you should define the same UTM params you defined in pricelist settings inside the Ad Carousel Post. This is how you can do it.

1. Open your dynamic remarketing ad settings and click on the link which leads to the Carousel community post which is used as a layout for your ad:
![VK ad carousel post link](/img/vk/vk-carousel-layout-link.png)

2. Click edit:
![VK ad carousel edit](/img/vk/vk-carousel-edit.png)

3. Click on the link of the first product in the carousel to edit it:
![VK ad carousel link edit](/img/vk/vk-carousel-link-edit.png)

4. Enter any external website link (anyway it will be overriden by your XML/YML feed values) with the UTM paramters **identical** to the UTM paramters for the pricelist.
![VK ad carousel link value](/img/vk/vk-carousel-link-value.png)

For example, if you pricelist has the following value:
`utm_source=vk&utm_medium=cpc&utm_campaign=carousel_dynamic_retargeting&utm_content={campaign_id}&utm_term={ad_id}`

The value of you carousel product link after the `?` sign should be completely identical:
`https://website.com/?utm_source=vk&utm_medium=cpc&utm_campaign=carousel_dynamic_retargeting&utm_content={campaign_id}&utm_term={ad_id}`

> Note, that if you have pricelists with different URL templates, you should create a separate carousel layour for each ad.
