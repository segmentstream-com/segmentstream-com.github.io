---
layout: page
section: guides
navigation_title: "Importing cost data from Google Sheets"
title: "Importing cost data from Google Sheets"
date: 2020-05-29
---

This document describes how to import costs data from any advertisement network into BigQuery using Google Sheets document.

Imported data can be combined with other website data to improve ROI reporting by increasing the number of attributed conversions.

##  Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).

##  Creating costs sheet

SegmentStream can download costs sheet from Google Sheets and import its’ content into Google BigQuery.

##  Sheet requirements

Name | Type | Description | Example |
--- | --- | --- | --- |
date |required | Reporting day in format YYYY-MM-DD ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)) | 2020-04-03
currency|required|Currency code|USD
cost|required|Total cost of spendings in the reporting day. Floating point number|1000.13
impressions|optional|Total number of impressions in the reporting day. Integer|10000
clicks|optional|Total number of impressions in the reporting day. Integer|1000
utmMedium|required|Value of the utm_medium URL parameter that is reported|cpa
utmSource|required|Value of the utm_source URL parameter that is reported|admitad
utmCampaign|optional|Value of the utm_campaign URL parameter that is reported|campaign1
utmTerm|optional|Value of the utm_term URL parameter that is reported|black_shoes
utmContent|optional|Value of the utm_content URL parameter that is reported|bottom_cta_button

##  Costs sheet example

Here is the [example of the valid Costs Sheet document ▸](https://docs.google.com/spreadsheets/d/1rHqVpQP-dJnd7Cx5cxXNUJETi3Ko_ljuIAigbYskvIQ/edit#gid=0).

##  Enabling “Google Sheet” data source

1. Go to [SegmentStream admin panel ▸](https://admin.segmentstream.com/).
2. Open **Data Sources ▸ Add Data Source**.
3. Select **Google Sheets**.
4. **Authenticate** with your Google account that contains the sheet containing data that you want to upload to BigQuery.
5. In the **Google Spreadsheet URL** field specify the URL of the sheet that you want to import.
6. If you want to load data only from a specific range, type it in the **Range** field. Otherwise leave it empty.
7. If you want to define column types in resulting BigQuery table, you can use **Column types** field for that. By default all of the columns will be of **String** type.
8. In the **Destination table name** field specify the BigQuery table name that will contain imported sheet data.

> ❗️You can find more information on the data source fields [in the documentation ▸](https://admin.segmentstream.com/).

##  What's next

During the next 24 hours your data will be uploaded to the corresponding BigQuery table.
