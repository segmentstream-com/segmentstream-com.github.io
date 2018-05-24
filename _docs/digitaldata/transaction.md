---
layout: page
section: digitaldata
title: "transaction"
date: 2018-01-15 12:00:00
order: 1
---

The `digitalData.transaction` object contains variables that describe the number, composition and amount of the order, terms of payment and delivery.

>The `transaction` object should appear only on the "Thank you for purchase" page (`page.type` = 'confirmation') or as part of a  ["Completed Transaction"](/events/completed-transaction) event.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">transaction.orderId</a></li>
  <li><a href="#2">transaction.isReturning</a></li>
  <li><a href="#3">transaction.cartId</a></li>
  <li><a href="#4">transaction.isFirst</a></li>
</ul>


### <a name="0"></a>Introduction
------
The `digitalData.transaction` object must be declared and filled in the source code of the "Thank you for your purchase" page. The composition of the object almost completely coincides with the composition of the [`digitalData.cart`](/digitaldata/cart) object. Below, we will describe unique variables that are not present in the `cart` object.

Example:
```javascript
digitalData.transaction: {
  orderId: "QA-123456",
  cartId: "CART2203",
  isFirst: true,
  isReturning: false

  //the variables listed below come from the digitalData.cart object
  currency: "USD",
  subtotal: 25000,
  vouchers: [
    "MYVOUCHER1"
  ],
  voucherDiscount: 500,
  tax: 0,
  shippingCost: 1500,
  shippingMethod: "Delivery",
  total: 26000,
  lineItems: [LineItems, LineItem, LineItem, ...]
}
```

>If your site generates for each order confirmation page a unique URL like https://site.com/order?id=123456, make sure that when you load this URL from another browser, the transaction information is not added to the `digitalData` object

### <a name="1"></a>transaction.orderId
------
Data type: string.

`transaction.orderId` - **required** variable that contains the unique order ID.

### <a name="2"></a>transaction.isReturning
------
Data type: boolean.

`transaction.isReturning` - **required** variable that is equal to false if the user just made an order and sees the confirmation page for the first time. True - if the user made an order earlier, and now returned to re-view the order or track its status.

### <a name="3"></a>transaction.cartId
------
Data type: number.

`transaction.cartId` - variable that contains a unique cart identifier.

>The value of `digitalData.transaction.cartId` should be equal to the `digitalData.cart.id` variable on page before the 'Thank You' page.

### <a name="4"></a>transaction.isFirst
------
Data type: boolean.

`transaction.isFirst` - variable that is equal to true if the user has never bought before, and this is his first purchase. False, if he has purchased previously.
