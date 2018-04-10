---
layout: page
section: developer
title: "digitalData object"
date: 2017-06-05 12:00:00
order: 2
---

In this section you will learn:
* How to install the digitalData data layer on your website.
* How to correctly fill in all the variables inside the digitalData object.

digitalData is a global JavaScript object. It must be declared as high as possible in the source code of the site, [before connecting the DigitalDataManager library](/for-developer/snippet). This object should be present on every page of the site.

> Declare the `window.digitalData` object the first time the page loads. Do not try to build a system in which the object is created after an AJAX request. This decision will worsen the work of your entire marketing infrastructure and make it unmanageable.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">How to fill the object</a></li>
</ul>

### <a name="0"></a>Введение
------
Let's analyze the structure of the object in more detail. The object consists of other objects and arrays. All these objects and arrays must be filled with information in accordance with the standard described in this documentation.

In general, the `digitalData` object looks like this:

```javascript
window.digitalData = {
  version: '1.1.2',
  website: {...},         //Global information about the website
  page: {...},            //Data about the current page
  user: {...},            //Data about the visitor or authorized user
  product: {...},         //Data about the product currenly viewed
  wishlist: {...},        //Data about the users wishlist
  cart: {...},            //State of the users cart
  transaction: {...},     //Data about the completed transaction
  listing: {...},         //List of products viewed on the page
  recommendation: [...],  //List of recommended products viewed on the page
  campaigns: [...],       //List of internal promotion campaigns
  changes: [...],         //Changes that occured in the digitalData after it's initialization
  events: [...]           //Events that fired on the current page
}
```

The detailed composition of each variable is discussed below.

### <a name="1"></a>Как заполнять объект
------
digitalData можно представить как структурированное описание страницы, которую посетитель видит на экране своего монитора. Состав объекта digitalData зависит от содержания страницы. Приведем несколько примеров:
 - Пользователь перешел на карточку товара и видит детальную информацию о товаре: изображение, название, цену, бренд и т.д. Вся эта информация должна содержаться в объекте `digitalData.product`
 - Пользователь перешел на главную страницу, видит список рекомендованных товаров и несколько баннеров. Информация о рекомендованных товарах должна содержаться в массиве `digitalData.recommendation`, а информация о баннерах в массиве `digitalData.campaigns`.
 - Иконка корзины с количеством товаров видна на каждой странице интернет-магазина. Это значит, что объект digitalData.cart должен быть заполнен на каждой странице сайта.

Также digitalData содержит информацию о том пользователе, который просматривает сайт. Эта информация может и не отображается в явном виде, но должна присутствовать в объекте, например: подписан ли пользователь на email-рассылку, совершал ли пользователь покупки ранее, имя пользователя и т.д.

Как видно из примеров выше, одни переменные должны быть заполнены на каждой страницы, другие - на определенных типах страниц. Если содержание страницы изменяется без перезагрузки страницы - содержание объекта `digitalData` также необходимо изменить.

Далее мы рассмотрим подробнее стандарт заполнения каждой переменной и разберем примеры заполнения объекта для всех типовых страниц интернет-магазина.

Подробное описание объектов:
 - [version](/digitaldata/standard-version)
 - [website](/digitaldata/website)
 - [page](/for-developer/#listing)
 - [product](/for-developer/#listing)
 - [wishlist](/for-developer/#listing)
 - [cart](/for-developer/#listing)
 - [transaction](/for-developer/#listing)
 - [listing](/for-developer/#listing)
 - [recommendation](/for-developer/#listing)
 - [campaigns](/for-developer/#listing)
 - [context](/for-developer/#listing)
 - [changes](/for-developer/#listing)
 - [events](/for-developer/#listing)

Подробнее описание состава digitalData для типовых страниц:
 - [Главная страница](/for-developer/#main-page)
 - [Категория товаров](/for-developer/#listing)
 - [Результаты поиска](/for-developer/#listing)
 - [Карточка товара](/for-developer/#listing)
 - [Корзина](/for-developer/#listing)
 - [Станицы этапов оформления заказа](/for-developer/#listing)
 - [Страница подтверждения заказа](/for-developer/#listing)
 - [Текстовая страница](/for-developer/#listing)