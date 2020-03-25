---
layout: page
section: datadestinations
title: "Google Analytics"
order: 1
---

In this section you will learn how to configure export of advertisement costs to Google Analytics.

Google Analytics Data Destination exports Data Sources costs data to Google Analytics.
After enabling export you would be able to see cost data in Google Analytics Acquisition report.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#importing-data">Importing data from costs table in BigQuery</a></li>
  <li><a href="#connecting-and-configuring">Connecting and configuring</a></li>
  <li><a href="#create-dataset">Create Cost Data Data Set in Google Analytics</a></li>
  <li><a href="#data-destination-setup">Setting up Data Destination in SegmentStream</a></li>
  <li><a href="#options-description">Options description</a></li>
  <li><a href="#display-name">Display name</a></li>
  <li><a href="#account-id">Account ID</a></li>
  <li><a href="#tracking-id">Tracking ID</a></li>
  <li><a href="#data-set-type">Data Set Type</a></li>
  <li><a href="#data-set-id">Data Set ID</a></li>
  <li><a href="#saving-disconnecting-disabling">Saving, Disconnecting, Disabling data destination</a></li>
  <li><a href="#where-to-get-leads-data">Where to get leads data</a></li>
  <li><a href="#table-structures">Table structures</a></li>
</ul>

### <a name="importing-data"></a>Importing data from costs table in BigQuery
------

After enabling this data destination, costs data will be uploaded from allCosts table in BigQuery to Google Analytics once every 24 hours.

### <a name="connecting-and-configuring"></a>Connecting and configuring
------

#### <a name="create-dataset"></a>Create Cost Data Data Set in Google Analytics
1. Sign in to Google Analytics.
2. Click Admin, and navigate to the property to which you want to upload the data.
3. In the PROPERTY column, click Data Import. This displays the Data Sets page.
4. Choose "Create"
5. Select "Cost data" Data Set type
6. Configure Data Set schema:

    a. In **At least one of this columns must be provided:** choose following fields:
    - Clicks
    - Costs
    - Impressions


    b. In **Any number of these columns may be provided:** choose following fields:
    - Ad content
    - Campaign
    - Keyword

    c. Set **Import behaviour** field to **Overwrite**


Read more in [Google Analytics documentation on Data Import](https://support.google.com/analytics/answer/3191589?hl=en#summary_data_import)

#### <a name="data-destination-setup"></a>Setting up Data Destination in SegmentStream

The process of connecting data destinations is described in detail in the [overview](https://docs.segmentstream.com/datadestinations/index).

After authorization you need to set the data destinations parameters:


#### <a name="options-description"></a>Options description
![](/img/datadestination.ga.1.png)

#### <a name="display-name"></a>Display name
The name of the data destination. It is displayed in the interface in the list of destinations.

#### <a name="account-id"></a>Account ID
Your Google Analytics Account ID
- Open Google Analytics
- Under Admin > Account > Account Settings copy **Account ID** field.


#### <a name="tracking-id"></a>Tracking ID
Your Google Analytics Property Tracking ID
- Open Google Analytics
- Under Admin > Property > Property Settings copy **Tracking ID** field.

#### <a name="data-set-type"></a>Data Set Type
Choose "Cost Data" type 

#### <a name="date-set-id"></a>Data Set ID
Your Google Analytics Property Tracking ID
- Open Google Analytics
- Open Admin > Property > Data Import page
- Copy **Data Set ID** field of newly created Cost Data Set.

#### <a name="saving-disconnecting-disabling"></a>Saving, Disconnecting, Disabling data destination
To save and enable the data destination, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data destination at any time by using the switch on the top right.


### <a name=""></a>Use imported data
-------
In Google Analytics open Reports > Acquisition > Cost Analysis.
Check Cost column in report.
It should have aggregated sum of all costs grouped by selected dimension.

![](/img/datadestination.ga.2.png)

### <a name=""></a>Validate that data destination uploaded data to Google Analytics
-------
Open Data Set that you've set up on Data Import page in Google Analytics (Admin > Property Settings > Data Import).

Check Status field: Status should be "Completed" if set up correctly

![](/img/datadestination.ga.3.png)



