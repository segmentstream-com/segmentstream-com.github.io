---
layout: page
section: eventsRU
title: "Searched Products"
order: 2
---
`Searched Products` - это событие, которое должно быть добавлено в `digitalData.events` в случае загрузки страницы с результатом поиска.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Searched Products'
})
```


#### Из интерфейса SegmentStream
**Триггер**: событие `Viewed Page`
```javascript
if (this.digitalData('page.type') === 'search') {
  return { name: 'Searched Products' };
}
```

#### Необходимо для работы интеграций:
* Adwords
* Criteo
* Facebook
* Retail Rocket
* RTB House
* Sociomantic
