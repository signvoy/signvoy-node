
# DocumentRecipientDto


## Properties

Name | Type
------------ | -------------
`id` | string
`roleKey` | string
`roleName` | string
`name` | string
`email` | string
`color` | string
`order` | number
`status` | string
`signedAt` | number
`declinedAt` | number
`declineReason` | string
`signUrl` | string

## Example

```typescript
import type { DocumentRecipientDto } from '@signvoy/node'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "roleKey": null,
  "roleName": null,
  "name": null,
  "email": null,
  "color": null,
  "order": null,
  "status": null,
  "signedAt": null,
  "declinedAt": null,
  "declineReason": null,
  "signUrl": null,
} satisfies DocumentRecipientDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentRecipientDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


