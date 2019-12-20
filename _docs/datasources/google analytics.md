---
layout: page
section: datasources
title: "Google Analytics"
order: 2
---

In this section you will learn:
* How to connect Google Analytics data import.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#importing-data">Importing data from Google Analytics</a></li>
  <li><a href="#connecting-and-configuring">Connecting and configuring</a></li>
  <li><a href="#options-description">Options description</a></li>
  <li><a href="#title">Title</a></li>
  <li><a href="#view-id">View ID</a></li>
  <li><a href="#dimensions">Dimensions</a></li>
  <li><a href="#metrics">Metrics</a></li>
  <li><a href="#destination-table-name">Destination table name</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data source</a></li>
</ul>

### <a name="importing-data"></a>Importing data from Google Analytics
------

After enabling this data source, Google Analytics data for the previous day will be uploaded to BigQuery once every 24 hours.

### <a name="connecting-and-configuring"></a>Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

After authorization you need to set the data source parameters.

### <a name="options-description"></a>Options description
------
![](/img/ga_datasource.png)

### <a name="title"></a>Title
The name of the data source. It is displayed in the interface in the list of sources.

### <a name="view-id"></a>View ID
View ID of your Google Analytics account.

### <a name="dimensions"></a>Dimensions
Input the dimensions that you want to import, for example:
- ga:sourceMedium
- ga:campaign
- ga:keyword
- ga:adContent
- ga:transactionId
- ga:dimensionXX (for example for clientId)
- ga:dimensionXX (for example for sessionId)

A maximum of 7 dimensions can be imported.

>**Please note!** Not all dimensions and metrics can be queried together, we recommend using the [Dimensions & Metrics Explorer](https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/) to make sure that the settings used are valid.

### <a name="metrics"></a>Metrics
Input the metrics that you want to import, for example:
- ga:sessions
- ga:transaction
- ga:transactionRevenue
- ga:goalXXCompletions

A maximum of 10 metrics can be imported.

>**Please note!** Not all dimensions and metrics can be queried together, we recommend using the [Dimensions & Metrics Explorer](https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/) to make sure that the settings used are valid.

### <a name="destination-table-name"></a>Destination table name
The name of the table in BigQuery to which the imported data will be written.


### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.
