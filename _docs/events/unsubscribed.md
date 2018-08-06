---
layout: page
section: events
title: "Unsubscribed"
order: 2
---
The `Unsubscribed` event must be pushed to the `digitalData.events` array when the server responds with a message about a successful unsubscription of the user from a newsletter .

>Advice. It often happens that email-neswletters to clients are sent by two or more ESP-systems (for example, mass and trigger newsletter). In this case, it is necessary to create a page for managing subscriptions on the site, and on the basis of the `Unsubscribed` event send a signal to the CRM and ESP-systems. In the future, you can motivate the user to subscribe again using personal messages on the site and through retargeting.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Unsubscribed',
  user: {
    id: 'user id in your CRM system',
    email: 'users.email@mail.com'
  }
})
```


#### From the DDManager interface
The `Unsubscribed` event can not be created from the built-in DDManager triggers. The event must be added from the site code.

#### Required by the following integrations:
* Driveback