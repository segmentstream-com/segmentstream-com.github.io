---
layout: page
section: bigquery
navigation_title: "Setting up a billing account"
title: "Setting up a billing account"
order: 3
date: 2020-04-29
---

<!---
In this article explained how to Enable BigQuery API if it is not enabled
-->

## Before you begin
* You should have an existing [Google Cloud Platform account](creating-gcp-account).

To use BigQuery with SegmentStream you need an active billing account so that you'll be able to use Google Cloud Platform resources.

> Free Tier Google Cloud accounts don’t support some BigQuery services which are required for SegmentStream Data Import.

## Upgrading Free Tier account
On the [main page of Google Cloud Platform](https://console.cloud.google.com) in the header click **Activate** and choose **Upgrade** in the pop-up window:
![Upgrading BigQuery account](/img/bigquery_billing.1.png)
More information on upgrading your account can be found [here](https://cloud.google.com/free/docs/gcp-free-tier#how-to-upgrade).

## Checking billing account status
If you don't have **Activate** button in the navigation bar, check that you have an active billing account with a valid payment method:
1. Go to the [Google Cloud Platform Billing page ▸](https://console.cloud.google.com/billing)
2. Check that you have at least one billing account with active status.
![Account with active status](/img/bigquery_billing.2.png)
3. Click on the account name and follow instructions to set the status to active if it is different.
![Click on the account name](/img/bigquery_billing.3.png)

4. Validate your payment info (1) and check that you don’t have any critical (red) billing health check issues (2).
![Check billing status](/img/bigquery_billing.4.png)


If you experience an issue with setting up a billing account [consult the documentation on billing accounts](https://cloud.google.com/billing/docs/how-to/manage-billing-account).


## What's next:
* [Enabling BigQuery API](enabling-bigquery-api)
* [Creating BigQuery dataset](creating-bigquery-dataset)
* [Connecting BigQuery to SegmentStream](connecting-bigquery)
