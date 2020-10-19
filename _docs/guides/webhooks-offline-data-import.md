---
layout: page
section: guides
navigation_title: "Importing offline data using Webhooks"
title: "Importing offline data using Webhooks"
date: 2020-10-19
---

This document describes how to import offline data from the CRM (i.e. sales or leads statuses) into BigQuery using Webhooks (postbacks).

Imported offline data can be combined with other website data to improve ROI reporting and attribution by optimising not only based on online transactions but on final order/lead statuses in the CRM.

##  Before you begin
* Make sure that [BigQuery is connected to SegmentStream](/bigquery/connecting-bigquery).
* Make sure that [importing offline data using JSON feed](/guides/json-feed-offline-data-import) doesn't work for you.

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Streams** page and click **Add data stream**.
2. Choose **Webhook** from the list.
3. Define Google BigQuery **Destination table** where collected data will be stored.
4. Choose the **UTC offset** from the list.
5. Select **Integration type** depending on the programming language on your backend.
6. Copy **Snippet** code.
7. Click **Save** and follow the further instructions to integrate the code.

## Webhook implementation

Imagine, you have the following data in your CRM:

createdAt | updatedAt | orderId | currency | total | status  | userId
--- | --- | --- | --- | --- | --- | ---
2020-01-10| 2020-01-15 | N1 | USD | 120.13 | delivered | U1
2020-01-15| 2020-01-20 | N2 | USD | 96.12 | refunded | U2
2020-01-20| 2020-01-20 | N3 | USD | 299.99 | received | U3

Where:

* `createdAt` - time of the order creation in ISO 8601 standard;
* `updatedAt` - time of the latest order status update in ISO 8601;
* `orderId` - unique identifier of the order in your CRM system or website database. For other businesses it might be `leadId` or any other unique record identifier;
* `currency` - order currency code;
* `total` - Total cost of the order;
* `status` - The most recent order status (e.g. `received`, `shipped`, `delivered`, `refunded`, etc);
* `userId` - unique identifier of the user that made an order.

> Note: here is provided minimal schema for stitching online and offline orders, but you can add any other fields you need.

Depending on the programming language you use on the backend of your application your should implement a webhook triggering each time a new order or lead is created, or the status of a particular order or lead changes inside your CRM.

For example, the following code (CURL example) should be triggered in the order status was changed from **shipped** to **delivered**.
```
curl -d "orderId=N1&status=delivered&total=120.13&userId=U1" \
-X POST https://track.segmentstream.com/ds/522ed95e-9f07-45f6-a0b7-28bf2d0315e5
```

Make sure, that `https://track.segmentstream.com/ds/522ed95e-9f07-45f6-a0b7-28bf2d0315e5` is replaced with a valid enpoint retrieved from the SegmentStream admin panel for a Webhook data stream.

## How webhook data import works

Each time you trigger a webhook for the data stream endpoint associated with a specific BigQuery table - a new row is created in this table.

The example row created in the BigQuery destination table by the webhook described before may look the following way:

hit_id | payload | received_at | date
--- | --- | --- | ---
83cc2a6a-4829-4410-bab4-95b680c5b8d7 | orderId=N1&status=delivered&total=120.13&userId=U1 | 1603131452 | 2020-10-19

Where,

* `hit_id` - a unique ID of the request generated automatically when webhook is received by the SegmentStream server;
* `payload` - the data sent in a POST body;
* `received_at` - webhook Unix timestamp (in milliseconds passed since January 1, 1970);
* `date` - the date of the webhook with a proper UTC offset applied.
