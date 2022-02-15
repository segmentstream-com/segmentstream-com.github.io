---
layout: page
section: datasources
navigation_title: "AWIN"
title: "AWIN data source"
order: 10
date: 2020-10-16
---

## Before you begin
You must obtain an API token to provide access to AWIN data.

1. Login in to your [AWIN control panel](https://ui.AWIN.com/login){:target="_blank"}.
2. Go to the [API credentials section](https://ui.awin.com/awin-api){:target="_blank"}.
3. Enter your account password into the box to display your API token.
![Generate API token](/img/awin-api-token.jpg)

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **AWIN** from the list.
3. Paste **API token** into input field. Click **Save**.
4. Add **Account**, **Region**, **Time zone** and input **AWIN comission %**. Add all accounts which cost data you would like to import.
![Choose AWIN account](/img/awin-config-1.png)
5. Make sure **Transactions**, **Publisher performance report**, **Creative performance report**, radial buttons are on.
![Import reports](/img/awin-config-2.png)
6. Configure additional transformation settings.
![Utm Mapping example](/img/awin-config-3.png)
7. Click **Save**.

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting. Once enabled, a new table with cost data grouped by UTM will appear in your data warehouse.

### UTM matching for campaigns

Currently, SegmentStream supports automatic UTM matching for AWIN campaigns only when UTM params are defined inside the URL for each offer in your product feed. Otherwise, you would need to match AWIN campaigns manually inside the SegmentStream admin panel.

By default, the following matching applies for `utm_source` and `utm_medium`:
* `utm_source` ▸ `AWIN`
* `utm_medium` ▸ `Publisher type`

This matching can be changed inside the admin panel by specifying appropriate values **UTM source**, **UTM medium**, and **UTM campaign** options.
![UTM Grouping options](/img/awin-utm_options.png)
