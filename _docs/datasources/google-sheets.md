---
layout: page
section: datasources
navigation_title: "Google Sheets"
title: "Google Sheets data source"
date: 2020-10-22
order: 10
---

Using Google Sheets data source is a universal way to inport aby type of data into Google BigQuery even if you didn't find appropriate data source inside the SegmentStream admin panel.

## Getting started

1. Inside the admin panel go to **Data Sources** page and click **Add data source**.
2. Choose **Google Sheets** from the list.
3. Click **Authenticate with Google** and go through the authentication flow.
4. Paste the URL of the Google Sheet you would like to import the data from.
5. Optionally, apply a specific cell range you would like to import (i.e. A1:E22 or A:E).
6. Optionally, map column name to specific BigQuery types. Otherwise, STRING type will be used for all columns.
7. Define the name of the destination table in BigQuery.
8. Click **Save**.

## Google Sheets file requirements

1. The first row should contain column names.
2. Data type should be consistent for each column.

## Importing cost data

Importing cost data requires a predefined format of your Google Sheet file. Please [follow this guide](/guides/google-sheets-cost-data-import) for more detail.
