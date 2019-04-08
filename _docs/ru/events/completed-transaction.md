---
layout: page
section: eventsRU
title: "Completed Transaction"
order: 2
---
`Completed Transaction` - это событие, которое должно быть добавлено в `digitalData.events` в случае загрузки страницы с сообщением об удачно созданном заказе (страница "Спасибо за покупку").

#### Из кода сайта / при использовании AJAX
В некоторых случаях стоит добавлять событие `Completed Transaction` из кода сайта:
* если вы используете "покупку в 1 клик" и после возврата с сервера сигнала об удачной покупке не происходит редирект на страницу "Спасибо за покупку", событие о покупке должно быть добавлена в массив `digitalData.events` из кода сайта.
* если пользователь выбрал "оплату онлайн" и перед загрузкой страницы "Спасибо за покупку" происходит редирект на шлюз платежной системы, перед редиректом надо сделать следующие действия:

1. Получить идентификатор заказа от ответа сервера, создающего транзакцию.
2. Добавить событие `Completed Transaction` в массив `digitalData.events`
3. Cделать небольшую задержку, чтобы сигнал успел поступить во все системы.

В случае, если на сайте системы оплаты происходит сбой, вы не потеряете информацию о заказе.

Пример:
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Completed Transaction',
  transaction: {
    orderId: "QA-123456",
    currency: "RUB",
    subtotal: 25000,
    shippingCost: 1000,
    shippingMethod: "Доставка курьером",
    total: 26000,
    lineItems: [
      {
        product: {
          id: "1234567890",
          name: "Ботинки Timberland",
          manufacturer: "Timberland",
          category: ["Обувь","Ботинки"],
          currency: "RUB",
          unitPrice: 12990,
          unitSalePrice: 10990,
          skuCode: "TBL6065RW",
        },
        quantity: 2,
        subtotal: 10990
      }
    ]
  }
});
```

> Подробное описание объекта `transaction` со всеми возможными полями можно найти [тут](/ru/digitalData/transaction).

#### Из интерфейса SegmentStream
**Триггер**: событие `Viewed Page`,

**Функция, которая возвращает объект события**:
```javascript
if (
  _digitalData('page.type') === 'confirmation' &&
  _digitalData('transaction.isReturning') !== true
) {
  return {
    category: 'Ecommerce',
    name: 'Completed Transaction',
    transaction: _digitalData('transaction')
  };
}
```

#### Необходимо для работы интеграций:
* Adwords
* Criteo
* Facebook
* MyTarget
* Retail Rocket
* RTB House
* Sociomantic
* Segmento
* Yandex Metrica
* Google Analytics (Enhanced Ecommerce)
* Admitad
* GdeSlon
