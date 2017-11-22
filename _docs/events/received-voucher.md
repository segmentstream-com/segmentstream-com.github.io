---
layout: page
section: events
title: "Received Voucher"
date: 2017-08-10 12:54:00
order: 100
---
> Необязательное событие. Приведено в качестве примера.

`Received Voucher` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения о получении пользователем купона/промокода.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Received Voucher'
})
```

#### Из интерфейса DDManager
Событие `Received Voucher` невозможно создать на основе встроенных триггеров DDManager. Событие должно быть добавлено из кода.
