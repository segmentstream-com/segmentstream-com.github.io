---
layout: page
section: javascript-sdk
title: "Quick Start guide"
date: 2019-06-11
order: 0
---

## Before you begin

1. [Set up BigQuery and connect it to SegmentStream](/bigquery/overview){:target="_blank"}.
2. Make sure that [SegmentStream JavaScript snippet](/javascript-sdk/snippet){:target="_blank"} is deployed on all website pages.

## Real-time event data collection

1. Go to your website and visit a few pages.

2. Make sure that data is collected in the Chrome browser console:
![How data is collected in Chrome browser console](/img/for-analyst/quickstart/bigquery-collect-console.png)

3. Go to the Google Cloud Platform and check whether the new `hits_YYYYMMDD` table was created in you Google BigQuery Console:
![Image shows how hits table is created in Google BigQuery](/img/for-analyst/quickstart/bigquery_hits_table.png)
Note, that there are actually 2 hits tables were created: `hits` and `hits_YYYYMMDD`. First one is just a template that keeps the schema and used to create daily hits tables.

4. Click on the `hits_YYYYMMDD` table and then on the "Query Table" button:
![Image shows how to query BigQuery table](/img/for-analyst/quickstart/bigquery_query_table.png)

5. Run the following query in the Query editor:
```sql
SELECT hitId, event.name, context FROM `<FULL_TABLE_NAME>`
```
Note, that you should use proper full table name which is automatically filled once you click "Query Table" button.

6. If everything was set up properly you will see results about pageviews from your website:
![Image shows query results about page views](/img/for-analyst/quickstart/bigquery_results_1.png)

Great! Now you've set up a real-time collection of all page views on your website.

## Advanced events tracking

Let's imagine you have an e-commerce website and would like to track all user transactions. Of cause, this should be properly set up by developers but for the purpose of this quick guide let's send a "fake" transaction.

1. Open Chome browser console and copy-paste the following code:
```js
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Completed Transaction',
  transaction: {
    orderId: "QA-123456",
    currency: "USD",
    subtotal: 310,
    shippingCost: 10,
    shippingMethod: "Delivery",
    total: 320,
    lineItems: [
      {
        product: {
          id: "1234567890",
          name: "Timberland shoes",
          manufacturer: "Timberland",
          category: ["Shoes","Boots"],
          currency: "USD",
          unitPrice: 150,
          unitSalePrice: 110,
          skuCode: "TBL6065RW",
        },
        quantity: 2,
        subtotal: 220
      },
      {
        product: {
          id: "54563454",
          name: "Nike shoes",
          manufacturer: "Nike",
          category: ["Shoes","Sport"],
          currency: "USD",
          unitPrice: 120,
          unitSalePrice: 90,
          skuCode: "TBL6065ZX",
        },
        quantity: 1,
        subtotal: 90
      }
    ]
  }
});
```
![Image shows how to track transactions using Google Chrome's console](/img/for-analyst/quickstart/transaction-track.png)

2. Go back to the Google BigQuery console, click on `hits_YYYYMMDD` table and again click on "Query Table" button. At this time let's select all tracked transactions using the following query:
```sql
SELECT event.transaction
FROM `<FULL_TABLE_NAME>`
WHERE event.name = "Completed Transaction"
```
Again, don't forget to replace `<FULL_TABLE_NAME>` with your proper full table name.

3. You should observe similar results:
4. ![Image shows query results about transactions](/img/for-analyst/quickstart/bigquery_results_2_transactions.png)

## Behavioral events tracking

Finally, let's try to set up tracking of a behavioral event, such as click.

1. Firstly, you need to figure out the CSS selector of the element you would like to track. It can be easily done using Google Chrome's console. In the example below, the CSS selector of the "Show more products" button is the `.moreProducts` because the element has a CSS class `morePoducts`.
![Image shows how to find a CSS selector in Google Chrome console](/img/for-analyst/quickstart/click_css_selector_chrome_console.png)
If you don't know how to figure out a CSS selector of a specific element - ask your frontend developers.

2. Now, go to the SegmentStream admin panel **Events** section and click **Add** button to add a new event as shown on the screen below:
![Image shows how to add a new click event in the admin panel](/img/for-analyst/quickstart/admin_panel_click_event_setup.png)

3. Enter the event name.

4. Select `Click` as a trigger.

5. Enter the proper CSS selector.

6. Add event handler:
```js
return {
  category: 'Behaviour'
  name: 'Clicked Button', // use your event name
  label: 'some label'
}
```

7. Click **Save** to save the event.

8. Click **Publish** to publish a new container (up to several minutes might be required for the changes to be propagated to the CDN server).

9. Reload your website's page, go back to the Google Chrome's browser console and check that your click handler is working properly:
![Image shows how to check whether click handler is working using Google Chrome console](/img/for-analyst/quickstart/click_event_debug.png)

10.  Go to the Google BigQuery console and query information about your click event:
```sql
SELECT
  hitId,
  event.name,
  event.category,
  event.label,
  context,
  receivedAt
FROM `<FULL_TABLE_NAME>`
WHERE event.name = "<EVENT_NAME>"
```
Don't forget to replace `<FULL_TABLE_NAME>` and `<EVENT_NAME>` with proper values.

Now you know how to setup basic events tracking and in SegmentStream and send this event to the **Google BigQuery** integration.

Similarly, you can connect any other integration, such as **Google Analytics** or **Facebook**. SegmentStream will automatically transform events in a proper format which each of these systems understand.

For example, this is how click event from the previous step will look like in the **Google Analytics** interface:
![Image shows how click event looks like in Google Analytics](/img/for-analyst/quickstart/click_event_ga.png)

## What's next

* [Connect advertising data sources](/datasources/index) to enable automatic marketing campaign performance data import.
* Learn how to [importing offline data using JSON feed](/guides/json-feed-offline-data-import)
* Set up [server-side events tracking using HTTP API](/http-api/overview).
