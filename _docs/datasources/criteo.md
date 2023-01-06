---
layout: page
section: datasources
navigation_title: "Criteo"
title: "Criteo data source"
order: 9
date: 2021-03-08
---

## Before you begin

Make sure you have Admin rights for the Criteo Account:
1. Go to [https://partners.criteo.com/](https://partners.criteo.com/){:target="blank"}.
2. Create a new Organization (if it is not already created):
<img src="/img/criteo_auth_1_create_Organization.png" alt="Criteo — Organisation" width="600" style="display:block"/>
3. Click the **Create New App** button and select **Client Credentials**:
<img src="/img/criteo_auth_2_create_app.png" alt="Criteo — Create app" width="600" style="display:block"/>
4. Fill in the **Name** and the **Description** fields and click **Create**.
<img src="/img/criteo_auth_3_create_app.png" alt="Criteo — Create app" width="600" style="display:block"/>
Configure a new app:
5. Navigate to the **Service** section, choose **Marketing solutions**. Click **Save**:
<img src="/img/criteo_auth_5-1_service.png" alt="Criteo — Marketing" width="600" style="display:block"/>
6. Navigate to the **Authorization** section, choose the **Read** value for every Domain in the row. Click **Save**:
<img src="/img/criteo_auth_5-2_auth.png" alt="Criteo — Authorization" width="600" style="display:block"/>
7. Navigate to the **App Credentials** section and click the **Create new key** button. The browser will download a text file with the New App credentials:
<img src="/img/criteo_auth_5-3_create_new.png" alt="Criteo — App Credentials" width="600" style="display:block"/>
8. Click **Activate App** in the right upper corner:
<img src="/img/criteo_auth_8_generate.png" alt="Criteo — Authorize App" width="600" style="display:block"/>
9. Click **Generate URL** and copy-paste it in the address bar of the browser.
10. Scroll to the **Portfolio Access** section, choose the **Account name** and click **Ok**:
<img src="/img/criteo_auth_9_portfolio_access.png" alt="Criteo — Portfolio Access" width="600" style="display:block"/>

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Criteo** from the list.
3. Open the downloaded file with the **App Credentials** and copy-paste **Client Id** and **Client Secret**.
![App Credentials](../img/criteo_1.png)
4. Enable required reports.
5. Click **Save**.
## UTM matching for campaigns

Currently, SegmentStream does not support automatic UTM matching for Criteo campaigns. This means that you would need to match Criteo campaigns manually inside the SegmentStream admin panel.

By default, the following matching applies for `utm_source` and `utm_medium`:
* `utm_source` ▸ `criteo`
* `utm_medium` ▸ `cpc`

This matching can be changed inside the admin panel by specifying appropriate values **UTM source** and **UTM medium** options.

For all your Criteo campaigns you need to define matching between the **Campaign ID** and **UTM campaign**.

For example, if you have a Criteo campaign with the **Campaign ID** = `123123123` with the following link to the website: `http://www.site.com/?utm_source=criteo&utm_medium=retargeting&utm_campaign=upper_funnel`, the mapping should be the following:

* `123123123` ▸ `upper_funnel`

This is how it might look inside the admin panel:
<img src="/img/criteo/criteo-utm-params.png" alt="Criteo URL params matching" width="650"/>
