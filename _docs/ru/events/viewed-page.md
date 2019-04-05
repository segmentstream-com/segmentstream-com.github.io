---
layout: page
section: eventsRU
title: "Viewed Page"
order: 2
---
`Viewed Page` - это базовое событие, которое добавляется в массив `digitalData.events` автоматически в момент загрузки библиотеки SegmentStream. Если ваш сайт использует технологию AJAX, бывает нужно отправить событие Viewed Page без полной перезагрузки страницы. Для этого вам из кода сайта нужно добавить событие в массив `digitalData.events`:
#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Viewed Page'
});
```
#### Из интерфейса SegmentStream
> Событие `Viewed Page` создавать не нужно. Вы всегда сможете использовать в качестве триггера это событие при создании других событий.

#### Необходимо для работы интеграций:
* Google Analytics
* Yandex Metrica
