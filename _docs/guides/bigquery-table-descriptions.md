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
`event`||Information on the event
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
`event.page`||Description of the page on which the event occurred
`event.page.url`|https://segmentstream.com/?utm_source=goog...|Page URL
`event.page.title`|T-shirt|Page title
`event.product`||Product description
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
`event.transaction`||Information about the transaction
`event.transaction.orderId`|9999|Order id
`event.transaction.lineItems`||Description of goods in the transaction and their quantity.
`event.transaction.lineItems.product`||Description of item in the cart
`event.transaction.lineItems.product.id`|123XL|Product id of the product in the cart
`event.transaction.lineItems.product.name`|Shirt|Name of the product in the cart
`event.transaction.lineItems.product.currency`|USD|Currency of product in the cart
`event.transaction.lineItems.product.unitSalePrice`|50.99|Price of the product in the cart
`event.transaction.lineItems.product.category`|Shirts|The category of the product
`event.transaction.lineItems.product.manufacturer`|Shirt Co.|Manufacturer of the product in the cart
`event.transaction.lineItems.product.customDimensions`||Array of custom dimensions of the product in the cart
`event.transaction.lineItems.product.customDimensions.name`|variation|Name of the custom dimension of the product in the cart
`event.transaction.lineItems.product.customDimensions.value`|striped|Value of the custom dimension of the product in the cart
`event.transaction.lineItems.product.customMetrics`||Array of custom metrics of the product in the cart
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
`context`||Information on the context of the page visit
`context.page`||Information on visited page
`context.page.url`|https://segmentstream.com/?utm_source=goog...|Page URL
`context.page.title`|T-shirt|Page title
`context.page.referrer`|https://google.com|URL of the page from which the user was directed to the current page
`context.campaign`||Description of the last source of traffic from which the visit to the site was made
`context.campaign.name`|webinar|Contents of the utm_campaign GET-parameter
`context.campaign.medium`|cpc|Contents of the utm_medium GET-parameter
`context.campaign.source`|google|Contents of the utm_source GET-parameter
`context.campaign.term`|optimise ad spend|Contents of the utm_term GET-parameter
`context.campaign.content`|banner|Contents of the utm_content GET-parameter
`context.campaign.gclid`||Contents of the gclid parameter
`context.campaign.fbclid`||Contents of the fbclid parameter
`context.campaign.yclid`||Contents of the yclid parameter
`context.browser`||Description of the visitor’s browser
`context.browser.name`|Chrome|Name of the browser
`context.browser.version`|99.0.4844.51|Browser version
`context.browser.language`|en-us|Browser language
`context.device`||Description of the visitor’s device
`context.device.model`|SM-G996B|Model of the device. Irrelevant for “desktops”.
`context.device.type`|mobile|Device type: “desktop”, “mobile”, “tablet”
`context.device.vendor`|Samsung|Device manufacturer. Irrelevant for “desktops”.
`context.device.screenResolution`|300x500|Device resolution








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
keyword	|	how to optimise ad spend	|	Keyword from search campaigns
