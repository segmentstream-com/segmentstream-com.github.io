---
layout: page
section: events
title: "Removed Product from Wishlist"
order: 2
---
> Optional event given as an example.

The `Removed Product from Wishlist` event must be pushed to the `digitalData.events` array when a user deletes a product from their wishlist.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Added Product to Wishlist',
  category: 'Ecommerce',
  product: {...}
});
```
> For a detailed description of the `product` object, see the developer section.

#### From the SegmentStream interface
> The deletion of a product from the wishlist is a server event. We recommend pushing it to the `digitalData.events` array from the site code.
