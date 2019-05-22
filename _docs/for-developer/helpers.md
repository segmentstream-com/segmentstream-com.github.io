---
layout: page
section: developer
title: "Helper functions"
date: 2017-06-05 12:00:00
order: 5
---

Helper functions help you write code faster and with fewer errors, plus, they make your code more readable.
They can be used in the setup of variables, events, and scripts.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#_queryParam">Get URL parameter value</a></li>
  <li><a href="#_cookie">Get cookie value</a></li>
  <li><a href="#_get">Safely get any property of an object</a></li>
  <li><a href="#_digitalData">Safely get any digitalData property</a></li>
  <li><a href="#_loadPixel">Load pixel</a></li>
  <li><a href="#_loadScript">Load script</a></li>
  <li><a href="#_loadIframe">Load Iframe</a></li>
  <li><a href="#_loadLink">Load link</a></li>
  <li><a href="#_global">Safely get any window property</a></li>
  <li><a href="#_domQuery">Get an array of elements by CSS-selector</a></li>
  <li><a href="#_dataLayer">Safely get a GTM dataLayer variable</a></li>
  <li><a href="#_fetch">Get data from a remote server using ajax</a></li>
  <li><a href="#_timeout">Delay before the handler returns the result</a></li>
  <li><a href="#_retry">Try calling a function several times</a></li>
</ul>

### <a name="_queryParam"></a>Get URL parameter value - _queryParam
------
```javascript
_queryParam(paramName);
```
Where `paramName` is the name of the query parameter - type `string`.

Get the value of the parameter on the page www.test.ru?q=blue%20ball:
```javascript
_queryParam('q'); // blue%20ball
```
> The `_queryParam()` function always returns values in lowercase

### <a name="_cookie"></a>Get cookie value - _ga
------
```javascript
_cookie(cookieName);
```
Where `cookieName` is the name of the cookie - type `string`.

Get the GA cookie value:
```javascript
_cookie('_ga'); // GA1.2.1409919348.1513159051
```

### <a name="_get"></a>Safely get any property of an object - _get
------
```javascript
_get(object, path);
```
Where `path` is the path inside the `object` - types `string` and `object` respectively.

Get the value of 'transaction.lineItems' from a digitalData event object:
```javascript
_get(event, 'transaction.lineItems'); // lineItems array [...]
```

### <a name="_digitalData"></a>Safely get any digitalData property - _digitalData
------
```javascript
_digitalData(path);
```
Where `path` is the path inside the digitalData object - type `string`.

Get the value of 'transaction.lineItems' from the digitalData object:
```javascript
_digitalData('transaction.lineItems'); // lineItems array [...]
```

### <a name="_loadPixel"></a>Load pixel - _loadPixel
------
Any number of attributes is supported.
```javascript
_loadPixel({
  src: 'pixelLink',
  id: 'pixelId',
  //...any other attributes
});
```
Where `pixelLink` is the link to the pixel and `pixelId` is the id - type `string`.

Load pixel from https://example.com/pixel.png:
```javascript
_loadPixel({src: 'https://example.com/pixel.png', id: 'admit_ad'});
```

### <a name="_loadScript"></a>Load script - _loadScript
------
Any number of attributes is supported.
```javascript
_loadScript({
  src: 'scriptLink',
  id: 'scriptId',
  //...any other attributes
});
```
Where `scriptLink` is the link to the script and `scriptId` is the id - type `string`.

Load script from https://example.com/script.js:
```javascript
_loadScript({src: 'https://example.com/script.js', id: 'google'});
```

### <a name="_loadIframe"></a>Load iframe - _loadIframe
------
Any number of attributes is supported.
```javascript
_loadIframe({
  src: 'iframeLink',
  id: 'iframeId',
  //...any other attributes
});
```
Where `iframeLink` is the link to the iframe and `iframeId` is the id - type `string`.

Load iframe from https://example.com/window:
```javascript
_loadIframe({src: 'https://example.com/window', style: 'display: none;'});
```

### <a name="_loadLink"></a>Load link - _loadLink
------
Any number of attributes is supported.
```javascript
_loadLink({
  src: 'fileLink',
  type: 'fileType',
  //...any other attributes
});
```
Where `fileLink` is the link to the file and `fileType` is the type - type `string`.

Load link from https://example.com/style.css:
```javascript
_loadLink({href: 'https://example.com/style.css', type: "text/css"});
```

### <a name="_global"></a>Safely get any window property - _global
------
```javascript
_global(path);
```
Where `path` is the path inside the window object - type `string`.

Get the value of window.settings.mobile_app:
```javascript
_global('settings.mobile_app');
```

### <a name="_domQuery"></a>Get an array of elements by CSS-selector - _domQuery
------
```javascript
_domQuery(cssSelector);
```
Where `cssSelector` is the CSS-selector - type `string`.

Get an array of elements which have the 'logo' id:
```javascript
_domQuery('#logo');
```
> The `_domQuery()` function, and the selectors in the triggers **Click** and **Impression** work by the following principle:
>  - if jQuery is not loaded on the website (there is no global window.jQuery object) or jQuery is loaded after SegmentStream (is located further down the HTML page), [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) is used,
>  - if jQuery is loaded on the website, jQuery selectors are used.

### <a name="_dataLayer"></a>Safely get a GTM dataLayer variable - _dataLayer
------
```javascript
_dataLayer(path);
```
Where `path` is a path inside a _dataLayer event object - type `string`.

Get the value of 'ecommerce.purchase' from the dataLayer:
```javascript
_dataLayer('ecommerce.purchase');
```

### <a name="_fetch"></a>Get data from a remote server using ajax - _fetch
------
```javascript
return _fetch(link, function(result) {
  return result;
});
```
Where `link` is the route to the server, and `result` is the data from the server response - types `string`.

Get data about the cart contents from the '/ajax?cart' link:
```javascript
return _fetch('/ajax?cart', function(result) {
  return result;
});
```

### <a name="_timeout"></a>Delay before the handler returns the result - _timeout
------
```javascript
return _timeout(delay, function() {
  code
});
```
Where `delay` (type `number`) is the length of the delay in milliseconds, and `code` is the code that should be executed after the delay.

Send an event with a delay of 1500 milliseconds:
```javascript
return _timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
});
```

### <a name="_retry"></a>Try calling a function several times - _retry
------
The function takes 3 arguments, the function to be called, the number of attempts, the interval between the attempts.
```javascript
_retry(callbackFunction, retryQuantity, retryInterval);
```
Call `callbackFunction` every `retryInterval` milliseconds, if the function throws an error, try again `retryQuantity` times - types `function`, `number`, `number` respectively.

> The arguments `retryQuantity` and `retryInterval` are optional, the default interval is 1000 milliseconds, the default number of attempts is 5.

Possible use case:
An external library is loaded asynchronously, we don't know how long it will take to load, so in order to avoid any errors, we will use the following code.
```javascript
_loadScript({src: 'https://example.com/externalLib.js', id: 'someName'});
_retry(function() {
  window.externalLib.method();
}, 10, 2000);
```
The code above will load the library using the _loadScript helper, and the _retry helper will call the window.externalLib.method() function every 2000 milliseconds, if the function returns an error, it will try 10 times in total.
