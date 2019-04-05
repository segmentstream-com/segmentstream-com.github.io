---
layout: page
section: eventsRU
title: "Added Product"
order: 2
---
`Added Product` - это событие, которое должно быть добавлено в digitalData.events при добавлении пользователем товара в корзину или увеличении количества единиц одного и того же товара.
>Важно! Событие должно быть добавлено не после нажатия на кнопку "Добавить в корзину", а после возврата с сервера сигнала об успешном добавлении товара в корзину.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Added Product',
  product: {...},
  quantity: 1
});
```
> Подробное описание объекта `product` смотрите в разделе для разработчиков.

#### Из интерфейса SegmentStream
> Если вы уверены, что товар будет добавлен в корзину по нажатию на кнопку "Добавить в корзину", можете использовать следующие настройки события:

**Триггер**: `клик`,

**CSS селектор**: `.your_add_button_class,.your_increment_button_class`,

**Функция, которая возвращает объект события**:

```javascript
return {
  name: 'Added Product',
  category: 'Ecommerce',
  product: _digitalData('product'),
  quantity: 1
};
```

#### Необходимо для работы интеграций:
* Facebook
* Retail Rocket
* Segmento
* Yandex Metrica
* Google Analytics (Enhanced Ecommerce)
