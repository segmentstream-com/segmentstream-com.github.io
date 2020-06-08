---
layout: page
section: events
title: "Added Product to Wishlist"
order: 2
---
The `Added Product to Wishlist` event must be pushed to the `digitalData.events` array when a user adds a product to their Wishlist.

## From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Added Product to Wishlist',
  category: 'Ecommerce',
  product: {...}
})
```
> For a detailed description of the `product` object, see the developer section.

## From the SegmentStream interface
> If you are sure that the product will be added to the user's Wishlist by clicking on the "Add to Favorites" button, you can use the following event settings:

**Триггер**: `click`,

**CSS selector**: `.your_add_to_wishlist_button_class`,

**Event handler**:

```javascript
return {
  name: 'Added Product to Wishlist',
  category: 'Ecommerce',
  product: _digitalData('product')
};
```

## Required by the following integrations:
* Facebook
