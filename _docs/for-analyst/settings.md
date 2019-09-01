---
layout: page
section: analyst
title: "Tracking settings"
date: 2017-08-25 15:00:00
order: 1
---

Depending on the architecture of your website, the project settings may differ. If your site is built on AJAX technology, different sections of the site are located on different subdomains, and in some other cases you need to tweak the settings.

### Page contents
------
<ul class="page-navigation">
  <li><a href="#intro">Introduction</a></li>
  <li><a href="#sendViewedPageEvent">Automatically send Viewed Page event</a></li>
  <li><a href="#useCookieStorage">Use Cookie instead of LocalStorage for data storage</a></li>
  <li><a href="#sessionLength">Session length in seconds</a></li>
  <li><a href="#websiteMaxWidth">Maximum width of the site in pixels</a></li>
  <li><a href="#pageLoadTimeout">Page load timeout in milliseconds</a></li>
  <li><a href="#trackValidationErrors">Track validation errors</a></li>
  <li><a href="#trackJsErrors">Track all JavaScript errors</a></li>
  <li><a href="#cookieConsent">Cookie consent</a></li>
  <li><a href="#unpersistContextCampaignOnTransaction">Clear context.campaign on "Completed Transaction"</a></li>
</ul>

### <a name="intro"></a>Introduction
------
How to adjust the settings:
1. Log in to the site [segmentstream.com](https://admin.segmentstream.com/)
2. Click on the "Tracking Settings" link in the upper right corner of the window.
3. Adjust the settings according to the documentation below
4. Publish the project.

![](/img/settings.png)

### <a name="sendViewedPageEvent"></a> Automatic sending of the Viewed Page event
------
The `Viewed Page` event is the base event. It is necessary for the operation of most third-party systems. Various data from the `digitalData` object is sent to third-party systems along with the Viewed Page event: `digitalData.page.type`, `digitalData.user.userId`, `digitalData.listing.categoryId` and many others.

> The `Viewed Page` event must be added to the array `digitalData.events` only after the data of the `digitalData` object has been fully populated.

By default, SegmentStream automatically adds the `Viewed Page` event to the `digitalData.events` array when the `segmentstream.js` library is loaded. This happens every time a page loads.

If you add the `Viewed Page` event to the `digitalData.events` array yourself from the site code, do this only after filling the digitalData object with all the variables. In this case, turn off the "Automatic send Viewed Page event" option using the switch.

### <a name="useCookieStorage"></a> Use Cookie instead of LocalStorage to store data
------
SegmentStream allows you to create new variables based on the events and variables of the `digitalData` object and save them for a certain period. For example: you need to give google analytics the number of times product pages are viewed before a transaction is completed. For more information about saving variables, see [Variables](/for-analyst/events).

By default, the value of any variable is stored in the [LocalStorage](https://www.w3schools.com/html/html5_webstorage.asp) of the visitor's browser as a string. LocalStorage is supported by all modern browsers. Unlike Cookie, LocalStorage is a more secure storage, holds up to 5 MB, and information is never sent to the server.

However, LocalStorage stores information within the same domain. This means that you can not access information from the subdomain pages.

> If different sections of your site are located on subdomains - use Cookie instead of LocalStorage

For the domain to set the cookie, specify the top-level domain.
For example, your online store is located at https://shop.com, but the basket is located at https://cart.shop.com. To ensure that the information stored on the pages of the goods cards is available from the shopping cart pages, you must use the cookie with the domain shop.ru

> Cookies store only 4kb. Pay attention to this when saving large arrays or strings.

> When storing cookies that consist solely of numbers (for example: '123'), the variable will be stored as a number.
If it is necessary to return a string of this type in a variable, it is necessary to add the function String() in the variable setting, for example: `return String(_digitalData('user.leadId'));`
![](/img/settings.2.png)

### <a name="sessionLength"></a> Session Length in Seconds
------
SegmentStream has a built-in event `Session Started`. This event is automatically added to the array `digitalData.events` if the given user has passed more than the specified time interval from the moment of any other event. By default, this length of time (Session Length) is one hour or 3600 seconds.
For example:
1. A user visits the website for the first time. Simultaneously with the first event, `Viewed Page` SegmentStream will add the `Session Started` event to the array `digitalData.events`.
2. The interacted with the website, left the browser tab open and left for 2 hours. The user returned to the site and clicked on a banner or moved to another page. At this point, the event `Session Started` will be automatically added to the array `digitalData.events`.

You may need this event if you want to nullify or overwrite the value of a variable in the digitalData object when the new session starts.

> We recommend setting the same session length in both Google Analytics and SegmentStream.

### <a name="websiteMaxWidth"></a> Maximum width of the site in pixels
------
If you use a block with a banner slider on the site, we recommend setting the maximum width of the window of your site in the field of settings. This setting will help to correctly setup the [events of banner impressions](/events/viewed-campaign).

### <a name="pageLoadTimeout"></a> Page load timeout in milliseconds
------
SegmentStream will try to load integrations from the "After site loading" block (see the [Priorities page](/for-analyst/priorities)) even if the `window` `onload` event for has not occurred.

### <a name="trackValidationErrors"></a> Tracking validation errors
------
SegmentStream has a built-in [integration error tracking module](/for-analyst/integrations#2). This module displays information about all the data sent to third-party systems in the developer console. If you enable the tracking of validation errors, whenever an integration error occurs with any of the site visitors, SegmentStream will automatically add this event to the array `digitalData.events`. Now this event can be sent to any statistics system for further analysis of the causes of the error.

If you have set up the [Google Analytics](/integrations/google-analytics) integration, you can find information about validation errors in the event reports.

### <a name="trackJsErrors"></a> Track all JavaScript errors
------
SegmentStream can also intercept messages about the occurrence of any JavaScript errors on your site. Typically, there are thousands of errors on websites: libraries of third-party systems do not loading, errors in the developers' scripts, unexpected user actions and so on. All these errors can be passed to Google Analytics as [exception type hits](https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions). By building a custom report in the Google Analytics interface, you can find the pages and conditions under which errors occur.

![](/img/settings.1.png)
Example of a report setup in the Google Analytics interface

### <a name="cookieConsent"></a> Cookie consent
------
SegmentStream supports the general data protection policy (GDPR).
The default policy is None, which does not provide for data protection.
To install support for data protection regulations you need to do the following:

1. Make sure the site has the latest version of [SegmentStream snippet](/en/for-developer/snippet).
2. Select a policy in the project settings at [https://admin.segmentstream.com/](http: //admin.segmentstream.com/) (see the screenshot in the introduction section).
3. Add a handler after the snippet to change the user's consent status to the processing of their data:

```html
ddManager.on('ready', function() {
  // the consent variable contains the
  // user's consent status on data processing:
  // undefined - the user hasn't accepted/declined the agreement
  // true - the user accepted the agreement
  // false - the user declined the agreement
  var consent = ddManager.getConsent();

  if (consent === undefined) {
    // show a pop-up window or a banner
    // for getting a user's agreement.
    // If using the Opt-in / Opt-out policy
    // you have to add accept/decline event handlers
    // calling the ddManager.setConsent() method
  }
});
```

Data protection provides 4 types of regulations:

- **None**
- **Info**
- **Opt-in**
- **Opt-out**

**None** is the default value. In this mode, SegmentStream sends user data to all connected systems.

**Info** is the information mode. In this mode, when you first visit the site, you need to show the user a banner or pop-up window with information that the site collects user data. SegmentStream automatically calls the `ddManager.setConsent(true);` function, which sets the `digitalData.consent` variable to `true` after the user performs any of the following actions: pressing a key on the keyboard, clicking, scrolling, dragging a finger on the touch screen on the area site pages. **Starting with the next `Viewed Page`** event, SegmentStream will send user data to all connected systems.

**Opt-in** this mode requires the explicit consent of the user to transfer data to third-party systems. In this mode, when you first visit the site, you need to show the user a banner or pop-up window with information that the site collects user data.
  - If the user agrees, he clicks the accept button, after which the site code calls the function `ddManager.setConsent(true);`, which sets the variable `digitalData.cookieConsent` to the value `true`. **Starting with the next `Viewed Page`** event, SegmentStream will send user data to all connected systems.
  - If the user declines, the site code calls the function `ddManager.setConsent(false);`, which sets the variable `digitalData.cookieConsent` to the value` false`. SegmentStream will not send user data to any of the connected systems.

**Opt-out** - a mode that requires the user to explicitly refuse to transfer data to third-party systems. At the initial visit to the site, SegmentStream sends user data to all connected systems. At the same time, it is necessary to immediately show the user a banner with information that user data is being collected.
  - If the user agrees, he presses the accept button. After clicking, the `ddManager.setConsent (true);` function is called, which sets the value `true` to the` digitalData.cookieConsent` variable. SegmentStream will continue to send user data to all connected systems.
  - If the user does not agree, he presses the decline button. After clicking, the `ddManager.setConsent (false);` function is called, which sets the variable `digitalData.cookieConsent` to the value` false`. From this point on, SegmentStream will not send user data to any of the connected systems.

---

> SegmentStream does not load integration libraries in the **Info** and **Opt-in** modes. After receiving the acceptance of the user, SegmentStream waits for the next **Viewed Page** event, therefore SPA applications must generate a **Viewed Page** event after the user's consent.

The [https://demo.segmentstream.com](https://demo.segmentstream.com) website provides an example of data protection according to the **Opt-in** regulations.

### <a name="unpersistContextCampaignOnTransaction"></a> Clear context.campaign on "Completed Transaction"
------

On each redirect to the website, SegmentStream automatically reads utm_tags from the referrer url, and populates the `context.campaign` object with data. Read more in the [context](/digitaldata/context#7) section.
By default, the content of the `context.campaign` object is stored until any website url is loaded with new utm_tags, or until the `Completed Transaction` event occurs.
You can enable or disable the clearing of the `context.campaign` object using this switch.
