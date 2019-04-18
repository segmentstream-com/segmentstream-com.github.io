---
layout: page
section: eventsRU
title: "Logged In"
order: 2
---
`Logged In` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об удачной авторизации пользователя.

#### Из кода сайта
```javascript
digitalData.events.push({
  name: 'Logged In'
})
```

#### При использовании AJAX / На SPA сайте
```javascript
digitalData.events.push({
  name: 'Logged In',
  user: {
    firstName: 'Имя',
    email: 'users.email@mail.ru' //обязательно
  }
})
```
Узнать больше об объекте [user](/ru/digitaldata/user).

#### Из интерфейса SegmentStream
Событие `Logged In` невозможно создать на основе встроенных триггеров SegmentStream. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Mindbox
