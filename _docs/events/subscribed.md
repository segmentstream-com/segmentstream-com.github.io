---
layout: page
section: events
title: "Subscribed"
date: 2017-08-16 12:00:00
order: 2
---
`Subscribed` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об удачной подписке.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Subscribed',
  user: {
    firstName: 'Имя',
    email: 'users.email@mail.ru' //обязательно
  }
})
```


#### Из интерфейса DDManager
Событие `Subscribed` невозможно создать на основе встроенных триггеров DDManager. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Criteo
* Facebook
* Retail Rocket
* Driveback
* Sociomantic