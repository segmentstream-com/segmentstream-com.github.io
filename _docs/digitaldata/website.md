---
layout: page
section: digitaldata
title: "website"
order: 1
---

The `digitalData.website` object contains variables that describe the site as a whole: language, region, currency, etc.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#website.region">website.region</a></li>
  <li><a href="#website.regionId">website.regionId</a></li>
  <li><a href="#website.type">website.type</a></li>
  <li><a href="#website.language">website.language</a></li>
  <li><a href="#website.currency">website.currency</a></li>
  <li><a href="#website.environment">website.environment</a></li>
</ul>


### <a name="introduction"></a>Introduction
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

### <a name="website.region"></a>website.region
------
`website.region` - contains the name of a city or region, for example, "London". The variable is declared and populated only if the site has the option of selecting a region.

### <a name="website.regionId"></a>website.regionId
------
`website.regionId` - contains the unique identifier of a region, for example "77". A variable is declared and populated only if the site has the option of selecting a region.

### <a name="website.type"></a>website.type
------
`website.type` - contains the type of the loaded website:
 - "mobile" - mobile version;
 - "tablet" - tablet version;
 - "desktop" - desktop version;
 - "responsive" - responsive version.

>If the user loads the "desktop" version of the site on the mobile phone, the variable should still be set to "desktop".

### <a name="website.language"></a>website.language
------
`website.language` - contains the user-selected language. Must be represented by an IETF-compatible string, for example 'en-US', 'en-GB', 'ru'. The EITF code begins with the ISO 639-1 language representation and is complemented by the region.

### <a name="website.currency"></a>website.currency
------
`website.currency` - contains the currency selected by the user in ISO 4217 format (USD, EUR, RUB).
>If you can't select a currency on the site, pass it a default value.

### <a name="website.environment"></a>website.environment
------
`website.environment` - contains the name of the environment in which the site is downloaded, for example:
 - "development" - development environment,
 - "testing" - testing environment,
 - "production" - production environment, which is loaded for all site visitors.
