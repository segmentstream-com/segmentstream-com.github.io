---
layout: page
section: developer
title: "Postback function"
date: 2019-05-21 19:00:00
order: 6
---

Сервис postback позволяет отправлять данные напрямую с вашего сервера на сервер SegmentStream

Данные необходимо отправлять POST-запросом.
Адрес для отправки postback:

```javascript
https://track.segmentstream.com/track
```

### Аутентификация

Аутентификация в Tracking API осуществляется путем отправки **API Token** в заголовках с каждым запросом. Аутентификация использует HTTP Basic Auth, которая включает в себя «username: password», который закодирован в base64 и дополнен строкой «Basic».

Например, если ваш **API Token** это `'abc123'` , то нужно его добавить в секцию username, a password оставить пустым. В данном случае получится строка `'abc123:'` и после преобразования в base64 она будет выглядеть как `'YWJjMTIzOg=='`

В итоге заголовок для HTTP запроса должен выглядеть следующим образом:

`'Authorization: Basic YWJjMTIzOg=='`.

>**API Token** для компании можно получить у вашего менеджера в компании SegmentStream

### Схема данных


Название|Тип данных|Описание
--- | --- | ---
hitId |	STRING |	Идентификатор хита (uuid v1)
sentAt |	TIMESTAMP |	Время отправки события c клиента (UTC, зависит от времени, установленного на компьютере) ISO 8601
event |	RECORD |	Информация о событии
event.category |	STRING |	Категория события
event.name |	STRING |	Имя события
event.source |	STRING |	Источник события
event.user |	RECORD |	Информация о пользователе
event.user.emailHash |	STRING |	Хэш электронного адреса пользователя (sha256)
event.user.userId |	STRING |	Идентификатор авторизованного пользователя
event.user.anonymousId |	STRING |	Идентификатор анонимного клиента
event.transaction |	RECORD |	Информация о транзакции
event.transaction.total |	FLOAT |	Суммарная стоимость корзины, включая налог, скидки и стоимость доставки.
event.transaction.subtotal |	FLOAT |	Суммарная стоимость корзины, не включая доставку и скидки, примененные к корзине.
event.transaction.currency |	STRING |	Валюта приведенной стоимости корзины
event.transaction.voucher |	STRING |	Идентификатор примененной скидки
event.transaction.voucherDiscount |	STRING |	Размер примененной скидки
event.transaction.shippingCost |	FLOAT |	Стоимость доставки
event.transaction.paymentMethod |	STRING |	Способ оплаты
event.transaction.orderId |	STRING |	Идентификатор заказа
event.transaction.lineItems |	RECORD |	Описание позиций в заказе
event.transaction.lineItems.quantity |	INTEGER |	Количество товаров в позиции корзины
event.transaction.lineItems.subtotal |	FLOAT |	Стоимость товаров в позиции корзины
event.transaction.lineItems.product |	RECORD |	Описание товара в позиции корзины
event.transaction.lineItems.product.id |	STRING |	Идентификатор товара в позиции корзины
event.transaction.lineItems.product.name |	STRING |	Название товара в позиции корзины
event.transaction.lineItems.product.currency |	STRING |	Валюта товара в позиции корзины
event.transaction.lineItems.product.unitSalePrice |	FLOAT |	Цена единицы товара в позиции корзины со скидкой - реальная цена, по которой покупается товар.
event.transaction.lineItems.product.unitPrice |	FLOAT |	Цена единицы товара в позиции корзины без скидки
event.transaction.lineItems.product.category |	STRING |	Иерархия товарных категорий листинга для позиции корзины в виде строки, разделенной “/”
event.transaction.lineItems.product.categoryId |	STRING |	Идентификатор товарной категории листинга для позиции корзины
event.transaction.lineItems.product.manufacturer |	STRING |	Производитель товара в позиции корзины
event.transaction.lineItems.product.skuCode |	STRING |	Stock Keeping Unit - идентификатор вариации товара в позиции корзины
event.transaction.lineItems.product.stock |	INTEGER |	Остаток товара на складе
event.website |	RECORD |	Глобальная информация о страницах сайта
event.website.region |	STRING |	Название населенного пункта, где расположен выбранный пользователем магазин
event.website.regionId |	STRING |	Идентификатор населенного пункта
event.website.environment |	STRING |	Название окружения, для которого был создан Digital Data Layer
event.website.currency |	STRING |	Валюта приведенных на сайте цен
context |	RECORD |	Информация о контексте события
context.ip |	STRING |	IP-адрес пользователя
integrations |	RECORD |	Дополнительные параметра для интеграций
integrations.Google Analytics |	RECORD |	Параметры для интеграции "Google Analytics"
integrations.Google Analytics.clientId |	STRING |	Google Analytics client ID saved in cookie (gclid)

Например:

```javascript
{
  "hitId": "4c59d330-35c7-11e9-8f27-8d1d7d4690e7",
  "sentAt": "2019-02-21T10:56:10.723Z",
  "event": {
    "category": "Ecommerce",
    "name": "Completed Transaction",
    "source": "CRM",
    "user": {
      "emailHash": "eff8c37862c7a2f0019448289bdd0869c30ae7f07060e4be9d",
      "userId": "u2783187492",
      "anonymousId": "80ddb140-35c6-11e9-bd56-eb1c05e6de18"
    },
    "transaction": {
      "total": 3029,
      "subtotal": 3029,
      "currency": "RUB",
      "voucher": "",
      "voucherDiscount": 0,
      "shippingCost": 0,
      "paymentMethod": "Онлайн",
      "orderId": "4686570087",
      "lineItems": [
        {
          "product": {
            "id": "64800237",
            "name": "ESTEE LAUDER Beautiful Belle",
            "currency": "RUB",
            "unitSalePrice": 3029,
            "unitPrice": 5049,
            "category": "Женская парфюмерия/Парфюмерия",
            "categoryId": "49252",
            "manufacturer": "ESTEE LAUDER",
            "skuCode": "79300753",
            "stock": 2
          },
          "quantity": 1,
          "subtotal": 3029
        },
				{
          "product": {
            "id": "64800237",
            "name": "ESTEE LAUDER Beautiful Belle",
            "currency": "RUB",
            "unitSalePrice": 3029,
            "unitPrice": 5049,
            "category": "Женская парфюмерия/Парфюмерия",
            "categoryId": "49252",
            "manufacturer": "ESTEE LAUDER",
            "skuCode": "79300753",
            "stock": 2
          },
          "quantity": 1,
          "subtotal": 3029
        }
      ]
    },
    "website": {
      "region": "Москва (в пределах МКАД)",
      "regionId": "8113",
      "environment": "production",
      "currency": "RUB"
    }
  },
  "context": {
    "ip": "123.22.334.55"
  },
  "integrations": {
    "Google Analytics": {
      "clientId": "13332315.454547"
    }
  }
}
```

### Поддерживаемые события

* Completed Transaction

### Поддерживаемые интеграции

* Google Analytics
* DDManager Streaming

### Custom Dimension и Custom Metrics

Server-side postback поддерживает все custom dimension и custom metrics, добавленные в админ-панели для интеграций.
