---
layout: page
section: bigquery
navigation_title: "Granting BigQuery access"
title: "BigQuery access for the SegmentStream support team"
order: 7
date: 2020-06-12
---

Google Cloud Platform might be a bit complex for non-technical users or users that never worked with it before. Sometimes, to assist with the onboarding and setup process our team will require access to your Google Cloud Platform.

Below are the steps that explain how to give access to the SegmentStream support team.

## Creating BigQuery Data Viewer and BigQuery User Roles

1. Go to the [Google Cloud Platform Console](https://console.cloud.google.com){:target="_blank"}.
2. Open the console left side menu and click **IAM & admin**. Select **IAM** from the list.
![BigQuery access IAM](/img/bigquery/bq-access-1.png)

3. On the top click **+ADD**:
![BigQuery add IAM](/img/bigquery/bq-access-2.png)

4. Enter the `bigquery@segmentstream.com` email address into **New Members** field.
5. Select **BigQuery Data Viewer** and **BigQuery User** roles.
6. Click **Save**.
![BigQuery add IAM roles](/img/bigquery/bq-access-3.png)

7. Let your SegmentStream support know that the access was granted.
