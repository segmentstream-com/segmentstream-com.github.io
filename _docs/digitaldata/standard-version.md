---
layout: page
section: digitaldata
title: "version"
date: 2017-06-05 12:00:00
order: 1
---

Переменная `digitalData.version` содержит в себе версию стандарта. Последняя стабильная версия - `1.1.2`
- Тип данных - строка.
- Должна присутствовать на каждой странице
- Пример заполнения:
```JavaScript
  window.digitalData = {
    version: '1.1.2',
    ...
  }
```


### История версий
------
**1.1.2 - Январь 2017**
- добавлен метод digitalData.changes

**1.1.1 - Июль 2016**

- добавлено поле digitalData.listing.category
- удалено поле digitalData.product.subcategory
- поле digitalData.product.category теперь является массивом
- добавлено поле digitalData.listing.listId
- В семантическом событии Clicked Product необходимо использовать listId вместо listName
- В семантическом событии Viewed Product необходимо использовать listId вместо listName

**1.1.0 - Июнь 2016**
- добавлен новый объект digitalData.website
- добавлено поле digitalData.website.regionId
- поле digitalData.page.region перенесено в digitalData.website.region
- поле digitalData.page.siteType перенесено в digitalData.website.type
- поле digitalData.page.environment перенесено в digitalData.website.environment
- поле digitalData.user.language перенесено в digitalData.website.language
- поле listName удалено из объекта Product.
- поле position удалено из объекта Product.
- поле digitalData.page.categoryId перенесено в digitalData.listing.categoryId
- в семантическом событии "Viewed Product" поля listName и position вынесены из объекта Product.
- в семантическом событии "Clicked Product" поля listName и position вынесены из объекта Product.
- в семантическом событии "Viewed Campaign" трекинг просмотра нескольких кампаний осуществляется при помощи поля campaigns, вместо campaign.
- в семантическом событии "Viewed Product" трекинг просмотра нескольких товаров осуществляется при помощи поля listItems, - вместо product.
- добавлено семантическое событие "Viewed Cart"

**1.0.0 - Декабрь 2015**
- Релиз первой стабильной версии стандарта digitalData.