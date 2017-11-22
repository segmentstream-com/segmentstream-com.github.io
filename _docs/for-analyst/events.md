---
layout: page
section: analyst
title: "События"
date: 2013-06-05 12:00:00
order: 2
---

Событие - одна из наиболее важных составляющих digitalData. Любая информация отправляется в системы аналитики и другие маркетинговые системы только в виде событий. Ниже будут описаны способы создания и управления событиями в интерфейсе DigitalDataManager.

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
Например: DigitalDataManager зарегистрирует событие с именем "Event Happened" в момент, когда будет выполнен следующий код:
```javascript
digitalData.events.push({
  name: 'Event Happened',
  value: 3000
});      
```
Теперь DigitalDataManager может отправить информацию о событии "Event Happened" вместе со значением 3000 в любую систему, например в Google Analytics или Yandex Metrica.

### <a name="1"></a>Создание события
------
В DigitalDataManager есть 3 базисных триггера:
* Событие
* Клик
* Показ

>Важно! В DigitalDataManager есть 1 встроенное событие - Viewed Page. Это событие наступает в тот момент, когда полностью загружает библиотека ddmanager.

![](/img/events.1.png)

На основе этих триггеров и данных из digitalData можно создавать новые события события.


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
_global('settings.mobile_app') // Безопасно получить любое свойство объекта window
_domQuery('#logo') // получить массив элементов по CSS-селектору
_dataLayer('ecommerce.purchase') // Безопасно получить переменную из GTM dataLayer
return _fetch('/ajax?cart', function(result) {
  return result;
}); // забрать данные с удаленного сервера асинхронно
return timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
}); // Задержка перед тем как обработчик вернет результат
```

> Функция `_queryParam()` всегда возвращает значение в нижнем регистре

> Функция `_domQuery()`, а также селекторы в триггерах **клик** и **показ** работают по следующему принципу:
>  - если на сайте не установлен jQuery (нет глобального объекта window.jQuery) или библиотека jQuery загружается после библиотеки DigitalDataManager (стоит ниже по коду) - используется [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll),
>  - если есть глобальный объект window.jQuery - используются селекторы jQuery.

### <a name="4"></a>Как называть события
------
Стандартные интеграции в DigitalDataManager работают со [списком зарезервированных событий](#), например: Viewed Product Detail, Viewed Cart, Viewed Checkout Step, Completed Transaction и т.д. 
Мы настоятельно рекомендуем придерживать описанных ниже правил при создании новых событий:
1. Проверьте список зарезервированных событий. Если вы не нашли подходящего события - переходите к пункту 2.
2. Название событие всегда пишется строчными буквами на английском языке, при этом каждое слово отделено пробелом и начинается с прописной буквы.
3. Название события содержит в себе действие в прошедшем времени. 