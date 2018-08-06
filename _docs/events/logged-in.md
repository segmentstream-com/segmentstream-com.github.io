---
layout: page
section: events
title: "Logged In"
order: 2
---
The `Logged In` event must be pushed to the `digitalData.events` array when the server responds with a message about a successful user authorization.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Logged In'
})
```

#### From the DDManager interface
The `Logged In` event can not be created from the built-in DDManager triggers. The event must be added from the site code.

#### Required by the following integrations:
* Mindbox