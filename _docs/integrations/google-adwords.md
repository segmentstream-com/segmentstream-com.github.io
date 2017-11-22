---
layout: page
section: integrations
title: "Google Adwords"
date: 2017-11-14 12:00:00
order: 1
---

В данном разделе вы узнаете: 
* Как подключить динамический ремаркетинг Google Adwords.
* Как проверить корректности настройки интеграции.

Модуль динамического ремаркетинга Google Adwords дает возможность показывать объявления с товарами, которыми интересовались пользователи.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#1">Необходимые события</a></li>
  <li><a href="#2">Идентификатор отслеживания конверсий</a></li>
  <li><a href="#3">Флаг: Ремаркетинг Google Adwords</a></li>
  <li><a href="#5">Проверка корректности настройки интеграции</a></li>
</ul>

### <a name="0"></a>Введение
------
С помощью DigitalDataManager можно полностью интегрировать Модуль динамического Ремаркетинга Google Adwords с вашим сайтом.

[Справка Google по подключению модуля] (https://support.google.com/tagmanager/answer/6106009?hl=ru#OneTagPerFunnel)

Чтобы настроить интеграцию с Adwords: 
1. Авторизуйтесь на сайте [ddmanager.ru](https://admin.ddmanager.ru/) и перейдите к панели управления интеграциями
2. Войдите на вкладку "Интеграции" и кликните по блоку с логотипом Adwords.
3. В открывшейся панели - настройте интеграцию.
![](/img/integrations.google-adwords.1.png)
<br />
Подробнее о настройках вы можете прочитать ниже.

### <a name="1"></a>Необходимые события
------
Для корректной работы интеграции вашего сайта с Adwords - необходимо настроить передачу определенных событий в массив `digitalData.events`. Список событий приведен ниже:

**Обязательные события**
* [Viewed Page](/events/viewed-page)
* [Viewed Product Detail](/events/viewed-product-detail)
* [Viewed Product Listing](/events/viewed-product-listing)
* [Searched Products](/events/searched-products)
* [Viewed Cart](/events/searched-products)
* [Completed Transaction](/events/completed-transaction)

Также необходимо настроить заполнение определенных переменных объекта `digitalData`. Список некоторых переменных приведен ниже:
* `page.type`
* `product` - объект product встречается в нескольких местах объекта `digitalData`: непосредственно в `digitalData.product`, в массивах `items` и `lineItems` объектов `listing`, `cart`, `transaction`.
* объекты `listing`, `cart`, `transaction`
* и другие

>Мы настоятельно рекомендуем настроить передачу всех переменных в объект `digitalData` (а не только описанных выше), в соответствии с [документацией](/for-developer/).

### <a name="2"></a>Идентификатор отслеживания конверсий
------
Идентификатор отслеживания конверсий вы можете найти в интерфейсе системы Google Adwords.

### <a name="3"></a>Флаг: Ремаркетинг Google Adwords
------
Для корректной работы модуля динамического ремаркетинга оставьте переключатель во включенном состоянии.

### <a name="5"></a>Проверка корректности настройки интеграции
------
После настройки интеграции в интерфейсе DigitalDataManager, но ДО ПУБЛИКАЦИИ - перейдите на сайт в режиме test_mode, [пройдитесь по воронке конверсии и проверьте, нет ли ошибок](/for-analyst/integrations#2).
Если ошибок нет - опубликуйте текущую версию.