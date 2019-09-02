---
layout: page
section: events
title: "Updated Cart"
order: 2
---
The `Updated Cart` event must be pushed to the `digitalData.events` array whenever the cart contents are modified, such as: adding/removing products, changing the quantity of products in the cart, emptying the cart.

#### From the site code / when using AJAX
When the user update cart, the website should send `Updated Cart` event.
Note, that the cart object in the event must be a full state cart, not only object, that was added.

For example if we have a cart with content:

```javascript
window.digitalData = {
  ...,
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
        quantity: 1,
        subtotal: 100
      },
    ]
  },
  ...
}
```

Then add same product with id '1234567890' to the cart (we have 2 products now - quantity = 2 ), we should call `Updated Cart` event, instead of updating cart from the code:


```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Updated Cart',
  cart: {
    id: "CART2203",
    currency: "GBP",
    subtotal: 200,
    total: 200,
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

SegmentStream SDK defines if we add or remove item to cart and trigger corresponding event: [`Added Product`](/events/added-product) / [`Removed Product`](/events/removed-product).

Avoid of calling `digitalData.changes.push` for the cart and use `Updated Cart` instaed


> Do not call the code during or immediately before reloading the site page, for example, when you remove a product from the shopping cart. In this case, the redirect can happen before the SegmentStream has enough time to send the event to all connected systems

For a detailed description of the [`cart`](/digitaldata/cart) object, see the developer section.

#### From the SegmentStream interface
> `Updated Cart` is a server event. We recommend pushing it to the `digitalData.events` array from the site code. Do not create the `Updated Cart` event based on a `Add to cart` button click trigger. Clicking on the button does not guarantee that the cart content on the server will update.

#### Required by the following integrations:
* Mindbox
* RTB House
* Ofsys
