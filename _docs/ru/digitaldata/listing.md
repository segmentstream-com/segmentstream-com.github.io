---
layout: page
section: digitaldataRU
title: "listing"
order: 1
---

Объект `listing` содержит в себе переменные, которые описывают список товаров: массив объектов [product](/ru/digitaldata/product), название списка, количество товаров в списке, сортировка и т.д.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#1">listing.listName</a></li>
  <li><a href="#2">listing.listId</a></li>
  <li><a href="#3">listing.items</a></li>
  <li><a href="#4">listing.categoryId</a></li>
  <li><a href="#5">listing.category</a></li>
  <li><a href="#6">listing.query</a></li>
  <li><a href="#7">listing.resultCount</a></li>
  <li><a href="#8">listing.pagesCount</a></li>
  <li><a href="#9">listing.currentPage</a></li>
  <li><a href="#10">listing.sortBy</a></li>
  <li><a href="#11">listing.layout</a></li>
</ul>


### <a name="0"></a>Введение
------
Объект `listing` должен быть объявлен и заполнен в исходном коде странице или после загрзуки страницы в случае использования AJAX-подгрузки списка. Список товаров может быть расположен на странице поиска (`digitalData.page.type` равно 'search'), на странице товарной категории (`digitalData.page.type` = 'listing') или на любой другой странице в качестве одного или нескольких списков рекомендованных товаров (`digitalData.recommendation` равно [ `listing`, `listing`, `listing`]).

Пример заполнения для страницы категории:
```javascript
window.digitalData = {
  ...,
  listing: {
    listName: "category",
    listId: "main",
    categoryId: "125656",
    category: ['одежда','юбки','мини'],
    items: [Product, Product, Product, ...], //массив объектов product
    sortBy: "price_asc",
    resultCount: 20,
    pagesCount: 13,
    currentPage: 2,
    layout: "grid"
  },
  ...
}
```

Пример заполнения для страницы поиска:
```javascript
window.digitalData = {
  ...,
  listing: {
    listName: "search-results",
    listId: "main",
    query: "ботинки бежевые",
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

Пример заполнения для нескольких списков рекомендованных товаров для одной страницы:
```javascript
window.digitalData = {
  ...,
  recommendation: [
    ...,
    { //это объект listing
      listName: "Список недавно просмотренных товаров",
      listId: "recentlyViewed",
      items: [Product, Product, Product, ...]
    },
    { //это объект listing
      listName: "С этим товаром часто покупают",
      listId: "crossSell",
      items: [Product, Product, Product, ...]
    },
    ...
  ],
  ...
}
```

>Объект `listing` в составе массива `digitalData.recommendation` состоит только из 3-х переменных.

### <a name="1"></a>listing.listName
------
Тип данных: строка.

`listing.listName` - **обязательная** переменная, которая содержит в себе название списка товаров.

>Значение данной переменной будет отображаться в качестве названия списка в отчетах [Google Analytics](/ru/integrations/google-analytics)

### <a name="2"></a>listing.listId
------
Тип данных: строка.

`listing.listId` - **обязательная** переменная, которая содержит в себе уникальный идентификатор списка.

>Если на одной странице размещено 2 и более списков товаров - каждый такой список должен иметь уникальный идентификатор. Пример: на странице категории товаров могут находиться одновременно и основной список и список недавно просмотренных товаров.

### <a name="3"></a>listing.items
------
Тип данных: массив объектов **product**.

`listing.items` - **обязательная** переменная, которая содержит в себе массив объектов. Каждый объект описывает товар, расположенный на странице. [подробнее об объекте `product`](/ru/digitaldata/product)

### <a name="4"></a>listing.categoryId
------
Тип данных: строка.

`listing.categoryId` - **обязательная** переменная, которая содержит в себе идентификатор товарной категории.

>Данный элемент необходимо включать только на страницах товарных категорий (страницы, где значение digitalData.page.type равно "listing").

### <a name="5"></a>listing.category
------
Тип данных: массив строк.

`listing.category` - **обязательная** переменная, которая содержит в себе иерархию категорий для данной категории.

>Эту переменную необходимо заполнять только на страницах товарных категорий (страницы, где значение digitalData.page.type = "listing").

### <a name="6"></a>listing.query
------
Тип данных: строка.

`listing.query` - содержит в себе поисковый запрос, введенный посетителем в поисковую форму на сайте.

>Эту переменную необходимо заполнять только на страницах с поисковыми ответами (страницы, где значение digitalData.page.type = "search").
>Эту переменную необходимо заполнять даже если ни один товар не найден.

### <a name="7"></a>listing.resultCount
------
Тип данных: число.

`listing.resultCount` - содержит в себе количество всех товаров в данной категории или количество всех найденных товаров.

### <a name="8"></a>listing.pagesCount
------
Тип данных: число.

`listing.pagesCount` - содержит в себе количество страниц с товарами (если присутствует пагинация).

### <a name="9"></a>listing.currentPage
------
Тип данных: число.

`listing.currentPage` - содержит в себе номер страницы, на который находится пользователь (если присутствует пагинация)

### <a name="10"></a>listing.sortBy
------
Тип данных: строка.

`listing.sortBy` содержит в себе тип сортировки, примененной к списку товаров. Например: 'price_asc', 'price_desc'

### <a name="11"></a>listing.layout
------
Тип данных: строка.

`listing.layout` содержит в себе тип отображения товаров в списке. Например: 'grid', 'list', 'map'
