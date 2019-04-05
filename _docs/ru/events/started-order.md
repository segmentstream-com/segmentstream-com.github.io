---
layout: page
section: eventsRU
title: "Started Order"
order: 2
---
`Started Order` - это событие, которое должно быть добавлено в массив `digitalData.events` при загрузке страницы первого шага воронки оформления заказа. Обычно оформление заказа начинается со страницы выбора способа оформления: с авторизацией/регистрацией или в качестве гостя.

### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Started Order',
  cart: digitalData.cart
});
```

### Из интерфейса SegmentStream
**Триггер**: событие `Viewed Page`
```javascript
if (_digitalData('page.type') === 'checkout' && _digitalData('page.category') === 'Authorization') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Cart',
    cart: _digitalData('cart')
  };
}
```

### Необходимо для работы интеграций:
* [Vkontakte Динамический ретагретинг](/integrations/vkontakte)
* [RTB House]
