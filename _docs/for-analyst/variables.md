---
layout: page
section: analyst
title: "Variables"
date: 2013-06-05 12:00:00
order: 4
---

The **"Variables"** module allows you to create new data based on the data in the `digitalData` object. This module solves a wide range of tasks: from converting one data format to another, to creating a new variables in `digitalData` based on data received from third-party systems.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Creating a new variable</a></li>
  <li><a href="#2">Trigger types</a></li>
  <li><a href="#3">Saving a variable</a></li>
  <li><a href="#4">Helper functions</a></li>
  <li><a href="#5">Variable testing</a></li>
</ul>

### <a name="0"></a>Introduction
------
DigitalDataManager allows you to send data from the `digitalData` object to any marketing system, for example, send information that the user has already made purchases into [Criteo](http://www.criteo.com/). Criteo only accepts numeric segment values, so you have to convert the purchase information to a numeric form. You can ask your programmers to send a value of 1 to the variable `digitalData.user.criteoSegment` every time a page loads, but it's easier to create this variable in the DigitalDataManager interface.
To create a new variable, click the "Add" button ontop of the list of all the variables. To edit previously created variables - click on the name of the required variable.

### <a name="1"></a>Creating a new variable
------
At the time of the Completed Transaction event, you must define the variable `digitalData.user.criteoSegment` with the value of `1` and save it permanently in the Local storage (storage in the visitor's browser).

![](/img/variables.1.png)

Next, in the Criteo integration settings, specify the name of the variable in which the user segment is stored - `digitalData.user.criteoSegment`.

### <a name="2"></a>Trigger types
------
There are two settings in the trigger settings of the variable creation tool:
1. The first setting lets you specify whether the variable will be added/updated before or after the event.
2. The event name is specified in the second setting.

If you select 'before' in the first setting, you will be able to send a value from the generated variable along with the event specified in the second setting.
If you select 'after', the variable will be created after the event and the information will not be sent along with event.

### <a name="3"></a>Saving a variable
------
Depending on the settings, the variables will be created each time the trigger event is sent to the 'digitalData.events' array, or they are extracted from the local storage of the user's device.
The storage period (in seconds) of a variable can be specified in the settings.

> Advice. It is sometimes necessary to save a variable not for a certain time, but until the occurrence of a certain event. In this case, you will need to create 2 variables

**Example**: You must pass the number of product page views into google analytics before a purchase.

To solve this task, you need to increase the value of a counter by 1 each time the [`Viewed Product Detail`](/events/viewed-product-detail) event is triggered and save that value inside the `digitalData.custom.viewedProductsCount` variable. When the [`Completed Transaction`](/events/completed-transaction) triggers - you should send the variable's value as a [custom metric](/integrations/google-analytics#11). After the `Completed Transaction` event triggers you should nullify the value of the `digitalData.custom.viewedProductsCount` variable.
1. `digitalData.custom.viewedProductsCount` - saving the counter value.

  ![](/img/variables.2.png)

  **Function that returns the variable value**

  ```javascript
  var viewedProductsCount = _digitalData('custom.viewedProductsCount') || 0;
  return (viewedProductsCount + 1);
  ```
2. `digitalData.custom.viewedProductsCount` - saving the counter value.

![](/img/variables.2.png)

**Function that returns the variable value**

```javascript
return 0;
```

### <a name="4"></a>Helper functions
------
When creating variables, it is useful to use a set of built-in functions that greatly simplify and shorten the code of the executed functions. The list of helper functions is described in the [events](/for-analyst/events#3) page.

### <a name="5"></a>Variable testing
------
The logic for testing variables is identical to the logic for testing events and integrations:
1. A new variable is always created in the "active state". This means that if you click the Publish button, your variable will work (or not work if it was not configured correctly). You can check in advance the correctness of the variable value by going to your site in test_mode mode. After loading the page, open the console (right-click the mouse), type digitalData.

![](/img/variables.4.png)

> To activate test_mode you should load any page of your website with the ddm_test_mode=1 GET-parameter, for example: [http://shop1.driveback.ru/?ddm_test_mode=1](http://shop1.driveback.ru/?ddm_test_mode=1)

2. If you want to disable the variable, click the button in the upper right corner of the variable's configuration and put it into the "Disabled" state.

![](/img/variables.5.png)

3. A variable can always be deleted by clicking on the "delete" button at the bottom of the variable settings panel.