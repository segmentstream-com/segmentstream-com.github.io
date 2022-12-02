---
layout: page
section: bigquery
navigation_title: "Creating GCP project"
title: "Creating Google Cloud Platform project"
order: 5
date: 2020-04-29
---

<!---
In this article explained how to
1. Sign up for BigQuery (with relevant links)
2. Create first project (or a new project if one exists if it is a different flow). Suggest how to name the project to avoid namings like "SegmentStream"
-->

BigQuery is a part of Google Cloud Platform.
To use BigQuery you need to have a Google Cloud project.

## Before you begin
You should have an existing [Google Cloud Platform account](creating-gcp-account).

## Creating a Google Cloud project
1. Navigate to the [Manage resources](https://console.cloud.google.com/cloud-resource-manager?walkthrough_id=resource-manager--create-project) page in the Google Cloud console.
2. On the **Select organizatio**n** drop-down list at the top of the page, select the organization resource in which you want to create a project. If you are a free trial user, skip this step, as this list does not appear.
3. Click **Create Project**.
4. In the **New Project** window that appears, enter a project name and select a billing account as applicable.
5. Enter the parent organization or folder resource in the Location box. That resource will be the hierarchical parent of the new project. If No organization is an option, you can select it to create your new project as the top level of its own resource hierarchy.
6. When you're finished entering new project details, click **Create**.

## What's next

* [Creating BigQuery dataset](creating-bigquery-dataset)
* [Connecting BigQuery to SegmentStream](connecting-bigquery)
