---
layout: page
section: events
title: "Viewed Cart"
order: 2
---
The `Viewed Cart` event must be pushed to the `digitalData.events` array when the cart page is loaded. In the event that clicking on the link to the cart does not load a new page, but opens a pop-up with the contents of the cart - you should also push the `Viewed Cart` event.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Cart'
});
```

#### From the SegmentStream interface
**Trigger**: event `Viewed Page`

**Event handler**:
```javascript
if (_digitalData('page.type') === 'checkout') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Cart'
  };
}
```

#### Required by the following integrations:
* Adwords
* Criteo
* MyTarget
* RTB House
* Sociomantic
* Segmento
