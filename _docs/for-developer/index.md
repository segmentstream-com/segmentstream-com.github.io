---
layout: page
section: developer
title: "Overview"
date: 2017-06-05 12:00:00
order: 1
---

>The previous version of the documentation for the implementation of digitalData is available here: [digitaldata.readme.io](https://digitaldata.readme.io/docs)

**digitalData** - is a data layer (JavaScript-object), in which information is stored in the name-value format. The value can be a number, a string, another object, with its own structure or an array (a series of similar objects).

 One can imagine that the object is a cabinet with drawers signed with unique names. In each drawer there can be documents, also having their names. Access to information is carried out by the path to the document that lies in the drawer ('Cabinet name'. 'Drawer name'. 'Document name').

**DigitalDataManager** - is a program that can work with the `digitalData` object, implemented in accordance with the standard. DigitalDataManager automatically finds the necessary documents in the required drawers, collects them together and centrally sends them to other document stores - third-party marketing and analytics systems.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">digitalData standard</a></li>
  <li><a href="#1">Connecting the DigitalDataManager library to a website</a></li>
  <li><a href="#2">Events</a></li>
  <li><a href="#3">Changes in digitalData without page reload</a></li>
  <li><a href="#4">Page HTML-markup</a></li>
</ul>

### <a name="0"></a>digitalData standard
------
digitalData - is the standard developed by the DigitalDataManager project team.
When everything is filled in accordance with the standard, you can, for example, easily recognize the type of page you are currently on. Just refer to the object `digitalData.page.type`.
Where, 
- `digitalData` - Cabinet, 
- `page` - Drawer, 
- `type` - Document. 
The document will have "home" written in it if you are on the main page, "product" - on the product page, "cart" - in the basket, etc. Since any value can be written to a document, it is called a variable. Below we will talk about how to correctly fill each variable of the object `digitalData` for each page and every event that occurs on the site.

[Learn more about the digitalData standard.](/for-developer/digitaldata)

### <a name="1"></a>Connecting the DigitalDataManager library to a website
------
As it was noted above, the whole system is controlled by the program (library, script) DigitalDataManager. It is important to initialize the library in the correct place of the source code of your site. The DigitalDataManager should be called on every page of the site.

[Learn more about connecting](/for-developer/#snippet)

### <a name="2"></a>Events
------
There is one drawer in the `digitalData` cabinet, which is called **events**. `digitalData.events` is an array, it can contain the same objects - events. Access to each event is carried out by the sequence number of its addition to the drawer, for example `digitalData.events[2]`. The event itself is an object that contains information about what happened.
For example, when a page of a site is loaded, the `Viewed Page` event occurs. It is the very first event added to the array `digitalData.events`. <br />
DigitalDataManager watches the array `digitalData.events` all the time. As soon as an event arrives in the array, DigitalDataManager enriches it with information from other object variables and sends it to connected marketing and analytics systems.
 - [Learn more about events](/for-developer/#events)
 - [Creating events in the DigitalDataManager interface](/for-analyst/events)

### <a name="3"></a>Changes in digitalData without page reload
------
Another drawer is called **changes**. `digitalData.changes` is an array that contains information about all the changes that occurred with variables in digitalData without a page reload.
For example: the composition of the basket has changed, a filter of goods in the catalog has been applied, the user has changed the delivery method and others.
All these changes must be made using the changes method.

> Although it is physically possible, do not modify the digitalData object without using the digitalData.changes [] method

[Learn more about dynamically changing digitalData](/for-developer/#changes)

### <a name="4"></a>Page HTML-markup
------
DigitalDataManager is able to monitor user's interactions with website content. When certain site elements appear the user's field of view or when he clicks on links and active elements, DigitalDataManager automatically adds events to the array 
`digitalData.events`. 
For everything to work correctly, you need to add special classes and data-attributes to the tracked elements.

[Learn more about the HTML-markup of tracked elements](/for-developer/#markup)