---
layout: page
section: javascript-sdk
title: "Event and variable naming conventions"
date: 2017-06-05 12:00:00
order: 120
---

In this section you will learn:
* How to correctly name custom variables in DigitalData.
* How to correctly name events.

We strongly recommend that you name variables and events in the same style. This approach will greatly simplify your work with all analytics and marketing systems.

## Introduction
------
There are many methods for naming variables in programming languages. Each developer comes up with his own "standards", understandable and convenient only to him. As a result, your analytics is filled with a bunch of dissimilar data that is difficult to understand and analyze.

> At first glance it may not seem obvious, but there are a lot of names that could be used for the same user event or variable.

For example, the user's authorization on the site can be called in different ways:

* logged_in
* logged in
* Logged In
* LoggedIn

**Which one of these methods is correct?**

To avoid long reflection on this issue and to engage in really important analytical issues, we have developed naming standards that will preserve order in the data.

These standards are designed to comply with 3 main principles:

* Standardization
* Convenience
* Clarity

## How to name variables
------
The SegmentStream is based on the digitalData standard, which is a multilevel object with a nested structure. All objects of the first level are defined by the standard and can not be changed:

* website
* page
* product
* user
* transaction
* cart
* events
* ...

Each of these objects can have an unlimited number of nested objects or variables. Some of them are already defined by the standard, the rest can be set at your discretion.

When creating new objects and parameters in digitalData, it is important to follow the following rules.

* Check if the parameter is already reserved in the standard
* All parameters and objects must be named in [camelCase](https://en.wikipedia.org/wiki/Camel_case)


## How to name events
------
In SegmentStream we use a set of clear naming rules for events, oriented to past-time actions:

* Select all objects with which it is possible to perform certain actions on your site. For example,for Ecommerce, this could be:
  * Profile Info
  * Product
  * Cart
  * Transaction
  * Campaign
  * ...

* Select the actions that can be performed with each object:

  Object | Action
  --- | ---
  Profile Info|Updated
  Product|Viewed, Clicked, Added, Removed
  Cart|Viewed
  Transaction|Completed, Refunded
  Campaign|Viewed, Clicked

* Connect them using [Title Case](http://titlecase.com):
  * Updated Profile Info
  * Viewed Product
  * Clicked Product
  * Added Product
  * Removed Product
  * Viewed Cart
  * Completed Transaction
  * Refunded Transaction
  * Viewed Campaign
  * Clicked Campaign

> Do not use unique data in the name of the event. for example:

```
digitalData.events.push({ name: 'Viewed Product - iPhone X' });
```

or

```
digitalData.events.push({ name: 'Selected Credit Term - 3 months' });
```

Instead, send this data as parameters:

```JavaScript
digitalData.events.push({
    name: 'Viewed Product',
    product: {
        name: 'iPhone X'
    }
});
```

```JavaScript
digitalData.events.push({
    name: 'Selected Credit Term',
    creditTerm: '3 months'
});
```
