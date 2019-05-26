---
layout: page
section: analyst
title: "CSV file upload"
date: 2019-04-09 12:00:00
order: 1
---
> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use Data Import.

The CSV file upload functionality allows you to import cost data from CSV files to Google BigQuery.

![](/img/manual.data.import.1.png)

### File requirements
------
Maximum file size: 1MB.
File format: csv, txt.
The first line of the file is the header and must contain fields separated by commas:
`source,medium,campaign,term,content,cost,clicks,impressions,date`

The description of the fields is given in the table:

Field | Description
--- | ---
source | Campaign source
medium | Type of traffic
campaign | Campaing name
term | Keyword
content | Ad identifier
cost | Cost
clicks | Click quantity
impressions | Impression quantity
date | Date in yyyy-mm-dd format

### File processing
------

Processing is automatic, it can take up to 24 hours, after which the data will appear in BigQuery.

The contents of the files will be written to a table with the name `customCosts`, in the project and dataset configured in the **Google BigQuery** integration settings.

The following steps have to be taken to view the **Google BigQuery** integration current project and dataset:

1. Choose your project
2. Go to the Integrations section
3. Select the **Google BigQuery** integration

![](/img/manual.data.import.2.png)

The integration settings window will open, it contains the project ID(1) and the name of the dataset(2).
![](/img/manual.data.import.3.png)

You can view the contents of this table through the GoogleBigQuery console, to do this, click the link [https://console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery), in the window that opens select the project, dataset, and the `customCosts` table.

### Processing statuses
------
![](/img/manual.data.import.4.png)
After downloading the file, it can take the following statuses:

- In queue (1) - The file was successfully uploaded and is in the queue for processing.
- Error (2) - An error has occurred while processing the file..
- Processed (3) - File successfully processed, data uploaded to Google BigQuery.
