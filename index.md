---
layout: default
title: "Documentation Index Page"
---

### Introduction:
------
**DigitalDataManager** is a universal solution that manages the flow of information between the site and a variety of analytics and marketing systems. These systems are able to receive information about certain events occurring on the site in a certain format. Every system needs different events:
- For the Criteo retargeting system, it is important to know at what point the user visits the basket page, while for the Retail Rocket system it is not.
- For Yandex Metrica, it is important to get information about the product at the time of its removal from the basket, while it isn't important for Google Analytics
- Data streaming systems record all events occurring on the site for further in-depth analysis.

DigitalDataManager is functioning with the help of the following:
- **[DigitalData](http://docs.segmentstream.com/for-developer/)** is an open standard for presenting information on web pages. Technically, DigitalDataLayer is a simple JavaScript object in JSON format that contains structured information about a user, a page, and all events (pageviews, items, clicks, additions to cart, transactions, JavaScript errors, and more).
- **[DigitalDataManager Panel](http://docs.segmentstream.com/for-analyst/)** is a system that works with data from DigitalDataLayer. DigitalDataManager converts information into any format and passes it to marketing and analytics systems at the right time. Also DigitalDataManager enriches DigitalDataLayer with data from third-party systems, for example: CRM, DMP, weather API, etc.

### Key features:
------
- Activation and deactivation of marketing systems in 1 click.
- Reducing the cost of integrations by 8-10 times.
- Integration prioritization management.
- Real-time error validation.
- Automatic sending of data on any integration failures to analytics.
- Data security. Trackers only get the necessary information for the effective operation of their system and not a bit more.
- Streaming of all events into Google BigQuery.