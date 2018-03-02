---
layout: page
section: analyst
title: "Scripts"
date: 2017-08-11 17:32:00
order: 5
---

The "Scripts" module makes it possible to execute any JavaScript code after the trigger is fired. We recommend using the "Scripts" module only if your task can not solved by the functionality of "Integrations", "Events" and "Variables".

<ul class="page-navigation">
  <li><a href="#0">Introduction</a></li>
  <li><a href="#1">Creating a new script</a></li>
  <li><a href="#2">Event name</a></li>
  <li><a href="#3">Helper functions</a></li>
  <li><a href="#4">Script testing</a></li>
</ul>

### <a name="0"></a>Introduction
------
Sometimes you need to asynchronously access a remote server, request certain data to enrich `digitalData`, or send information to a remote server. For example: you collect the email of a user in a special form and want to send it to your CRM or ESP. You can ask your programmers to do this in the site code, or do it yourself from the "Scripts" module.
In the system interface, creating and editing scripts is similar to creating and editing Events and Variables.

### <a name="1"></a>Creating a new script
------
Below is an example of a script that sends a user's Email when a "Subscribed" event fires.

![](/img/scripts.1.png)

**Скрипт**
```javascript
jQuery.ajax({
  url: 'https://test.com/handler/',
  method: 'POST',
  data: 'email=' + event.email
});
```
> Important! Html-tags `<script></script>` aren't needed inside the script body.

### <a name="2"></a>Event name
------
In this field you have to enter the name of the event after which you want the script code to execute.

### <a name="3"></a>Helper functions
------
When creating scripts, it is useful to use a set of built-in functions that greatly simplify and shorten the code of the executed functions. The list of helper functions is described in the [events](/for-analyst/events#3) page.

### <a name="4"></a>Тестирование скриптов
------
The process of testing scripts is described in the [Variables section](/for-analyst/variables#5). The process is identical.