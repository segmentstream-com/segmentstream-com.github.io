---
layout: page
section: eventsRU
title: "Removed Product"
order: 2
---
`Removed Product` - это событие, которое должно быть добавлено в `digitalData.events` при удалении пользователем товара из корзины или уменьшении количества одинаковых товаров в корзине.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Removed Product',
  product: {...},
  quantity: 1
})
```
> Подробное описание объекта product смотрите в разделе для разработчиков.

#### Из интерфейса SegmentStream
> Удаление товара из корзины - это серверное событие. Мы рекомендуем добавлять его в массив `digitalData.events` из кода.

#### Необходимо для работы интеграций:
* Yandex Metrica
* Segmento
* Google Analytics
