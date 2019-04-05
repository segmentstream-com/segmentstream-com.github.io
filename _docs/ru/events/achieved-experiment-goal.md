---
layout: page
section: eventsRU
title: "Achieved Experiment Goal"
order: 2
---
`Achieved Experiment Goal` - это событие, которое должно быть добавлено в `digitalData.events` в случае достижения пользователем цели эксперимента. Это может быть как транзакция, так и добавление товара в корзину или в избранное и т.д.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Achieved Experiment Goal'
});
```


#### Из интерфейса SegmentStream
В случае, если целью эксперимента является одно из уже существующих событий (например Покупка), настройка может быть похожа на:

**Триггер**: событие `Completed Transaction`,

**Функция, которая возвращает объект события**:

```javascript
return { name: 'Achieved Experiment Goal' };
```

#### Необходимо для работы интеграций:
* Driveback Experiments
