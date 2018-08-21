---
layout: page
section: analyst
title: "Priorities"
date: 2017-08-15 12:00:00
order: 6
---

**Priorities** is the SegmentStream module, which allows you to manage the queue at which integrations load. Priorities will help you increase your website's load speed.

By default, all your integrations are loaded in asynchronous mode in parallel with your site. In case you have a lot of integrations, data from different servers creates a lot of threads (for example, retargeting systems start to load dozens of pixels of ad networks for synchronization of cookies). However, the user's browser can not accept more than a certain number of threads at the same time, as a result, all data streams are lined up into a **"random" queue**. It often happens, that the script from your CDN gets in the queue after the pixel of an advertising system, and without this script interaction with the site is impossible. As a result, the website load speed falls (in other words, the time interval between the moment when the page starts loading and the time when the user is able to interact with the content increases).

Priorities allow you to make a "random" queue - a controlled one.

>Prioritization order: Left to right, Top to bottom

![](/img/priorities.1.png)

The configuration of the module is very simple. There are 2 columns in the system interface:
1. While the site is loading
All the integrations that are in this column are loaded in parallel with the site in the order of the queue from left to right, top to bottom. Inside the column sorting is conditional, because We control only the sequence of the invocation of the integration code, but because of the asynchrony and different speed of response of the systems servers, the queue can acquire a "random" sequence.
2. After the site is loaded
All the integrations that are in this column are downloaded after the site is downloaded. This means that the systems will start to load after the moment when the user will be able to interact normally with the content. In this case, the order of the queue inside the column works identically to the previous item.

To change the priorities - just drag the block to the desired location.
