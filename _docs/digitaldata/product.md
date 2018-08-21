---
layout: page
section: digitaldata
title: "product"
order: 1
---

The `product` object contains variables that describe the product presented on the site: URL with detailed description, price, producer, category, etc.

>The `product` object is found in the `digitalData` structure as part of other objects and arrays, for example: `digitalData.product`, `digitalData.listing.items[].product`, `digitalData.cart.lineItems[].product`,
`digitalData.recommendation[].items[]`and others. The principle of filling the object does not change.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">product.id</a></li>
  <li><a href="#2">product.skuCode</a></li>
  <li><a href="#3">product.name</a></li>
  <li><a href="#4">product.currency</a></li>
  <li><a href="#5">product.unitPrice</a></li>
  <li><a href="#6">product.unitSalePrice</a></li>
  <li><a href="#7">product.category</a></li>
  <li><a href="#8">product.categoryId</a></li>
  <li><a href="#9">product.variations</a></li>
  <li><a href="#10">product.url</a></li>
  <li><a href="#11">product.imageUrl</a></li>
  <li><a href="#12">product.thumbnailUrl</a></li>
  <li><a href="#13">product.description</a></li>
  <li><a href="#14">product.manufacturer</a></li>
  <li><a href="#15">product.reviews</a></li>
  <li><a href="#16">product.color</a></li>
  <li><a href="#17">product.size</a></li>
  <li><a href="#18">product.voucher</a></li>
  <li><a href="#19">product.stock</a></li>
</ul>


### <a name="0"></a>Introduction
------
The `product` object must be declared and filled in the source code of the page in the following cases:
 - If there is a basket on your website, and at the moment there are 1 or more goods inside it. The `product` object will be included in the `lineItems` array of the `digitalData.cart` object;
 - The visitor has issued an order and is on the "Thank you for your purchase" page. The `product` object will be included in the `lineItems` array of the `digitalData.transaction` object;
 - If the visitor is on the a detailed product description page. The `product` object will be placed in the root of the `digitalData` object;
 - The visitor is a page with a listing of goods: category or search results. The `product` object will be included in the `items` array of the `digitalData.listing` object;
 - The visitor is on a page with a list of recommended products. The `product` object will be included in the `items` array of the `digitalData.recommendation` array;

Example:
```javascript
.product = {
  id: "1234567890",
  url: "http://website.com/product.html",
  imageUrl: "http://website.com/image.png",
  thumbnailUrl: "http://website.com/image_thump.png",
  name: "Timberland Boots",
  description: "Short description...",
  manufacturer: "Timberland",
  category: ["Footwear","Boots"],
  categoryId: "123",
  currency: "USD",
  unitPrice: 100,
  unitSalePrice: 90,
  skuCode: "TBL6065RW",
  stock: 21,
  voucher: "MYVOUCHER1",
  color: "yellow",
  size: "41",
  variations: [Product, Product, Product, ...]
}
```

>The list of variables can be extended by any other product properties applicable to your business.

### <a name="1"></a>product.id
------
Data type: string.

`product.id` - **required** variable that contains the product identifier. Each product can have only one `product.id`. There are 2 types of goods: with and without variations. If your products have variations, use the `product.skuCode` variable in combination with `product.id`. This will help distinguish one product of different sizes or bundles.

>`product.id` must match the value of offer.group_id from your XML feed if you are using XML feeds that group products. Product groups are often found on Fashion websites, when `product.id` has the same value for all product sizes of the same color. For each color model, `product.id` should assume a unique value.

 - [More about the group_id variable in XML feeds of the Yandex format](https://yandex.ru/support/partnermarket/offers.html)
 - [Learn more about the item_group_id variable in Google XML feeds.](https://support.google.com/merchants/answer/6324507)

 >If your products do not have variations, use the bundle `product.id` = `offer.id` (your XML feed). In this case, the `product.skuCode` variable is optional.

### <a name="2"></a>product.skuCode
------
Data type: string.

`product.skuCode` - **required** variable that contains the product variation identifier. If your products have variations, use the `product.skuCode` variable in combination with `product.id`. This will help distinguish one product of different sizes or bundles.

>`product.skuCode` must match the value of offer.id from your XML feed in the event that you use XML feeds with grouping of products. Groupings of goods are often found on Fashion websites, when `product.skuCode` has a unique value for each variation of the same product. `product.id` does not change.

### <a name="3"></a>product.name
------
Data type: string.

`product.name` - **required**
 variable that contains the name of the product.

### <a name="4"></a>product.currency
------
Data type: string.

`product.currency` - **required** variable that contains the currency of the product in ISO 4217 format (USD, EUR, RUB).

### <a name="5"></a>product.unitPrice
------
Data type: number.

`product.unitPrice` - **required** variable that contains the price of the product, excluding offers and discounts.

### <a name="6"></a>product.unitSalePrice
------
Data type: number.

`product.unitSalePrice` - **required** variable that contains the price of the product, including offers and discounts. If there are not discounts or offers on the product, the value should be equal to unitPrice.

### <a name="7"></a>product.category
------
Data type: array of strings.

`product.category` - **required** variable which contains a hierarchy of categories for a given product. For example, ["Men's Clothing", "Shoes", "Shoes"]

### <a name="8"></a>product.categoryId
------
Data type: string.

`product.categoryId` contains the product category ID of this product.
>`product.categoryId` must match the category ID that is passed to the XML feed for each product.

### <a name="9"></a>product.variations
------
Data type: array of **product** objects.

`product.variations` contains an array of product variants that have one identifier, but different SKUs. In this case, the goods can also differ in other attributes: price, balances, size, etc.

>Filling of this array is required only on pages with a detailed description of the goods (page.type = "product") and only necessary for the Retail Rocket integration in case the groupView method is used.

### <a name="10"></a>product.url
------
Data type: string.

`product.url` contains a complete URL (with http/https) pages with a detailed description of the product.

### <a name="11"></a>product.imageUrl
------
Data type: string.

`product.imageUrl` contains a complete URL (with http/https)  of the product's picture.

### <a name="12"></a>product.thumbnailUrl
------
Data type: string.

`product.thumbnailUrl` contains a full URL (with http/https) of the product's thumbnails.

### <a name="13"></a>product.description
------
Data type: string.

`product.description` contains a short text description of the goods. Do not pass a long list of technical characteristics or html-tags in this variable.

>The `product.description` variable is required only on pages with the detailed description of the product (page.type =" product")

### <a name="14"></a>product.manufacturer
------
Data type: string.

`product.manufacturer` contains the name of the manufacturer/brand of the goods

### <a name="15"></a>product.reviews
------
Data type: array of objects.

`product.reviews` contains an array of objects, describing each review

Example of filling the **reviews** array with objects:
```javascript
.product = {
  ...,
  reviews: [
    {
      body: "Great Shoes!",
      rating: 5.0
    },
    {
      body: "Not bad.",
      rating: 4.5
    }
  ],
  ...
}
```
where,
 - body - is a string, containing the main text of the review
 - rating - is a number, can be of any value, depending on your rating system

### <a name="16"></a>product.color
------
Data type: string.

`product.color` contains the name of products color

### <a name="17"></a>product.size
------
Data type: string.

`product.size` contains the size of the selected SKU. As a rule `product.size` should be changes along with `product.skuCode`.

### <a name="18"></a>product.voucher
------
Data type: string.

`product.voucher` contains a promotional code applied by the user, which changed the price of a particular product.

>If the applied code is not associated with a particular product, but applies to all products in the shopping cart - add the voucher variable to the objects `digitalData.cart` and `digitalData.transaction`.

### <a name="19"></a>product.stock
------
Data type: number.

`product.stock` contains the number of items available for the order. `product.stock` is applicable to a specific `product.id`, but not to `product.skuCode`.

>If you do not wish to transfer the exact number of units available for an order, use the following values. 0 - the item is out of stock. 1 - there are not enough goods left in the warehouse. 2 - there is a sufficient quantity of goods in the warehouse. The threshold between a little and a lot you can determine yourself.
