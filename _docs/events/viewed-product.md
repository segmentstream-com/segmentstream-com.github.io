---
layout: page
section: events
title: "Viewed Product"
date: 2017-08-16 12:00:00
order: 2
---
`Viewed Product` - это событие, которое должно быть добавлено в `digitalData.events` при попадании в поле зрения посетителя карточки товара в одном из товарных листингов.
>Важно! DigitalDataManager имеет встроенный триггер "Показ", который срабатывает в случае если в поле зрения посетителя попало 75% отслеживаемого элемента.

#### Из кода сайта / при использовании AJAX
не рекомендуем добавлять событие "Viewed Product" из кода сайта самостоятельно.

>Важно! Элементы карточек товаров должны быть размечены классом `ddl_product`. Также они должны иметь дата-атрибуты `data-product-id` и `data-list-id`. Подробнее читайте в разделе HTML-разметки контента страниц.

#### Из интерфейса DDManager
**Триггер**: событие `Просмотр`,

**CSS селектор**: '.ddl_product',

**Функция, которая возвращает объект события**:

```javascript
return {
  name: 'Viewed Product',
  category: 'Ecommerce',
  listItems: elements.map(function(element) {
    return {
      product: element.getAttribute('data-product-id'),
      listId: element.getAttribute('data-list-id')
    };
  })
};
```
>Внимание! Событие `Viewed Product` на любом ecommerce проекте наступает чаще всего. Это может привести к тому, что вы быстро достигните [месячного лимита](https://developers.google.com/analytics/devguides/collection/ios/v3/limits-quotas?hl=ru) по хитам в бесплатной версии Google Analytics. Превышение лимитов может привести к значительной потере данных из-за [сэмплирования на этапе сбора](https://support.google.com/analytics/answer/7367018?hl=ru&ref_topic=2601030)

#### Необходимо для работы интеграций:
* Google Analytics (Enhanced Ecommerce)

