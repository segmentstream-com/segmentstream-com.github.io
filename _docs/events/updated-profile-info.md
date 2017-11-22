---
layout: page
section: events
title: "Updated Profile Info"
date: 2017-08-10 12:54:00
order: 2
---
`Updated Profile Info` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об успешным изменении пользовательских данных.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Updated Profile Info',
  user: {...}
})
```
> В объект user следует передать измененные параметры пользователя.

#### Из интерфейса DDManager
Событие `Updated Profile Info` невозможно создать на основе встроенных триггеров DDManager. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Mindbox