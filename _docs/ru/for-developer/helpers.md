---
layout: page
section: developerRU
title: "Helper functions"
date: 2017-06-05 12:00:00
order: 1
---

### Page contents
------
<ul class="page-navigation">
  <li><a href="#1">Why use helper functions?</a></li>
  <li><a href="#2">List of helper functions</a></li>
</ul>

### <a name="1"></a>Why use helper functions?
Helper functions help you write code faster and with fewer errors, plus, they make your code more readable.

### <a name="2"></a>Вспомогательные функции
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
