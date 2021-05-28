---
layout: page
section: bigquery
navigation_title: "Creating BigQuery dataset"
title: "Creating BigQuery dataset"
order: 5
date: 2020-05-28
---

<!---
In this article explained how to create Google BigQuery dataset
-->
To make Google BigQuery ready for work you need to create a [dataset](https://cloud.google.com/bigquery/docs/datasets-intro){:target="_blank"} which SegmentsStream will use to store imported data.
Below are the steps that explain how to do this.

## Creating dataset
1. Go to the [Google Cloud Platform Console](https://console.cloud.google.com/){:target="_blank"}.
2. Open the console left side menu and click **BigQuery**.
![Click on BigQuery](/img/bigquery_dataset.1.png)
3. Select the project where you would like to create a dataset in the bottom-left menu and click **CREATE DATASET**.
  ![Create dataset](/img/bigquery_dataset.2.png)
  > **Note:** Instead of this screen, you might see general info about BigQuery. In that case, you should [enable BigQuery API](enabling-bigquery-api).

4. Enter **Dataset ID** (for example "segmentstream").
5. Select **Dataset location**. 
  > **Important!** In case you use Google Analytics 360 or Google Analytics 4, make sure you select the same dataset location as for the dataset where your Google Analytics export data is stored.
6. Click **Create dataset**.
![Dataset creation page](/img/bigquery_dataset.4.png)

## What's next:
* [Connecting BigQuery to SegmentStream](connecting-bigquery)
