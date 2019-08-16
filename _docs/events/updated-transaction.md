---
layout: page
section: events
title: "Updated Transaction"
order: 3
---

The `Updated Transaction` event should be pushed to the `digitalData.events` array when transaction data changed, e.g. user pay the bill, order delivered, canceled etc.


Code example:
```javascript
digitalData.events.push({
  name: 'Updated Transaction',
  nonInteraction: true,
  transaction: {
    orderId: "QA-123456",
    currency: "RUB",
    subtotal: 25000,
    status: "completed",
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

#### From the SegmentStream interface
**Trigger**: event `Viewed Page`,

**Event handler**:
```javascript
if (
  _digitalData('page.type') === 'confirmation' &&
  _digitalData('transaction.isReturning') !== true
) {
  return {
    category: 'Ecommerce',
    name: 'Updated Transaction',
    transaction: _digitalData('transaction')
  };
}
```

