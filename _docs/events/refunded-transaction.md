---
layout: page
section: events
title: "Refunded Transaction"
order: 2
---
The `Refunded Transaction` event must be pushed to the `digitalData.events` array in the event of a full or partial return of previously ordered goods.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Refunded Transaction',
  transaction: {
    orderId: 'The id of the refunded order',
    lineItems: [...]
  }
});
```
> For more information about the `lineItems` array of  objects, see the 'for developer' section.

#### From the SegmentStream interface
The `Refunded Transaction` event can not be created from the built-in SegmentStream triggers. The event must be added from the site code.

#### Required by the following integrations:
* Google Analytics (Enhanced Ecommerce)
