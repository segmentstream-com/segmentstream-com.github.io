---
layout: page
section: events
title: "Viewed Page"
order: 2
---
`Viewed Page` is a base event that is automatically pushed to the `digitalData.events` array  when the SegmentStream library is loaded. If your site uses AJAX technology, it may be necessary to send the Viewed Page event without a full page reload. To do this you need to push the event to the `digitalData.events` array from the site code:
#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Viewed Page'
});
```
#### From the DDManager interface
> You dont have to create the `Viewed Page` event. You can always use this event as a trigger when creating other events.

#### Required by the following integrations:
* Google Analytics
* Yandex Metrica
