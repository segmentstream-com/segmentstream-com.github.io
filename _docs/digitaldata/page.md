---
layout: page
section: digitaldata
title: "page"
order: 1
---

The `digitalData.page` object contains variables that describe the loaded page: URL, GET parameters, page template type, breadcrumbs, etc.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">page.type</a></li>
  <li><a href="#2">page.category</a></li>
  <li><a href="#3">page.breadcrumb</a></li>
  <li><a href="#4">page.url</a></li>
  <li><a href="#5">page.hash</a></li>
  <li><a href="#6">page.path</a></li>
  <li><a href="#7">page.queryString</a></li>
  <li><a href="#8">page.referrer</a></li>
  <li><a href="#9">page.title</a></li>
</ul>


### <a name="0"></a>Introduction
------
The `digitalData.page` object must be declared and filled in the source code of each page of the site.

> We do not recommend filling the object asynchronously after loading the page. This can significantly reduce the systems performance.

Example:
```javascript
  window.digitalData = {
    ...,
    page: {
      type: 'listing',
      category: 'Category Listing',
      breadcrumb: ['Women', 'Shoewear', 'Boots'],
      url: 'http://website.com/women/boots?sortBy=price#black',
      hash: '#black',
      path: '/women/dresses/mini/',
      queryString: '?sortBy=price',
      referrer: 'https://referrer.com/',
      title: 'Buy boots online - website.com'
    },
    ...
  }
```

### <a name="1"></a>page.type
------
`page.type` - a reserved variable that contains a description of the page type. A variable can take the following values:

 - "home" - when loading the main page
 - "listing" - when loading a catalog page with a list of products. This can be a page with new items, and with goods of a certain brand or category.
  >If you use spreading catalog pages where there are no products, and there are only banners and links leading to subsections - use `page.type`: "content"
 - "product" - when loading a page with a detailed description of a product
 - "search" - when loading the search results page
 - "cart" - when loading a page containing the contents of the shopping cart
 - "checkout" - when loading one of the checkout step pages
 - "confirmation" - when loading the "Thank you for your purchase" page
 - "content" - for all the other pages

>Do not use any other values, for example: "brandPage", "navigation", "main", etc. This can lead to incorrect integration work.

### <a name="2"></a>page.category
------
`page.category` contains the name of the page template. For the same `page.type` value, there may be several `page.category` values. For example, for `page.type`: "listing", `page.category` can take the following values:
 - Brand Listing - list of products of the same brand
 - Category Listing - list of products of the same category or subcategory
 - New Arrivals Listing - list of new products
 - Sales Listing - list of products on sale
 - Trend Listing - list of trending products

> The values of the variables `page.category` and `page.type` are convenient for use in [Google Analytics content groups](/integrations /google-analytics#13)

### <a name="3"></a>page.breadcrumb
------
`page.breadcrumb` contains the path to the current page in the site structure. The variable is an array where element 0 is the highest level of the category, and the last element of the array is the lowest (the name of the current page).
> On many sites, the array will be equivalent to the breadcrumb navigation element, excluding the first link to the "Main" page.

The variable `page.breadcrumb` does not need to be filled on pages with `page.type`: "home", "cart", "checkout", "confirmation"

### <a name="4"></a>page.url
------
`page.url` contains the full url of the page. You do not need to declare and fill in this variable as it is done automatically by the SegmentStream library.

### <a name="5"></a>page.hash
------
`page.hash` contains the url part after the # character. For example, for the URL http://website.com/wommen/dresses/mini/?sortBy=price#black `page.hash` is set to "#black". You do not need to declare and fill in this variable as it is done automatically by the SegmentStream library.

### <a name="6"></a>page.path
------
`page.path` contains the url part between the first and last slash after the domain. For example, for the URL http://website.com/wommen/dresses/mini/?sortBy=price#black `page.path` takes the value of "/women/dresses/mini/". You do not need to declare and fill in this variable as it is done automatically by the SegmentStream library.

### <a name="7"></a>page.queryString
------
`page.queryString` contains the url part with GET parameters. For example, for the URL http://website.com/wommen/dresses/mini/?sortBy=price#black `page.queryString` takes the value of "?SortBy=price". You do not need to declare and fill in this variable as it is done automatically by the SegmentStream library.

### <a name="8"></a>page.referrer
------
`page.referrer` contains the url of the previous page. The page from which the link or redirect to the current page occurred. The value corresponds to the content of the global js-variable `document.referrer`. You do not need to declare and fill in this variable as it is done automatically by the SegmentStream library.

### <a name="9"></a>page.title
------
`page.title` contains the value of the meta tag <title>Page title</title>. You do not need to declare and fill in this variable as it is done automatically by the SegmentStream library.
