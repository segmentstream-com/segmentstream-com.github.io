---
layout: page
section: developer
title: "Postback function"
date: 2019-05-21 19:00:00
order: 6
---

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#authentication">Authentication</a></li>
  <li><a href="#dataSchema">Data schema</a></li>
  <li><a href="#supportedSemanticEvents">Supported semantic events</a></li>
  <li><a href="#customDimensionsMetrics">Custom Dimensions and Custom Metrics</a></li>
</ul>

### <a name="introduction"></a>Introduction
The postback service allows you to send data directly from your server to the SegmentStream server

Data must be sent by POST request.
The address to send postbacks is:

```
https://track.segmentstream.com/track
```

### <a name="authentication"></a>Authentication

Authentication in the Tracking API is done by sending the **API Token** in the headers with each request. Authentication uses HTTP Basic Auth, which includes “username: password”, which is encoded in base64 and supplemented with the string “Basic”.

For example, if your **API Token** is `'abc123'`, then you need to add it to the username section, and leave the password blank. In this case, we get the string `'abc123:'` and after converting to base64, it will look like `'YWJjMTIzOg=='`

As a result, the header for the HTTP request should look like this:
`'Authorization: Basic YWJjMTIzOg =='`.

>The **API Token** for a company can be obtained from your manager at SegmentStream

### <a name="dataSchema"></a>Data schema

Variable name | Data type | Comments
--- | --- | ---
hitId |	STRING |	Hit id (uuid v1). Required!
sentAt |	TIMESTAMP |	The time the event was sent from the client (UTC, depends on the time set on the computer) ISO 8601. Required!
event |	RECORD |	Event information
event.category |	STRING |	Event category
event.name |	STRING |	Event name
event.source |	STRING |	Event source
event.label |	STRING |	Event label
event.value |	INTEGER |	Event value. Must not be negative
event.user |	RECORD |	User information
event.user.emailHash |	STRING |	User's hashed email
event.user.userId |	STRING |	Authorized user's Id
event.user.anonymousId |	STRING |	Anonymous client Id
event.transaction |	RECORD |	Transaction information
event.transaction.total |	FLOAT |	The total cost of the cart, including shipping and discounts applied to the cart.
event.transaction.subtotal |	FLOAT |	The total cost of the cart, not including shipping and discounts applied to the cart.
event.transaction.status | STRING | Status of the transaction
event.transaction.currency |	STRING |	Currency of the transaction
event.transaction.voucher |	STRING |	A list of the identifiers of the discounts applied, separated by a comma
event.transaction.voucherDiscount |	STRING |	Size of applied discount
event.transaction.shippingCost |	FLOAT |	Delivery price
event.transaction.paymentMethod |	STRING |	Payment method
event.transaction.orderId |	STRING |	Order Id
event.transaction.lineItems |	RECORD |	Description of goods in the transaction and their quantity.
event.transaction.lineItems.quantity |	INTEGER |	Quantity of the particular product in the order
event.transaction.lineItems.subtotal |	FLOAT |	The total cost of particular good in the cart multiplied by its quantity
event.transaction.lineItems.product |	RECORD |	Description of item in the cart
event.transaction.lineItems.product.id |	STRING |	Product id of the product in the cart
event.transaction.lineItems.product.name |	STRING |	Name of the product in the cart
event.transaction.lineItems.product.currency |	STRING |	Currency of product in the cart
event.transaction.lineItems.product.unitSalePrice |	FLOAT |	Price of the product in the cart including discount, the real price that is paid for the purchase of this product
event.transaction.lineItems.product.unitPrice |	FLOAT |	Price of the product in the cart not including discount
event.transaction.lineItems.product.category |	STRING |	The hierarchy of product listing categories for an item in the cart in the form of a line separated by "/"
event.transaction.lineItems.product.categoryId |	STRING |	Listing category identifier for an item in the cart
event.transaction.lineItems.product.manufacturer |	STRING |	Manufacturer of the product in the cart
event.transaction.lineItems.product.skuCode |	STRING |	Stock Keeping Unit - identifier of product variation of the product in the cart
event.transaction.lineItems.product.stock |	INTEGER |	Remaining product units
event.nonInteraction | BOOLEAN | Event passed without user interaction
event.website |	RECORD |	Global information about the website's pages
event.website.region |	STRING |	The name of the city where the user selected store is located
event.website.regionId |	STRING |	City identifier
event.website.environment |	STRING |	The name of the environment for which the Digital Data Layer was created
event.website.currency |	STRING |	Currency of prices on the website
context |	RECORD |	Information on the context of the event
context.ip |	STRING |	User's IP address
integrations |	RECORD |	Additional integration parameters
integrations.Google Analytics |	RECORD |	Google Analytics integration parameters
integrations.Google Analytics.clientId |	STRING |	Google Analytics client ID saved in cookie (gclid)

Example:

```
{
  "hitId": "4c59d330-35c7-11e9-8f27-8d1d7d4690e7",
  "sentAt": "2019-02-21T10:56:10.723Z",
  "event": {
    "category": "Ecommerce",
    "name": "Completed Transaction",
    "nonInteraction": true,
    "source": "CRM",
    "user": {
      "emailHash": "eff8c37862c7a2f0019448289bdd0869c30ae7f07060e4be9d",
      "userId": "u2783187492",
      "anonymousId": "80ddb140-35c6-11e9-bd56-eb1c05e6de18"
    },
    "transaction": {
      "total": 3029,
      "subtotal": 3029,
      "currency": "USD",
      "voucher": "",
      "status": "started",
      "voucherDiscount": 0,
      "shippingCost": 0,
      "paymentMethod": "Online",
      "orderId": "4686570087",
      "lineItems": [
        {
          "product": {
            "id": "64800237",
            "name": "ESTEE LAUDER Beautiful Belle",
            "currency": "USD",
            "unitSalePrice": 3029,
            "unitPrice": 5049,
            "category": "Women's Perfumes/Perfumes",
            "categoryId": "49252",
            "manufacturer": "ESTEE LAUDER",
            "skuCode": "79300753",
            "stock": 2
          },
          "quantity": 1,
          "subtotal": 3029
        },
				{
          "product": {
            "id": "64800237",
            "name": "ESTEE LAUDER Beautiful Belle",
            "currency": "USD",
            "unitSalePrice": 3029,
            "unitPrice": 5049,
            "category": "Women's Perfumes/Perfumes",
            "categoryId": "49252",
            "manufacturer": "ESTEE LAUDER",
            "skuCode": "79300753",
            "stock": 2
          },
          "quantity": 1,
          "subtotal": 3029
        }
      ]
    },
    "website": {
      "region": "New York",
      "regionId": "8113",
      "environment": "production",
      "currency": "USD"
    }
  },
  "context": {
    "ip": "123.22.334.55"
  },
  "integrations": {
    "Google Analytics": {
      "clientId": "13332315.454547"
    }
  }
}
```


### <a name="supportedSemanticEvents"></a>Supported semantic events

* Completed Transaction
* Updated Transaction - Only for Google BigQuery integration

> Other events are sent as Custom Events

### Supported integrations

* Google Analytics
* Google BigQuery
* OWOX BI Streaming

### <a name="customDimensionsMetrics"></a>Custom Dimensions and Custom Metrics

Server-side postback supports all custom dimensions and custom metrics set up in the integration's admin-panel.
