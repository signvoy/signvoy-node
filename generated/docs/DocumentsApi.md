# DocumentsApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**documentsAudit**](DocumentsApi.md#documentsaudit) | **GET** /v1/documents/{id}/audit | Get document audit trail |
| [**documentsCertificate**](DocumentsApi.md#documentscertificate) | **GET** /v1/documents/{id}/certificate | Get certificate of completion URL |
| [**documentsCreate**](DocumentsApi.md#documentscreate) | **POST** /v1/documents | Create a new document |
| [**documentsFindOne**](DocumentsApi.md#documentsfindone) | **GET** /v1/documents/{id} | Get document by ID |
| [**documentsList**](DocumentsApi.md#documentslist) | **GET** /v1/documents | List documents |
| [**documentsRemove**](DocumentsApi.md#documentsremove) | **DELETE** /v1/documents/{id} | Delete document |
| [**documentsSend**](DocumentsApi.md#documentssend) | **POST** /v1/documents/{id}/send | Send document for signing |
| [**documentsSignedPdf**](DocumentsApi.md#documentssignedpdf) | **GET** /v1/documents/{id}/signed-pdf | Get signed PDF URL |
| [**documentsUpdate**](DocumentsApi.md#documentsupdate) | **PATCH** /v1/documents/{id} | Update document |
| [**documentsVoidDoc**](DocumentsApi.md#documentsvoiddoc) | **POST** /v1/documents/{id}/void | Void document |



## documentsAudit

> Array&lt;AuditEventDto&gt; documentsAudit(id)

Get document audit trail

Returns the ordered chain-of-custody events (sent, viewed, signed, declined, etc.) for the document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsAuditRequest } from '@signvoy/node';

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
  } satisfies DocumentsAuditRequest;

  try {
    const data = await api.documentsAudit(body);
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


## documentsCertificate

> UrlResponseDto documentsCertificate(id)

Get certificate of completion URL

Retrieves a presigned URL to download the standalone certificate of completion

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsCertificateRequest } from '@signvoy/node';

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
  } satisfies DocumentsCertificateRequest;

  try {
    const data = await api.documentsCertificate(body);
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


## documentsCreate

> DocumentDto documentsCreate(createDocumentDto)

Create a new document

Creates a document from a template with recipients for signing

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsCreateRequest } from '@signvoy/node';

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
  } satisfies DocumentsCreateRequest;

  try {
    const data = await api.documentsCreate(body);
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


## documentsFindOne

> DocumentDto documentsFindOne(id)

Get document by ID

Retrieves detailed information about a specific document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsFindOneRequest } from '@signvoy/node';

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
  } satisfies DocumentsFindOneRequest;

  try {
    const data = await api.documentsFindOne(body);
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


## documentsList

> Array&lt;DocumentDto&gt; documentsList(status, templateId, q)

List documents

Retrieves all documents in the workspace with optional filtering by status, template, or search query

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsListRequest } from '@signvoy/node';

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
  } satisfies DocumentsListRequest;

  try {
    const data = await api.documentsList(body);
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


## documentsRemove

> documentsRemove(id)

Delete document

Permanently deletes a document

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsRemoveRequest } from '@signvoy/node';

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
  } satisfies DocumentsRemoveRequest;

  try {
    const data = await api.documentsRemove(body);
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


## documentsSend

> DocumentDto documentsSend(id)

Send document for signing

Sends the document to recipients and transitions it to \&#39;sent\&#39; state

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsSendRequest } from '@signvoy/node';

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
  } satisfies DocumentsSendRequest;

  try {
    const data = await api.documentsSend(body);
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


## documentsSignedPdf

> UrlResponseDto documentsSignedPdf(id)

Get signed PDF URL

Retrieves a presigned URL to download the completed signed PDF

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsSignedPdfRequest } from '@signvoy/node';

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
  } satisfies DocumentsSignedPdfRequest;

  try {
    const data = await api.documentsSignedPdf(body);
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


## documentsUpdate

> DocumentDto documentsUpdate(id, updateDocumentDto)

Update document

Updates document details (only allowed in draft state)

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsUpdateRequest } from '@signvoy/node';

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
  } satisfies DocumentsUpdateRequest;

  try {
    const data = await api.documentsUpdate(body);
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


## documentsVoidDoc

> DocumentDto documentsVoidDoc(id)

Void document

Cancels the document and prevents further signing

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@signvoy/node';
import type { DocumentsVoidDocRequest } from '@signvoy/node';

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
  } satisfies DocumentsVoidDocRequest;

  try {
    const data = await api.documentsVoidDoc(body);
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

