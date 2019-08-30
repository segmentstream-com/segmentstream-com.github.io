---
layout: page
section: integrations
title: "Calltouch"
order: 1
---

In this section you will learn:
* How to connect or disable Calltouch on your site.
* How to send custom user parameters to Calltouch.

Calltouch is a calltracking and analytics platform. SegmentStream allows you to connect and send user data to [Calltouch](https://www.calltouch.ru/).

### Page contents
------
<ul class="page-navigation">
  <li><a href="#requirements">Requirements</a></li>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#websiteId">Website ID</a></li>
  <li><a href="#customParameters">Custom parameters</a></li>
  <li><a href="#correctnessIntegrationSetup">Checking the correctness of the integration setup</a></li>
</ul>

### <a name="requirements"></a>Requirements
------
For the correct integration of your site with Calltouch:
- You need to configure the transfer of the [Viewed Page](/events/viewed-page) event in the `digitalData.events` array.
- The jQuery library must be installed on the site.

### <a name="introduction"></a>Introduction
------
With the help of SegmentStream, you can integrate Calltouch with your site:
[Calltouch integration guide](https://support.calltouch.ru/hc/ru/articles/115002056965-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B0-%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-Calltouch)
To configure integration with Calltouch:
1. Log in on the [segmentstream.com](https://admin.segmentstream.com/) website and go to the integration management panel
2. Click on the "Integration" tab and click on the block with the Calltouch logo.
3. In the panel that opens, configure the integration.
![](/img/integrations.calltouch.settings.png)

You can read more details about the settings below.

### <a name="websiteId"></a>Website ID
------
Website ID is the unique identifier of your website, it can be obtained by copying it from the field with the tracking script found inside your Calltouch account, or by contacting support at info@calltouch.net.
![](/img/integrations.calltouch.websiteId.png)

### <a name="customParameters"></a>Custom parameters
------
SegmentStream can send custom user parameters to Calltouch , this functionality may used for setting up end-to-end analytics between Calltouch and other services, as it is described in the [Calltouch documentation.](https://support.calltouch.ru/hc/ru/articles/360022194231-%D0%9E%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D1%85-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2-)

To configure the transfer of event parameters, fill in 3 fields:
1. Left - Enter the name of the parameter that you want to pass data to. It should not contain any spaces.
2. Center - Specify the data source:
 - **DigitalData**. Any variable that is present in the digitalData object
 - **Event**. Any variable of any event that is pushed to the `digitalData.events` array
3. Right - Specify the name of the variable in the right field

Below are two examples of usage:
- If you want to pass a `promotion` parameter to Calltouch that gets its value from the `sharePromotion` variable of an event:
![](/img/integrations.calltouch.exampleEventParameter.png)
- If you want to pass a `websiteDesign` parameter to Calltouch that gets its value from the `website.design` variable of the digitalData object:
![](/img/integrations.calltouch.exampleDigitalDataParameter.png)

You can add an unlimited number of event parameters.

### <a name="correctnessIntegrationSetup"></a>Checking the correctness of the integration setup
------
After configuring the integration in the SegmentStream interface, but before PUBLICATION - go to the site in test_mode, [go through the conversion funnel and check for errors](/for-analyst/integrations#testing).
If there are no errors - publish the current version.
