---
layout: page
section: events
title: "Started Order"
order: 2
---
The `Started Order` event must be pushed to the `digitalData.events` array when the page of the first step of the checkout funnel is loaded. Usually the order is started from the page where the user is given the choice of ordering as a guest or as an authorized user.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Started Order',
  cart: digitalData.cart
});
```

#### From the DDManager interface
**Trigger**: event `Viewed Page`
```javascript
if (
  _digitalData('page.type') === 'checkout' &&
  _digitalData('page.category') === 'Authorization'
  ) {
  return {
    category: 'Ecommerce',
    name: 'Viewed Cart',
    cart: _digitalData('cart')
  };
}
```

#### Required by the following integrations:
* [Vkontakte Dynamic Retargeting](/integrations/vkontakte)
* [RTB House]