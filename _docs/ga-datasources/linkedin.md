---
layout: page
section: ga-datasources
navigation_title: "LinkedIn"
title: "LinkedIn data source"
order: 8
date: 2020-10-02
---

## Getting started

1. Inside the admin panel click **Add Data Source**.
2. Choose **LinkedIn** from the list.
3. Click **Authenticate with LinkedIn** and go through the authentication flow.
4. Select ad accounts which cost data you would like to import.
5. Click **Save**.

### Default source/medium

LinkedIn allows running ads that do not lead directly to your website. This means that these types of campaigns can not have UTM-params and it is not possible to import them into Google Analytics or match them with website sessions due to limitations that require all imported costs to have campaign source and medium defined.

As a workaround, you can define default UTM-source and UTM-medium for your LinkedIn data source to manually attribute these costs to sessions with specified utm_source and utm_medium.
