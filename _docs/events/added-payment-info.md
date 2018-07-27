---
layout: page
section: events
title: "Added Payment Info"
order: 2
---
The `Added Payment Info` event should be pushed to the `digitalData.events` array when loading the page that saves the user's billing information in the process of placing an order. This event should be called only if you save the customer's billing information.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Added Payment Info',
  cart: digitalData.cart
});
```

#### From the DDManager interface
`Added Payment Info` is a server event. It can not be created from the built-in DDManager triggers. The event must be added to the website code if the server responds successfully.

### Required by the following integrations:
* [Vkontakte Dynamic retargeting](/integrations/vkontakte)
* [Facebook](/integrations/facebook)