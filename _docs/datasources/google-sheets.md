---
layout: page
section: datasources
navigation_title: "Google Sheets"
title: "Google Sheets data source"
date: 2021-05-26
order: 10
---

Using Google Sheets data source is a universal way to inport any type of data into Google BigQuery even if you didn't find appropriate data source inside the SegmentStream admin panel.

## Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).

## Creating costs sheet

In order to be able to import custom costs into Google BigQuery you need to create a Google Sheet with custom costs with the following format:

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

## Monthly costs import

Sometimes it might be required to import monthly costs (subscriptions, salaries) and attribute them to specific set of UTM paramterers, for example:
- SEO costs
- CDP/ESP costs
- PR costs
- etc

For example, if you spent $3000 in June 2020 for your favourite ESP platform and would like to attribute this costs to `utm_source=my_esp` and `utm_medium=email`, you can use one of the following approaches.

### Approach 1: Daily costs distribution

To make a proper allocation of such costs you should equally divide them between all the days during the month. The file should looks the following way:

date| currency | cost | impressions | clicks | utmSource | utmMedium
--- | --- | --- | --- | --- | --- | ---
2020-06-01 | USD | 100 | | | email | my_esp
2020-06-02 | USD | 100 | | | email | my_esp
2020-06-03 | USD | 100 | | | email | my_esp
2020-06-04 | USD | 100 | | | email | my_esp
2020-06-05 | USD | 100 | | | email | my_esp
2020-06-06 | USD | 100 | | | email | my_esp
2020-06-07 | USD | 100 | | | email | my_esp
2020-06-08 | USD | 100 | | | email | my_esp
... | USD | 100 | | | email | my_esp
2020-06-30 | USD | 100 | | | email | my_esp

### Approach 2: Use a separate sheet for monthly costs

Alternatively, you can have separate Google Sheets files for monthly and daily costs. This way you can have the following format for your monthly costs:

month| currency | cost | impressions | clicks | utmSource | utmMedium
--- | --- | --- | --- | --- | --- | ---
2020-06-01 | USD | 3000 | | | email | my_esp
2020-07-01 | USD | 3000 | | | email | my_esp
2020-08-01 | USD | 3000 | | | email | my_esp

## Enabling Google Sheets data source

1. Go to [SegmentStream admin panel ▸](https://app.segmentstream.com/){:target="_blank"}.
2. Open **Data Sources ▸ Add Data Source**.
3. Select **Google Sheets**.
4. Click **Authenticate with Google** and go through the authentication flow.
5. In the **Google Spreadsheet URL** field specify the URL of the sheet that you want to import.
6. Select report type (in most cases you would need either **Daily cost data group by UTM** or **Monthly cost data grouped by UTM**)
7. Map sheet columns to proper data types in case you decided to use custom report type:
   * **date** -> `DATE`
   * **cost** -> `FLOAT`
   * **impressions** -> `INTEGER`
   * **clicks** -> `INTEGER`

   By default, all other columns will by imported as **String**.
8. In the **Destination table name** field specify the BigQuery table name that will contain imported sheet data.

## What's next

During the next 24 hours your data will be uploaded to the corresponding BigQuery table.
