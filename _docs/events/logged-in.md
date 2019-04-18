---
layout: page
section: events
title: "Logged In"
order: 2
---
The `Logged In` event must be pushed to the `digitalData.events` array when the server responds with a message about a successful user authorization.

#### From the site code
```javascript
digitalData.events.push({
  name: 'Logged In'
})
```

#### When using AJAX / SPA website
```javascript
digitalData.events.push({
  name: 'Logged In',
  user: {
    firstName: 'Name',
    email: 'users.email@mail.com' //required
  }
})
```
Read more about the [user](/digitaldata/user/) object.

#### From the SegmentStream interface
The `Logged In` event can not be created from the built-in SegmentStream triggers. The event must be added from the site code.

#### Required by the following integrations:
* Mindbox
