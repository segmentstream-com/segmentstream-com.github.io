---
layout: page
section: guides
navigation_title: "SegmentStream Google BigQuery table descriptions"
title: "SegmentStream Google BigQuery table descriptions"
date: 2023-01-05
---

The Google BigQuery dataset selected when configuring your SegmentStream project will contain all data collected and processed by the platform.

On this page we describe the tables where behavioural and ad platform data is collected.

## hitsSet table

Data from all behavioural data sources is collected into the hitsSet table.

Table schema:

Field name|Example value|Description
---|---|---
`date`|2022-03-29|Date of hit
`hitId`|9999999.1646400083_16485...|Hit Id
`hitType`|event|Type of hit (event, pageview)
`anonymousId`|9999999.1646400083|Anonymous client Id
`userId`|123456|Authorized user's Id
`gaTrackerId`|1951943138|Identifier of the GA tracker or stream
`receivedAt`|2022-03-29 20:52:20.832050 UTC|Time the server received the event (UTC)
`event`|Information on the event
`event.name`|session_start|Event name
`event.action`|session_start|Event action
`event.category`|Automatic|Event category
`event.label`|Example label|Event label
`event.value`|100|Event value
`event.customDimensions`||Custom dimension name and value pairs
`event.customDimensions.name`|gclid|Custom dimension name
`event.customDimensions.value`|Cj0KCQjwkOfZBhDNARIsAACs...|Custom dimension value
`event.customMetrics`||Array of custom metrics
`event.customMetrics.name`|ga_session_number|Custom metric name
`event.customMetrics.value`|3.0|Custom metric value
`event.page`|Description of the page on which the event occurred
`event.page.url`|https://segmentstream.com/?utm_source=goog...|Page URL
`event.page.title`|Page title
`event.product`|Product description
`event.product.id`|123XL|Product id
`event.product.name`|Shirt|Product name
`event.product.currency`|USD|Currency in which the price is displayed
`event.product.unitSalePrice`|50.99|Price of the product
`event.product.category`|Shirts|The category of the product
`event.product.manufacturer`|Shirt Co.|Product manufacturer
`event.product.customDimensions`||Array of product custom dimensions
`event.product.customDimensions.name`|variation|Custom dimension name
`event.product.customDimensions.value`|striped|Custom dimension value
`event.product.customMetrics`||Array of product custom metrics
`event.product.customMetrics.name`|stock|Custom metric name
`event.product.customMetrics.value`|99.0|Custom metric value
`event.transaction`|Information about the transaction
`event.transaction.orderId`|9999|Order id
`event.transaction.lineItems`||Description of goods in the transaction and their quantity.
`event.transaction.lineItems.product`||Description of item in the cart
`event.transaction.lineItems.product.id`|123XL|Product id of the product in the cart
`event.transaction.lineItems.product.name`|Shirt|Name of the product in the cart
`event.transaction.lineItems.product.currency`|USD|Currency of product in the cart
`event.transaction.lineItems.product.unitSalePrice`|50.99|Price of the product in the cart
`event.transaction.lineItems.product.category`|Shirts|The category of the product
`event.transaction.lineItems.product.manufacturer`|Shirt Co.|Manufacturer of the product in the cart
`event.transaction.lineItems.product.customDimensions`|Array of custom dimensions of the product in the cart
`event.transaction.lineItems.product.customDimensions.name`|Name of the custom dimension of the product in the cart
`event.transaction.lineItems.product.customDimensions.value`|variation|Value of the custom dimension of the product in the cart
`event.transaction.lineItems.product.customMetrics`|striped|Array of custom metrics of the product in the cart
`event.transaction.lineItems.product.customMetrics.name`|stock|Name of the custom metric of the product in the cart
`event.transaction.lineItems.product.customMetrics.value`|99.0|Value of the custom metric of the product in the cart
`event.transaction.lineItems.quantity`|2|Quantity of the particular product in the cart
`event.transaction.lineItems.subtotal`|101.98|The total cost of particular good in the cart multiplied by its quantity
`event.transaction.total`|105.98|The total cost of the transaction, including shipping and discounts applied to the cart
`event.transaction.tax`|0|The tax paid for the transaction.
`event.transaction.shippingCost`|5.0|Delivery price
`event.transaction.currency`|USD|Currency of the transaction
`event.transaction.voucher`|EXAMPLE|Voucher applied to the transaction
`event.step`|2|Step number in the funnel. Used in events such as Viewed Checkout Step, Completed Checkout Step and so on
`event.nonInteraction`|false|Non-interaction events are not taken into account when Google Analytics calculates bounces and session duration
`event.option`|Visa|Additional information about a checkout step


`event.campaign`|The array of marketing campaigns
`event.campaign.category`|Campaign Category
`event.campaign.design`|Campaign ad/banner design
`event.campaign.id`|Marketing campaign ID
`event.campaign.name`|Marketing campaign name
`event.campaign.position`|Location of the campaign ad/banner
`event.cart`|Description of cart
`event.cart.currency`|Cart currency
`event.cart.id`|Cart Id
`event.cart.lineItems`|Description of goods in the cart and their quantity.
`event.cart.lineItems.product`|Description of item in the cart
`event.cart.lineItems.product.category`|The hierarchy of product listing categories for an item in the cart in the form of a line separated by "/"
`event.cart.lineItems.product.categoryId`|Listing category identifier for an item in the cart
`event.cart.lineItems.product.color`|Color of product in the cart
`event.cart.lineItems.product.currency`|Currency of product in the cart
`event.cart.lineItems.product.customDimensions`|Custom dimensions of the product in the cart
`event.cart.lineItems.product.customDimensions.name`|Name of the custom dimension of the product in the cart
`event.cart.lineItems.product.customDimensions.value`|Value of the custom dimension of the product in the cart
`event.cart.lineItems.product.customMetrics`|Array of custom metrics of the product in the cart
`event.cart.lineItems.product.customMetrics.name`|Name of the custom metric of the product in the cart
`event.cart.lineItems.product.customMetrics.value`|Value of the custom metric of the product in the cart
`event.cart.lineItems.product.id`|Product id of the product in the cart
`event.cart.lineItems.product.imageUrl`|Image URL of the product in the cart
`event.cart.lineItems.product.manufacturer`|Manufacturer of the product in the cart
`event.cart.lineItems.product.name`|Name of the product in the cart
`event.cart.lineItems.product.size`|Size of the product in the cart
`event.cart.lineItems.product.skuCode`|`Stock Keeping Unit - identifier of product variation of the product in the cart
`event.cart.lineItems.product.thumbnailUrl`|Thumbnail URL of the product in the cart
`event.cart.lineItems.product.unitPrice`|Price of the product in the cart not including discount
`event.cart.lineItems.product.unitSalePrice`|Price of the product in the cart including discount, the real price that is paid for the purchase of this product
`event.cart.lineItems.product.url`|URL of page of the product in the cart
`event.cart.lineItems.quantity`|Quantity of the particular product in the cart
`event.cart.lineItems.subtotal`|The total cost of particular good in the cart multiplied by its quantity
`event.cart.shippingCost`|Price
`event.cart.subtotal`|The total cost of the cart, not including shipping and discounts applied to the cart.
`event.cart.total`|The total cost of the cart, including shipping and discounts applied to the cart.
`event.cart.voucher`|A list of the identifiers of the discounts applied, separated by a comma
`event.experiment`|The experiment object for the Viewed Experiment event
`event.experiment.id`|`Experiment ID
`event.experiment.name`|Experiment Name
`event.experiment.variantId`|`Variant Id
`event.experiment.variantName`|Variant Name
`event.label`|Event label
`event.listing`|Array of product listings
`event.listing.category`|The hierarchy of product categories for the listing as a string separated by "/"
`event.listing.categoryId`|Listing category id
`event.listing.currentPage`|The number of the listing page on which the user is located.
`event.listing.layout`|Layout in which the user is viewing the listing
`event.listing.listId`|Product list identifier
`event.listing.listName`|Product list name
`event.listing.pagesCount`|Number of pages with goods.
`event.listing.query`|Search query that generated the listing
`event.listing.resultCount`|The number of all products in the category or the number of all products found by the search query.
`event.listing.sortBy`|The value by which the user has sorted the list.

`event.quantity`|The amount of something, for example, the number of products. Used in events such as Added Product, Removed Product and so on




## cost_data table

Data from all ad platform data sources is collected into the cost_data table.

Table schema:

Field name|Example value|Description
---|---|---
date	|	2022-11-07	|	Click date
data_source_type	|	Facebook	|	Internal system name
account_id	|	364317075761027	|	Account ID in advertising system
account	|	SegmentStream	|	Account name in advertising system
campaign_id	|	23851701862180379	|	Campaign ID in advertising system
campaign	|	Webinar	|	Campaign name in advertising system
ad_group_id	|	23851701862240379	|	Ad group ID in advertising system
ad_group	|	Main	|	Ad group name in advertising system
ad_id	|	23851881929420379	|	Ad ID in advertising system
ad	|	How to optimise Google Ads to spend less & gain more	|	Ad name in advertising system
click_id	|		|	Google Click ID
click_type	|		|	Part of the ad clicked
campaign_type	|	OUTCOME_SALES	|	Campaign type in advertising system
device	|	android_smartphone	|	Device type
utm_source	|	facebook	|	UTM source tag used in the ad landing page URL
utm_medium	|	paid-social	|	UTM medium tag used in the ad landing page URL
utm_campaign	|	23851701862180379	|	UTM campaign tag used in the ad landing page URL
utm_content	|	23851881929420379	|	UTM content tag used in the ad landing page URL
utm_term	|	23851701862240379	|	UTM term tag used in the ad landing page URL
domain	|	segmentstream.com	|	Domain of the ad landing page URL
impressions	|	518	|	Number of ad impressions
clicks	|	3	|	Number of ad clicks
cost	|	6.67	|	Ad spend
currency	|	GBP	|	Reporting currency from the advertising platform
cost_in_project_currency	|	7.682023479	|	Costs recalculated in a main reporting currency of the project
project_currency	|	USD	|	Main reporting currency of the project
updated_at	|	2022-11-30 08:44:35.000000 UTC	|	Timestamp of the last time ad data was updated
keyword	|		|	Keyword from search campaigns
