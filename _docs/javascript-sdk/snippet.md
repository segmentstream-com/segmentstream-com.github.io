---
layout: page
section: javascript-sdk
title: "Setting up SegmentStream snippet"
date: 2020-04-30
order: 2
---
<ul class="page-navigation">
  <li><a href="#snippet">SegmentStream snippet</a></li>
  <li><a href="#setting-up">Setting up snippet code</a></li>
</ul>
<!---
This page should explain in few words what is snippet code, why it should be placed on every page after the digitalData object and how to find a snippet code.
-->

## <a name="snippet"></a> SegmentStream snippet
The SegmentStream snippet is a small piece of JavaScript code that you paste into every page of your website. It enables SegmentStream to track page views and user behavior as well as send it to third-party [integrations](integrations).

## <a name="setting-up"></a> Setting up snippet code
> SegmentStream snippet should be loaded after digitalData object is fully initialized because it uses parameters stored in digitalData and sends it to enabled integrations.

1. Visit [SegmentStream Admin panel  ▸](https://admin.segmentstream.com)
2. Click on **Project info**.
![](/img/snippet.1.png)
3. Copy snippet code from **Website snippet code**.
![](/img/snippet.2.png)
4. Place it on every page of your website as close as possible to the opening &lt;head&gt; tag.