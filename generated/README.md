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
import type { AiTemplateDetectFieldsRequest } from '@signvoy/node';

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
  } satisfies AiTemplateDetectFieldsRequest;

  try {
    const data = await api.aiTemplateDetectFields(body);
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
*AITemplatesApi* | [**aiTemplateDetectFields**](docs/AITemplatesApi.md#aitemplatedetectfields) | **POST** /v1/ai/templates/detect-fields | Detect fields on an already-uploaded PDF draft
*AITemplatesApi* | [**aiTemplateEditDraft**](docs/AITemplatesApi.md#aitemplateeditdraft) | **POST** /v1/ai/templates/{templateId}/edit | Edit an existing draft template with a natural-language instruction
*AITemplatesApi* | [**aiTemplateGenerate**](docs/AITemplatesApi.md#aitemplategenerate) | **POST** /v1/ai/templates/generate | Generate a template from a natural-language prompt
*APIKeysApi* | [**apiKeysCreate**](docs/APIKeysApi.md#apikeyscreate) | **POST** /v1/api-keys | Create an API key
*APIKeysApi* | [**apiKeysList**](docs/APIKeysApi.md#apikeyslist) | **GET** /v1/api-keys | List API keys
*APIKeysApi* | [**apiKeysRevoke**](docs/APIKeysApi.md#apikeysrevoke) | **DELETE** /v1/api-keys/{id} | Revoke an API key
*DocumentsApi* | [**documentsAudit**](docs/DocumentsApi.md#documentsaudit) | **GET** /v1/documents/{id}/audit | Get document audit trail
*DocumentsApi* | [**documentsCertificate**](docs/DocumentsApi.md#documentscertificate) | **GET** /v1/documents/{id}/certificate | Get certificate of completion URL
*DocumentsApi* | [**documentsCreate**](docs/DocumentsApi.md#documentscreate) | **POST** /v1/documents | Create a new document
*DocumentsApi* | [**documentsFindOne**](docs/DocumentsApi.md#documentsfindone) | **GET** /v1/documents/{id} | Get document by ID
*DocumentsApi* | [**documentsList**](docs/DocumentsApi.md#documentslist) | **GET** /v1/documents | List documents
*DocumentsApi* | [**documentsRemind**](docs/DocumentsApi.md#documentsremind) | **POST** /v1/documents/{id}/remind | Send a manual reminder
*DocumentsApi* | [**documentsRemove**](docs/DocumentsApi.md#documentsremove) | **DELETE** /v1/documents/{id} | Delete document
*DocumentsApi* | [**documentsSend**](docs/DocumentsApi.md#documentssend) | **POST** /v1/documents/{id}/send | Send document for signing
*DocumentsApi* | [**documentsSignedPdf**](docs/DocumentsApi.md#documentssignedpdf) | **GET** /v1/documents/{id}/signed-pdf | Get signed PDF URL
*DocumentsApi* | [**documentsUpdate**](docs/DocumentsApi.md#documentsupdate) | **PATCH** /v1/documents/{id} | Update document
*DocumentsApi* | [**documentsVoidDoc**](docs/DocumentsApi.md#documentsvoiddoc) | **POST** /v1/documents/{id}/void | Void document
*EmbedApi* | [**embedCreateSession**](docs/EmbedApi.md#embedcreatesession) | **POST** /v1/embed/session | Create an embed session
*HealthApi* | [**healthCheck**](docs/HealthApi.md#healthcheck) | **GET** /v1/health | Health check
*SigningApi* | [**signingDecline**](docs/SigningApi.md#signingdecline) | **POST** /v1/sign/{token}/decline | Decline to sign
*SigningApi* | [**signingGetContext**](docs/SigningApi.md#signinggetcontext) | **GET** /v1/sign/{token} | Get signing context
*SigningApi* | [**signingGetDraft**](docs/SigningApi.md#signinggetdraft) | **GET** /v1/sign/{token}/draft | Get saved draft
*SigningApi* | [**signingSaveDraft**](docs/SigningApi.md#signingsavedraft) | **POST** /v1/sign/{token}/draft | Save draft
*SigningApi* | [**signingSubmit**](docs/SigningApi.md#signingsubmit) | **POST** /v1/sign/{token}/submit | Submit signature
*SubmissionsApi* | [**submissionsList**](docs/SubmissionsApi.md#submissionslist) | **GET** /v1/submissions | List submissions for a document
*TemplateGalleryApi* | [**templateGalleryFindOne**](docs/TemplateGalleryApi.md#templategalleryfindone) | **GET** /v1/template-gallery/{slug} | Get a single gallery template
*TemplateGalleryApi* | [**templateGalleryInstantiate**](docs/TemplateGalleryApi.md#templategalleryinstantiate) | **POST** /v1/template-gallery/{slug}/instantiate | Instantiate a gallery template into the workspace
*TemplateGalleryApi* | [**templateGalleryList**](docs/TemplateGalleryApi.md#templategallerylist) | **GET** /v1/template-gallery | List gallery templates
*TemplateVersionsApi* | [**templateVersionsDiscardDraft**](docs/TemplateVersionsApi.md#templateversionsdiscarddraft) | **DELETE** /v1/templates/{templateId}/draft | Discard the current draft
*TemplateVersionsApi* | [**templateVersionsEnsureDraft**](docs/TemplateVersionsApi.md#templateversionsensuredraft) | **POST** /v1/templates/{templateId}/draft/ensure | Lazily create a draft from the published version (or empty)
*TemplateVersionsApi* | [**templateVersionsFindOne**](docs/TemplateVersionsApi.md#templateversionsfindone) | **GET** /v1/templates/{templateId}/versions/{versionId} | Get a specific version (read-only)
*TemplateVersionsApi* | [**templateVersionsGetDraft**](docs/TemplateVersionsApi.md#templateversionsgetdraft) | **GET** /v1/templates/{templateId}/draft | Get current draft version
*TemplateVersionsApi* | [**templateVersionsListVersions**](docs/TemplateVersionsApi.md#templateversionslistversions) | **GET** /v1/templates/{templateId}/versions | List all published + draft versions
*TemplateVersionsApi* | [**templateVersionsPublish**](docs/TemplateVersionsApi.md#templateversionspublish) | **POST** /v1/templates/{templateId}/draft/publish | Publish the draft
*TemplateVersionsApi* | [**templateVersionsUpsertDraft**](docs/TemplateVersionsApi.md#templateversionsupsertdraft) | **PATCH** /v1/templates/{templateId}/draft | Upsert draft content
*TemplatesApi* | [**templatesArchive**](docs/TemplatesApi.md#templatesarchive) | **POST** /v1/templates/{id}/archive | Archive template
*TemplatesApi* | [**templatesCreate**](docs/TemplatesApi.md#templatescreate) | **POST** /v1/templates | Create a new template
*TemplatesApi* | [**templatesFindOne**](docs/TemplatesApi.md#templatesfindone) | **GET** /v1/templates/{id} | Get template by id
*TemplatesApi* | [**templatesGetPdfUrl**](docs/TemplatesApi.md#templatesgetpdfurl) | **GET** /v1/templates/{id}/pdf | Get a presigned PDF URL for the latest version
*TemplatesApi* | [**templatesList**](docs/TemplatesApi.md#templateslist) | **GET** /v1/templates | List templates in the workspace
*TemplatesApi* | [**templatesRemove**](docs/TemplatesApi.md#templatesremove) | **DELETE** /v1/templates/{id} | Delete template
*TemplatesApi* | [**templatesUnarchive**](docs/TemplatesApi.md#templatesunarchive) | **POST** /v1/templates/{id}/unarchive | Unarchive template
*TemplatesApi* | [**templatesUpdate**](docs/TemplatesApi.md#templatesupdate) | **PATCH** /v1/templates/{id} | Update template metadata (name only)
*WebhooksApi* | [**webhooksCreate**](docs/WebhooksApi.md#webhookscreate) | **POST** /v1/webhooks | Create a webhook endpoint
*WebhooksApi* | [**webhooksGet**](docs/WebhooksApi.md#webhooksget) | **GET** /v1/webhooks/{id} | Get a single webhook endpoint
*WebhooksApi* | [**webhooksList**](docs/WebhooksApi.md#webhookslist) | **GET** /v1/webhooks | List webhook endpoints for the workspace
*WebhooksApi* | [**webhooksListDeliveries**](docs/WebhooksApi.md#webhookslistdeliveries) | **GET** /v1/webhooks/{id}/deliveries | List recent deliveries for an endpoint
*WebhooksApi* | [**webhooksPing**](docs/WebhooksApi.md#webhooksping) | **POST** /v1/webhooks/{id}/ping | Send a test event
*WebhooksApi* | [**webhooksRemove**](docs/WebhooksApi.md#webhooksremove) | **DELETE** /v1/webhooks/{id} | Delete a webhook endpoint
*WebhooksApi* | [**webhooksRetryDelivery**](docs/WebhooksApi.md#webhooksretrydelivery) | **POST** /v1/webhooks/{id}/deliveries/{deliveryId}/retry | Manually retry a failed delivery
*WebhooksApi* | [**webhooksRotateSecret**](docs/WebhooksApi.md#webhooksrotatesecret) | **POST** /v1/webhooks/{id}/rotate-secret | Rotate the signing secret
*WebhooksApi* | [**webhooksUpdate**](docs/WebhooksApi.md#webhooksupdate) | **PATCH** /v1/webhooks/{id} | Update a webhook endpoint
*WorkspacesApi* | [**workspacesCreate**](docs/WorkspacesApi.md#workspacescreate) | **POST** /v1/workspaces | Create a new workspace
*WorkspacesApi* | [**workspacesFindOne**](docs/WorkspacesApi.md#workspacesfindone) | **GET** /v1/workspaces/{id} | Get workspace by ID
*WorkspacesApi* | [**workspacesInvite**](docs/WorkspacesApi.md#workspacesinvite) | **POST** /v1/workspaces/{id}/members | Invite member to workspace
*WorkspacesApi* | [**workspacesList**](docs/WorkspacesApi.md#workspaceslist) | **GET** /v1/workspaces | List workspaces
*WorkspacesApi* | [**workspacesListInvitations**](docs/WorkspacesApi.md#workspaceslistinvitations) | **GET** /v1/workspaces/{id}/invitations | List pending invitations
*WorkspacesApi* | [**workspacesListMembers**](docs/WorkspacesApi.md#workspaceslistmembers) | **GET** /v1/workspaces/{id}/members | List workspace members
*WorkspacesApi* | [**workspacesRemove**](docs/WorkspacesApi.md#workspacesremove) | **DELETE** /v1/workspaces/{id} | Delete workspace
*WorkspacesApi* | [**workspacesRemoveMember**](docs/WorkspacesApi.md#workspacesremovemember) | **DELETE** /v1/workspaces/{id}/members/{userId} | Remove member from workspace
*WorkspacesApi* | [**workspacesRevokeInvitation**](docs/WorkspacesApi.md#workspacesrevokeinvitation) | **DELETE** /v1/workspaces/{id}/invitations/{invitationId} | Revoke invitation
*WorkspacesApi* | [**workspacesUpdate**](docs/WorkspacesApi.md#workspacesupdate) | **PATCH** /v1/workspaces/{id} | Update workspace
*WorkspacesApi* | [**workspacesUpdateMember**](docs/WorkspacesApi.md#workspacesupdatemember) | **PATCH** /v1/workspaces/{id}/members/{userId} | Update member role


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
- [ReminderSettingsDto](docs/ReminderSettingsDto.md)
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
