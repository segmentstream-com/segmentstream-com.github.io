---
layout: page
section: ecommerce
title: "Overview"
date: 2018-02-09 12:00:00
order: 0
---

Most online stores have a similar set of page templates, events and funnels. Therefore, the process of integration of the digitalData data layer is similar for all ecommerce projects. In this section, we will analyze the composition of the `window.digitalData` object for all typical pages of the online store:

 - [Home page](/ecommerce/main-page)
 - [Product category](/ecommerce/listing)
 - [Search results](/ecommerce/search)
 - [Product page](/ecommerce/product)
 - [Cart](/ecommerce/cart)
 - [Checkout process page](/ecommerce/checkout)
 - ['Thank You' page](/ecommerce/transaction)
 - [Content page](/ecommerce/content)

>The composition of the `digitalData` object depends on the type of the page (`digitalData.page.type`) and the content of the page. For example, if there is a list of recommendations on the main page of the site, you need to declare and fill out the `digitalData.recommendation` array.

>The `digitalData.page`, `digitalData.user`, `digitalData.cart`, `digitalData.version` and `digitalData.website` variables must be declared and filled on every page.
