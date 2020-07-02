---
layout: page
section: datasources
title: "Criteo"
order: 10
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from Criteo

After enabling this data source, Criteo advertising costs information will be uploaded to BigQuery once every 24 hours.

## Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

In order to connect the data source, you must specify the Client ID (1) and Client Secret (2).

![](/img/criteo_1.png)

[How to create an API account in Criteo](#how-to-create-an-api-account-in-criteo)

After authorization you need to set the data source parameters.

![](/img/criteo_2.png)

(1) The name of the data source. It is displayed in the interface in the list of sources.

(2) The currency in which you want to export the costs from the advertising accounts.

(3) Value multiplier. Multiplied by the cost in the final report.

(4) UTM source, which is used in Criteo settings.

(5) UTM medium, which is used in Criteo settings.

Because there is no possibility to get information about utm tags in the Сriteo API, you need to configure UTM campaigns manually, for this you need to input each campaign ID (6) and its corresponding UTM campaign tag (7).

**Import normalized costs report** (8) - enable normalized costs report import.

**Import "Campaign Performance" report** (9) - enable costs report import, without normalizing the values ​​in the table.

## Where to get data on advertising costs

- **criteoCosts_{ADVERTISER_ID}_{YYYYMMDD}** - data for normalized costs
- **criteoCampaignPerformance_{ADVERTISER_ID}_{YYYYMMDD}** - data for "Campaign Performance" report

## Tables structure

### **criteoCosts**

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
utmTerm | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | REQUIRED
utmSource | STRING | REQUIRED
currency | STRING | NULLABLE


### **criteoCampaignPerformance**

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
impressions | INTEGER | REQUIRED
clicks | INTEGER | REQUIRED
campaign_id | INTEGER | REQUIRED
campaign | STRING | REQUIRED


## How to create an API account in Criteo

1. Sign in to your account on [https://marketing.criteo.com](https://marketing.criteo.com/).
2. Click **Criteo Management Center** and select **Account Settings**:

    ![](/img/criteo_datasource_1.png)

3. Navigate to the **API Users — REST API (New)** section. Click **Create API User**:

    ![](/img/criteo_datasource_2.png)

4. Enter [developers@segmentstream.com](mailto:developers@segmentstream.com) as a сontact email.  
5. In the **Select a role** field, select **View Only**. Click **Add User**:

    ![](/img/criteo_datasource_3.png)

6. A window displaying your **Client ID** and **Client Secret** will appear. These are the API user credentials that you need to enter in the SegmentStream admin panel to setup the Criteo data import. **Important**: Make sure you have saved the Client Secret code somewhere. It's displayed only once — on this window. After clicking **Close**, you won't be able to display it in any way.

    ![](/img/criteo_datasource_4.png)

7. Check the **I confirm having stored my credentials** box.
8. Click **Close**.
