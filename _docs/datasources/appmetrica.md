---
layout: page
section: datasources
title: "AppMetrica"
order: 10
---

In this section you will learn how to connect AppMetrica data import.

> Attention! The [Google BigQuery](/integrations/google-bigquery) integration has to be enabled to use this feature.


## Importing data from AppMetrica
------

After enabling this data source, AppMetrica reports information will be uploaded to BigQuery once every 24 hours.

## Connecting and configuring
------

The process of connecting data sources is described in detail in the [overview](https://docs.segmentstream.com/datasources/index).

After authorization you need to set the data source parameters.

## Options description
------
![](/img/datasources.appmetrica.1.png)

## Display name
The name of the data source. It is displayed in the interface in the list of sources.

## Application ID
Unique ID of your application in AppMetrica. You can find it in "Application Name" > Settings > Application ID

## Import reports
Enables import of raw report data from AppMetrica to BigQuery

## Saving, Disconnecting, Disabling data source
To save and enable the data source, click **Save**.

The **Disconnect** button is used to revoke the authorization data. The settings are saved.

You can enable or disable the data source at any time by using the switch on the top right.

## Where to find imported data
Within 24 hours since you've enabled AppMetrica data source you should find following tables in your BigQuery dataset if corresponding report was enabled:
- **appMetricaClicks_{APPLICATION_ID}_{YYYYMMDD}** - data for "Clicks" report
- **appMetricaCrashes_{APPLICATION_ID}_{YYYYMMDD}** - data for "Crashes" report
- **appMetricaDeeplinks_{APPLICATION_ID}_{YYYYMMDD}** - data for "Deeplinks" report
- **appMetricaErrors_{APPLICATION_ID}_{YYYYMMDD}** - data for "Errors" report
- **appMetricaEvents_{APPLICATION_ID}_{YYYYMMDD}** - data for "Events" report
- **appMetricaInstallations_{APPLICATION_ID}_{YYYYMMDD}** - data for "Installations" report
- **appMetricaPostbacks_{APPLICATION_ID}_{YYYYMMDD}** - data for "Postbacks" report
- **appMetricaProfiles_{APPLICATION_ID}_{YYYYMMDD}** - data for "Profiles" report
- **appMetricaPushTokens_{APPLICATION_ID}_{YYYYMMDD}** - data for "PushTokens" report
- **appMetricaRevenueEvents_{APPLICATION_ID}_{YYYYMMDD}** - data for "RevenueEvents" report
- **appMetricaSessionsStarts_{APPLICATION_ID}_{YYYYMMDD}** - data for "SessionStarts" report

## Table structures
------

### "Clicks" report table structure


Field name|Type|Mode
--- | --- | ---
application_id | STRING | NULLABLE
click_datetime | STRING | NULLABLE
click_id | STRING | NULLABLE
click_ipv6 | STRING | NULLABLE
click_timestamp | INTEGER | NULLABLE
click_url_parameters | STRING | NULLABLE
click_user_agent | STRING | NULLABLE
publisher_id | STRING | NULLABLE
publisher_name | STRING | NULLABLE
tracker_name | STRING | NULLABLE
tracking_id | STRING | NULLABLE
city | STRING | NULLABLE
country_iso_code | STRING | NULLABLE
device_type | STRING | NULLABLE
device_model | STRING | NULLABLE
device_manufacturer | STRING | NULLABLE
os_version | STRING | NULLABLE
os_name | STRING | NULLABLE
windows_aid | STRING | NULLABLE
google_aid | STRING | NULLABLE
ios_ifv | STRING | NULLABLE
ios_ifa | STRING | NULLABLE

### "Crashes" report table structure

Field name|Type|Mode
--- | --- | ---
crash | STRING | NULLABLE |
crash_datetime | STRING | NULLABLE |
crash_group_id | STRING | NULLABLE |
crash_id | STRING | NULLABLE |
crash_name | STRING | NULLABLE |
crash_receive_datetime | STRING | NULLABLE |
crash_receive_timestamp | INTEGER | NULLABLE |
crash_timestamp | INTEGER | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_ipv6 | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
profile_id | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |
application_id | STRING | NULLABLE |

### "Deeplinks" report table structure

Field name|Type|Mode
--- | --- | ---
deeplink_url_host | STRING | NULLABLE |
deeplink_url_parameters | STRING | NULLABLE |
deeplink_url_path | STRING | NULLABLE |
deeplink_url_scheme | STRING | NULLABLE |
event_datetime | STRING | NULLABLE |
event_receive_datetime | STRING | NULLABLE |
event_receive_timestamp | INTEGER | NULLABLE |
event_timestamp | INTEGER | NULLABLE |
is_reengagement | BOOLEAN | NULLABLE |
profile_id | STRING | NULLABLE |
publisher_id | STRING | NULLABLE |
publisher_name | STRING | NULLABLE |
session_id | STRING | NULLABLE |
tracker_name | STRING | NULLABLE |
tracking_id | STRING | NULLABLE |
android_id | STRING | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
appmetrica_sdk_version | INTEGER | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_ipv6 | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
original_device_model | STRING | NULLABLE |
os_version | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_build_number | INTEGER | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |

### "Errors" report table structure

Field name|Type|Mode
--- | --- | ---
error | STRING | NULLABLE |
error_datetime | STRING | NULLABLE |
error_id | STRING | NULLABLE |
error_name | STRING | NULLABLE |
error_receive_datetime | STRING | NULLABLE |
error_receive_timestamp | INTEGER | NULLABLE |
error_timestamp | INTEGER | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_ipv6 | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
profile_id | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |
application_id | STRING | NULLABLE |

### "Events" report table structure

Field name|Type|Mode
--- | --- | ---
event_datetime | STRING | NULLABLE |
event_json | STRING | NULLABLE |
event_name | STRING | NULLABLE |
event_receive_datetime | STRING | NULLABLE |
event_receive_timestamp | INTEGER | NULLABLE |
event_timestamp | INTEGER | NULLABLE |
session_id | INTEGER | NULLABLE |
installation_id | STRING | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_ipv6 | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
original_device_model | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
profile_id | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_build_number | INTEGER | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |
application_id | INTEGER | NULLABLE |

### "Installations" report table structure

Field name|Type|Mode
--- | --- | ---
application_id | STRING | NULLABLE |
click_datetime | STRING | NULLABLE |
click_id | STRING | NULLABLE |
click_ipv6 | STRING | NULLABLE |
click_timestamp | INTEGER | NULLABLE |
click_url_parameters | STRING | NULLABLE |
click_user_agent | STRING | NULLABLE |
profile_id | STRING | NULLABLE |
publisher_id | STRING | NULLABLE |
publisher_name | STRING | NULLABLE |
tracker_name | STRING | NULLABLE |
tracking_id | STRING | NULLABLE |
install_datetime | STRING | NULLABLE |
install_ipv6 | STRING | NULLABLE |
install_receive_datetime | STRING | NULLABLE |
install_receive_timestamp | INTEGER | NULLABLE |
install_timestamp | INTEGER | NULLABLE |
is_reattribution | BOOLEAN | NULLABLE |
is_reinstallation | BOOLEAN | NULLABLE |
match_type | STRING | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |

### "Postbacks" report table structure

Field name|Type|Mode
--- | --- | ---
application_id | STRING | NULLABLE |
click_datetime | STRING | NULLABLE |
click_id | STRING | NULLABLE |
click_ipv6 | STRING | NULLABLE |
click_timestamp | INTEGER | NULLABLE |
click_url_parameters | STRING | NULLABLE |
click_user_agent | STRING | NULLABLE |
publisher_id | STRING | NULLABLE |
publisher_name | STRING | NULLABLE |
tracker_name | STRING | NULLABLE |
tracking_id | STRING | NULLABLE |
install_datetime | STRING | NULLABLE |
install_ipv6 | STRING | NULLABLE |
install_timestamp | INTEGER | NULLABLE |
match_type | STRING | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |
conversion_datetime | STRING | NULLABLE |
conversion_timestamp | INTEGER | NULLABLE |
event_name | STRING | NULLABLE |
attempt_datetime | STRING | NULLABLE |
attempt_timestamp | INTEGER | NULLABLE |
cost_model | STRING | NULLABLE |
notifying_status | STRING | NULLABLE |
postback_url | STRING | NULLABLE |
postback_url_parameters | STRING | NULLABLE |
response_body | STRING | NULLABLE |
response_code | INTEGER | NULLABLE |

### "Profiles" report table structure

Field name|Type|Mode
--- | --- | ---
profile_id | STRING | NULLABLE |
appmetrica_gender | STRING | NULLABLE |
appmetrica_birth_date | STRING | NULLABLE |
appmetrica_notifications_enabled | BOOLEAN | NULLABLE |
appmetrica_name | STRING | NULLABLE |
appmetrica_crashes | INTEGER | NULLABLE |
appmetrica_errors | INTEGER | NULLABLE |
appmetrica_first_session_date | STRING | NULLABLE |
appmetrica_last_start_date | STRING | NULLABLE |
appmetrica_push_opens | INTEGER | NULLABLE |
appmetrica_push_send_count | INTEGER | NULLABLE |
appmetrica_sdk_version | INTEGER | NULLABLE |
appmetrica_sessions | INTEGER | NULLABLE |
android_id | STRING | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_build_number | INTEGER | NULLABLE |
app_framework | INTEGER | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |

### "Push Tokens" report table structure

Field name|Type|Mode
--- | --- | ---
token | STRING | NULLABLE |
token_datetime | STRING | NULLABLE |
token_receive_datetime | STRING | NULLABLE |
token_receive_timestamp | INTEGER | NULLABLE |
token_timestamp | INTEGER | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_ipv6 | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
profile_id | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |
application_id | STRING | NULLABLE |

### "Revenue Events" report table structure

Field name|Type|Mode
--- | --- | ---
revenue_quantity | INTEGER | NULLABLE |
revenue_price | STRING | NULLABLE |
revenue_currency | STRING | NULLABLE |
revenue_product_id | STRING | NULLABLE |
revenue_order_id | STRING | NULLABLE |
revenue_order_id_source | STRING | NULLABLE |
is_revenue_verified | STRING | NULLABLE |
event_datetime | STRING | NULLABLE |
event_name | STRING | NULLABLE |
event_receive_datetime | STRING | NULLABLE |
event_receive_timestamp | INTEGER | NULLABLE |
event_timestamp | INTEGER | NULLABLE |
session_id | STRING | NULLABLE |
installation_id | STRING | NULLABLE |
android_id | STRING | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
appmetrica_sdk_version | INTEGER | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_ipv6 | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
original_device_model | STRING | NULLABLE |
os_version | STRING | NULLABLE |
profile_id | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_build_number | INTEGER | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |

### "Session Starts" report table structure

Field name|Type|Mode
--- | --- | ---
session_id | STRING | NULLABLE |
session_start_datetime | STRING | NULLABLE |
session_start_receive_datetime | STRING | NULLABLE |
session_start_receive_timestamp | INTEGER | NULLABLE |
session_start_timestamp | INTEGER | NULLABLE |
appmetrica_device_id | STRING | NULLABLE |
city | STRING | NULLABLE |
connection_type | STRING | NULLABLE |
country_iso_code | STRING | NULLABLE |
device_ipv6 | STRING | NULLABLE |
device_locale | STRING | NULLABLE |
device_manufacturer | STRING | NULLABLE |
device_model | STRING | NULLABLE |
device_type | STRING | NULLABLE |
google_aid | STRING | NULLABLE |
ios_ifa | STRING | NULLABLE |
ios_ifv | STRING | NULLABLE |
mcc | INTEGER | NULLABLE |
mnc | INTEGER | NULLABLE |
operator_name | STRING | NULLABLE |
original_device_model | STRING | NULLABLE |
os_name | STRING | NULLABLE |
os_version | STRING | NULLABLE |
profile_id | STRING | NULLABLE |
windows_aid | STRING | NULLABLE |
app_build_number | INTEGER | NULLABLE |
app_package_name | STRING | NULLABLE |
app_version_name | STRING | NULLABLE |
application_id | STRING | NULLABLE |
