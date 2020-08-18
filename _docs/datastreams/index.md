---
layout: page
section: datastreams
navigation_title: "Overview"
title: "Data Streams overview"
order: 0
date: 2020-08-18
---

## What is Data Streams

A Data Stream — is a universal way to collect **any real-time data** directly into your Google BigQuery data warehouse. This includes both client-side and server-side event data.

**A few sample usages:**

- Automatically intercept and duplicate all Google Analytics hits to SegmentStream that allows collecting raw hit-level data into your Google BigQuery without any limits and sampling;
- Track and analyse AMP pages using non-script tracking pixels;
- Track views of your media ads by embedding a tracking pixel that collects data about ad views directly into SegmentStream and Google BigQuery;
- Collect CRM/ERP/ESP webhooks data from 3rd party systems;
- Send real-time server-side events into Google BigQuery;
- etc

## How Data Streams work

In a nutshell, a Data Stream is a unique SegmentStream endpoint where you can send absolutely any data. All endpoints have the following format:

```
https://track.segmentstream.com/ds/{% raw %}{{DATA_STREAM_ID}}{% endraw %}
```

Where `{% raw %}{{DATA_STREAM_ID}}{% endraw %}` is a unique ID of your data stream connected to the specific BigQuery table.

You can send data into this endpoint in any format using:

1. Simple HTTP request:
```
curl -d "event=Lead&value=3500&currency=USD" \
https://track.segmentstream.com/ds/{% raw %}{{DATA_STREAM_ID}}{% endraw %}
```

2. HTTP request with JSON body:
```jsx
curl -H "Content-Type: application/json" -X \ 
POST -d '{"event":"Lead","valuee":3500,"currency":"USD"}' \
https://track.segmentstream.com/ds/{% raw %}{{DATA_STREAM_ID}}{% endraw %}
```

3. Tracking pixel (for AMP pages or ad impressions tracking):
```jsx
<img height="1" width="1" style="display:none;" src="https://track.segmentstream.com/ds/{% raw %}{{DATA_STREAM_ID}}{% endraw %}?event=ad_view&placement=DV360&type=banner" />
```

4. JavaScript:
```jsx
jQuery.post("https://track.segmentstream.com/ds/{% raw %}{{DATA_STREAM_ID}}{% endraw %}", { 
  event: "Lead",
  value: 3500,
  currency: "USD"
});
```

Regardless of the method you choose to send the data to the Data Stream endpoint, SegmentStream guarantees that this data will be successfully recorded into the Google BigQuery table specified for this Data Stream.

## Creating a new Data Stream

To create a data stream you should follow the following steps:

1. Click **Add Data Stream** button:
![Add BigQuery data stream](/img/datastreams/data-stream-add.png)

2. Select the desireed data stream type.

3. Go through setting up flow depending on the selected data stream type:
![Set up BigQuery data stream](/img/datastreams/data-stream-setup.png)

4. Use **Snippet code** on your website, mobile app or server depending on the requirements:
![Use code of BigQuery data stream](/img/datastreams/data-stream-snippet.png)
