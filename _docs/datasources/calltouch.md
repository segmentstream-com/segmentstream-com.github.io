---
layout: page
section: datasources
title: "Calltouch"
order: 13
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Importing calls from Calltouch

After enabling this data source, Calltouch calls history will be uploaded to BigQuery once every 24 hours.

### Connecting and configuring

To enable API access to the Calltouch dashboard, go to your project, and click "Интеграции" (1) > "API и Webhooks" (2)

![](/img/calltouch_1.png)

Ensure that the radio button (1) is enabled. Copy the Site ID (2) and token (3). If the token hasn't been created yet, click the "Обновить" button (4) to create it.

![](/img/calltouch_2.png)

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

For authorization insert the API token (1) from the previous step and click "Save" (2) 

![](/img/calltouch_3.png)

After authorization you need to set the data source parameters.

![](/img/calltouch_4.png)

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) Website ID from Calltouch dashboard.

(3) Call export type indicates which calls should be exported.

It can be one of the following values:
- All calls - Import all calls
- Unique calls - Import only unique calls
- Repeated calls - Import only non-unique calls

To save and enable the data source, click "Save" (4).

The "Disconnect" button (6) is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time (5).

### Where to get data on Calltouch calls

Calltouch calls will be uploaded to **calltouchCalls_{ID}** table.
