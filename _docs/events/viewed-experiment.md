---
layout: page
section: events
title: "Viewed Experiment"
date: 2017-08-10 12:00:00
order: 2
---
`Viewed Experiment` - это событие, которое должно быть добавлено в `digitalData.events` в момент попадания пользователя одну из веток сплит-теста.

#### Из кода сайта / при использовании AJAX
```javascript
digitalData.events.push({
  name: 'Viewed Experiment'
})
```
> Состав объекта события будет зависеть от того, какой системой проведения экспериментов вы пользуетесь.

#### Из интерфейса DDManager
Событие `Viewed Experiment` невозможно создать на основе встроенных триггеров DDManager. Событие должно быть добавлено из кода.

#### Необходимо для работы интеграций:
* Driveback