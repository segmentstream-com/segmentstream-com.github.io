---
layout: page
section: events
title: "Viewed Product Detail"
date: 2017-08-16 12:00:00
order: 2
---
`Viewed Product Detail` - это событие, которое должно быть добавлено в `digitalData.events` в случае загрузки страницы с детальным описанием товара, или загрузки попапа с быстрым просмотром товара.

#### Из кода сайта на странице товара
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Detail'
});
```

#### Из кода сайта при AJAX запросе (быстрый просмотр)
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Detail',
  product: {...}
});
```
> Подробное описание объекта product смотрите в разделе для разработчиков.

#### Из интерфейса DDManager
**Триггер**: событие `Viewed Page`,

**Функция, которая возвращает объект события**:

```javascript
if (this.digitalData('page.type') === 'product') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Detail'
  };
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
* Segmento
* Yandex Metrica
* Google Analytics (Enhanced Ecommerce)