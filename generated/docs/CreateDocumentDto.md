
# CreateDocumentDto


## Properties

Name | Type
------------ | -------------
`templateId` | string
`name` | string
`message` | string
`routingMode` | string
`reminders` | [ReminderSettingsDto](ReminderSettingsDto.md)
`recipients` | [Array&lt;CreateDocumentRecipientDto&gt;](CreateDocumentRecipientDto.md)

## Example

```typescript
import type { CreateDocumentDto } from '@signvoy/node'

// TODO: Update the object below with actual values
const example = {
  "templateId": 550e8400-e29b-41d4-a716-446655440000,
  "name": Q4 2025 Contract Agreement,
  "message": Please review and sign this document at your earliest convenience.,
  "routingMode": null,
  "reminders": null,
  "recipients": null,
} satisfies CreateDocumentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDocumentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


