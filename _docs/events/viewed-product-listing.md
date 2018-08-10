---
layout: page
section: events
title: "Viewed Product Listing"
order: 2
---
The `Viewed Product Detail` event must be pushed to the `digitalData.events` array when a page containing a listing of products other than the search results page is loaded.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  category: 'Ecommerce',
  name: 'Viewed Product Listing'
})
```


#### From the DDManager interface
**Trigger**: event `Viewed Page`

**Event handler**:

```javascript
if (_digitalData('page.type') === 'listing') {
  return {
    category: 'Ecommerce',
    name: 'Viewed Product Listing'
  };
}
```

#### Required by the following integrations:
* Adwords
* Criteo
* MyTarget
* Retail Rocket
* RTB House
* Sociomantic
* Segmento