---
layout: page
section: digitaldata
title: "campaigns"
order: 1
---

The `digitalData.campaigns` array contains `campaign` objects, which describe internal promo-banners located on the pages of your site: the name of the banner, its position on the page/in the template, its unique identifier, etc.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">campaign.id</a></li>
  <li><a href="#2">campaign.name</a></li>
  <li><a href="#3">campaign.description</a></li>
  <li><a href="#4">campaign.category</a></li>
  <li><a href="#5">campaign.subcategory</a></li>
  <li><a href="#6">campaign.design</a></li>
  <li><a href="#7">campaign.position</a></li>
</ul>


### <a name="0"></a>Introduction
------
The `digitalData.campaigns` array must be declared and filled in the source code page for all the banners present on the page.
>If the banner is in a carousel and it is not initially visible, the information about such banner should be present in the array `digitalData.campaigns`.

Example:
```javascript
window.digitalData = {
  ...,
  campaigns: [
    { //campaign object
      id: "PROMO123",
      name: "Summer sale",
      description: "Discounts up to -50%",
      category: "Banner",
      subcategory: "Sales",
      design: "1000x150",
      position: "top"
    },
    { //campaign object
      id: "PROMO124",
      name: "Autumn collection",
      description: "1500 new items",
      category: "Banner",
      subcategory: "New Releases",
      design: "600x120",
      position: "left"
    },
    { //campaign object
      ...
    }
  ],
  ...
}
```

>Since the variable with the key `digitalData.campaigns` is an array, then the number of each element of the array (`campaign` objects) is a number. The key "campaign" is not found anywhere in the structure of digitalData.

Below each variable of the `campaign` object is described in detail.

### <a name="1"></a>campaign.id
------
Data type: string.

`campaign.id` - **required** variable, which contains the unique identifier of the banner.

>The value of the variable `campaign.id` must be unique for each banner within a single page. If a banner is shown on multiple pages, the value of `campaign.id` can be repeated from page to page.

### <a name="2"></a>campaign.name
------
Data type: string.

`campaign.name` - **required** variable, which contains the name of the banner.

>The value of the variable `campaign.name` will appear in the GA Internal Promotions reports

### <a name="3"></a>campaign.description
------
Data type: string.

`campaign.name` - contains a brief description of the banner.

### <a name="4"></a>campaign.category
------
Data type: string.

`campaign.category` - contains the name of the category which the banner belongs to

>This variable is needed to categorize your internal campaigns. If you place banners of partners or advertisers, you can pass the name of the company to the variable `campaign.category`.

### <a name="5"></a>campaign.subcategory
------
Data type: string.

`campaign.subcategory` - contains the name of the subcategory which the banner belongs to

>This variable is needed to more accurately categorize your internal campaigns. This variable can contain the essence of the marketing campaign for which the banner was created: "Novelties", "Sale", "Product of the Day", etc.

### <a name="6"></a>campaign.design
------
Data type: string.

`campaign.design` - contains a short description of the banner's visual attributes, for example: 200x300, 240x120

### <a name="7"></a>campaign.position
------
Data type: string.

`campaign.position` - contains a short description of the banner's position in your website: "popup", "top", "bottom", "side(right)", "after-navigation", "slot12", "A1_2", etc.
