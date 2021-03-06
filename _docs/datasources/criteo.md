---
layout: page
section: datasources
navigation_title: "Criteo"
title: "Criteo data source"
order: 10
date: 2020-07-20
---

## Before you begin

Make sure you have Admin rights for the Criteo Account:
1. Go to [https://partners.criteo.com/](https://partners.criteo.com/){:target="blank"}.
2. Create a new Organization (if it is not already created).
![Organisation](../img/criteo_auth_1_create_Organization.png)
3. Click the **Create New App** button. 
![Create app](../img/criteo_auth_2_create_app.png)
4. Fill in the **Name** and the **Description** fields and click **Create App**.
Configure a new app:
5. Navigate to the **Service** section, choose **Marketing solutions**. Click **Save**.
![Marketing](../img/criteo_auth_5-1_service.png)
6. Navigate to the **Authorization** section, choose the **Read** value for every Domain in the row. Click **Save**.
![Authorization](../img/criteo_auth_5-2_auth.png)
7. Navigate to the **App Credentials** section and click the **Create new key** button. The browser will download a text file with the New App credentials.
![App Credentials](../img/criteo_auth_5-3_create_new.png)
8. Click **Authorize App** in the right upper corner.
![Auth App](../img/criteo_auth_8_generate.png)
9. Click **Generate URL** and copy-paste it in the address bar of the browser.
10. Scroll to the **Portfolio Access** section, choose the **Account name** and click **Ok**. 
![Access](../img/criteo_auth_9_portfolio_access.png)

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Criteo** from the list.
3. Open the downloaded file with the **App Credentials** and copy-paste **Client Id** and **Client Secret**.
![App Credentials](../img/criteo_1.png)
4. Enable required reports.
5. Click **Save**.

## Available reports

SegmentStream allows to import the following reports from Criteo.

### Campaign performance

#### Table name
**`criteoCampaignPerformance_{ADVERTISER_ID}_{YYYYMMDD}`**

#### Table schema

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
impressions | INTEGER | REQUIRED
clicks | INTEGER | REQUIRED
campaign_id | INTEGER | REQUIRED
campaign | STRING | REQUIRED

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### Table name
**`criteoCosts_{ADVERTISER_ID}_{YYYYMMDD}`**

### Table schema

Field name|Type|Mode
--- | --- | ---
date | DATE | NULLABLE
cost | FLOAT | NULLABLE
clicks | FLOAT | NULLABLE
impressions | FLOAT | NULLABLE
utmTerm | INTEGER | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmSource | STRING | NULLABLE
currency | STRING | NULLABLE

### UTM matching for campaigns

Currently, SegmentStream does not support automatic UTM matching for Criteo campaigns. This means that you would need to match Criteo campaigns mannually inside the SegmentStream admin panel.

By default, the following matching applies for `utm_source` and `utm_medium`:
* `utm_source` ▸ `criteo`
* `utm_medium` ▸ `cpc`

This matching can be changed inside the admin panel by specifying appropriate values **UTM source** and **UTM medium** options.

For all your Criteo campaigns you need to define matching between the **Campaign ID** and **UTM campaign**.

For example, if you have a Criteo campaign with the **Campaign ID** = `123123123` with the following link to the website: `http://www.site.com/?utm_source=criteo&utm_medium=retargeting&utm_campaign=upper_funnel`, the mapping should be the following:

* `123123123` ▸ `upper_funnel`

This is how it might look inside the admin panel:
<img src="/img/criteo/criteo-utm-params.png" alt="Criteo URL params matching" width="650"/>
