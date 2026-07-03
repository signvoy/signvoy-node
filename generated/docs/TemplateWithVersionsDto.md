
# TemplateWithVersionsDto


## Properties

Name | Type
------------ | -------------
`id` | string
`workspaceId` | string
`ownerId` | string
`name` | string
`archivedAt` | number
`createdAt` | number
`updatedAt` | number
`currentDraftVersionId` | object
`currentPublishedVersionId` | object
`draftVersion` | [TemplateVersionDto](TemplateVersionDto.md)
`publishedVersion` | [TemplateVersionDto](TemplateVersionDto.md)

## Example

```typescript
import type { TemplateWithVersionsDto } from '@signvoy/node'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "workspaceId": null,
  "ownerId": null,
  "name": null,
  "archivedAt": null,
  "createdAt": null,
  "updatedAt": null,
  "currentDraftVersionId": null,
  "currentPublishedVersionId": null,
  "draftVersion": null,
  "publishedVersion": null,
} satisfies TemplateWithVersionsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemplateWithVersionsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


