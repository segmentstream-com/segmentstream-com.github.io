---
layout: page
section: datasources
title: "amoCRM"
order: 4
---

In this section you will learn:
* How to connect amoCRM data import.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#importing-data">Importing data from amoCRM</a></li>
  <li><a href="#connecting-and-configuring">Connecting and configuring</a></li>
  <li><a href="#options-description">Options description</a></li>
  <li><a href="#title">Title</a></li>
  <li><a href="#amocrm-subdomain">AmoCRM subdomain</a></li>
  <li><a href="#allow-pii-data-import">Allow PII data import</a></li>
  <li><a href="#import-leads">Import leads</a></li>
  <li><a href="#import-customers">Import customers</a></li>
  <li><a href="#import-transactions">Import transactions</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data source</a></li>
</ul>

### <a name="importing-data"></a>Importing data from amoCRM
------

After enabling this data source, amoCRM data will be uploaded to BigQuery once every 24 hours.

### <a name="connecting-and-configuring"></a>Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

After authorization you need to set the data source parameters.

### <a name="options-description"></a>Options description
------
![](/img/amocrm.png)

### <a name="title"></a>Title
The name of the data source. It is displayed in the interface in the list of sources.

### <a name="amocrm-subdomain"></a>AmoCRM subdomain
Should be filled with the name of your project as it appears in the amoCRM panel url, i.e. https://projectName.amocrm.ru/

### <a name="allow-pii-data-import"></a>Allow PII data import
If this option is disabled, SegmentStream will strip all PII data from all reports.

### <a name="import-leads"></a>Import leads
Enable import of lead data.

### <a name="import-customers"></a>Import customers
Enable import of customer data.

### <a name="import-transactions"></a>Import transactions
Enable import of transaction data.

### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.
