---
layout: page
section: eventsRU
title: "Subscribed"
order: 2
---
`Subscribed` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об удачной подписке. Клиент может подписаться в разных формах или кампаниях, например: "форма в футере" или "всплывающее окно". Также клиент может подписаться в разных каналах связи, например: email, телефон.

### Из кода сайта / при использовании AJAX

Простой пример:
```javascript
digitalData.events.push({
  name: 'Subscribed',
  user: {
    email: 'users.email@mail.ru',
  }
});
```

Расширенный пример:
```javascript
digitalData.events.push({
  category: 'Subscription',
  name: 'Subscribed',
  user: {
    firstName: 'Имя',
    email: 'users.email@mail.ru',   //Зависит от типа подписки
    phone: '+79161110022',          //Зависит от типа подписки
    subscriptions: [
      {
        type: 'email',            //Канал подписки
        topic: 'Новости'          //Тема рассылок
      },
      {
        type: 'email',
        topic: 'Акции'
      },
      {
        type: 'sms',
        topic: 'Сезонные скидки'
      }
    ],
  },
  campaign: {                       //Данный объект нужен для сохранения формы, в которой подписался юзер
    id: '1233214',                  //Необязательное поле
    name: 'Форма подписки в Футере'
  }
});
```


### Из интерфейса SegmentStream
Событие `Subscribed` невозможно создать на основе встроенных триггеров SegmentStream. Информация об успешной подписке должна вернуться с сервера.

### Необходимо для работы интеграций:
* Criteo
* Facebook
* Retail Rocket
* Driveback
* Sociomantic
* Mindbox
