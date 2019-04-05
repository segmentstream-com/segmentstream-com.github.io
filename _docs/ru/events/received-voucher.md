---
layout: page
section: eventsRU
title: "Received Voucher"
order: 2
---
> Необязательное событие. Приведено в качестве примера.

`Received Voucher` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения о получении пользователем купона/промокода.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Received Voucher'
})
```

#### Из интерфейса SegmentStream
Событие `Received Voucher` невозможно создать на основе встроенных триггеров SegmentStream. Событие должно быть добавлено из кода.
