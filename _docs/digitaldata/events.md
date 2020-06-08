---
layout: page
section: digitaldata
title: "events"
order: 1
---

The array `digitalData.events` contains a list of objects. Each object describes an event that occurred on the site from the moment the page was loaded to the next reload: 'Viewed Page', 'Viewed Product Detail', 'Clicked Banner', 'Add to Cart', 'Purchase' and many others.

>Each object of the array `digitalData.events` has only one required field: `name`. We strongly recommend that to adhere to our [naming convention](/javascript-sdk/events#event-naming-convention).

Example:
```javascript
window.digitalData = {
  ...,
  events: [
    { //Add item to shopping cart event
      name: "Added Product",
      category: "Ecommerce",
      product: {/*all variables of the product object*/}
    },
    { //Email subscription event
      name: "Subscribed",
      category: "Email",
      user: {
        email: "johndoe@example.com"
      }
    }
  ],
  ...
}
```

You can add an event to the array `digitalData.events` in two ways:
 - From the website code, using the standard `array.push()` method:
  ```javascript
digitalData.events.push({
  name: "Added Product",
  category: "Ecommerce",
  product: {/*all variables of the product object*/}
});
  ```
 - From the admin panel interface, based on other events and the content of the object `digitalData`

>For more details on working with events, see inside the section "javascript-sdk": [Events](/javascript-sdk/events)
