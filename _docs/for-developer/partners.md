---
layout: page
section: developer
title: "Third-party system events"
date: 2018-06-09 12:00:00
order: 2
---

In this section you will learn:
* How the third-party systems connected to the website can send events to Google Analytics and any other system.

There are a number of systems that dynamically change the website: they can insert a block containing recommended goods, show a pop-up window or a mini-message, replace one banner with another, and so on.
In order to correctly monitor the interaction of site visitors with blocks of content added by the aforementioned third-party systems, some actions are necessary on their part.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Tracking an arbitrary event</a></li>
  <li><a href="#2">Tracking product impressions in a list</a></li>
  <li><a href="#3">Tracking product clicks in a list</a></li>
</ul>

### <a name="0"></a> Introduction
------
The connected system gets access to the global `digitalData` object after its js-library is loaded. Now all events that occur with embedded content blocks must be pushed into the `digitalData.events` array. **DigitalDataManager** will intercept these events and send them to [Google Analytics](/integrations/google-analytics), [Yandex.Metrica](/integrations/yandex-metrica) or any other integration.

Typical cases are described below.

### <a name="1"></a> Tracking an arbitrary event
------
`name`, `source` are required variables for third-party system events. The following variables: `category`, `action`, `label`, `value`, `nonInteraction` are auxiliary and are necessary for sending the corresponding parameters to Google Analytics.

```javascript
digitalData.events.push({
  name: '<Partner> Event',           //Replace <Partner> to the name of the system
  category: '<Event category>',    
  action: '<Event action>',    
  label: '<Event label>',           
  value: '<Event value>',         //Number, not a string
  nonInteraction: true,              //If this variable isn't declared onInteraction: false will be passed by default 
  source: '<Partner>'                //Name of the system that pushed the event to digitalData.events
});
```


### <a name="2"></a> Tracking product impressions in a list
------
>The product impression event is semantic (reserved). Use the template below to correctly send information to Google Analytics.

```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product',
  listItems: [
    ...,
      {
        position: 4,
        listName: 'Homepage recommendations',
        product: {
          id: 'AB32',										
          skuCode: 'AB3200004',
          name: 'Blue Dress',					
          category: ['Clothing', 'Dresses'],
          unitPrice: 1000,
          unitSalePrice: 800,
          manufacturer: 'Gucc',
          variant: 'product variation',
          currency: 'RUB'
        }
      },
      {
        position: 5,
        listName: 'Homepage recommendations',
        product: {
          id: 'XY16',
          name: 'Yellow Dress',
          skuCode: 'XY1600001',
          category: ['Clothing', 'Dresses'],
          unitPrice: 2000,
          unitSalePrice: 1800,
          manufacturer: 'Prad',
          variant: 'product variation',
          currency: 'RUB'
        }
      },
      ...
  ],
  source: '<Partner>' //Name of the system that pushed the event to digitalData.events
});
```
where,
* `position` - Product position in the list
* `listName` - List name. This name will appear in the Google Analytics Performance report
* `product.id` - String, even if the identifier is numeric. Matches the groupId in the XML feed. In the event that the products in the feed have no groups, it corresponds to the offerId.
* `product.skuCode` - String, even if the identifier is numeric. Meets the offerId in the XML feed. Not necessary if the products in the feed do not have groups.
* `product.category` - Array of strings from parent to child from left to right
* `product.unitPrice` - Number, not a string. Price before discount
* `product.unitSalePrice` -  Number, not a string. Price including discount. If there is no discount, unitPrice = unitSalePrice. Required field.
* `product.variant` - Could contain size, color or other extra feature

### <a name="3"></a> Tracking product clicks in a list
------
>The product click event is semantic (reserved). Use the template below to correctly send information to Google Analytics.

```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Clicked Product',
  listItem:{
    position: 4,
    listName: 'Homepage recommendations',
    product: {
      id: 'AB32',										
      skuCode: 'AB3200004',
      name: 'Blue Dress',					
      category: ['Clothing', 'Dresses'],
      unitPrice: 1000,
      unitSalePrice: 800,
      manufacturer: 'Gucc',
      variant: 'product variation',
      currency: 'RUB'
    }
  },
  source: '<Partner>' //Name of the system that pushed the event to digitalData.events
});
```
where,
* `position` - Product position in the list
* `listName` - List name. This name will appear in the Google Analytics Performance report
* `product.id` - String, even if the identifier is numeric. Matches the groupId in the XML feed. In the event that the products in the feed have no groups, it corresponds to the offerId.
* `product.skuCode` - String, even if the identifier is numeric. Meets the offerId in the XML feed. Not necessary if the products in the feed do not have groups.
* `product.category` - Array of strings from parent to child from left to right
* `product.unitPrice` - Number, not a string. Price before discount
* `product.unitSalePrice` -  Number, not a string. Price including discount. If there is no discount, unitPrice = unitSalePrice. Required field.
* `product.variant` - Could contain size, color or other extra feature
