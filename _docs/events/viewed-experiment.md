---
layout: page
section: events
title: "Viewed Experiment"
order: 2
---
The `Viewed Experiment` event must be pushed to the `digitalData.events` array the moment the user is split into one of the variations of a split-test.

#### From the site code / when using AJAX
```javascript
digitalData.events.push({
  name: 'Viewed Experiment',
  experiment: {
    id: "27fbe483-77bf-4949-b6f1-135806cc995c",
    name: "Product page test",
    variationId: 1,
    variationName: "Bigger product image"
  }
})
```
> The composition of the event object depends on the experiments system used. The example above is of an event for the Driveback Experiments system.

> If you want to track experiment results in Google Analytics, add category, action, label variables to the event object.

#### From the SegmentStream interface
**Trigger**: event `Viewed Cart`,

**Event handler**:

```javascript
if(_digitalData('user.abGroup') === 1) {
  return {
    name: 'Viewed Experiment',
    experiment: {
      id: "27fbe483-77bf-4949-b6f1-135806cc995c",
      name: "Cart recommendations test",
      variationId: 1,
      variationName: "New recommendation algorithm"
    }
  };
} else {
  return {
    name: 'Viewed Experiment',
    experiment: {
      id: "27fbe483-77bf-4949-b6f1-135806cc995c",
      name: "Cart recommendations test",
      variationId: 2,
      variationName: "Old recommendation algorithm"
    }
  };
}
```

#### Required by the following integrations:
* Driveback
