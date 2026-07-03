# WebhooksApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create**](WebhooksApi.md#create) | **POST** /v1/webhooks | Create a webhook endpoint |
| [**get**](WebhooksApi.md#get) | **GET** /v1/webhooks/{id} | Get a single webhook endpoint |
| [**list**](WebhooksApi.md#list) | **GET** /v1/webhooks | List webhook endpoints for the workspace |
| [**listDeliveries**](WebhooksApi.md#listdeliveries) | **GET** /v1/webhooks/{id}/deliveries | List recent deliveries for an endpoint |
| [**ping**](WebhooksApi.md#ping) | **POST** /v1/webhooks/{id}/ping | Send a test event |
| [**remove**](WebhooksApi.md#remove) | **DELETE** /v1/webhooks/{id} | Delete a webhook endpoint |
| [**retryDelivery**](WebhooksApi.md#retrydelivery) | **POST** /v1/webhooks/{id}/deliveries/{deliveryId}/retry | Manually retry a failed delivery |
| [**rotateSecret**](WebhooksApi.md#rotatesecret) | **POST** /v1/webhooks/{id}/rotate-secret | Rotate the signing secret |
| [**update**](WebhooksApi.md#update) | **PATCH** /v1/webhooks/{id} | Update a webhook endpoint |



## create

> WebhookEndpointWithSecretDto create(createWebhookDto)

Create a webhook endpoint

Register a new HTTPS endpoint. The signing secret is returned **once** in this response and will not be shown again — store it securely.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { CreateRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookDto
    createWebhookDto: ...,
  } satisfies CreateRequest;

  try {
    const data = await api.create(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createWebhookDto** | [CreateWebhookDto](CreateWebhookDto.md) |  | |

### Return type

[**WebhookEndpointWithSecretDto**](WebhookEndpointWithSecretDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Endpoint created — includes signing secret (shown once) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get

> WebhookEndpointDto get(id)

Get a single webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { GetRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies GetRequest;

  try {
    const data = await api.get(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**WebhookEndpointDto**](WebhookEndpointDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## list

> Array&lt;WebhookEndpointDto&gt; list()

List webhook endpoints for the workspace

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { ListRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  try {
    const data = await api.list();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;WebhookEndpointDto&gt;**](WebhookEndpointDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of endpoints (secrets omitted) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDeliveries

> Array&lt;WebhookDeliveryDto&gt; listDeliveries(id)

List recent deliveries for an endpoint

Returns the 50 most recent delivery attempts.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { ListDeliveriesRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies ListDeliveriesRequest;

  try {
    const data = await api.listDeliveries(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;WebhookDeliveryDto&gt;**](WebhookDeliveryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ping

> WebhookDeliveryDto ping(id)

Send a test event

Sends a &#x60;webhook.test&#x60; event to verify the endpoint is reachable. Returns the delivery result.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { PingRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies PingRequest;

  try {
    const data = await api.ping(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryDto**](WebhookDeliveryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## remove

> remove(id)

Delete a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { RemoveRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies RemoveRequest;

  try {
    const data = await api.remove(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retryDelivery

> WebhookDeliveryDto retryDelivery(id, deliveryId)

Manually retry a failed delivery

Resets the delivery to &#x60;pending&#x60; and immediately re-attempts it. The original payload and &#x60;Signvoy-Event-Id&#x60; are preserved so receivers can deduplicate.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { RetryDeliveryRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
    // string | Delivery ID
    deliveryId: deliveryId_example,
  } satisfies RetryDeliveryRequest;

  try {
    const data = await api.retryDelivery(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |
| **deliveryId** | `string` | Delivery ID | [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryDto**](WebhookDeliveryDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateSecret

> WebhookEndpointWithSecretDto rotateSecret(id)

Rotate the signing secret

Issues a new HMAC secret for the endpoint. The new secret is returned **once** — update your server immediately. All future deliveries will use the new secret.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { RotateSecretRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
  } satisfies RotateSecretRequest;

  try {
    const data = await api.rotateSecret(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |

### Return type

[**WebhookEndpointWithSecretDto**](WebhookEndpointWithSecretDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New secret (shown once) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update

> WebhookEndpointDto update(id, updateWebhookDto)

Update a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signvoy/node';
import type { UpdateRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // Configure HTTP bearer authorization: api-key
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook endpoint ID
    id: id_example,
    // UpdateWebhookDto
    updateWebhookDto: ...,
  } satisfies UpdateRequest;

  try {
    const data = await api.update(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook endpoint ID | [Defaults to `undefined`] |
| **updateWebhookDto** | [UpdateWebhookDto](UpdateWebhookDto.md) |  | |

### Return type

[**WebhookEndpointDto**](WebhookEndpointDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

