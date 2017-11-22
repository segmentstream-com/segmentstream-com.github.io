---
layout: page
section: integrations
title: "DDManager Streaming"
date: 2017-08-23 12:00:00
order: 1
---

Встроенный модуль "Streaming" позволяет собирать сырые данные в Google BigQuery. После подключения модуля стриминга DigitalDataManager начинает отправлять все данные о поведении ваших пользователей в облачное хранилище данных BigQuery. Формат хранения данных полностью соответствует стандарту DigitalData.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#1">Настройка BigQuery</a></li>
  <li><a href="#2">Кастомные параметры</a></li>
  <li><a href="#3">Кастомные метрики</a></li>
  <li><a href="#4">Схема данных</a></li>
</ul>

### <a name="0"></a>Введение
Чтобы настроить интеграцию с DDM Streaming: 
1. Авторизуйтесь на сайте [ddmanager.ru](https://admin.ddmanager.ru/) и перейдите к панели управления интеграциями
2. Войдите на вкладку "Интеграции" и кликните по блоку с логотипом DDManager Streaming.
3. В открывшейся панели - настройте интеграцию.
![](/img/integrations.ddmstreaming.1.png)

> Для корректной работы стриминга необходимо сначала настроить хранилище BigQuery

### <a name="1"></a>Настройка BigQuery
------
1. Создайте аккаунт в системе [Google Cloude Platform](https://cloud.google.com/). На 10.10.2017 google дает 300$ на использование системы в течение 3-х месяцев.
2. Выберите проект Google Cloud или создайте новый
![](/img/integrations.ddmstreaming.2.png)
3. Активируйте BigQuery API для проекта
![](/img/integrations.ddmstreaming.3.png)
![](/img/integrations.ddmstreaming.4.png)
![](/img/integrations.ddmstreaming.5.png)
4. Перейдите в раздел Credential для создания прав доступа к API BigQuery
![](/img/integrations.ddmstreaming.6.png)
5. Создайте новый Service Account Key
![](/img/integrations.ddmstreaming.7.png)
6. Укажите имя, 2 роли (BigQuery Data Owner, BigQuery Job User) и получите ключ в формате JSON
![](/img/integrations.ddmstreaming.8.png)
7. Полученный ключ в формате JSON передайте сотрудникам DDManager для подключения стриминга.

### <a name="2"></a>Кастомные параметры
------
По умолчанию DDMStreaming отправляет определенных набор переменных в BigQuery. Этих переменных достаточно для большинства прикладных задач анализа данных. В случае если вам не достаточно переменных, вы можете вместе с каждым событием отправлять кастомные переменные.

Например:
 - Передать googleClientId для сравнения данных в BigQuery и Google Analytics,
 - Передать признак того, залогинен пользователь или нет,
 - и тд.

Для того, чтобы настроить передачу кастомных параметров (см. первый скриншот):
1. Придумайте имя параметра, по которому вы хотите строить отчеты в BigQuery
2. Запишите это имя в левом поле настроек кастомных параметров
3. Укажите источник данных:
 - **DigitalData**. Любая переменная, которая содержится в объекте digitalData
 - **Event**. Любая переменная любого события, добавленного в массив `digitalData.events`
 - **Product**. Любая переменная объекта `product`
 4. Укажите в правом поле имя переменной

### <a name="3"></a>Кастомные метрики
------
Аналогично кастомным параметрам DDManager умеет передавать кастомные метрики.

> Между метриками и параметрами есть большая разница. Метрика - это количественное значение, число (Целое число, дробное число, время). Параметры - это атрибуты данных. Все метрики (числовые данные) рассчитываются в срезах параметров.

Для того, чтобы настроить передачу кастомных метрик (см. первый скриншот):
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
event.name|STRING|Имя события
event.category|STRING|Категория события
event.label|STRING|Ярлык события
event.customDimensions|RECORD|Массив кастомных параметров
event.customDimensions.name|STRING|Имя кастомного параметра
event.customDimensions.value|STRING|Значение кастомного параметра
event.customMetrics|RECORD|Массив кастомных метрик
event.customMetrics.name|STRING|Имя кастомной метрики
event.customMetrics.value|FLOAT|Значение кастомной метрики
event.quantity|INTEGER|Количество чего-либо, например, кол-во товаров. Используется в таких событиях как Added Product, Removed Product и так далее
event.step|INTEGER|Номер шага в воронке .Используется в таких событиях как Viewed Checkout Step, Completed Checkout Step и так далее
event.page|RECORD|Описание страницы, на которой произошло событие
event.page.type|STRING|Тип страницы
event.page.name|STRING|Имя страницы
event.page.category|STRING|Категория страницы
event.page.breadcrumb|STRING|Иерархия категорий для страницы события в виде строки, разделенной "/"
event.page.url|STRING|URL страницы
event.page.path|STRING|URI страницы без GET-параметров
event.page.queryString|STRING|Поисковой запрос выдачи страницы с событием
event.page.hash|STRING|Часть URL после знака #(хэш)
event.page.title|STRING|Заголовок страницы
event.experiment|RECORD|Объект эксперимента для события Viewed Experiment
event.experiment.id|STRING|ID эксперимента
event.experiment.name|STRING|Имя эксперимента
event.experiment.variantId|STRING|ID варианта
event.experiment.variantName|STRING|Имя варианта
event.product|RECORD|Описание товара
event.product.id|STRING|Идентификатор товара
event.product.name|STRING|Название товара
event.product.currency|STRING|Валюта, в которой приведена цена
event.product.unitSalePrice|FLOAT|Цена единицы товара со скидкой - реальная цена, по которой покупается товар.
event.product.unitPrice|FLOAT|Цена единицы товара без скидки
event.product.category|STRING|Иерархия категорий, к которым относится товар, в виде строки, разделенной "/"
event.product.categoryId|STRING|Идентификатор конечной категории товара
event.product.url|STRING|URL страницы товара
event.product.imageUrl|STRING|URL большой картинки товара
event.product.thumbnailUrl|STRING|URL маленькой картинки товара
event.product.manufacturer|STRING|Производитель товара
event.product.skuCode|STRING|Stock Keeping Unit - идентификатор вариации товара
event.product.color|STRING|Цвет товара
event.product.size|STRING|Размер товара
event.product.customDimensions|RECORD|Массив кастомных параметров
event.product.customDimensions.name|STRING|Имя кастомного параметры
event.product.customDimensions.value|STRING|Значение кастомного параметра
event.product.customMetrics|RECORD|Массив кастомных метрик
event.product.customMetrics.name|STRING|Имя кастомной метрики
event.product.customMetrics.value|FLOAT|Значение кастомной метрики
event.campaign|RECORD|Массив маркетинговых кампаний
event.campaign.id|STRING|Идентификатор маркетинговой кампании
event.campaign.name|STRING|Имя маркетинговой кампании
event.campaign.category|STRING|Категория кампании
event.campaign.design|STRING|Дизайн объявления/баннера кампании
event.campaign.position|STRING|Месторасположение объявления/баннера кампании
event.listing|RECORD|Массив списков товаров
event.listing.listId|STRING|Идентификатор списка товаров
event.listing.listName|STRING|Имя списка товаров
event.listing.query|STRING|Поисковой запрос выдачи списка
event.listing.category|STRING|Иерархия товарных категорий для листинга в виде строки, разделенной "/"
event.listing.categoryId|STRING|Идентификатор товарной категории
event.listing.resultCount|INTEGER|Количество всех товаров в данной категории или количество всех найденных товаров.
event.listing.pagesCount|INTEGER|Количество страниц с товарами.
event.listing.currentPage|INTEGER|Номер текущей страницы, на которой находится пользователь.
event.listing.sortBy|STRING|Значение, по которому пользователь отсортировал список.
event.listing.layout|STRING|Способ отображения списка пользователю
event.transaction|RECORD|Информация о  транзакции
event.transaction.vouchers|STRING|Список идентификаторов примененных скидок, через запятую
event.transaction.lineItems|RECORD|Описание позиций в корзине
event.transaction.lineItems.quantity|INTEGER|Количество товаров в позиции корзины
event.transaction.lineItems.subtotal|FLOAT|Стоимость товаров в позиции корзины
event.transaction.lineItems.product|RECORD|Описание товара в позиции корзины
event.transaction.lineItems.product.id|STRING|Идентификатор товара в позиции корзины
event.transaction.lineItems.product.name|STRING|Название товара в позиции корзины
event.transaction.lineItems.product.currency|STRING|Валюта товара в позиции корзины
event.transaction.lineItems.product.unitSalePrice|FLOAT|Цена единицы товара в позиции корзины со скидкой - реальная цена, по которой покупается товар.
event.transaction.lineItems.product.unitPrice|FLOAT|Цена единицы товара в позиции корзины без скидки
event.transaction.lineItems.product.category|STRING|Иерархия товарных категорий листинга для позиции корзины в виде строки, разделенной "/"
event.transaction.lineItems.product.categoryId|STRING|Идентификатор товарной категории листинга для позиции корзины
event.transaction.lineItems.product.url|STRING|URL страницы товара в позиции корзины
event.transaction.lineItems.product.imageUrl|STRING|URL большой картинки товара в позиции корзины
event.transaction.lineItems.product.thumbnailUrl|STRING|URL маленькой картинки товара в позиции корзины
event.transaction.lineItems.product.manufacturer|STRING|Производитель товара в позиции корзины
event.transaction.lineItems.product.skuCode|STRING|Stock Keeping Unit - идентификатор вариации товара в позиции корзины
event.transaction.lineItems.product.color|STRING|Цвет товара в позиции корзины
event.transaction.lineItems.product.size|STRING|Размер товара в позиции корзины
event.transaction.lineItems.product.customDimensions|RECORD|Массив кастомных параметров товара в позиции корзины
event.transaction.lineItems.product.customDimensions.name|STRING|Имя кастомного параметра товара в позиции корзины
event.transaction.lineItems.product.customDimensions.value|STRING|Значение кастомного параметра товара в позиции корзины
event.transaction.lineItems.product.customMetrics|RECORD|Массив кастомных метрик товара в позиции корзины
event.transaction.lineItems.product.customMetrics.name|STRING|Имя кастомной метрики товара в позиции корзины
event.transaction.lineItems.product.customMetrics.value|FLOAT|Значение кастомной метрики товара в позиции корзины
event.transaction.total|FLOAT|Суммарная стоимость корзины, включая налог, скидки и стоимость доставки.
event.transaction.subtotal|FLOAT|Суммарная стоимость корзины, не включая доставку и скидки, примененные к корзине. 
event.transaction.currency|STRING|Валюта приведенной стоимости корзины
event.transaction.shippingCost|FLOAT|Стоимость доставки
event.transaction.orderId|STRING|Идентификатор заказа
event.transaction.isFirst|BOOLEAN|Является ли эта покупка у пользователя первой
event.cart|RECORD|Описание корзины
event.cart.vouchers|STRING|Список идентификаторов примененных скидок, через запятую
event.cart.lineItems|RECORD|Описание товаров в корзине и их количество.
event.cart.lineItems.quantity|INTEGER|Количество товаров в позиции корзины
event.cart.lineItems.subtotal|FLOAT|Суммарная стоимость корзины, не включая доставку и скидки, примененные к корзине. 
event.cart.lineItems.product|RECORD|Описание товара в позиции корзины
event.cart.lineItems.product.id|STRING|Идентификатор товара в позиции корзины
event.cart.lineItems.product.name|STRING|Название товара в позиции корзины
event.cart.lineItems.product.currency|STRING|Валюта товара в позиции корзины
event.cart.lineItems.product.unitSalePrice|FLOAT|Цена единицы товара в позиции корзины со скидкой - реальная цена, по которой покупается товар.
event.cart.lineItems.product.unitPrice|FLOAT|Цена единицы товара в позиции корзины без скидки
event.cart.lineItems.product.category|STRING|Иерархия товарных категорий листинга для позиции корзины в виде строки, разделенной "/"
event.cart.lineItems.product.categoryId|STRING|Идентификатор товарной категории листинга для позиции корзины
event.cart.lineItems.product.url|STRING|URL страницы товара в позиции корзины
event.cart.lineItems.product.imageUrl|STRING|URL большой картинки товара в позиции корзины
event.cart.lineItems.product.thumbnailUrl|STRING|URL маленькой картинки товара в позиции корзины
event.cart.lineItems.product.manufacturer|STRING|Производитель товара в позиции корзины
event.cart.lineItems.product.skuCode|STRING|Stock Keeping Unit - идентификатор вариации товара в позиции корзины
event.cart.lineItems.product.color|STRING|Цвет товара в позиции корзины
event.cart.lineItems.product.size|STRING|Размер товара в позиции корзины
event.cart.lineItems.product.customDimensions|RECORD|Массив кастомных параметров товара в позиции корзины
event.cart.lineItems.product.customDimensions.name|STRING|Имя кастомного параметра товара в позиции корзины
event.cart.lineItems.product.customDimensions.value|STRING|Значение кастомного параметра товара в позиции корзины
event.cart.lineItems.product.customMetrics|RECORD|Массив кастомных метрик товара в позиции корзины
event.cart.lineItems.product.customMetrics.name|STRING|Имя кастомной метрики товара в позиции корзины
event.cart.lineItems.product.customMetrics.value|FLOAT|Значение кастомной метрики товара в позиции корзины
event.cart.total|FLOAT|Суммарная стоимость корзины, включая налог, скидки и стоимость доставки.
event.cart.subtotal|FLOAT|Суммарная стоимость корзины, не включая доставку и скидки, примененные к корзине. 
event.cart.currency|STRING|Валюта приведенной стоимости корзины
event.cart.shippingCost|FLOAT|Стоимость доставки
event.cart.id|STRING|Идентификатор корзины
website|RECORD|Глобальная информация о страницах сайта
website.type|STRING|Тип страницы
website.region|STRING|Название населенного пункта, где расположен выбранный пользователем магазин
website.regionId|STRING|Идентификатор населенного пункта
website.language|STRING|Язык сайта
website.currency|STRING|Валюта приведенных на сайте цен
website.environment|STRING|Название окружения, для которого был создан Digital Data Layer
hitId|STRING|Идентификатор хита
projectId|STRING|Идентификатор проекта
projectName|STRING|Имя проекта
anonymousId|STRING|Идентификатор анонимного клиента
userId|STRING|Идентификатор авторизованного пользователя
emailHash|STRING|Хэш электронного адреса пользователя
context|RECORD|Информация о контексте посещения страницы
context.page|RECORD|Описание страницы, на которой произошло событие
context.page.path|STRING|Путь страницы
context.page.referrer|STRING|URL страницы, с которой был осуществлен переход на текущую страницу
context.page.title|STRING|Заголовок страницы
context.page.url|STRING|URL страницы
context.userAgent|STRING|Информация о браузере пользователя
context.ip|STRING|IP-адрес пользователя
sentAt|TIMESTAMP|Время отправки события c клиента (UTC, зависит от времени, установленного на компьютере)
receivedAt|TIMESTAMP|Время получения события сервером (UTC)
version|INTEGER|Версия схемы данных