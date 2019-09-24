---
layout: page
section: integrations
title: "Google BigQuery"
order: 1
---

The Google BigQuery integration allows you to collect raw data in your own Google BigQuery data warehouse. Once connected, SegmentStream starts sending all of your users behavior data to the BigQuery cloud data storage.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#settingUpBigQuery">Setting up Google BigQuery</a></li>
  <li><a href="#googleCloudProjectID">Google Cloud project ID</a></li>
  <li><a href="#bigQueryDatasetName">BigQuery dataset name</a></li>
  <li><a href="#UTCOffset">UTC offset</a></li>
  <li><a href="#customDimensions">Custom dimensions</a></li>
  <li><a href="#customMetrics">Custom metrics</a></li>
  <li><a href="#dataSchema">Data schema</a></li>
</ul>

### <a name="introduction"></a>Introduction
Setting up the Google BigQuery integration:
1. Create an account in Google BigQuery and configure the rights and roles.
2. Log in to the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
3. Go to the  "Integrations" section and select "Google BigQuery" integration.
4. In the panel that opens, configure the integration.

### <a name="settingUpBigQuery"></a>Setting up BigQuery
------
1. Log in to Google with an account that has full access to BigQuery.
2. Select a Google Cloud project or create a new one
![](/img/integrations.ddmstreaming.2.png)
3. Activate BigQuery API for your project
![](/img/integrations.ddmstreaming.3.png)
![](/img/integrations.ddmstreaming.4.png)
![](/img/integrations.ddmstreaming.5.png)
3. Login to your project's SegmentStream admin panel, and in the “Integrations” section, select the “Google BigQuery” integration.
4. Click “Authenticate with Google” and follow the instructions. After successful authorization the integration setup form will appear.
![](/img/integrations.ddmstreaming.19.png)
5. Enter your **Google Cloud Project ID** (1), you can get in on **step 2**
6. Enter your **BigQuery dataset name** (2).
> You can specify the name of an existing dataset. In this case, SegmentStream will automatically create and update tables in this dataset.
> You can also specify a new name. In this case, SegmentStream will automatically create a new Dataset.
7. The "**Disconnect**" (3) button is needed to disconnect your Google account from SegmentStream. Data streaming will end after the disconnection, but the settings will be saved.
![](/img/integrations.ddmstreaming.20.png)

### <a name="googleCloudProjectID"></a>Google Cloud project ID
Enter the Google Big Query project ID in the `Google Cloud project ID` field.
The easiest way to find the project ID is on the [google cloud console main page](https://console.cloud.google.com/):
1. Enter the console and select the required project from the drop-down list.
2. Copy the Project ID from the corresponding `Project info` widget field
![](/img/integrations.ddmstreaming.1_2.png)

### <a name="bigQueryDatasetName"></a>BigQuery dataset name
Type `segmentstream` into the BigQuery DataSet name.
> We recommend using the `segmentstream` name. If you want the data to stream into another DataSet, specify its name instead of `segmentstream`. Use only Latin letters and underscores.



### <a name="UTCOffset"></a>UTC offset
------
Select the time zone. For example, for all reports to be generated according to Moscow time, select "+03:00".


### <a name="customDimensions"></a>Custom dimensions
------
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

### <a name="customMetrics"></a>Custom metrics
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


### <a name="dataSchema"></a>Data schema
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
