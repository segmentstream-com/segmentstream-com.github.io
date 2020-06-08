---
layout: default
title: "Documentation Index Page"
---

### Introduction:
------
**SegmentStream** is a universal solution that manages the flow of information between the site and a variety of analytics and marketing systems. These systems are able to receive information about certain events occurring on the site in a certain format. Every system needs different events:
- For the Criteo retargeting system, it is important to know at what point the user visits the basket page, while for the OneSignal system it is not.
- For Yandex.Metrica, it is important to get information about the product at the time of its removal from the basket, while it isn't important for Google Analytics
- Google BigQuery integration records all events occurring on the website for further in-depth analysis.

SegmentStream is functioning with the help of the following:
- **[DigitalData](/javascript-sdk/digitaldata)** is an open standard for presenting information on web pages. Technically, DigitalDataLayer is a simple JavaScript object in JSON format that contains structured information about a user, a page, and all events (pageviews, items, clicks, additions to cart, transactions, JavaScript errors, and more).
- **[SegmentStream Panel](/javascript-sdk/quickstart)** is a system that works with data from DigitalDataLayer. SegmentStream converts information into any format and passes it to marketing and analytics systems at the right time. Also SegmentStream enriches DigitalDataLayer with data from third-party systems, for example: CRM, DMP, weather API, etc.

### Key features:
------
- Activation and deactivation of marketing systems in 1 click.
- Reducing the cost of integrations by 8-10 times.
- Integration prioritization management.
- Real-time error validation.
- Automatic sending of data on any integration failures to analytics.
- Data security. Trackers only get the necessary information for the effective operation of their system and not a bit more.
- Streaming of all events into Google BigQuery.
