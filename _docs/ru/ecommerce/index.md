---
layout: page
section: ecommerceRU
title: "Обзор"
date: 2018-02-09 12:00:00
order: 1
---

Большинство интернет-магазинов имеют схожий набор шаблонов страниц, событий и воронок. Поэтому процесс интеграции слоя данных digitalData схож для всех ecommerce-проектов. В данном разделе мы разберем состав объекта `window.digitalData` для всех типовых страниц интернет-магазина:

 - [Главная страница](/ru/ecommerce/main-page)
 - [Категория товаров](/ru/ecommerce/listing)
 - [Результаты поиска](/ru/ecommerce/search)
 - [Карточка товара](/ru/ecommerce/product)
 - [Корзина](/ru/ecommerce/cart)
 - [Станицы этапов оформления заказа](/ru/ecommerce/checkout)
 - [Страница подтверждения заказа](/ru/ecommerce/confirmation)
 - [Текстовая страница](/ru/ecommerce/content)

>Состав объекта `digitalData` зависит от типа страницы (`digitalData.page.type`) и контента страницы. Например, если на главной странице сайта расположен список рекомендаций, необходимо объявить и заполнить массив рекомендаций `digitalData.recommendation`.

>Переменные `digitalData.page`, `digitalData.user`, `digitalData.cart`, `digitalData.version` и `digitalData.website` должны быть объявлены и заполнены на каждой странице.
