---
layout: page
section: guides
navigation_title: "Stitching CRM and online data"
title: "Stitching CRM and online data"
date: 2021-01-19
---

If you are a lead generation business it is quite common that the most important funnel steps like lead qualification, opportunities or sales happen inside your CRM.

While building marketing attribution and evaluating the effectiveness of your marketing it makes total sense to optimise for specific CRM statuses instead of just leads generated on the website.

To achieve this, it is important to prepare you CRM data for stitching with the website data and in this guide, we will try to describe the most common use-cases. We will use Salesforce as an example, but the same process applies for HubSpot, Pipedrive, or any other CRM.

## Defining identificators

The only way to stitch CRM data with website data is to have some common identificator that will be sent to both: your CRM and Google BigQuery.

This can be:

* Cookie (for example, Google Client ID)
* Email SHA256 hash
* Phone SHA256 hash
* User ID (no always available)
* etc

We suggest using as many identificators as possible. So that if one ID is not available - another can be used instead. But in many cases.

## Lead forms

The most common way to generate leads on a website are lead forms. Once the lead form is submitted it sends an HTTP request to the server alongside with user fields, such as name, phone, email, etc.

While you usually have email, phone, and other user data sent to the CRM - user cookie is usually missing. The easiest way to send it alongside with other data is just to add it as a hidden field. Below you can see an example code how this can be achieved with Google Client ID.

```html
<form>
  <input type="hidden" name="google_client_id" id="google_client_id" />
</form>
<script type="text/javascript">
ga(function(tracker) {
  var clientId = tracker.get('clientId');
  document.getElementById('google_client_id').value = clientId;
});
</script>
```

Make sure you create an additional custom field in your CRM to store cookie value (in this case - Google Client ID).

## Live chats

Another popular way to collect leads is using live chats, such as:

* HubSpot
* Intercom
* Drift
* etc

Most of the popular chats have APIs to intercept events for generated leads. You should use this APIs to send your data to the CRM or to update some CRM fields. Below are some examples.

### HubSpot Live Chat

```html
<script type="text/javascript">
window.HubSpotConversations.on('contactAssociated', function(payload) {
  // getting Google Client ID
  ga(function(tracker) {
    var clientId = tracker.get('clientId');

    // sending Google Client ID to HubSpot
    var _hsq = window._hsq = window._hsq || [];
    _hsq.push(['identify', {
      google_client_id: clientId
    }]);

    // is required to send some event for the "identify" properties to be sent
    _hsq.push(['trackEvent', {
      id: 'Lead',
    }]);
  });
});
 </script>
```

### Intercom

Create a [custom user field](https://www.intercom.com/help/en/articles/179-send-custom-user-attributes-to-intercom){:target=blank} inside the Intercom admin panel to store **google_client_id**.

Update you Intercom initialisation snippet to send **google_client_id** for all visitors inside the intercom:

```html
<script type="text/javascript">
// getting Google Client ID
ga(function(tracker) {
  var clientId = tracker.get('clientId');

  // intercom settings should be defined only 
  // once Google Client ID is retrieved
  window.intercomSettings = {
    app_id: 'WORKSPACE_ID',
    name: "John Dow",
    email: "customer@email.com"
    ...
    google_client_id: 
  }

  // intercom snippet goes here
})
</script>
```

This modification guarantess that Google Client ID will be sent to Intercom for each visitor. After that, you can integrate Intercom with your CRM to transfer google_client_id alongside with other fields:

* [Intercom ▸ HubSpot integration](https://www.intercom.com/help/en/articles/2128216-hubspot-app-send-leads-and-conversations-to-hubspot){:target=blank}
* [Intercom ▸ Salesforce integration](https://www.intercom.com/help/en/articles/1047309-salesforce-app){:target=blank}
* [Intercom ▸ Pipedrive integration](https://www.intercom.com/help/en/articles/2535853-pipedrive-app){:target=blank}

### Drift

```html
<script type="text/javascript">
function sendGoogleClientId() {
  ga(function(tracker) {
    var clientId = tracker.get('clientId');
    drift.api.setUserAttributes({
      google_client_id: clientId
    })
  });
}

window.drift.on("emailCapture", function(e) {
  sendGoogleClientId();
});
window.drift.on("phoneCapture", function(data) {
  sendGoogleClientId();
})
</script>
```

This modification guarantess that Google Client ID will be sent to Drift for each visitor. After that, you can integrate Drift with your CRM to transfer google_client_id alongside with other fields:

* [Drift ▸ HubSpot integration](https://gethelp.drift.com/hc/en-us/articles/360019665833-How-to-Connect-Drift-to-HubSpot){:target=blank}
* [Drift ▸ Salesforce integration](https://gethelp.drift.com/hc/en-us/articles/360018794974-How-To-Integrate-Drift-With-Salesforce){:target=blank}

## Call tracking systems

The last way to generate leads on a website are phone calls. And the onl way to stitch phone calls with website data is to use specialised call tracking solutions.

Call tracking works by assigning unique trackable phone numbers to each of your marketing sources. These phone numbers capture data from the calls, allowing you understand how many calls each of your marketing sources is driving and basic demographic information about who each caller is. Most of call tracking systems also callect cookies, such as Google Client ID and have integrations most popular CRM systems.

### CallRail

CallRail by default is integrated with Google Analytics and can collect **gclid** (Google Client ID) for each phone call. Once collected, the data can be syncronised with your CRM system:

* [CallRail ▸ HubSpot integration](https://support.callrail.com/hc/en-us/articles/205568785-HubSpot-Integration-for-Calls-Texts){:target=blank}
* [CallRail ▸ Salesforce integration](https://support.callrail.com/hc/en-us/articles/208612596-Salesforce-Integration){:target=blank}
  
## Conclusion

Whichever lead generation method you use, the general rule is to have a unique cookie ID (in our case Google Client ID) for all your leads generated from the website. This way it will be possible to easily stitch your CRM data with online data to build proper end-to-end analytics and attribution.
