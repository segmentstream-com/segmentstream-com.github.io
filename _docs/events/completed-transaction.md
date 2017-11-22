---
layout: page
section: events
title: "Completed Transaction"
date: 2017-08-16 12:00:00
order: 2
---
`Completed Transaction` - это событие, которое должно быть добавлено в `digitalData.events` в случае загрузки страницы с сообщением об удачно созданном заказе (страница "Спасибо за покупку").

#### Из кода сайта / при использовании AJAX
В некоторых случаях стоит добавлять событие `Completed Transaction` из кода сайта:
* если вы используете "покупку в 1 клик" и после возврата с сервера сигнала об удачной покупке не происходит редирект на страницу "Спасибо за покупку", событие о покупке должно быть добавлена в массив `digitalData.events` из кода сайта.
* если пользователь выбрал "оплату онлайн" и перед загрузкой страницы "Спасибо за покупку" происходит редирект на шлюз платежной системы, стоит перед редиректом вернуть на клиента идентификатор транзакции, добавить событие `Completed Transaction` и сделать небольшую задержку, чтобы сигнал успел поступить во все системы. В случае, если на сайте системы оплаты происходит сбой, вы не потеряете информацию о заказе.

```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Completed Transaction',
  transaction: {...}
})
```
> Подробное описание объекта `transaction` смотрите в разделе для разработчиков.

#### Из интерфейса DDManager
**Триггер**: событие `Viewed Page`,

**Функция, которая возвращает объект события**:
```javascript
if (this.digitalData('page.type') === 'confirmation' &&
    this.digitalData('transaction.isReturning') !== true) {
  return {
    category: 'Ecommerce',
    name: 'Completed Transaction',
    transaction: this.digitalData('transaction')
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