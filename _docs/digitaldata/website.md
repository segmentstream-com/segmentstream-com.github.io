---
layout: page
section: digitaldata
title: "website"
order: 1
---

The `digitalData.website` object contains variables that describe the site as a whole: language, region, currency, etc.

## Introduction
------
The `digitalData.page` object must be declared and filled in the source code of each page of the site.

> We do not recommend filling the object asynchronously after loading the page. This can negatively affect the performance of the system.

Example:
```javascript
  window.digitalData = {
    ...,
    website: {
      region: "London",
      regionId: "12",
      type: "desktop",
      language: "ru",
      currency: "USD",
      environment: "production"
    },
    ...
  }
```

## website.region
------
`website.region` - contains the name of a city or region, for example, "London". The variable is declared and populated only if the site has the option of selecting a region.

## website.regionId
------
`website.regionId` - contains the unique identifier of a region, for example "77". A variable is declared and populated only if the site has the option of selecting a region.

## website.type
------
`website.type` - contains the type of the loaded website:
 - "mobile" - mobile version;
 - "tablet" - tablet version;
 - "desktop" - desktop version;
 - "responsive" - responsive version.

>If the user loads the "desktop" version of the site on the mobile phone, the variable should still be set to "desktop".

## website.language
------
`website.language` - contains the user-selected language. Must be represented by an IETF-compatible string, for example 'en-US', 'en-GB', 'ru'. The EITF code begins with the ISO 639-1 language representation and is complemented by the region.

## website.currency
------
`website.currency` - contains the currency selected by the user in ISO 4217 format (USD, EUR, RUB).
>If you can't select a currency on the site, pass it a default value.

## website.environment
------
`website.environment` - contains the name of the environment in which the site is downloaded, for example:
 - "development" - development environment,
 - "testing" - testing environment,
 - "production" - production environment, which is loaded for all site visitors.
