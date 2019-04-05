---
layout: page
section: events
title: "Viewed Campaign"
order: 2
---
The `Viewed Campaign` event must be pushed to the `digitalData.events` array when a campaign banner enters a user's viewport.
>Important! SegmentStream has a built-in "Impression" trigger, which works if 75% of the tracked item enters the user's viewport.

#### From the site code / when using AJAX
We do not recommend pushing the `Viewed Campaign` event from the site code.

>Important! Banners must be marked with the `ddl_campaign` class. Also, they must have the `data-campaign-id` data attribute. For more information, see the HTML page layout section.

#### From the SegmentStream interface
**Trigger**: event `Impression`,

**CSS selector**: `.ddl_campaign`,

**Event handler**:
```javascript
var viewedCampaigns = [];
for (var i = 0; i < elements.length; i++) {
  var campaignId = elements[i].getAttribute('data-campaign-id');
  viewedCampaigns.push(campaignId);
}
return {
	name: 'Viewed Campaign',
  category: 'Promo',
  campaigns: viewedCampaigns
};
```

#### Required by the following integrations:
* Google Analytics (Enhanced Ecommerce)
