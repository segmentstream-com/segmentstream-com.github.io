---
layout: page
section: events
title: "Subscribed"
order: 2
---
The `Subscribed` event must be pushed to the `digitalData.events` array when the server responds with a message about a successful user newsletter subscription.
The user might subscribe to the newsletter in different fields or campaigns, for example in the footer, in a pop-up window, etc., he might also subscribe to different types of newsletter mediums, for example: email, phone.

#### From the site code / when using AJAX

Simple example:
```javascript
digitalData.events.push({
  name: 'Subscribed',
  user: {
    email: 'users.email@mail.com',
  }
});
```

Extended example:
```javascript
digitalData.events.push({
  category: 'Subscription',
  name: 'Subscribed',
  user: {
    firstName: 'Name',
    email: 'users.email@mail.com',   //depends on the subscription medium
    phone: '+79161110022',          //depends on the subscription medium
    subscriptions: [
      {
        type: 'email',            //channel
        topic: 'News'          //theme
      },
      {
        type: 'email',
        topic: 'Discounts'
      },
      {
        type: 'sms',
        topic: 'Seasonal sale'
      }
    ],
  },
  campaign: {               //This object is necessary to track the field or campaign where the user subscribed
    id: '1233214',           //optional field
    name: 'Footer subscription'
  }
});
```


#### From the SegmentStream interface
The `Subscribed` event can not be created from the built-in SegmentStream triggers. The event must be added from the site code.

#### Required by the following integrations:
* Criteo
* Facebook
* Retail Rocket
* Driveback
* Sociomantic
* Mindbox
