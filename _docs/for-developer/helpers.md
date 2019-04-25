---
layout: page
section: developer
title: "Helper functions"
date: 2017-06-05 12:00:00
order: 5
---

### Page contents
------
<ul class="page-navigation">
  <li><a href="#1">Why use helper functions?</a></li>
  <li><a href="#2">List of helper functions</a></li>
</ul>

### <a name="1"></a>Why use helper functions?
Helper functions help you write code faster and with fewer errors, plus, they make your code more readable.

### <a name="2"></a>List of helper functions
------
```javascript
_queryParam('q') // get url parameter value
_cookie('_ga') // get cookie value
_get(event, 'transaction.lineItems') // Safely get any event property
_digitalData('transaction.lineItems') // Safely get any digitalData property
_loadPixel({src: 'https://test.com/pixel.png', id: 'admit_ad'}) //Load pixel. Any number of attributes is supported
_loadScript({src: 'https://test.com/script.js', id: 'google'}) //Load script. Any number of attributes is supported
_loadIframe({src: 'https://test.com/window', style: 'display: none;'}) //Load iframe. Any number of attributes is supported
_loadLink({href: 'https://test.com/style.css', type: "text/css"}) //Load styles through tag link. Any number of attributes is supported
_global('settings.mobile_app') // Safely get any window property
_domQuery('#logo') // get an array of elements by CSS-selector
_dataLayer('ecommerce.purchase') // Safely get a GTM dataLayer variable
return _fetch('/ajax?cart', function(result) {
  return result;
}); // get data from a remote server using ajax
return _timeout(1500, function() {
  return {
    name: 'Event With Timeout';
  }
}); // Delay before the handler returns the result

this.retry(X, Z, Y); // Call function X every Y milliseconds, if it returns an error, try again up to Z times.
// Z and Y are optional, the default interval is 1000 milliseconds, and the default try count is 5
// example:
this.retry(function() {
  window.externalLib.method()
}, 10, 2000);
// every 2 seconds call window.externalLib.method(), call 10 up to times if it returns an error.
```

> The `_queryParam()` function always returns values in lowercase

> The `_domQuery()` function, and the selectors in the triggers **Click** and **Impression** work by the following principle:
>  - if jQuery is not loaded on the website (there is no global window.jQuery object) or jQuery is loaded after SegmentStream (is located further down the HTML page), [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) is used,
>  - if jQuery is loaded on the website, jQuery selectors are used.
