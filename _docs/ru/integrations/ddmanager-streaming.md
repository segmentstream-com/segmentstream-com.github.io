---
layout: page
section: integrationsRU
title: "SegmentStream Streaming"
order: 1
---

Встроенный модуль "Streaming" позволяет собирать сырые данные в Google BigQuery. После подключения модуля стриминга SegmentStream начинает отправлять все данные о поведении ваших пользователей в облачное хранилище данных BigQuery. Формат хранения данных полностью соответствует стандарту DigitalData.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#1">Настройка BigQuery</a></li>
  <li><a href="#1_1">Google Cloud project ID</a></li>
  <li><a href="#1_2">BigQuery dataset name</a></li>
  <li><a href="#1_3">UTC offset</a></li>
  <li><a href="#2">Кастомные параметры</a></li>
  <li><a href="#3">Кастомные метрики</a></li>
  <li><a href="#4">Схема данных</a></li>
</ul>

### <a name="0"></a>Введение
Чтобы настроить интеграцию с DDM Streaming:
1. Создайте аккаунт в Google BigQuery и настройте права и роли.
2. Авторизуйтесь на сайте [segmentstream.com](https://admin.segmentstream.com/) и перейдите к панели управления интеграциями
3. Войдите на вкладку "Интеграции" и кликните по блоку с логотипом SegmentStream Streaming.
4. В открывшейся панели - настройте интеграцию.

### <a name="1"></a>Настройка BigQuery
------
1. Создайте аккаунт в системе [Google Cloud Platform](https://cloud.google.com/). На 10.10.2017 google дает 300$ на использование системы в течение 3-х месяцев.
2. Выберите проект Google Cloud или создайте новый
![](/img/integrations.ddmstreaming.2.png)
3. Активируйте BigQuery API для проекта
![](/img/integrations.ddmstreaming.3.png)
![](/img/integrations.ddmstreaming.4.png)
![](/img/integrations.ddmstreaming.5.png)
4. Откройте левое меню и нажмите IAM & admin. Выберите IAM в списке.
![](/img/integrations.ddmstreaming.16.png)
5. В верхнем меню нажмите **+ADD**
![](/img/integrations.ddmstreaming.17.png)
6. Добавьте `ddmanager@ddm-streaming.iam.gserviceaccount.com` в поле New Members. Добавьте 2 роли: `BigQuery Data Owner` и `BigQuery User`. Нажмите Save.
![](/img/integrations.ddmstreaming.18.png)

На этом настройка аккаунта BigQuery завершена. Теперь можно переходить к настройке стриминга в **панели SegmentStream**.
![](/img/integrations.ddmstreaming.1_1.png)

### <a name="1_1"></a>Google Cloud project ID
Введите в поле `Google Cloud project ID` идентификатор проекта в Google Big Query.
Идентификатор проекта проще всего найти на главной странице [google cloud console](https://console.cloud.google.com/):
1. Войдите в консоль и выберете в выпадающем списке необходимый проект
2. Скопируйте Project ID из соответствующего поля виджета `Project info`
![](/img/integrations.ddmstreaming.1_2.png)

### <a name="1_2"></a>BigQuery dataset name
Введите в поле BigQuery DataSet name: `ddmanager_streaming`.
> Рекомендуем использовать имя `ddmanager_streaming`. Если вы хотите, чтобы данные стримились в другой DataSet - укажите его имя вместо `ddmanager_streaming`. Используйте только латинские буквы и нижнее подчеркивание.



### <a name="1_3"></a>UTC offset
------
Выберите часовой пояс. Например, чтобы все отчеты формировались по Московскому времени, выберите "+03:00".


### <a name="2"></a>Кастомные параметры
------
По умолчанию DDMStreaming отправляет определенных набор переменных в BigQuery. Этих переменных достаточно для большинства прикладных задач анализа данных. В случае если вам не достаточно переменных, вы можете вместе с каждым событием отправлять кастомные переменные.

Например:
 - Передать googleClientId для сравнения данных в BigQuery и Google Analytics,
 - Передать признак того, залогинен пользователь или нет,
 - и тд.

Для того, чтобы настроить передачу кастомных параметров (см. скриншот ниже):
1. Придумайте имя параметра, по которому вы хотите строить отчеты в BigQuery
2. Запишите это имя в левом поле настроек кастомных параметров
3. Укажите источник данных:
 - **DigitalData**. Любая переменная, которая содержится в объекте digitalData
 - **Event**. Любая переменная любого события, добавленного в массив `digitalData.events`
 - **Product**. Любая переменная объекта `product`
 4. Укажите в правом поле имя переменной

 ![](/img/integrations.ddmstreaming.1.png)

### <a name="3"></a>Кастомные метрики
------
Аналогично кастомным параметрам SegmentStream умеет передавать кастомные метрики.

> Между метриками и параметрами есть большая разница. Метрика - это количественное значение, число (Целое число, дробное число, время). Параметры - это атрибуты данных. Все метрики (числовые данные) рассчитываются в срезах параметров.

Для того, чтобы настроить передачу кастомных метрик (см. скриншот выше):
1. Придумайте имя метрики, которая будет участвовать в расчетах других метрик в BigQuery
2. Запишите это имя в левом поле настроек кастомных метрик
3. Укажите источник данных:
 - **DigitalData**. Любая переменная, которая содержится в объекте digitalData
 - **Event**. Любая переменная любого события, добавленного в массив `digitalData.events`
 - **Product**. Любая переменная объекта `product`
 4. Укажите в правом поле имя переменной


### <a name="4"></a>Схема данных
------

Имя переменной | Тип Данных | Комментарии
--- | --- | ---
`hitId`|`STRING`|Идентификатор хита
`anonymousId`|`STRING`|Идентификатор анонимного клиента
`emailHash`|`STRING`|Хэш электронного адреса пользователя
`userId`|`STRING`|Идентификатор авторизованного пользователя
`projectId`|`STRING`|Идентификатор проекта
`projectName`|`STRING`|Имя проекта
`receivedAt`|`TIMESTAMP`|Время получения события сервером (UTC)
`sentAt`|`TIMESTAMP`|Время отправки события c клиента (UTC, зависит от времени, установленного на компьютере)
`version`|`INTEGER`|Версия схемы данных
`context`|`RECORD`|Информация о контексте посещения страницы
`context.browser`|`RECORD`|Описание браузера устройства посетителя
`context.browser.major`|`STRING`|Краткая информация о версии браузера
`context.browser.name`|`STRING`|Название браузера
`context.browser.version`|`STRING`|Полная информация о версии браузера
`context.campaign`|`RECORD`|Описание последнего источника трафика из которого был произведен переход на сайт
`context.campaign.content`|`STRING`|Содержание GET-параметра utm_content
`context.campaign.medium`|`STRING`|Содержание GET-параметра utm_medium
`context.campaign.name`|`STRING`|Содержание GET-параметра utm_campaign
`context.campaign.source`|`STRING`|Содержание GET-параметра utm_source
`context.campaign.term`|`STRING`|Содержание GET-параметра utm_term
`context.device`|`RECORD`|Описание устройства посетителя
`context.device.model`|`STRING`|Модель устройства. Неактуально для “Десктопов”.
`context.device.type`|`STRING`|Тип устройства: “desktop”, “mobile”, “tablet”
`context.device.vendor`|`STRING`|Производитель устройства. Неактуально для “Десктопов”.
`context.ip`|`STRING`|`IP-адрес пользователя
`context.location`|`RECORD`|
`context.location.city`|`Строка`|Город посетителя
`context.location.country`|`Строка`|Страна посетителя
`context.location.region`|`Строка`|Регион/Область/Штат посетителя
`context.os`|`RECORD`|Описание операционной системы устройства посетителя
`context.os.name`|`STRING`|Название операционной системы
`context.os.version`|`STRING`|Версия операционной системы
`context.page`|`RECORD`|Описание страницы, на которой произошло событие
`context.page.path`|`STRING`|Путь страницы
`context.page.referrer`|`STRING`|URL страницы, с которой был осуществлен переход на текущую страницу
`context.page.title`|`STRING`|Заголовок страницы
`context.page.url`|`STRING`|URL страницы
`context.screenHeight`|`INTEGER`|Высота экрана устройства посетителя в пикселях
`context.screenWidth`|`INTEGER`|Ширина экрана устройства посетителя в пикселях
`context.userAgent`|`STRING`|Информация о браузере пользователя
`event.campaign`|`RECORD`|Массив маркетинговых кампаний
`event.campaign.category`|`STRING`|Категория кампании
`event.campaign.design`|`STRING`|Дизайн объявления/баннера кампании
`event.campaign.id`|`STRING`|Идентификатор маркетинговой кампании
`event.campaign.name`|`STRING`|Имя маркетинговой кампании
`event.campaign.position`|`STRING`|Месторасположение объявления/баннера кампании
`event.cart`|`RECORD`|Описание корзины
`event.cart.currency`|`STRING`|Валюта приведенной стоимости корзины
`event.cart.id`|`STRING`|Идентификатор корзины
`event.cart.lineItems`|`RECORD`|Описание товаров в корзине и их количество.
`event.cart.lineItems.product`|`RECORD`|Описание товара в позиции корзины
`event.cart.lineItems.product.category`|`STRING`|Иерархия товарных категорий листинга для позиции корзины в виде строки, разделенной "/"
`event.cart.lineItems.product.categoryId`|`STRING`|Идентификатор товарной категории листинга для позиции корзины
`event.cart.lineItems.product.color`|`STRING`|Цвет товара в позиции корзины
`event.cart.lineItems.product.currency`|`STRING`|Валюта товара в позиции корзины
`event.cart.lineItems.product.customDimensions`|`RECORD`|Массив кастомных параметров товара в позиции корзины
`event.cart.lineItems.product.customDimensions.name`|`STRING`|Имя кастомного параметра товара в позиции корзины
`event.cart.lineItems.product.customDimensions.value`|`STRING`|Значение кастомного параметра товара в позиции корзины
`event.cart.lineItems.product.customMetrics`|`RECORD`|Массив кастомных метрик товара в позиции корзины
`event.cart.lineItems.product.customMetrics.name`|`STRING`|Имя кастомной метрики товара в позиции корзины
`event.cart.lineItems.product.customMetrics.value`|`FLOAT`|Значение кастомной метрики товара в позиции корзины
`event.cart.lineItems.product.id`|`STRING`|Идентификатор товара в позиции корзины
`event.cart.lineItems.product.imageUrl`|`STRING`|URL большой картинки товара в позиции корзины
`event.cart.lineItems.product.manufacturer`|`STRING`|Производитель товара в позиции корзины
`event.cart.lineItems.product.name`|`STRING`|Название товара в позиции корзины
`event.cart.lineItems.product.size`|`STRING`|Размер товара в позиции корзины
`event.cart.lineItems.product.skuCode`|`STRING`|`Stock Keeping Unit - идентификатор вариации товара в позиции корзины
`event.cart.lineItems.product.thumbnailUrl`|`STRING`|URL маленькой картинки товара в позиции корзины
`event.cart.lineItems.product.unitPrice`|`FLOAT`|Цена единицы товара в позиции корзины без скидки
`event.cart.lineItems.product.unitSalePrice`|`FLOAT`|Цена единицы товара в позиции корзины со скидкой - реальная цена, по которой покупается товар.
`event.cart.lineItems.product.url`|`STRING`|URL страницы товара в позиции корзины
`event.cart.lineItems.quantity`|`INTEGER`|Количество товаров в позиции корзины
`event.cart.lineItems.subtotal`|`FLOAT`|Суммарная стоимость корзины, не включая доставку и скидки, примененные к корзине.
`event.cart.shippingCost`|`FLOAT`|Стоимость доставки
`event.cart.subtotal`|`FLOAT`|Суммарная стоимость корзины, не включая доставку и скидки, примененные к корзине.
`event.cart.total`|`FLOAT`|Суммарная стоимость корзины, включая налог, скидки и стоимость доставки.
`event.cart.vouchers`|`STRING`|Список идентификаторов примененных скидок, через запятую
`event.category`|`STRING`|Категория события
`event.customDimensions`|`RECORD`|Массив кастомных параметров
`event.customDimensions.name`|`STRING`|Имя кастомного параметра
`event.customDimensions.value`|`STRING`|Значение кастомного параметра
`event.customMetrics`|`RECORD`|Массив кастомных метрик
`event.customMetrics.name`|`STRING`|Имя кастомной метрики
`event.customMetrics.value`|`FLOAT`|Значение кастомной метрики
`event.experiment`|`RECORD`|Объект эксперимента для события Viewed Experiment
`event.experiment.id`|`STRING`|`ID эксперимента
`event.experiment.name`|`STRING`|Имя эксперимента
`event.experiment.variantId`|`STRING`|`ID варианта
`event.experiment.variantName`|`STRING`|Имя варианта
`event.label`|`STRING`|Ярлык события
`event.listing`|`RECORD`|Массив списков товаров
`event.listing.category`|`STRING`|Иерархия товарных категорий для листинга в виде строки, разделенной "/"
`event.listing.categoryId`|`STRING`|Идентификатор товарной категории
`event.listing.currentPage`|`INTEGER`|Номер текущей страницы, на которой находится пользователь.
`event.listing.layout`|`STRING`|Способ отображения списка пользователю
`event.listing.listId`|`STRING`|Идентификатор списка товаров
`event.listing.listName`|`STRING`|Имя списка товаров
`event.listing.pagesCount`|`INTEGER`|Количество страниц с товарами.
`event.listing.query`|`STRING`|Поисковой запрос выдачи списка
`event.listing.resultCount`|`INTEGER`|Количество всех товаров в данной категории или количество всех найденных товаров.
`event.listing.sortBy`|`STRING`|Значение, по которому пользователь отсортировал список.
`event.name`|`STRING`|Имя события
`event.page`|`RECORD`|Описание страницы, на которой произошло событие
`event.page.breadcrumb`|`STRING`|Иерархия категорий для страницы события в виде строки, разделенной "/"
`event.page.category`|`STRING`|Категория страницы
`event.page.hash`|`STRING`|Часть URL после знака #(хэш)
`event.page.name`|`STRING`|Имя страницы
`event.page.path`|`STRING`|URI страницы без GET-параметров
`event.page.queryString`|`STRING`|Поисковой запрос выдачи страницы с событием
`event.page.title`|`STRING`|Заголовок страницы
`event.page.type`|`STRING`|Тип страницы
`event.page.url`|`STRING`|URL страницы
`event.product`|`RECORD`|Описание товара
`event.product.category`|`STRING`|Иерархия категорий, к которым относится товар, в виде строки, разделенной "/"
`event.product.categoryId`|`STRING`|Идентификатор конечной категории товара
`event.product.color`|`STRING`|Цвет товара
`event.product.currency`|`STRING`|Валюта, в которой приведена цена
`event.product.customDimensions`|`RECORD`|Массив кастомных параметров
`event.product.customDimensions.name`|`STRING`|Имя кастомного параметры
`event.product.customDimensions.value`|`STRING`|Значение кастомного параметра
`event.product.customMetrics`|`RECORD`|Массив кастомных метрик
`event.product.customMetrics.name`|`STRING`|Имя кастомной метрики
`event.product.customMetrics.value`|`FLOAT`|Значение кастомной метрики
`event.product.id`|`STRING`|Идентификатор товара
`event.product.imageUrl`|`STRING`|URL большой картинки товара
`event.product.manufacturer`|`STRING`|Производитель товара
`event.product.name`|`STRING`|Название товара
`event.product.size`|`STRING`|Размер товара
`event.product.skuCode`|`STRING`|`Stock Keeping Unit - идентификатор вариации товара
`event.product.thumbnailUrl`|`STRING`|URL маленькой картинки товара
`event.product.unitPrice`|`FLOAT`|Цена единицы товара без скидки
`event.product.unitSalePrice`|`FLOAT`|Цена единицы товара со скидкой - реальная цена, по которой покупается товар.
`event.product.url`|`STRING`|URL страницы товара
`event.quantity`|`INTEGER`|Количество чего-либо, например, кол-во товаров. Используется в таких событиях как Added Product, Removed Product и так далее
`event.step`|`INTEGER`|Номер шага в воронке .Используется в таких событиях как Viewed Checkout Step, Completed Checkout Step и так далее
`event.transaction`|`RECORD`|Информация о  транзакции
`event.transaction.currency`|`STRING`|Валюта приведенной стоимости корзины
`event.transaction.isFirst`|BOOLEAN`|Является ли эта покупка у пользователя первой
`event.transaction.lineItems`|`RECORD`|Описание позиций в корзине
`event.transaction.lineItems.product`|`RECORD`|Описание товара в позиции корзины
`event.transaction.lineItems.product.category`|`STRING`|Иерархия товарных категорий листинга для позиции корзины в виде строки, разделенной "/"
`event.transaction.lineItems.product.categoryId`|`STRING`|Идентификатор товарной категории листинга для позиции корзины
`event.transaction.lineItems.product.color`|`STRING`|Цвет товара в позиции корзины
`event.transaction.lineItems.product.currency`|`STRING`|Валюта товара в позиции корзины
`event.transaction.lineItems.product.customDimensions`|`RECORD`|Массив кастомных параметров товара в позиции корзины
`event.transaction.lineItems.product.customDimensions.name`|`STRING`|Имя кастомного параметра товара в позиции корзины
`event.transaction.lineItems.product.customDimensions.value`|`STRING`|Значение кастомного параметра товара в позиции корзины
`event.transaction.lineItems.product.customMetrics`|`RECORD`|Массив кастомных метрик товара в позиции корзины
`event.transaction.lineItems.product.customMetrics.name`|`STRING`|Имя кастомной метрики товара в позиции корзины
`event.transaction.lineItems.product.customMetrics.value`|`FLOAT`|Значение кастомной метрики товара в позиции корзины
`event.transaction.lineItems.product.id`|`STRING`|Идентификатор товара в позиции корзины
`event.transaction.lineItems.product.imageUrl`|`STRING`|URL большой картинки товара в позиции корзины
`event.transaction.lineItems.product.manufacturer`|`STRING`|Производитель товара в позиции корзины
`event.transaction.lineItems.product.name`|`STRING`|Название товара в позиции корзины
`event.transaction.lineItems.product.size`|`STRING`|Размер товара в позиции корзины
`event.transaction.lineItems.product.skuCode`|`STRING`|Stock Keeping Unit - идентификатор вариации товара в позиции корзины
`event.transaction.lineItems.product.thumbnailUrl`|`STRING`|URL маленькой картинки товара в позиции корзины
`event.transaction.lineItems.product.unitPrice`|`FLOAT`|Цена единицы товара в позиции корзины без скидки
`event.transaction.lineItems.product.unitSalePrice`|`FLOAT`|Цена единицы товара в позиции корзины со скидкой - реальная цена, по которой покупается товар.
`event.transaction.lineItems.product.url`|`STRING`|URL страницы товара в позиции корзины
`event.transaction.lineItems.quantity`|`INTEGER`|Количество товаров в позиции корзины
`event.transaction.lineItems.subtotal`|`FLOAT`|Стоимость товаров в позиции корзины
`event.transaction.orderId`|`STRING`|Идентификатор заказа
`event.transaction.shippingCost`|`FLOAT`|Стоимость доставки
`event.transaction.subtotal`|`FLOAT`|Суммарная стоимость корзины, не включая доставку и скидки, примененные к корзине.
`event.transaction.total`|`FLOAT`|Суммарная стоимость корзины, включая налог, скидки и стоимость доставки.
`event.transaction.vouchers`|`STRING`|Список идентификаторов примененных скидок, через запятую
`website`|`RECORD`|Глобальная информация о страницах сайта
`website.currency`|`STRING`|Валюта приведенных на сайте цен
`website.environment`|`STRING`|Название окружения, для которого был создан Digital Data Layer
`website.language`|`STRING`|Язык сайта
`website.region`|`STRING`|Название населенного пункта, где расположен выбранный пользователем магазин
`website.regionId`|`STRING`|Идентификатор населенного пункта
`website.type`|`STRING`|Тип страницы
