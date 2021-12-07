---
layout: page
section: datastreams
navigation_title: "Webhook"
title: "Webhook Data Stream"
order: 3
date: 2021-01-14
---

**Webhook Data Stream** allows to create a unique endpoint withing the SegmentStream platform that can be used to send Webhooks from third-party applications like CRM, ERP, call tracking system, etc.

## Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).
- You subscribed to SegmentStream **enterprise plan**

## Getting started

1. Inside the admin panel go to **Google BigQuery ▸ Data Streams** and click **Add data stream**.
2. Choose **Webhook** from the list.
3. Define the Google BigQuery **Destination table** where collected data will be stored.
4. Copy the value from the **Webhook endpoint** field.
5. Click **Save**.

Now you can use the copied webhook endpoint inside third-party apps to send data. We've prepared a detailed guide on [sending offline data using webhooks](/guides/webhooks-offline-data-import).
