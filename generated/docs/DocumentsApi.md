# DocumentsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**audit**](DocumentsApi.md#audit) | **GET** /v1/documents/{id}/audit | Get document audit trail |
| [**certificate**](DocumentsApi.md#certificate) | **GET** /v1/documents/{id}/certificate | Get certificate of completion URL |
| [**create**](DocumentsApi.md#create) | **POST** /v1/documents | Create a new document |
| [**findOne**](DocumentsApi.md#findone) | **GET** /v1/documents/{id} | Get document by ID |
| [**list**](DocumentsApi.md#list) | **GET** /v1/documents | List documents |
| [**remove**](DocumentsApi.md#remove) | **DELETE** /v1/documents/{id} | Delete document |
| [**send**](DocumentsApi.md#send) | **POST** /v1/documents/{id}/send | Send document for signing |
| [**signedPdf**](DocumentsApi.md#signedpdf) | **GET** /v1/documents/{id}/signed-pdf | Get signed PDF URL |
| [**update**](DocumentsApi.md#update) | **PATCH** /v1/documents/{id} | Update document |
| [**voidDoc**](DocumentsApi.md#voiddoc) | **POST** /v1/documents/{id}/void | Void document |



## audit

> Array&lt;AuditEventDto&gt; audit(id)

Get document audit trail

Returns the ordered chain-of-custody events (sent, viewed, signed, declined, etc.) for the document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { AuditRequest } from '@signvoy/node';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AuditRequest;

  try {
    const data = await api.audit(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**Array&lt;AuditEventDto&gt;**](AuditEventDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## certificate

> UrlResponseDto certificate(id)

Get certificate of completion URL

Retrieves a presigned URL to download the standalone certificate of completion

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { CertificateRequest } from '@signvoy/node';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CertificateRequest;

  try {
    const data = await api.certificate(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**UrlResponseDto**](UrlResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document or certificate not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## create

> DocumentDto create(createDocumentDto)

Create a new document

Creates a document from a template with recipients for signing

### Example

```ts
import {
  Configuration,
  DocumentsApi,
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
  const api = new DocumentsApi(config);

  const body = {
    // CreateDocumentDto
    createDocumentDto: ...,
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
| **createDocumentDto** | [CreateDocumentDto](CreateDocumentDto.md) |  | |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Document created successfully |  -  |
| **400** | Invalid input data |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findOne

> DocumentDto findOne(id)

Get document by ID

Retrieves detailed information about a specific document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { FindOneRequest } from '@signvoy/node';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## list

> Array&lt;DocumentDto&gt; list(status, templateId, q)

List documents

Retrieves all documents in the workspace with optional filtering by status, template, or search query

### Example

```ts
import {
  Configuration,
  DocumentsApi,
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
  const api = new DocumentsApi(config);

  const body = {
    // 'draft' | 'sent' | 'in_progress' | 'completed' | 'declined' | 'voided' | 'expired' | Filter by document status (optional)
    status: sent,
    // string | Filter by template UUID (optional)
    templateId: 550e8400-e29b-41d4-a716-446655440000,
    // string | Search query for document name, recipient name, or email (optional)
    q: john,
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
| **status** | `draft`, `sent`, `in_progress`, `completed`, `declined`, `voided`, `expired` | Filter by document status | [Optional] [Defaults to `undefined`] [Enum: draft, sent, in_progress, completed, declined, voided, expired] |
| **templateId** | `string` | Filter by template UUID | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Search query for document name, recipient name, or email | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;DocumentDto&gt;**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of documents retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## remove

> remove(id)

Delete document

Permanently deletes a document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

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
| **204** | Document deleted |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## send

> DocumentDto send(id)

Send document for signing

Sends the document to recipients and transitions it to \&#39;sent\&#39; state

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { SendRequest } from '@signvoy/node';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SendRequest;

  try {
    const data = await api.send(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Document not in valid state for sending |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signedPdf

> UrlResponseDto signedPdf(id)

Get signed PDF URL

Retrieves a presigned URL to download the completed signed PDF

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { SignedPdfRequest } from '@signvoy/node';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SignedPdfRequest;

  try {
    const data = await api.signedPdf(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**UrlResponseDto**](UrlResponseDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found or not completed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update

> DocumentDto update(id, updateDocumentDto)

Update document

Updates document details (only allowed in draft state)

### Example

```ts
import {
  Configuration,
  DocumentsApi,
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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateDocumentDto
    updateDocumentDto: ...,
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |
| **updateDocumentDto** | [UpdateDocumentDto](UpdateDocumentDto.md) |  | |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid input or document not in draft state |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## voidDoc

> DocumentDto voidDoc(id)

Void document

Cancels the document and prevents further signing

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { VoidDocRequest } from '@signvoy/node';

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
  const api = new DocumentsApi(config);

  const body = {
    // string | Document UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies VoidDocRequest;

  try {
    const data = await api.voidDoc(body);
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
| **id** | `string` | Document UUID | [Defaults to `undefined`] |

### Return type

[**DocumentDto**](DocumentDto.md)

### Authorization

[clerk-jwt](../README.md#clerk-jwt), [api-key](../README.md#api-key), [workspace-id](../README.md#workspace-id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Document cannot be voided in current state |  -  |
| **403** | Forbidden - Not the document owner |  -  |
| **404** | Document not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

