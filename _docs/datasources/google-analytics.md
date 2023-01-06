---
layout: page
section: datasources
title: "Google Analytics"
order: 10
date: 2020-07-22
---

Google Analytics is a web analytics service used to track website activity such as session duration, pages per session, bounce rate etc. of individuals using the site, along with the information on the source of the traffic and site conversion (goals). Goals might include sales, lead generation, viewing a specific page, or downloading a particular file. [Visit Website ▸](https://marketingplatform.google.com/about/analytics/){:target="_blank"}

SegmentStream allows importing raw data from Google Analytics into your own Google BigQuery data warehouse for further processing and analysis.

## Getting started

1. Inside the admin panel navigate to the **Data Sources** page and click **+ NEW** on the top right corner.
2. Choose **Google Analytics** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Select **Account**, **Property** and **View** you would like to import the data from.
5. Define Google BigQuery **Destination table** where imported data will be stored.
6. Select up to 7 dimensions and up to 10 metrics you would like to import.
7. Click **Save**.

## Metrics and dimensions valid combinations

Not all dimensions and metrics can be queried together. Only certain dimensions and metrics can be used together to create valid combinations. We recommend using the [Dimensions & Metrics Explorer](https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/){:target="_blank"} to make sure that the settings used are valid.

## Limits

Google Analytics Core Reporting API allows importing maximum of [7 dimensions](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#dimensions){:target="_blank"} and [10 metrics](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#metrics){:target="_blank"} per query. If you need to import more dimensions and metrics you can always create an additional Google Analytics data source.
