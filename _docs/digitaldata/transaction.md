---
layout: page
section: digitaldata
title: "transaction"
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
  <li><a href="#4_1">transaction.contactInfo</a></li>
  <li><a href="#5">transaction.currency</a></li>
  <li><a href="#6">transaction.subtotal</a></li>
  <li><a href="#7">transaction.total</a></li>
  <li><a href="#8">transaction.lineItems</a></li>
  <li><a href="#10">transaction.vouchers</a></li>
  <li><a href="#11">transaction.voucherDiscount</a></li>
  <li><a href="#12">transaction.shippingMethod</a></li>
  <li><a href="#13">transaction.shippingCost</a></li>
  <li><a href="#14">transaction.paymentMethod</a></li>
  <li><a href="#15">transaction.tax</a></li>
</ul>


### <a name="0"></a>Introduction
------
The `digitalData.transaction` object must be declared and filled in the source code of the "Thank you for your purchase" page. The composition of the object almost completely coincides with the composition of the [`digitalData.cart`](/digitaldata/cart) object.

Example:
```javascript
window.digitalData = {
  ...,
  transaction: {
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
  ...
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

### <a name="4_1"></a>transaction.contactInfo
------
Data type: object.

`transaction.contactInfo` - variable that contains the contact information of the user receiving the order. For example if during the checkout phase the user left his name, phone and email, then the value will look like this:

```javascript
window.digitalData = {
  ...,
  transaction: {
    ...,
    contactInfo: {
      firstName: 'John',
      phone: '+44 7911 123456',
      email: 'john@segmentstream.com'
    },
    //...the rest of the transaction data
  }
  ...
}
```

### <a name="5"></a>transaction.currency
------
Data type: string.

`transaction.currency` - **required** variable, which contains the basket currency in the ISO 4217 format (USD, EUR, USD).

### <a name="6"></a>transaction.subtotal
------
Data type: number.

`transaction.subtotal` - **required** variable, which contains the total value of all the goods in the users basket.
`transaction.subtotal` does not account for the shipping price and the discounts applied to the basket

>Includes discounts applied to specific goods, for example seasonal discounts.

### <a name="7"></a>transaction.total
------
Data type: number.

`transaction.total` - **required** variable, which contains the total value of all goods added to the cart, including tax, discounts and shipping costs.

### <a name="8"></a>transaction.lineItems
------
Data type: array of objects.

`transaction.lineItems` - **required** variable, which contains an array of objects. Each object describes the product added to the basket: the product itself, the quantity of items, and some other variables.

Example of **transaction.lineItems** filled with objects:
```javascript
window.digitalData = {
  ...,
  transaction: {
    ...,
    lineItems: [
      {
        product: {
          id: "1234567890",
          url: "http://website.com/product.html",
          imageUrl: "http://website.com/image.png",
          thumbnailUrl: "http://website.com/image_thump.png",
          name: "Timberland Boots",
          description: "Description",
          manufacturer: "Timberland",
          category: ["Footwear","Boots"],
          currency: "USD",
          unitPrice: 12990,
          unitSalePrice: 10990,
          skuCode: "TBL6065RW",
        },
        quantity: 2,
        subtotal: 10990,
        shippingMethod: "Post",
        shippingCost: 800
      },
      {
        product: {/*all the variables of the product object*/},
        quantity: 1,
        subtotal: 3200,
        shippingMethod: "Pickup",
        shippingCost: 0
      }
    ],
    ...
  },
  ...
}
```
where,
 - **product** - [product](/digitalData/product/) object. **required** variable
 - **quantity** - number. **required** variable, which contains the quantity of goods with a certain `product.id` and `product.skuCode`
  >The basket can contain several identical products with different variations, for example 2 pairs of identical shoes with different sizes. Each variation must be described by a unique array object `lineItems`
 - **subtotal** - number. The total cost of all lineItems, which is calculated as product.unitSalePrice * quantity.
 - **totalDiscount** - number. The total discount for the current element of the array lineItems from the applied coupons to a specific product or from promotions related to the quantity of goods purchased, such as "buy 2, get 1 free".
 - **shippingMethod** - string. An optional variable. Typically, shippingMethod is defined for the whole basket, however, if it is possible to select different delivery methods for different products, this property can be used in the element of the array lineItems
 - **shippingCost** - number. An optional variable. Can be used in case the logic described for shippingMethod is applicable.

 ### <a name="10"></a>transaction.vouchers
------
Data type: string.

`transaction.vouchers` - a variable that contains an array of promotional codes applied to the shopping cart.

>If only one promotional code has been applied to the shopping cart, the variable will take the value of an array containing one string

### <a name="11"></a>transaction.voucherDiscount
------
Data type: number.

`transaction.voucherDiscount` - a variable that contains the total discount after applying all the promotional codes.

### <a name="12"></a>transaction.shippingMethod
------
Data type: string.

`transaction.shippingMethod` - a variable that contains the delivery method selected in the order process.

### <a name="13"></a>transaction.shippingCost
------
Data type: number.

`transaction.shippingCost` - a variable that contains the delivery cost for the selected method.

### <a name="14"></a>transaction.paymentMethod
------
Data type: string.

`transaction.paymentMethod` - a variable that contains the method of payment for the order.

### <a name="15"></a>transaction.tax
------
Data type: number.

`transaction.tax` - A variable that contains the sum of all taxes associated with the goods in the order.
