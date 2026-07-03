# AITemplatesApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**detectFields**](AITemplatesApi.md#detectfields) | **POST** /v1/ai/templates/detect-fields | Detect fields on an already-uploaded PDF draft |
| [**editDraft**](AITemplatesApi.md#editdraft) | **POST** /v1/ai/templates/{templateId}/edit | Edit an existing draft template with a natural-language instruction |
| [**generate**](AITemplatesApi.md#generate) | **POST** /v1/ai/templates/generate | Generate a template from a natural-language prompt |



## detectFields

> detectFields(body)

Detect fields on an already-uploaded PDF draft

Analyses the uploaded PDF and returns a suggested TemplateVersionContent (recipients, fields with coordinates, conditional rules). The caller applies the suggestions through the editor (supports undo/redo via the Zustand store).

### Example

```ts
import {
  Configuration,
  AITemplatesApi,
} from '@signvoy/node';
import type { DetectFieldsRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new AITemplatesApi(config);

  const body = {
    // object
    body: Object,
  } satisfies DetectFieldsRequest;

  try {
    const data = await api.detectFields(body);
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
| **200** | Suggested content returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editDraft

> editDraft(templateId, body)

Edit an existing draft template with a natural-language instruction

Loads the current draft content, applies the instruction via LLM, validates the result with the rules engine, and returns the proposed updated content + a diff summary. The client applies the changes through the Zustand editor store so undo/redo still works.

### Example

```ts
import {
  Configuration,
  AITemplatesApi,
} from '@signvoy/node';
import type { EditDraftRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new AITemplatesApi(config);

  const body = {
    // string
    templateId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // object
    body: Object,
  } satisfies EditDraftRequest;

  try {
    const data = await api.editDraft(body);
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
| **200** | Updated content + summary returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generate

> generate(body)

Generate a template from a natural-language prompt

Uses an LLM to design recipients, fields, conditional rules, and a backing PDF from your description. Returns a draft template ready to customize in the editor.

### Example

```ts
import {
  Configuration,
  AITemplatesApi,
} from '@signvoy/node';
import type { GenerateRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: workspace-id
    apiKey: "YOUR API KEY",
  });
  const api = new AITemplatesApi(config);

  const body = {
    // object
    body: Object,
  } satisfies GenerateRequest;

  try {
    const data = await api.generate(body);
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
| **201** | Draft template created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

