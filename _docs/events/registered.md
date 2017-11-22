---
layout: page
section: events
title: "Registered"
date: 2017-08-10 12:54:00
order: 2
---
`Registered` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об удачной регистрации.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Registered',
  user: {
    firstName: 'Имя',
    email: 'users.email@mail.ru' //обязательно
  }
})
```

#### Из интерфейса DDManager
Событие `Registered` невозможно создать на основе встроенных триггеров DDManager. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Criteo
* Facebook
* Retail Rocket
* Driveback
* Sociomantic