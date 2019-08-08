---
layout: page
section: analyst
title: "Overview"
date: 2017-06-05 12:00:00
order: 0
---

The SegmentStream panel allows you to control the flow of data between the site and third-party systems in case [the `digitalData` data layer is installed on the site](/for-developer/). Flow control is performed using six entities: Variables, Events, Integrations, Priorities, Scripts, Data Sources. Accordingly, the system interface is divided into 6 main sections, which can be accessed via tabs at the side of the interface.

![](/img/overview.11.png)

> [Global project settings](/for-analyst/settings) have to be set up before continuing.

### 1. Variables
------
The "Variables" module allows you to create new data based on the data in the `digitalData` object. The module solves a wide range of tasks: from converting one data format to another to creating a new variable in `digitalData` based on data received from third-party systems. <br />
[More about variables](/for-analyst/variables)

### 2. Events
------
Events is one of the most important components of `digitalData`. All information is sent to analytics and marketing systems in the form of events. Each event can carry information about the user, the current page, the type of user action, etc. <br />
[More about events](/for-analyst/events)

### 3. Integrations
------
Each integration is a connector between `digitalData` and a third-party system. An integration can listen to all events added to `digitalData.events`, and convert information from events into a format that is necessary for a third-party system. If an event is mandatory for the system, **SegmentStream** sends the relevant information.

In the interface, each integration has a set of settings. For some integrations, this is only a unique identifier in the system, for others - a fairly long list. You will find the description of the settings of all integrations on the corresponding pages. <br />
[More about integrations](/for-analyst/integrations)

### 4. Priorities
------
Priorities is the SegmentStream module which allows you to manage the queue in which integrations load. Priorities will help decrease your website's load time.<br />
[More about priorities](/for-analyst/priorities)

### 5. Scripts
------
The "Scripts" module makes it possible to execute any JavaScript code after a certain trigger. We recommend using the "Scripts" module only if your task can not solved by the functionality of "Integrations", "Events" and "Variables". <br />
[More about scripts](/for-analyst/scripts)

### 6. Data Sources
------
The data sources functionality allows you to import cost data from integrations to Google BigQuery.<br />
[More about data sources](/datasources/index)
