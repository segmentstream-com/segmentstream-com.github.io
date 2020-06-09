---
layout: page
section: datasources
navigation_title: "Overview"
title: "Data Sources overview"
order: 0
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

> BigQuery project billing must be set up in order to load data using the SegmentStream Data Import features. Free BQ projects (including Sandbox) don't support some services which are required for SegmentStream Data Import.

## Connecting a new data source

In order to connect a new data source, go to **BigQuery → Data Sources**, click on the **Add** button and select the type of data source from menu. The new data source appears in the data source list.

Next, follow the instructions for configuring the selected data source type.

## Saving, disconnecting, disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.

## Importing reports

Each data source allows to import specific data and reports from the data source API. You can find more info in the documentation of the specific data source.

## Additional transformation settings

Besides default reports import, SegmentStream allows to apply additional transformations for the data and help prepare cost data reports grouped by UTM.

This might be very handy if you need to stitch cost data with website sessions or [send cost data into Google Analytics](/datadestinations/google-analytics).

To enable this transformation use **"Import cost data grouped by UTM"** setting.

Each data source might have a unique set of settings to make this transformation possible. You can find more info in the documentation of the specific data source.
