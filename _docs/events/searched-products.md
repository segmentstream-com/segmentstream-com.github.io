---
layout: page
section: events
title: "Searched Products"
order: 2
---
The `Searched Products` event must be pushed to the `digitalData.events` array when a search result page is loaded.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Searched Products'
})
```


#### From the DDManager interface
**Trigger**: event `Viewed Page`
```javascript
if (_digitalData('page.type') === 'search') {
  return { name: 'Searched Products' };
}
```

#### Required by the following integrations:
* Adwords
* Criteo
* Facebook
* Retail Rocket
* RTB House
* Sociomantic