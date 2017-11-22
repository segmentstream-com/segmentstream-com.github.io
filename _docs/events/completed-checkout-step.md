---
layout: page
section: events
title: "Completed Checkout Step"
date: 2017-08-16 12:00:00
order: 2
---
`Completed Checkout Step` - это событие, которое должно быть добавлено в `digitalData.events` в одном из двух случаев:
* В процессе оформления заказа пользователь выбрал опцию заказа (тип доставки, тип оплаты и т.п.) на одном из шагов и нажал на кнопку "Перейти к следующему шагу",
* При загрузке страницы очередного шага оформления покупки. Вместе с событием просмотра страницы будет отправлено событие с информацией о завершении предыдущего шага оформления.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Completed Checkout Step',
  step: 2, //например
  option: 'MasterCard' //например
});
```


#### Из интерфейса DDManager
> Допустим процесс оформления заказа у вас разбит на 4 шага: 
> 1. просмотр корзины
> 2. ввод информации об адресе и способе доставки
> 3. ввод информации о способе оплаты
> 4. проверка введенных данных и кнопка "Завершить заказ"
> В этом случае вам потребует отправить 2 события `Completed Checkout Step`, одно при загрузке этапа 3 (с информацией о выбранном спсобе доставки), второе - при загрузке этапа 4 (с информацией о выборе способа оплаты)

**Триггер**: событие `Viewed Checkout Step`,

**Функция, которая возвращает объект события**:

```javascript
var checkoutSteps = [3,4];
var checkoutStep = this.digitalData('cart.checkoutStep');
if (checkoutSteps.indexOf(checkoutStep) !== -1) {
  var option = this.digitalData('cart.shippingMethod')
  if (checkoutStep === 4 ) option = this.digitalData('cart.paymentMethod');
  return {
    category: 'Ecommerce',
    name: 'Completed Checkout Step',
    step: checkoutStep - 1,
    option: option
  };
};
```

#### Необходимо для работы интеграций:
* Google Analytics (Enhanced Ecommerce)