---
layout: page
section: developer
title: "HTTP API"
date: 2019-05-21 19:00:00
order: 6
---

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#headers">Headers</a></li>
  <li><a href="#errors">Errors</a></li>
  <li><a href="#rateLimit">Rate Limit</a></li>
  <li><a href="#maxRequestSize">Max Request Size</a></li>
  <li><a href="#trackingEvents">Tracking Events</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
The SegmentStream HTTP Tracking API lets you record analytics data from any website or application. The requests hit our servers, and we route your data to any destination you want!

We have a native [JavaScript SDK](https://github.com/segmentstream/digital-data-manager) which is built for high-performance client-side tracking and is open-source. But sometimes you may want to send to the HTTP API directly—that’s what this reference is for.

### <a name="headers"></a>Headers
------

### Authorizing

Each request must be authorized with API Token.

Authentication uses HTTP Basic Auth, which involves a ‘username:password’ that is base64 encoded and prepended with the string ‘Basic ‘.

In practice that means taking a provided  **API Token**,`'abc123'` as the username, adding a colon, and then the password field is left empty. After base64 encoding `'abc123:'` becomes `'YWJjMTIzOg=='`; and this is passed in the authorization header like so:

 `'Authorization: Basic YWJjMTIzOg=='`.

### Content Type

In order to send data to our HTTP API, a content-type header must be set to `'application/json'`.

### <a name="errors"></a>Errors
------

We currently return a `204` response for all successful API requests. `401` if incorrect **API Token** is used or `400` if the request is too large or JSON is invalid.

### <a name="rateLimit"></a>Rate limit
------

There is no hard limit on request for API.

### <a name="maxRequestSize"></a>Max Request Size
------

Max request size is 64kb per call.

### <a name="trackingEvents"></a>Tracking Events

To get started, we recommend tracking just a few important events. You can always add more later!

*Example track call:*

> POST [https://track.segmentstream.com/track](https://track.segmentstream.com/track)

```json
{
  "hitId": "4c59d330-35c7-11e9-8f27-8d1d7d4690e7",
  "sentAt": "2019-02-21T10:56:10.723Z",
  "event": {
    "category": "Auth",
    "name": "Registered",
    "label": "some label",
    "user": {
      "anonymousId": "80ddb140-35c6-11e9-bd56-eb1c05e6de18",
      "emailHash": "eff8c37862c7a2f0019448289bdd0869c30ae7f07060e4be9d",
      "userId": "u2783187492",
      "firstName": "John",
      "lastName": "Doe"
    },
    "nonInteraction": false
  },
  "context": {
    "ip": "123.22.334.55"
  }
}
```

Event properties can be anything you want to record. In this case, category, name, label, user and nontInteraction.

The JSON payload call has the following fields:

Key | Data type | Description
--- | --- | ---
user.anonymousId (optional/required) |	STRING |	A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. A userId or an anonymousId is required.
user.userId (optional/required) |	STRING |	Unique identifier for the user in your database, a userId or an anonymousId is required.
hitId (optional) |	STRING |	The unique ID of the request. Used for deduplication.
sentAt (optional) |	DATE |	Timestamp when the message itself took place, defaulted to the current time by the Segment Tracking API. It is a ISO-8601 date string, If the event just happened, leave it out and we’ll use the server’s time. If you’re importing data from the past, make sure you to provide a timestamp.
context (optional) |	OBJECT |	Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like ip address or locale. See the Context field docs for more detail
event (required) |	OBJECT |	Action that a user has performed. Free-form dictionary of properties of the event, like name, label, user, product, etc. You can find proper fields for each event type <HERE>
integrations (optional) |	OBJECT |	Dictionary of different integrations and specific options for this integration. See more details in the description of each integration.
