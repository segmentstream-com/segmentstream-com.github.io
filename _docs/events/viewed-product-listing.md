---
layout: page
section: events
title: "Viewed Product Listing"
date: 2017-06-05 12:00:00
order: 2
---
`Viewed Product Listing` - это событие, которое должно быть добавлено в `digitalData.events` в случае загрузки страницы с листингом товаров, кроме страницы результатов поиска.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Listing'
})
```


#### Из интерфейса DDManager
**Триггер**: событие `Viewed Page`,

**Функция, которая возвращает объект события**:

```javascript
if (_digitalData('page.type') === 'listing') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Listing'
  };
}
```

#### Необходимо для работы интеграций:
* Adwords
* Criteo
* MyTarget
* Retail Rocket
* RTB House
* Sociomantic
* Segmento