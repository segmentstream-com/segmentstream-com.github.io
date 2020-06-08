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
<ul class="page-navigation">
  <li><a href="#creating-dataset">Creating dataset</a></li>
  <li><a href="#whats-next">What's next</a></li>
</ul>
To make Google BigQuery ready for work you need to create a [dataset](https://cloud.google.com/bigquery/docs/datasets-intro){:target="_blank"} which SegmentStream will use to store imported data. Below are the steps that explain how to do this.

## <a name="creating-dataset"></a>Creating dataset
1. Go to the [Google Cloud Platform Console](https://console.cloud.google.com/){:target="_blank"}.
2. Open the console left side menu and click **BigQuery**.
![Click on BigQuery](/img/bigquery_dataset.1.png)
3. Select the project where you would like to create a dataset in the bottom-left menu and click **CREATE DATASET**.
![Create dataset](/img/bigquery_dataset.2.png)
> **Note:** Instead of this screen, you might see general info about BigQuery. In that case, you should [enable BigQuery API](enabling-bigquery-api).

1. Enter **Dataset ID** (for example "segmentstream"). All other options leave in default values.
2. Click **Create dataset**.
![Dataset creation page](/img/bigquery_dataset.4.png)

## <a name="whats-next"></a> What's next:
* [Connecting BigQuery to SegmentStream](connecting-bigquery)