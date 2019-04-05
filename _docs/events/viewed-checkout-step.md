---
layout: page
section: events
title: "Viewed Checkout Step"
order: 2
---
The `Viewed Checkout Step` event must be pushed to the `digitalData.events` array when a checkout process page is loaded.
>Important! In case you use a single-page basket page, in which each checkout step is loaded by AJAX, you should add a `Viewed Checkout Step` event from the site code at each new step.

#### From the site code / when using AJAX
**Step 1**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 1,
  option: '4-step-cart'
});
```
**Step 2**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 2,
  option: 'DHL'
});
```
**Step 3**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 3,
  option: 'Mastercard'
});
```
**Step 4**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 4
});
```

#### From the SegmentStream interface
**Trigger**: event `Viewed Page`,

**Event handler**:

```javascript
if (_digitalData('page.type') === 'checkout' || _digitalData('page.type') === 'cart') {
  var step = _digitalData('cart.checkoutStep');
  var option = '';
  switch (step) {
    case 1:
      option = _digitalData('cart.checkoutOption');
      break;
    case 2:
      option = _digitalData('cart.shippingMethod');
      break;
    case 3:
      option = _digitalData('cart.paymentMethod');
      break;
  };
  return {
    category: 'Ecommerce',
    name: 'Viewed Checkout Step',
    step: step,
    option: option
  };
}
```

#### Required by the following integrations:
* [Facebook](/integrations/facebook)
* RTB House
* Segmento
