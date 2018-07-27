---
layout: page
section: events
title: "Completed Checkout Step"
order: 2
---
The `Completed Checkout Step` event must be pushed to the `digitalData.events` array in one of the following scenarios:

* During the checkout process, the user chose an order option (delivery type, payment type, etc.) in one of the steps and clicked on the "Proceed to next step" button,
* When loading the page of the next step in the checkout process. Along with the pageview event, an event with information about the completion of the previous checkout step should be sent.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Completed Checkout Step',
  step: 2, //example
  option: 'MasterCard' //example
});
```


#### From the DDManager interface
> Let's say the checkout process on your website contains 4 steps:
> 1. view the shopping cart
> 2. enter information about the address and method of delivery
> 3. enter information about the payment method
> 4. order review and the "Complete Order" button
> In this case, you will need to push two `Completed Checkout Step` events, one should be pushed when you load the page of the third step (with information about the selected delivery method), and another when you download step 4 (with information about the chosen payment method)

**Trigger**: event `Viewed Checkout Step`,

**Event handler**:

```javascript
var checkoutSteps = [3,4];
var checkoutStep = _digitalData('cart.checkoutStep');
if (checkoutSteps.indexOf(checkoutStep) !== -1) {
  var option = _digitalData('cart.shippingMethod')
  if (checkoutStep === 4 ) option = _digitalData('cart.paymentMethod');
  return {
    category: 'Ecommerce',
    name: 'Completed Checkout Step',
    step: checkoutStep - 1,
    option: option
  };
};
```

### Required by the following integrations:
* Google Analytics (Enhanced Ecommerce)