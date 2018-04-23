---
layout: page
section: developer
title: "Connecting DigitalDataManager"
date: 2017-09-15 18:15:00
order: 3
---

In this section, you will learn how to connect DigitalDataManager to your site.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Standard connection via remote CDN</a></li>
  <li><a href="#2">Installing DDManager on your own CDN</a></li>
</ul>

### <a name="0"></a>Introduction
------
For the correct operation of DigitalDataManager, when loading each page of the site, you need to call 2 files:
 1. https://cdn.ddmanager.ru/ddm-initialization/<project_id>.js
 2. https://cdn.ddmanager.ru/sdk/dd-manager.js

You should contact the DigitalDataManager team to receive your `<project_id>`.

The first file contains information about the settings that the analyst made in the control panel [https://admin.ddmanager.ru](https://admin.ddmanager.ru). You can read more about the features in the [analysts section](/for-analyst/index).<br/>
The second file is the latest stable version of the DigitalDataManager library.

Below we show the 2 ways of connecting the files to your site.

### <a name="1"></a>Standard connection via remote CDN
------
To connect the DigitalDataManager via our CDN:

1. Copy the snippet and paste it into the code for each page of your site.
```JavaScript
<!-- Digital Data Manager snippet -->
<script type="text/javascript">
(function(h,d){d=d||"cdn.ddmanager.ru";var a=window.ddManager=window.ddManager||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("Digital Data Manager snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off".split(" ");a.factory=function(k){return function(){var c=Array.prototype.slice.call(arguments);
c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("ddm_test_mode=1"))try{var e=!0;window.localStorage.setItem("_ddm_test_mode","1")}catch(g){}else if(0<=c.indexOf("ddm_test_mode=0"))try{e=
!1,window.localStorage.removeItem("_ddm_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_ddm_test_mode")}catch(g){}e?a.load("https://api.ddmanager.ru/v1/ddm-initialization/"+b+".js"):window.DDMANAGER_INIT_URL?a.load(window.DDMANAGER_INIT_URL):a.load("https://"+d+"/ddm-initialization/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="1.0.9";a.loadProject(h)}})("<PROJECT_ID>");
</script>
<!-- //Digital Data Manager snippet -->
```

2. Replace `<PROJECT_ID>` with your unique project id.

>The DigitalDataManager snippet should be declared after the global variable `window.digitalData` and the jquery plugin.

### <a name="2"></a>Installing DigitalDataManager on your own CDN
------
In this case, no adBlock systems can interrupt the loading of scripts located within your domain.
To install DigitalDataManager on your CDN - you need to perform the following steps:

1. Copy the snippet and paste it into the code for each page of your site.
```JavaScript
<!-- Digital Data Manager snippet -->
<script type="text/javascript">
// window.DDMANAGER_INIT_URL = '<YOUR_BACKUP_STABLE_INITIALIZATION_SCRIPT_URL>';
// window.DDMANAGER_SDK_URL = '<YOUR_BACKUP_STABLE_SDK_SCRIPT_URL>';
(function(h,d){d=d||"cdn.ddmanager.ru";var a=window.ddManager=window.ddManager||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("Digital Data Manager snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off".split(" ");a.factory=function(k){return function(){var c=Array.prototype.slice.call(arguments);
c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("ddm_test_mode=1"))try{var e=!0;window.localStorage.setItem("_ddm_test_mode","1")}catch(g){}else if(0<=c.indexOf("ddm_test_mode=0"))try{e=
!1,window.localStorage.removeItem("_ddm_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_ddm_test_mode")}catch(g){}e?a.load("https://api.ddmanager.ru/v1/ddm-initialization/"+b+".js"):window.DDMANAGER_INIT_URL?a.load(window.DDMANAGER_INIT_URL):a.load("https://"+d+"/ddm-initialization/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="1.0.9";a.loadProject(h)}})("<PROJECT_ID>");
</script>
<!-- //Digital Data Manager snippet -->
```
>The DigitalDataManager snippet should be declared after the global variable `window.digitalData` and the jquery plugin.

2. Every 5 minutes, you need to check the md5 hash of the two files. If the files have changed - you need to download a new version of the file and update its local version.
The latest version of the initialization script:
https://cdn.ddmanager.ru/ddm-initialization/<your_project_id>.js
The latest version of the sdk:
https://cdn.ddmanager.ru/sdk/dd-manager.js

3. In the updated DDManager snippet it is necessary to uncomment the  `DDMANAGER_INIT_URL` and` DDMANAGER_SDK_URL` global variables to assign them the absolute path to the local version of the files on your own CDN.
```JavaScript
// window.DDMANAGER_INIT_URL = '<YOUR_BACKUP_STABLE_INITIALIZATION_SCRIPT_URL>';
// window.DDMANAGER_SDK_URL = '<YOUR_BACKUP_STABLE_SDK_SCRIPT_URL>';  
```
Example:
```JavaScript
window.DDMANAGER_INIT_URL = 'https://cdn.website.ru/js/ddmanager/init_15_05_2017.js';
window.DDMANAGER_SDK_URL = 'https://cdn.website.ru/js/ddmanager/sdk_15_05_2017.js';  
```
>always use absolute paths with http/https