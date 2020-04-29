---
layout: page
section: bigquery
navigation_title: "Creating BigQuery dataset"
title: "Creating BigQuery dataset"
order: 5
date: 2020-04-29
---

<!---
In this article explained how to create Google BigQuery dataset
-->
To store data in BigQuery you need to create a [dataset](https://cloud.google.com/bigquery/docs/datasets-intro){:target="_blank"}:

1. Go to the [Google Cloud Platform Console](https://console.cloud.google.com/){:target="_blank"}.
2. Open the console left side menu and click BigQuery.
![](/img/bigquery_dataset.1.png)
3. Select the project where you would like to create a dataset in the bottom-left menu and click CREATE DATASET.
![](/img/bigquery_dataset.2.png)
**Note: Instead of this screen, you might see general info about BigQuery:**
![](/img/bigquery_dataset.3.png)
In that case, you should [enable BigQuery API](enabling-bigquery-api).
4. Enter Dataset ID (for example "SegmentStream"). All other options leave in default values.
![](/img/bigquery_dataset.4.png)
5. Click Create dataset.

## What's next:
* [Connecting BigQuery to SegmentStream](connecting-bigquery)