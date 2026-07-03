# TemplateGalleryApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findOne**](TemplateGalleryApi.md#findone) | **GET** /v1/template-gallery/{slug} | Get a single gallery template |
| [**instantiate**](TemplateGalleryApi.md#instantiate) | **POST** /v1/template-gallery/{slug}/instantiate | Instantiate a gallery template into the workspace |
| [**list**](TemplateGalleryApi.md#list) | **GET** /v1/template-gallery | List gallery templates |



## findOne

> findOne(slug)

Get a single gallery template

Includes a short-lived presigned PDF preview URL.

### Example

```ts
import {
  Configuration,
  TemplateGalleryApi,
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
  const api = new TemplateGalleryApi(config);

  const body = {
    // string
    slug: slug_example,
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
| **slug** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Gallery template with preview URL. |  -  |
| **404** | Not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## instantiate

> instantiate(slug, body)

Instantiate a gallery template into the workspace

Clones the gallery template (PDF + content) into a new workspace template. Use mode&#x3D;\&quot;customize\&quot; to open the editor, or mode&#x3D;\&quot;send\&quot; to auto-publish and send immediately.

### Example

```ts
import {
  Configuration,
  TemplateGalleryApi,
} from '@signvoy/node';
import type { InstantiateRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateGalleryApi(config);

  const body = {
    // string
    slug: slug_example,
    // object
    body: Object,
  } satisfies InstantiateRequest;

  try {
    const data = await api.instantiate(body);
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
| **slug** | `string` |  | [Defaults to `undefined`] |
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | New workspace template created. |  -  |
| **403** | Plan tier does not allow this template. |  -  |
| **404** | Gallery template not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## list

> list(category)

List gallery templates

Returns the curated gallery catalog. Optionally filter by category.

### Example

```ts
import {
  Configuration,
  TemplateGalleryApi,
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
  const api = new TemplateGalleryApi(config);

  const body = {
    // string (optional)
    category: category_example,
  } satisfies ListRequest;

  try {
    const data = await api.list(body);
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
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |

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

