---
layout: page
section: events
title: "Viewed Product Detail"
order: 2
---
The `Viewed Campaign` event must be pushed to the `digitalData.events` array when a product page or a 'quick-view' popup window with a product's details is loaded.

#### From the site code
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Detail'
});
```

#### When using AJAX (quick-view)
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Detail',
  product: {...}
});
```
> For a detailed description of the `product` object, see the developer section.

#### From the DDManager interface
**Trigger**: event `Viewed Page`,

**Event handler**:

```javascript
if (_digitalData('page.type') === 'product') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Detail'
  };
}
```

#### Required by the following integrations:
* Adwords
* Criteo
* Facebook
* MyTarget
* Retail Rocket
* RTB House
* Sociomantic
* Segmento
* Yandex Metrica
* Google Analytics (Enhanced Ecommerce)