---
layout: page
section: digitaldata
title: "context"
date: 2018-01-17 12:00:00
order: 1
---

The `digitalData.context` object contains variables that describe the environment and context of the current visit.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">context.ip</a></li>
  <li><a href="#2">context.userAgent</a></li>
  <li><a href="#3">context.os</a></li>
  <li><a href="#4">context.location</a></li>
  <li><a href="#5">context.device</a></li>
  <li><a href="#6">context.browser</a></li>
  <li><a href="#7">context.campaign</a></li>
</ul>

### <a name="0"></a>Introduction
------
The `digitalData.context` object must be declared and filled in the source code of each page.

>All variables of the object `digitalData.context` are filled automatically by the SegmentStream library. On your part, you only need to declare the object and fill in the value of the variable `digitalData.context.ip`.

Example for the URL 'http://website.com/?utm_campaign=sale_05_06_2016&utm_medium=cpc&utm_source=criteo':
```javascript
digitalData.context: {
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
  campaign: {
    name: "sale_05_06_2016",
    medium: "cpc",
    source: "criteo"
  },
  ip: "46.250.135.5",
  os: {
    name: "Mac OS",
    version: "10.13.2"
  },
  location: {
    city: "Moscow",
    country: "RU",
    region: "Moscow"
  },
  device: {
    type: "desktop"
  },
  browser: {
    major: "63",
    name: "Chrome",
    version: "63.0.3239.132"
  }
}
```

### <a name="1"></a>context.ip
------
Data type: string.

`context.ip` - **optional** variable which contains the user's ip-address

### <a name="2"></a>context.userAgent
------
Data type: string. Filled automatically

`context.userAgent` - contains information about the users browser and system

### <a name="3"></a>context.os
------
Data type: object. Filled automatically

`context.os` - Contains an object which describes the users operating system

Path|Data Type|Description
---|---|---
`context.os.name`|String|Name of the OS
`context.os.version`|String|OS version

### <a name="4"></a>context.location
------
Data type: object. Filled automatically

`context.location` - contains an object which describes the users location.

Path|Data Type|Description
---|---|---
`context.location.city`|String|City
`context.location.country`|String|Country
`context.location.region`|String|Region/State/County

### <a name="5"></a>context.device
------
Data type: object. Filled automatically

`context.device` - contains an object which describes the users device.

Path|Data Type|Description
---|---|---
`context.device.model`|String|Device model. Not relevant for desktops.
`context.location.type`|String|Type of device: "desktop", "mobile", "tablet"
`context.location.vendor`|String|Device manufacturer. Not relevant for desktops.

### <a name="6"></a>context.browser
------
Data type: object. Filled automatically

`context.browser` - contains an object which describes the users browser.

Path|Data Type|Description
---|---|---
`context.browser.major`|String|Short information on the browser version
`context.browser.name`|String|Browser name
`context.browser.version`|String|Full information on the browser version

### <a name="7"></a>context.campaign
------
Data type: object. Filled automatically

`context.campaign` - contains an object that describes the source of the visit, including the channel, the name of the advertising campaign and other data.

>SegmentStream recognizes utm_marks from the URL of the loaded page, forms the object `digital.context.campaign` and stores this information in the site visitor's browser localStorage for 90 days or until a "Completed Transaction" event has occurred.

Path|Data Type|Description
---|---|---
`context.campaign.name`|String|Name of the advertising campaign. Corresponds to utm_campaign.
`context.campaign.medium`|String|Advert channel. Corresponds to utm_medium.
`context.campaign.source`|String|Advert source. Corresponds to utm_source.
`context.campaign.term`|String|Key phrase. Corresponds to utm_term label.
`context.campaign.content`|String|The content of the advertisement. Matches the utm_content label.

>The context.campaign object also stores IDs of affiliate networks that bring traffic to the site, for example, 'admitad_uid'.
