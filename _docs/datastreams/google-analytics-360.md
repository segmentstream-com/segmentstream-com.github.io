---
layout: page
section: datastreams
navigation_title: "Google Analytics 360"
title: "Google Analytics 360 Data Stream"
order: 2
date: 2021-06-01
---

With **Google Analytics 360** you can export session and hit data from a Google Analytics 360 account to BigQuery, and then use this data for SegmentSteam's marketing analytics and attribution.

## Getting started

1. Make sure [BigQuery export](https://support.google.com/analytics/answer/3416092){:target="blank"} is enabled for you Google Analytics 360 account.
2. Grant [BigQuery access](/bigquery/bigquey-access) for your GCP project where GA360 data is stored for the SegmentStream support team.

## Custom dimensions setup

In most cases, typical GA360 setup filters out different query parameters (i.e fbclid, etc) from the URL to make analytics in your GA360 UI more structured.

This leads to losing these parameters in your Google BigQuery data. As a workaround, it is required to send the full URL of each page in a separrate custom dimension.

Below you can find a step-by-step tutorial on how to do this.

1. Create a new custom dimension inside your Google Analytics 360 account with the name **Full URL** and **Scope** - **Hit**:
   ![Create GA360 Full URL custom dimension](/img/datastreams/ga360/ga360-1.png)
2. Once created, remember the number of the custom dimension, you will need it in further steps:
   ![GA360 Full URL custom dimension number](/img/datastreams/ga360/ga360-2.png)
3. Inside your Google Tag Manager go to **Variables**, and click **Configure**:  
   ![GTM built-in variables configure](/img/datastreams/ga360/ga360-gtm-1.png)
4. Make sure **Page URL** built-in variable is enabled:
   ![GTM Page URL built-in variable](/img/datastreams/ga360/ga360-gtm-2.png)
5. Open your **Google Analytics Settings** variable and define an additional custom dimension (make sure you use a proper number) with a **{% raw %}{{Page URL}}{% endraw %}** variable as a value:
   ![GA360 custom dimension send](/img/datastreams/ga360/ga360-gtm-3.png)
   > **Important!** In case you don't use **Google Analytics Settings** and define custom dimensions directly inside your Google Analytics tags, make sure that custom dimension with a **{% raw %}{{Page URL}}{% endraw %}** is implemented for all Google Analytics tags and events, not only for pageviews.
6. Click **Save** and **Publish** the container.
7. Make sure full URL is properly collected as a custom dimension inside your Google BigQuery GA360 data export.
