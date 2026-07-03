# APIKeysApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create**](APIKeysApi.md#create) | **POST** /v1/api-keys | Create an API key |
| [**list**](APIKeysApi.md#list) | **GET** /v1/api-keys | List API keys |
| [**revoke**](APIKeysApi.md#revoke) | **DELETE** /v1/api-keys/{id} | Revoke an API key |



## create

> CreatedApiKeyDto create(createApiKeyDto)

Create an API key

Creates a new secret API key scoped to this workspace. The plaintext key is returned **once** in this response and cannot be retrieved again — store it securely.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@signvoy/node';
import type { CreateRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  const body = {
    // CreateApiKeyDto
    createApiKeyDto: ...,
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
| **createApiKeyDto** | [CreateApiKeyDto](CreateApiKeyDto.md) |  | |

### Return type

[**CreatedApiKeyDto**](CreatedApiKeyDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Key created (includes the plaintext secret, shown once) |  -  |
| **403** | Not a workspace owner or admin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## list

> Array&lt;ApiKeyDto&gt; list()

List API keys

Returns all API keys for the workspace. Secrets are never included — only the prefix and last 4 characters.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@signvoy/node';
import type { ListRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

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

[**Array&lt;ApiKeyDto&gt;**](ApiKeyDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of API keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revoke

> ApiKeyDto revoke(id)

Revoke an API key

Immediately and permanently revokes the key. Any request using it will start failing at once. This cannot be undone.

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '@signvoy/node';
import type { RevokeRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  const body = {
    // string | API key ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RevokeRequest;

  try {
    const data = await api.revoke(body);
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
| **id** | `string` | API key ID | [Defaults to `undefined`] |

### Return type

[**ApiKeyDto**](ApiKeyDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The revoked key |  -  |
| **403** | Not a workspace owner or admin |  -  |
| **404** | API key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

