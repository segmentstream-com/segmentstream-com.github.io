---
layout: page
section: integrations
title: "Google BigQuery"
date: 2020-06-11
order: 1
---

## Before you begin

* Make sure you've finished a [BigQuery setup process](https://docs.segmentstream.com/bigquery/overview).

## Introduction

The Google BigQuery integration allows you to collect raw data in your own Google BigQuery data warehouse. Once connected, SegmentStream starts sending all of your users behavior data to the BigQuery cloud data storage.

## UTC offset
Select the time zone. For example, for all reports to be generated according to Moscow time, select "+03:00".

## Custom dimensions
By default, SegmentStream sends a certain set of variables to the Google BigQuery. These variables are sufficient for most data analysis tasks. If you do not have enough variables, you can send custom variables along with each event.

For example:
 - Send googleClientId to compare the data in BigQuery and Google Analytics,
 - Pass a parameter that marks if the user is logged in or not,
 - etc.

In order to configure the transmission of custom dimensions (see screenshot below):
1. Think of the name of the dimension by which you want to build reports in BigQuery
2. Write this name in the left field of the custom dimensions
3. Specify the data source:
 - **DigitalData**. Any variable that is present in the digitalData object
 - **Event**. Any variable of any event that is pushed to the  `digitalData.events` array
 - **Product**. Any variable of the `product` object
 4. Specify the name of the variable in the right field

 ![](/img/integrations.ddmstreaming.1.png)

## Custom metrics
------
Similarly to custom dimensions, SegmentStream can pass custom metrics.

> There is a big difference between metrics and parameters. A metric is a quantitative value, a number (an integer, a fractional number, a time). Parameters are data attributes. All metrics (numeric data) are calculated in the parameter sections.

In order to configure the transmission of custom metrics (see screenshot above):
1. Think of the name of the metric that will participate in calculating other metrics in BigQuery
2. Write this name in the left field of custom metric settings
3. Specify the data source:
 - **DigitalData**. Any variable that is present in the digitalData object
 - **Event**. Any variable of any event that is pushed to the  `digitalData.events` array
 - **Product**. Any variable of the `product` object
 4. Specify the name of the variable in the right field

## Data schema tables

### Data schema of hits_* table
------

Variable name | Data type | Comments
--- | --- | ---
`hitId`|`STRING`|Hit Id
`anonymousId`|`STRING`|Anonymous client Id
`emailHash`|`STRING`|User's hashed email
`userId`|`STRING`|Authorized user's Id
`projectId`|`STRING`|Project id
`projectName`|`STRING`|Project name
`receivedAt`|`TIMESTAMP`|Time the server received the event (UTC)
`sentAt`|`TIMESTAMP`|Time the event was sent from client (UTC, depends on the time set up on the computer)
`version`|`INTEGER`|Data schema version
`context`|`RECORD`|Information on the context of visiting a page
`context.browser`|`RECORD`|Description of the visitor's browser
`context.browser.major`|`STRING`|Brief information about the browser version
`context.browser.name`|`STRING`|Name of the browser
`context.browser.version`|`STRING`|Full information about the browser version
`context.campaign`|`RECORD`|Description of the last source of traffic from which the visit to the site was made
`context.campaign.content`|`STRING`|Contents of the utm_content GET-parameter
`context.campaign.medium`|`STRING`|Contents of the utm_medium GET-parameter
`context.campaign.name`|`STRING`|Contents of the utm_campaign GET-parameter
`context.campaign.source`|`STRING`|Contents of the utm_source GET-parameter
`context.campaign.term`|`STRING`|Contents of the utm_term GET-parameter
`context.device`|`RECORD`|Description of the visitor's device
`context.device.model`|`STRING`|Model of the device. Irrelevant for "desktops".
`context.device.type`|`STRING`|Device type: “desktop”, “mobile”, “tablet”
`context.device.vendor`|`STRING`|Device manufacturer. Irrelevant for "desktops".
`context.ip`|`STRING`|Visitor's IP-address.
`context.location`|`RECORD`|Description of the visitor's location
`context.location.city`|`Строка`|Visitor's city
`context.location.country`|`Строка`|Visitor's country
`context.location.region`|`Строка`|Visitor's region/state
`context.os`|`RECORD`|Description of the operating system of the visitor's device
`context.os.name`|`STRING`|Operating system name
`context.os.version`|`STRING`|Operating system version
`context.page`|`RECORD`|Description of page where the event happened
`context.page.path`|`STRING`|Page path
`context.page.referrer`|`STRING`|URL of the page from which directed the user to the current page
`context.page.title`|`STRING`|Page title
`context.page.url`|`STRING`|Page URL
`context.screenHeight`|`INTEGER`|The height of the screen of the visitor's device in pixels
`context.screenWidth`|`INTEGER`|The width of the screen of the visitor's device in pixels
`context.userAgent`|`STRING`|Information about the user's browser
`event.campaign`|`RECORD`|The array of marketing campaigns
`event.campaign.category`|`STRING`|Campaign Category
`event.campaign.design`|`STRING`|Campaign ad/banner design
`event.campaign.id`|`STRING`|Marketing campaign ID
`event.campaign.name`|`STRING`|Marketing campaign name
`event.campaign.position`|`STRING`|Location of the campaign ad/banner
`event.cart`|`RECORD`|Description of cart
`event.cart.currency`|`STRING`|Cart currency
`event.cart.id`|`STRING`|Cart Id
`event.cart.lineItems`|`RECORD`|Description of goods in the cart and their quantity.
`event.cart.lineItems.product`|`RECORD`|Description of item in the cart
`event.cart.lineItems.product.category`|`STRING`|The hierarchy of product listing categories for an item in the cart in the form of a line separated by "/"
`event.cart.lineItems.product.categoryId`|`STRING`|Listing category identifier for an item in the cart
`event.cart.lineItems.product.color`|`STRING`|Color of product in the cart
`event.cart.lineItems.product.currency`|`STRING`|Currency of product in the cart
`event.cart.lineItems.product.customDimensions`|`RECORD`|Custom dimensions of the product in the cart
`event.cart.lineItems.product.customDimensions.name`|`STRING`|Name of the custom dimension of the product in the cart
`event.cart.lineItems.product.customDimensions.value`|`STRING`|Value of the custom dimension of the product in the cart
`event.cart.lineItems.product.customMetrics`|`RECORD`|Array of custom metrics of the product in the cart
`event.cart.lineItems.product.customMetrics.name`|`STRING`|Name of the custom metric of the product in the cart
`event.cart.lineItems.product.customMetrics.value`|`FLOAT`|Value of the custom metric of the product in the cart
`event.cart.lineItems.product.id`|`STRING`|Product id of the product in the cart
`event.cart.lineItems.product.imageUrl`|`STRING`|Image URL of the product in the cart
`event.cart.lineItems.product.manufacturer`|`STRING`|Manufacturer of the product in the cart
`event.cart.lineItems.product.name`|`STRING`|Name of the product in the cart
`event.cart.lineItems.product.size`|`STRING`|Size of the product in the cart
`event.cart.lineItems.product.skuCode`|`STRING`|`Stock Keeping Unit - identifier of product variation of the product in the cart
`event.cart.lineItems.product.thumbnailUrl`|`STRING`|Thumbnail URL of the product in the cart
`event.cart.lineItems.product.unitPrice`|`FLOAT`|Price of the product in the cart not including discount
`event.cart.lineItems.product.unitSalePrice`|`FLOAT`|Price of the product in the cart including discount, the real price that is paid for the purchase of this product
`event.cart.lineItems.product.url`|`STRING`|URL of page of the product in the cart
`event.cart.lineItems.quantity`|`INTEGER`|Quantity of the particular product in the cart
`event.cart.lineItems.subtotal`|`FLOAT`|The total cost of particular good in the cart multiplied by its quantity
`event.cart.shippingCost`|`FLOAT`|Price
`event.cart.subtotal`|`FLOAT`|The total cost of the cart, not including shipping and discounts applied to the cart.
`event.cart.total`|`FLOAT`|The total cost of the cart, including shipping and discounts applied to the cart.
`event.cart.voucher`|`STRING`|A list of the identifiers of the discounts applied, separated by a comma
`event.category`|`STRING`|Event category
`event.customDimensions`|`RECORD`|Array of custom dimensions
`event.customDimensions.name`|`STRING`|Custom dimension name
`event.customDimensions.value`|`STRING`|Custom dimension value
`event.customMetrics`|`RECORD`|Array of custom metrics
`event.customMetrics.name`|`STRING`|Custom metric name
`event.customMetrics.value`|`FLOAT`|Custom metric value
`event.experiment`|`RECORD`|The experiment object for the Viewed Experiment event
`event.experiment.id`|`STRING`|`Experiment ID
`event.experiment.name`|`STRING`|Experiment Name
`event.experiment.variantId`|`STRING`|`Variant Id
`event.experiment.variantName`|`STRING`|Variant Name
`event.label`|`STRING`|Event label
`event.listing`|`RECORD`|Array of product listings
`event.listing.category`|`STRING`|The hierarchy of product categories for the listing as a string separated by "/"
`event.listing.categoryId`|`STRING`|Listing category id
`event.listing.currentPage`|`INTEGER`|The number of the listing page on which the user is located.
`event.listing.layout`|`STRING`|Layout in which the user is viewing the listing
`event.listing.listId`|`STRING`|Product list identifier
`event.listing.listName`|`STRING`|Product list name
`event.listing.pagesCount`|`INTEGER`|Number of pages with goods.
`event.listing.query`|`STRING`|Search query that generated the listing
`event.listing.resultCount`|`INTEGER`|The number of all products in the category or the number of all products found by the search query.
`event.listing.sortBy`|`STRING`|The value by which the user has sorted the list.
`event.name`|`STRING`|Event name
`event.page`|`RECORD`|Description of the page on which the event occurred
`event.page.breadcrumb`|`STRING`|The category hierarchy for the event page as a string separated by "/"
`event.page.category`|`STRING`|Page category
`event.page.hash`|`STRING`|The part of the URL after the # sign (hash)
`event.page.name`|`STRING`|Page name
`event.page.path`|`STRING`|Page URI without GET parameters
`event.page.queryString`|`STRING`|Search query for issuing a page with an event
`event.page.title`|`STRING`|Page title
`event.page.type`|`STRING`|Page type
`event.page.url`|`STRING`|Page URL
`event.product`|`RECORD`|Product description
`event.product.category`|`STRING`|The hierarchy of categories to which the product belongs, in the form of a line separated by "/"
`event.product.categoryId`|`STRING`|Product Category Id
`event.product.color`|`STRING`|Product color
`event.product.currency`|`STRING`|Currency in which the price is displayed
`event.product.customDimensions`|`RECORD`|Array of custom dimensions
`event.product.customDimensions.name`|`STRING`|Custom dimension name
`event.product.customDimensions.value`|`STRING`|Custom dimension value
`event.product.customMetrics`|`RECORD`|Array of custom metrics
`event.product.customMetrics.name`|`STRING`|Custom metric name
`event.product.customMetrics.value`|`FLOAT`|Custom metric value
`event.product.id`|`STRING`|Product id
`event.product.imageUrl`|`STRING`|URL of product image
`event.product.manufacturer`|`STRING`|Product manufacturer
`event.product.name`|`STRING`|Product name
`event.product.size`|`STRING`|Product size
`event.product.skuCode`|`STRING`|`Stock Keeping Unit - product variation identifier
`event.product.thumbnailUrl`|`STRING`|URL of product thumbnail
`event.product.unitPrice`|`FLOAT`|Product price excluding discount
`event.product.unitSalePrice`|`FLOAT`|Price of the product including discount, the real price that is paid for the purchase of this product
`event.product.url`|`STRING`|URL of product page
`event.quantity`|`INTEGER`|The amount of something, for example, the number of products. Used in events such as Added Product, Removed Product and so on
`event.step`|`INTEGER`|Step number in the funnel. Used in events such as Viewed Checkout Step, Completed Checkout Step and so on
`event.transaction`|`RECORD`|Information about the transaction
`event.transaction.currency`|`STRING`|Currency of the transaction
`event.transaction.isFirst`|`BOOLEAN`|Is this the user's first purchase
`event.transaction.lineItems`|`RECORD`|Description of goods in the transaction and their quantity.
`event.transaction.lineItems.product`|`RECORD`|Description of item in the cart
`event.transaction.lineItems.product.category`|`STRING`|The hierarchy of product listing categories for an item in the cart in the form of a line separated by "/"
`event.transaction.lineItems.product.categoryId`|`STRING`|Listing category identifier for an item in the cart
`event.transaction.lineItems.product.color`|`STRING`|Color of product in the cart
`event.transaction.lineItems.product.currency`|`STRING`|Currency of product in the cart
`event.transaction.lineItems.product.customDimensions`|`RECORD`|Array of custom dimensions of the product in the cart
`event.transaction.lineItems.product.customDimensions.name`|`STRING`|Name of the custom dimension of the product in the cart
`event.transaction.lineItems.product.customDimensions.value`|`STRING`|Value of the custom dimension of the product in the cart
`event.transaction.lineItems.product.customMetrics`|`RECORD`|Array of custom metrics of the product in the cart
`event.transaction.lineItems.product.customMetrics.name`|`STRING`|Name of the custom metric of the product in the cart
`event.transaction.lineItems.product.customMetrics.value`|`FLOAT`|Value of the custom metric of the product in the cart
`event.transaction.lineItems.product.id`|`STRING`|Product id of the product in the cart
`event.transaction.lineItems.product.imageUrl`|`STRING`|Image URL of the product in the cart
`event.transaction.lineItems.product.manufacturer`|`STRING`|Manufacturer of the product in the cart
`event.transaction.lineItems.product.name`|`STRING`|Name of the product in the cart
`event.transaction.lineItems.product.size`|`STRING`|Size of the product in the cart
`event.transaction.lineItems.product.skuCode`|`STRING`|`Stock Keeping Unit - identifier of product variation of the product in the cart
`event.transaction.lineItems.product.thumbnailUrl`|`STRING`|Thumbnail URL of the product in the cart
`event.transaction.lineItems.product.unitPrice`|`FLOAT`|Price of the product in the cart not including discount
`event.transaction.lineItems.product.unitSalePrice`|`FLOAT`|Price of the product in the cart including discount, the real price that is paid for the purchase of this product
`event.transaction.lineItems.product.url`|`STRING`|URL of page of the product in the cart
`event.transaction.lineItems.quantity`|`INTEGER`|Quantity of the particular product in the cart
`event.transaction.lineItems.subtotal`|`FLOAT`|The total cost of particular good in the cart multiplied by its quantity
`event.transaction.orderId`|`STRING`|Order id
`event.transaction.shippingCost`|`FLOAT`|Delivery price
`event.transaction.subtotal`|`FLOAT`|The total cost of the cart, not including shipping and discounts applied to the cart.
`event.transaction.total`|`FLOAT`|The total cost of the cart, including shipping and discounts applied to the cart.
`event.transaction.voucher`|`STRING`|A list of the identifiers of the discounts applied, separated by a comma
`website`|`RECORD`|Global information about the website's pages
`website.currency`|`STRING`|Currency of prices on the website
`website.environment`|`STRING`|The name of the environment for which the Digital Data Layer was created
`website.language`|`STRING`|Website language
`website.region`|`STRING`|The name of the city where the user selected store is located
`website.regionId`|`STRING`|City identifier
`website.type`|`STRING`|Type of website


### Data schema of sessions_* table
------

Variable name | Data type | Comments
--- | --- | ---
`sessionId`|`STRING`|Session ID
`anonymousId`|`STRING`|Anonymous client ID
`date`|`DATE`|Session date (YYYY-MM-DD format)
`sessionStart`|`TIMESTAMP`|Time the server received the first event of session (UTC)
`sessionNumber`|`INTEGER`|Index number of user's session
`userId`|`STRING`|Authorized user’s ID
`emailHash`|`STRING`|User’s hashed email
`totals`|`RECORD`|Summary information about the session
`totals.bounces`|`INTEGER`|If the session has only one hit then 1 else 0
`totals.pageViews`|`INTEGER`|Quantity of the visited pages during session
`totals.sessionDuration`|`FLOAT`|Session duration
`totals.transactions`|`INTEGER`|Quantity of transactions
`totals.totalTransactionRevenue`|`FLOAT`|Total revenue for transactions
`totals.hits`|`INTEGER`|Quantity of hits received during session
`totals.newSessions`|`INTEGER`|If it's the first session for the user then 1 else 0
`hits`|`RECORD`|Array of all hits of this session
`hits.hitId`|`STRING`|Hit ID
`hits.receivedAt`|`TIMESTAMP`|Time the server received the event (UTC)
`hits.event`|`RECORD`|Object with properties of event
`hits.event.name`|`STRING`|Event name
`hits.event.category`|`STRING`|Event category
`hits.event.label`|`STRING`|Event label
`hits.event.customDimensions`|`RECORD`|Array of custom dimensions
`hits.event.customDimensions.name`|`STRING`|Custom dimension name
`hits.event.customDimensions.value`|`STRING`|Custom dimension value
`hits.event.customMetrics`|`RECORD`|Array of custom metrics
`hits.event.customMetrics.name`|`STRING`|Custom metric name
`hits.event.customMetrics.value`|`FLOAT`|Custom metric value
`hits.event.page`|`RECORD`|Description of the page on which the event occurred
`hits.event.page.type`|`STRING`|Page type
`hits.event.page.name`|`STRING`|Page name
`hits.event.page.category`|`STRING`|Page category
`hits.event.page.breadcrumb`|`STRING`|The category hierarchy for the event page as a string separated by “/”
`hits.event.page.url`|`STRING`|Page URL
`hits.event.page.path`|`STRING`|Page URI without GET parameters
`hits.event.page.queryString`|`STRING`|Search query for issuing a page with an event
`hits.event.page.hash`|`STRING`|The part of the URL after the # sign (hash)
`hits.event.page.title`|`STRING`|Page title
`hits.event.experiment`|`RECORD`|The experiment object for the Viewed Experiment event
`hits.event.experiment.id`|`STRING`|Experiment ID
`hits.event.experiment.name`|`STRING`|Experiment Name
`hits.event.experiment.variantId`|`STRING`|Variant ID
`hits.event.experiment.variantName`|`STRING`|Variant Name
`hits.event.product`|`RECORD`|Product description
`hits.event.product.id`|`STRING`|Product ID
`hits.event.product.name`|`STRING`|Product name
`hits.event.product.currency`|`STRING`|Currency in which the price is displayed
`hits.event.product.unitSalePrice`|`FLOAT`|Price of the product including discount, the real price that is paid for the purchase of this product
`hits.event.product.unitPrice`|`FLOAT`|Product price excluding discount
`hits.event.product.category`|`STRING`|The hierarchy of categories to which the product belongs, in the form of a line separated by “/”
`hits.event.product.categoryId`|`STRING`|Product Category ID
`hits.event.product.url`|`STRING`|URL of product page
`hits.event.product.imageUrl`|`STRING`|URL of product image
`hits.event.product.thumbnailUrl`|`STRING`|URL of product thumbnail
`hits.event.product.manufacturer`|`STRING`|Product manufacturer
`hits.event.product.skuCode`|`STRING`|Stock Keeping Unit - product variation identifier
`hits.event.product.color`|`STRING`|Product color
`hits.event.product.size`|`STRING`|Product size
`hits.event.product.customDimensions`|`RECORD`|Array of custom dimensions
`hits.event.product.customDimensions.name`|`STRING`|Custom dimension name
`hits.event.product.customDimensions.value`|`STRING`|Custom dimension value
`hits.event.product.customMetrics`|`RECORD`|Array of custom metrics
`hits.event.product.customMetrics.name`|`STRING`|Custom metric name
`hits.event.product.customMetrics.value`|`FLOAT`|Custom metric value
`hits.event.campaigns`|`RECORD`|The array of marketing campaigns
`hits.event.campaigns.id`|`STRING`|Marketing campaign ID
`hits.event.campaigns.name`|`STRING`|Marketing campaign name
`hits.event.campaigns.category`|`STRING`|Campaign Category
`hits.event.campaigns.design`|`STRING`|Campaign ad/banner design
`hits.event.campaigns.position`|`STRING`|Location of the campaign ad/banner
`hits.event.listing`|`RECORD`|Array of product listings
`hits.event.listing.listId`|`STRING`|Product list identifier
`hits.event.listing.listName`|`STRING`|Product list name
`hits.event.listing.query`|`STRING`|Search query that generated the listing
`hits.event.listing.category`|`STRING`|The hierarchy of product categories for the listing as a string separated by “/”
`hits.event.listing.categoryId`|`STRING`|Listing category ID
`hits.event.listing.resultCount`|`INTEGER`|The number of all products in the category or the number of all products found by the search query.
`hits.event.listing.pagesCount`|`INTEGER`|Number of pages with goods.
`hits.event.listing.currentPage`|`INTEGER`|The number of the listing page on which the user is located.
`hits.event.listing.sortBy`|`STRING`|The value by which the user has sorted the list.
`hits.event.listing.layout`|`STRING`|Layout in which the user is viewing the listing
`hits.event.listItems`|`RECORD`|Array of goods in the list
`hits.event.listItems.listId`|`STRING`|List ID
`hits.event.listItems.position`|`INTEGER`|Index number of item in the list
`hits.event.listItems.product`|`RECORD`|Description of item in the list
`hits.event.listItems.product.id`|`STRING`|Product id of the product in the list
`hits.event.listItems.product.name`|`STRING`|Name of the product in the list
`hits.event.listItems.product.currency`|`STRING`|Currency of product in the list
`hits.event.listItems.product.unitSalePrice`|`FLOAT`|Price of the product in the list including discount, the real price that is paid for the purchase of this product
`hits.event.listItems.product.unitPrice`|`FLOAT`|Price of the product in the list not including discount
`hits.event.listItems.product.category`|`STRING`|The hierarchy of product listing categories for an item in the list in the form of a line separated by “/”
`hits.event.listItems.product.categoryId`|`STRING`|Listing category identifier for an item in the list
`hits.event.listItems.product.url`|`STRING`|URL of page of the product in the list
`hits.event.listItems.product.imageUrl`|`STRING`|Image URL of the product in the list
`hits.event.listItems.product.thumbnailUrl`|`STRING`|Thumbnail URL of the product in the list
`hits.event.listItems.product.manufacturer`|`STRING`|Manufacturer of the product in the list
`hits.event.listItems.product.skuCode`|`STRING`|Stock Keeping Unit - identifier of product variation of the product in the list
`hits.event.listItems.product.color`|`STRING`|Color of product in the list
`hits.event.listItems.product.size`|`STRING`|Size of the product in the list
`hits.event.listItems.product.customDimensions`|`RECORD`|Custom dimensions of the product in the list
`hits.event.listItems.product.customDimensions.name`|`STRING`|Name of the custom dimension of the product in the list
`hits.event.listItems.product.customDimensions.value`|`STRING`|Value of the custom dimension of the product in the list
`hits.event.listItems.product.customMetrics`|`RECORD`|Array of custom metrics of the product in the list
`hits.event.listItems.product.customMetrics.name`|`STRING`|Name of the custom metric of the product in the list
`hits.event.listItems.product.customMetrics.value`|`FLOAT`|Value of the custom metric of the product in the list
`hits.event.transaction`|`RECORD`|Information about the transaction
`hits.event.transaction.orderId`|`STRING`|Order ID
`hits.event.transaction.lineItems`|`RECORD`|Description of goods in the transaction and their quantity.
`hits.event.transaction.lineItems.quantity`|`INTEGER`|Quantity of the particular product in the transaction
`hits.event.transaction.lineItems.subtotal`|`FLOAT`|The total cost of particular good in the transaction multiplied by its quantity
`hits.event.transaction.lineItems.product`|`RECORD`|Description of item in the transaction
`hits.event.transaction.lineItems.product.id`|`STRING`|Product id of the product in the transaction
`hits.event.transaction.lineItems.product.name`|`STRING`|Name of the product in the transaction
`hits.event.transaction.lineItems.product.currency`|`STRING`|Currency of product in the transaction
`hits.event.transaction.lineItems.product.unitSalePrice`|`FLOAT`|Price of the product in the transaction including discount, the real price that is paid for the purchase of this product
`hits.event.transaction.lineItems.product.unitPrice`|`FLOAT`|Price of the product in the transaction not including discount
`hits.event.transaction.lineItems.product.category`|`STRING`|The hierarchy of product listing categories for an item in the transaction in the form of a line separated by “/”
`hits.event.transaction.lineItems.product.categoryId`|`STRING`|Listing category identifier for an item in the transaction
`hits.event.transaction.lineItems.product.url`|`STRING`|URL of page of the product in the transaction
`hits.event.transaction.lineItems.product.imageUrl`|`STRING`|Image URL of the product in the transaction
`hits.event.transaction.lineItems.product.thumbnailUrl`|`STRING`|Thumbnail URL of the product in the transaction
`hits.event.transaction.lineItems.product.manufacturer`|`STRING`|Manufacturer of the product in the transaction
`hits.event.transaction.lineItems.product.skuCode`|`STRING`|`Stock Keeping Unit - identifier of product variation of the product in the transaction
`hits.event.transaction.lineItems.product.color`|`STRING`|Color of product in the transaction
`hits.event.transaction.lineItems.product.size`|`STRING`|Size of the product in the transaction
`hits.event.transaction.lineItems.product.customDimensions`|`RECORD`|Array of custom dimensions of the product in the transaction
`hits.event.transaction.lineItems.product.customDimensions.name`|`STRING`|Name of the custom dimension of the product in the transaction
`hits.event.transaction.lineItems.product.customDimensions.value`|`STRING`|Value of the custom dimension of the product in the transaction
`hits.event.transaction.lineItems.product.customMetrics`|`RECORD`|Array of custom metrics of the product in the transaction
`hits.event.transaction.lineItems.product.customMetrics.name`|`STRING`|Name of the custom metric of the product in the transaction
`hits.event.transaction.lineItems.product.customMetrics.value`|`FLOAT`|Value of the custom metric of the product in the transaction
`hits.event.transaction.total`|`FLOAT`|The total cost of the transaction, including shipping and discounts applied to the transaction.
`hits.event.transaction.subtotal`|`FLOAT`|The total cost of the transaction, not including shipping and discounts applied to the transaction.
`hits.event.transaction.status`|`STRING`|Status of the transaction
`hits.event.transaction.currency`|`STRING`|Currency of the transaction
`hits.event.transaction.shippingCost`|`FLOAT`|Delivery price
`hits.event.transaction.isFirst`|`BOOLEAN`|Is this the user’s first purchase
`hits.event.transaction.voucher`|`STRING`|A list of the identifiers of the discounts applied, separated by a comma
`hits.event.cart`|`RECORD`|Description of cart
`hits.event.cart.lineItems`|`RECORD`|Description of goods in the cart and their quantity.
`hits.event.cart.lineItems.quantity`|`INTEGER`|Quantity of the particular product in the cart
`hits.event.cart.lineItems.subtotal`|`FLOAT`|The total cost of particular good in the cart multiplied by its quantity
`hits.event.cart.lineItems.product`|`RECORD`|Description of item in the cart
`hits.event.cart.lineItems.product.id`|`STRING`|Product id of the product in the cart
`hits.event.cart.lineItems.product.name`|`STRING`|Name of the product in the cart
`hits.event.cart.lineItems.product.currency`|`STRING`|Currency of product in the cart
`hits.event.cart.lineItems.product.unitSalePrice`|`FLOAT`|Price of the product in the cart including discount, the real price that is paid for the purchase of this product
`hits.event.cart.lineItems.product.unitPrice`|`FLOAT`|Price of the product in the cart not including discount
`hits.event.cart.lineItems.product.category`|`STRING`|The hierarchy of product listing categories for an item in the cart in the form of a line separated by “/”
`hits.event.cart.lineItems.product.categoryId`|`STRING`|Listing category identifier for an item in the cart
`hits.event.cart.lineItems.product.url`|`STRING`|URL of page of the product in the cart
`hits.event.cart.lineItems.product.imageUrl`|`STRING`|Image URL of the product in the cart
`hits.event.cart.lineItems.product.thumbnailUrl`|`STRING`|Thumbnail URL of the product in the cart
`hits.event.cart.lineItems.product.manufacturer`|`STRING`|Manufacturer of the product in the cart
`hits.event.cart.lineItems.product.skuCode`|`STRING`|`Stock Keeping Unit - identifier of product variation of the product in the cart
`hits.event.cart.lineItems.product.color`|`STRING`|Color of product in the cart
`hits.event.cart.lineItems.product.size`|`STRING`|Size of the product in the cart
`hits.event.cart.lineItems.product.customDimensions`|`RECORD`|Custom dimensions of the product in the cart
`hits.event.cart.lineItems.product.customDimensions.name`|`STRING`|Name of the custom dimension of the product in the cart
`hits.event.cart.lineItems.product.customDimensions.value`|`STRING`|Value of the custom dimension of the product in the cart
`hits.event.cart.lineItems.product.customMetrics`|`RECORD`|Array of custom metrics of the product in the cart
`hits.event.cart.lineItems.product.customMetrics.name`|`STRING`|Name of the custom metric of the product in the cart
`hits.event.cart.lineItems.product.customMetrics.value`|`FLOAT`|Value of the custom metric of the product in the cart
`hits.event.cart.total`|`FLOAT`|The total cost of the cart, including shipping and discounts applied to the cart.
`hits.event.cart.subtotal`|`FLOAT`|The total cost of the cart, not including shipping and discounts applied to the cart.
`hits.event.cart.currency`|`STRING`|Cart currency
`hits.event.cart.shippingCost`|`FLOAT`|Price of delivery
`hits.event.cart.id`|`STRING`|Cart Id
`hits.event.cart.voucher`|`STRING`|A list of the identifiers of the discounts applied, separated by a comma
`hits.event.quantity`|`INTEGER`|The amount of something, for example, the number of products. Used in events such as Added Product, Removed Product and so on
`hits.event.step`|`INTEGER`|Step number in the funnel. Used in events such as Viewed Checkout Step, Completed Checkout Step and so on
`hits.event.nonInteraction`|`BOOLEAN`|If event is not an interaction then true else false
`context`|`RECORD`|Context information of first page of session
`context.page`|`RECORD`|Description of page where the event happened
`context.page.path`|`STRING`|Page path
`context.page.referrer`|`STRING`|URL of the page from which directed the user to the current page
`context.page.title`|`STRING`|Page title
`context.page.url`|`STRING`|Page URL
`context.campaign`|`RECORD`|Description of the last source of traffic from which the visit to the site was made
`context.campaign.name`|`STRING`|Contents of the utm_campaign GET-parameter
`context.campaign.medium`|`STRING`|Contents of the utm_medium GET-parameter
`context.campaign.source`|`STRING`|Contents of the utm_source GET-parameter
`context.campaign.term`|`STRING`|Contents of the utm_term GET-parameter
`context.campaign.content`|`STRING`|Contents of the utm_content GET-parameter
`context.browser`|`RECORD`|Description of the visitor’s browser
`context.browser.name`|`STRING`|Name of the browser
`context.browser.major`|`STRING`|Brief information about the browser version
`context.browser.version`|`STRING`|Full information about the browser version
`context.device`|`RECORD`|Description of the visitor’s device
`context.device.model`|`STRING`|Model of the device. Irrelevant for “desktops”.
`context.device.type`|`STRING`|Device type: “desktop”, “mobile”, “tablet”
`context.device.vendor`|`STRING`|Device manufacturer. Irrelevant for “desktops”.
`context.userAgent`|`STRING`|Information about the user’s browser
`context.ip`|`STRING`|Visitor’s IP-address.
`context.screenHeight`|`INTEGER`|The height of the screen of the visitor’s device in pixels
`context.screenWidth`|`INTEGER`|The width of the screen of the visitor’s device in pixels
`website`|`RECORD`|Global information about the website
`website.type`|`STRING`|Type of website
`website.region`|`STRING`|The name of the city where the user selected store is located
`website.regionId`|`STRING`|City identifier
`website.language`|`STRING`|Website language
`website.currency`|`STRING`|Currency of prices on the website
`website.environment`|`STRING`|The name of the environment for which the Digital Data Layer was created
`version`|`INTEGER`|Data schema version
