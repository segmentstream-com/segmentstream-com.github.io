---
layout: page
section: datasources
title: "Google Sheets"
order: 1
---

In this section you will learn:
* How to setup data import from Google Sheets to Google BigQuery.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#importing-data">Importing data from Google Sheets</a></li>
  <li><a href="#connecting-and-configuring">Connecting and configuring</a></li>
  <li><a href="#options-description">Options description</a></li>
  <li><a href="#display-name">Display name</a></li>
  <li><a href="#google-spreadsheet-url">Google Spreadsheet URL</a></li>
  <li><a href="#range">Range</a></li>
  <li><a href="#column-types">Column types</a></li>
  <li><a href="#destination-table-name">Destination table name</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data source</a></li>
</ul>

### <a name="importing-data"></a>Importing data from Google Sheets
------

After enabling this data source, data from Google Sheets will be uploaded to BigQuery once every 24 hours.

### <a name="connecting-and-configuring"></a>Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](/datasources/index).
After authorization you need to set the data source parameters.

### <a name="options-description"></a>Options description
------
![](/img/google-sheets-1.png)

### <a name="display-name"></a>Display name
The name of the data source. It is displayed in the interface in the list of sources.

### <a name="google-spreadsheet-url"></a>Google Spreadsheet URL
Link to Google Spreadsheet.
Just copy-paste it from the browser address bar of the spreadsheet table.
If you want load data from specific sheet (tab), select it before copying URL.

> Notice! If range not specified, first row of the sheet will be used for field names.
> Notice! Field names must contain only letters, numbers, and underscores, start with a letter or underscore, and be at most 128 characters long.

### <a name="range"></a>Range
If you want to load data only from a specific range, type it here using A1 notation.

> Notice! First row of range will be used for field names.
> Notice! You can specify full columns, like A:F

### <a name="column-types"></a>Column types
Optionally you can specify column types.
The screenshot above displays an example of a Google spreadsheet costs data import setup.
If column types are not specified, STRING type will be used by default.

### <a name="destination-table-name"></a>Destination table name
The name of the table in BigQuery to which the imported data will be written.

> Notice! Old data will be overwritten.

### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.
The **Disconnect** button is used to revoke the authorization data. The settings are saved.
You can enable or disable the data source at any time by using the switch on the top right.
