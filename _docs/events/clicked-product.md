---
layout: page
section: events
title: "Clicked Product"
date: 2017-08-16 12:00:00
order: 2
---
`Clicked Product` - это событие, которое должно быть добавлено в `digitalData.events` в момент нажатия пользователем на ссылку карточки товара в товарном листинге.

> Важно! Ссылки карточек товаров должны быть размечены классами `ddl_product_link` или `ddl_product_link_js`, в случае если эти ссылки ведут к открытию попапа быстрого просмотра. Также ссылки должны иметь дата-атрибуты `data-product-id` и `data-list-id`. Подробнее читайте в разделе HTML-разметки контента страниц.

#### Из кода сайта / при использовании AJAX
```javascript
var productId = element.getAttribute('data-product-id');
var listId = element.getAttribute('data-list-id');
digitalData.events.push({
  name: 'Clicked Product',
  listItem: {
    product: productId,
    listId: listId
  }
})
```


#### Из интерфейса DDManager
**Триггер**: `клик`,

**CSS селектор**: `.ddl_product_link,.ddl_product_link_js`,

**Функция, которая возвращает объект события**:

```javascript
var productId = element.getAttribute('data-product-id');
var listId = element.getAttribute('data-list-id');
return {
  name: 'Clicked Product',
  category: 'Ecommerce',
  listItem: {
    product: productId,
    listId: listId
  }
};
```

#### Необходимо для работы интеграций:
* Google Analytics (Enhanced Ecommerce)
* Retail Rocket