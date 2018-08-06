---
layout: page
section: events
title: "Removed Product"
order: 2
---
`Removed Product` - это событие, которое должно быть добавлено в `digitalData.events` при удалении пользователем товара из корзины или уменьшении количества одинаковых товаров в корзине.
The `Removed Product` event must be pushed to the `digitalData.events` array when a user removes a product from their cart or decreases the quantity of a product in the cart.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Removed Product',
  product: {...},
  quantity: 1
})
```
> For a detailed description of the `product` object, see the developer section.

#### From the DDManager interface
> The deletion of a product from the cart is a server event. We recommend pushing it to the `digitalData.events` array from the site code.

#### Required by the following integrations:
* Yandex Metrica
* Segmento
* Google Analytics