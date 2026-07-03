# TemplateVersionsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**discardDraft**](TemplateVersionsApi.md#discarddraft) | **DELETE** /v1/templates/{templateId}/draft | Discard the current draft |
| [**ensureDraft**](TemplateVersionsApi.md#ensuredraft) | **POST** /v1/templates/{templateId}/draft/ensure | Lazily create a draft from the published version (or empty) |
| [**findOne**](TemplateVersionsApi.md#findone) | **GET** /v1/templates/{templateId}/versions/{versionId} | Get a specific version (read-only) |
| [**getDraft**](TemplateVersionsApi.md#getdraft) | **GET** /v1/templates/{templateId}/draft | Get current draft version |
| [**listVersions**](TemplateVersionsApi.md#listversions) | **GET** /v1/templates/{templateId}/versions | List all published + draft versions |
| [**publish**](TemplateVersionsApi.md#publish) | **POST** /v1/templates/{templateId}/draft/publish | Publish the draft |
| [**upsertDraft**](TemplateVersionsApi.md#upsertdraft) | **PATCH** /v1/templates/{templateId}/draft | Upsert draft content |



## discardDraft

> discardDraft(templateId)

Discard the current draft

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/node';
import type { DiscardDraftRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies DiscardDraftRequest;

  try {
    const data = await api.discardDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ensureDraft

> ensureDraft(templateId)

Lazily create a draft from the published version (or empty)

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/node';
import type { EnsureDraftRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies EnsureDraftRequest;

  try {
    const data = await api.ensureDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findOne

> findOne(templateId, versionId)

Get a specific version (read-only)

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/node';
import type { FindOneRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
    // string
    versionId: versionId_example,
  } satisfies FindOneRequest;

  try {
    const data = await api.findOne(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDraft

> getDraft(templateId)

Get current draft version

Returns the current draft version\&#39;s content, or 200 with &#x60;null&#x60; if none exists.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/node';
import type { GetDraftRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies GetDraftRequest;

  try {
    const data = await api.getDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Draft retrieved (or null). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listVersions

> listVersions(templateId)

List all published + draft versions

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/node';
import type { ListVersionsRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies ListVersionsRequest;

  try {
    const data = await api.listVersions(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publish

> publish(templateId)

Publish the draft

Strict engine validation gate. Returns the published version; or throws RuleEngineException with structured diagnostics.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/node';
import type { PublishRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies PublishRequest;

  try {
    const data = await api.publish(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertDraft

> upsertDraft(templateId)

Upsert draft content

Writes the full version content. Always allowed; returns engine diagnostics for the editor to render (warning-tolerant).

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@signvoy/node';
import type { UpsertDraftRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    templateId: templateId_example,
  } satisfies UpsertDraftRequest;

  try {
    const data = await api.upsertDraft(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

