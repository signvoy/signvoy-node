# WorkspacesApi

All URIs are relative to *https://api.signvoy.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create**](WorkspacesApi.md#create) | **POST** /v1/workspaces | Create a new workspace |
| [**findOne**](WorkspacesApi.md#findone) | **GET** /v1/workspaces/{id} | Get workspace by ID |
| [**invite**](WorkspacesApi.md#invite) | **POST** /v1/workspaces/{id}/members | Invite member to workspace |
| [**list**](WorkspacesApi.md#list) | **GET** /v1/workspaces | List workspaces |
| [**listInvitations**](WorkspacesApi.md#listinvitations) | **GET** /v1/workspaces/{id}/invitations | List pending invitations |
| [**listMembers**](WorkspacesApi.md#listmembers) | **GET** /v1/workspaces/{id}/members | List workspace members |
| [**remove**](WorkspacesApi.md#remove) | **DELETE** /v1/workspaces/{id} | Delete workspace |
| [**removeMember**](WorkspacesApi.md#removemember) | **DELETE** /v1/workspaces/{id}/members/{userId} | Remove member from workspace |
| [**revokeInvitation**](WorkspacesApi.md#revokeinvitation) | **DELETE** /v1/workspaces/{id}/invitations/{invitationId} | Revoke invitation |
| [**update**](WorkspacesApi.md#update) | **PATCH** /v1/workspaces/{id} | Update workspace |
| [**updateMember**](WorkspacesApi.md#updatemember) | **PATCH** /v1/workspaces/{id}/members/{userId} | Update member role |



## create

> create(createWorkspaceDto)

Create a new workspace

Creates a team workspace for collaborative document management

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { CreateRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // CreateWorkspaceDto
    createWorkspaceDto: ...,
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
| **createWorkspaceDto** | [CreateWorkspaceDto](CreateWorkspaceDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Workspace created successfully |  -  |
| **400** | Invalid input data |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findOne

> findOne(id)

Get workspace by ID

Retrieves detailed information about a specific workspace

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { FindOneRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Workspace retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Not a member of this workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invite

> invite(id, inviteMemberDto)

Invite member to workspace

Sends an invitation to join the workspace (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { InviteRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // InviteMemberDto
    inviteMemberDto: ...,
  } satisfies InviteRequest;

  try {
    const data = await api.invite(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **inviteMemberDto** | [InviteMemberDto](InviteMemberDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Invitation sent successfully |  -  |
| **400** | Invalid email or user already a member |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## list

> list()

List workspaces

Retrieves all workspaces the user has access to. Automatically provisions personal workspace if needed.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { ListRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

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

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of workspaces retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listInvitations

> listInvitations(id)

List pending invitations

Retrieves all pending invitations for a workspace

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { ListInvitationsRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListInvitationsRequest;

  try {
    const data = await api.listInvitations(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of invitations retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Not a member of this workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMembers

> listMembers(id)

List workspace members

Retrieves all active members of a workspace

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { ListMembersRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListMembersRequest;

  try {
    const data = await api.listMembers(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of members retrieved successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Not a member of this workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## remove

> remove(id)

Delete workspace

Permanently deletes a workspace (owner only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { RemoveRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Workspace deleted successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Only owner can delete workspace |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeMember

> removeMember(id, userId)

Remove member from workspace

Removes a member from the workspace (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { RemoveMemberRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | User ID of the member to remove
    userId: userId_example,
  } satisfies RemoveMemberRequest;

  try {
    const data = await api.removeMember(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **userId** | `string` | User ID of the member to remove | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Member removed successfully |  -  |
| **400** | Cannot remove workspace owner |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace or member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeInvitation

> revokeInvitation(id, invitationId)

Revoke invitation

Cancels a pending workspace invitation (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { RevokeInvitationRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Invitation UUID
    invitationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RevokeInvitationRequest;

  try {
    const data = await api.revokeInvitation(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **invitationId** | `string` | Invitation UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Invitation revoked successfully |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace or invitation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update

> update(id, updateWorkspaceDto)

Update workspace

Updates workspace name (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { UpdateRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWorkspaceDto
    updateWorkspaceDto: ...,
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **updateWorkspaceDto** | [UpdateWorkspaceDto](UpdateWorkspaceDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Workspace updated successfully |  -  |
| **400** | Invalid input data |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMember

> updateMember(id, userId, updateMemberDto)

Update member role

Changes a member\&#39;s role in the workspace (owner/admin only)

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@signvoy/node';
import type { UpdateMemberRequest } from '@signvoy/node';

async function example() {
  console.log("🚀 Testing @signvoy/node SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clerk-jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Workspace UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | User ID of the member to update
    userId: userId_example,
    // UpdateMemberDto
    updateMemberDto: ...,
  } satisfies UpdateMemberRequest;

  try {
    const data = await api.updateMember(body);
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
| **id** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **userId** | `string` | User ID of the member to update | [Defaults to `undefined`] |
| **updateMemberDto** | [UpdateMemberDto](UpdateMemberDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[clerk-jwt](../README.md#clerk-jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Member role updated successfully |  -  |
| **400** | Invalid role or cannot modify owner |  -  |
| **401** | Unauthorized - Invalid or missing JWT token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Workspace or member not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

