---
layout: page
section: events
title: "Refunded Transaction"
date: 2017-08-10 15:24:00
order: 2
---
`Refunded Transaction` - это событие, которое должно быть добавлено в `digitalData.events` в случае полного или частичного возврата заказанных раннее товаров пользователем.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Refunded Transaction',
  transaction: {
    orderId: 'Номер заказа', 
    lineItems: [...]
  }
});
```
>Подробнее о массиве объектов `lineItems` читайте в разделе для разработчиков.

#### Из интерфейса DDManager
Событие `Refunded Transaction` невозможно создать на основе встроенных триггеров DDManager. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Google Analytics (Enhanced Ecommerce)