# SigningApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**decline**](SigningApi.md#decline) | **POST** /v1/sign/{token}/decline | Decline to sign |
| [**getContext**](SigningApi.md#getcontext) | **GET** /v1/sign/{token} | Get signing context |
| [**getDraft**](SigningApi.md#getdraft) | **GET** /v1/sign/{token}/draft | Get saved draft |
| [**saveDraft**](SigningApi.md#savedraft) | **POST** /v1/sign/{token}/draft | Save draft |
| [**submit**](SigningApi.md#submit) | **POST** /v1/sign/{token}/submit | Submit signature |



## decline

> decline(token, declineDto)

Decline to sign

Allows recipient to decline signing the document with a reason

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/node';
import type { DeclineRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
    // DeclineDto
    declineDto: ...,
  } satisfies DeclineRequest;

  try {
    const data = await api.decline(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |
| **declineDto** | [DeclineDto](DeclineDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Document declined successfully |  -  |
| **400** | Invalid decline reason or document already processed |  -  |
| **401** | Invalid or expired signing token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContext

> getContext(token)

Get signing context

Retrieves document and field information for a recipient using their signing token

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/node';
import type { GetContextRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
  } satisfies GetContextRequest;

  try {
    const data = await api.getContext(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signing context retrieved successfully |  -  |
| **401** | Invalid or expired signing token |  -  |
| **404** | Document or recipient not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDraft

> getDraft(token)

Get saved draft

Retrieves previously saved draft values for the recipient

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/node';
import type { GetDraftRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Draft retrieved successfully |  -  |
| **204** | No draft exists |  -  |
| **401** | Invalid or expired signing token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveDraft

> saveDraft(token, saveDraftDto)

Save draft

Saves recipient\&#39;s progress without submitting the document

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/node';
import type { SaveDraftRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
    // SaveDraftDto
    saveDraftDto: ...,
  } satisfies SaveDraftRequest;

  try {
    const data = await api.saveDraft(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |
| **saveDraftDto** | [SaveDraftDto](SaveDraftDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Draft saved successfully |  -  |
| **400** | Invalid field values |  -  |
| **401** | Invalid or expired signing token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submit

> submit(token, submitSigningDto)

Submit signature

Submits the completed document with recipient\&#39;s signatures and data

### Example

```ts
import {
  Configuration,
  SigningApi,
} from '@signvoy/node';
import type { SubmitRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const api = new SigningApi();

  const body = {
    // string | Unique signing token sent to recipient
    token: token_example,
    // SubmitSigningDto
    submitSigningDto: ...,
  } satisfies SubmitRequest;

  try {
    const data = await api.submit(body);
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
| **token** | `string` | Unique signing token sent to recipient | [Defaults to `undefined`] |
| **submitSigningDto** | [SubmitSigningDto](SubmitSigningDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Document submitted successfully |  -  |
| **400** | Invalid or incomplete field values |  -  |
| **401** | Invalid or expired signing token |  -  |
| **409** | Document already submitted or in invalid state |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

