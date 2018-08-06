---
layout: page
section: events
title: "Updated Profile Info"
order: 2
---
The `Updated Profile Info` should be pushed to the `digitalData.events` array when the server responds with a message about a successful user profile info update.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Updated Profile Info',
  user: {
    firstName: 'Bob',
    phone: '+79161110022',
    ...,
    ...,
    subscriptions: [
        {
          type: 'email',
          topic: 'Discounts',
          isSubscribed: true, // subscribed
        },
        {
          type: 'email',
          topic: 'News',
          isSubscribed: false, // unsubscribed
        },
        {
          type: 'sms',
          topic: 'Seasonal sale',
          isSubscribed: true, // subscribed
        }
      ]
  }
})
```
> In the user object, you must pass the changed user data (updated email, phone, name etc.).

#### From the DDManager interface
The `Updated Profile Info` event can not be created from the built-in DDManager triggers. The event must be added from the site code.

#### Required by the following integrations:
* [Mindbox](/integrations/mindbox)