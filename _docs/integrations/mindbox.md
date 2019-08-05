---
layout: page
section: integrations
title: "Mindbox"
order: 1
---

In this section, you will learn:
* How to enable or disable Mindbox on your site.
* How to send custom parameters and events to Mindbox.

Mindbox is a platform for automated direct communication with clients: email, push, sms, instant messengers. SegmentStream allows you to send data about the behavior of your users to [Mindbox](https://mindbox.ru).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#Requirements">Requirements</a></li>
  <li><a href="#EndpointID">Endpoint ID</a></li>
  <li><a href="#WebPush">Web push</a></li>
  <li><a href="#UserVariables">User Variables</a></li>
  <li><a href="#OrderVariables">Order Variables</a></li>
  <li><a href="#ProductVariables">Product Variables</a></li>
  <li><a href="#OperationMapping">Operation Mapping</a></li>
  <li><a href="#CustomerIDmapping">Customer IDs mapping</a></li>
  <li><a href="#ProductIDmapping">Product IDs mapping</a></li>
  <li><a href="#ProductSKUIDmapping">Product SKU IDs mapping</a></li>
  <li><a href="#ProductCategoryIDmapping">Product category IDs mapping</a></li>
  <li><a href="#AreaIDmapping">Area IDs mapping</a></li>
  <li><a href="#OrderIDmapping">Order IDs mapping</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
With SegmentStream, you can fully integrate Mindbox with your site.

To set up integration with Mindbox:
1. Log in to [segmentstream.com](https://admin.segmentstream.com/)
2. Go to the "Integration" tab and click on the block with the Mindbox logo.
3. In the panel that opens, configure the integration.
![](/img/integrations.mindbox.integrationpanel.png)
<br />
Read below for more information about the integration settings.

> Mindbox API V2 is no longer supported by developers. Below is a description on how to integrate the site with Mindbox API V3.

### <a name="Requirements"></a>Requirements
------
Before setting up the integration in the SegmentStream panel, you need to register in the connected system and prepare all the necessary data:
- Request the technical specification for the integration from your Mindbox manager.
- Ask the manager for the `endpointId` system field. The mindbox manager might say that this field is not needed or is out of date.

### <a name="EndpointID"></a>EndpointID
------
This is the `endpointId` system field in the initialization snippet. You can get it from Mindbox. <br/>
[Mindbox documentation on calling the main tracker](https://developers.mindbox.ru/docs/%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80)

> If there is no `endpointId` field in your technical specification, then the mindbox library determines the access point by domain automatically. In this case, leave the field blank.

### <a name="WebPush"></a>Web push
------
For Web push notifications to work several steps have to be completed, they are described in detail below. For more details you can see the [Mindbox Webpush documentation](https://docs.google.com/document/d/1TzJLJRpTOhD1GNPhB6ANlpwTLgggCSJEWLzKi-pa7GU/edit#heading=h.432hw3hw9ey8).
![](/img/integrations.mindbox.push.png)

- By toggling the (1) 'Web push' option, you enable the Mindbox Webpush module and load the manifest file.
- In case the 'Serviceworker' file isn't in the root of your website as recommended in the Mindbox documentation, you can enable the (2) 'Custom ServiceWorker path' option, which will allow you to enter a custom path for the file in the (3) 'ServiceWorker path' field.
- The (4) 'Push subscription trigger event' field contains the name of the event that activates the push notification subscription pop-up.
- The (5) Webpush sender ID field should contain your Firebase messaging Sender Id, which you can get from your Mindbox manager.

> Please note! The service worker file must be registered at the root directory of your website.

> If you don’t want to register it at the root directory, you must set a scope config when registering the service worker. See the example below:

```
navigator.serviceWorker.register('/assets/service-worker.js', { scope: '/' })
  .then(function() {
    return navigator.serviceWorker.ready;
  })
  .then(function(registration) {
    console.log(registration); // service worker is ready and working...
  });
```

> Finally, you must add a Service-Worker-Allowed header to the server which serves the service worker file. Otherwise, the browser will block your registration for security reasons.
`Service-Worker-Allowed: ‘/’`
*Note that the header’s value is the same as the scope’s value.*

### <a name="UserVariables"></a>User Variables
------
User variables are a set of characteristics that describe a user: first name, last name, telephone number, email address, and so on. In the Mindbox specification, the `data.customer` object describes the names of variables that are needed for the integration, for example: `lastName`, `firstName`, `mobilePhone`...

In the left part of this setting you need to specify the Mindbox variable name and in the right part - the variable name in digitalData.

![](/img/integrations.mindbox.userVariables.png)

### <a name="OrderVariables"></a>Order Variables
------
Order variables are a custom set of characteristics that you can set to describe an order. They are passed into the `data.order.customFields` object described in the Mindbox specification.

### <a name="ProductVariables"></a>Product Variables
------
Product variables are a set of characteristics that describe products on the site: price, name, size, color, and so on. By default, SegmentStream sends: product ID, price, number of units added to the cart.

In case you need to pass additional parameters, you need to fill the product variable setting: on the left - the name of the Mindbox variable, on the right - the name of the digitalData variable.

> Since the 'product' object is found in many places of the 'digitalData' object: `digitalData.product`, `digitalData.cart.lineItems[]`, `digitalData.transaction.lineItems[]` and others, use only the variable name in the setting without full path to it. SegmentStream itself will understand in what situation from which place to retrieve information about the product.

### <a name="OperationMapping"></a>Operation Mapping
------
Information is passed to Mindbox in the form of events. As there are no reserved names for certain events in the Mindbox system, you need to set up the operation mapping manualy, for example: the mindbox 'EnterSite' operation corresponds to the 'Logged In' event.

The list of names of necessary operations should be in the Mindbox specification sent to you by your Mindbox manager.

![](/img/integrations.mindbox.operationMapping.png)

### <a name="CustomerIDmapping"></a>Customer IDs mapping
------
Depending on the characteristics of the Mindbox specification, each site visitor may have one or more identifiers.
Customer identifiers can be found in the Mindbox specification:

```javaScript
mindbox('async', {
  operation: '<operation name>',
  data: {
    customer: {
      ids: {
      	<identifier>: '<identifier value>',
      },
      ...
    },
    ...
  }
);
```
The key name must be specified in the integration settings. In the appropriate field, specify from which `digitalData` variable the identifier should be retrieved from. In most cases, it will be `digitalData.user.userId`.

### <a name="ProductIDmapping"></a>Product IDs mapping
------
Depending on the characteristics of the Mindbox specification, each product on the website may have one or more identifiers.
Product identifiers can be found in the Mindbox specification:

```javaScript
mindbox('async', {
  operation: '<Operation name>',
  data: {
    customer: {
      ids: {
      	<Identifier>: '<Identifier value>',
      },
    },
    productList: [
      {
        product: {
          ids: {
            <Identifier>: '<Product identifier value>'
          },
          sku: {
            ids: {
              <Identifier>: '<Product SKU identifier value>'
            }
          }
        },
        count: <Selected product quantity>,
        price: <Total price>
      }
      ...
    ]
  }
});
```
The key name must be specified in the integration settings. In the appropriate field, specify from which `digitalData` variable the identifier should be retrieved from. In most cases, it will be `digitalData.product.id`.

### <a name="ProductSKUIDmapping"></a>Product SKU IDs mapping
------
The key name must be specified in the integration settings as in the [Product IDs Mapping](#ProductIDmapping) setting. In the appropriate field, specify from which `digitalData` variable the identifier should be retrieved from. In most cases, it will be `digitalData.product.skuCode`.

### <a name="ProductCategoryIDmapping"></a>Product Category IDs mapping
------
Depending on the characteristics of the Mindbox specification, each category on the website may have one or more identifiers.
Category identifiers can be found in the Mindbox specification:

```javaScript
mindbox('async', {
  operation: '<Operation name>',
  data: {
    productCategory: {
      ids: {
        <Identifier>: '<Category identifier value>'
      }
    }
  }
});
```
The key name must be specified in the integration settings. In the appropriate field, specify from which `digitalData` variable the identifier should be retrieved from. In most cases, it will be `digitalData.listing.categoryId`.

### <a name="AreaIDmapping"></a>Area IDs mapping
------
Depending on the characteristics of the Mindbox specification, the region set by a user on the website may have one or more identifiers.
Region identifiers can be found in the Mindbox specification:

```javaScript
mindbox('async', {
  operation: '<Operation name>',
  data: {
    customer: {
      area: {
        ids: {
          <Identifier>: '<Region identifier value>'
        }
      }
    }
  }
});
```
The key name must be specified in the integration settings. In the appropriate field, specify from which `digitalData` variable the identifier should be retrieved from. In most cases, it will be `digitalData.website.regionId`.

### <a name="OrderIDmapping"></a>Order IDs mapping
------
Depending on the characteristics of the Mindbox specification, the order on the website may have one or more identifiers.
Region identifiers can be found in the Mindbox specification:

```javaScript
mindbox("async", {
  operation: '<Operation name>',
  data: {
    "order": {
      //...other order data
      "ids": {
        <Identifier>: '<Order identifier value>'
      }
    }
  },
});
```

The key name must be specified in the integration settings. In the appropriate field, specify from which `digitalData` variable the identifier should be retrieved from. In most cases, it will be `digitalData.transaction.orderId`.
