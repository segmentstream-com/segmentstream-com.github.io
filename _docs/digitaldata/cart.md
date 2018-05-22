---
layout: page
section: digitaldata
title: "cart"
date: 2018-01-12 18:00:00
order: 1
---

The object `digitalData.cart` contains variables that describe the contents of the basket, terms of payment and delivery.

>Depending on which page the user is on, the composition of the object may vary. For example, the variable `digitalData.cart.shippingMethod` appears only on pages of the checkout process `digitalData.page.type` = 'checkout'

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">cart.currency</a></li>
  <li><a href="#2">cart.subtotal</a></li>
  <li><a href="#3">cart.total</a></li>
  <li><a href="#4">cart.lineItems</a></li>
  <li><a href="#5">cart.id</a></li>
  <li><a href="#6">cart.vouchers</a></li>
  <li><a href="#7">cart.voucherDiscount</a></li>
  <li><a href="#8">cart.shippingMethod</a></li>
  <li><a href="#9">cart.shippingCost</a></li>
  <li><a href="#10">cart.paymentMethod</a></li>
  <li><a href="#11">cart.tax</a></li>
</ul>


### <a name="0"></a>Introduction
------
The `digitalData.cart` object must be declared and filled in the source code of each page of the online store:

Example:
```javascript
window.digitalData = {
  ...,
  cart: {
    id: "CART2203",
    currency: "USD",
    subtotal: 25000,
    vouchers: [
      "MYVOUCHER1"
    ],
    voucherDiscount: 500,
    tax: 0,
    shippingCost: 1500,
    shippingMethod: "Delivery",
    paymentMethod: "Cash",
    total: 26000,
    lineItems: [LineItem, LineItem, LineItem, ...]
  },
  ...
}
```

>Even if there are no goods in the visitor's basket, the object must be declared and partially filled
Example of filling an empty basket:
```javascript
window.digitalData = {
  ...,
  cart: {
    currency: "USD",
    subtotal: 0,
    total: 0,
    lineItems: []
  },
  ...
}
```

### <a name="1"></a>cart.currency
------
Data type: string.

`cart.currency` - **required** variable, which contains the basket currency in the ISO 4217 format (USD, EUR, USD).

### <a name="2"></a>cart.subtotal
------
Data type: number.

`cart.subtotal` - **required** variable, which contains the total value of all the goods in the users basket. 
`cart.subtotal` does not account for the shipping price and the discounts applied to the basket

>Includes discounts applied to specific goods, for example seasonal discounts.

### <a name="3"></a>cart.total
------
Data type: number.

`cart.total` - **required** variable, which contains the total value of all goods added to the cart, including tax, discounts and shipping costs.

### <a name="4"></a>cart.lineItems
------
Data type: array of objects.

`cart.lineItems` - **required** variable, which contains an array of objects. Each object describes the product added to the basket: the product itself, the quantity of items, and some other variables.

Example of **cart.lineItems** filled with objects:
```javascript
window.digitalData = {
  ...,
  cart: {
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

### <a name="5"></a>cart.id
------
Data type: string.

`cart.id` - a variable that contains a unique basket identifier. The basket identifier is assigned to the user from the moment of the first login on the website up to the placement of the order. On the "Thank you for your purchase" page, the basket ID is updated.

>This variable is required for the Ofsys integration

### <a name="6"></a>cart.vouchers
------
Data type: string. 

`cart.vouchers` - a variable that contains an array of promotional codes applied to the shopping cart. 

>If only one promotional code has been applied to the shopping cart, the variable will take the value of an array consisting of one line

### <a name="7"></a>cart.voucherDiscount
------
Data type: number.

`cart.voucherDiscount` - a variable that contains the total discount after applying all the promotional codes.

### <a name="8"></a>cart.shippingMethod
------
Data type: string. 

`cart.shippingMethod` - a variable that contains the delivery method selected in the order process.

>This variable appears in the `cart` object only on the page of the order stage.

### <a name="9"></a>cart.shippingCost
------
Data type: number.

`cart.shippingCost` - a variable that contains the delivery cost for the selected method.

>The shipping cost can be dynamically changed depending on the chosen method of delivery method. To dynamically change any variables, use the `digitalData.changes.push (...)` method.

### <a name="10"></a>cart.paymentMethod
------
Data type: string. 

`cart.paymentMethod` - a variable that contains the method of payment for the order.

### <a name="11"></a>cart.tax
------
Data type: number.

`cart.tax` - A variable that contains the sum of all taxes associated with the goods in the basket.