---
layout: page
section: guides
navigation_title: "Combining Custom Tasks for Data Streams"
title: "Combining Custom Tasks for Data Streams"
date: 2020-10-14
---

In Google Tag Manager, you can only add 1 customTask per tag. This means that if you already have Universal Analytics tag with a specific customTask, you can't implement Data Stream as a second customTask.

This document describes how to combine multiple customTasks in a Universal Analytics tag.

## Before you begin

- Make sure that BigQuery is [connected to SegmentStream](/bigquery/connecting-bigquery).
- Make sure that you enabled [Universal Analytics Data Stream](/datastreams/universal-analytics#integration-with-google-tag-manager-(gtm))

## Combining customTasks

Suppose you have a Universal Analytics tag that sets the clientId for customDimension 2.

![GTM Setup](/img/guide-custom-task/ct-name-before.png)

Where `{% raw %}{{clientId}}{% endraw %}` is defined as a Custom JavaScript variable:

![GTM Setup](/img/guide-custom-task/variable-before.png)

```
function() {
   return function(model) {
      model.set('dimension2', model.get('clientId'));
   }
}
```

Now you need to combine Data Stream snippet with your {{clientId}} variable.

## Steps to reproduce

1. In the **Variables** section click **New** to create a customTask variable:

   ![GTM Setup](/img/datastreams/ua-gtm-1.png)

2. Click on the **Variable Configuration > Custom JavaScript** in *Page Variables* section:

   ![GTM Setup](/img/datastreams/ua-gtm-2.png)

3. Set unique name for the variable (f.e. *SegmentStream_x_clientId*). Use the following code as a template for your variable:

    ```
    function() {
      var customTasks = [
        /* code from the current customTask Variable */
        ,
        /* code snippet from a SegmentStream Data Stream settings modal */
      ];
      return function combinedCustomTask(model) {
        customTasks.forEach(function(customTask) { customTask()(model) });
      };
    }
    ```

    > You just need to create an customTasks array and use all the required functions as array elements.

    In the described example, the final code will look like:

    ```
    function() {
      var customTasks = [
        function() {
          return function(model) {
            model.set('dimension2', model.get('clientId'));
          }
        },
        function ssgtm(){return function(e){var n,r,i,o;function a(t){try{
        return document.createElement("img").src=o+"?"+t,!0}catch(t){}return!1}
        void 0===e.get("SegmentStream")&&(n=e.get("sendHitTask"),i=["ym_uid","_ga","ssaid","_fbp","_fbc","tmr_lvi"],o="https://track.segmentstream.com/ds/{% raw %}{{DATA_STREAM_ID}}{% endraw %} ",r={send:function(t){
        var e=document.cookie.split(";").reduce(function(t,e){var n=e.split("=").map(
        function(t){return t.trim()}),r=n[0];return-1===i.indexOf(r)?t:(t?t+"&":""
        )+"cookie["+r+"]="+n[1]},"");e.length&&(t+=(t?"&":"")+e);var n,r=!1;if(
        t.length<=2036&&(r=a(t)),r||"function"!=typeof navigator.sendBeacon||(
        r=navigator.sendBeacon(o,t)),!r)try{window.XMLHttpRequest&&"withCredentials"in(
        n=new XMLHttpRequest)&&(n.open("POST",o,!0),n.setRequestHeader("Content-Type",
        "text/plain"),n.send(t),r=!0)}catch(t){}return r=r||a(t)}},e.set("sendHitTask",
        function(t){n(t),r.send(t.get("hitPayload")),e.set("SegmentStream",!0)}))}}
      ];
      return function combinedCustomTask(model) {
        customTasks.forEach(function(customTask) { customTask()(model) });
      };
    }
    ```

    > Please, don't copy and paste this code. Each SegmentStream snippet is unique for each project.

   ![GTM Setup](/img/guide-custom-task/variable.png)

4. Change the customTask variable in your GTM tag to the newly created one.

   ![GTM Setup](/img/guide-custom-task/ct-name-after.png)


## What's next

Once you implemented combined customTask you will see the event sent to both `https://www.google-analytics.com/collect` and to `https://track.segmentstream.com/ds/{% raw %}{{DATA_STREAM_ID}}{% endraw %} `endpoints in the **Network** section of the browser console .