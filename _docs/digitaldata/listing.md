---
layout: page
section: digitaldata
title: "listing"
order: 1
---

The `listing` object contains variables that describe the list of goods: an array of [product](/digitaldata/product) objects, the name of the list, the number of products in the list, sorting, etc.

## Introduction
------
The `listing` object must be declared and filled in the source code of the page or after the page is loaded in case an AJAX-load catalog is used. The list of products can be located on the search page (`digitalData.page.type` равно 'search'), on a catalog category page (`digitalData.page.type` = 'listing') or on any other page as one or more lists of recommended products (`digitalData.recommendation` equalt to [ `listing`, `listing`, `listing`]).

Example of filling the object on a catalog category page:
```javascript
window.digitalData = {
  ...,
  listing: {
    listName: "category",
    listId: "main",
    categoryId: "125656",
    category: ['Clothes','Footwear','Boots'],
    items: [Product, Product, Product, ...], //array of product objects
    sortBy: "price_asc",
    resultCount: 20,
    pagesCount: 13,
    currentPage: 2,
    layout: "grid"
  },
  ...
}
```

Example of filling the object on a search result page::
```javascript
window.digitalData = {
  ...,
  listing: {
    listName: "search-results",
    listId: "main",
    query: "blue boots",
    items: [Product, Product, Product, ...],
    sortBy: "price_asc",
    resultCount: 20,
    pagesCount: 13,
    currentPage: 2,
    layout: "grid"
  },
  ...
}
```

Example of filling the object on a page with several recommendation lists:
```javascript
window.digitalData = {
  ...,
  recommendation: [
    ...,
    { //listing object
      listName: "Recently Viewed Products",
      listId: "recentlyViewed",
      items: [Product, Product, Product, ...]
    },
    { //listing object
      listName: "People were also interested in",
      listId: "crossSell",
      items: [Product, Product, Product, ...]
    },
    ...
  ],
  ...
}
```

>The `listing` object in the `digitalData.recommendation` array consists of only 3 variables.

## listing.listName
------
Data type: string.

`listing.listName` - **required** variable that contains the name of the list of products.

>The value of this variable will be displayed as the list name in the [Google Analytics](/integrations/google-analytics) reports

## listing.listId
------
Data type: string.

`listing.listId` - **required** variable that contains the unique identifier of the list.

>If there are 2 or more lists of goods on one page - each such list must have a unique identifier. Example: on the product category page, you can have both a basic list and a list of recently viewed items.

## listing.items
------
Data type: array of **product** objects.

`listing.items` - **required** variable that contains an array of objects. Each object describes a product located on the page. [more about the `product` object](/digitaldata/product)

## listing.categoryId
------
Data type: string.

`listing.categoryId` - **required** variable that contains the product category identifier.

>This element must be included only in catalog category pages (pages where digitalData.page.type is equal to "listing").

## listing.category
------
Data type: Array of strings.

`listing.category` - **required** variable that contains a category hierarchy for this category.

>This element must be included only in catalog category pages (pages where digitalData.page.type is equal to "listing").

## listing.query
------
Data type: string.

`listing.query` - contains the search query entered by the visitor in the search form on the site.

>This element must be included only in search result pages (pages where digitalData.page.type is equal to "search").
>This variable should be filled even when there are no search results

## listing.resultCount
------
Data type: number.

`listing.resultCount` - contains the quantity of all products in this category or the number of all products found.

## listing.pagesCount
------
Data type: number.

`listing.pagesCount` - contains the number of pages with goods (if pagination is present).

## listing.currentPage
------
Data type: number.

`listing.currentPage` - contains the number of the page which the user is viewing (if pagination is present)

## listing.sortBy
------
Data type: string.

`listing.sortBy` contains the sort type applied to the list of products. For example: 'price_asc', 'price_desc'

## listing.layout
------
Data type: string.

`listing.layout` contains the type of display of goods in the list. For example: 'grid', 'list', 'map'
