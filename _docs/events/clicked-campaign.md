---
layout: page
section: events
title: "Clicked Campaign"
order: 2
---
The `Clicked Campaign` event must be pushed to the `digitalData.events` array when a user clicks on a banner link.

> Important! The banner's links must be marked with the `ddl_campaign_link` class and should also have the `data-campaign-id` data attribute. For more information, see the HTML page layout section.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Clicked Campaign',
  category: 'Promo',
  campaign: campaignId
});
```

#### From the DDManager interface
**Trigger**: `click`,

**CSS selector**: `.ddl_campaign_link`

**Event handler**:

```javascript
var campaignId = element.getAttribute('data-campaign-id');
return {
  name: 'Clicked Campaign',
  category: 'Promo',
  campaign: campaignId
};
```

#### Required by the following integrations:
* Google Analytics (Enhanced Ecommerce)