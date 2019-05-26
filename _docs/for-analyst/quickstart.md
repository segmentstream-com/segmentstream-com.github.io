---
layout: page
section: analyst
title: "Quick Start Guide"
date: 2019-05-26
order: 0
---

## Snippet deployment

The SegmentStream container snippet is a small piece of JavaScript code that you paste into your pages. It enables SegmentStream to fire events by inserting `segmentstream.js` into the page.

To implement SegmentStream on your website:

Copy the following JavaScript and paste it as close to the opening <head> tag as possible on every page of your website, replacing `<PROJECT_ID>` with your project ID:

```html
<!-- SegmentStream snippet -->
<script type="text/javascript">
(function(h,d){d=d||"cdn.segmentstream.com";var a=window.segmentstream=window.segmentstream||[];window.ddListener=window.ddListener||[];var b=window.digitalData=window.digitalData||{};b.events=b.events||[];b.changes=b.changes||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error("SegmentStream snippet included twice.");else{a.invoked=!0;a.methods="initialize addIntegration persist unpersist on once off getConsent setConsent".split(" ");a.factory=function(k){return function(){var c=
Array.prototype.slice.call(arguments);c.unshift(k);a.push(c);return a}};for(b=0;b<a.methods.length;b++){var f=a.methods[b];a[f]=a.factory(f)}a.load=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=!0;c.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};a.loadProject=function(b){var c=window.location.search;if(0<=c.indexOf("segmentstream_test_mode=1"))try{var e=!0;window.localStorage.setItem("_segmentstream_test_mode",
"1")}catch(g){}else if(0<=c.indexOf("segmentstream_test_mode=0"))try{e=!1,window.localStorage.removeItem("_segmentstream_test_mode")}catch(g){}else try{e="1"===window.localStorage.getItem("_segmentstream_test_mode")}catch(g){}e?a.load(window.SEGMENTSTREAM_TESTMODE_INIT_URL||"https://api.segmentstream.com/v1/project/"+b+".js"):a.load(window.SEGMENTSTREAM_INIT_URL||"https://"+d+"/project/"+b+".js")};a.CDN_DOMAIN=d;a.SNIPPET_VERSION="2.0.0";a.loadProject(h)}})("<PROJECT_ID>");
</script>
<!-- //SegmentStream snippet -->
```

A lot of data can be collected by just doing the basic code installation:

* Viewed pages
* Traffic sources
* Information about browser, screen
* etc

## Connecting Google BigQuery data warehouse

1. Follow [this guide](/integrations/google-bigquery) to setup **Google BigQuery** integration.

2. Go to your website and visit few pages.

3. Make sure that data is collected in Chrome browser console:
![How data is collected in Chrome browser console](/img/for-analyst/quickstart/bigquery-collect-console.png)

4. Go to the Google Cloud Platform and check whether the new `hits_YYYYMMDD` table was created in you Google BigQuery Console:
![Image shows how hits table is created in Google BigQuery](/img/for-analyst/quickstart/bigquery_hits_table.png)
Note, that there are actualy 2 hits tables were created: `hits` and `hits_YYYYMMDD`. First one is justa template that keeps the schema and used to create daily hits tables.

5. Click on the `hits_YYYYMMDD` table and then on the "Query Table" button:
![Image shows how to query BigQuery table](/img/for-analyst/quickstart/bigquery_query_table.png)
  
6. Run the following query in the Query editor:
```sql
SELECT hitId, event.name, context FROM `<FULL_TABLE_NAME>`
```
Note, that you should use proper full table name which is automatically filled once you click "Query Table" button.

1. If everything was set up properly you will see results about pageviews from your website:
![Image shows query results about page views](/img/for-analyst/quickstart/bigquery_results_1.png)

Great! Now you've set up a real-time collection of all pageviews on your website.

## Avanced events tracking

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

1. Firstly, you need to figure out the CSS selector of the element you would like to track. It can be easily done using the Google Chrome's console. In the example below, the CSS selector of the "Show more products" button is the `.moreProducts` because the element has a CSS class `morePoducts`.
![Image shows how to find a css selector in Google Chrome console](/img/for-analyst/quickstart/click_css_selector_chrome_console.png)
If you don't know how to figure out a CSS selector of a specific elements - ask your frontend developers.

2. Now, go to the SegmentStream admin panel **Events** section and click **Add** button to add a new event as shown on the screen below:
![Image shows how to add a new click event in the admin panel](/img/for-analyst/quickstart/admin_panel_click_event_setup.png)

3. Enter event name.

4. Select `Click` as a trigger.

5. Enter proper CSS selector.

6. Add event handler:
```js
return {
  category: 'Behaviour'
  name: 'Clicked Button', // use your event name
  label: 'some label'
}
```

7. Click **Save** to save the event.

8. Click **Publish** to publish a new container (several mintes might be required for the changes to be propogated to the CDN server).

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