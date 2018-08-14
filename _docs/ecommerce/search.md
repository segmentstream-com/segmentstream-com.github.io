---
layout: page
section: ecommerce
title: "Search results"
date: 2018-02-09 12:00:00
order: 3
---

The following is an example of populating the `digitalData` data layer for a product search results page.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#0.1">listing</a></li>
  <li><a href="#1">page</a></li>
  <li><a href="#2">website</a></li>
  <li><a href="#3">user</a></li>
  <li><a href="#4">cart</a></li>
  <li><a href="#5">version</a></li>
  <li><a href="#6">campaigns</a></li>
  <li><a href="#7">recommendation</a></li>
  <li><a href="#8">Whole object</a></li>
</ul>

### <a name="0"></a>Introduction
------
On the search result pages of the online store, the following objects must be declared and filled:
 - Required: `listing`, `page`, `website`, `user`, `cart`, `version`
 - Optional (depends on page content): `campaigns` ,`recommendation`

### <a name="0.1"></a>listing
------
The `digitalData.listing` object must be declared and filled on any page that has `digitalData.page.type` = 'search'.

[More about the **listing** object](/digitaldata/listing)

Example:
```javascript
window.digitalData = {
  ...,
  listing: {
    listName: "search-results",
    listId: "main",
    query: "gucci skirt",
    items: [
      ...,
      {
        id: "1234567890",
        url: "http://website.com/product.html",
        imageUrl: "http://website.com/image.png",
        thumbnailUrl: "http://website.com/image_thump.png",
        name: "Leather skirt",
        description: "Description",
        manufacturer: "Gucci",
        category: ['Clothing','Skirts','Mini'],
        currency: "GBP",
        unitPrice: 100,
        unitSalePrice: 100,
        skuCode: 'TBL6065RW'
      },
      ...
    ],
    sortBy: "price_asc",
    resultCount: 20,
    pagesCount: 13,
    currentPage: 2,
    layout: "grid"
  },
  ...
}
```


### <a name="1"></a>page
------
You need to declare and fill in only 2 variables in the `digitalData.page` object. All other variables will be automatically filled by the DigitalDataManager library.

[More about the **page** object](/digitaldata/page)

Example:
```javascript
  window.digitalData = {
    ...,
    page: {
      type: 'search',
      category: 'Search Listing'
    },
    ...
  }
```

### <a name="2"></a>website
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

### <a name="3"></a>user
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

### <a name="4"></a>cart
------
The `digitalData.cart` object must be declared and filled when loading each page of the site.

If the user's cart is empty fill the object as described in the [cart object description](/digitaldata/cart#0)

[More about the **cart** object](/digitaldata/cart)

Example:
```javascript
window.digitalData = {
  ...,
  cart: {
    id: "CART2203",
    currency: "GBP",
    subtotal: 100,
    total: 105,
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

### <a name="5"></a>version
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

## Optional properties

### <a name="6"></a>campaigns
------
The `digitalData.campaigns` array must be declared and filled if the page you are loading has banners whose effectiveness you plan to track.

[More about the **campaigns** array](/digitaldata/campaigns)

Example:
```javascript
window.digitalData = {
  ...,
  campaigns: [
    ...,
    {
      id: "PROMO124",
      name: "SS18 SALE",
      description: "1500 models for sale",
      category: "Banner",
      subcategory: "Sales",
      design: "600x120",
      position: "left"
    },
    ...
  ],
  ...
}
```

### <a name="7"></a>recommendation
------
The `digitalData.recommendation` array must be declared and filled if there is at least 1 list of products on the loaded page.

[More about the **recommendation** array](/digitaldata/recommendation)

Example:
```javascript
window.digitalData = {
  ...,
  recommendation: [
    ...,
    {
      listName: "Recently viewed products",
      listId: "recentlyViewed",
      items: [
        ...,
        {
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
        ...
      ]
    },
    ...
  ],
  ...
}
```

### <a name="8"></a>Whole object
------
In the end, your code will be similar to:
```javascript
window.digitalData = {
  listing: {
    listName: "search-results",
    listId: "main",
    query: "gucci skirt",
    items: [
      {
        id: "1234567890",
        url: "http://website.com/product.html",
        imageUrl: "http://website.com/image.png",
        thumbnailUrl: "http://website.com/image_thump.png",
        name: "Leather skirt",
        description: "Description",
        manufacturer: "Gucci",
        category: ['Clothing','Skirts','Mini'],
        currency: "GBP",
        unitPrice: 100,
        unitSalePrice: 100,
        skuCode: 'TBL6065RW'
      }
    ],
    sortBy: "price_asc",
    resultCount: 20,
    pagesCount: 13,
    currentPage: 2,
    layout: "grid"
  },  
  page: {
    type: 'search',
    category: 'Search Listing'
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
    currency: "GBP",
    vouchers: [
      "MYVOUCHER1"
    ],
    voucherDiscount: 10,
    tax: 10,
    shippingCost: 5,
    shippingMethod: "Delivery",
    subtotal: 100,
    total: 95,
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
      }
    ]
  },
  version: '1.1.3',
  campaigns: [
    {
      id: "PROMO124",
      name: "SS18 SALE",
      description: "1500 models for sale",
      category: "Banner",
      subcategory: "Sales",
      design: "600x120",
      position: "left"
    }
  ],
  recommendation: [
    {
      listName: "Recently viewed products",
      listId: "recentlyViewed",
      items: [
        {
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
        }
      ]
    },
  ]
}
/* Here you should place the snippet of the initialization of the DigitalDataManager library */
```

>For convenience, we did not list the repeating elements of the recommendations, items, campaigns, lineItems arrays but left just one example in each.