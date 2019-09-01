---
layout: page
section: developer
title: "Connecting SegmentStream"
date: 2017-09-15 18:15:00
order: 3
---

In this section, you will learn how to connect SegmentStream to your site.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#standardConnectionCDN">Standard connection via remote CDN</a></li>
  <li><a href="#installingOnOwnCDN">Installing SegmentStream on your own CDN</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
For the correct operation of SegmentStream, when loading each page of the site, you need to call 2 files:
 1. https://cdn.segmentstream.com/project/`<project_id>`.js
 2. https://cdn.segmentstream.com/sdk/segmentstream.min.js

The `<project_id>` can be found in the ["Project Info"](/for-analyst/project-info) menu in the admin panel of each project.

The first file contains information about the settings that the analyst made in the control panel [https://admin.segmentstream.com](https://admin.segmentstream.com). You can read more about the features in the [analysts section](/for-analyst/index).<br/>
The second file is the latest stable version of the SegmentStream library.

Below we show the 2 ways of connecting the files to your site.

### <a name="standardConnectionCDN"></a>Standard connection via remote CDN
------
To connect the SegmentStream via our CDN:

1. Copy the snippet and paste it into the code for each page of your site.
```JavaScript
<!-- SegmentStream snippet -->
<script type="text/javascript">
(function(h,d){d=d||"cdn.segmentstream.com";var a=window.segmentstream=window.segmentstream||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("SegmentStream snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off getConsent setConsent".split(" ");a.factory=function(k){return function(){var c=
Array.prototype.slice.call(arguments);c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("segmentstream_test_mode=1"))try{var e=!0;window.localStorage.setItem("_segmentstream_test_mode",
"1")}catch(g){}else if(0<=c.indexOf("segmentstream_test_mode=0"))try{e=!1,window.localStorage.removeItem("_segmentstream_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_segmentstream_test_mode")}catch(g){}e?a.load(window.SEGMENTSTREAM_TESTMODE_INIT_URL||"https://api.segmentstream.com/v1/project/"+b+".js"):a.load(window.SEGMENTSTREAM_INIT_URL||"https://"+d+"/project/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="2.0.0";a.loadProject(h)}})("<PROJECT_ID>");
</script>
<!-- //SegmentStream snippet -->
```

2. Replace `<PROJECT_ID>` with your unique project id.

>The SegmentStream snippet should be declared after the global variable `window.digitalData` and the jquery plugin.

### <a name="installingOnOwnCDN"></a>Installing SegmentStream on your own CDN
------
In this case, no adBlock systems can interrupt the loading of scripts located within your domain.
To install SegmentStream on your CDN - you need to perform the following steps:

1. Copy the snippet and paste it into the code for each page of your site.
```JavaScript
<!-- SegmentStream snippet -->
<script type="text/javascript">
// window.SEGMENTSTREAM_INIT_URL = '<YOUR_BACKUP_STABLE_INITIALIZATION_SCRIPT_URL>';
// window.SEGMENTSTREAM_SDK_URL = '<YOUR_BACKUP_STABLE_SDK_SCRIPT_URL>';
(function(h,d){d=d||"cdn.segmentstream.com";var a=window.segmentstream=window.segmentstream||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("SegmentStream snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off getConsent setConsent".split(" ");a.factory=function(k){return function(){var c=
Array.prototype.slice.call(arguments);c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("segmentstream_test_mode=1"))try{var e=!0;window.localStorage.setItem("_segmentstream_test_mode",
"1")}catch(g){}else if(0<=c.indexOf("segmentstream_test_mode=0"))try{e=!1,window.localStorage.removeItem("_segmentstream_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_segmentstream_test_mode")}catch(g){}e?a.load(window.SEGMENTSTREAM_TESTMODE_INIT_URL||"https://api.segmentstream.com/v1/project/"+b+".js"):a.load(window.SEGMENTSTREAM_INIT_URL||"https://"+d+"/project/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="2.0.0";a.loadProject(h)}})("<PROJECT_ID>","<CDN_DOMAIN>");
</script>
<!-- //SegmentStream snippet -->
```
>The SegmentStream snippet should be declared after the global variable `window.digitalData` and the jquery plugin.

2. Every 5 minutes, you need to check the md5 hash of the two files. If the files have changed - you need to download a new version of the file and update its local version.
The latest version of the initialization script:
https://cdn.segmentstream.com/project/`<your_project_id>`.js
The latest version of the sdk:
https://cdn.segmentstream.com/sdk/segmentstream.min.js

3. In the updated SegmentStream snippet it is necessary to uncomment the  `SEGMENTSTREAM_INIT_URL` and` SEGMENTSTREAM_SDK_URL` global variables to assign them the absolute path to the local version of the files on your own CDN.
```JavaScript
// window.SEGMENTSTREAM_INIT_URL = '<YOUR_BACKUP_STABLE_INITIALIZATION_SCRIPT_URL>';
// window.SEGMENTSTREAM_SDK_URL = '<YOUR_BACKUP_STABLE_SDK_SCRIPT_URL>';
```
Example:
```JavaScript
window.SEGMENTSTREAM_INIT_URL = 'https://cdn.website.com/js/segmentsteam/init_15_05_2017.js';
window.SEGMENTSTREAM_SDK_URL = 'https://cdn.website.com/js/segmentsteam/sdk_15_05_2017.js';
```
>always use absolute paths with http/https
