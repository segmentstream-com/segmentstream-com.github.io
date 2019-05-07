---
layout: page
section: developerRU
title: "Вспомогательные функции"
date: 2017-06-05 12:00:00
order: 5
---

Вспомогательные функции помогают вам писать код быстрее и с меньшим количеством ошибок, также они делают ваш код более читабельным.
Ими можно пользоваться для настройки переменных, событий, и скриптов.

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

### <a name="_queryParam"></a>Получить значение параметра URL - _queryParam
------
```javascript
_queryParam(string);
```
Get `string` название параметра URL.

Получить значение параметра у страницы www.test.ru?q=blue%20ball:
```javascript
_queryParam('q'); // blue%20ball
```
> Функция `_queryParam()` всегда возвращает значение в нижнем регистре

### <a name="_cookie"></a>Получить значение куки по ее имени - _cookie
------
```javascript
_cookie(string);
```
Get `string` название куки.

Получить значение куки GA:
```javascript
_cookie('_ga'); // GA1.2.1409919348.1513159051
```

### <a name="_get"></a>Безопасно получить любое свойство любого объекта - _get
------
```javascript
_get(object, string);
```
Где `string` это путь внутри объекта `object`.

Получить значение 'transaction.lineItems' из события digitalData:
```javascript
_get(event, 'transaction.lineItems'); // массив lineItems [...]
```

### <a name="_digitalData"></a>Безопасно получить любое свойство объекта digitalData - _digitalData
------
```javascript
_digitalData(string);
```
Где `string` это путь внутри объекта digitalData.

Получить значение 'transaction.lineItems' из объекта digitalData:
```javascript
_digitalData('transaction.lineItems'); // массив lineItems [...]
```

### <a name="_loadPixel"></a>Загрузить пиксель - _loadPixel
------
Поддерживается любое количество дополнительных атрибутов.
```javascript
_loadPixel({
  src: 'ссылка на пиксель',
  id: 'id пикселя',
  //...другие атрибуты
});
```

Загрузить пиксель https://example.com/pixel.png:
```javascript
_loadPixel({src: 'https://example.com/pixel.png', id: 'admit_ad'});
```

### <a name="_loadScript"></a>Загрузить скрипт - _loadScript
------
Поддерживается любое количество дополнительных атрибутов.
```javascript
_loadScript({
  src: 'ссылка на скрипт',
  id: 'id скрипта',
  //...другие атрибуты
});
```

Загрузить скрипт https://example.com/script.js:
```javascript
_loadScript({src: 'https://example.com/script.js', id: 'google'});
```

### <a name="_loadIframe"></a>Загрузить Iframe - _loadIframe
------
Поддерживается любое количество дополнительных атрибутов.
```javascript
_loadIframe({
  src: 'ссылка на iframe',
  style: 'display: none;',
  //...другие атрибуты
});
```

Загрузить Iframe https://example.com/window:
```javascript
_loadIframe({src: 'https://example.com/window', style: 'display: none;'});
```

### <a name="_loadLink"></a>Загрузить Link - _loadLink
------
Поддерживается любое количество дополнительных атрибутов.
```javascript
_loadLink({
  src: 'ссылка на файл',
  type: 'тип файла',
  //...другие атрибуты
});
```

Загрузить ссылку https://example.com/style.css:
```javascript
_loadLink({src: 'https://example.com/style.ss', type: "text/css"});
```

### <a name="_global"></a>Безопасно получить любое свойство объекта window - _global
------
```javascript
_global(string);
```
Где `string` это путь внутри объекта window.

Получить значение window.settings.mobile_app:
```javascript
_global('settings.mobile_app');
```

### <a name="_domQuery"></a>Получить массив элементов по CSS-селектору - _domQuery
------
```javascript
_domQuery(string);
```
Где `string` CSS-селектор.

Получить значение элемента с id='logo':
```javascript
_domQuery('#logo');
```
> Функция `_domQuery()`, а также селекторы в триггерах **клик** и **показ** работают по следующему принципу:
>  - если на сайте не установлен jQuery (нет глобального объекта window.jQuery) или библиотека jQuery загружается после библиотеки SegmentStream (стоит ниже по коду) - используется [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll),
>  - если есть глобальный объект window.jQuery - используются селекторы jQuery.

### <a name="_dataLayer"></a>Безопасно получить переменную из GTM dataLayer - _dataLayer
------
```javascript
_dataLayer(string);
```
Где `string` путь внутри объекта события _dataLayer.

Получить значение 'ecommerce.purchase' из dataLayer:
```javascript
_dataLayer('ecommerce.purchase');
```

### <a name="_fetch"></a>Забрать данные с удаленного сервера асинхронно - _fetch
------
```javascript
return _fetch(string, function(result) {
  return result;
});
```
Где `string` путь к серверу, и `result` данные в ответе сервера.

Получить данные о корзине по ссылке '/ajax?cart':
```javascript
return _fetch('/ajax?cart', function(result) {
  return result;
});
```

### <a name="_timeout"></a>Задержка перед тем как обработчик вернет результат - _timeout
------
```javascript
return _timeout(number, function() {
  code
});
```
Где `number` длинна задержки в миллисекундах, и `code` код который должен воспроизвестись после задержки.

Отправить событие с задержкой 1500 миллисекунд:
```javascript
return _timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
});
```

### <a name="_retry"></a>Сделать несколько попыток вызвать функцию - _retry
------
Функция принимает 3 аргумента, функцию которую надо вызывать, количество попыток, интервал между попытками.
Вызывать функцию X каждые Y миллисекунды, если функция возвращает ошибку, повторить попытку Z раз:
```javascript
_retry(X, Z, Y);
```
> Аргументы Z и Y опциональные, по умолчанию интервал 1000 миллисекунд, число попыток - 5.

Возможный вариант использования:
Внешняя библиотека загружается асинхронно, мы не знаем сколько времени потребуется для загрузки, поэтому чтобы избежать ошибок, мы будем использовать следующий код.
```javascript
_loadScript({src: 'https://example.com/externalLib.js', id: 'someName'});
_retry(function() {
  window.externalLib.method();
}, 10, 2000);
```
Приведенный выше код загрузит библиотеку с помощью вспомогательной функции _loadScript, функция _retry будет вызывать функцию window.externalLib.method() каждые 2000 миллисекунд. Если функция возвращает ошибку, она будет повторит попытку вызова, но не более 10 раз.

