---
layout: page
section: eventsRU
title: "Viewed Experiment"
order: 2
---
`Viewed Experiment` - это событие, которое должно быть добавлено в `digitalData.events` в момент попадания пользователя одну из веток сплит-теста.

### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Viewed Experiment',
  experiment: {
    id: "27fbe483-77bf-4949-b6f1-135806cc995c",
    name: "Тест вида продуктовой карточки",
    variationId: 1,
    variationName: "Увеличенная картинка продукта"
  }
})
```
> Состав объекта события зависит от системы проведения экспериментов. Выше приведен пример события для системы Driveback Experiments.

> Если вы хотите отслеживать результаты эксперимента в Google Analytics, добавьте в объект события переменные: category, action, label.

### Из интерфейса SegmentStream
**Триггер**: событие `Viewed Cart`,

**Функция, которая возвращает объект события**:

```javascript
if(_digitalData('user.abGroup') === 1) {
  return {
    name: 'Viewed Experiment',
    experiment: {
      id: "27fbe483-77bf-4949-b6f1-135806cc995c",
      name: "Тест рекомендаций в корзине",
      variationId: 1,
      variationName: "Новый алгоритм ранжирования товаров"
    }
  };
} else {
  return {
    name: 'Viewed Experiment',
    experiment: {
      id: "27fbe483-77bf-4949-b6f1-135806cc995c",
      name: "Тест рекомендаций в корзине",
      variationId: 2,
      variationName: "Стандартный алгоритм ранжирования товаров"
    }
  };
}
```

### Необходимо для работы интеграций:
* Driveback
