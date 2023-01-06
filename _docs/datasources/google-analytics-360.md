---
layout: page
section: datasources
title: "Google Analytics 360"
order: 2
date: 2020-12-03
---

In order to import data from Google Analytics 360 into SegmentStream, you have to first set up a Google Analytics 360 BigQuery export, follow [this guide](https://support.google.com/analytics/answer/3416092?hl=en#zippy=%2Cin-this-article) before continuing.


## Getting started

1. Inside the admin panel navigate to the **Data Sources** page and click **+ NEW** on the top right corner.
2. Choose **Google Analytics 360** from the list.
3. Select **Google Cloud project** and **BigQuery dataset** where the Google Analytics data is exported to.
4. Click **Save**.

## Accessing a Google Analytics dataset from another project

If the account that the SegmentStream BigQuery integration is authenticated with doesn't have access to the project and dataset that the Google Analytics data is exported to, you have to provide access by following the steps below:

1. Go to the [Google Cloud Platform Console](https://console.cloud.google.com){:target="_blank"}.
2. Open the console left side menu and click **IAM & admin**. Select **IAM** from the list.
![BigQuery access IAM](/img/bigquery/bq-access-1.png)

3. On the top click **+ADD**:
![BigQuery add IAM](/img/bigquery/bq-access-2.png)

4. Enter the email address of the account that the SegmentStream BigQuery integration is authenticated with into **New principals** field.
5. Select the **BigQuery Data Viewer** role.

6. Click **Save**.
![BigQuery add IAM roles](/img/bigquery/bq-viewer.png)

7. Now you can return to the data source and select the **Google Cloud project** and **BigQuery dataset** that you gave access to.

> In case you can not get **BigQuery Data Viewer** access to the whole project, but only to the Google Analytics 360 dataset, you will still have to provide the **Browser** role to the project as described above to set up the data source.
To provide access only to the dataset you have to open it in BigQuery, click "Sharing" -> "Permissions", click "Add principal", and add the **BigQuery Data Viewer** role to the required account.
![BigQuery add IAM roles](/img/bigquery/dataset-permissions.png)
