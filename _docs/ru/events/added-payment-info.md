---
layout: page
section: eventsRU
title: "Added Payment Info"
order: 2
---
`Added Payment Info` - это событие, которое должно быть добавлено в массив `digitalData.events` при загрузке страницы сохранении биллинговой информации пользователем в процессе оформления заказа. Данное событие необходимо вызывать только в том случае, если вы сохраняете биллинговую информацию клиентов.

### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Added Payment Info',
  cart: digitalData.cart
});
```

### Из интерфейса SegmentStream
Событие `Added Payment Info` является серверным. Его невозможно создать на основе встроенных триггеров SegmentStream. Событие должно быть добавлено из кода при успешном возрвате ответа с сервера.

### Необходимо для работы интеграций:
* [Vkontakte Динамический ретаргетинг](/ru/integrations/vkontakte)
* [Facebook](/ru/integrations/facebook)
