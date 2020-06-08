---
layout: page
section: events
title: "Completed Transaction"
order: 2
---

The `Completed Transaction` event must be pushed to the `digitalData.events` array when the page informing the user about a successfully created order is loaded ("Thank you" page).

## From the site code / when using AJAX
In some cases, it's necessary adding the `Completed Transaction` event from the site code:
* If you use a "1 click purchase" and the server sends a response about a successful purchase and there is no redirect to the "Thank you for your purchase" page, the purchase event should be added to the `digitalData.events` array from the site code.
* if the user selects "online payment" and before redirecting to the "Thank you for your purchase" page, a redirect to the payment system gateway occurs, the following actions should be taken before the redirect:
1. The order ID should be received from the server response creating the transaction.
2. The `Completed Transaction` event should be pushed to the `digitalData.events` array.
3. A small delay should be added to the redirect to make sure that the data has enough time to be passed to all integrations.

In the event that the payment system site fails, you will not lose the order information.

Example:
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Completed Transaction',
  nonInteraction: false,
  transaction: {
    orderId: "QA-123456",
    currency: "RUB",
    subtotal: 25000,
    status: "started",
    shippingCost: 1000,
    shippingMethod: "Delivery",
    total: 26000,
    lineItems: [
      {
        product: {
          id: "1234567890",
          name: "Timberland shoes",
          manufacturer: "Timberland",
          category: ["Shoes","Boots"],
          currency: "RUB",
          unitPrice: 12990,
          unitSalePrice: 10990,
          skuCode: "TBL6065RW",
        },
        quantity: 2,
        subtotal: 10990
      }
    ]
  }
});
```
> For a detailed description of the `transaction` object, see the section for developers.

## From the SegmentStream interface
**Trigger**: event `Viewed Page`,

**Event handler**:
```javascript
if (
  _digitalData('page.type') === 'confirmation' &&
  _digitalData('transaction.isReturning') !== true
) {
  return {
    category: 'Ecommerce',
    name: 'Completed Transaction',
    nonInteraction: false,
    transaction: _digitalData('transaction')
  };
}
```

## Required by the following integrations:
* Adwords
* Criteo
* Facebook
* MyTarget
* Retail Rocket
* RTB House
* Sociomantic
* Segmento
* Yandex.Metrica
* Google Analytics (Enhanced Ecommerce)
* Admitad
* GdeSlon
