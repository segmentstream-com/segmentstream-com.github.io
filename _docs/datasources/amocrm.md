---
layout: page
section: datasources
title: "amoCRM"
order: 1
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
  <li><a href="#display-name">Display name</a></li>
  <li><a href="#import-leads">Import leads</a></li>
  <li><a href="#leads-custom-fields">Leads custom fields</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data source</a></li>
  <li><a href="#where-to-get-leads-data">Where to get leads data</a></li>
  <li><a href="#table-structures">Table structures</a></li>
</ul>

### <a name="importing-data"></a>Importing data from amoCRM
------

After enabling this data source, amoCRM data will be uploaded to BigQuery once every 24 hours.

### <a name="connecting-and-configuring"></a>Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](/datasources/index).

After authorization you need to set the data source parameters.

### <a name="options-description"></a>Options description
------
![](/img/amocrm.png)

### <a name="display-name"></a>Display name
The name of the data source. It is displayed in the interface in the list of sources.

### <a name="import-leads"></a>Import leads
Enable import of leads data. If this option enabled, updated leads for the previous day will be uploaded.

### <a name="leads-custom-fields"></a>Leads custom fields
The leads amoCRM custom fields to import.

### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.

### <a name="where-to-get-leads-data"></a>Where to get leads data
- **amoCrmLeads_{SUBDOMAIN}_{YYYYMMDD}** - data for updated "Leads"

### <a name="table-structures"></a>Table structures
------

### amoCrmLeads table structure

Field name | Type | Mode
--- | --- | ---
id | INTEGER | NULLABLE
name | STRING  | NULLABLE
responsible_user_id | INTEGER | NULLABLE
created_by | INTEGER | NULLABLE
created_at | INTEGER | NULLABLE
updated_at | INTEGER | NULLABLE
account_id | INTEGER | NULLABLE
pipeline_id | INTEGER | NULLABLE
status_id | INTEGER | NULLABLE
updated_by | INTEGER | NULLABLE
is_deleted | BOOLEAN | NULLABLE
group_id | INTEGER | NULLABLE
closed_at | INTEGER | NULLABLE
closest_task_at | INTEGER | NULLABLE
sale | INTEGER | NULLABLE
loss_reason_id | INTEGER | NULLABLE
custom_fields | RECORD  | REPEATED
custom_fields.id | INTEGER | NULLABLE
custom_fields.name | STRING  | NULLABLE
custom_fields.is_system | BOOLEAN | NULLABLE
custom_fields.values | RECORD  | REPEATED
custom_fields.values.value | STRING  | NULLABLE
custom_fields.values.enum | INTEGER | NULLABLE
