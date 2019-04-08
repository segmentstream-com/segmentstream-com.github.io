---
layout: page
section: ecommerceRU
title: "Главная страница"
date: 2018-02-09 12:00:00
order: 1
---

Ниже приведен пример заполнения слоя данных `digitalData` для главной страницы интернет-магазина.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
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
На главной странице интернет-магазина должны быть объявлены и заполнены следующие объекты:
 - Обязательные:  `page`, `website`, `user`, `cart`, `version`
 - Необязательные (зависит от контента): `campaigns` ,`recommendation`


### <a name="1"></a>page
------
В объекте `digitalData.page` необходимо объявить и заполнить только 2 переменные. Все остальные переменные автоматически заполнит SegmentStream.

[Подробнее об объекте **page**](/ru/digitalData/page)

Пример заполнения:
```javascript
  window.digitalData = {
    ...,
    page: {
      type: 'home',
      category: 'Home Page'
    },
    ...
  }
```

### <a name="2"></a>website
------
В объекте `digitalData.website` необходимо объявить и заполнить только 6 переменных. Обязательными к заполнению являются только 3: `website.type`, `website.currency`, `website.environment`. Остальные переменные зависят от особенностей вашего сайта.

[Подробнее об объекте **website**](/ru/digitalData/website)

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

[Подробнее об объекте **user**](/ru/digitalData/user)

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

>Если корзина посетителя сайта пуста, заполните объект так, как описано в [справке](/ru/digitalData/cart#0).

[Подробнее об объекте **cart**](/ru/digitalData/cart)

Пример заполнения:
```javascript
window.digitalData = {
  ...,
  cart: {
    id: "CART2203",
    currency: "RUB",
    subtotal: 25000,
    vouchers: [
      "MYVOUCHER1"
    ],
    voucherDiscount: 500,
    tax: 0,
    shippingCost: 1500,
    shippingMethod: "Доставка курьером",
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
        shippingMethod: "Почта России",
        shippingCost: 800
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

[Подробнее об объекте **cart**](/ru/digitalData/standard-version)

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

[Подробнее о массиве **campaigns**](/ru/digitalData/campaigns)

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
Массив `digitalData.recommendation` должен быть объявлен и заполнен, если на загружаемой странице хотя бы 1 список товаров.

[Подробнее о массиве **recommendation**](/ru/digitalData/recommendation)

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
  page: {
    type: 'home',
    category: 'Home Page'
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
          skuCode: "TBL6065RW"
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
          skuCode: "TBL6065RW"
        }
      ]
    }
  ]
}
/* Здесь должен идти сниппет инициализации библиотеки DigitalDataManage */
```

>Для удобства мы не стали перечислять повторяющиеся элементы массивов recommendation, items, campaigns, lineItems, а привели по одному примеру.
