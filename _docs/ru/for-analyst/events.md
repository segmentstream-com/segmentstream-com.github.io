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
  <li><a href="#4">Как называть события</a></li>
</ul>

### <a name="0"></a>Введение
------
Любое событие - это набор информации, который поступает в массив данных digitalData.events. Информация в массиве должна быть представлена в виде JavaScript объекта.
Например, SegmentStream зарегистрирует событие с именем "Some event" в момент, когда будет выполнен следующий код:
```javascript
digitalData.events.push({
  name: 'Some event',
  value: 3000
});
```
Теперь SegmentStream может отправить информацию о событии "Some event" вместе со значением 3000 в любую систему, например в Google Analytics или Yandex Metrica.

### <a name="1"></a>Создание события
------
В SegmentStream можно использовать 3 триггера:
* Событие
* Клик
* Показ

>Важно! Клиентская библиотека SegmentStream по умолчанию всегда отправляет встроенное событие Viewed Page после загрузки. Отправку этого события можно отменить, выключая в настройках проекта опцию [Автоматическая отправка события Viewed Page](/ru/for-analyst/settings/#sendViewedPageEvent).

![](/img/events.1.png)

На основе этих триггеров и данных из digitalData можно создавать новые события.


**Пример 1: Событие `Viewed Product Detail`**

Большинству маркетинговых систем требуется информация о просмотрах карточек товаров вашего интернет-магазина. Чтобы отправить в интеграцию информацию о просмотренном товаре, вам нужно настроить событие Viewed Product Detail. Это событие наступает в момент загрузки пользователем карточки товара или на языке digitalData: Наступило событие Viewed Page при условии, что digitalData.page.type === 'product' (тип страницы, на которой находится пользователь: товар).

![](/img/events.2.png)

```javascript
if (_digitalData('page.type') === 'product') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Detail'
  };
}
```
Конструкция _digitalData('page.type') [описана в разделе вспомогательные функции](/ru/for-developer/helpers).


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

### <a name="4"></a>Как называть события
------
Стандартные интеграции в SegmentStream работают со списком зарезервированных событий, например: [Viewed Product Detail](/ru/events/viewed-product-detail), [Viewed Cart](/ru/events/viewed-cart), [Viewed Checkout Step](/ru/events/viewed-checkout-step), [Completed Transaction](/ru/events/completed-transaction) и т.д.
Полный список зарезервированных событий есть в боком меню "Список событий". Используйте имена событий, приведенные в данном списке.

Если вам необходимо добавить событие, которое отсутствует в списке зарезервированных - используйте [правила именования событий](/ru/for-developer/naming)
