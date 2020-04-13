---
layout: page
section: ecommerce
title: "Checkout process page"
date: 2018-02-09 12:00:00
order: 6
---

Below is an example of filling the `digitalData` data layer on checkout pages. Most often this is a set of pages representing a funnel between the basket page and the "Thank you for your purchase" page.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#page">page</a></li>
  <li><a href="#cart">cart</a></li>
  <li><a href="#website">website</a></li>
  <li><a href="#user">user</a></li>
  <li><a href="#version">version</a></li>
  <li><a href="#campaigns">campaigns</a></li>
  <li><a href="#recommendation">recommendation</a></li>
  <li><a href="#example">Example</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
On the page for registering an online store order, the following objects must be declared and filled in:
 - Required:  `page`, `website`, `user`, `cart`, `version`

>As a rule, there are no recommendations and banner blocks on checkout pages.

### <a name="page"></a>page
------
You need to declare and fill in only 2 variables in the `digitalData.page` object. All other variables will be automatically filled by the SegmentStream library.

>Usually the checkout step is divided into several steps. We recommend filling the `page.category` variable with words that best describe each step: 'Authorization', 'Delivery', 'Payment', 'Order Review'.

[More about the **page** object](/digitaldata/page)

Example:
```javascript
  window.digitalData = {
    ...,
    page: {
      type: 'checkout',
      category: 'Delivery' //Value depends on the checkout step
    },
    ...
  }
```

### <a name="cart"></a>cart
------
As the user completes checkout steps, the `digitalData.cart` object is enriched with new variables:
`vouchers`, `voucherDiscount`, `shippingCost`, `shippingMethod`, `paymentMethod`.

>Do not initialize a variable if its value is not yet known. For example, in the authorization step, you do not need to pass the `shippingCost`, `shippingMethod`, `paymentMethod` variables.

[More about the **cart** object](/digitaldata/cart)

Example:
```javascript
window.digitalData = {
  ...,
  cart: {
    id: "CART2203",
    vouchers: [
      "MYVOUCHER1"
    ],
    voucherDiscount: 20,
    shippingCost: 5,
    shippingMethod: "Delivery",
    currency: "GBP",
    subtotal: 100,
    total: 85,
    lineItems: [
      ...,
      {
        product: {
          id: "1234567890",
          url: "http://website.com/product.html",
          imageUrl: "http://website.com/image.png",
          thumbnailUrl: "http://website.com/image_thumb.png",
          name: "Big Boots",
          description: "Product description",
          manufacturer: "Timberland",
          category: ["Footwear","Boots"],
          currency: "GBP",
          unitPrice: 60,
          unitSalePrice: 50,
          skuCode: "TBL6065RW"
        },
        quantity: 2,
        subtotal: 100
      },
      ...
    ]
  },
  ...
}
```

### <a name="website"></a>website
------
You need to declare and fill in only 6 variables in the `digitalData.website` object. The following 3 variables are required: `website.type`,` website.currency`, `website.environment`. The remaining variables depend on the characteristics of your site.

[More about the **website** object](/digitaldata/website)

Example:
```javascript
  window.digitalData = {
    ...,
    website: {
      region: "London",
      regionId: "11",
      type: "desktop",
      language: "en-gb",
      currency: "GBP",
      environment: "production"
    },
    ...
  }
```

### <a name="user"></a>user
------
The composition of the `digitalData.user` object strongly depends on the requirements of the project. We recommend that you fill at least the following variables: `userId`, `user.email`, `user.isLoggedIn`, `user.firstName`, `user.isSubscribed`

>If you do not have information about a particular property of a visitor, do not declare the variable. For example: you do not know if the visitor is subscribed to the email-list. **Correct**: do not declare the variable `digitalData.user.isSubscribed`, **Wrong**: declare a variable and assign it a value of FALSE.

>Even if the visitor is not authorized, but has been authorized in the past, pass the information about him to the object `digitalData.user`. This will help with the targeting of personalization campaigns and in the management of advertising systems.

[More about the **user** object](/digitaldata/user)

Example:
```javascript
window.digitalData = {
  ...,
  user: {
    firstName: "John",
    userId: "4638mn1",
    email: "jdoe@example.com",
    isLoggedIn: true,
    isSubscribed: false
  },
  ...
}
```

### <a name="version"></a>version
------
The `digitalData.version` variable must be declared and filled when loading each page of the site.

[More about the **version** variable](/digitaldata/standard-version)

Example:
```javascript
window.digitalData = {
  ...,
  version: '1.1.3',
  ...
}
```

## <a name="example"></a>Example
------
В итоге, ваш код будет похож на:
```javascript
window.digitalData = {
  page: {
    type: 'checkout',
    category: 'Checkout'
  },
  website: {
    type: "desktop",
    currency: "GBP",
    environment: "production"
  },
  user: {
    firstName: "John",
    userId: "4638mn1",
    email: "jdoe@example.com",
    isLoggedIn: true,
    isSubscribed: false
  },
  cart: {
    id: "CART2203",
    vouchers: [
      "MYVOUCHER1"
    ],
    voucherDiscount: 20,
    shippingCost: 5,
    shippingMethod: "Delivery",
    currency: "GBP",
    subtotal: 100,
    total: 85,
    lineItems: [
      {
        product: {
          id: "1234567890",
          url: "http://website.com/product.html",
          imageUrl: "http://website.com/image.png",
          thumbnailUrl: "http://website.com/image_thumb.png",
          name: "Big Boots",
          description: "Product description",
          manufacturer: "Timberland",
          category: ["Footwear","Boots"],
          currency: "GBP",
          unitPrice: 60,
          unitSalePrice: 50,
          skuCode: "TBL6065RW"
        },
        quantity: 2,
        subtotal: 100
      },
    ]
  },
  version: '1.1.3',
}
/* Here you should place the snippet of the initialization of the SegmentStream library */
```

>For convenience, we did not list the repeating elements of the recommendations, items, campaigns, lineItems arrays but left just one example in each.
