---
layout: page
section: developerRU
title: "Вспомогательные функции"
date: 2017-06-05 12:00:00
order: 5
---

Вспомогательные функции помогают вам писать код быстрее и с меньшим количеством ошибок, также они делают ваш код более читабельным.
Ими можно пользоваться в настройке переменных, событий, и скриптов.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#_queryParam">Получить значение параметра URL</a></li>
  <li><a href="#_cookie">Получить значение куки по ее имени</a></li>
  <li><a href="#_get">Безопасно получить любое свойство любого объекта</a></li>
  <li><a href="#_digitalData">Безопасно получить любое свойство объекта digitalData</a></li>
  <li><a href="#_loadPixel">Загрузить пиксель</a></li>
  <li><a href="#_loadScript">Загрузить скрипт</a></li>
  <li><a href="#_loadIframe">Загрузить Iframe</a></li>
  <li><a href="#_loadLink">Загрузить ссылку</a></li>
  <li><a href="#_global">Безопасно получить любое свойство объекта window</a></li>
  <li><a href="#_domQuery">Получить массив элементов по CSS-селектору</a></li>
  <li><a href="#_dataLayer">Безопасно получить переменную из GTM dataLayer</a></li>
  <li><a href="#_fetch">Забрать данные с удаленного сервера асинхронно</a></li>
  <li><a href="#_timeout">Задержка перед тем как обработчик вернет результат</a></li>
  <li><a href="#_retry">Сделать несколько попыток вызвать функцию</a></li>

</ul>

### <a name="_queryParam"></a>Получить значение параметра URL
------
Пример - получить значение параметра у страницы www.test.ru?q=blue%20ball:
```javascript
_queryParam('q'); // blue%20ball
```
> Функция `_queryParam()` всегда возвращает значение в нижнем регистре

### <a name="_cookie"></a>Получить значение куки по ее имени
------
Пример - получить значение куки GA:
```javascript
_cookie('_ga'); // GA1.2.1409919348.1513159051
```

### <a name="_get"></a>Безопасно получить любое свойство любого объекта
------
Пример - получить значение 'transaction.lineItems' из события digitalData:
```javascript
_get(event, 'transaction.lineItems'); // массив lineItems [...]
```

### <a name="_digitalData"></a>Безопасно получить любое свойство объекта digitalData
------
Пример - получить значение 'transaction.lineItems' из объекта digitalData:
```javascript
_digitalData('transaction.lineItems'); // массив lineItems [...]
```

### <a name="_loadPixel"></a>Загрузить пиксель
------
Поддерживается любое количество дополнительных атрибутов.
Пример - Загрузить пиксель https://test.com/pixel.png:
```javascript
_loadPixel({src: 'https://test.com/pixel.png', id: 'admit_ad'});
```

### <a name="_loadScript"></a>Загрузить скрипт
------
Поддерживается любое количество дополнительных атрибутов.
Пример - Загрузить скрипт https://test.com/script.js:
```javascript
_loadScript({src: 'https://test.com/script.js', id: 'google'});
```

### <a name="_loadIframe"></a>Загрузить Iframe
------
Поддерживается любое количество дополнительных атрибутов.
Пример - Загрузить Iframe https://test.com/script.js:
```javascript
_loadIframe({src: 'https://test.com/window', style: 'display: none;'});
```

### <a name="_loadLink"></a>Загрузить Link
------
Поддерживается любое количество дополнительных атрибутов.
Пример - Загрузить ссылку https://test.com/style.css:
```javascript
_loadLink({src: 'https://test.com/style.ss', type: "text/css"});
```

### <a name="_global"></a>Безопасно получить любое свойство объекта window
------
Пример - Получить значение window.settings.mobile_app:
```javascript
_global('settings.mobile_app');
```

### <a name="_domQuery"></a>Получить массив элементов по CSS-селектору
------
Пример - Получить значение элемента с id='logo':
```javascript
_domQuery('#logo');
```
> Функция `_domQuery()`, а также селекторы в триггерах **клик** и **показ** работают по следующему принципу:
>  - если на сайте не установлен jQuery (нет глобального объекта window.jQuery) или библиотека jQuery загружается после библиотеки SegmentStream (стоит ниже по коду) - используется [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll),
>  - если есть глобальный объект window.jQuery - используются селекторы jQuery.

### <a name="_dataLayer"></a>Безопасно получить переменную из GTM dataLayer
------
Пример - Получить значение 'ecommerce.purchase' из dataLayer:
```javascript
_dataLayer('ecommerce.purchase');
```

### <a name="_fetch"></a>Забрать данные с удаленного сервера асинхронно
------
Пример - Получить данные о корзине по ссылке '/ajax?cart':
```javascript
return _fetch('/ajax?cart', function(result) {
  return result;
});
```

### <a name="_timeout"></a>Задержка перед тем как обработчик вернет результат
------
Пример - Отправить событие с задержкой 1500 миллисекунд:
```javascript
return _timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
});
```

### <a name="_retry"></a>Сделать несколько попыток вызвать функцию
------
Функция принимает 3 аргумента, функцию которую надо вызывать, количество попыток, интервал между попытками.
Пример - Вызывать функцию X каждые Y миллисекунды, если функция возвращает ошибку, повторить попытку Z раз:
```javascript
_retry(X, Z, Y);
```
> Аргументы Z и Y опциональные, дефолтный интервал 1000 миллисекунд, дефолтное число попыток 5.

Пример - Вызывать функцию window.externalLib.method() каждые 2000 миллисекунд, если функция возвращает ошибку, повторить попытку 10 раз:
```javascript
_retry(function() {
  window.externalLib.method()
}, 10, 2000);
```




