---
layout: page
section: events
title: "Searched Products"
date: 2017-08-16 12:00:00
order: 2
---
`Searched Products` - это событие, которое должно быть добавлено в `digitalData.events` в случае загрузки страницы с результатом поиска.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Searched Products'
})
```


#### Из интерфейса DDManager
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
* MyTarget
* Retail Rocket
* RTB House
* Sociomantic