---
layout: page
section: google-analytics
navigation_title: "Creating Google Analytics data set"
title: "Creating Google Analytics data set"
order: 2
date: 2020-06-05
---

To make Google Analytics cost import ready for work you need to create a [dataset](https://support.google.com/analytics/answer/6014980){:target="_blank"} which SegmentsStream will use to store imported cost data.
Below are the steps that explain how to do this.

## Creating dataset

1. In the **Admin** section, select the account and property you want to import data to and select **Data Import**:
![Google Analytic Data Import](/img/google-analytics/ga-data-import.png)

2. Click **Create** to create a new Data Set:
![Google Analytics create Data Set](/img/google-analytics/ga-create-data-set.png)

3. Select **Data Set type** as **Cost Data** and click **Continue**:
![Google Analytics select Data Set type](/img/google-analytics/ga-data-set-type.png)

4. Enter the **Data Set Name** and choose the **Enabled Views**. Cost data will be available only for the selected views:
![Google Analytics Data Set details](/img/google-analytics/ga-data-set-details.png)

5. Choose all the dimensions and metrics as shown in the screenshot, select **Import Behavior** as **Overwrite** and click **Save**:
![Google Analytics Data Set schema](/img/google-analytics/ga-data-set-schema.png)