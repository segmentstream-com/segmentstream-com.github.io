---
layout: page
section: digitaldataRU
title: "events"
order: 1
---

Массив `digitalData.events` содержит в себе список объектов. Каждый объект описывает событие, произошедшее на сайте с момента загрузки страницы до следующей загрузки: 'Просмотр страницы', 'Просмотр карточки товара', 'Клик по баннеру', 'Добавление в корзину', 'Покупка' и многие другие.

>Каждый объект массива `digitalData.events` имеет только одно обязательное поле: `name`. Мы настоятельно рекомендуем придерживаться наших [правил именования событий](/ru/for-developer/naming#2).

Пример заполнения:
```javascript
digitalData.events: [
  { //Событие добавления товара в корзину
    name: "Added Product",
    category: "Ecommerce",
    product: {/*все переменные объекта product*/}
  },
  { //Событие подписки на email-рассылку
    name: "Subscribed",
    category: "Email",
    user: {
      email: "johndoe@example.com"
    }
  }
]
```

Добавить событие в массив `digitalData.events` возможно двумя способами:
 - Из кода сайта, используя стандартный метод `array.push()`:
  ```javascript
digitalData.events.push({
  name: "Added Product",
  category: "Ecommerce",
  product: {/*все переменные объекта product*/}
});
  ```
 - Из интерфейса админ-панели на основе других других событий и содержания объекта `digitalData`

>Более подробно работа с событиями описана в разделе "для аналитика": [События](/ru/for-analyst/events)
