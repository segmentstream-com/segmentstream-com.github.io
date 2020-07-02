---
layout: page
section: datasources
title: "Vkontakte"
order: 10
---

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.

## Importing data from VK

After enabling this data source, VK advertising costs information will be uploaded to BigQuery once every 24 hours.

This integration is available for both ordinary advertisers and advertising agencies.

## Connecting and configuring

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

![](/img/vk.2.png)

After authorization you need to set the data source parameters.

(1) The name of the data source. It is displayed in the interface in the list of sources.

This data source has one mandatory setting, “Account ID” (2), you can find out where to get this parameter below.

> Advertising agencies must fill in the additional field “Client ID” (3), this is the id of your client whose data you need to upload. Below are the instructions for obtaining this parameter.

**Import ads statistics report** (4) - enable banner statistics costs report import, without normalizing the values ​​in the table.

**Import normalized costs report** (5) - enable normalized costs report import.

To save and enable the data source, click "Save" (6).

The "Disconnect" button (7) is used to revoke the authorization data. The settings are saved.

## Getting the Account ID

In order to find out your Account ID, you must log in to [vk.com](https://vk.com) using your account, which has access to the necessary advertising account.

Click on the link [https://vk.com/ads?act=settings](https://vk.com/ads?act=settings) and copy the line shown in the screenshot below (1)

![](/img/vk_account_id.png)

## Getting the Client ID

In the advertising account [https://vk.com/ads?act=office](https://vk.com/ads?act=office), you need to go to the "Client Center" (1) and click on the desired client (2). The current URL will contain the value we need in the union_id parameter.

Example: https://vk.com/ads?act=office&union_id={client_id}

![](/img/vk.4.png)

## Where to get data on advertising costs

- **vkCosts_{CLIENT_ID}_ {DATE}** - data for agencies normalized costs report
- **vkCosts_{ACCOUNT_ID}_ {DATE}** - data for advertisers normalized costs report
- **vkCampaignStatistics_{CLIENT_ID}_ {DATE}** - data for agencies ads statistics report
- **vkCampaignStatistics_{ACCOUNT_ID}_ {DATE}** - data for advertisers ads statistics report

## Table structure

Field name|Type|Mode
--- | --- | ---
cost | FLOAT | REQUIRED
clicks | INTEGER | NULLABLE
impressions | INTEGER | NULLABLE
utmTerm | STRING | NULLABLE
utmCampaign | STRING | NULLABLE
utmContent | STRING | NULLABLE
utmMedium | STRING | NULLABLE
utmSource | STRING | NULLABLE
currency | STRING | NULLABLE
