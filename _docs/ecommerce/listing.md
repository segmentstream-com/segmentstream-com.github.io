---
layout: page
section: ecommerce
title: "Категория товаров"
date: 2018-02-09 12:00:00
order: 2
---

Ниже приведен пример заполнения слоя данных `digitalData` для страницы с листингом товаров (товарной категории).

>Страница категории, на которой представлены ссылки на подкатегории, но не представлены товары - НЕ является листингом. У такой страницы digitalData.page.type = 'content'. Небольшой список товаров на такой странице является списком рекомендаций.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#0.1">listing</a></li>
  <li><a href="#1">page</a></li>
  <li><a href="#2">website</a></li>
  <li><a href="#3">user</a></li>
  <li><a href="#4">cart</a></li>
  <li><a href="#5">version</a></li>
  <li><a href="#6">campaigns</a></li>
  <li><a href="#7">recommendation</a></li>
  <li><a href="#8">Объект целиком</a></li>
</ul>

### <a name="0"></a>Введение
------
На страниц товарной категории интернет-магазина должны быть объявлены и заполнены следующие объекты:
 - Обязательные:  `listing`, `page`, `website`, `user`, `cart`, `version`
 - Необязательные (зависит от контента): `campaigns` ,`recommendation`

### <a name="0.1"></a>listing
------
Объект `digitalData.listing` должен быть объявлен и заполнен для любой страницы, у которой `page.type` = 'listing'.

[Подробнее об объекте **listing**](/digitaldata/listing)

Пример заполнения:
```javascript
window.digitalData = {
  ...,
  listing: {
    listName: "category",
    listId: "main",
    categoryId: "125656",
    category: ['Одежда','Юбки','Мини'],
    items: [
      ...,
      {
        id: "1234567890",
        url: "http://website.com/product.html",
        imageUrl: "http://website.com/image.png",
        thumbnailUrl: "http://website.com/image_thump.png",
        name: "Юбка из кожи",
        description: "Описание данного товара",
        manufacturer: "Gucci",
        category: ['Одежда','Юбки','Мини'],
        currency: "RUB",
        unitPrice: 12990,
        unitSalePrice: 10990,
        skuCode: 'TBL6065RW'
      },
      ...
    ],
    sortBy: "price_asc",
    resultCount: 20,
    pagesCount: 13,
    currentPage: 2,
    layout: "grid"
  },
  ...
}
```


### <a name="1"></a>page
------
В объекте `digitalData.page` необходимо объявить и заполнить только 2 переменные. Все остальные переменные автоматически заполнит DigitalDataManager.

[Подробнее об объекте **page**](/digitaldata/page)

Пример заполнения:
```javascript
  window.digitalData = {
    ...,
    page: {
      type: 'listing',
      category: 'Category Listing'
    },
    ...
  }
```

>На сайте может быть несколько разных видов листингов: новинки, товары со скидкой, товары конкретного бренда и так далее. Используйте переменную `page.category` для разделения таких списков: 'New Arrivals Listing', 'Sales Listing', 'Brand Listing'...

### <a name="2"></a>website
------
В объекте `digitalData.website` необходимо объявить и заполнить только 6 переменных. Обязательными к заполнению являются только 3: `website.type`, `website.currency`, `website.environment`. Остальные переменные зависят от особенностей вашего сайта.

[Подробнее об объекте **website**](/digitaldata/website)

Пример заполнения:
```javascript
  window.digitalData = {
    ...,
    website: {
      region: "Москва",
      regionId: "12",
      type: "desktop",
      language: "ru",
      currency: "RUB",
      environment: "production"
    },
    ...
  }
```

### <a name="3"></a>user
------
Состав объекта `digitalData.user` сильно зависит от требований проекта. Мы рекомендуем заполнять как минимум следующие переменные: `userId`, `user.email`, `user.isLoggedIn`, `user.firstName`, `user.isSubscribed`

>Если у вас нет информации о конкретном свойстве посетители - не объявляйте переменную. Например: вы не знает подписан или нет посетитель на email-рассылку. **Правильно**: не объявлять переменную `digitalData.user.isSubscribed`, **Неправильно**: объявить переменную и присвоить ей значение FALSE.

>Даже если посетитель сейчас не авторизован, но был авторизован в прошлом, передавайте информацию о нем в объект `digitalData.user`. Это поможет при таргетировании кампаний персонализации и в управлении рекламными системами.

[Подробнее об объекте **user**](/digitaldata/user)

Пример заполнения:
```javascript
window.digitalData = {
  ...,
  user: {
    firstName: "John",
    userId: "4638mn1",
    email: "jdoe@example.com",
    isLoggedIn: true,
    isSubscribed: false
  },
  ...
}
```

### <a name="4"></a>cart
------
Объект `digitalData.cart` должен быть объявлен и заполнен при загрузке каждой страницы сайта.

>Если корзина посетителя сайта пуста, заполните объект так, как описано в [справке](/digitaldata/cart#0).

[Подробнее об объекте **cart**](/digitaldata/cart)

Пример заполнения:
```javascript
window.digitalData = {
  ...,
  cart: {
    id: "CART2203",
    currency: "RUB",
    subtotal: 25000,
    total: 26000,
    lineItems: [
      ...,
      {
        product: {
          id: "1234567890",
          url: "http://website.com/product.html",
          imageUrl: "http://website.com/image.png",
          thumbnailUrl: "http://website.com/image_thump.png",
          name: "Ботинки Timberland",
          description: "Описание данного товара",
          manufacturer: "Timberland",
          category: ["Обувь","Ботинки"],
          currency: "RUB",
          unitPrice: 12990,
          unitSalePrice: 10990,
          skuCode: "TBL6065RW"
        },
        quantity: 2,
        subtotal: 10990,
      },
      ...
    ]
  },
  ...
}
```

### <a name="5"></a>version
------
Переменная `digitalData.version` должна быть объявлена и заполнена при загрузке каждой страницы сайта.

[Подробнее об объекте **cart**](/digitaldata/standard-version)

Пример заполнения:
```javascript
window.digitalData = {
  ...,
  version: '1.1.2',
  ...
}
```

## Необязательные объекты

### <a name="6"></a>campaigns
------
Массив `digitalData.campaigns` должен быть объявлен и заполнен, если на загружаемой странице есть баннеры, эффективность которых вы планируете отслеживать.

[Подробнее о массиве **campaigns**](/digitaldata/campaigns)

Пример заполнения:
```javascript
window.digitalData = {
  ...,
  campaigns: [
    ...,
    {
      id: "PROMO124",
      name: "Новинки сезона осень/зима",
      description: "1500 новых моделей",
      category: "Баннер",
      subcategory: "Новинки",
      design: "600x120",
      position: "left"
    },
    ...
  ],
  ...
}
```

### <a name="7"></a>recommendation
------
Массив `digitalData.recommendation` должен быть объявлен и заполнен, если на загружаемой странице хотя бы 1 список рекомендуемых товаров.

> На странице с листингом товаров может присутствовать список рекомендаций, например: список недавно просмотренных товаров. 

[Подробнее о массиве **recommendation**](/digitaldata/recommendation)

Пример заполнения:
```javascript
window.digitalData = {
  ...,
  recommendation: [
    ...,
    {
      listName: "Список недавно просмотренных товаров",
      listId: "recentlyViewed",
      items: [
        ...,
        {
          id: "1234567890",
          url: "http://website.com/product.html",
          imageUrl: "http://website.com/image.png",
          thumbnailUrl: "http://website.com/image_thump.png",
          name: "Ботинки Timberland",
          description: "Описание данного товара",
          manufacturer: "Timberland",
          category: ["Обувь","Ботинки"],
          currency: "RUB",
          unitPrice: 12990,
          unitSalePrice: 10990,
          skuCode: "TBL6065RW",
        },
        ...
      ]
    },
    ...
  ],
  ...
}
```

### <a name="8"></a>Объект целиком
------
В итоге, ваш код будет похож на:
```javascript
window.digitalData = {
  listing: {
    listName: "category",
    listId: "main",
    categoryId: "125656",
    category: ['Одежда','Юбки','Мини'],
    items: [
      {
        id: "1234567890",
        url: "http://website.com/product.html",
        imageUrl: "http://website.com/image.png",
        thumbnailUrl: "http://website.com/image_thump.png",
        name: "Юбка из кожи",
        description: "Описание данного товара",
        manufacturer: "Gucci",
        category: ['Одежда','Юбки','Мини'],
        currency: "RUB",
        unitPrice: 12990,
        unitSalePrice: 10990,
        skuCode: 'TBL6065RW'
      }
    ],
    sortBy: "price_asc",
    resultCount: 20,
    pagesCount: 13,
    currentPage: 2,
    layout: "grid"
  },
  page: {
    type: 'listing',
    category: 'Category Listing'
  },
  website: {
    type: "desktop",
    currency: "RUB",
    environment: "production"
  },
  user: {
    firstName: "John",
    userId: "4638mn1",
    email: "jdoe@example.com",
    isLoggedIn: true,
    isSubscribed: false
  },
  cart: {
    id: "CART2203",
    currency: "RUB",
    subtotal: 21980,
    total: 22280,
    lineItems: [
      {
        product: {
          id: "1234567890",
          url: "http://website.com/product.html",
          imageUrl: "http://website.com/image.png",
          thumbnailUrl: "http://website.com/image_thump.png",
          name: "Ботинки Timberland",
          description: "Описание данного товара",
          manufacturer: "Timberland",
          category: ["Обувь","Ботинки"],
          currency: "RUB",
          unitPrice: 12990,
          unitSalePrice: 10990,
          skuCode: "TBL6065RW",
        },
        quantity: 2,
        subtotal: 10990
      }
    ]
  },
  version: '1.1.2',
  campaigns: [
    {
      id: "PROMO124",
      name: "Новинки сезона осень/зима",
      description: "1500 новых моделей",
      category: "Баннер",
      subcategory: "Новинки",
      design: "600x120",
      position: "left"
    }
  ],
  recommendation: [
    {
      listName: "Список недавно просмотренных товаров",
      listId: "recentlyViewed",
      items: [
        {
          id: "1234567890",
          url: "http://website.com/product.html",
          imageUrl: "http://website.com/image.png",
          thumbnailUrl: "http://website.com/image_thump.png",
          name: "Ботинки Timberland",
          description: "Описание данного товара",
          manufacturer: "Timberland",
          category: ["Обувь","Ботинки"],
          currency: "RUB",
          unitPrice: 12990,
          unitSalePrice: 10990,
          skuCode: "TBL6065RW",
        }
      ]
    }
  ]
}
/* Здесь должен идти сниппет инициализации библиотеки DigitalDataManage */
```

>Для удобства мы не стали перечислять повторяющиеся элементы массивов recommendation, items, campaigns, lineItems, а привели по одному примеру.