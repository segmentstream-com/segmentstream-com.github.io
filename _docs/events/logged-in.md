---
layout: page
section: events
title: "Logged In"
date: 2017-08-10 12:54:00
order: 2
---
`Logged In` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об удачной авторизации пользователя.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Logged In'
})
```

#### Из интерфейса DDManager
Событие `Logged In` невозможно создать на основе встроенных триггеров DDManager. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Mindbox