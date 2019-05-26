---
layout: page
# section: analyst
title: "Quick Start Guide"
date: 2019-05-26
order: 0
---

## Snippet deployment

The SegmentStream container snippet is a small piece of JavaScript code that you paste into your pages. It enables SegmentStream to fire events by inserting `segmentstream.js` into the page.

To implement SegmentStream on your website:

Copy the following JavaScript and paste it as close to the opening <head> tag as possible on every page of your website, replacing `<PROJECT_ID>` with your project ID:

```html
<!-- SegmentStream snippet -->
<script type="text/javascript">
(function(h,d){d=d||"cdn.segmentstream.com";var a=window.segmentstream=window.segmentstream||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("SegmentStream snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off getConsent setConsent".split(" ");a.factory=function(k){return function(){var c=
Array.prototype.slice.call(arguments);c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("segmentstream_test_mode=1"))try{var e=!0;window.localStorage.setItem("_segmentstream_test_mode",
"1")}catch(g){}else if(0<=c.indexOf("segmentstream_test_mode=0"))try{e=!1,window.localStorage.removeItem("_segmentstream_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_segmentstream_test_mode")}catch(g){}e?a.load(window.SEGMENTSTREAM_TESTMODE_INIT_URL||"https://api.segmentstream.com/v1/project/"+b+".js"):a.load(window.SEGMENTSTREAM_INIT_URL||"https://"+d+"/project/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="2.0.0";a.loadProject(h)}})("<PROJECT_ID>");
</script>
<!-- //SegmentStream snippet -->
```

A lot of data can be collected by just doing the basic code installation:
* Viewed pages
* Traffic sources
* Information about browser, screen
* etc

## Connecting Google BigQuery data warehouse

1. Follow [this guide](/integrations/google-bigquery) to setup **Google BigQuery** integration.

2. Go to your website and visit few pages.

3. Make sure that data is collected: