---
layout: page
section: google-analytics
navigation_title: "Creating Google Analytics data set"
title: "Creating Google Analytics data set"
order: 2
date: 2020-09-02
---

To make Google Analytics cost import ready for work you need to create a [dataset](https://support.google.com/analytics/answer/6014980){:target="_blank"} which SegmentStream will use to store imported cost data. Below are the steps that explain how to do this.

> Note! We highly recommend creating a separate Data Set for SegmentStream even if you already have cost data import data sets that you've used previously. This will allow avoiding data inconsistency or duplication and will make it easier to troubleshoot any issues.

## Creating data set

1. In the **Admin** section, select the account and property you want to import data to and select **Data Import**:
![Google Analytic Data Import](/img/google-analytics/ga-data-import.png)

2. Click **Create** to create a new Data Set:
![Google Analytics create Data Set](/img/google-analytics/ga-create-data-set.png)

3. Select **Data Set type** as **Cost Data** and click **Continue**:
![Google Analytics select Data Set type](/img/google-analytics/ga-data-set-type.png)

4. Enter the **Data Set Name** and choose the **Enabled Views**. Cost data will be available only for the selected views:
![Google Analytics Data Set details](/img/google-analytics/ga-data-set-details.png)
> **Note:** If you want to import your ad cost data to several views at once, you need to select these views while creating the data set. Note that SegmentStream will use the first view in the list to determine the cost data currency. This currency will be used to convert all cost data for all selected views.

5. Choose all the dimensions and metrics as shown in the screenshot, select **Import Behavior** as **Overwrite** and click **Save**:
![Google Analytics Data Set schema](/img/google-analytics/ga-data-set-schema.png)

## What's next

* Once the data set is created you can move forward to [Connecting Google Analytics to SegmentStream](/google-analytics/connecting-google-analytics)