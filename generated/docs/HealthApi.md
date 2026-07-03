# HealthApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**check**](HealthApi.md#check) | **GET** /v1/health | Health check |



## check

> HealthCheck200Response check()

Health check

Returns the API health status and current timestamp

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@signvoy/node';
import type { CheckRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const api = new HealthApi();

  try {
    const data = await api.check();
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

[**HealthCheck200Response**](HealthCheck200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API is healthy and operational |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

