---
layout: page
section: events
title: "Updated Cart"
order: 2
---
The `Updated Cart` event must be pushed to the `digitalData.events` array whenever the cart contents are modified, such as: adding/removing products, changing the quantity of products in the cart, emptying the cart.

#### From the site code / when using AJAX
When the user's cart is updated, the website should send an `Updated Cart` event.
Note, that the `cart` object in the event must represent the complete state of the user's cart after the changes have been made.

For example if we have a cart with the content:

```javascript
window.digitalData = {
  ...,
  cart: {
    id: "CART2203",
    currency: "GBP",
    subtotal: 50,
    total: 50,
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
        quantity: 1,
        subtotal: 50
      },
    ]
  },
  ...
}
```

Then another product with id '1234567890' is added to the cart (now we have 2 products - quantity = 2), we should call the `Updated Cart` event:

```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Updated Cart',
  cart: {
    id: "CART2203",
    currency: "GBP",
    subtotal: 100,
    total: 100,
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
  }
})
```

The SegmentStream SDK calculates the differences between the `digitalData.cart` object and the `cart` object inside the `Updated Cart` event, checks which products have been added or removed, and triggers the corresponding [`Added Product`](/events/added-product)/[`Removed Product`](/events/removed-product)  events.

If your [digitalData version](/digitaldata/standard-version) is '1.1.3' or higher, avoid of calling `digitalData.changes.push` to dynamically update the contents of the digitalData.cart object, and use `Updated Cart` instead.

> Do not call the code during or immediately before reloading the site page, for example, when you remove a product from the shopping cart. In this case, the redirect can happen before the SegmentStream has enough time to send the event to all connected systems.

For a detailed description of the [`cart`](/digitaldata/cart) object, see the developer section.

#### From the SegmentStream interface
> `Updated Cart` is a server event. We recommend pushing it to the `digitalData.events` array from the site code. Do not create the `Updated Cart` event based on a `Add to cart` button click trigger. Clicking on the button does not guarantee that the cart's content on the server will update.

#### Required by the following integrations:
* Mindbox
* RTB House
* Ofsys
