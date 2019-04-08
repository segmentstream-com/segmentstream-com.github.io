---
layout: page
section: digitalDataRU
title: "wishlist"
order: 1
---

Массив `digitalData.wishlist` содержит в себе объекты `product`, которые описывают товары, добавленные посетителем в "избранное".

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
</ul>


### <a name="0"></a>Введение
------
Массив `digitalData.wishlist` должен быть объявлен и заполнен в исходном коде странице.

Пример заполнения:
```javascript
digitalData.wishlist = [
  { /*Объект product*/ },
  { /*Объект product*/ },
  ...
]
```
[Подробное описание объекта `product`](/ru/digitaldata/product)

>Массив wishlist не используется ни для одной интеграции, однако данные о товарах, добавленных в избранное могут быть использованы для продвинутой сегментации и персонализации.
