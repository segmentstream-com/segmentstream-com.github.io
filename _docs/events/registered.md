---
layout: page
section: events
title: "Registered"
order: 2
---
The `Registered` event must be pushed to the `digitalData.events` array when the server responds with a message about a successful user registration.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Registered',
  user: {
    firstName: 'Name',
    email: 'users.email@mail.ru' //required
  }
})
```

#### From the DDManager interface
The `Registered` event can not be created from the built-in DDManager triggers. The event must be added from the site code.

#### Required by the following integrations:
* Criteo
* Facebook
* Retail Rocket
* Driveback
* Sociomantic