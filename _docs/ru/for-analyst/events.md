---
layout: page
section: analystRU
title: "События"
date: 2013-06-05 12:00:00
order: 2
---

Событие - одна из наиболее важных составляющих digitalData. Любая информация отправляется в системы аналитики и другие маркетинговые системы только в виде событий. Ниже будут описаны способы создания и управления событиями в интерфейсе SegmentStream.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#1">Создание события</a></li>
  <li><a href="#3">Вспомогательные функции</a></li>
  <li><a href="#4">Как называть события</a></li>
</ul>

### <a name="0"></a>Введение
------
Любое событие - это набор информации, который поступает в массив данных digitalData.events. Информация в массиве должна быть представлена в виде javaScript объекта.
Например: SegmentStream зарегистрирует событие с именем "Event Happened" в момент, когда будет выполнен следующий код:
```javascript
digitalData.events.push({
  name: 'Event Happened',
  value: 3000
});
```
Теперь SegmentStream может отправить информацию о событии "Event Happened" вместе со значением 3000 в любую систему, например в Google Analytics или Yandex Metrica.

### <a name="1"></a>Создание события
------
В SegmentStream есть 3 базисных триггера:
* Событие
* Клик
* Показ

>Важно! В SegmentStream есть 1 встроенное событие - Viewed Page. Это событие наступает в тот момент, когда полностью загружает библиотека ddmanager.

![](/img/events.1.png)

На основе этих триггеров и данных из digitalData можно создавать новые события.


**Пример 1: Событие `Viewed Product Detail`**

Большинству маркетинговых систем требуется информация о просмотрах карточек товаров вашего интернет-магазина. Чтобы отправить в интеграцию информацию о просмотренном товаре, вам нужно настроить событие Viewed Product Detail. Это событие наступает в момент загрузки пользователем карточки товара или на языке digitalData: Наступило событие Viewed Page при условии, что digitalData.page.type === 'product' (тип страницы, на которой находится пользователь: товар).

![](/img/events.2.png)

```javascript
if (this.digitalData('page.type') === 'product') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Detail'
  };
}
```
Конструкция this.digitalData('page.type') [описана ниже](#3).


**Пример 2: Событие `Clicked Campaign`**

Для отслеживания CTR и других показателей эффективности внутренних кампаний, необходимо отслеживать клики по баннерам. Это событие наступает в момент клика пользователем по баннеру или на языке digitalData: Сработал триггер Click по элементу страницы, содержащему CSS class="ddl_campaign_link".
>Важно! Если при настройке кампании вы выбрали в качестве триггера - "Клик", в поле "Функция, которая обращает объект события" вы можете обратиться к переменной "element". Element - это объект DOM, CSS селектор которого вы указали.

![](/img/events.3.png)

```javascript
var campaignId = element.getAttribute('data-campaign-id');
return {
  name: 'Clicked Campaign',
  category: 'Promo',
  campaign: campaignId
};
```

**Пример 3: Событие `Viewed Campaign`**

В связке с кликами по баннерам, необходимо отслеживать и показы баннеров. Встроенный триггер "Показ" срабатывает только тогда, когда в поле видимости браузера посетителя сайта попало 75% отслеживаемого элемента страницы. CSS селектор отслеживаемого элемента указывается в соответствующем после настройки события.
>Важно! Если при настройке кампании вы выбрали в качестве триггера - "Показ", в поле "Функция, которая обращает объект события" вы можете обратиться к переменной "elements". Elements - это массив объектов DOM, CSS селектор которых вы указали.

![](/img/events.4.png)

```javascript
var viewedCampaigns = [];
for (var i = 0; i < elements.length; i++) {
  var campaignId = elements[i].getAttribute('data-campaign-id');
  viewedCampaigns.push(campaignId);
}
return {
  name: 'Viewed Campaign',
  category: 'Promo',
  campaigns: viewedCampaigns
};
```

### <a name="3"></a>Вспомогательные функции
------
```javascript
_queryParam('q') // получить значение параметра URL
_cookie('_ga') // получить значение куки по ее имени
_get(event, 'transaction.lineItems') // Безопасно получить любое свойство любого объекта
_digitalData('transaction.lineItems') // Безопасно получить любое свойство объекта digitalData
_loadPixel({src: 'https://test.com/pixel.png', id: 'admit_ad'}) //Загрузить пиксель. Поддерживается любое количество дополнительных атрибутов
_loadScript({src: 'https://test.com/script.js', id: 'google'}) //Загрузить скрипт. Поддерживается любое количество дополнительных атрибутов
_loadIframe({src: 'https://test.com/window', style: 'display: none;'}) //Загрузить Iframe. Поддерживается любое количество дополнительных атрибутов
_loadLink({href: 'https://test.com/style.css', type: "text/css"}) //Загрузить стиль через тег Link. Поддерживается любое количество дополнительных атрибутов
_global('settings.mobile_app') // Безопасно получить любое свойство объекта window
_domQuery('#logo') // получить массив элементов по CSS-селектору
_dataLayer('ecommerce.purchase') // Безопасно получить переменную из GTM dataLayer
return _fetch('/ajax?cart', function(result) {
  return result;
}); // забрать данные с удаленного сервера асинхронно
return _timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
}); // Задержка перед тем как обработчик вернет результат

this.retry(X, Z, Y); // Вызывать функцию X каждые Y милисекунды, если функция возвращает ошибку, повротить попытку Z раз.
// аргументы Z и Y опциональные, дефолтный интервал, 1000 милисекунд, дефолтное число попыток, 5.
// пример:
this.retry(function() {
  window.externalLib.method()
}, 10, 2000);
// каждые 2 секунды вызвать window.externalLib.method(), вызвать до 10 раз если возвращает ошибку.
```

> Функция `_queryParam()` всегда возвращает значение в нижнем регистре

> Функция `_domQuery()`, а также селекторы в триггерах **клик** и **показ** работают по следующему принципу:
>  - если на сайте не установлен jQuery (нет глобального объекта window.jQuery) или библиотека jQuery загружается после библиотеки SegmentStream (стоит ниже по коду) - используется [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll),
>  - если есть глобальный объект window.jQuery - используются селекторы jQuery.

### <a name="4"></a>Как называть события
------
Стандартные интеграции в SegmentStream работают со списком зарезервированных событий, например: [Viewed Product Detail](/ru/events/viewed-product-detail), [Viewed Cart](/ru/events/viewed-cart), [Viewed Checkout Step](/ru/events/viewed-checkout-step), [Completed Transaction](/ru/events/completed-transaction) и т.д.
Полный список зарезервированных событий есть есть в боком меню "Список событий". Используйте имена событий, приведенные в данном списке.

Если вам необходимо добавить событие, которое отсутствует в списке зарезервированных - используйте [правила именования событий](/ru/for-developer/naming)
