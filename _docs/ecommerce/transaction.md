---
layout: page
section: ecommerce
title: "'Thank You' page"
date: 2018-02-09 12:00:00
order: 7
---

Below is an example of filling the `digitalData` data layer on 'Thank You' pages.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#page">page</a></li>
  <li><a href="#transaction">transaction</a></li>
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
On the 'Thank you' page, the following objects must be declared and filled: `transaction`, `page`, `website`, `user`, `cart`, `version`

### <a name="page"></a>page
------
You need to declare and fill in only 2 variables in the `digitalData.page` object. All other variables will be automatically filled by the SegmentStream library.

[More about the **page** object](/digitaldata/page)

Example:
```javascript
  window.digitalData = {
    ...,
    page: {
      type: 'confirmation',
      category: 'Confirmation'
    },
    ...
  }
```

### <a name="transaction"></a>transaction
------
The `digitalData.transaction` object must be declared and filled on the 'Thank you' page.

[More about the **transaction** object](/digitaldata/transaction)

Example:
```javascript
window.digitalData = {
  ...,
  transaction: {
    orderId: "AC-4324-945"
    cartId: "CART2203",
    isFirst: true,
    isReturning: false,
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

### <a name="cart"></a>cart
------
On the 'Thank You' page the `digitalData.cart` object must describe an empty cart

Example:
```javascript
window.digitalData = {
  ...,
  cart: {
    currency: "GBP",
    subtotal: 0,
    total: 0,
    lineItems: []
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
In the end, your code will be similar to:
```javascript
window.digitalData = {
  page: {
    type: 'confirmation',
    category: 'Confirmation'
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
    currency: "GBP",
    subtotal: 0,
    total: 0,
    lineItems: []
  },
  transaction: {
    orderId: "AC-4324-945"
    cartId: "CART2203",
    isFirst: true,
    isReturning: false,
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
  version: '1.1.3'
}
/* Here you should place the snippet of the initialization of the SegmentStream library */
```

>For convenience, we did not list the repeating elements of the recommendations, items, campaigns, lineItems arrays but left just one example in each.
