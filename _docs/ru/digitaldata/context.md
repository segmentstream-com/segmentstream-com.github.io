---
layout: page
section: digitaldataRU
title: "context"
order: 1
---

Объект `digitalData.context` содержит в себе переменные, которые описывают окружение и контекст текущего посещения.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li>Переменные:</li>
  <ul>
    <li><a href="#1">context.ip</a></li>
    <li><a href="#2">context.userAgent</a></li>
    <li><a href="#3">context.os</a></li>
    <li><a href="#4">context.location</a></li>
    <li><a href="#5">context.device</a></li>
    <li><a href="#6">context.browser</a></li>
    <li><a href="#7">context.campaign</a></li>
  </ul>
</ul>

### <a name="0"></a>Введение
------
Объект `digitalData.context` должен быть объявлен и заполнен в исходном коде каждой страницы.

>Все переменные объекта `digitalData.context` заполняются автоматически библиотекой SegmentStream. С вашей стороны потребуется только объявить объект и заполнить значение переменной `digitalData.context.ip`.

Пример заполнения для URL 'http://website.com/?utm_campaign=sale_05_06_2016&utm_medium=cpc&utm_source=criteo':
```javascript
digitalData.context: {
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
  campaign: {
    name: "sale_05_06_2016",
    medium: "cpc",
    source: "criteo"
  },
  ip: "46.250.135.5",
  os: {
    name: "Mac OS",
    version: "10.13.2"
  },
  location: {
    city: "Москва",
    country: "RU",
    region: "Москва"
  },
  device: {
    type: "desktop"
  },
  browser: {
    major: "63",
    name: "Chrome",
    version: "63.0.3239.132"
  }
}
```

### <a name="1"></a>context.ip
------
Тип данных: строка.

`context.ip` - **необязательная** переменная, которая содержит в себе ip-адрес посетителя.

### <a name="2"></a>context.userAgent
------
Тип данных: строка. Заполняется автоматически.

`context.userAgent` - содержит в себе информацию о браузере и системе посетителя.

### <a name="3"></a>context.os
------
Тип данных: объект. Заполняется автоматически.

`context.os` - содержит в себе объект, который описывает операционную систему посетителя.

Путь|Тип Данных|Описание
---|---|---
`context.os.name`|Строка|Название операционной системы
`context.os.version`|Строка|Версия операционной системы

### <a name="4"></a>context.location
------
Тип данных: объект. Заполняется автоматически.

`context.location` - содержит в себе объект, который описывает регион операционной системы посетителя.

Путь|Тип Данных|Описание
---|---|---
`context.location.city`|Строка|Город посетителя
`context.location.country`|Строка|Страна посетителя
`context.location.region`|Строка|Регион/Область/Штат посетителя

### <a name="5"></a>context.device
------
Тип данных: объект. Заполняется автоматически.

`context.device` - содержит в себе объект, который описывает устройство посетителя.

Путь|Тип Данных|Описание
---|---|---
`context.device.model`|Строка|Модель устройства. Неактуально для "Десктопов".
`context.device.type`|Строка|Тип устройства: "desktop", "mobile", "tablet"
`context.device.vendor`|Строка|Производитель устройства. Неактуально для "Десктопов".

### <a name="6"></a>context.browser
------
Тип данных: объект. Заполняется автоматически.

`context.browser` - содержит в себе объект, который описывает браузер посетителя.

Путь|Тип Данных|Описание
---|---|---
`context.browser.major`|Строка|Краткая информация о версии браузера
`context.browser.name`|Строка|Название браузера
`context.browser.version`|Строка|Полная информация о версии браузера

### <a name="7"></a>context.campaign
------
Тип данных: объект. Заполняется автоматически.

`context.campaign` - содержит в себе объект, который описывает источник посещения, включая канал, название рекламной кампании и другие данные.

>SegmentStream распознает utm_метки из URL-адреса загруженной страницы, формирует объект `digital.context.campaign` и сохраняет эту информацию в localStorage браузера посетителя сайта на 90 дней или до момента наступления события "Completed Transaction".

Путь|Тип Данных|Описание
---|---|---
`context.campaign.name`|Строка|Название рекламной кампании. Соответствует метке utm_campaign.
`context.campaign.medium`|Строка|Канал рекламы. Соответствует метке utm_medium.
`context.campaign.source`|Строка|Рекламная площадка. Соответствует метке utm_source.
`context.campaign.term`|Строка|Ключевая фраза. Соответствует метке utm_term.
`context.campaign.content`|Строка|Содержание рекламного объявления. Соответствует метке utm_content.

>Также в объект `context.campaign` сохраняются идентификаторы партнеров, приводящие на сайт трафик из партнерских сетей, например 'admitad_uid'.
