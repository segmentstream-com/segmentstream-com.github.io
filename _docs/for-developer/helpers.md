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

### <a name="_queryParam"></a>Get URL parameter value
------
Example - get the value of the parameter on the page www.test.ru?q=blue%20ball:
```javascript
_queryParam('q'); // blue%20ball
```
> The `_queryParam()` function always returns values in lowercase

### <a name="_cookie"></a>Get cookie value
------
Example - get the GA cookie value:
```javascript
_cookie('_ga'); // GA1.2.1409919348.1513159051
```

### <a name="_get"></a>Safely get any property of an object
------
Example - get the value of 'transaction.lineItems' from a digitalData event object:
```javascript
_get(event, 'transaction.lineItems'); // lineItems array [...]
```

### <a name="_digitalData"></a>Safely get any digitalData property
------
Example - get the value of 'transaction.lineItems' from the digitalData object:
```javascript
_digitalData('transaction.lineItems'); // lineItems array [...]
```

### <a name="_loadPixel"></a>Load pixel
------
Any number of attributes is supported.
Example - load pixel from https://test.com/pixel.png:
```javascript
_loadPixel({src: 'https://test.com/pixel.png', id: 'admit_ad'});
```

### <a name="_loadScript"></a>Load script
------
Any number of attributes is supported.
Example - load script from https://test.com/script.js:
```javascript
_loadScript({src: 'https://test.com/script.js', id: 'google'});
```

### <a name="_loadIframe"></a>Load iframe
------
Any number of attributes is supported.
Example - load iframe from https://test.com/window:
```javascript
_loadIframe({src: 'https://test.com/window', style: 'display: none;'});
```

### <a name="_loadLink"></a>Load link
------
Any number of attributes is supported.
Example - load link from https://test.com/style.css:
```javascript
_loadLink({href: 'https://test.com/style.css', type: "text/css"});
```

### <a name="_global"></a>Safely get any window property
------
Example - Get the value of window.settings.mobile_app:
```javascript
_global('settings.mobile_app');
```

### <a name="_global"></a>Get an array of elements by CSS-selector
------
Example - Get an array of elements which have the 'logo' id:
```javascript
_domQuery('#logo');
```
> The `_domQuery()` function, and the selectors in the triggers **Click** and **Impression** work by the following principle:
>  - if jQuery is not loaded on the website (there is no global window.jQuery object) or jQuery is loaded after SegmentStream (is located further down the HTML page), [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) is used,
>  - if jQuery is loaded on the website, jQuery selectors are used.

### <a name="_dataLayer"></a>Safely get a GTM dataLayer variable
------
Example - Get the value of 'ecommerce.purchase' from the dataLayer:
```javascript
_dataLayer('ecommerce.purchase');
```

### <a name="_fetch"></a>Get data from a remote server using ajax
------
Example - Get data about the cart contents from the '/ajax?cart' link:
```javascript
return _fetch('/ajax?cart', function(result) {
  return result;
});
```

### <a name="_timeout"></a>Delay before the handler returns the result
------
Example - Send an event with a delay of 1500 milliseconds:
```javascript
return _timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
});
```

### <a name="_retry"></a>Try calling a function several times
------
The function takes 3 arguments, the function to be called, the number of attempts, the interval between the attempts.
Example - Call function X every Y milliseconds, if the function returns an error, try again Z times:
```javascript
_retry(X, Z, Y);
```
> The arguments Z and Y are optional, the default interval is 1000 milliseconds, the default number of attempts is 5.

Example - Call the window.externalLib.method() function every 2000 milliseconds, if the function returns an error, try again 10 times:
```javascript
_retry(function() {
  window.externalLib.method()
}, 10, 2000);
```
