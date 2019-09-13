---
layout: page
section: events
title: "Clicked Product"
order: 2
---
The `Clicked Product` event must be pushed to the `digitalData.events` array when a user clicks on a product link in a products list.

> Important! The product's links must be marked by the `ddl_product_link` class, or by the `ddl_product_link_js` class if the links open a 'Quick View' popup of the product. The links should also have the `data-product-id` data attribute. For more information, see the HTML page layout section.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Clicked Product',
  listItem: {
    product: productId,
    listId: listId
  }
});
```

#### From the SegmentStream interface
**Trigger**: `click`,

**CSS selector**: `.ddl_product_link`

**Event handler**:

```javascript
var productId = element.getAttribute('data-product-id');
var listId = element.getAttribute('data-list-id');
return {
  name: 'Clicked Product',
  category: 'Ecommerce',
  listItem: {
    product: productId,
    listId: listId
  }
};
```

> Please note! When the "Click" trigger is selected an additional "Follow link defined in "href" after event" option appears. Enabling it will add a 500ms delay between the click on the link and the redirect, so that the tracked event has enough time to be sent to all integrations.

#### Required by the following integrations:
* Google Analytics (Enhanced Ecommerce)
* Retail Rocket
