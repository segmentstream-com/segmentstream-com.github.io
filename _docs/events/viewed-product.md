---
layout: page
section: events
title: "Viewed Product"
order: 2
---
The `Viewed Product` event must be pushed to the `digitalData.events` array when a product block in a listing enters a user's viewport.
>Important! DigitalDataManager has a built-in "Impression" trigger, which works if 75% of the tracked item enters the user's viewport.

#### From the site code / when using AJAX
We do not recommend pushing the `Viewed Product` event from the site code.

>Important! Product blocks must be marked with the `ddl_product` class. Also, they must have the `data-product-id` and `data-list-id` data attributes. For more information, see the HTML page layout section.

#### From the DDManager interface
**Trigger**: event `Impression`,

**CSS selector**: `.ddl_product`,

**Event handler**:

```javascript
return {
  name: 'Viewed Product',
  category: 'Ecommerce',
  listItems: elements.map(function(element) {
    return {
      product: element.getAttribute('data-product-id'),
      listId: element.getAttribute('data-list-id')
    };
  })
};
```
>Attention! The `Viewed Product` event occurs most often on any ecommerce project. This can lead to the fact that you quickly reach the [monthly limit](https://developers.google.com/analytics/devguides/collection/ios/v3/limits-quotas?hl=en) for hits in the free version of Google Analytics. Exceeding the limit can result in a significant loss of data due to [data-collection sampling](https://support.google.com/analytics/answer/7367018?hl=en&ref_topic=2601030)

#### Required by the following integrations:
* Google Analytics (Enhanced Ecommerce)

