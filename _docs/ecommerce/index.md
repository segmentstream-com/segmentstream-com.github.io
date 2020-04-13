---
layout: page
section: ecommerce
title: "Overview"
date: 2020-04-13
order: 0
---

Most online stores have a similar set of page templates, events and funnels. Therefore, the process of integration of the digitalData object is similar for all ecommerce projects. In this section, we will analyze the composition of the `window.digitalData` object for all typical pages of the online store:

 - [Home page](/ecommerce/main-page)
 - [Product listing page](/ecommerce/listing)
 - [Search results page](/ecommerce/search)
 - [Product page](/ecommerce/product)
 - [Cart page](/ecommerce/cart)
 - [Checkout page](/ecommerce/checkout)
 - ["Thank You" page](/ecommerce/transaction)
 - [Content page](/ecommerce/content)

>The composition of the `digitalData` object depends on the type of the page (`digitalData.page.type`) and the content of the page.

>The `digitalData.page`, `digitalData.user`, `digitalData.cart`, `digitalData.version` and `digitalData.website` variables must be declared and filled on every page.
