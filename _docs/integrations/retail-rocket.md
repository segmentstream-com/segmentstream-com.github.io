---
layout: page
section: integrations
title: "Retail Rocket"
order: 1
---

В данном разделе вы узнаете:
* Как установить рекомендации Retail Rocket на ваш сайт.
* Как подключить триггеры от Retail Rocket.

Retail Rocket - сервис товарных рекомендаций и триггерных email-рассылок. Retail Rocket умеет собирать информацию о поведении пользователей на сайте и формировать товарные рекомендации. SegmentStream позволяет отправлять данные о поведении ваших пользователей в [Retail Rocket](https://retailrocket.ru/).

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#introduction">Введение</a></li>
  <li><a href="#requirements">Необходимые события</a></li>
  <li><a href="#partnerId">Retail Rocket Partner ID</a></li>
  <li><a href="#groupedProductFeed">Используется фид с группами товаров</a></li>
  <li><a href="#trackAllEmails">Передача всех email-адресов в Retail Rocket</a></li>
  <li><a href="#userIdProperty">Параметр User ID в Retail Rocket</a></li>
  <li><a href="#recommendationAlgorythmMethods">Методы рекомендательных алгоритмов</a></li>
  <li><a href="#customVariables">Пользовательские параметры</a></li>
</ul>


### <a name="introduction"></a>Введение
------
С помощью SegmentStream можно полностью интегрировать Retail Rocket с вашим сайтом.

Чтобы настроить интеграцию с Retail Rocket:
1. Авторизуйтесь на сайте [segmentstream.com](https://admin.segmentstream.com/) и перейдите к панели управления интеграциями
2. Войдите на вкладку "Интеграции" и кликните по блоку с логотипом Retail Rocket.
3. В открывшейся панели - настройте интеграцию.

![](/img/integrations.retailrocket.1.png)

Подробнее о настройках вы можете прочитать ниже.

### <a name="requirements"></a>Необходимые события
------
Для корректной работы интеграции вашего сайта с Retail Rocket - необходимо настроить передачу определенных событий в массив `digitalData.events`. Список событий приведен ниже:

**Обязательные события**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Clicked Product](/events/clicked-product)
* [Added Product](/events/added-product)
* [Searched Products](/events/searched-products)
* [Completed Transaction](/events/completed-transaction)
* [Subscribed](/events/subscribed)


### <a name="partnerId"></a>Retail Rocket Partner ID
------
Идентификатор отслеживания Retail Rocket вы можете уточнить у менеджера Retail Rocket.
Скопируйте идентификатор и вставьте его в поле "Retail Rocket Partner ID" окна настроек интеграции.

### <a name="groupedProductFeed"></a>Используется фид с группами товаров
------
Retail Rocket получает информацию о товарах, размещенных на сайте через XML-фид. С определенной периодичностью робот Retail Rocket скачивает фид с вашего сервера. Такой фид содержит информацию о всех товарах, представленных на сайте.

[Подробнее о формате фида](https://yandex.ru/support/partnermarket/offers.html)

Для корректной работы интеграции, Retail Rocket также должен получать информацию о взаимодействии пользователей с товарами на сайте - просмотры, добавления в корзину, покупки и т.д. Система должна правильно сопоставить то, что она видит в поступающих событиях с XML-фидом.

 -Если вы используете группировку товаров с помощью параметра xml-фида `group_id` - обязательно активируйте данную настройку.
  >В данном случае offer id из Вашего XML-фида должен совпадать с `product.skuCode` объекта `digitalData`. Также при загрузке страницы товара или окна быстрого просмотре товара, необходимо передавать список SKU кодов всех вариантов товаров. Заполните массив `product.variations`.

 -Если вы НЕ используете группировку товаров с помощью параметра xml-фида group_id - Не активируйте данную настройку.
  >В данном случае offer id из Вашего XML-фида должен совпадать с `product.id` объекта `digitalData`

### <a name="trackAllEmails"></a>Передача всех email-адресов в Retail Rocket
------
Если тумблер "Передача всех email-адресов в Retail Rocket" выключен, то email'ы посетителей попадают в Retail Rocket только вместе с событием `Subscribed`. В этом случае, информация о пользователях, которые регистрировались и подписывались на рассылки ранее, не попадет в Retail Rocket.

Рекомендуем включить данный тумблер, что email пользователя из переменной `digitalData.user.email` уходил на сервера Retail Rocket с каждым событием.

### <a name="userIdProperty"></a>Параметр User ID в Retail Rocket
------
Retail Rocket использует данный параметр для "склеивания" различных устройств одного пользователя. Обычно значением этого параметра служит `digitalData.user.email` или `digitalData.user.userId`. Уточните у вашего менеджера, какой параметр стоит передавать.

### <a name="recommendationAlgorythmMethods"></a>Методы рекомендательных алгоритмов
------
В системе Retail Rocket существует несколько методов рекомендательных алгоритмов: популярные товары, похожие товары и другие. В случае, если блок товарных рекомендаций формируется на вашей стороне после обращения server-to-server, в Retail Rocket вместе с событием "клика по товару" необходимо передать рекомендательный алгоритм.

Чтобы настроить правильную передачу названий рекомендательных алгоритмов, заполните 2 поля:
1. Слева - Название списка товаров `digitalData.recommendation[n].listId`. Это значение также должно передаваться в качестве data-атрибута `data-ddl-list-id` в каждую ссылку списка рекомендаций.
2. Справа - Название рекомендательного алгоритма Retail Rocket. Название уточните у менеджера Retail Rocket.

Пример заполнения данной настройки смотрите на скриншоте выше.

### <a name="customVariables"></a>Пользовательские параметры
------
Retail Rocket также принимает кастомные параметры пользователей: имя, язык, пол и так далее. Имена кастомных переменных вам могут дать сотрудники Retail Rocket.

В данной настройке вам нужно в левой части указать имя переменной Retail Rocket, в правой - имя переменной в digitalData.

![](/img/integrations.retailrocket.2.png)
