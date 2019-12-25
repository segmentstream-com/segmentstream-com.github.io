---
layout: page
section: developer
title: "Events"
date: 2019-05-21 19:00:00
order: 6
---

Each action is known as an event. Each event has a **name**, like **Registered** or **Completed Transaction**, and other properties and objects, for example, a **Registered** event might have objects like `user` while **Completed Transaction** might have both `user` and `transaction` objects.

All events also may have other properties, such as `label`, `category`, `value`, `nonInteraction`, etc.
<!-- The full list of common event properties can be found [here](https://doc_link.com). -->

Here’s the payload of a typical event call that can be sent to the SegmentStream server using the HTTP (more info about HTTP requests can be found [here](/for-developer/http-api)):

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

And here’s the corresponding Javascript event that would generate the above payload:

```javascript
digitalData.events.push({
  category: "Auth",
  name: "Registered",
  label: "some label"
  user: {
    userId: "u2783187492",
    emailHash: "eff8c37862c7a2f0019448289bdd0869c30ae7f07060e4be9d",
    firstName: "John",
    lastName: "Doe"
  }
});
```

The following objects and properties will be handled by the Javascript SDK automatically:
- `context`,
- `hitId`,
- `sentAt`,
- `user.anonymousId`
