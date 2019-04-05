---
layout: page
section: eventsRU
title: "Viewed Checkout Step"
order: 2
---
`Viewed Checkout Step` - это событие, которое должно быть добавлено в `digitalData.events` во время загрузки страницы с этапом оформления покупки.
>Важно! В случае если вы используете одностраничную корзину, шаги в которой подгружаются AJAX'ом, следует на каждом новом шаге добавлять событие `Viewed Checkout Step` из кода сайта.

### Из кода сайта / при использовании AJAX
**Шаг 1**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 1,
  option: '4-step-cart'
});
```
**Шаг 2**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 2,
  option: 'DHL'
});
```
**Шаг 3**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 3,
  option: 'Mastercard'
});
```
**Шаг 4**
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Checkout Step',
  step: 4
});
```

### Из интерфейса SegmentStream
**Триггер**: событие `Viewed Page`,

**Функция, которая возвращает объект события**:

```javascript
if (_digitalData('page.type') === 'checkout' || _digitalData('page.type') === 'cart') {
  var step = _digitalData('cart.checkoutStep');
  var option = '';
  switch (step) {
    case 1:
      option = _digitalData('cart.checkoutOption');
      break;
    case 2:
      option = _digitalData('cart.shippingMethod');
      break;
    case 3:
      option = _digitalData('cart.paymentMethod');
      break;
  };
  return {
    category: 'Ecommerce',
    name: 'Viewed Checkout Step',
    step: step,
    option: option
  };
}
```

### Необходимо для работы интеграций:
* [Facebook](/integrations/facebook)
* RTB House
* Segmento
