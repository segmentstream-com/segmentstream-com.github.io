---
layout: page
section: integrationsRU
title: "GdeSlon"
order: 1
---

В данном разделе вы узнаете:
* Как подключить или отключить GdeSlon на вашем сайте.
* Как настроить дедупликацию платных каналов.
* Как активировать ретаргетинг GdeSlon.

GdeSlon - партнерская сеть, объединяющая рекламодателей и веб-мастеров. SegmentStream позволяет отправлять данные о покупках ваших покупателей в GdeSlon.

>Все партнерские сети в интерфейсе SegmentStream настраиваются одинаково. <br /> Воспользуйтесь [подробным руководством по подключению Admitad](/ru/integrations/admitad)

Для подключения ретаргетинга GdeSlon необходимо включить тумблер "Активировать ретаргетинг".

Для корректной работы ретаргетинга GdeSlon на вашем сайте - необходимо настроить передачу определенных событий в массив `digitalData.events`. Список событий приведен ниже:

**Обязательные события**
* [Viewed Page](/ru/events/viewed-page)
* [Viewed Product Detail](/ru/events/viewed-product-detail)
* [Viewed Product Listing](/ru/events/viewed-product-listing)
* [Searched Products](/ru/events/searched-products)
* [Viewed Cart](/ru/events/viewed-cart)
* [Completed Transaction](/ru/events/completed-transaction)

Также необходимо настроить заполнение определенных переменных объекта `digitalData`. Список некоторых переменных приведен ниже:
* `page.type`
* `product.id`, `product.skuCode`, `product.unitSalePrice` - объект product встречается в нескольких местах объекта `digitalData`: непосредственно в `digitalData.product`, в массивах `items` и `lineItems` объектов `listing`, `cart`, `transaction`.
* `listing.items`, `listing.categoryId`.
* `cart.lineItems`.
* `transaction.orderId`, `transaction.total`, `transaction.lineItems`.

Таблица для пояснения:
![](/img/integrations.gdeslon.2.png)
