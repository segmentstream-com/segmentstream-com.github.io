---
layout: page
section: eventsRU
title: "Viewed Campaign"
order: 2
---
`Viewed Campaign` - это событие, которое должно быть добавлено в digitalData.events при попадании баннера в поле зрения посетителя.
>Важно! SegmentStream имеет встроенный триггер "Показ", который срабатывает в случае, если в поле зрения посетителя попало 75% отслеживаемого элемента.

#### Из кода сайта / при использовании AJAX
не рекомендуем добавлять событие `Viewed Campaign` из кода сайта самостоятельно.

>Важно! Баннеры должны быть размечены классом `ddl_campaign`. Также они должны иметь дата-атрибут `data-campaign-id`. Подробнее читайте в разделе HTML-разметки контента страниц.

**Триггер**: событие `Просмотр`,

**CSS селектор**: `.ddl_campaign`,

**Функция, которая возвращает объект события**:
```javascript
var viewedCampaigns = [];
for (var i = 0; i < elements.length; i++) {
	var campaignId = elements[i].getAttribute('data-campaign-id');
  viewedCampaigns.push(campaignId);
}
return {
	name: 'Viewed Campaign',
  category: 'Promo',
  campaigns: viewedCampaigns
};
```

#### Необходимо для работы интеграций:
* Google Analytics (Enhanced Ecommerce)
