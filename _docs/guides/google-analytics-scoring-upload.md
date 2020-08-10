---
layout: page
section: guides
navigation_title: "Uploading ML-based user scoring into Google Analytics"
title: "Uploading ML user scoring into Google Analytics"
date: 2020-08-04
---

This document describes how you can upload SegmentStream ML-based predictions about the probability to convert from Google BigQuery into Google Analytics.

Uploaded predictions can be used to build retargeting audiences, for example:
* Users that have >10% likelihood to convert in the next X days;
* Users that have <1% likelihood to convert within the next X days;
* etc.

These retargeting audiences can be then transferred to Google Ads to improve bidding strategy or building wide look-a-like audiences for better targeting.

## Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).
- Make sure that table with user probabilities is created in Google BigQuery (usually is done by SegmentStream onboarding team).

## Creating custom dimension for Google clientId
- In the **Admin** section, select the account and property you want to import data to and select **Custom Definitions > Custom Dimensions**:
- Create custom dimension on user level. You can name it anyway you want.
![Google Analytics create Custom Dimension](/img/google-analytics/ga_cd_1.png)
- Use **Custom Dimension** index while setting up **Data Import**
![Google Analytics create Custom Dimension](/img/google-analytics/ga_cd_2.png)
- Click Save

## Creating custom metric for conversion probability
- In the **Admin** section, select the account and property you want to import data to and select **Custom Definitions > Custom Metrics**:
- Create custom metric with Integer "Formatting Type". You can name it anyway you want.
![Google Analytics create Custom Dimension](/img/google-analytics/ga_cm_1.png)
- Use **Custom Metric** index while setting up **Data Import**
![Google Analytics create Custom Dimension](/img/google-analytics/ga_cm_2.png)
- Click Save

## Setting up Google clintId collection into Custom Dimension
- [Using gtag.js ▸](https://www.simoahava.com/analytics/add-clientid-to-custom-dimension-gtag-js/){:target="_blank"}
- 

## Creating data set for user data

1. In the **Admin** section, select the account and property you want to import data to and select **Data Import**:
![Google Analytic Data Import](/img/google-analytics/ga-data-import.png)

2. Click **Create** to create a new Data Set:
![Google Analytics create Data Set](/img/google-analytics/ga-create-data-set.png)

3. Select **Data Set type** as **User Data** and click **Continue**:
Image here

4. Enter the **Data Set Name** and choose the **Enabled Views**. Cost data will be available only for the selected views:
Image here

5. (draft) Choose all the dimensions and metrics as shown in the screenshot, select **Import Behavior** as **Overwrite** and click **Save**:
Image here

## Enabling Google Analytics data destination

1. Go to [SegmentStream admin panel ▸](https://admin.segmentstream.com/){:target="_blank"}.
2. Open **Data Destination ▸ Add Data Destination**.
3. Select **Google Analytics**.
4. Click **Authenticate with Google** and go through the authentication flow.
5. Select your Google Analytics **Account** and **Property** using dropdowns.
![Google Analytics setup](/img/google-analytics/ga-connect.png)
6. Choose **Data Set Type** as **User Data**
7. Select **Data Set** which you would like to use for the user data import.
8. Define **BigQuery source table name** where you user scroing data is stored.
9. Map you BigQuery columns with Google clientId and scoring value to proper Google Analytics custom dimensions and metrics. (Image here)
10. Click **Save**.
