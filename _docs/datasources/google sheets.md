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
  <li><a href="#data-requirements">Data requirements</a></li>
  <li><a href="#connecting-and-configuring">Connecting and configuring</a></li>
  <li><a href="#options-description">Options description</a></li>
  <li><a href="#display-name">Display name</a></li>
  <li><a href="#google-spreadsheet-url">Google Spreadsheet URL</a></li>
  <li><a href="#range">Range</a></li>
  <li><a href="#column-types">Column types</a></li>
  <li><a href="#destination-table-name">Destination table name</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data source</a></li>
  <li><a href="#example">Google Sheets data source setup example</a></li>
</ul>

### <a name="importing-data"></a>Importing data from Google Sheets
------

After enabling this data source, data from Google Sheets will be uploaded to BigQuery once every 24 hours.

### <a name="data-requirements></a>⚠️ Data requirements:
------
- You can only import data formatted as simple table. That means that chosen range should have at least two rows:
one header row and one or more data rows.

- First non-empty row in the range would be considered header.

- All subsequent rows will be considered data rows. Table end is detected by the first empty row after data rows.
The number of fields in the table is determined by number of columns in header row.
 

#### Valid table:

Name | Phone
---  | --- |
Joe  | +1 800 900 20 30

One header row and one data row - table would be correctly imported to BigQuery.

#### Invalid table:

Name | Phone
---  | --- 
     |    

In that case there is no data rows, so table won't be imported.

#### Table that would be parsed incorrectly:

Name | COUNT of transactions
 --- | --- | 
 Joe | 3
 Ashley | 1
 **Grand Total** | **4**

It is simplest Pivot table. Here we have header row, but one of the data rows is aggregate row, that means that there would be aggregate row in imported BigQuery table, making data very hard to use.

>⚠️ We strongly advise against using Pivot tables as it's usually impossible to select range such that data would be correctly imported.


### <a name="connecting-and-configuring"></a>Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](/datasources/index).
After authorization you need to set the data source parameters.

### <a name="options-description"></a>Options description
------
<img src="/img/datasources.googlesheets.1.png" style="width:550px"/>

### <a name="display-name"></a>Display name
The name of the data source. It is displayed in the interface in the list of sources.

### <a name="google-spreadsheet-url"></a>Google Spreadsheet URL
Link to Google Spreadsheet.
Just copy-paste it from the browser address bar of the spreadsheet table.
If you want load data from specific sheet (tab), select it before copying URL.

> Notice! If range not specified, first row of the sheet will be used for field names.
> Notice! Field names must contain only letters, numbers, and underscores, start with a letter or underscore, and be at most 128 characters long.

### <a name="range"></a>Range
If you want to load data only from a specific range, type it here using A1 notation. [Google documentation on A1 notation](https://developers.google.com/sheets/api/guides/concepts#a1_notation)

> Notice! First row of range will be used for field names.
> Notice! You can specify full columns, like A:F

### <a name="column-types"></a>Column types
Optionally you can specify column types.
The screenshot above displays an example of a Google spreadsheet costs data import setup.
If column types are not specified, STRING type will be used by default.

#### Column types declaration
You can mark columns with one of the following BigQuery data types:
- STRING
- INTEGER
- FLOAT
- DATE
- DATETIME

If not specified explicitly all columns are considered to be STRING.
If it won't be possible to parse data in the cell as declared type, it would be set to NULL in BQ table.
To refer to column use it's name as declared in header row of your table.


### <a name="destination-table-name"></a>Destination table name
The name of the table in BigQuery to which the imported data will be written.

> Notice! Old data will be overwritten.

### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.
The **Disconnect** button is used to revoke the authorization data. The settings are saved.
You can enable or disable the data source at any time by using the switch on the top right.

### <a name="example"></a>Google Sheets data source setup example:
------
Imagine we have a Google Sheets table with call center data:
![](/img/datasources.googlesheets.2.png)

- For column "Call Id" we can use INTEGER type.
- For "Call nr" we can use STRING type.
- For "Call time" we can use DATETIME type.
- And for "Call date" column we can use DATE column type.

We would configure column types for that data the following way:

<img src="/img/datasources.googlesheets.3.png" style="width: 700px">

Resulting BigQuery table schema would reflect chosen column types:

![](/img/datasources.googlesheets.4.png)
