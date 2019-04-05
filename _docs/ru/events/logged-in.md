---
layout: page
section: eventsRU
title: "Logged In"
order: 2
---
`Logged In` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об удачной авторизации пользователя.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Logged In'
})
```

#### Из интерфейса SegmentStream
Событие `Logged In` невозможно создать на основе встроенных триггеров SegmentStream. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Mindbox
