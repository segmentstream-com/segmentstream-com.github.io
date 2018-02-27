---
layout: page
section: analyst
title: "Project settings"
date: 2017-08-25 15:00:00
order: 1
---

Depending on the architecture of your website, the project settings may differ. If your site is built on AJAX technology, different sections of the site are located on different subdomains, and in some other cases you need to tweak the settings.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Automatically send Viewed Page event</a></li>
  <li><a href="#2">Use Cookie instead of LocalStorage for data storage</a></li>
  <li><a href="#3">Session length in seconds</a></li>
  <li><a href="#4">Maximum width of the site in pixels</a></li>
  <li><a href="#5">Track validation errors</a></li>
  <li><a href="#6">Track all JavaScript errors</a></li>
</ul>

### <a name="0"></a>Introduction
------
How to adjust the settings:
1. Log in to the site [ddmanager.ru](https://admin.ddmanager.ru/)
2. Click on the "Settings" link in the upper right corner of the window.
3. Adjust the settings according to the documentation below
4. Publish the project.

![](/img/settings.png)

### <a name="1"></a> Automatic sending of the Viewed Page event
------
The `Viewed Page` event is the base event. It is necessary for the operation of most third-party systems. Various data from the `digitalData` object is sent to third-party systems along with the Viewed Page event: `digitalData.page.type`, `digitalData.user.userId`, `digitalData.listing.categoryId` and many others.

> The `Viewed Page` event must be added to the array `digitalData.events` only after the data of the `digitalData` object has been fully populated.

By default, DigitalDataManager automatically adds the `Viewed Page` event to the `digitalData.events` array when the `ddmanager.js` library is loaded. This happens every time a page loads.

If you add the `Viewed Page` event to the `digitalData.events` array yourself from the site code, do this only after filling the digitalData object with all the variables. In this case, turn off the "Automatic send Viewed Page event" option using the switch.

### <a name="2"></a> Use Cookie instead of LocalStorage to store data
------
DigitalDataManager allows you to create new variables based on the events and variables of the `digitalData` object and save them for a certain period. For example: you need to give google analytics the number of times product pages are viewed before a transaction is completed. For more information about saving variables, see [Variables](/for-analyst/events/).

By default, the value of any variable is stored in the [LocalStorage] (https://www.w3schools.com/html/html5_webstorage.asp) of the visitor's browser as a string. LocalStorage is supported by all modern browsers. Unlike Cookie, LocalStorage is a more secure storage, holds up to 5 MB, and information is never sent to the server.

However, LocalStorage stores information within the same domain. This means that you can not access information from the subdomain pages.

> If different sections of your site are located on subdomains - use Cookie instead of LocalStorage

For the domain to set the cookie, specify the top-level domain.
For example, your online store is located at https://shop.ru, but the basket is located at https://cart.shop.ru. To ensure that the information stored on the pages of the goods cards is available from the shopping cart pages, you must use the cookie with the domain shop.ru

> Cookies store only 4kb. Pay attention to this when saving large arrays or strings.

### <a name="3"></a> Session Length in Seconds
------
DigitalDataManager has a built-in event `Session Started`. This event is automatically added to the array `digitalData.events` if the given user has passed more than the specified time interval from the moment of any other event. By default, this length of time (Session Length) is one hour or 3600 seconds.
For example:
1. A user visits the website for the first time. Simultaneously with the first event, `Viewed Page` DigitalDataManager will add the `Session Started` event to the array `digitalData.events`.
2. The interacted with the website, left the browser tab open and left for 2 hours. The user returned to the site and clicked on a banner or moved to another page. At this point, the event `Session Started` will be automatically added to the array `digitalData.events`.

You may need this event if you want to nullify or overwrite the value of a variable in the digitalData object when the new session starts.

> We recommend setting the same session length in both Google Analytics and DigitalDataManager.

### <a name="4"></a> Maximum width of the site in pixels
------
If you use a block with a banner slider on the site, we recommend setting the maximum width of the window of your site in the field of settings. This setting will help to correctly setup the [events of banner impressions](/events/viewed-campaign).

### <a name="5"></a> Tracking validation errors
------
DigitalDataManger has a built-in [integration error tracking module](/for-analyst/integrations#2). This module displays information about all the data sent to third-party systems in the developer console. If you enable the tracking of validation errors, whenever an integration error occurs with any of the site visitors, DigitalDataManager will automatically add this event to the array `digitalData.events`. Now this event can be sent to any statistics system for further analysis of the causes of the error.

If you have set up the [Google Analytics](/integrations/google-analytics) integration, you can find information about validation errors in the event reports.

### <a name="6"></a> Track all JavaScript errors
------
DigitalDataManger can also intercept messages about the occurrence of any JavaScript errors on your site. Typically, there are thousands of errors on websites: libraries of third-party systems do not loading, errors in the developers' scripts, unexpected user actions and so on. All these errors can be passed to Google Analytics with hits such as [exceptions](https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions). By building a custom report in the Google Analytics interface, you can find the pages and conditions under which errors occur.

![](/img/settings.1.png)
Example of a report setup in the Google Analytics interface