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

> The variables: `category`, `label`, `nonInteraction` are optional and can be used for sending the corresponding parameters to Google BigQuery. In addition to the previous variables, `action` and `value` variables can be sent to Google Analytics.

> `nonInteraction` is a boolean type variable that is used for controlling whether the event hit will affect the bounce rate on a page. By default, the variable has the value `false` and the event hit is considered an interaction hit, when its value is set to `true`, the type of event hit is not considered an interaction hit.

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
    },
    nonInteraction: true,   // If this variable isn't declared nonInteraction: false will be passed by default
  };
} else {
  return {
    name: 'Viewed Experiment',
    experiment: {
      id: "27fbe483-77bf-4949-b6f1-135806cc995c",
      name: "Cart recommendations test",
      variationId: 2,
      variationName: "Old recommendation algorithm"
    },
    nonInteraction: true,   // If this variable isn't declared nonInteraction: false will be passed by default
  };
}
```

#### Required by the following integrations:
* Driveback
