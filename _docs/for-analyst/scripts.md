---
layout: page
section: analyst
title: "Scripts"
date: 2017-08-11 17:32:00
order: 5
---

The "Scripts" module makes it possible to execute any JavaScript code after the trigger is fired. We recommend using the "Scripts" module only if your task can not solved by the functionality of "Integrations", "Events" and "Variables".

<ul class="page-navigation">
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#newScript">Creating a new script</a></li>
  <li><a href="#eventName">Event name</a></li>
  <li><a href="#helperFunctions">Helper functions</a></li>
  <li><a href="#scriptTesting">Script testing</a></li>
</ul>

### <a name="introduction"></a>Introduction
------
Sometimes you need to asynchronously access a remote server, request certain data to enrich `digitalData`, or send information to a remote server. For example: you collect the email of a user in a special form and want to send it to your CRM or ESP. You can ask your programmers to do this in the site code, or do it yourself from the "Scripts" module.
In the system interface, creating and editing scripts is similar to creating and editing Events and Variables.

### <a name="newScript"></a>Creating a new script
------
Below is an example of a script that sends a user's Email when a "Subscribed" event fires.

![](/img/scripts.1.png)

### Script
```javascript
jQuery.ajax({
  url: 'https://example.com/handler/',
  method: 'POST',
  data: 'email=' + event.email
});
```
> Important! Html-tags `<script></script>` aren't needed inside the script body.

### <a name="eventName"></a>Event name
------
In this field you have to enter the name of the event after which you want the script code to execute.

### <a name="helperFunctions"></a>Helper functions
------
When creating scripts, it is useful to use a set of built-in functions that greatly simplify and shorten the code of the executed functions. The list of helper functions is described in the [helper functions](/for-developer/helpers) page.

### Run after page loaded
------
You can load script after page load.

### <a name="scriptTesting"></a>Script Testing
------
The process of testing scripts is described in the [Variables section](/for-analyst/variables#variableTesting). The process is identical.
