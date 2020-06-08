---
layout: page
section: digitaldata
title: "context"
order: 1
---

The `digitalData.context` object contains variables that describe the environment and context of the current visit.

## Introduction
------
The `digitalData.context` object must be declared and filled in the source code of each page.

>All variables of the object `digitalData.context` are filled automatically by the SegmentStream SDK. On your part, you only need to declare the object and fill in the value of the variable `digitalData.context.ip`.

Example for the URL 'http://website.com/?utm_campaign=sale_05_06_2016&utm_medium=cpc&utm_source=criteo':
```javascript
window.digitalData = {
  ...,
  context: {
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
  ...
}
```

## context.ip
------
Data type: string.

`context.ip` - **optional** variable which contains the user's ip-address

## context.userAgent
------
Data type: string.

`context.userAgent` - contains information about the users browser and system

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

## context.os
------
Data type: object.

`context.os` - Contains an object which describes the users operating system

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.


Path|Data Type|Description
---|---|---
`context.os.name`|String|Name of the OS
`context.os.version`|String|OS version

## context.location
------
Data type: object.

`context.location` - contains an object which describes the users location.

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

Path|Data Type|Description
---|---|---
`context.location.city`|String|City
`context.location.country`|String|Country
`context.location.region`|String|Region/State/County

## context.device
------
Data type: object.

`context.device` - contains an object which describes the users device.

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

Path|Data Type|Description
---|---|---
`context.device.model`|String|Device model. Not relevant for desktops.
`context.location.type`|String|Type of device: "desktop", "mobile", "tablet"
`context.location.vendor`|String|Device manufacturer. Not relevant for desktops.

## context.browser
------
Data type: object.

`context.browser` - contains an object which describes the users browser.

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

Path|Data Type|Description
---|---|---
`context.browser.major`|String|Short information on the browser version
`context.browser.name`|String|Browser name
`context.browser.version`|String|Full information on the browser version

## context.campaign
------
Data type: object.

`context.campaign` - contains an object that describes the source of the visit, including the channel, the name of the advertising campaign and other data.

>SegmentStream recognizes utm_marks from the URL of the loaded page, forms the object `digital.context.campaign` and stores this information in the site visitor's browser localStorage for 90 days or until a "Completed Transaction" event has occurred.

> SDK creates and fills this variable automatically. Please do not try to reinitialize this variable.

Path|Data Type|Description
---|---|---
`context.campaign.name`|String|Name of the advertising campaign. Corresponds to utm_campaign.
`context.campaign.medium`|String|Advert channel. Corresponds to utm_medium.
`context.campaign.source`|String|Advert source. Corresponds to utm_source.
`context.campaign.term`|String|Key phrase. Corresponds to utm_term label.
`context.campaign.content`|String|The content of the advertisement. Matches the utm_content label.

>The context.campaign object also stores IDs of affiliate networks that bring traffic to the site, for example, 'admitad_uid'.
