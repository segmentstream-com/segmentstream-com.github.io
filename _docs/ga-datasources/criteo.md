---
layout: page
section: ga-datasources
navigation_title: "Criteo"
title: "Criteo data source"
order: 2
date: 2020-07-20
---

## Before you begin

Make sure that you've created an API user in the Criteo Management Center.
1. Go to https://marketing.criteo.com/.
2. Log in, click **Setup->Users**.
3. Click **CREATE API USER**.
4. Enter an email address and select the "Business Manager" user role.
5. Click **Add user**.
6. A confirmation window will open, containing your Client ID and Client Secret, which are required to connect to the Criteo API.

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **Criteo** from the list.
3. Authenticate using your API user **Client ID** and **Client Secret**.
4. Click **Save**.

## UTM matching for campaigns

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
