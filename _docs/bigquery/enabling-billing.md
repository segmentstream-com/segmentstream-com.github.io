---
layout: page
section: bigquery
navigation_title: "Enabling billing"
title: "Enabling billing"
order: 3
date: 2020-04-29
---

<!---
In this article explained how to Enable BigQuery API if it is not enabled
-->
## Before you begin
* You should have an existing [Google Cloud Platform account ▸](creating-gcp-account)

To use BigQuery with SegmentStream you need an active billing account so that you'll be able to use Google Cloud Platform resources.

**Note: Free Tier Google Cloud accounts don’t support some BigQuery services which are required for SegmentStream Data Import you need to upgrade your account**

## Check if you have an active Free Tier account, and upgrade it if possible:
On the [main page of Google Cloud Platform](https://console.cloud.google.com) in the header click “Activate” and choose “Upgrade” in the pop-up window:
![](/img/bigquery_billing.1.png)
[More information](https://cloud.google.com/free/docs/gcp-free-tier#how-to-upgrade) on upgrading your account.

## If you don’t have "Activate" button in the header:
Check that you have an active billing account with a valid payment method:
1. Go to the [Google Cloud Platform Billing page ▸](https://console.cloud.google.com/billing) 
2. Check that you have at least one billing account with active status.
![](/img/bigquery_billing.2.png)
3. Click on the account name and follow instructions to set the status to active if it is different.
![](/img/bigquery_billing.3.png)

4. Validate your payment info (1) and check that you don’t have any critical (red) billing health check issues (2).
![](/img/bigquery_billing.4.png)



If you experience an issue with setting up a billing account [consult the documentation on billing accounts](https://cloud.google.com/billing/docs/how-to/manage-billing-account).


## What's next:
* [Checking that BigQuery API is enabled](enabling-bigquery-api)
* [Creating BigQuery dataset](creating-bigquery-dataset)
* [Connecting BigQuery dataset and SegmentStream](connecting-bigquery)