---
layout: page
section: events
title: "Achieved Experiment Goal"
order: 2
---
The `Achieved Experiment Goal` event should be pushed to `digitalData.events` array when the user reaches the goal of an experiment. This can be either the completion of a transaction, adding a product to the shopping cart or to the favorites list, etc.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Achieved Experiment Goal'
});
```


#### From the SegmentStream interface
In case the experiment's goal is one of the already existing events (for example, 'Completed Transaction'), it can be set up as such:

**Trigger**: event `Completed Transaction`,

**Event handler**:

```javascript
return { name: 'Achieved Experiment Goal' };
```

#### Required by the following integrations:
* Driveback Experiments
