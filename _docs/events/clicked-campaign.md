---
layout: page
section: events
title: "Clicked Campaign"
date: 2017-08-16 12:00:00
order: 2
---
`Clicked Campaign` - это событие, которое должно быть добавлено в digitalData.events при клике пользователем на баннер.

> Важно! Ссылки карточек товаров должны быть размечены классом `ddl_campaign_link`. Также ссылки должны иметь дата-атрибут `data-campaign-id`. Подробнее читайте в разделе HTML-разметки контента страниц.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Clicked Campaign',
  listItem: {
    product: 'productId',
    listId: 'listId'
  }
});
```

#### Из интерфейса DDManager
**Триггер**: `клик`,

**CSS селектор**: `.ddl_campaign_link`,

**Функция, которая возвращает объект события**:

```javascript
var campaignId = element.getAttribute('data-campaign-id');
return {
  name: 'Clicked Campaign',
  category: 'Promo',
  campaign: campaignId
};
```

#### Необходимо для работы интеграций:
* Google Analytics (Enhanced Ecommerce)