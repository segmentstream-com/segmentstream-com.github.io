---
layout: page
section: guides
navigation_title: "Importing cost data from Google Sheets"
title: "Importing cost data from Google Sheets"
date: 2020-07-20
---

This document describes how to import custom costs data into BigQuery using Google Sheets.

Imported data can be combined with other website data to improve ROI reporting by increasing the number of attributed conversions.

## Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).

## Costs sheet format

Name | Type | Required | Description | Example |
--- | --- | --- | --- | --- |
date | DATE | **required** |  Reporting date `YYYY-MM-DD` format YYYY-MM-DD | 2020-04-03
currency| STRING | **required** | Currency code | USD
cost | FLOAT | **required** | Total spendings for the reporting date. | 460.5
impressions| INTEGER | optional | Total number of impressions during the day. | 12500
clicks | INTEGER | optional | Total number of impressions during the day. | 284
utmMedium | STRING | **required** | utm_medium URL parameter attributied to the costs entry | cpa
utmSource | STRING | **required** | utm_source URL parameter attributied to the costs entry | partner1
utmCampaign | STRING | optional | utm_campaign URL parameter attributied to the costs entry | campaign1
utmTerm | STRING | optional | utm_term URL parameter attributied to the costs entry | black_shoes
utmContent | STRING | optional | utm_content URL parameter attributied to the costs entry |bottom_cta_button

Here is the [example of the valid Costs Sheet document ▸](https://docs.google.com/spreadsheets/d/1rHqVpQP-dJnd7Cx5cxXNUJETi3Ko_ljuIAigbYskvIQ/edit#gid=0){:target="_blank"}.

## Enabling Google Sheets data source

1. Go to [SegmentStream admin panel ▸](https://admin.segmentstream.com/){:target="_blank"}.
2. Open **Data Sources ▸ Add Data Source**.
3. Select **Google Sheets**.
4. Click **Authenticate with Google** and go through the authentication flow.
5. In the **Google Spreadsheet URL** field specify the URL of the sheet that you want to import.
6. If you want to load data only from a specific range, define it in the **Range** field. Otherwise leave it empty.
7. Map sheet columns to proper data types:
   * **date** -> `DATE`
   * **cost** -> `FLOAT`
   * **impressions** -> `INTEGER`
   * **clicks** -> `INTEGER`

   By default, all other columns will by imported as **String**.
8. In the **Destination table name** field specify the BigQuery table name that will contain imported sheet data.

## What's next

During the next 24 hours your data will be uploaded to the corresponding BigQuery table.