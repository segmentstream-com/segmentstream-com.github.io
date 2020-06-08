---
layout: page
section: javascript-sdk
title: "Set up SegmentStream snippet"
date: 2020-04-30
order: 2
---

## What is SegmentStream snippet
The SegmentStream snippet is a small piece of JavaScript code that you paste into every page of your website. It tracks page views and user behavior events and sends them to BigQuery.

## How to find your project's snippet code
> SegmentStream snippet should be loaded after digitalData object is fully initialized because snippet sends parameters stored in digitalData to BigQuery.

1. [Visit SegmentStream Admin panel ▸](https://admin.segmentstream.com)
2. Click on **Project info**.
![Click on Project Info](/img/snippet.1.png)
3. Copy snippet code from **Website snippet code**.
![Website snippet code](/img/snippet.2.png)
4. Place it on every page of your website as close as possible to the opening `<head>` tag.
