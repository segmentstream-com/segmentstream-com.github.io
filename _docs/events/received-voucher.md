---
layout: page
section: events
title: "Received Voucher"
order: 2
---
> Optional event given as an example.

The `Received Voucher` event must be pushed to the `digitalData.events` array when the server responds with a message about a successful voucher/promocode application.

## From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Received Voucher'
})
```

## From the SegmentStream interface
The `Received Voucher` event can not be created from the built-in SegmentStream triggers. The event must be added from the site code.
