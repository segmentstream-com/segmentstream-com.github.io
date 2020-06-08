---
layout: page
section: events
title: "Clicked Product"
order: 2
---
The `Clicked Product` event must be pushed to the `digitalData.events` array when a user clicks on a product link in a products list.

> Important! The product links must contain the following attributes:
- `class` - element class `segmentstream_product_link` (Any class name can be used, but it should be identical on all pages, and unique to the product link elements)
- `data-list-id` - [list id](https://docs.segmentstream.com/digitaldata/listing#listing.listId). Required parameter.
- `data-list-name` - [list name](https://docs.segmentstream.com/digitaldata/listing#listing.listName). Required parameter.
- `data-product-id` - [product id](https://docs.segmentstream.com/digitaldata/product#product.id). Required parameter.
- `data-product-skuCode` - [product sku](https://docs.segmentstream.com/digitaldata/product#product.skuCode). Required parameter.
- `data-product-name` - [product name](https://docs.segmentstream.com/digitaldata/product#product.name). Required parameter.
- `data-product-unitPrice` - [full product price](https://docs.segmentstream.com/digitaldata/product#product.unitPrice). Required parameter.
- `data-product-unitSalePrice` -  [discounted product price](https://docs.segmentstream.com/digitaldata/product#product.unitSalePrice). Required parameter.
- `data-product-currency` - [product currency](https://docs.segmentstream.com/digitaldata/product#product.currency). Required parameter.
- `data-product-category` - [product category](https://docs.segmentstream.com/digitaldata/product#product.category). Required parameter.

## From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Clicked Product',
  category: 'Ecommerce',
  listItem: {
    listId: 'popular2019',
    listName: 'Popular Items',
    product: {
      id: '123',
      skuCode: '123xyz',
      name: 'Socks',
      unitPrice: 10,
      unitSalePrice: 6,
      currency: 'USD',
      category: ['Accessories', 'Socks']
    }
  }
});
```

## From the SegmentStream interface
**Trigger**: `click`,

**CSS selector**: `.segmentstream_product_link`

**Event handler**:

```javascript
return {
  name: 'Clicked Product',
  category: 'Ecommerce',
  listItem: {
    listId: element.getAttribute('data-list-id'),
    listName: element.getAttribute('data-list-name'),
    product: {
      id: element.getAttribute('data-product-id'),
      skuCode: element.getAttribute('data-product-skuCode'),
      name: element.getAttribute('data-product-name'),
      unitPrice: element.getAttribute('data-product-unitPrice'),
      unitSalePrice: element.getAttribute('data-product-unitSalePrice'),
      currency: element.getAttribute('data-product-currency'),
      category: JSON.parse(element.getAttribute('data-product-category'))
    }
  }
};
```

> Please note! When the "Click" trigger is selected an additional "Follow link defined in "href" after event" option appears. Enabling it will add a 500ms delay between the click on the link and the redirect, so that the tracked event has enough time to be sent to all integrations.

## Required by the following integrations:
* Google Analytics (Enhanced Ecommerce)
* Retail Rocket
