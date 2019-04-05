---
layout: page
section: events
title: "Updated Cart"
order: 2
---
The `Updated Cart` event must be pushed to the `digitalData.events` array whenever the cart contents are modified, such as: adding/removing products, changing the quantity of products in the cart, emptying the cart.

#### From the site code / when using AJAX
Execute the following code after the server responds with the updated cart contents.

```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Updated Cart',
  cart: {...}
})
```
> Do not call the code during or immediately before reloading the site page, for example, when you remove a product from the shopping cart. In this case, the redirect can happen before the SegmentStream has enough time to send the event to all connected systems

> For a detailed description of the [`cart`](/digitaldata/cart) object, see the developer section.

#### From the SegmentStream interface
> `Updated Cart` is a server event. We recommend pushing it to the `digitalData.events` array from the site code. Do not create the "Updated Cart" event based on a "Add to cart" button click trigger. Clicking on the button does not guarantee that the cart content on the server will update.

#### Required by the following integrations:
* Mindbox
* RTB House
* Ofsys
