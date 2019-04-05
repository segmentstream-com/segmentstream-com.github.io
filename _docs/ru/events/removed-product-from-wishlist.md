---
layout: page
section: eventsRU
title: "Removed Product from Wishlist"
order: 2
---
> Необязательное событие. Приведено в качестве примера.

`Removed Product from Wishlist` - это событие, которое должно быть добавлено в `digitalData.events` при удалении пользователем товара из Wishlist'a.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Added Product to Wishlist',
  category: 'Ecommerce',
  product: {...}
});
```
> Подробное описание объекта `product` смотрите в разделе для разработчиков.

#### Из интерфейса SegmentStream
> Удаление товара из Wishlist'a - это серверное событие. Мы рекомендуем добавлять его в массив `digitalData.events` из кода.
