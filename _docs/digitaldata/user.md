---
layout: page
section: digitaldata
title: "user"
order: 1
---

The `digitalData.user` object contains the variables that describe the visitor of the site: name, email, phone, identifier in the CRM, RFM segment etc.


## Introduction
------
The `digitalData.user` object must be declared and filled in the source code of each page of the site.

> Declare the variable and give it an empty object `{}`, If there is no information about the visitor. If the user is not authorized, but the system recognized him - fill the object `digitalData.user` to the maximum.

Example:
```javascript
window.digitalData = {
  ...,
  user: {
    firstName: "John",
    userId: "4638mn1",
    email: "jdoe@example.com",
    isLoggedIn: true,
    isReturning: true,
    isSubscribed: false,
    googleClientId: "1234566778.7548375999",
    lastName: "Doe",
    hasTransacted: true,
    lastTransactionDate: "2017-12-01T09:00Z",
    segment: {
      rfm: "vip",
      churnRisk: "low",
      LTV: 178990
    }
  },
  ...
}
```

> The `digitalData.user` object can contain other variables as well. Everything depends on the needs of the project. This document lists the variables that are used frequently.

## user.userId
------
Data type: string.

`user.userId` - a reserved variable that contains the primary identifier of the site visitor in your database, thus can only be used if your site has its own authentication system. A visitor can have only 1 userId.

## user.anonymousId
------
Data type: string.

`user.anonymousId` - a reserved variable that contains a unique browser identifier.

Using this variable allows you to idenfity unique users across browsing sessions, but it will not enable you to identify users across different browsers or devices. If you need to track users across any devices they use you have to use the [`user.userId`](#user.userId) variable.

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

## user.email
------
Data type: string.

`user.email` - a reserved variable that contains the visitor's email address. In the case of multiple email addresses from one visitor, send the main address in the `user.email` variable. All other addresses can be passed to the `user.emails = ['email1@mail.ru', 'email2@yandex.ru']` array.

## user.phone
------
Data type: string.

`user.phone` - a reserved variable that contains the visitor's phone number. If there are several phone numbers from one visitor, send the main number in the `user.phone` variable. All other numbers can be passed to the `user.phones = ['79161001010', '79161002020']` array.

## user.isLoggedIn
------
Data type: boolean.

`user.isLoggedIn` - reserved variable that contains the authorization status of the visitor. If the visitor is logged in, the variable `user.isLoggedIn` becomes 'true'. Otherwise, 'false'.

## user.everLoggedIn
------
Data type: boolean.

`user.everLoggedIn` - reserved variable that describes if the user has ever been authorized.

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

## user.firstName
------
Data type: string.

`user.firstName` - reserved variable that contains the visitor's name.

## user.lastName
------
Data type: string.

`user.lastName` - reserved variable that contains the visitor's last name.

## user.isReturning
------
Data type: boolean.

`user.isReturning` contains information about the fact that the user has previously visited the website. In case the user visits the site for the first time, the variable takes the value 'false', in the opposite case, 'true'. The term visit is defined by the [session timeout](/javascript-sdk/settings#session-length-in-seconds).

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

## user.isSubscribed
------
Data type: boolean.

`user.isSubscribed` - reserved variable that contains information about the status of a user's subscription to an email newsletter. If the user is subscribed to a newsletter, the variable takes the value 'true'. Otherwise, 'false'.

## user.hasTransacted
------
Data type: boolean.

`user.hasTransacted` - contains information about the user's purchases. If the user previously created orders, the variable takes the value 'true'. In the opposite case - 'false'.

## user.lastTransactionDate
------
Data type: string in ISO 8601 format.

`user.lastTransactionDate` - contains the date of the last time the user completed a transaction.
>Do not declare this variable if the user hasn't completed any orders earlier

## user.lastDeliveryDate
------
Data type: string in ISO 8601 format.

`user.lastDeliveryDate` - contains the date the user last received an order.
>Do not declare this variable if no order has been delivered to the user

## user.birthDate
------
Data type: string in ISO 8601 format.

`user.birthDate` - contains the date of birth of the user.
>Do not declare this variable if there is no information on the user's birthday

## user.googleClientId
------
Data type: string.

`user.googleClientId` - contains the browser identifier in the Google Analytics system.
>This variable is declared and populated automatically by the SegmentStream library when you enable the GA integration via SegmentStream.

## user.segment
------
Data type: object.

`user.segment` is an object that contains variables that characterize the user.
>If you use different types of segmentation of your users: RFM, LTV, Sale, etc. - describe them in an object inside `digitalData.user.segment`.
