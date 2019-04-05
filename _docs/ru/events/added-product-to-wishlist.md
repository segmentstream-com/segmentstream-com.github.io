---
layout: page
section: eventsRU
title: "Added Product to Wishlist"
order: 2
---
`Added Product to Wishlist` - это событие, которое должно быть добавлено в `digitalData.events` при добавлении пользователем товара в Wishlist.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Added Product to Wishlist',
  category: 'Ecommerce',
  product: {...}
})
```
> Подробное описание объекта `product` смотрите в разделе для разработчиков.

#### Из интерфейса SegmentStream
> Если вы уверены, что товар будет добавлен в Избранное по нажатию на кнопку "Добавить в избранное", можете использовать следующие настройки события:

**Триггер**: `клик`,

**CSS селектор**: `.your_add_to_wishlist_button_class`,

**Функция, которая возвращает объект события**:

```javascript
return {
  name: 'Added Product to Wishlist',
  category: 'Ecommerce',
  product: _digitalData('product')
};
```

#### Необходимо для работы интеграций:
* Facebook
