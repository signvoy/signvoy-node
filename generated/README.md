# @signvoy/node@0.1.0

A TypeScript SDK client for the api.signvoy.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @signvoy/node --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *https://api.signvoy.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AITemplatesApi* | [**detectFields**](docs/AITemplatesApi.md#detectfields) | **POST** /v1/ai/templates/detect-fields | Detect fields on an already-uploaded PDF draft
*AITemplatesApi* | [**editDraft**](docs/AITemplatesApi.md#editdraft) | **POST** /v1/ai/templates/{templateId}/edit | Edit an existing draft template with a natural-language instruction
*AITemplatesApi* | [**generate**](docs/AITemplatesApi.md#generate) | **POST** /v1/ai/templates/generate | Generate a template from a natural-language prompt
*APIKeysApi* | [**create**](docs/APIKeysApi.md#create) | **POST** /v1/api-keys | Create an API key
*APIKeysApi* | [**list**](docs/APIKeysApi.md#list) | **GET** /v1/api-keys | List API keys
*APIKeysApi* | [**revoke**](docs/APIKeysApi.md#revoke) | **DELETE** /v1/api-keys/{id} | Revoke an API key
*DocumentsApi* | [**audit**](docs/DocumentsApi.md#audit) | **GET** /v1/documents/{id}/audit | Get document audit trail
*DocumentsApi* | [**certificate**](docs/DocumentsApi.md#certificate) | **GET** /v1/documents/{id}/certificate | Get certificate of completion URL
*DocumentsApi* | [**create**](docs/DocumentsApi.md#create) | **POST** /v1/documents | Create a new document
*DocumentsApi* | [**findOne**](docs/DocumentsApi.md#findone) | **GET** /v1/documents/{id} | Get document by ID
*DocumentsApi* | [**list**](docs/DocumentsApi.md#list) | **GET** /v1/documents | List documents
*DocumentsApi* | [**remove**](docs/DocumentsApi.md#remove) | **DELETE** /v1/documents/{id} | Delete document
*DocumentsApi* | [**send**](docs/DocumentsApi.md#send) | **POST** /v1/documents/{id}/send | Send document for signing
*DocumentsApi* | [**signedPdf**](docs/DocumentsApi.md#signedpdf) | **GET** /v1/documents/{id}/signed-pdf | Get signed PDF URL
*DocumentsApi* | [**update**](docs/DocumentsApi.md#update) | **PATCH** /v1/documents/{id} | Update document
*DocumentsApi* | [**voidDoc**](docs/DocumentsApi.md#voiddoc) | **POST** /v1/documents/{id}/void | Void document
*EmbedApi* | [**createSession**](docs/EmbedApi.md#createsession) | **POST** /v1/embed/session | Create an embed session
*HealthApi* | [**check**](docs/HealthApi.md#check) | **GET** /v1/health | Health check
*SigningApi* | [**decline**](docs/SigningApi.md#decline) | **POST** /v1/sign/{token}/decline | Decline to sign
*SigningApi* | [**getContext**](docs/SigningApi.md#getcontext) | **GET** /v1/sign/{token} | Get signing context
*SigningApi* | [**getDraft**](docs/SigningApi.md#getdraft) | **GET** /v1/sign/{token}/draft | Get saved draft
*SigningApi* | [**saveDraft**](docs/SigningApi.md#savedraft) | **POST** /v1/sign/{token}/draft | Save draft
*SigningApi* | [**submit**](docs/SigningApi.md#submit) | **POST** /v1/sign/{token}/submit | Submit signature
*SubmissionsApi* | [**list**](docs/SubmissionsApi.md#list) | **GET** /v1/submissions | List submissions for a document
*TemplateGalleryApi* | [**findOne**](docs/TemplateGalleryApi.md#findone) | **GET** /v1/template-gallery/{slug} | Get a single gallery template
*TemplateGalleryApi* | [**instantiate**](docs/TemplateGalleryApi.md#instantiate) | **POST** /v1/template-gallery/{slug}/instantiate | Instantiate a gallery template into the workspace
*TemplateGalleryApi* | [**list**](docs/TemplateGalleryApi.md#list) | **GET** /v1/template-gallery | List gallery templates
*TemplateVersionsApi* | [**discardDraft**](docs/TemplateVersionsApi.md#discarddraft) | **DELETE** /v1/templates/{templateId}/draft | Discard the current draft
*TemplateVersionsApi* | [**ensureDraft**](docs/TemplateVersionsApi.md#ensuredraft) | **POST** /v1/templates/{templateId}/draft/ensure | Lazily create a draft from the published version (or empty)
*TemplateVersionsApi* | [**findOne**](docs/TemplateVersionsApi.md#findone) | **GET** /v1/templates/{templateId}/versions/{versionId} | Get a specific version (read-only)
*TemplateVersionsApi* | [**getDraft**](docs/TemplateVersionsApi.md#getdraft) | **GET** /v1/templates/{templateId}/draft | Get current draft version
*TemplateVersionsApi* | [**listVersions**](docs/TemplateVersionsApi.md#listversions) | **GET** /v1/templates/{templateId}/versions | List all published + draft versions
*TemplateVersionsApi* | [**publish**](docs/TemplateVersionsApi.md#publish) | **POST** /v1/templates/{templateId}/draft/publish | Publish the draft
*TemplateVersionsApi* | [**upsertDraft**](docs/TemplateVersionsApi.md#upsertdraft) | **PATCH** /v1/templates/{templateId}/draft | Upsert draft content
*TemplatesApi* | [**archive**](docs/TemplatesApi.md#archive) | **POST** /v1/templates/{id}/archive | Archive template
*TemplatesApi* | [**create**](docs/TemplatesApi.md#create) | **POST** /v1/templates | Create a new template
*TemplatesApi* | [**findOne**](docs/TemplatesApi.md#findone) | **GET** /v1/templates/{id} | Get template by id
*TemplatesApi* | [**getPdfUrl**](docs/TemplatesApi.md#getpdfurl) | **GET** /v1/templates/{id}/pdf | Get a presigned PDF URL for the latest version
*TemplatesApi* | [**list**](docs/TemplatesApi.md#list) | **GET** /v1/templates | List templates in the workspace
*TemplatesApi* | [**remove**](docs/TemplatesApi.md#remove) | **DELETE** /v1/templates/{id} | Delete template
*TemplatesApi* | [**unarchive**](docs/TemplatesApi.md#unarchive) | **POST** /v1/templates/{id}/unarchive | Unarchive template
*TemplatesApi* | [**update**](docs/TemplatesApi.md#update) | **PATCH** /v1/templates/{id} | Update template metadata (name only)
*WebhooksApi* | [**create**](docs/WebhooksApi.md#create) | **POST** /v1/webhooks | Create a webhook endpoint
*WebhooksApi* | [**get**](docs/WebhooksApi.md#get) | **GET** /v1/webhooks/{id} | Get a single webhook endpoint
*WebhooksApi* | [**list**](docs/WebhooksApi.md#list) | **GET** /v1/webhooks | List webhook endpoints for the workspace
*WebhooksApi* | [**listDeliveries**](docs/WebhooksApi.md#listdeliveries) | **GET** /v1/webhooks/{id}/deliveries | List recent deliveries for an endpoint
*WebhooksApi* | [**ping**](docs/WebhooksApi.md#ping) | **POST** /v1/webhooks/{id}/ping | Send a test event
*WebhooksApi* | [**remove**](docs/WebhooksApi.md#remove) | **DELETE** /v1/webhooks/{id} | Delete a webhook endpoint
*WebhooksApi* | [**retryDelivery**](docs/WebhooksApi.md#retrydelivery) | **POST** /v1/webhooks/{id}/deliveries/{deliveryId}/retry | Manually retry a failed delivery
*WebhooksApi* | [**rotateSecret**](docs/WebhooksApi.md#rotatesecret) | **POST** /v1/webhooks/{id}/rotate-secret | Rotate the signing secret
*WebhooksApi* | [**update**](docs/WebhooksApi.md#update) | **PATCH** /v1/webhooks/{id} | Update a webhook endpoint
*WorkspacesApi* | [**create**](docs/WorkspacesApi.md#create) | **POST** /v1/workspaces | Create a new workspace
*WorkspacesApi* | [**findOne**](docs/WorkspacesApi.md#findone) | **GET** /v1/workspaces/{id} | Get workspace by ID
*WorkspacesApi* | [**invite**](docs/WorkspacesApi.md#invite) | **POST** /v1/workspaces/{id}/members | Invite member to workspace
*WorkspacesApi* | [**list**](docs/WorkspacesApi.md#list) | **GET** /v1/workspaces | List workspaces
*WorkspacesApi* | [**listInvitations**](docs/WorkspacesApi.md#listinvitations) | **GET** /v1/workspaces/{id}/invitations | List pending invitations
*WorkspacesApi* | [**listMembers**](docs/WorkspacesApi.md#listmembers) | **GET** /v1/workspaces/{id}/members | List workspace members
*WorkspacesApi* | [**remove**](docs/WorkspacesApi.md#remove) | **DELETE** /v1/workspaces/{id} | Delete workspace
*WorkspacesApi* | [**removeMember**](docs/WorkspacesApi.md#removemember) | **DELETE** /v1/workspaces/{id}/members/{userId} | Remove member from workspace
*WorkspacesApi* | [**revokeInvitation**](docs/WorkspacesApi.md#revokeinvitation) | **DELETE** /v1/workspaces/{id}/invitations/{invitationId} | Revoke invitation
*WorkspacesApi* | [**update**](docs/WorkspacesApi.md#update) | **PATCH** /v1/workspaces/{id} | Update workspace
*WorkspacesApi* | [**updateMember**](docs/WorkspacesApi.md#updatemember) | **PATCH** /v1/workspaces/{id}/members/{userId} | Update member role


### Models

- [ApiKeyDto](docs/ApiKeyDto.md)
- [AuditEventDto](docs/AuditEventDto.md)
- [CreateApiKeyDto](docs/CreateApiKeyDto.md)
- [CreateDocumentDto](docs/CreateDocumentDto.md)
- [CreateDocumentRecipientDto](docs/CreateDocumentRecipientDto.md)
- [CreateEmbedSessionDto](docs/CreateEmbedSessionDto.md)
- [CreateTemplateDto](docs/CreateTemplateDto.md)
- [CreateTemplateResponseDto](docs/CreateTemplateResponseDto.md)
- [CreateWebhookDto](docs/CreateWebhookDto.md)
- [CreateWorkspaceDto](docs/CreateWorkspaceDto.md)
- [CreatedApiKeyDto](docs/CreatedApiKeyDto.md)
- [DeclineDto](docs/DeclineDto.md)
- [DocumentDto](docs/DocumentDto.md)
- [DocumentRecipientDto](docs/DocumentRecipientDto.md)
- [EmbedSessionResponseDto](docs/EmbedSessionResponseDto.md)
- [ErrorResponseDto](docs/ErrorResponseDto.md)
- [ErrorResponseDtoMessage](docs/ErrorResponseDtoMessage.md)
- [HealthCheck200Response](docs/HealthCheck200Response.md)
- [InviteMemberDto](docs/InviteMemberDto.md)
- [SaveDraftDto](docs/SaveDraftDto.md)
- [SubmitSigningDto](docs/SubmitSigningDto.md)
- [TemplateUrlResponseDto](docs/TemplateUrlResponseDto.md)
- [TemplateVersionDto](docs/TemplateVersionDto.md)
- [TemplateWithVersionsDto](docs/TemplateWithVersionsDto.md)
- [UpdateDocumentDto](docs/UpdateDocumentDto.md)
- [UpdateMemberDto](docs/UpdateMemberDto.md)
- [UpdateTemplateDto](docs/UpdateTemplateDto.md)
- [UpdateWebhookDto](docs/UpdateWebhookDto.md)
- [UpdateWorkspaceDto](docs/UpdateWorkspaceDto.md)
- [UrlResponseDto](docs/UrlResponseDto.md)
- [WebhookDeliveryDto](docs/WebhookDeliveryDto.md)
- [WebhookEndpointDto](docs/WebhookEndpointDto.md)
- [WebhookEndpointWithSecretDto](docs/WebhookEndpointWithSecretDto.md)

### Authorization


Authentication schemes defined for the API:
<a id="api-key"></a>
#### api-key


- **Type**: HTTP Bearer Token authentication (API key)
<a id="clerk-jwt"></a>
#### clerk-jwt


- **Type**: HTTP Bearer Token authentication (Clerk JWT)
<a id="workspace-id"></a>
#### workspace-id


- **Type**: API key
- **API key parameter name**: `X-Workspace-Id`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0`
- Package version: `0.1.0`
- Generator version: `7.24.0-SNAPSHOT`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
