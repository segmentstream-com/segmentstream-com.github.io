---
layout: page
section: eventsRU
title: "Updated Profile Info"
order: 2
---
`Updated Profile Info` - это событие, которое должно быть добавлено в `digitalData.events` в случае возврата с сервера сообщения об успешным изменении пользовательских данных.

### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Updated Profile Info',
  user: {
    firstName: 'Имя',
    phone: '+79161110022',
    ...,
    ...,
    subscriptions: [
        {
          type: 'email',
          topic: 'Акции',
          isSubscribed: true, // подписка
        },
        {
          type: 'email',
          topic: 'Новости',
          isSubscribed: false, // отписка
        },
        {
          type: 'sms',
          topic: 'Сезонные скидки',
          isSubscribed: true, // подписка
        }
      ]
  }
})
```
> В объект user следует передать измененные параметры пользователя.

### Из интерфейса SegmentStream
Событие `Updated Profile Info` невозможно создать на основе встроенных триггеров SegmentStream. Событие должно быть добавлено из кода.

### Необходимо для работы интеграций:
* [Mindbox](/integrations/mindbox)
