---
layout: page
section: events
title: "Viewed Product Detail"
order: 2
---
The `Viewed Product Detail` event must be pushed to the `digitalData.events` array when a product page or a 'quick-view' popup window with a product's details is loaded.

## From the site code
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Detail',
  product: {...}
});
```

## When using AJAX (quick-view)
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Detail',
  product: {...}
});
```
> For a detailed description of the `product` object, see the developer section.

## From the SegmentStream interface
**Trigger**: event `Viewed Page`,

**Event handler**:

```javascript
if (_digitalData('page.type') === 'product') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Detail',
    product: {...}
  };
}
```

> If the product object already exists in the digitalData object, you can add the trimmed version of the product to the 'Viewed Product Detail' event: {id: '1212', skuCode: '1212000003'}.

## Required by the following integrations:
* Adwords
* Criteo
* Facebook
* MyTarget
* Retail Rocket
* RTB House
* Sociomantic
* Segmento
* Yandex.Metrica
* Google Analytics (Enhanced Ecommerce)
