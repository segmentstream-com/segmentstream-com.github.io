---
layout: page
section: developerRU
title: "Подключение SegmentStream"
date: 2017-09-15 18:15:00
order: 3
---

В данном разделе вы узнаете о способах подключения SegmentStream к вашему сайту.

### Навигация по странице
------
<ul class="page-navigation">
  <li><a href="#0">Введение</a></li>
  <li><a href="#1">Стандартное подключение через удаленный CDN</a></li>
  <li><a href="#2">Установка SegmentStream на собственный CDN</a></li>
</ul>

### <a name="0"></a>Введение
------
Для корректной работы SegmentStream при загрузке каждой страницы сайта необходимо вызвать 2 файла:
 1. https://cdn.segmentstream.com/project/`<project_id>`.js
 2. https://cdn.segmentstream.com/sdk/dd-manager.js

Где `<project_id>` необходимо запросить у команды SegmentStream.

Первый файл содержит информацию о тех настройках, которые аналитик сделал в панели управления [https://admin.segmentstream.com](https://admin.segmentstream.com). Подробнее о возможностях читайте в [разделе для аналитиков](/for-analyst/index).<br/>
Второй файл - это самая последняя стабильная версия библиотеки SegmentStream.

Ниже мы приводим 2 способа подключения файлов к вашему сайту.


### <a name="1"></a>Стандартное подключение через удаленный CDN
------
Чтобы подключить SegmentStream к сайту через наши CDN:

1. Скопируйте сниппет и вставьте его в код каждой страницы вашего сайта.
```JavaScript
<!-- SegmentStream snippet -->
<script type="text/javascript">
(function(h,d){d=d||"cdn.segmentstream.com";var a=window.ddManager=window.ddManager||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("SegmentStream snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off setConsent".split(" ");a.factory=function(k){return function(){var c=Array.prototype.slice.call(arguments);
c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("ddm_test_mode=1"))try{var e=!0;window.localStorage.setItem("_ddm_test_mode","1")}catch(g){}else if(0<=c.indexOf("ddm_test_mode=0"))try{e=
!1,window.localStorage.removeItem("_ddm_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_ddm_test_mode")}catch(g){}e?a.load(window.DDMANAGER_TESTMODE_INIT_URL||"https://api.segmentstream.com/v1/ddm-initialization/"+b+".js"):a.load(window.DDMANAGER_INIT_URL||"https://"+d+"/project/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="1.0.11";a.loadProject(h)}})("<PROJECT_ID>");
</script>
<!-- //SegmentStream snippet -->
```

2. Замените `<PROJECT_ID>` на ваш уникальный идентификатор проекта.

>Сниппет SegmentStream должен стоять по коду ниже места объявления глобальной переменной `window.digitalData` и плагина jquery.

### <a name="2"></a>Установка SegmentStream на собственный CDN
------
В данном случае никакие системы adBlock'а не смогут прервать загрузку скриптов, расположенных в рамках вашего домена.
Чтобы установить SegmentStream на свой CDN - необходимо выполнить следующие шаги:

1. Скопируйте сниппет и вставьте его в код каждой страницы вашего сайта.
```JavaScript
<!-- SegmentStream snippet -->
<script type="text/javascript">
// window.DDMANAGER_INIT_URL = '<YOUR_BACKUP_STABLE_INITIALIZATION_SCRIPT_URL>';
// window.DDMANAGER_SDK_URL = '<YOUR_BACKUP_STABLE_SDK_SCRIPT_URL>';
(function(h,d){d=d||"cdn.segmentstream.com";var a=window.ddManager=window.ddManager||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("SegmentStream snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off setConsent".split(" ");a.factory=function(k){return function(){var c=Array.prototype.slice.call(arguments);
c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("ddm_test_mode=1"))try{var e=!0;window.localStorage.setItem("_ddm_test_mode","1")}catch(g){}else if(0<=c.indexOf("ddm_test_mode=0"))try{e=
!1,window.localStorage.removeItem("_ddm_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_ddm_test_mode")}catch(g){}e?a.load(window.DDMANAGER_TESTMODE_INIT_URL||"https://api.segmentstream.com/v1/ddm-initialization/"+b+".js"):a.load(window.DDMANAGER_INIT_URL||"https://"+d+"/project/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="1.0.11";a.loadProject(h)}})("<PROJECT_ID>","<CDN_DOMAIN>");
</script>
<!-- //SegmentStream snippet -->
```
>Сниппет SegmentStream должен стоять по коду ниже места объявления глобальной переменной `window.digitalData` и плагина jquery.

2. Каждые 5 минут необходимо проверять md5 хеш двух файлов. Если файлы изменились - необходимо скачать новую версию файла и обновить его локальную версию.
Последняя версия скрипта инициализации:
https://cdn.segmentstream.com/project/<your_project_id>.js
Последняя версия sdk:
https://cdn.segmentstream.com/sdk/dd-manager.js

3. В обновленном сниппете SegmentStream необходимо раскомментировать глобальные переменные `DDMANAGER_INIT_URL` и `DDMANAGER_SDK_URL` присвоить им абсолютный путь к локальной версии файлов на вашем собственном CDN.
```JavaScript
// window.DDMANAGER_INIT_URL = '<YOUR_BACKUP_STABLE_INITIALIZATION_SCRIPT_URL>';
// window.DDMANAGER_SDK_URL = '<YOUR_BACKUP_STABLE_SDK_SCRIPT_URL>';
```
Например:
```JavaScript
window.DDMANAGER_INIT_URL = 'https://cdn.website.ru/js/ddmanager/init_15_05_2017.js';
window.DDMANAGER_SDK_URL = 'https://cdn.website.ru/js/ddmanager/sdk_15_05_2017.js';
```
>всегда используйте только абсолютные пути c http/https
