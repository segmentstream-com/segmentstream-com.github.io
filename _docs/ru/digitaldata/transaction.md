---
layout: page
section: digitalDataRU
title: "transaction"
order: 1
---

Объект `digitalData.transaction` содержит в себе переменные, которые описывают номер, состав и сумму заказа, условия оплаты и доставки.

>Объект `transaction` должен появляться только на странице "Спасибо за покупку" (`page.type`='confirmation') или в составе события ["Completed Transaction"](/events/completed-transaction).

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#1">transaction.orderId</a></li>
  <li><a href="#2">transaction.isReturning</a></li>
  <li><a href="#4">transaction.isFirst</a></li>
  <li><a href="#4_1">transaction.contactInfo</a></li>
  <li><a href="#5">transaction.currency</a></li>
  <li><a href="#6">transaction.subtotal</a></li>
  <li><a href="#7">transaction.total</a></li>
  <li><a href="#8">transaction.lineItems</a></li>
  <li><a href="#10">transaction.vouchers</a></li>
  <li><a href="#11">transaction.voucherDiscount</a></li>
  <li><a href="#12">transaction.shippingMethod</a></li>
  <li><a href="#13">transaction.shippingCost</a></li>
  <li><a href="#14">transaction.paymentMethod</a></li>
  <li><a href="#15">transaction.tax</a></li>
</ul>



### <a name="0"></a>Введение
------
Объект `digitalData.transaction` должен быть объявлен и заполнен в исходном коде страницы "Спасибо за покупку". Состав объекта практически полностью совпадает с составом объекта [`digitalData.cart`](/digitaldata/cart).

Пример заполнения:
```javascript
digitalData.transaction: {
  orderId: "QA-123456",
  cartId: "CART2203",
  isFirst: true,
  isReturning: false

  //ниже идут переменные из объекта digitalData.cart
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
      subtotal: 10990,
      shippingMethod: "Почта России",
      shippingCost: 800
    },
    {
      product: {/*все переменные объекта product*/},
      quantity: 1,
      subtotal: 3200,
      shippingMethod: "Самовывоз",
      shippingCost: 0
    },
    ...
  ]
}
```

>Если ваш сайт генерирует под каждую страницу подтверждения заказа уникальный URL вида https://site.com/order?id=123456, убедитесь, что при загрузке данного URL'а из другого браузера, информация о транзакции не добавляется в объект `digitalData`

### <a name="1"></a>transaction.orderId
------
Тип данных: строка.

`transaction.orderId` - **обязательная** переменная, которая содержит в себе уникальный идентификатор заказа.

### <a name="2"></a>transaction.isReturning
------
Тип данных: boolean.

`transaction.isReturning` - **обязательная** переменная, которая содержит в себе false - если пользователь только совершил заказ и впервые видит страницу подтверждения. True - если пользователь совершил заказ ранее, а сейчас вернулся, чтобы повторно просмотреть заказ или отследить его статус.


### <a name="4"></a>transaction.isFirst
------
Тип данных: boolean.

`transaction.isFirst` - переменная, которая содержит в себе true - если пользователь никогда не покупал ранее, и это его первая покупка. False - если пользовать уже покупал ранее.

### <a name="4_1"></a>transaction.contactInfo
------
Тип данных: object.

`transaction.contactInfo` - переменная, которая содержит в себе контактные данные получателя заказа. Например если пользователь оформил заказ и оставил имя, телефон и email в форме чекаута, то переменная будет выглядеть так:

```javascript
digitalData.transaction: {
  contactInfo: {
    firstName: 'John',
    phone: '89991231212',
    email: 'john@driveback.ru'
  },
  //...остальные данные по заказу
}
```

### <a name="5"></a>transaction.currency
------
Тип данных: строка.

`transaction.currency` - **обязательная** переменная, которая содержит в себе валюту корзины в формате ISO 4217 (USD, EUR, RUB).

### <a name="6"></a>transaction.subtotal
------
Тип данных: число.

`transaction.subtotal` - **обязательная** переменная, которая содержит в себе суммарную стоимость всех товаров, добавленных в корзину. `transaction.subtotal` не включает доставку и скидки, примененные к корзине.

>Включает скидки примененные к конкретным товарам, например сезонные скидки.

### <a name="7"></a>transaction.total
------
Тип данных: число.

`transaction.total` - **обязательная** переменная, которая содержит в себе суммарную стоимость всех товаров, добавленных в корзину, включая налог, скидки и стоимость доставки.

### <a name="8"></a>transaction.lineItems
------
Тип данных: массив объектов.

`transaction.lineItems` - **обязательная** переменная, которая содержит в себе массив объектов. Каждый объект описывает добавленный в корзину товар: сам товар, количество единиц товара и некоторые другие параметры.

Пример заполнения массива **transaction.lineItems** объектами:
```javascript
window.digitalData = {
  ...,
  transaction: {
    ...,
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
        subtotal: 10990,
        shippingMethod: "Почта России",
        shippingCost: 800
      },
      {
        product: {/*все переменные объекта product*/},
        quantity: 1,
        subtotal: 3200,
        shippingMethod: "Самовывоз",
        shippingCost: 0
      }
    ],
    ...
  },
  ...
}
```
где,
 - **product** - объект [product](/digitalData/product/). **Обязательная** переменная
 - **quantity** - число. **Обязательная** переменная, которая содержит в себе количество товаров с определенными `product.id` и `product.skuCode`
  >В корзине может лежать несколько одинаковых товаров с разными вариациями, например 2 пары одинаковых ботинок с разным размером. Каждая вариация должна быть описана уникальным объектом массива `lineItems`
 - **subtotal** - число. Суммарная стоимость всех элементов lineItems, которая вычисляется как product.unitSalePrice * quantity.
 - **totalDiscount** - число. Суммарная скидка для текущего элемента массива lineItems от примененных купонов к конкретному товару или же от акций, связанных с количеством покупаемых товаров, вроде "купи 2, получи 1 бесплатно".
 - **shippingMethod** - строка. Необязательная переменная. Обычно shippingMethod определяется для корзины, однако если предоставляется возможность выбора различных методов доставки для разных товаров, данное свойство может быть использовано в элементе массива lineItems
 - **shippingCost** - число. Необязательная переменная. Используете в случае, если применима логика, описанная для shippingMethod.

### <a name="10"></a>transaction.vouchers
------
Тип данных: массив строк.

`transaction.vouchers` - переменная, которая содержит в себе массив промокодов, примененных к корзине.

>Если к корзине был применен всего один промокод, переменная примет значение массива, состоящего из одной строки

### <a name="11"></a>transaction.voucherDiscount
------
Тип данных: число.

`transaction.voucherDiscount` - переменная, которая содержит в себе суммарную скидку после применения всех промокодов в валюте корзины.

### <a name="12"></a>transaction.shippingMethod
------
Тип данных: строка.

`transaction.shippingMethod` - переменная, которая содержит в себе способ доставки, выбранный в процессе оформления заказа.

### <a name="13"></a>transaction.shippingCost
------
Тип данных: число.

`transaction.shippingCost` - переменная, которая содержит в себе стоимость доставки для выбранного способа.

### <a name="14"></a>transaction.paymentMethod
------
Тип данных: строка.

`transaction.paymentMethod` - переменная, которая содержит в себе способ оплаты заказа.

### <a name="15"></a>transaction.tax
------
Тип данных: число.

`transaction.tax` - переменная, которая содержит в себе сумму всех налогов, связанных с товарами корзины.
